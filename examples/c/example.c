/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/poisson/cdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( double min, double max ) {
	double scale = rand() / (double) RAND_MAX;
	return min + ( scale * ( max - min ) );
}

int main( void ) {
	double lambda;
	double x;
	double y;
	int i;

	for ( i = 0; i < 25; i++ ) {
		lambda = random_uniform( 0.1, 5.0 );
		x = random_uniform( 0.0, 10.0 );
		y = stdlib_base_dists_poisson_cdf( x, lambda );
		printf( "x: %lf, λ: %lf, F(x;λ): %lf\n", x, lambda, y );
	}
}
