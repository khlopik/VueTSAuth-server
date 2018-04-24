const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const validator = require('validator');
const _ = require('lodash');
const path = require('path');
const url =require('url');
const passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		},
	},
	access: {
		type: String,
		required: true,
		default: 'Resident'
	},
	details: {
		name: {
			type: String,
			required: false,
			default: '',
		},
		avatar: {
			type: String,
			required: false,
			default: '',
		}
	}
});
UserSchema.statics.registerAsync = function (data, password) {
	return new Promise((resolve, reject) => {
		this.register(data, password, (err, user) => {
			if (err) return reject(err);
			resolve(user);
		});
	});
};

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email'});
UserSchema.plugin(mongodbErrorHandler);
module.exports = mongoose.model('User', UserSchema);
