const Item = require("../models/items");

const inv_index = (req, res) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Inventory", items: result });
      console.log(result);
    });
};

module.exports = {
  inv_index,
};
