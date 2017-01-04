'use strict';

var angular = require('angular');

var ngModule = angular.module('angular-fhir-utils.types', [ ]);

ngModule.filter('fhirCodeableConcept', require('./fhir-codeable-concept-filter'));

module.exports = ngModule.name;
