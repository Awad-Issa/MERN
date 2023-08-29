const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
        title: {
            type: String,
            required : [true , "Title is required"],
            minlength : [2 , "Title must be at least 2 characters"]
        },
        price: {
            type: Number,
            required : [true , "Price is required"],
            minlength : [1 , "Price is required"]
        },
        description: {
            type: String,
            required : [true , "Description is required"],
            minlength : [2 , "Description must be at least 5 chrc"]
        },

    },
    { timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at'} }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;