exports.delayed = (req, res, next) => {
	setTimeout(() => {
		next();
	}, 1000)
};
