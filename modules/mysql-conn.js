const mysql = require('mysql2/promise');
const pool = mysql.createPool({
	host: "localhost",
	port: 3307,
	user: "root",
	password: "000000",
	database: "node",
	waitForConnections: true,
	connectionLimit: 10,
});

module.exports = { mysql, pool };