const db = require('../config/db');

const getAllVolunteers = async () => {
    const result = await db.query('SELECT * FROM volunteers');
    return result.rows;
};

const addVolunteers = async (name, telephone, mail) => {
    const result = await db.query(
        'INSERT INTO volunteers (name, telephone, mail) VALUES ($1, $2, $3) RETURNING *',
        [name, telephone, mail]
    );
    return result.rows[0];
};

const updateVolunteers = async (id, name, telephone, mail) => {
    const result = await db.query(
        'UPDATE volunteers SET name = $1, telephone = $2, mail = $3 WHERE id = $4 RETURNING *',
        [name, telephone, mail, id]
    );
    return result.rows[0];
};

const deleteVolunteers = async (id) => {
    const result = await db.query(
        'DELETE FROM volunteers WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

module.exports = {
    getAllVolunteers,
    addVolunteers,
    updateVolunteers,
    deleteVolunteers
};
