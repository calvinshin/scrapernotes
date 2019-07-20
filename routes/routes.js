var express = require("express");
var library = require("../functions/library");

// Initialize the router for express
router = express.Router();

// Shows all valid routes below
router.get("/", function(req, res) {
    res.send("Hello");
});

router.get("/hottest", function(req,res) {
    library.hottest();
})

module.exports = router;