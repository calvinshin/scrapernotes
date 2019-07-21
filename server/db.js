// Mongo initialize
var mongoose = require("mongoose");
var db = require("../models");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/scrapernotes', {useNewUrlParser: true});

module.exports = db;