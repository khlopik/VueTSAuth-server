require('dotenv').config({ path: 'config/variables.test.env' });

const { ObjectID } = require('mongodb');
const fs = require('fs');
require('dotenv').config({ path: 'variables.test.env' });
require('../../db/mongoose');
const User = require('../../models/User');
const app = require('../../src/app');
const request = require('supertest');


const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const userThreeId = new ObjectID();
const users = [
	{
		_id: userOneId,
		email: 'email1@example.com',
		password: 'Password1',
		access: 'Resident',
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
	}
];

const populateUsers = (done) => {
	User.remove({})
		.then(() => {
			// console.log('Users have been removed');
			const userOnePromise = User.registerAsync(users[0], users[0].password);
			const userTwoPromise = User.registerAsync(users[1], users[1].password);
			const userThreePromise = User.registerAsync(users[2], users[2].password);
			return Promise.all([userOnePromise, userTwoPromise, userThreePromise]);
		})
		.then(() => {
			// console.log('Users have been added to DB');
			done();
		})
		.catch((e) => done(e));
};

const removeImages = () => {
	if (fs.existsSync(`public/images/${users[0]._id.toString()}`)) {
		fs.unlinkSync(`public/images/${users[0]._id.toString()}/unknown.png`);
		fs.rmdirSync(`public/images/${users[0]._id.toString()}`);
	}
};

const authenticatedUser = request.agent(app);

module.exports = {
	users,
	populateUsers,
	removeImages,
	authenticatedUser,
};