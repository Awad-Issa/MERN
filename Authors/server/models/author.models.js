const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [3, "Three chrs at least"]
    }
} , {timestamps:true} );

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author
