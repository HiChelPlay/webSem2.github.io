const ogranizersModel = require('../models/ogranizersModel');

const getOgranizers = async (req, res) => {
    try {
        const ogranizers = await ogranizersModel.getAllOgranizers();
	res.status(200).json(ogranizers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createOgranizers = async (req, res) => {
    const { name, telephone, mail } = req.body;
    try {
        const newOgranizers = await ogranizersModel.addOgranizers(name, telephone, mail);
        res.status(201).json(newOgranizers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateOgranizers = async (req, res) => {
    const { id } = req.params;
    const { name, telephone, mail } = req.body;
    try {
        const updatedOgranizers = await ogranizersModel.updateOgranizers(id, name, telephone, mail);
        res.status(200).json(updatedOgranizers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteOgranizers = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedOgranizers = await ogranizersModel.deleteOgranizers(id);
        res.status(200).json(deletedOgranizers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getOgranizers,
    createOgranizers,
    updateOgranizers,
    deleteOgranizers
};
