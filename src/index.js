'use strict';

var angular = require('angular');

var ngModule = angular.module('antena.angular-fhir-utils', [ ]);

var FhirUtils = require('fhir-utils');
ngModule.service('FhirBundleResolverService', FhirUtils.BundleResolverService);
ngModule.service('FhirRangeService', FhirUtils.RangeService);

module.exports = ngModule.name;
