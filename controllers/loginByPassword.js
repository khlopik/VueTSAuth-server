const { User } = require('../models/user');
const _ = require('lodash');

module.exports = function loginByPassword(req, res) {
	console.log('loginByPassword');
	let body = _.pick(req.body, ['email', 'password']);
	console.log('body: ', body);
	console.log('User.findByCredentials(body.email, body.password): ', User.findByCredentials(body.email, body.password));
	User.findByCredentials(body.email, body.password)
		.then(user => {
			console.log('findByCredentials');
			if (!user) {
				return res.status(401).send();
			}
			console.log('found');
			return user.generateAuthToken()
				.then(token => {
					console.log('generateToken');
					return res.header({
						'Access-Control-Expose-Headers': 'x-auth',
						'x-auth': token,
					}).send(_.pick(user, ['_id', 'access', 'email', 'details']));
				});
		})
		.catch(e => {
			console.log('error in loginByPassword');
			// console.log('e: ', e);
			return res.status(401).send(e);
		})
};