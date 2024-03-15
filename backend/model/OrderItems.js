let mongoose=require('mongoose')
let {ObjectId}=mongoose.Schema

let orderitemSchema=new mongoose.Schema({
    product:{
        type:ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model("OrderItem",orderitemSchema)