var conf = {};

module.exports = {
	load: function (file) {
		conf = require(file);
	},

	get: function (val) {
		return conf[val];
	}
};