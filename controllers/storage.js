const fs = require('fs');
const path =require('path');
const multer  = require('multer');

const storage = multer.diskStorage({
	destination(req, file, callback) {
		const imagePath = path.join(__dirname, '..', 'public', 'images', req.params.id);
		if (!fs.existsSync(imagePath)) {
			fs.mkdirSync(imagePath);
		}
		callback(null, imagePath);
	},
	filename(req, file, callback) {
		callback(null, file.originalname);
	},
});

module.exports = { storage };