'use strict';

var angular = require('angular');

var ngModule = angular.module('angular-fhir-utils.patient', [ ]);

ngModule.filter('fhirPatientFullName', require('./fhir-patient-full-name-filter'));
ngModule.filter('fhirPatientEmail', require('./fhir-patient-email-filter'));

module.exports = ngModule.name;
