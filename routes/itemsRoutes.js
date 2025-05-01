const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/items', itemsController.getItems);
router.post('/items', itemsController.createItem);
router.put('/items/:id', itemsController.updateItem);    // Добавлено
router.delete('/items/:id', itemsController.deleteItem); // Добавлено

module.exports = router;
