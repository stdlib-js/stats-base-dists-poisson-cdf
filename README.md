<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Poisson][poisson-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_cdf" align="center" raw="F(x;\lambda) = \begin{cases} 0 & \text{ for } x \le 0 \\ e^{-\lambda} \sum_{i=0}^{\lfloor x\rfloor} \frac{\lambda^i}{i!} & \text{ for } x > 0 \end{cases}" alt="Cumulative distribution function for a Poisson distribution."> -->

```math
F(x;\lambda) = \begin{cases} 0 & \text{ for } x \le 0 \\ e^{-\lambda} \sum_{i=0}^{\lfloor x\rfloor} \frac{\lambda^i}{i!} & \text{ for } x > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\lambda) = \begin{cases} 0 &amp; \text{ for } x \le 0 \\ e^{-\lambda} \sum_{i=0}^{\lfloor x\rfloor} \frac{\lambda^i}{i!} &amp; \text{ for } x &gt; 0 \end{cases}" data-equation="eq:poisson_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/cdf/docs/img/equation_poisson_cdf.svg" alt="Cumulative distribution function for a Poisson distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `lambda` is the mean parameter. Internally, the module evaluates the CDF by evaluating the upper regularized gamma function at input values `lambda` and `floor( x ) + 1`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-poisson-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-poisson-cdf' );
```

#### cdf( x, lambda )

Evaluates the [cumulative distribution function][cdf] for a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var y = cdf( 2.0, 0.5 );
// returns ~0.986

y = cdf( 2.0, 10.0 );
// returns ~0.003

y = cdf( -1.0, 4.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN
```

If provided `lambda = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( -2.0, 0.0 );
// returns 0.0

y = cdf( 0.0, 0.0 );
// returns 1.0

y = cdf( 10.0, 0.0 );
// returns 1.0
```

#### cdf.factory( lambda )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var mycdf = cdf.factory( 5.0 );
var y = mycdf( 3.0 );
// returns ~0.265

y = mycdf( 8.0 );
// returns ~0.932
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-poisson-cdf' );

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    y = cdf( x, lambda );
    console.log( 'x: %d, λ: %d, F(x;λ): %d', x.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-poisson-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-poisson-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-poisson-cdf/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-poisson-cdf/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-poisson-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-poisson-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-poisson-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-poisson-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-poisson-cdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-poisson-cdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-poisson-cdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-poisson-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-poisson-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

</section>

<!-- /.links -->
