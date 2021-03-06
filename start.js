const mongoose = require('mongoose');

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

if (!module.parent) {
		app.listen(process.env.PORT, () => {
			console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
			console.log('Environment: ', process.env.NODE_ENV);
			console.log('Database: ', process.env.MONGODB_URI);
			console.log(`Starting server on port ${port}`);
			console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		});
}