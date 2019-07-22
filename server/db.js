// Mongo initialize
var mongoose = require("mongoose");
var db = require("../models");
MONGODB_URI = process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds353457.mlab.com:53457/heroku_r0h0bj3v"
// 'mongodb://localhost/scrapernotes' || 
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

module.exports = db;