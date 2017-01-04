'use strict';

/*jshint expr: true*/
describe('angular-fhir-utils services', function() {

	// Define global references for injections.
	var FhirBundleResolver,
		FhirRange;

	beforeEach(angular.mock.module('angular-fhir-utils'));

	beforeEach(angular.mock.inject(function(FhirBundleResolverService, FhirRangeService) {

		FhirBundleResolver = FhirBundleResolverService;

		FhirRange = FhirRangeService;

	}));

	describe('FhirRangeService', function() {

		describe("valueToYears", function() {

			var ageQuantityInYears = {
				high: {
					code: "a",
					system: "http://unitsofmeasure.org",
					unit: "years",
					value: 0.5,
					comparator: "<="
				}
			};

			var ageQuantityInMonths = {
				high: {
					code: "mo",
					system: "http://unitsofmeasure.org",
					unit: "months",
					value: 5,
					comparator: "<="
				}
			};

			var ageQuantityInWeeks = {
				high: {
					code: "wk",
					system: "http://unitsofmeasure.org",
					unit: "weeks",
					value: 12,
					comparator: "<="
				}
			};

			var ageQuantityInDays = {
				high: {
					code: "d",
					system: "http://unitsofmeasure.org",
					unit: "days",
					value: 30,
					comparator: "<="
				}
			};

			it("should return same value if input is years", function() {
				expect(FhirRange.valueToYears(ageQuantityInYears.high)).to.be.equal(ageQuantityInYears.high.value);
			});

			it("should properly convert months to years", function() {
				expect(FhirRange.valueToYears(ageQuantityInMonths.high)).to.be.equal(ageQuantityInMonths.high.value / 12);
			});

			it("should properly convert weeks to years", function() {
				expect(FhirRange.valueToYears(ageQuantityInWeeks.high)).to.be.equal(ageQuantityInWeeks.high.value * 7 / 365);
			});

			it("should properly convert days to years", function() {
				expect(FhirRange.valueToYears(ageQuantityInDays.high)).to.be.equal(ageQuantityInDays.high.value / 365);
			});

			it("should return undefined if parameter is invalid", function() {
				expect(FhirRange.valueToYears(ageQuantityInDays)).to.be.undefined;
			});
		});
	});
});

