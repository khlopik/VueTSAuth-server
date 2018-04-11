const request = require('supertest');
const expect = require('chai').expect;
const { app } = require('../src/app');
const { User } = require('../models/user');
const { users, populateUsers } = require('./seed/seed');


beforeEach(populateUsers);

describe('Create User', () => {
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
				expect(res.body).to.include({email: newUser.email})
				expect(res.headers['x-auth']).to.exist;
				expect(res.body).to.be.an('object').that.has.all.keys(['_id', 'email', 'access']);
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
						expect(user.password).to.not.equal(newUser.password);
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
				expect(res.body.errmsg).is.exist;
				done();
			})
	});

	it('should return validation error if requiest invalid', function (done) {
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
				expect(res.body.errors).is.exist;
				done();
			})
	});
});