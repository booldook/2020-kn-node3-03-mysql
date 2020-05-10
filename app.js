const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');
const moment = require('moment');

/* Mysql */
const connect = mysql.createConnection({
	host: "localhost",
	port: 3307,
	database: "node",
	user: "root",
	password: "000000",
});

/* View engine */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", express.static(path.join(__dirname, "./public")));

/* Server */
app.listen(3000, () => {
	console.log('http://127.0.0.1:3000');
});

/* Routers */
app.get("/insert", (req, res, next) => {
	let sql = 'INSERT INTO sample SET username=?, age=?, comment=?, created=?';
	let values = ['홍길룡', 34, '누이를 누이라...', moment().format('YYYY-MM-DD HH:mm:ss')];
	connect.execute(sql, values, (err, result) => {
		if(err) res.json(err);
		else res.json(result);
	});
});