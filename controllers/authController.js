const passport = require("passport");
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
// const mail = require('../handlers/mail');


exports.authenticate = (req, res, next) => {
	passport.authenticate('local', {session: true}, (err, user, info) => {
		if (err) {
			console.log('err in authenticate: ', err);
			return res.status(400).send(err);
		}
		if (!user) {
			console.log('no users in authenticate');
			return res.status(401).send('Not authenticated');
		}
		req.login(user, (err) => {
			console.log('err inside req.login: ', err);
		});
		res.status(200).send(user);
	})(req, res, next);
	// next();
};
exports.login = passport.authenticate('local');

exports.logout = (req, res) => {
	req.logout();
	// req.flash('success', 'You are now logged out!');
	// res.redirect('/');
	res.send();
};

exports.isLoggedIn = (req, res, next) => {
	if(req.isAuthenticated()) {
		next();
		return;
	}
	res.status(401).send('You are not authorized on the server. Please log in.');
};

exports.firstIsLoggedIn = (req, res, next) => {
	if(req.isAuthenticated()) {
		next();
		return;
	}
	res.status(200).send('false');
};

exports.forgot = async (req, res) => {
	// 1. See if user exists
	// 2. Set reset tokens and expiry on their account
	// 3. Send an email with the token
	// 4. redirect to login page
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		// req.flash('error', 'No account with that email exists.');
		return res.redirect('/login');
	}
	user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
	user.resetPasswordExpires = Date.now() + 3600000; // 1 hour to reset password
	await user.save();
	const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`;

	await mail.send({
		filename: 'password-reset',
		user,
		subject: 'Password Reset',
		resetURL
	});
	// req.flash('success', `You have been emailed a password reset link. ${resetURL}`);
	res.redirect('/login');
};

exports.reset = async (req, res) => {
	const user = await User.findOne({
		resetPasswordToken: req.params.token,
		resetPasswordExpires: { $gt: Date.now() }
	});
	if (!user) {
		// req.flash('error', 'Password reset token is invalid or has expired');
		return res.redirect('/login');
	}
	res.render('reset', { title: 'Reset your Password' });
};

exports.confirmedPasswords = (req, res, next) => {
	if (req.body.password === req.body['password-confirm']) {
		next(); // keep it going
		return;
	}
	// req.flash('error', 'Passwords do not match!');
	res.redirect('back');
};

exports.update = async (req, res) => {
	const user = await User.findOne({
		resetPasswordToken: req.params.token,
		resetPasswordExpires: { $gt: Date.now() }
	});

	if (!user) {
		// req.flash('error', 'Password reset token is invalid or has expired');
		return res.redirect('/login');
	}

	const setPassword = promisify(user.setPassword, user);
	await setPassword(req.body.password);
	user.resetPasswordToken = undefined;
	user.resetPasswordExpires = undefined;
	const updatedUser = await user.save();
	await req.login(updatedUser);
	// req.flash('success', 'Nice! Your password has been reset! You are now logged in');
	res.redirect('/');
};