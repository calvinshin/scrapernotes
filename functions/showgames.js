db = require("../server/db");

showgames = function(res) {db.Game.find({})
    .then(function(dbGame) {
         res.render("display", {game: dbGame});
    })
    .catch(function(err) {
        res.json("Error: ", err);
    });
}

module.exports = showgames;