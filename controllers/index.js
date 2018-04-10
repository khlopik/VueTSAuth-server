const getAllUsers = require('./getAllUsers');
const createUser = require('./createUser');
const updateUserDetails = require('./updateUserDetails');
const updateUserAccess = require('./updateUserAccess');
const deleteUser = require('./deleteUser');
const loginByPassword = require('./loginByPassword');
const getUserDetails = require('./getUserDetails');

module.exports = {
	getAllUsers,
	createUser,
	updateUserDetails,
	updateUserAccess,
	deleteUser,
	loginByPassword,
	getUserDetails,
};