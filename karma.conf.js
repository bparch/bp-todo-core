module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: ['test/**/*.js', './node_modules/requirejs/require'],
		exclude: [],
		preprocessors: {},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity
	})
}