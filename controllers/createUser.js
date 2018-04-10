const { User } = require('../models/user');
const _ = require('lodash');

module.exports = function(req, res) {
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
};