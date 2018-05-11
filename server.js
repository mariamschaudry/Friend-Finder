// Dependencies //

var express = require("express"); 
var bodyparser = require("body-parser"); 
var path = require("path"); 

// Express configuration //

var app = express ();
var PORT = process.env.PORT || 8080; 

// Data parsing middleware //

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Router //

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener //

app.listen(PORT, function() {
    console.log("Friend-Finder app is listening on PORT: " + PORT);
});
