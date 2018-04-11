const request = require('supertest');
const expect = require('chai').expect;
const { app } = require('../src/app');
const { User } = require('../models/user');
const { users, populateUsers } = require('./seed/seed');

beforeEach(populateUsers);

describe('DELETE /users/:id', () => {

	it('should delete user by own id', function (done) {
		request(app)
			.delete('/users/'+users[0]._id.toString())
			.set('x-auth', users[0].tokens[0].token)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				User.findOne({_id: users[0]._id.toString()})
					.then((user) => {
						expect(user).to.be.an('null');
						done();
					})
					.catch((err) => {
						done(err);
					})
			})
	});

	it('should delete other user if access is Admin', function (done) {
		request(app)
			.delete('/users/' + users[0]._id.toString())
			.set('x-auth', users[2].tokens[0].token)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				User.findOne({ _id: users[0]._id.toString() })
					.then((user) => {
						expect(user).to.equal(null);
						done();
					})
					.catch((error) => {
						done(error);
					});
			})
	});

	it('should not delete user if authorization failed', function (done) {
		request(app)
			.delete('/users/'+users[0]._id.toString())
			.expect(401)
			.end(done)
	});

	it('should not delete user if user doesn\'t have admin rights', function (done) {
		request(app)
			.delete('/users/'+users[1]._id.toString())
			.set('x-auth', users[0].tokens[0].token)
			.expect(401)
			.end(done)
	});

	it('should not delete user if user id is incorrect', function (done) {
		const wrongId = 'asdfasdf';

		request(app)
			.delete('/users/' + wrongId)
			.set('x-auth', users[0].tokens[0].token)
			.expect(404)
			.end(done);
	});
});