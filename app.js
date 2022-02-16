
 const express = require('express');
 const bodyParser = require('body-parser');

 const app = express();

 app.use(bodyParser.urlencoded({extended: true}));

 app.set('view engine', 'ejs');

 var items = ["Buy Food", "Cook Food"];

app.get("/", function (req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  var currentDay = today.toLocaleDateString(undefined, options);



  res.render("index", {
    currentDay: currentDay,
    currentItems: items
  });
});

app.post("/", function(req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});


 app.listen(3000, function(req, res) {
   console.log("Server running at port 3000");
 })
