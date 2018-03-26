require('../config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const { mongoose } = require('../db/mongoose');
const { User } = require('../models/user');

const port = process.env.PORT;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// app.get('/posts', (req, res) => {
// 	res.send({
// 		title: 'Hello world!',
// 		description: 'This is just a description',
// 	})
// });

app.post('/auth/login', (req, res) => {
	let body = _.pick(req.body, ['email', 'password']);

	User.findByCredentials(body.email, body.password)
		.then(user => {
			return user.generateAuthToken()
				.then(token => {
					res.header('x-auth', token).send(user);
				});
		})
		.catch(e => {
			res.status(400).send(e);
		})
});

app.listen(port, () => {
	console.log(`Starting server on port ${port}`);
});