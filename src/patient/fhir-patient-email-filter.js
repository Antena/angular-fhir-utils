'use strict';

/**
 * @ngdoc filter
 * @name angular-fhir-utils.patient.filter:fhirPatientEmail
 * @kind function
 *
 * @description
 *   Given a fhir patient, finds and returns it's email telecom value.
 *
 * @param {Object} patient An object representing a FHIR patient. See: https://www.hl7.org/fhir/2015MAY/patient.html
 *
 * @returns {String} A string with the email of the patient, or an empty string if not found.
 *
 * @example
 <example module="patient-email-example">
 <file name="index.html">
 <div ng-controller="ExampleController">
 <p>Patient email: <strong>{{ patient | fhirPatientEmail }}</strong></p>
 </div>
 </file>
 <file name="demo.js">

 angular.module('patient-email-example', ['angular-fhir-utils.patient'])
 .controller('ExampleController', ['$scope', function($scope) {
		$scope.patient = {
			name: [
				{
					family: [ "van de Heuvel" ],
					given: [ "Pieter" ]
				}
			],
			telecom: [
			{
			 	system: "email",
			 	value: "pieter@gmail.com"
			 }
		  ]
		};
	}]);

 </file>
 </example>
 *
 */

var _ = require('underscore');

// @ngInject
module.exports = function() {

	function getEmail(patient) {
		var emailTelecom = _.findWhere(patient.telecom, {system: 'email'});
		return emailTelecom ? emailTelecom.value : '';
	}

	return function(patient) {
		return patient && patient.telecom && patient.telecom.length ? getEmail(patient) : '';
	};
};
