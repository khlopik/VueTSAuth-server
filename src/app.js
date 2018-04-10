const express = require('express');
const bodyParser = require('body-parser');
const multer  = require('multer');
const { ObjectID } = require('mongodb');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');

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
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/users', authenticate, imagePath, getAllUsers);

app.post('/users', createUser);

app.patch('/users/:id', authenticate, delayed, upload.single('avatar'), updateUserDetails);

app.patch('/users/access/:id', authenticate, updateUserAccess);

app.delete('/users/:id', authenticate, deleteUser);

app.post('/auth/login', loginByPassword);

app.get('/auth/me', authenticate, imagePath, getUserDetails);

app.listen(port, () => {
	console.log(`Starting server on port ${port}`);
});