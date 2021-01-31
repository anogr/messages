const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const database = require('./database/')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/messages', function (req, res) {
	res.send(JSON.stringify(database.messages));
});

app.post('/messages', function (req, res) {
	const message = req.body;
	const id = database.addMessage(message);
	res.send({id});
});

app.listen(process.env.PORT || 8080);
