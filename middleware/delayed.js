const delayed = (req, res, next) => {
	// setTimeout(() => {
		next();
	// }, 2000)
};

module.exports = {delayed};