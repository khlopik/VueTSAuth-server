const mongoose = require('mongoose');
const fs = require('fs');
const http = require('http');
const https = require('https');

// import environmental variables from our variables.env file
console.log('process.env: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config({ path: 'config/variables.dev.env' });
}
require('./db/mongoose');
console.log('process.env.MONGODB_URI: ', process.env.MONGODB_URI);

// import all of our models
require('./models/User');


// Start our app!
const app = require('./src/app');
const port = process.env.PORT;

// const key = fs.readFileSync('/home/khlopik/GoIT/VueTSAuthTemplate/khlopik.tk.key');
// const cert = fs.readFileSync('/home/khlopik/GoIT/VueTSAuthTemplate/khlopik.tk.pem');
// const httpsOptions = {
// 	key,
// 	cert
// };

if (!module.parent) {
	// if (process.env.NODE_ENV === 'production') {
		app.listen(process.env.PORT, () => {
			console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
			console.log('Environment: ', process.env.NODE_ENV);
			console.log('Database: ', process.env.MONGODB_URI);
			console.log(`Starting server on port ${port}`);
			console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		});
	// } else {
		// http.createServer(app).listen(8082, () => {
		// 	console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		// 	console.log('Environment: ', process.env.NODE_ENV);
		// 	console.log('Database: ', process.env.MONGODB_URI);
		// 	console.log(`Starting server on port ${port}`);
		// 	console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		// });
		// https.createServer(httpsOptions, app).listen(port, () => {
		// 	console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		// 	console.log('Environment: ', process.env.NODE_ENV);
		// 	console.log('Database: ', process.env.MONGODB_URI);
		// 	console.log(`Starting server on port ${port}`);
		// 	console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		// });
	// }
}