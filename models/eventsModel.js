const db = require('../config/db');

const getAllEvents = async () => {
    const result = await db.query('SELECT * FROM events');
    return result.rows;
};

const addEvents = async (name, date) => {
    const result = await db.query(
        'INSERT INTO events (name, date) VALUES ($1, $2) RETURNING *',
        [name, date]
    );
    return result.rows[0];
};

const updateEvents = async (id, name, date) => {
    const result = await db.query(
        'UPDATE events SET name = $1, date = $2 WHERE id = $3 RETURNING *',
        [name, date, id]
    );
    return result.rows[0];
};

const deleteEvents = async (id) => {
    const result = await db.query(
        'DELETE FROM events WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

module.exports = {
    getAllEvents,
    addEvents,
    updateEvents,
    deleteEvents
};
