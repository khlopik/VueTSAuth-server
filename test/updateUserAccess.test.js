const request = require('supertest');
const expect = require('chai').expect;
const { app } = require('../src/app');
const { User } = require('../models/user');
const { users, populateUsers } = require('./seed/seed');

beforeEach(populateUsers);

describe('PATCH /users/access/:id', () => {

	it('should modify access if user is Admin', function (done) {
		request(app)
			.patch('/users/access/' + users[0]._id.toString())
			.set('x-auth', users[2].tokens[0].token)
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

	it('should return 401 error if user is not Admin', function (done) {
		request(app)
			.patch('/users/access/' + users[0]._id.toString())
			.set('x-auth', users[0].tokens[0].token)
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

	it('should return 404 if id is incorrect', function (done) {
		const badId = 'asdfasdf';

		request(app)
			.patch('/users/access/' + badId)
			.set('x-auth', users[2].tokens[0].token)
			.send({ access: 'Admin' })
			.expect(404)
			.end(done);
	});
});