require('../config/config.js');
const fs = require('fs');
const path =require('path');

const express = require('express');
const bodyParser = require('body-parser');
const busboy = require('connect-busboy');
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
app.use(busboy());
app.use(cors());
app.use(express.static('public'));

// app.get('/posts', (req, res) => {
// 	res.send({
// 		title: 'Hello world!',
// 		description: 'This is just a description',
// 	})
// });

app.get('/users', authenticate, (req, res) => {
	if (req.user.access !== 'Admin') {
		res.status(401).send();
	}
	User.find()
		.then(users => {
			res.status(200).send(users);
		})
		.catch(error => {
			res.status(404).send();
		});
});

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
	let details = {};
	console.log('id: ', id);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	console.log('valid');
	if (req.busboy) {
		console.log('busboy');
		req.busboy.on('file', (fieldname, file, filename) => {
			const filePath = path.join(__dirname, '..', 'public', 'images', id, filename);
			file.pipe(fs.createWriteStream(filePath));
			details[fieldname] = filename;
		});
		req.busboy.on('field', (key, value) => {
			details[key] = value;
		});
		req.busboy.on('finish', () => {
			User.findOne({
				_id: id
			})
				.then((user) => {
					if (!user) {
						return res.status(404).send();
					}
					console.log('found user');
					let newUser = {
						tokens: user.tokens,
						details: {
							...user.details,
							...details,
						},
						password: user.password,
						access: user.access,
					};
					User.findOneAndUpdate({
						_id: id
					}, { ...newUser }, {new: true})
						.then(user => {
							if (!user) {
								return res.status(404).send();
							}
							// console.log('details: ', details);
							console.log('user: ', user);
							return res.send(user);
						})
				})
				.catch(error => {
					console.log('error: ', error);
					res.status(400).send();
				});
		});
		req.pipe(req.busboy);
	}
});

app.delete('/users/:id', authenticate, (req, res) => {
	let id = req.params.id;
	console.log('req.user: ', req.user);
	if (req.user.access === 'Resident' && req.user._id.toString() !== id) {
		res.status(401).send();
	}
	User.findByIdAndRemove(id)
		.then((user) => {
			if (!user) {
				return res.status(404).send();
			}
			res.status(200).send();
		})
		.catch((error) => {
			res.status(404).send(error);
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
	serverUrl = req.protocol + '://' + req.get('host');
	res.send(req.user);

});

app.listen(port, () => {
	console.log(`Starting server on port ${port}`);
});