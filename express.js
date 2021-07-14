const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
const port = 4000;

const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./site");
app.use(express.static(publicDirectoryPath));
const port = process.env.PORT || 3000;

let myArray = [
  { src: "assets/img/portfolio/portfolio-1.jpg", title: "App 1" },
  { src: "assets/img/portfolio/portfolio-2.jpg", title: "App 2" },
  { src: "assets/img/portfolio/portfolio-3.jpg", title: "App 3" },
  { src: "assets/img/portfolio/portfolio-4.jpg", title: "App 4" },
  { src: "assets/img/portfolio/portfolio-5.jpg", title: "App 5" },
];

app.get("", (req, res) => {
  res.render("index", { myArray: myArray });
});

app.get("*", (req, res) => {
  res.render("index");
});

app.post("/thankyou", (req, res) => {
  console.log(req.body);
  let name = "";
  if (req.body.name) {
    name = req.body.name;
  }
  res.render("thankyou", { name: name });
});

app.listen(port, () => {
  console.log("Server started on port:" + port + "!");
});
