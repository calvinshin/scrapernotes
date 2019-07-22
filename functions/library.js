// hottest : hottest = require("./hottest"),
// display : display = require("./display"),
// showgames : showgames = require("./showgames")

var library = {
    // Scrape the data from the file
    hottest : hottest = require("./hottest"),
    // Display the front page, the application does not provide a json but instead renders the page.
    display : display = require("./display"),
    // Shows the games from the mongodb
    showgames : showgames = require("./showgames"),
    // Provides a json of the data based off an _id
    gameFind : gameFind = require("./gameFind")
    
}

module.exports = library