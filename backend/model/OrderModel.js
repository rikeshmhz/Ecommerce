let mongoose=require('mongoose')
let {ObjectId}=mongoose.Schema

let orderSchema=new mongoose.Schema({
    orderItems:[{
        type:ObjectId,
        ref:"OrderItem",
    }],
    user:{
        type:ObjectId,
        ref:"User"
    },
    shipping_address:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    alternative_shipping_address:{
        type:String
    },
    city:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"Pending"
    }
},{timestamps:true})
module.exports=mongoose.model("Order",orderSchema)
