const { Client } = require('pg');

const client = new Client({
    user: 'myuser',
    host: 'localhost',
    database: 'mydb',
    password: 'mypassword',
    port: 5432,
});

client.connect();

module.exports = client;
