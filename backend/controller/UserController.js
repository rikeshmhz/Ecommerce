const User=require("../model/userModel")
const Token=require("../model/TokenModel")
const sendEmail=require("../sendEmail")
const cryto=require("crypto")
const jwt=require('jsonwebtoken')
const expressjwt=require('express-jwt')

exports.register=async(req,res)=>{
    // destructuring 
    const {username,email,password}=req.body
    const user=await User.findOne({email:email})
    if(user){
       return res.status(400).json({error:"User already exist"})
    }
    let register=new User({
        username:username,
        email:email,
        password:password
    })
    register=await register.save()
    if(!register){
        return res.status(400).json({error:"Something went wrong"})
    }
    let token=await Token({
        token:cryto.randomBytes(16).toString('hex'),
        user:register._id
    })
    token=await token.save()
    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    }
    // send varification mail
    const url=`http://localhost:3000/user/verification/${token.token}`
    sendEmail({
        from:"noreplay@gmail.com",
        to:email,
        subject:"Verification Mail",
        text:"Click the following link"+url,
        html:`<a href=${url}><button>Click This Link</button></a>`
    })
    res.send(register)
}

exports.verifyuser=async(req,res)=>{
    let token=await Token.findOne({token:req.params.id})
    if(!token){
        return res.status(400).json({err:"Invalid token or token may have expire"})
    }
    let verify=await User.findById(token.user)
    if(!verify){
        return res.status(400).json({err:"User associated with token not found"})
    }
    // check if the user is verified or not
    if(verify.isVerified){
        return res.status(400).json({err:"User has already been verified"})
    }
    verify.isVerified=true
    verify=await verify.save()
    if(!verify){
        return res.status(400).json({err:"Something went wrong"})
    }
    res.send({message:"User Verified Successfully"})
}
exports.resendverification=async(req,res)=>{
    const {email}=req.body
    let user=await User.findOne({email:email})
    if(!user){
        return res.status(400).json({err:"user not found"})
    }
    if(user.isVerified){
        return res.status(400).json({err:"User has been already verified"})
    }
    let token = new Token({
        token:cryto.randomBytes(16).toString('hex'),   
        user:user._id
    })
    token=await token.save()
    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    }
    // send varification mail
    const url=`http://localhost:3000/user/verification/${token.token}`
    sendEmail({
        from:"noreplay@gmail.com",
        to:email,
        subject:"Verification Mail",
        text:"Click the following link"+url,
        html:`<a href=${url}><button>Click This Link</button></a>`
    })
    res.json({msg:"message send"})
}
exports.getalluser=async(req,res)=>{
    let user=await User.find()
    if(!user){
        return res.status(400).json({error:"Something Went Wrong"})
    }
    return res.send(user)
}
exports.forgetPassword=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({err:"Email not found"}) 
    }
    let token = new Token({
        token:cryto.randomBytes(16).toString('hex'),
        user:user._id
    })
    token=await token.save()
    if(!token){
        return res.status(400).json({err:"Something went wrong"})
    }
    const url=`http://localhost:3000/user/resetpassword/${token.token}`
    sendEmail({
        from:"noreplay@gmail.com",
        to:user.email,
        subject:"Reset Password Link",
        text:"Click the following link"+url,
        html:`<a href=${url}><button>Click This Link</button></a>`
    })
    res.json({msg:"Password Reset Link send"})
}
exports.resetPassword=async(req,res)=>{
    let token=await Token.findOne({token:req.params.id})
    if(!token){
        res.status(400).json({err:"Token Invalid or may have expire"})
    }
    let user=await User.findById(token.user)
    if(!user){
        return res.status(400).json({err:"User not found"})
    }
    user.password=req.body.password
    user=await user.save()
    if(!user){
        return res.status(400).json({err:"Something went wrong"})
    }
    res.send({msg:"Password Updated"})
}
exports.singleuserdetail=async(req,res)=>{
    let user=await User.findById(req.params.id)
    if(!user){
        return res.status(400).json({err:"User not found"})
    }
    res.send(user)
}
exports.updateuser=async(req,res)=>{
    let user=await User.findByIdAndUpdate(req.params.id,{
        username:req.body.username,
        email:req.body.email
    })
    if(!user){
        return res.status(400).json({error:"Something went wrong"})
    }
    user=await user.save()
    res.status(200).json({mess:"User Updated"})
}
exports.deleteuser=async(req,res)=>{
    let user=await User.findByIdAndDelete(req.params.id)
    if(!user){
        return res.starus(400).json({err:"Something went wrong"})
    }
    res.send({sucess:"User deleted"})
}
exports.signIn=async(req,res)=>{
    let {email,password}=req.body
    let user=await User.findOne({email:email})
    if(!user){
        return res.status(400).json({err:"User not found"})
    }
    // check password
    if(!user.authenticate(password)){
        return res.status(400).json({err:"Password not match"})
    }
    if(!user.isVerified){
        return res.status(400).json({err:"User not verified please verify"})
    }
    // generate token
    let token=jwt.sign({user:user._id,role:user.role},process.env.JWT_SECRET)
    // storing in cookie
    res.cookie('mycookie',token,{expire:Date.now()+86400})
    // sending information to frontend
    const{_id,username,role}=user
    res.send({token,user:{
        _id,username,email,role
    }})
}
exports.signout=async(req,res)=>{
    res.clearCookie('mycookie')
    res.send({message:"Signed out Successfully"})
}
exports.authorize=expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })