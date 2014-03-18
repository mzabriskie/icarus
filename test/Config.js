var PATH_FIXTURE = __dirname + '/fixtures/config.json',
	Config = require('../lib/Config'),
	conf = require(PATH_FIXTURE);

module.exports = {
	setUp: function (callback) {
		Config.load(PATH_FIXTURE);

		callback();
	},

	testValue: function (test) {
		test.equals(Config.value('foo'), conf['foo']);

		test.done();
	},

	testModule: function (test) {
		test.deepEqual(Config.module('icarus'), conf.modules['icarus']);

		test.done();
	}
};