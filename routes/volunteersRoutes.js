const express = require('express');
const router = express.Router();
const volunteersController = require('../controllers/volunteersController');

router.get('/volunteers', volunteersController.getVolunteers);
router.post('/volunteers', volunteersController.createVolunteers);
router.put('/volunteers/:id', volunteersController.updateVolunteers);    // Добавлено
router.delete('/volunteers/:id', volunteersController.deleteVolunteers); // Добавлено

module.exports = router;
