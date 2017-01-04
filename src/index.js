'use strict';

var angular = require('angular');

var ngModule = angular.module('angular-fhir-utils', [
	require('./bundle/index'),
	require('./range/index'),
	require('./patient/index'),
	require('./types/index')
]);

module.exports = ngModule.name;
