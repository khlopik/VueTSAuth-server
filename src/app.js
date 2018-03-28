require('../config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');

const { mongoose } = require('../db/mongoose');
const { User } = require('../models/user');
let { authenticate } = require('../middleware/authenticate');

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

app.post('/users', (req, res) => {
	let user = new User(_.pick(req.body, ['email', 'password']));
	user.access = 'Resident';
	user.save()
		.then(() => {
			return user.generateAuthToken();
			// res.send({user});
		})
		.then(token => {
			res.header({
				'Access-Control-Expose-Headers': 'x-auth',
				'x-auth': token,
			}).status(200).send(_.pick(user, ['_id', 'access', 'email']));
		})
		.catch(e => {
			console.log('e: ', e);
			res.status(400).send(e);
		});
});

app.patch('/users/:id', authenticate, (req, res) => {
	let id = req.params.id;
	let details = _.pick(req.body, ['name', 'avatar']);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	User.findOneAndUpdate({_id: id }, { $set: { details } })
		.then(user => {
			if (!user) {
				return res.status(404).send();
			}
			console.log('details: ', details);
			return res.send(user);
		})
		.catch(error => {
			res.status(400).send();
		});
});

app.post('/auth/login', (req, res) => {
	let body = _.pick(req.body, ['email', 'password']);

	User.findByCredentials(body.email, body.password)
		.then(user => {
			return user.generateAuthToken()
				.then(token => {
					res.header({
						'Access-Control-Expose-Headers': 'x-auth',
						'x-auth': token,
					}).send(_.pick(user, ['_id', 'access', 'email']));
				});
		})
		.catch(e => {
			res.status(400).send(e);
		})
});

app.get('/auth/me', authenticate, (req, res) => {
	res.send(req.user);
});

app.listen(port, () => {
	console.log(`Starting server on port ${port}`);
});