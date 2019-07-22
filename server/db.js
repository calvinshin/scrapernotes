// Mongo initialize
var mongoose = require("mongoose");
var db = require("../models");
MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/scrapernotes'
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

module.exports = db;