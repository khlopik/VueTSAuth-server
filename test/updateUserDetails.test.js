const request = require('supertest');
const fs = require('fs');
const expect = require('chai').expect;
const app = require('../src/app');
const User = require('../models/User');
const { users, populateUsers, removeImages, authenticatedUser } = require('./seed/seed');

const userAvatar = 'public/images/unauth/unknown.png';

describe('PATCH /users/:id, authorized user has Resident rights', () => {
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

	// remove temporary avatar files
	afterEach(removeImages);

	it('should update details (name and avatar) for user which are authorized', function (done) {
		authenticatedUser
			.patch('/users/' + users[0]._id.toString())
			.field('name', 'Firstname')
			.attach('avatar', userAvatar)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				User.findOne({ _id: users[0]._id.toString()})
					.then(user => {
						expect(user).is.not.equal(null);
						expect(user.details).to.deep.include({
							name: 'Firstname',
							avatar: 'unknown.png'
						});
						done();
					})
					.catch(error => {
						return done(error);
					})
			})
	});

	it('should update only name for user which are authorized', function (done) {
		authenticatedUser
			.patch('/users/' + users[0]._id.toString())
			.field('name', 'Oleksii')
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				User.findOne({ _id: users[0]._id.toString() })
					.then((user) => {
						expect(user).is.not.equal(null);
						expect(user.details).is.deep.include({ name: 'Oleksii' });
						return done()
					})
					.catch((error) => {
						return done(error);
					})
			})
	});

	it('should update only avatar for user which are authorized', function (done) {
		authenticatedUser
			.patch('/users/' + users[0]._id.toString())
			.attach('avatar', userAvatar)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err)
				}
				User.findOne({ _id: users[0]._id.toString() })
					.then(user => {
						expect(user).to.be.an('object');
						expect(user.details).is.deep.include({ avatar: 'unknown.png' });
						expect(fs.existsSync(`public/images/${users[0]._id.toString()}/unknown.png`)).to.equal(true);
						done();
					})
					.catch(error => {
						done(error);
					})
			})

	});

	it('should return 401 error if user tries to update details of other user and he is not Admin', function (done) {
		authenticatedUser
			.patch('/users/' + users[1]._id.toString())
			.field('name', 'Firstname')
			.attach('avatar', userAvatar)
			.expect(401)
			.end(done);
	});

	it('should return 401 if user is not authorized', function (done) {
		request(app)
			.patch('/users/' + users[0]._id.toString())
			.field('name', 'Firstname')
			// .attach('avatar', userAvatar)
			.expect(401)
			.end(done);
	});

	it('should return 404 if user id is not valid', function (done) {
		const badId = 'asdfasdf';

		authenticatedUser
			.patch('/users/' + badId)
			// .field('name', 'Oleksii')
			.attach('avatar', userAvatar)
			.expect(404)
			.end(done);
	});
});

describe('PATCH /users/:id, authorized user has Admin rights', () => {
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

	// remove temporary avatar files
	afterEach(removeImages);

	it('should update details of other user if authorized user is Admin', function (done) {
		authenticatedUser
			.patch('/users/' + users[0]._id.toString())
			.field('name', 'Firstname')
			.attach('avatar', userAvatar)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				User.findOne({ _id: users[0]._id.toString()})
					.then(user => {
						expect(user).is.not.equal(null);
						expect(user.details).to.deep.include({
							name: 'Firstname',
							avatar: 'unknown.png'
						});
						done();
					})
					.catch(error => {
						return done(error);
					})
			})
	});
});