const express = require('express');
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();

// CRUD Routes
router.get('/', getItems);
router.post('/', createItem);
router.put('/', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
