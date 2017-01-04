'use strict';

var angular = require('angular');

var ngModule = angular.module('angular-fhir-utils.bundle', [ ]);

ngModule.service('FhirBundleResolverService', require('./fhir-bundle-resolver-service'));

module.exports = ngModule.name;
