const express = require('express');
const path = require('path');
const router = express.Router();
const { mysql, pool } = require("../modules/mysql-conn");

router.get("/list", async (req, res, next) => {
	let sql = "SELECT * FROM sample";
	const result = await pool.execute(sql);
	res.json(result[0]);
})


module.exports = router;