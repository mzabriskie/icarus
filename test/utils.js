var utils = require('../lib/utils');

function expectFailure(test, callback) {
	var error = false;
	try {
		callback();
	} catch (e) {
		error = true;
	}
	test.ok(error);
}

module.exports = {
	testParseURL: function (test) {
		test.deepEqual(utils.parseURL('/foo/a/b/c.js'), {module: 'foo', version: 'HEAD', file: 'a/b/c.js'});
		test.deepEqual(utils.parseURL('/foo/1.2.3/a/b/c.js'), {module: 'foo', version: '1.2.3', file: 'a/b/c.js'});
		test.deepEqual(utils.parseURL('/foo/111.222.333/a/b/c.js'), {module: 'foo', version: '111.222.333', file: 'a/b/c.js'});

		expectFailure(test, function () { utils.parseURL(''); });
		expectFailure(test, function () { utils.parseURL('/'); });
		expectFailure(test, function () { utils.parseURL('/foo'); });
		expectFailure(test, function () { utils.parseURL('/foo/1.2.3'); });

		test.done();
	}
};