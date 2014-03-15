var PATH_FIXTURE = __dirname + '/fixtures/config.json',
	Config = require('../lib/Config'),
	conf = require(PATH_FIXTURE);

module.exports = {
	setUp: function (callback) {
		Config.load(PATH_FIXTURE);

		callback();
	},

	testGet: function (test) {
		test.deepEqual(Config.get('icarus'), conf['icarus']);

		test.done();
	}
};