var icarus = module.exports = {};

icarus.clean = function clean() {
	require('./Cache').clean();
};

icarus.cache = function cache() {};

icarus.serve = function serve(port) {
	var express = require('express'),
		Serve = require('./Serve'),
		app = express();

	app.get('/*', function (req, res) {
		var detail = Serve.parseURL(req.url);

		res.send('URL: ' + req.url + '<br/>' +
			'Module: ' + detail.module + '<br/>' +
			'Version: ' + detail.version + '<br/>' +
			'File: ' + detail.file);

	});

	port = Serve.parsePort(port);
	console.log('Listening on port ' + port);
	app.listen(port);
};
