var icarus = module.exports = {};

icarus.clean = function clean() {};

icarus.cache = function cache() {};

icarus.serve = function serve(port) {
	var express = require('express'),
		utils = require('./utils'),
		app = express();

	// Use the port provided if it's valid
	if (port && !isNaN(parseInt(port, 10))) {
		port = parseInt(port, 10);
	} else {
		port = 3000;
	}

	app.get('/*', function (req, res) {
		var detail = utils.parseURL(req.url);

		res.send('URL: ' + req.url + '<br/>' +
			'Module: ' + detail.module + '<br/>' +
			'Version: ' + detail.version + '<br/>' +
			'File: ' + detail.file);

	});

	console.log('Listening on port ' + port);
	app.listen(port);
};
