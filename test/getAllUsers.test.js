const request = require('supertest');
const expect = require('chai').expect;
const app = require('../src/app');
const User = require('../models/User');
const { users, populateUsers, authenticatedUser } = require('./seed/seed');

describe('GET /users, authorized user has Resident rights', () => {
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

	it('should not get any data and should send 401 if user has no Admin access', function (done) {
		authenticatedUser
			.get('/users')
			.expect(401)
			.end(done);
	});

	it('should send 401 if user is not authorized', function (done) {
		request(app)
			.get('/users')
			.expect(401)
			.end(done);
	});
});

describe('GET /users, authorized user has Admin rights', () => {
	// Full VueAppTest db with test users
	beforeEach(populateUsers);

	// Create authenticated user with Admin rights (users[0])
	beforeEach((done) => {
		authenticatedUser
			.post('/auth/login')
			.send(users[2])
			.expect(200)
			.end(done)
	});

	it('should get all users if user has Admin access', function (done) {
		authenticatedUser
			.get('/users')
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(res.body).to.be.an('array').that.has.lengthOf(3);
				done();
			})
	});
});