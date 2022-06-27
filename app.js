const express = require("express");
const mongoose = require("mongoose");
const Item = require("./models/items.js");
const invRoutes = require("./routes/invRoutes.js");

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

app.use("/", invRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "Page not Found" });
});
