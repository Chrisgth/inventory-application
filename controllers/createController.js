const Item = require("../models/items.js");

const create_index_get = (req, res) => {
  res.render("create", { title: "Create Item" });
};

const create_post = (req, res, next) => {
  const item = new Item(req.body);
  console.log(item)

  item
    .save()
    .then((response) => {
      res.redirect('/create')
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create_index_get,
  create_post,
};
