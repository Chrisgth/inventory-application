const express = require("express");
const invController = require("../controllers/invController");
const createController = require("../controllers/createController");

const invRouter = express.Router();

invRouter.get("/", invController.inv_index);
invRouter.get("/create", createController.create_index_get);
invRouter.post("/create", createController.create_post);
invRouter.delete('/:id', invController.inv_item_delete)
invRouter.get('/edit/:id', invController.inv_item_edit)
invRouter.post('/edit/:id', invController.inv_item_update)

module.exports = invRouter;
