const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const userRouter = require("./Router/userRoute")
const productRouter = require("./Router/productRoute")



const connection = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://bhanuupratapp:bhanu@cluster0.vqbnihy.mongodb.net/luminaData?retryWrites=true&w=majority')
        console.log("connected")
    }
    catch(err){
        console.log(err)
    }
}


app.use("/product", productRouter)
app.use("/users", userRouter)

app.listen(8080,()=>{
    connection()
    console.log("on port 8080 now")
})