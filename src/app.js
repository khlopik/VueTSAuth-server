const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer  = require('multer');
const { ObjectID } = require('mongodb');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');
const passport = require('passport');
const routes = require('../routes/index');

require('../handlers/passport');

require('../config/config.js');

const { mongoose } = require('../db/mongoose');
let { authenticate } = require('../middleware/authenticate');
let { delayed } = require('../middleware/delayed');
let { imagePath } = require('../middleware/imagePath');

const { getAllUsers, createUser, updateUserDetails, updateUserAccess, deleteUser, loginByPassword, getUserDetails } = require('../controllers');
const { storage } = require('../controllers/storage');


const port = process.env.PORT;
const upload = multer({ storage });

const app = express();

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
// app.use(session({
// 	secret: process.env.SECRET,
// 	key: process.env.KEY,
// 	resave: false,
// 	saveUninitialized: false,
// 	store: new MongoStore({ mongooseConnection: mongoose.connection })
// }));

// Passport JS is what we use to handle our logins
// app.use(passport.initialize());
// app.use(passport.session());

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
app.use(express.static('public'));

app.use('/', routes);

if (!module.parent) {
	app.listen(port, () => {
		console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		console.log('Environment: ', process.env.NODE_ENV);
		console.log('Database: ', process.env.MONGODB_URI);
		console.log(`Starting server on port ${port}`);
		console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
	});
}

module.exports = { app };