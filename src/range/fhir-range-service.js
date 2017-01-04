'use strict';

/**
 * @ngdoc service
 * @name angular-fhir-utils.range.service:FhirRangeService
 * @kind function
 *
 * @description
 * `FhirRangeService` provides some utilitary functions for filtering out observation referenceRanges which are not relevant for the given patient data.
 *
 */

var FhirUtils = require('fhir-utils');

// @ngInject
module.exports = function() {
	var rangeService = FhirUtils.RangeService();

	return {
		/**
		 * @ngdoc function
		 * @name filterRanges
		 * @methodOf angular-fhir-utils.range.service:FhirRangeService
		 * @description
		 *
		 * Filters ranges that are age or gender specific, given the patient data.
		 *
		 * @param {Array} referenceRanges A list of {@link https://www.hl7.org/fhir/2015MAY/datatypes.html#Range FHIR ranges} to filter.
		 * @param {Number} patientAgeInYears The age of the patient at the moment the DiagnosticReport was generated, in years (decimal number). If available, ranges that are age-specific will be filtered accordingly.
		 * @param {String} patientGender A string representation of the patient gender ({@link http://hl7.org/fhir/ValueSet/administrative-gender valid values}). If available, ranges that are gender-specific will be filtered accordingly.
		 *
		 * @returns {Array} The list of ranges that apply given the patient's age.
		 *
		 */
		filterRanges: rangeService.filterRanges,

		/**
		 * @ngdoc function
		 * @name isRangeAgeAppropriate
		 * @methodOf angular-fhir-utils.range.service:FhirRangeService
		 * @description
		 *
		 * Checks whether or not a range is appropriate given the patient's age. Supports all standard {@link https://www.hl7.org/fhir/2015MAY/quantity-comparator.html quantity comparators} plus `equals` ('==').
		 *
		 * @param {Object} range A {@link https://www.hl7.org/fhir/2015MAY/datatypes.html#Range FHIR Range} to inspect.
		 * @param {Number} patientAgeInYearsAtMomentOfReport The age of the patient at the moment the DiagnosticReport was generated, in years (decimal number).
		 *
		 * @returns {Boolean} Returns true if this range is appropriate for the given patient's age.
		 *
		 */
		isRangeAgeAppropriate: rangeService.isRangeAgeAppropriate,

		/**
		 * @ngdoc function
		 * @name valueToYears
		 * @methodOf angular-fhir-utils.range.service:FhirRangeService
		 * @description
		 *
		 * Converts an age quantity in any of these units to years: months (code 'mo'), months (code 'd'), months (code 'wk'). For more info see {@link http://download.hl7.de/documents/ucum/ucumdata.html full list of UCUM codes}.
		 *
		 * @param {Object} ageQuantity An age {@link https://www.hl7.org/fhir/2015MAY/datatypes.html#Range FHIR Quantity} to convert. See {@link https://www.hl7.org/fhir/2015MAY/observation-definitions.html#Observation.referenceRange.age Observation.referenceRange.age} for more info.
		 *
		 * @returns {Number} The quantity value transformed to years.
		 *
		 */
		valueToYears: rangeService.valueToYears,

		/**
		 * @ngdoc function
		 * @name valueInRange
		 * @methodOf angular-fhir-utils.range.service:FhirRangeService
		 * @description
		 *
		 * Determines if a value fits in a specified range.
		 *
		 * @param {Number} value: the value.
		 * @param {Object} range A {@link https://www.hl7.org/fhir/2015MAY/datatypes.html#Range FHIR Range} to inspect.
		 *
		 * @returns {Boolean} Returns true if the given value falls within the provided range.
		 *
		 */
		valueInRange: rangeService.valueInRange,

		QUANTITY_COMPARATOR_OPERATORS: rangeService.QUANTITY_COMPARATOR_OPERATORS
	};
};
