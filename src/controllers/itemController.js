const Item = require('../models/itemModel')

// Get all items
const getItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items', error });
    }
};

// Create an item
const createItem = async (req, res) => {
    try {
        const { name, quantity, price, purchased } = req.body;
        const newItem = await Item.create({ name, quantity, price, purchased });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: 'Error creating item', error })
    }
};

// Update an item
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const item = await Itemtem.findByPk(id)
        if (!item) return res.status(404).json({ message: 'Item not found' });

        await item.update(updates);
        res.json(item);
    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error });
    }
};

// Delete an item
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByPk(id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        await item.destroy();
        res.json({ message: 'Item deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting item', error});
    }
};

module.exports = { getItems, createItem, updateItem, deleteItem };