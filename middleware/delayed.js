exports.delayed = (req, res, next) => {
	if (process.env.NODE_ENV === 'production') {
		next();
	}
	setTimeout(() => {
		next();
	}, 1000)
};
