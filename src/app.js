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
const helmet = require('helmet');

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



app.enable('trust proxy');
app.use (function (req, res, next) {
	if (req.secure) {
		// request was via https, so do no special handling
		next();
	} else {
		console.log('redirect', 'https://' + req.headers.host + req.url);
		// request was via http, so redirect to https
		// console.log('req.url: ', req.url);
		// console.log('req.headers.host: ', req.headers);
		// console.log('req.headers.host.split: ', req.headers.host.split(':'));
		if (process.env.NODE_ENV === 'production') {
			res.redirect('https://' + req.headers.host + req.url);
		} else {
			res.redirect('https://' + req.headers.host.split(':')[0] + ':8081');
		}
	}
});
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(helmet({
	"Strict-Transport-Security": "max-age=31536000",
}));


app.use('/', routes);

// app.use((req, res, next) => {
// 	console.log('req.secure: ', req.secure);
// 	// if(!req.secure) {
// 	// 	const secureUrl = "https://" + req.headers['host'] + req.url;
// 	// 	res.writeHead(301, { "Location":  secureUrl });
// 	// 	res.end();
// 	// }
// 	if (req.headers['x-forwarded-proto'] !== 'https') {
// 		console.log('redirect to', ['https://', req.get('Host'), req.url].join(''));
// 		return res.redirect(['https://', req.get('Host'), req.url].join(''));
// 		next();
// 	}
// 	next();
// });

module.exports = app;