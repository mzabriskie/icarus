var icarus = require('./lib/icarus'),
	argv = require('minimist')(process.argv.slice(2));

// Clean the cache
if (argv._.indexOf('clean') > -1) {
	icarus.clean();
}

// Warm the cache
if (argv._.indexOf('cache') > -1) {
	icarus.cache();
}

// Serve the goods
if (argv._.indexOf('serve') > -1) {
	icarus.serve(argv.p);
}