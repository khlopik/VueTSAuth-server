const request = require('supertest');
const expect = require('chai').expect;
const app = require('../src/app');
const User = require('../models/User');
const { users, populateUsers, authenticatedUser } = require('./seed/seed');

describe('DELETE /users/:id, authorized user has Resident rights', () => {

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

	it('should delete user by own id', function (done) {
		authenticatedUser
			.delete('/users/'+users[0]._id.toString())
			.expect(200)
			.end((err, res) => {
				expect(err).to.be.null;
				User.findOne({_id: users[0]._id.toString()})
					.then((user) => {
						expect(user).to.be.null;
						done();
					})
					.catch((err) => {
						done(err);
					})
			})
	});

	it('should not delete user if authorization failed', function (done) {
		request(app)
			.delete('/users/'+users[0]._id.toString())
			.expect(401)
			.end(done)
	});

	it('should not delete user if user doesn\'t have admin rights', function (done) {
		authenticatedUser
			.delete('/users/'+users[1]._id.toString())
			.expect(401)
			.end(done)
	});

	it('should not delete user if user id is incorrect', function (done) {
		const wrongId = 'asdfasdf';
		authenticatedUser
			.delete('/users/' + wrongId)
			.expect(404)
			.end(done);
	});
});


describe('DELETE /users/:id, authorized user has Admin rights', () => {

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

	it('should delete other user if access is Admin', function (done) {
		authenticatedUser
			.delete('/users/' + users[0]._id.toString())
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
});