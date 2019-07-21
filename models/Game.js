var mongoose = require("mongoose");

// Database configuration
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const gameSchema = new Schema({
    name : String,
    image : String,
    link : String,
    notes : {
        type: Schema.Types.ObjectId, 
        ref: "Note"
    }
})

const Game = mongoose.model("Game", gameSchema) 

module.exports = Game;