const express = require('express');
const {getUserFirstLanguage, getUserPlatform} = require.main.require('./selectors');
const app = express();

app.get('/whoami', (req, res) => {
	res.send({
		ip: req.ip,
		language: getUserFirstLanguage(req.headers['accept-language']),
		user_platform: getUserPlatform(req.headers['user-agent']),
	});
});

app.listen(process.env.PORT || 3001);
