var axios = require("axios");
var cheerio = require("cheerio");

var db = require("../server/db")


var hottest = function() {
    axios.get("https://boardgamegeek.com/browse/boardgame").then(function(response) {
        
        var $ = cheerio.load(response.data);
        var information = [];

        // console.log(response);

        $("#row_").each(function(i, element) {
            let data = {};
            data.image = $(element).children(".collection_thumbnail").children("a").children("img")[0].attribs.src;
            // data.name = $(element).children("td")[2].children[3].children[0]
            data.name = $(element).find("a").eq(2).text()
            data.link = $(element).children("td")[1].children[1].attribs.href
            // .children("div")[1].children("a")
            information.push(data);

            // Check if item exists before adding a new one
            db.Game.countDocuments({name: data.name}, function(err, count) {
                if(count>0) {
                    console.log("Item exists: ", data.name)
                }
                else {
                    db.Game.create(data)
                    .then(function(dbGame) {
                      // View the added result in the console
                      console.log("Success, added: ", dbGame);
                    })
                    .catch(function(err) {
                      // If an error occurred, log it
                      console.log(err);
                    });        
                }
            })
    
        })
    });
}

module.exports = hottest;