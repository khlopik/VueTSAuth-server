const { User } = require('../models/user');
const { ObjectID } = require('mongodb');

module.exports = function updateUserDetails(req, res) {
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
		...req.body.avatar === '' && {avatar: req.body.avatar},
	};
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
};