'use strict';

/**
 * @ngdoc filter
 * @name angular-fhir-utils.types.filter:fhirCodeableConcept
 * @kind function
 *
 * @description
 *   //TODO (denise) add description
 *
 * @param {Object} code A valid FHIR CodeableConcept. See https://www.hl7.org/fhir/2015MAY/datatypes.html#CodeableConcept
 *
 * @returns {String} A string representation of the codeable concept.
 *
 *
 * @example
 <example module="codeable-concept-example">
 <file name="index.html">
 <div ng-controller="ExampleController">

 <p>CodeableConcept with text: <strong>{{ codeableConceptWithText | json }}</strong></p>
 <p>CodeableConcept with text (filtered): <strong>{{ codeableConceptWithText | fhirCodeableConcept | json }}</strong></p>
 <hr/>
 <p>CodeableConcept with display: <strong>{{ codeableConceptWithDisplay | json }}</strong></p>
 <p>CodeableConcept with display (filtered): <strong>{{ codeableConceptWithDisplay | fhirCodeableConcept | json }}</strong></p>


 </div>
 </file>
 <file name="demo.js">

 angular.module('codeable-concept-example', ['angular-fhir-utils.types'])
 .controller('ExampleController', ['$scope', function($scope) {
		$scope.codeableConceptWithText = {
			"coding": [
				{
					"system": "www.loinc.org",
					"code": "11502-2"
				}
			],
			"text": "Laboratory report"

		};

		$scope.codeableConceptWithDisplay = {
			"coding": [
			  {
				"system": "http://loinc.org",
				"code": "15074-8",
				"display": "Glucose [Moles/volume] in Blood"
			  }
			]
		};


	}]);

 </file>
 </example>
 *
 */

// @ngInject
module.exports = function() {
	return function(code) {
		return code ? (code.text || code.coding[0].display) : null;
	};
};
