const request = require('supertest');
const expect = require('chai').expect;
const app = require('../src/app');
const User = require('../models/User');
const { users, populateUsers, authenticatedUser } = require('./seed/seed');

describe('PATCH /users/access/:id, authorized user has Resident rights', () => {
	// Full VueAppTest db with test users
	beforeEach(populateUsers);

	// Create authenticated user with Resident rights (users[0])
	beforeEach((done) => {
		authenticatedUser
			.post('/auth/login')
			.send(users[0])
			.expect(200)
			.end(done)
	});

	it('should return 401 error if user is not Admin', function (done) {
		authenticatedUser
			.patch('/users/access/' + users[0]._id.toString())
			.send({ access: 'Admin' })
			.expect(401)
			.end(done);
	});

	it('should return 401 error if user is not authorized', function (done) {
		request(app)
			.patch('/users/access/' + users[0]._id.toString())
			.send({ access: 'Admin' })
			.expect(401)
			.end(done);
	});

});

describe('PATCH /users/access/:id, authorized user has Admin rights', () => {
	// Full VueAppTest db with test users
	beforeEach(populateUsers);

	// Create authenticated user with Resident rights (users[0])
	beforeEach((done) => {
		authenticatedUser
			.post('/auth/login')
			.send(users[2])
			.expect(200)
			.end(done)
	});

	it('should modify access if user is Admin', function (done) {
		authenticatedUser
			.patch('/users/access/' + users[0]._id.toString())
			.send({ access: 'Admin' })
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				User.findOne({_id: users[0]._id.toString()})
					.then((user) => {
						expect(user).is.not.equal(null);
						expect(user).is.an('object').that.deep.include({ access: 'Admin'});
						done();
					})
					.catch((error) => {
						done(error);
					})
			})
	});

	it('should return 404 if id is incorrect', function (done) {
		const badId = 'asdfasdf';

		authenticatedUser
			.patch('/users/access/' + badId)
			.send({ access: 'Admin' })
			.expect(404)
			.end(done);
	});
});