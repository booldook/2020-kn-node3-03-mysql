const express = require('express');
const app = express();
const path = reqire('path');

/* View engine */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* Server */
app.listen(3000, () => {
	console.log('http://127.0.0.1:3000');
});

/* Routers */