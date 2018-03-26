const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 8081;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
	res.send({
		title: 'Hello world!',
		description: 'This is just a description',
	})
});

app.listen(port, () => {
	console.log(`Starting server on port ${port}`);
});