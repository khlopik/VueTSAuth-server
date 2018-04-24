const express = require('express');
const session = require('express-session');
const expressValidator = require('express-validator');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer  = require('multer');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');
const passport = require('passport');
const { promisify } = require('es6-promisify');
const flash = require('connect-flash');

const { mongoose } = require('../db/mongoose');

require('../config/config.js');
const routes = require('../routes/index');

const { storage } = require('../controllers/storage');
const upload = multer({ storage });

const app = express();

app.use(bodyParser.json());
// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());
app.use(expressValidator());
// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(session({
	secret: process.env.SECRET,
	key: process.env.KEY,
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());
require('../handlers/passport');

app.use(morgan('combined'));

// promisify some callback based APIs
app.use((req, res, next) => {
	req.login = promisify(req.login, req);
	next();
});

app.use(flash());
app.use(cors({
	origin:['http://localhost:8080'],
	methods:['GET','POST', 'PATCH', 'DELETE'],
	credentials: true, // enable set cookie
	withCredentials: true,
}));
app.use(express.static('dist'));
app.use(express.static('public'));

app.use('/', routes);


module.exports = app;