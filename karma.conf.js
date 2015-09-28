module.exports = function(config){
	config.set({
		basePath: './',


		files : [
			'bower_components/angular/angular.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'builds/dev/app/**/*.js'
		],

		autoWatch : true,

		frameworks: ['jasmine'],

		browser:[
			'Chrome',
			// 'Safari',
			// 'Mozilla',
			// 'Opera'
		],

		plugins:{
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-junit-reporter'
		}

		reportest: ['progress', 'junit'],
		junitReporter:{
			outputDir: 'test_out',
			outputFile: 'unit.xml',
			suite: ''
		}
	});
};