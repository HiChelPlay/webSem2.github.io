const volunteersModel = require('../models/volunteersModel');

const getVolunteers = async (req, res) => {
    try {
        const volunteers = await volunteersModel.getAllVolunteers();
	res.status(200).json(volunteers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createVolunteers = async (req, res) => {
    const { name, telephone, mail } = req.body;
    try {
        const newVolunteers = await volunteersModel.addVolunteers(name, telephone, mail);
        res.status(201).json(newVolunteers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateVolunteers = async (req, res) => {
    const { id } = req.params;
    const { name, telephone, mail } = req.body;
    try {
        const updatedVolunteers = await volunteersModel.updateVolunteers(id, name, telephone, mail);
        res.status(200).json(updatedVolunteers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteVolunteers = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedVolunteers = await volunteersModel.deleteVolunteers(id);
        res.status(200).json(deletedVolunteers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getVolunteers,
    createVolunteers,
    updateVolunteers,
    deleteVolunteers
};
