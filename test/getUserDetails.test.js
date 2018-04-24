const request = require('supertest');
const expect = require('chai').expect;
const app = require('../src/app');
const User = require('../models/User');
const { users, populateUsers, authenticatedUser } = require('./seed/seed');

describe('GET /auth/me, authorized user has Resident rights', () => {
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

	it('should return user if authenticated', function (done) {
		authenticatedUser
			.get('/auth/me')
			.expect(200)
			.expect((res) => {
				expect(res.body._id).is.equal(users[0]._id.toHexString());
				expect(res.body.email).is.equal(users[0].email);
			})
			.end(done);
	});

	it('should return 401 if not authenticated', function (done) {
		request(app)
			.get('/auth/me')
			.expect(401)
			.expect((res) => {
				expect(res.body).is.deep.equal({});
			})
			.end(done);
	});
});