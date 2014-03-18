var conf = {};

module.exports = {
	load: function (file) {
		conf = require(file);
	},

	value: function (key) {
		return conf[key];
	},

	module: function (name) {
		return conf.modules[name];
	}
};