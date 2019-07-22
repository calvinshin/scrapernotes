var express = require("express");
var library = require("../functions/library");

// Initialize the router for express
router = express.Router();

// Shows all valid routes below

router.get("/", function(req, res) {
    if (res) {
        library.showgames(res)
    }   
})

router.get("/hottest", function(req,res) {
    res.send(library.hottest());
})

router.get("/games", function(req, res) {
// First grab the data from the mongo database
// Then render this into the page.
    if (res) {
        library.showgames(res);
    }    
})

router.get("/games/:id", function(req, res) {
    library.gameFind(req, res);
})

router.get("*", function(req, res) {
    res.send("Hello");
});

module.exports = router;