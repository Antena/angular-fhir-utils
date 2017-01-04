'use strict';

var angular = require('angular');

var ngModule = angular.module('angular-fhir-utils', [ ]);

ngModule.service('FhirBundleResolverService', require('./fhir-bundle-resolver-service'));
ngModule.service('FhirRangeService', require('./fhir-range-service'));

module.exports = ngModule.name;
