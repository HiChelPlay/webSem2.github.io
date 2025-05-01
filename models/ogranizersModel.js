const db = require('../config/db');

const getAllOgranizers = async () => {
    const result = await db.query('SELECT * FROM ogranizers');
    return result.rows;
};

const addOgranizers = async (name, telephone, mail) => {
    const result = await db.query(
        'INSERT INTO ogranizers (name, telephone, mail) VALUES ($1, $2, $3) RETURNING *',
        [name, telephone, mail]
    );
    return result.rows[0];
};

const updateOgranizers = async (id, name, telephone, mail) => {
    const result = await db.query(
        'UPDATE ogranizers SET name = $1, telephone = $2, mail = $3 WHERE id = $4 RETURNING *',
        [name, telephone, mail, id]
    );
    return result.rows[0];
};

const deleteOgranizers = async (id) => {
    const result = await db.query(
        'DELETE FROM ogranizers WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

module.exports = {
    getAllOgranizers,
    addOgranizers,
    updateOgranizers,
    deleteOgranizers
};
