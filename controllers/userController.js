const mongoose = require('mongoose');
const path =require('path');
const _ = require('lodash');
const { ObjectID } = require('mongodb');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');
const util = require('util');

exports.loginForm = (req, res) => {
	res.render('login', { title: 'Login' });
};

exports.registerForm = (req, res) => {
	res.render('register', { title: 'Register' })
};

exports.validateRegister = (req, res, next) => {
	req.checkBody('email', 'That Email is not valid!').isEmail();
	req.sanitizeBody('email').normalizeEmail({
		remove_dots: false,
		remove_extension: false,
		gmail_remove_subaddress: false
	});
	req.checkBody('password', 'Password Cannot be Blank!').notEmpty();

	const errors = req.validationErrors();
	if (errors) {
		// console.log('errors: ', errors);
		res.status(400).send(errors[0].msg);
		return; // stop the fn from running
	}
	next();
};

exports.register = async (req, res, next) => {
	// const user = new User({ email: req.body.email });

	const user = new User({ email: req.body.email });
	User.register(user, req.body.password, (err, user) => {
		if (err) {
			return res.status(400).send(err.message);
			next();
		}
		// console.log('err: ', err);
		// console.log('user: ', user);
		next();
	});
};

exports.account = (req, res) => {
	res.render('account', { title: 'Edit Your Account' });
};

exports.updateAccount = async (req, res) => {
	const updates = {
		name: req.body.name,
		email: req.body.email
	};

	const user = await User.findOneAndUpdate(
		{ _id: req.user._id },
		{ $set: updates },
		{ new: true, runValidators: true, context: 'query' }
	);

	// req.flash('success', 'Updated the profile!');
	// res.redirect('back');
	res.send();
};

exports.getAllUsers = (req, res) => {
	// console.log('req.user: ', req.user);
	if (req.user.access !== 'Admin') {
		return res.status(401).send();
	}
	User.find()
		.then(users => {
			const usersWithAvatars = users.map(user => {
				if (user.details && user.details.avatar !== '' && user.details.avatar !== null) {
					user.details.avatar = path.join('images',user._id.toString(),user.details.avatar);
				}
				return user;
			});
			res.status(200).send(usersWithAvatars);
		})
		.catch(error => {
			res.status(404).send();
		});
};

exports.updateUserDetails = (req, res) => {
	let id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send('User\'s ID is not valid to modify.');
	}
	if (req.user.access !== 'Admin' && req.user._id.toString() !== id) {
		return res.status(401).send('You don\'t have enough permissions to perform this action.');
	}
	const details = {
		...req.file && {[req.file.fieldname]: req.file.originalname},
		...req.body.name && {name: req.body.name},
		...req.body.avatar === '' && {avatar: req.body.avatar},
	};
	User.findOne({
		_id: id
	})
		.then(user => {
			if (!user) {
				return res.status(404).send('Cannot find user to modify.');
			}

			const updatedDetails = {
				...user.details,
				...details,
			};
			User.findByIdAndUpdate(id, { $set: { details: { ...updatedDetails }} }, {new: true})
				.then(user => {
					if (!user) {
						return res.status(404).send('Cannot find user to modify.');
					}
					if (user.details && user.details.avatar !== '' && user.details.avatar !== null) {
						user.details.avatar = path.join('images',user._id.toString(),user.details.avatar);
					}
					return res.status(200).send(user);
				})
				.catch(error => {
					return res.status(400).send(error);
				});
		})
};

exports.deleteUser = (req, res) => {
	let id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send('User\'s ID is not valid to modify.');
	}
	if (req.user.access === 'Resident' && req.user._id.toString() !== id) {
		return res.status(401).send('You don\'t have enough permissions to perform this action.');
	}
	User.findByIdAndRemove(id)
		.then((user) => {
			if (!user) {
				return res.status(404).send('Cannot find user to delete.');
			}
			return res.status(200).send('User has been successfully deleted.');
		})
		.catch((error) => {
			return res.status(404).send(error);
		});
};

const defaultAvatar = path.join('images','unauth','unknown.png');

exports.getUserDetails = (req, res) => {
	try {
		const result = {
			..._.pick(req.user, ['_id', 'email', 'access', 'details']),
			defaultAvatar
		};
		// console.log('JSON.stringify(result, undefined,2): ', JSON.stringify(result, undefined,2));
		res.status(200).send(result);
	} catch(err) {
		// console.log('err: ', err);
	}
};

exports.updateUserAccess = (req, res) => {
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
};
