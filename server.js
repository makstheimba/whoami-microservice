const express = require('express');
const app = express();

app.get('/whoami', (req, res) => {
	console.log(req.headers);
	res.send({
		ip: req.ip,
		language: req.headers["accept-language"],
	});
});

app.listen(process.env.PORT || 3001);
