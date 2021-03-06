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
        routeName: "john",
        name: "John",
        phone: "000-000-000",
        email:  "john@example.com",
        
    },
    {
        routeName: "sanjana",
        name: "Sanjana",
        phone: "100-000-000",
        email:  "sanjana@example.com",
        
    },
    {
        routeName: "divyansh",
        name: "Divyansh",
        phone: "110-000-000",
        email:  "divyansh@example.com",
        
    }
]

var waiting = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

app.get("/api/diners", function(req, res) {
    return res.json({obj1: diner, obj2: waiting});
  });

app.get("/api/diners/:name", function(req, res) {
    var chosen = req.params.name;
  
    console.log(chosen);
  
    for (var i = 0; i < diner.length; i++) {
      if (chosen === diner[i].routeName) {
        return res.json(diner[i]);
      }
    }
  
    return res.json(false);
  });


    app.post("/api/diners", function(req, res){
        var newDiner = req.body;
        newDiner.routeName = newDiner.name.replace(/\s+/g, "").toLowerCase();
        console.log(newDiner);
        if(diner.length < 3){
            
            diner.push(newDiner);
            res.json(newDiner);
        }
        else{
            
            waiting.push(newDiner);
            res.json(newDiner);
        }
        
        
        
    });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });