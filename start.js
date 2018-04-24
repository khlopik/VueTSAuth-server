const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });
require('./db/mongoose');

// import all of our models
require('./models/User');


// Start our app!
const app = require('./src/app');
const port = process.env.PORT;

if (!module.parent) {
	app.listen(port, () => {
		console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		console.log('Environment: ', process.env.NODE_ENV);
		console.log('Database: ', process.env.MONGODB_URI);
		console.log(`Starting server on port ${port}`);
		console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
	});
}