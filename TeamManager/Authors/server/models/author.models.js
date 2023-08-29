const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [2, "Two characters at least"]
    },
    position:{
        type: String
    }
} , {timestamps:true} );

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player
