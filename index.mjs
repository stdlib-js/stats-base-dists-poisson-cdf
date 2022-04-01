// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammainc@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-cdf@esm/index.mjs";var m=s,a=e,o=n,l=r;var f=function(t,s){return a(t)||a(s)||s<0?NaN:t<0?0:0===s||t===l?1:m(s,o(t)+1,!0,!0)},j=i,p=d.factory,c=s,h=e,u=n,b=r;var v=f,g=function(t){return h(t)||t<0?j(NaN):0===t?p(0):function(s){if(h(s))return NaN;if(s<0)return 0;if(s===b)return 1;return c(t,u(s)+1,!0,!0)}};t(v,"factory",g);var x=v;export{x as default,g as factory};
//# sourceMappingURL=index.mjs.map
