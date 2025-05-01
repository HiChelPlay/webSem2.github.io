const eventsModel = require('../models/eventsModel');

const getEvents = async (req, res) => {
    try {
        const events = await eventsModel.getAllEvents();
	res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createEvents = async (req, res) => {
    const { name, date } = req.body;
    try {
        const newEvents = await eventsModel.addEvents(name, date);
        res.status(201).json(newEvents);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateEvents = async (req, res) => {
    const { id } = req.params;
    const { name, date } = req.body;
    try {
        const updatedEvents = await eventsModel.updateEvents(id, name, date);
        res.status(200).json(updatedEvents);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteEvents = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEvents = await eventsModel.deleteEvents(id);
        res.status(200).json(deletedEvents);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getEvents,
    createEvents,
    updateEvents,
    deleteEvents
};
