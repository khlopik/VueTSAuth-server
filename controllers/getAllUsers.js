const { User } = require('../models/user');

module.exports = function getAllUsers(req, res) {
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
};