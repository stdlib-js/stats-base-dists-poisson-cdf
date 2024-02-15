// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammainc@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-cdf@v0.2.0-esm/index.mjs";function m(t,r){return e(t)||e(r)||r<0?NaN:t<0?0:0===r||t===i?1:s(r,n(t)+1,!0,!0)}function o(t){return e(t)||t<0?r(NaN):0===t?d(0):function(r){if(e(r))return NaN;if(r<0)return 0;if(r===i)return 1;return s(t,n(r)+1,!0,!0)}}t(m,"factory",o);export{m as default,o as factory};
//# sourceMappingURL=index.mjs.map
