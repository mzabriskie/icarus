var Serve = require('../lib/Serve');

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
		test.deepEqual(Serve.parseURL('/foo/a/b/c.js'), {module: 'foo', version: 'HEAD', file: 'a/b/c.js'});
		test.deepEqual(Serve.parseURL('/foo/1.2.3/a/b/c.js'), {module: 'foo', version: '1.2.3', file: 'a/b/c.js'});
		test.deepEqual(Serve.parseURL('/foo/111.222.333/a/b/c.js'), {module: 'foo', version: '111.222.333', file: 'a/b/c.js'});

		expectFailure(test, function () { Serve.parseURL(''); });
		expectFailure(test, function () { Serve.parseURL('/'); });
		expectFailure(test, function () { Serve.parseURL('/foo'); });
		expectFailure(test, function () { Serve.parseURL('/foo/1.2.3'); });

		test.done();
	},

	testParsePort: function (test) {
		test.equal(Serve.parsePort(), Serve.DEFAULT_PORT);
		test.equal(Serve.parsePort(null), Serve.DEFAULT_PORT);
		test.equal(Serve.parsePort(''), Serve.DEFAULT_PORT);
		test.equal(Serve.parsePort('abcdef'), Serve.DEFAULT_PORT);
		test.equal(Serve.parsePort('abc123'), Serve.DEFAULT_PORT);

		test.equal(Serve.parsePort(5000), 5000);
		test.equal(Serve.parsePort('5000'), 5000);
		test.equal(Serve.parsePort('5000.1'), 5000);

		test.done();
	}
};