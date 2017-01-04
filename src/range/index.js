'use strict';

var angular = require('angular');

var ngModule = angular.module('angular-fhir-utils.range', [ ]);

ngModule.service('FhirRangeService', require('./fhir-range-service'));

module.exports = ngModule.name;
