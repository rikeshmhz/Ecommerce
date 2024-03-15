const express=require("express")
const app=express()
require('dotenv').config()
const cors=require('cors')
const testroute=require('./routes/testroute')
const categoryroute=require('./routes/CategoryRoute')
const productroute=require('./routes/ProductRoute')
const userroute=require("./routes/UserRoute")
const orderroute=require('./routes/OrderRoute')
const payment=require('./routes/PaymentRoute')

require('./database/connection')
port=process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})

app.use(express.json())//It parses incoming JSON requests and puts the parsed data in req.body
app.use(cors())
app.use(testroute)
app.use('/category',categoryroute)
app.use("/product",productroute)
app.use("/user",userroute)
app.use("/order",orderroute)
app.use("/public/uploads",express.static('public/uploads'))
app.use("",payment)
console.log("Hello")
