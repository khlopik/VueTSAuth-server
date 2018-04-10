const path =require('path');
const _ = require('lodash');

const defaultAvatar = path.join('images','unauth','unknown.png');

module.exports = function getUserDetails(req, res) {
	const result = {
		..._.pick(req.user, ['_id', 'email', 'access', 'details']),
		defaultAvatar
	};
	res.send(result);
};