const express = require('express');
const router = express.Router();
const ogranizersController = require('../controllers/ogranizersController');

router.get('/ogranizers', ogranizersController.getOgranizers);
router.post('/ogranizers', ogranizersController.createOgranizers);
router.put('/ogranizers/:id', ogranizersController.updateOgranizers);    // Добавлено
router.delete('/ogranizers/:id', ogranizersController.deleteOgranizers); // Добавлено

module.exports = router;
