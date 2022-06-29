const { model } = require("mongoose");
const Item = require("../models/items");

const inv_index = (req, res) => {

  let page = parseInt(req.query.page)
  let limit = parseInt(req.query.limit)

  if( isNaN(page) ) {
    page = 1
  }

  if ( isNaN(limit) ) {
    limit = 6
  }

  let totalPages = 0

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  Item.find().limit(limit).skip(startIndex).sort({ createdAt: -1 })
    .then((result) => {
      Item.count()
      .then((count) => {
        totalPages = Math.ceil(count/limit)
        if (totalPages < page) {
          res.render('404', { title: '404 Not Found' })
        } else {
          res.render("index", { title: "Inventory", items: result, pageCount: totalPages, limit: limit });
        }
      })
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
