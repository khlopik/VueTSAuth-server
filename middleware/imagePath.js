const path = require('path');

const imagePath = (req, res, next) => {
	if (req.user && req.user.details.avatar !== '') {
		console.log('req.user._id: ', req.user._id);
		console.log('req.user._id.toString(): ', req.user._id.toString());
		console.log('req.user.details.avatar: ', req.user.details.avatar);
		req.user.details.avatar = path.join('images',req.user._id.toString(),req.user.details.avatar);
	}
			next();
};

module.exports = {imagePath};