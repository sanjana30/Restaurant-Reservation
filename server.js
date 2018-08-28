// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var diners = [
    {
        routeName: "Mytest",
        name: "test",
        phone: "512000111",
        email: "test@gmail.com",
    },

    {
        routeName: "test2",
        name: "test2",
        phone: "512000111",
        email: "test2@gmail.com",
    }
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


// Displays all diners
app.get("/api/diners", function (req, res) {
    return res.json(diners);
});

// Displays a single diner, or returns false
app.get("/api/diners/:diner", function (req, res) {
    var chosen = req.params.diner;

    console.log(chosen);

    for (var i = 0; i < diner.length; i++) {
        if (chosen === diner[i].routeName) {
            return res.json(diner[i]);
        }
    }

    return res.json(false);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});