'use strict';

/**
 * @ngdoc service
 * @name angular-fhir-utils.service:FhirBundleResolverService
 * @kind function
 *
 * @description
 * Given a valid FHIR bundle, embeds referenced resources.
 *
 * <div class="alert alert-warning">
 * **Note:** this service only supports a few types of FHIR resources for the moment.
 *
 * List of supported resource types:
 * <ul>
 *     <li><a href="https://www.hl7.org/fhir/2015MAY/diagnosticorder.html">DiagnosticOrder</a></li>
 *     <li><a href="https://www.hl7.org/fhir/2015MAY/practitioner.html">Practitioner</a></li>
 *     <li><a href="https://www.hl7.org/fhir/2015MAY/patient.html">Patient</a></li>
 *     <li><a href="https://www.hl7.org/fhir/2015MAY/organization.html">Organization</a></li>
 *     <li><a href="https://www.hl7.org/fhir/2015MAY/diagnosticreport.html">DiagnosticReport</a></li>
 *     <li><a href="https://www.hl7.org/fhir/2015MAY/observation.html">Observation</a></li>
 * </ul>
 * </div>
 *
 * See the individual methods for more information and examples.
 *
 */

var FhirUtils = require('fhir-utils');

// @ngInject
module.exports = function() {
	var bundleResolverService = FhirUtils.BundleResolverService();

	return {

		/**
		 * @ngdoc function
		 * @name resolveOrderAndReportReferences
		 * @methodOf angular-fhir-utils.service:FhirBundleResolverService
		 * @description
		 *
		 * Takes a FHIR bundle, and resolves all references starting from a `DiagnosticOrder`. If a orderValueIdentifier is provided,
		 * that `DiagnosticOrder` will be used. Otherwise, the first DiagnosticOrder in the bundle will be chosen.
		 *
		 * @param {Object} fhirBundle A valid FHIR bundle.
		 * @param {String=} orderValueIdentifier The order identifier value from which all resolutions begin (`order.identifier[0].value`)
		 *
		 * @returns {Object} The resolved bundle, with the following structure:
		 * ```js
		 * {
		 *   // each of these contains all embedded resources (orderer, subject, etc)
		 *   diagnosticOrder: order,
		 *   diagnosticReport: report,
		 *   observations: report.result
		 * };
		 * ```
		 *
		 */
		resolveOrderAndReportReferences: bundleResolverService.resolveOrderAndReportReferences
	};
};
