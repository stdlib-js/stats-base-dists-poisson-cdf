"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=u(function(k,n){
var s=require('@stdlib/math-base-special-gammainc/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-floor/dist'),N=require('@stdlib/constants-float64-pinf/dist');function y(e,r){return i(e)||i(r)||r<0?NaN:e<0?0:r===0||e===N?1:s(r,v(e)+1,!0,!0)}n.exports=y
});var o=u(function(w,c){
var g=require('@stdlib/utils-constant-function/dist'),p=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,F=require('@stdlib/math-base-special-gammainc/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-floor/dist'),P=require('@stdlib/constants-float64-pinf/dist');function O(e){if(a(e)||e<0)return g(NaN);if(e===0)return p(0);return r;function r(t){return a(t)?NaN:t<0?0:t===P?1:F(e,I(t)+1,!0,!0)}}c.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=f(),h=o();R(q,"factory",h);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
