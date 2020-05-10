const express = require('express');
const app = express();
const path = require('path');

/* Server */
app.listen(3000, () => {
	console.log('http://127.0.0.1:3000');
});

/* Setting */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true;

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", express.static(path.join(__dirname, './public')));

/* Router */
const indexRouter = require('./routes/index');
const memberRouter = require('./routes/member');
const boardRouter = require('./routes/board');
app.use("/", indexRouter);
app.use("/member", memberRouter);
app.use("/board", boardRouter);

