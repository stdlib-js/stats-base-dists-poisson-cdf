/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var constantFunction = require( '@stdlib/utils-constant-function' );
var degenerate = require( '@stdlib/stats-base-dists-degenerate-cdf' ).factory;
var gammainc = require( '@stdlib/math-base-special-gammainc' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var floor = require( '@stdlib/math-base-special-floor' );
var PINF = require( '@stdlib/constants-float64-pinf' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a Poisson distribution with mean parameter `lambda`.
*
* @param {NonNegativeNumber} lambda - mean parameter
* @returns {Function} CDF
*
* @example
* var cdf = factory( 5.0 );
* var y = cdf( 3.0 );
* // returns ~0.265
*
* y = cdf( 8.0 );
* // returns ~0.932
*/
function factory( lambda ) {
	if ( isnan( lambda ) || lambda < 0.0 ) {
		return constantFunction( NaN );
	}
	if ( lambda === 0.0 ) {
		return degenerate( 0.0 );
	}
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a Poisson distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 2.0 );
	* // returns <number>
	*/
	function cdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 ) {
			return 0.0;
		}
		if ( x === PINF ) {
			return 1.0;
		}
		return gammainc( lambda, floor( x ) + 1.0, true, true );
	}
}


// EXPORTS //

module.exports = factory;
