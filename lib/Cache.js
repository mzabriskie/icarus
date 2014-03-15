var fs = require('fs'),
	rimraf = require('rimraf');

module.exports = {
	clean: function (callback) {
		fs.exists('cache', function (exists) {
			if (exists) {
				rimraf('cache', function () {
					if (typeof callback === 'function') {
						callback();
					}
				});
			}
		});
	}
};