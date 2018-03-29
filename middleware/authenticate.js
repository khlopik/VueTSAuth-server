let { User } = require('./../models/user');
const fs = require('fs');
const path = require('path');

const authenticate = (req, res, next) => {
	let token = req.header('x-auth');

	User.findByToken(token)
		.then(user => {
			if (!user) {
				return Promise.reject();
			}

			req.user = user;
			req.token = token;

			let dir = path.join(__dirname, '..', 'public/images', user._id.toString());

			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
			next();
		})
		.catch(e => {
			res.status(401).send();
		});
};

module.exports = {authenticate};