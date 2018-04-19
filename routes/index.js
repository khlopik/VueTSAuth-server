const express = require('express');
const router = express.Router();
const multer  = require('multer');

const { storage } = require('../controllers/storage');
const upload = multer({ storage });

let { imagePath } = require('../middleware/imagePath');

let { authenticate } = require('../middleware/authenticate');
const { getAllUsers, createUser, updateUserDetails, updateUserAccess, deleteUser, loginByPassword, getUserDetails } = require('../controllers');

router.get('/users', authenticate, imagePath, getAllUsers);

router.post('/users', createUser);

router.patch('/users/:id', authenticate, upload.single('avatar'), updateUserDetails);

router.patch('/users/access/:id', authenticate, updateUserAccess);

router.delete('/users/:id', authenticate, deleteUser);

router.post('/auth/login', loginByPassword);

router.get('/auth/me', authenticate, imagePath, getUserDetails);

module.exports = router;