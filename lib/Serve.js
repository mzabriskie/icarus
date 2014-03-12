var RX_VERESION = /[0-9]+\.[0-9]+\.[0-9]+/,
	DEFAULT_PORT = 3000;

module.exports = {
	DEFAULT_PORT: DEFAULT_PORT,

	parseURL: function (url) {
		var p = url.split('/').slice(1),
			m = p.shift(),
			v = RX_VERESION.test(p[0]) ? p.shift() : 'HEAD',
			f = p.join('/');

		if (!m) {
			throw new Error('No module was specified');
		}

		if (!f) {
			throw new Error('No file was specified');
		}

		return {
			module: m,
			version: v,
			file: f
		}
	},

	parsePort: function (port) {
		// Use the port provided if it's valid
		if (port && !isNaN(parseInt(port, 10))) {
			port = parseInt(port, 10);
		} else {
			port = DEFAULT_PORT;
		}

		return port;
	}
};