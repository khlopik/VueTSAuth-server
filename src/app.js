require('../config/config.js');
// const fs = require('fs');
const path =require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const busboy = require('connect-busboy');
const multer  = require('multer');

const { ObjectID } = require('mongodb');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');

const { mongoose } = require('../db/mongoose');
const { User } = require('../models/user');
let { authenticate } = require('../middleware/authenticate');

const port = process.env.PORT;
const storage = multer.diskStorage({
	destination(req, file, callback) {
		callback(null, path.join(__dirname, '..', 'public', 'images', req.params.id));
	},
	filename(req, file, callback) {
		callback(null, file.originalname);
	},
});
const upload = multer({ storage });

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
app.use(express.static('public'));

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
			return res.header({
				'Access-Control-Expose-Headers': 'x-auth',
				'x-auth': token,
			}).status(200).send(_.pick(user, ['_id', 'access', 'email']));
		})
		.catch(e => {
			// console.log('e: ', e);
			return res.status(400).send(e);
		});
});

app.patch('/users/:id', authenticate, upload.single('avatar'), (req, res) => {
	let id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	if (req.user.access !== 'Admin' && req.user._id.toString() !== id) {
		return res.status(401).send();
	}
	const details = {
		...req.file && {[req.file.fieldname]: req.file.originalname},
		...req.body.name && {name: req.body.name},
	};
	console.log('details: ', details);
	User.findOne({
		_id: id
	})
		.then(user => {
			if (!user) {
				return res.status(404).send();
			}
			const updatedDetails = {
				...user.details,
				...details,
			};
			User.findByIdAndUpdate(id, { $set: { details: { ...updatedDetails }} }, {new: true})
				.then(user => {
					if (!user) {
						return res.status(404).send();
					}
					return res.status(200).send(user);
				})
				.catch(error => {
					return res.status(400).send(error);
				});
		})
});

app.patch('/users/access/:id', authenticate, (req, res) => {
	let id = req.params.id;
	let body = _.pick(req.body, ['access']);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	if (req.user.access !== 'Admin') {
		return res.status(401).send();
	}
	User.findByIdAndUpdate(id, { $set: { access: body.access }}, { new: true })
		.then((user) => {
			if (!user) {
				return res.status(404).send();
			}
			return res.status(200).send(user);
		})
		.catch((error) => {
			return res.status(404).send(error);
		})
});

app.delete('/users/:id', authenticate, (req, res) => {
	let id = req.params.id;
	if (req.user.access === 'Resident' && req.user._id.toString() !== id) {
		return res.status(401).send();
	}
	User.findByIdAndRemove(id)
		.then((user) => {
			if (!user) {
				return res.status(404).send();
			}
			return res.status(200).send();
		})
		.catch((error) => {
			return res.status(404).send(error);
		});
});

app.post('/auth/login', (req, res) => {
	let body = _.pick(req.body, ['email', 'password']);
	User.findByCredentials(body.email, body.password)
		.then(user => {
			if (!user) {
				return res.status(401).send();
			}
			return user.generateAuthToken()
				.then(token => {
					return res.header({
						'Access-Control-Expose-Headers': 'x-auth',
						'x-auth': token,
					}).send(_.pick(user, ['_id', 'access', 'email']));
				});
		})
		.catch(e => {
			// console.log('e: ', e);
			return res.status(401).send(e);
		})
});

app.get('/auth/me', authenticate, (req, res) => {
	res.send(req.user);
});

app.listen(port, () => {
	console.log(`Starting server on port ${port}`);
});