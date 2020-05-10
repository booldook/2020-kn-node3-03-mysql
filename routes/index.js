const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/main", (req, res, next) => {
	res.send('<h1>MAIN</h1>');
});

router.get("/event", (req, res, next) => {
	res.send('<h1>EVENT</h1>');
});

module.exports = router;