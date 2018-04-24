const request = require('supertest');
const expect = require('chai').expect;
const { users, populateUsers, authenticatedUser } = require('./seed/seed');
const User = require('../models/User');
const app = require('../src/app');




describe('Create User', () => {
	beforeEach(populateUsers);

	it('should create a new user', function (done) {
		const newUser = {
			email: 'newuser@example.com',
			password: 'Password'
		};

		request(app)
			.post('/users')
			.send(newUser)
			.expect(200)
			.expect((res) => {
				expect(res.body).to.include({email: newUser.email});
				expect(res.body).to.be.an('object').that.includes.keys(['_id', 'email', 'access']);
			})
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				User.findOne({email: newUser.email })
					.then((user) => {
						if (!user) {
							return done('new User has not been created')
						}
						expect(user).to.exist;
						done();
					})
					.catch((e) => done(e));
			})
	});

	it('should not create user if email is already in database', function (done) {
		const newUser = {
			email: users[0].email,
			password: 'Password'
		};

		request(app)
			.post('/users')
			.send(newUser)
			.expect(400)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				// console.log('res.body: ', res.error.text);
				expect(res.error).is.exist;
				done();
			})
	});

	it('should return validation error if request invalid', function (done) {
		const newUser = {
			email: 'asdfg',
			password: '123'
		};

		request(app)
			.post('/users')
			.send(newUser)
			.expect(400)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				// console.log('res.error: ', res.error.text);
				expect(res.error).is.exist;
				done();
			})
	});
});