const mysql = require('mysql2/promise');

async function conectar() {
    const connection = mysql.createConnection({
        host: 'sql10.freemysqlhosting.net',
        database: 'sql10644353',
        user: 'sql10644353',
        password: 'RKJiI3V5nv',
        port: '3306'
      });

    return connection;
}

module.exports = {conectar}