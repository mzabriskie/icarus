var express = require('express'),
    app = express(),
    port = 3000;


app.get('/:module/:version', function (req, res) {
	res.send('Module: ' + req.params.module + ' <br/>Version: ' + req.params.version);
});

app.listen(port);
