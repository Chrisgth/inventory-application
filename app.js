const express = require("express");
const mongoose = require("mongoose");
const Item = require("./models/items.js");
require("dotenv").config();

const app = express();
const dbURI = process.env.DB_URI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    console.log("connected to db and listening on port 3000");
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Index" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "Create Item" });
});

app.get("/pop", (req, res) => {
  res.render("tempopulate");
});

app.post("/create", (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then((response) => {
      console.log(response);
      res.redirect("/create");
    })
    .catch((err) => console.log(err));
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Page not Found" });
});
