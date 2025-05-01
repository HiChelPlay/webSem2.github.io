const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

router.get('/events', eventsController.getEvents);
router.post('/events', eventsController.createEvents);
router.put('/events/:id', eventsController.updateEvents);    // Добавлено
router.delete('/events/:id', eventsController.deleteEvents); // Добавлено

module.exports = router;
