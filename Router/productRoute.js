const express = require("express")
const router = express.Router()
const {Product} = require("../Models/productModel")





router.post("/addProduct", async (req,res)=>{
    try{
        let {image, name , price, category, type, brand} = req.body
        const obj={
            image,
            name,  
            price,
            category,
            type,
            brand,

        }
        const post = await Product.create(obj)
        res.status(201).json({post})
    }
    catch(err){
        res.status(500).json({message:err})
    }
})

// router.get("/getProducts",async (req,res)=>{
//     // const {category} = req.query
    
//     try{
//         const products  = await Product.find()
//         res.json(products);

//     }catch(error){
//         res.status(500).json({message:"Error fetching products",error})
//     }
// })

router.get("/getProducts",async (req,res)=>{
    try{
        const {sortField, sortOrder} = req.query
        let sortOptions ={}

        if (sortField && sortOrder) {
            sortOptions[sortField] = sortOrder === 'asc' ? 1 : -1;
          }

          const products = await Product.find().sort(sortOptions)

          if (sortField === 'price') {
            products.sort((a, b) => {
              const priceA = parseFloat(a.price);
              const priceB = parseFloat(b.price);
              return sortOrder === 'asc' ? priceA - priceB : 'desc'? priceB - priceA : null;
            });
          }

          res.json(products)
    }catch(error){
        res.status(500).json({error:'server error'})
    }
})

module.exports= router