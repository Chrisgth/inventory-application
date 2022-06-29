const Item = require("../models/items");

const inv_index = (req, res) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Inventory", items: result });
      console.log(result);
    });
};
const inv_item_delete = (req, res) => {
  const id = req.params.id

  Item.findByIdAndDelete(id)
    .then((response) => {
      res.json({redirect: '/'})
    })
    .catch(err => console.log(err))
}

const inv_item_edit = (req, res) => {
  const id = req.params.id

  Item.findById(id)
    .then((response) => {
      res.render('edit', { item: response })
    })
    .catch((err) => {
      res.render('404', {title: 'Item not found'})
    })
}

module.exports = {
  inv_index,
  inv_item_delete,
  inv_item_edit
};
