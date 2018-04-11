const request = require('supertest');
const { app } = require('../src/app');

describe('Main app.js file test', () => {

	it.skip('should do something', (done) => {
		request(app)
			.post('/auth/login')
			.expect(200)
			.expect((res) => {
				expect(res.headers)
			})
			.end(done)
	});
});