var RX_VERESION = /[0-9]+\.[0-9]+\.[0-9]+/;

module.exports = {
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
	}
};