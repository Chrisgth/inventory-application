const Item = require("../models/items.js");

const create_index_get = (req, res) => {
  res.render("create", { title: "Create Item" });
};

const create_post = (req, res) => {
  const item = new Item(req.body);

  item
    .save()
    .then((response) => {
      console.log(response);
      res.redirect("/create");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create_index_get,
  create_post,
};
