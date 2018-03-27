const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

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
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	access: {
		type: String,
		required: true,
	},
	tokens: [
		{
			access: {
				type: String,
				required: false,
			},
			token: {
				type: String,
				required: true,
			},
		}
	]
});

UserSchema.methods.toJSON = function(test) {
	let user = this;
	let userObject = user.toObject();
	return _.pick(userObject, ['_id', 'email', 'access']);
};

UserSchema.methods.generateAuthToken = function() {
	let user = this;
	console.log('user inside generateAuthToken: ', user);
	let token = jwt.sign({_id: user._id.toHexString(), access: user.access}, process.env.JWT_SECRET).toString();

	user.tokens.push({access: user.access, token});
	console.log('user before save: ', user);
	return user.save()
		.then(() => {
			return token;
		});
};

UserSchema.methods.removeToken = function(token) {
	let user = this;
	return user.update({
		$pull: {
			tokens: { token	}
		}
	})
};

UserSchema.statics.findByToken = function(token) {
	let User = this;
	let decoded;

	try {
		decoded = jwt.verify(token, process.env.JWT_SECRET);
	} catch(e) {
		return Promise.reject();
	}

	return User.findOne({
		'_id': decoded._id,
		'tokens.token': token,
		// 'tokens.access': 'auth'
	});
};

UserSchema.statics.findByCredentials = function(email, password) {
	let User = this;
	return User.findOne({ 'email': email })
		.then(user => {
			if (!user) {
				return Promise.reject();
			}
			return new Promise((resolve, reject) => {
				bcrypt.compare(password, user.password, (err, res) => {
					if (res) {
						console.log('user: ', user);
						resolve(user);
					} else {
						reject();
					}
				})
			})
		})

};

UserSchema.pre('save', function(next) {
	let user = this;
	if (user.isModified('password')) {
		bcrypt.genSalt(10)
			.then(salt => {
				return bcrypt.hash(user.password, salt);
			})
			.then(hash => {
				user.password = hash;
				next();
			})
			.catch(e => {
				next();
			});
	} else {
		next();
	}
});

let User = mongoose.model('User', UserSchema);

module.exports = {User};
