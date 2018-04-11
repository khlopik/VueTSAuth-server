const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { User } = require('../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const userThreeId = new ObjectID();
const users = [
	{
		_id: userOneId,
		email: 'email1@example.com',
		password: 'Password1',
		access: 'Resident',
		tokens: [{
			token: jwt.sign({_id: userOneId, access: 'Resident'}, process.env.JWT_SECRET).toString(),
		}]
	},
	{
		_id: userTwoId,
		email: 'email2@example.com',
		password: 'Password2',
		access: 'Resident',
	},
	{
		_id: userThreeId,
		email: 'email3@example.com',
		password: 'Password3',
		access: 'Admin',
		tokens: [{
			token: jwt.sign({_id: userThreeId, access: 'Resident'}, process.env.JWT_SECRET).toString(),
		}]
	}
];

const populateUsers = (done) => {
	User.remove({})
		.then(() => {
			const userOne = new User(users[0]).save();
			const userTwo = new User(users[1]).save();
			const userThree = new User(users[2]).save();
			return Promise.all([userOne, userTwo, userThree]);
		})
		.then(() => done())
		.catch((e) => done(e));
};

module.exports = {
	users,
	populateUsers,
};