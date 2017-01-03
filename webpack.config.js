var path = require('path'),
	webpack = require("webpack");

var config = {
	context: __dirname,
	entry: {
		'bundle': './test/test-app.js'
	},
	output: {
		path: "test",
		filename: "bundle.js"
	},
	module: {
	},
	resolve: {
		modulesDirectories: ['.', 'node_modules']
	},
	plugins: [ ]
};

module.exports = config;
