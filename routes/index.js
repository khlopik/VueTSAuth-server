const express = require('express');
const router = express.Router();
const multer  = require('multer');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const { storage } = require('../controllers/storage');
const upload = multer({ storage });

let { imagePath } = require('../middleware/imagePath');

const { updateUserDetails, deleteUser, loginByPassword, getUserDetails } = require('../controllers');


router.get('/users', authController.isLoggedIn, imagePath, userController.getAllUsers);

router.post('/users',
	userController.validateRegister,
	userController.register,
	authController.login,
	userController.getUserDetails
);

router.patch('/users/:id', authController.isLoggedIn, upload.single('avatar'), userController.updateUserDetails);

router.patch('/users/access/:id', authController.isLoggedIn, userController.updateUserAccess);

router.delete('/users/:id', (req, res, next) => {
	next();
}, authController.isLoggedIn, userController.deleteUser);

router.post('/auth/login', authController.login, imagePath, userController.getUserDetails);

router.get('/auth/me', authController.isLoggedIn, imagePath, userController.getUserDetails);

router.get('/logout', authController.logout);

module.exports = router;