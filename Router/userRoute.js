const express = require("express")
const router = express.Router()
const {User} = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// router.get("/",async (req,res)=>{
//     try{
//         res.send("hello")
//     }catch(err){
//         console.log(err)
//     }
// })

router.post("/register", async (req,res)=>{
    try{
        const {number}= req.body

        const user = await User.findOne({number})

        if(user){
            return res.json({data:number})
        }
        
        const newuser = await User.create({number})
        res.status(201).json(newuser)
    }
    catch(err){
        res.status(500).json({message:err})
    }
})

module.exports= router