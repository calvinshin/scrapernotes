// Mongo initialize
var mongoose = require("mongoose");
var db = require("../models");
mongoose.connect('mongodb://localhost/scrapernotes', {useNewUrlParser: true});

module.exports = db;