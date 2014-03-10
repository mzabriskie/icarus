var express = require('express'),
	utils = require('./utils'),
    app = express(),
    port = 3000;

app.get('/*', function (req, res) {
	var detail = utils.parseURL(req.url);

	res.send('URL: ' + req.url + '<br/>' +
			'Module: ' + detail.module + '<br/>' +
			'Version: ' + detail.version + '<br/>' +
			'File: ' + detail.file);

});


app.listen(port);
