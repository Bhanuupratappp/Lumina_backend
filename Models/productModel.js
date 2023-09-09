const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image: {type: String, rquired: true},
    name: {type: String, required: true  },
    price: {type: String, required: true},
    category: {type: String, required: true},
    type: {type:String, required:true},
    brand: {type:String, required:true}

})

const Product = mongoose.model("Product", productSchema)

module.exports = {Product}