"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=u(function(k,n){
var s=require('@stdlib/math-base-special-gammainc/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-floor/dist'),N=require('@stdlib/constants-float64-pinf/dist');function y(r,e){return i(r)||i(e)||e<0?NaN:r<0?0:e===0||r===N?1:s(e,v(r)+1,!0,!0)}n.exports=y
});var o=u(function(w,c){
var g=require('@stdlib/utils-constant-function/dist'),p=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,F=require('@stdlib/math-base-special-gammainc/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-floor/dist'),P=require('@stdlib/constants-float64-pinf/dist');function O(r){if(a(r)||r<0)return g(NaN);if(r===0)return p(0);return e;function e(t){return a(t)?NaN:t<0?0:t===P?1:F(r,I(t)+1,!0,!0)}}c.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=f(),h=o();R(q,"factory",h);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
