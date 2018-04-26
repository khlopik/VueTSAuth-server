const express = require('express');
const router = express.Router();
const multer  = require('multer');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { delayed } = require('../middleware/delayed');

const { storage } = require('../controllers/storage');
const upload = multer({ storage });

let { imagePath } = require('../middleware/imagePath');

const { updateUserDetails, deleteUser, loginByPassword, getUserDetails } = require('../controllers');


router.get('/users', authController.isLoggedIn, imagePath, userController.getAllUsers);

router.post('/users',
	userController.validateRegister,
	userController.register,
	authController.login,
	delayed,
	userController.getUserDetails
);

router.patch('/users/:id', authController.isLoggedIn, upload.single('avatar'), delayed, userController.updateUserDetails);

router.patch('/users/access/:id', authController.isLoggedIn, delayed, userController.updateUserAccess);

router.delete('/users/:id', authController.isLoggedIn, delayed, userController.deleteUser);

router.post('/auth/login', authController.login, imagePath, delayed, userController.getUserDetails);

router.get('/auth/me', authController.firstIsLoggedIn, imagePath, delayed, userController.getUserDetails);

router.get('/logout', authController.logout);

module.exports = router;