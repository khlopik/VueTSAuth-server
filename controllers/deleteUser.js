const { ObjectID } = require('mongodb');
const { User } = require('../models/User');

module.exports = function deleteUser(req, res) {
	let id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
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
};