const itemModel = require('../models/itemModel');

const getItems = async (req, res) => {
    try {
        const items = await itemModel.getAllItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createItem = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newItem = await itemModel.addItem(name, description);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const updatedItem = await itemModel.updateItem(id, name, description);
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedItem = await itemModel.deleteItem(id);
        res.status(200).json(deletedItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem
};
