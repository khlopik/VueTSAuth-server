const request = require('supertest');
const expect = require('chai').expect;
const { app } = require('../src/app');
const { User } = require('../models/user');
const { users, populateUsers } = require('./seed/seed');

beforeEach(populateUsers);

describe('GET /users', () => {

	it('should get all users if user has Admin access', function (done) {
		request(app)
			.get('/users')
			.set('x-auth', users[2].tokens[0].token)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(res.body).to.be.an('array').that.has.lengthOf(3);
				done();
			})
	});

	it('should not get any data and should send 401 if user has no Admin access', function (done) {
		request(app)
			.get('/users')
			.set('x-auth', users[0].tokens[0].token)
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