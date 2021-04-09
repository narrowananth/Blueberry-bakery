// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000


app.use(express.static("public"));


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {


  res.render("list");

});



app.get("/list", function(req, res) {


  res.render("list");

});


app.get("/about", function(req, res) {


  res.render("about");

});


app.get("/contact", function(req, res) {


  res.render("contact");

});

app.get("/privacy", function(req, res) {


  res.render("privacy");

});



app.get("/product", function(req, res) {


res.render("product");

});



app.get("/prd1", function(req, res) {


  res.render("prd1", {
    img_name: "Vintage Black Forest Cake",
    img_url: "https://www.cakeworld.in/images/web/171.jpg",
    img_amt: "650"

  });

});
app.get("/prd2", function(req, res) {

  res.render("prd2", {
    img_name: "Perfect Pineapple Cake",
    img_url: "https://www.cakeworld.in/images/web/101.jpg",
    img_amt: "650"

  });

});
app.get("/prd3", function(req, res) {

  res.render("prd3", {
    img_name: "Impressive Butterscotch Cake",
    img_url: "https://www.cakeworld.in/images/web/134.jpg",
    img_amt: "650 "

});
});
app.get("/prd4", function(req, res) {

  res.render("prd4", {
    img_name: "Addicting Choco Truffle Cake",
    img_url: "https://www.cakeworld.in/images/web/102.jpg",
    img_amt: "2799"

  });

});
app.get("/prd5", function(req, res) {

  res.render("prd5", {
    img_name: "Crunchy Pineapple Cake",
    img_url: "https://www.cakeworld.in/images/web/pic-103.jpg",
    img_amt: "650 "

  });

});
app.get("/prd6", function(req, res) {

  res.render("prd6", {
    img_name: "Sensual Pineapple Cake",
    img_url: "https://www.cakeworld.in/images/web/104.jpg",
    img_amt: "650"

  });

});
app.get("/prd7", function(req, res) {

  res.render("prd7", {
    img_name: "Satisfying Choco Mocha Cake",
    img_url: "https://www.cakeworld.in/images/web/105.jpg",
    img_amt: "700"

  });

});
app.get("/prd8", function(req, res) {

  res.render("prd8", {
    img_name: "Cookie Oreo Cake",
    img_url: "https://www.cakeworld.in/images/web/107.jpg",
    img_amt: "800"

  });

});
app.get("/prd9", function(req, res) {

  res.render("prd9", {
    img_name: "Smooth Choco Truffle Cake",
    img_url: "https://www.cakeworld.in/images/web/108.jpg",
    img_amt: "750"

  });

});
app.get("/prd10", function(req, res) {

  res.render("prd10", {
    img_name: "Eccentric Fruit Cake",
    img_url: "https://www.cakeworld.in/images/web/109.jpg",
    img_amt: "1050 "

  });

});
app.get("/prd11", function(req, res) {

  res.render("prd11", {
    img_name: "Amazing Strawberry Cake",
    img_url: "https://www.cakeworld.in/images/web/110.jpg",
    img_amt: "650"
  });

});
app.get("/prd12", function(req, res) {

  res.render("prd12", {
    img_name: "Loveable Choco Truffle Cake",
    img_url: "https://www.cakeworld.in/images/web/112.jpg",
    img_amt: "750"

  });

});
app.get("/prd13", function(req, res) {

  res.render("prd13", {
    img_name: "Rich Strawberry Cake",
    img_url: "https://www.cakeworld.in/images/web/113.jpg",
    img_amt: "650"

  });

});
app.get("/prd14", function(req, res) {

  res.render("prd14", {
    img_name: "Fresh Vanilla Cake",
    img_url: "https://www.cakeworld.in/images/web/114.jpg",
    img_amt: "2800"

  });

});
app.get("/prd15", function(req, res) {

  res.render("prd15", {
    img_name: "Duple Number Shape Cake",
    img_url: "https://www.cakeworld.in/images/web/115.jpg",
    img_amt: "2200"

  });

});
app.get("/prd16", function(req, res) {

  res.render("prd16", {
    img_name: "Luxury Vanilla Cake",
    img_url: "https://www.cakeworld.in/images/web/117.jpg",
    img_amt: "650"

  });

});
app.get("/prd17", function(req, res) {

  res.render("prd17", {
    img_name: "Celebrative Tier Cake",
    img_url: "https://www.cakeworld.in/images/web/118.jpg",
    img_amt: "4200 "

  });

});
app.get("/prd18", function(req, res) {

  res.render("prd18", {
    img_name: "Photo Cake",
    img_url: "https://www.cakeworld.in/images/web/119.jpg",
    img_amt: "800"

  });

});
app.get("/prd19", function(req, res) {

  res.render("prd19", {
    img_name: "Delightful Choco Truffle Cake",
    img_url: "https://www.cakeworld.in/images/web/120.jpg",
    img_amt: "1800 "

  });

});
app.get("/prd20", function(req, res) {

  res.render("prd20", {
    img_name: "Authentic Choco Truffle Cake",
    img_url: "https://www.cakeworld.in/images/web/121.jpg",
    img_amt: "750 "

  });

});



app.listen(port, function() {
  console.log("server is started");
});
