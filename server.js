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

var diner = [
    {
        routeName: "john1",
        name: "john1",
        phone: "000-000-000",
        email: "john@example.com",
        iswaiting : false
    },
    {
        routeName: "john2",
        name: "John2",
        phone: "000-000-000",
        email: "john@example.com",
        iswaiting : false
    },
    {
        routeName: "john3",
        name: "John3",
        phone: "000-000-000",
        email: "john@example.com",
        iswaiting : false
    },
    {
        routeName: "john4",
        name: "John4",
        phone: "000-000-000",
        email: "john@example.com",
        iswaiting : false
    },
    {
        routeName: "john5",
        name: "John5",
        phone: "000-000-000",
        email: "john@example.com",
        iswaiting : false
    }
]

var waitingDiners = [
    {
        routeName: "test",
        name: "test",
        phone: "000-000-000",
        email: "test@example.com",
        iswaiting : true
    }
]



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/diners", function (req, res) {
    return res.json({
        object1: diner, object2: waitingDiners
        });
});


app.get("/api/diners/:name", function (req, res) {
    var chosen = req.params.name;

    console.log(chosen);

    for (var i = 0; i < diner.length; i++) {
        if (chosen === diner[i].routeName) {
            return res.json(diner[i]);
        }
    }

    return res.json(false);
});


// Create New Characters - takes in JSON input
app.post("/api/diners", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newdiner = req.body;

    if (diner.length <= 5) {
        newdiner.routeName = newdiner.name.replace(/\s+/g, "").toLowerCase();
        console.log(newdiner);
        diner.push(newdiner);
        res.json(newdiner);

    } else {
        newdiner.routeName = newdiner.name.replace(/\s+/g, "").toLowerCase();
        console.log(newdiner);
        waitingDiners.push(newdiner);
        res.json(newdiner);
    }


});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


