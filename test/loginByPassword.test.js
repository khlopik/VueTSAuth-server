const request = require('supertest');
const expect = require('chai').expect;
const { app } = require('../src/app');
const { User } = require('../models/user');
const { users, populateUsers } = require('./seed/seed');

beforeEach(populateUsers);

describe('POST /auth/login', function () {

	it('should return new token if authentication is success', (done) => {
		const goodUser = {
			email: users[0].email,
			password: users[0].password,
		};

		request(app)
			.post('/auth/login')
			.send(goodUser)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err)
				}
				expect(res.body).to.be.an('object').that.has.all.keys(['_id', 'access', 'email', 'details']);
				expect(res.headers).has.property('x-auth');
				done();
			})
	});

	it('should return 401 if authorization failed', function (done) {
		const badUser = {
			email: 'someemail@example.com',
			password: 'SomePassword',
		};

		request(app)
			.post('/auth/login')
			.send(badUser)
			.expect(401)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(res.body).is.deep.equal({});
				done();
			});
	});
});