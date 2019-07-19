var express = require("express");

// Initialize the router for express
router = express.Router();

// Shows all valid routes below
router.get("/", function(req, res) {
    res.send("Hello");
});


module.exports = router;