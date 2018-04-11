const request = require('supertest');
const expect = require('chai').expect;
const { app } = require('../src/app');
const { User } = require('../models/user');
const { users, populateUsers } = require('./seed/seed');


beforeEach(populateUsers);

describe('GET /auth/me', () => {
	it('should return user if authenticated', function (done) {
		request(app)
			.get('/auth/me')
			.set('x-auth', users[0].tokens[0].token)
			.expect(200)
			.expect((res) => {
				expect(res.body._id).is.equal(users[0]._id.toHexString())
				expect(res.body.email).is.equal(users[0].email)
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