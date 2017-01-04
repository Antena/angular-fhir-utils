'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		ngdocs: {
			options: {
				dest: 'docs',
				scripts: [
					//TODO (denise) add bundle + remove angular once examples are added in docs
					// 'dist/bundle.js',

					'node_modules/angular/angular.min.js',
					'node_modules/angular-animate/angular-animate.min.js'
				],
				styles: [
				],
				html5Mode: false,
				editExample: false
			},
			api: {
				src: ['src/**/*.js'],
				title: 'API Documentation'
			}
		},
		clean: {
			ngdocs: ['partials/', 'js/', 'font/', 'css/']
		}
	});

	grunt.loadNpmTasks('grunt-ngdocs');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('docs', [
		'ngdocs',
		'clean:ngdocs'
	]);
};
