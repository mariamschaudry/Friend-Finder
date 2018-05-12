// Dependencies //
var path = require("path");

// Load Data // 

var friends= require("../data/friends.js");

// Export API Routes //

module.exports = function(app) {

    // List of friends (GET request) //
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Add a new friend (POST request) //
    app.post("/api/friends", function(req, res) {

        // Grab data that user inputted //
        var input = req.body;
        var response = input.scores;

        // Compute compatability //
        var matchName = ""; 
        var matchImage = ""; 
        var totalDifference = 10000;

        // Examine existing friends in the list //
        for (var i = 0; i < friends.length; i++) {

            // Compute the differences //
            var difference = 0; 
            for (var j = 0; j < response.length; j++) {
                difference += Math.abs(friends[i].scores[j] - response[j]);
            }

            // If lowest difference, record friend match // 
            if (difference < totalDifference) {
                totalDifference = difference; 
                matchName = friends[i].name;
                matchImage = friends [i].photo;
            }

        }

        // Add the new user //
        friends.push(input); 

        // Send appropriate response //
        res.json({status: "OK", matchName: matchName, matchImage: matchImage})

    });
};