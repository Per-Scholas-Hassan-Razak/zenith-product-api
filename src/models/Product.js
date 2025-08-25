const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    name:{
        type:String, 
        required:[true, "Name is a required field"]
    },
    description:{
        type:String, 
        required:[true, "Description is a required field"]
    },
    price:{
        type:Number, 
        min:[0.01, "Price must be greater than 0"],
        required:[true], 
    },
    category:{
        type:String, 
        required:[true, "Category is a required field"]
    },
    inStock:{
        type:Boolean, 
        default:true
    },
    tags:{
        type:[String]
    }, 
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product

