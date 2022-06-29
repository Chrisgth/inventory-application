const Item = require("../models/items");

const inv_index = (req, res) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Inventory", items: result });
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
      res.render('edit', { item: response, title: 'Edit' })
    })
    .catch((err) => {
      res.render('404', {title: 'Item not found'})
    })
}

const inv_item_update = (req, res) => {
  const item = req.body

  Item.findByIdAndUpdate(req.params.id, item)
    .then((response) => {
      res.redirect('/')
    })
    .catch(err => console.log(err))
}

module.exports = {
  inv_index,
  inv_item_delete,
  inv_item_edit,
  inv_item_update
};
