const express = require("express");
//middle ware
const morgan = require("morgan");

const app = express();

//register view engine
app.set("view engine", "ejs");

//listen
app.listen(3000);

//middle ware & static files
//yung express.static middle ware sya na ginagamit para sa mga static files yung public naman yan yung folder na papayagan niya pumasok sa ating mga files
app.use(express.static("public"));
//use morgan middle ware
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home page" });
});
