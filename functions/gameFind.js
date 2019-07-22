db = require("../server/db")

gameFind = function(req, res) {
    db.Game.findOne({_id: req.params.id})
    .populate("note")
    .then(function(dbGame) {
        res.json(dbGame);
    }).catch(function(err) {
        res.json(err);
    });
}

module.exports = gameFind;