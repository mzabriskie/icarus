var fs = require('fs'),
	Cache = require('../lib/Cache');

module.exports = {
	testClean: function (test) {
		fs.mkdir('cache', function () {
			Cache.clean(function () {
				fs.exists('cache', function (exists) {
					test.equals(exists, false);
				});
			});
		});

		test.done();
	}
};