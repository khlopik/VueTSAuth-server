const { User } = require('../models/user');
const _ = require('lodash');

module.exports = function loginByPassword(req, res) {
	let body = _.pick(req.body, ['email', 'password']);
	User.findByCredentials(body.email, body.password)
		.then(user => {
			if (!user) {
				return Promise.reject('No user found');
			}
			return user.generateAuthToken()
				.then(token => {
					return res.header({
						'Access-Control-Expose-Headers': 'x-auth',
						'x-auth': token,
					}).send(_.pick(user, ['_id', 'access', 'email', 'details']));
				});
		})
		.catch(e => {
			return res.status(401).send(e);
		})
};