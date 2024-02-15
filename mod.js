// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,u=e-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(u):t(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,v=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function N(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=v.call(t,b,"$1e"),t=v.call(t,w,"e"),t=v.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=v.call(t,p,"e+0$1"),t=v.call(t,y,"e-0$1"),r.alternate&&(t=v.call(t,g,"$1."),t=v.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function A(r,e,n){var t=e-r.length;return t<0?r:r=n?r+m(t):m(t)+r}var x=String.fromCharCode,k=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,u,a,c,s,l,v;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,v=0;v<n.length;v++)switch(u=n.charAt(v)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,k(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!k(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(a)?String(t.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=N(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function V(r){return"string"==typeof r}function j(r){var e,n;if(!V(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var T=Object.prototype,O=T.toString,$=T.__defineGetter__,G=T.__defineSetter__,H=T.__lookupGetter__,L=T.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,u,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||L.call(r,e)?(t=r.__proto__,r.__proto__=T,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),u="get"in n,a="set"in n,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&$&&$.call(r,e,n.get),a&&G&&G.call(r,e,n.set),r};function C(r,e,n){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function Z(r){return r===R||r===M}function X(r){return Math.abs(r)}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var q=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";var J=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,u;if(null==r)return q.call(r);n=r[D],u=D,e=null!=(i=r)&&z.call(i,u);try{r[D]=void 0}catch(e){return q.call(r)}return t=q.call(r),e?r[D]=n:delete r[D],t}:function(r){return q.call(r)},K="function"==typeof Uint32Array;var Q="function"==typeof Uint32Array?Uint32Array:null;var rr,er="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,n;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(K&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var nr=rr,tr="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var ur,ar="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),n=e,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ur,fr="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var sr,lr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),n=e,r=(fr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var vr=sr,pr="function"==typeof Uint16Array;var yr="function"==typeof Uint16Array?Uint16Array:null;var gr,hr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(pr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var dr,wr={uint16:gr,uint8:vr};(dr=new wr.uint16(1))[0]=4660;var br=52===new wr.uint8(dr.buffer)[0],Nr=!0===br?1:0,mr=new or(1),Ar=new nr(mr.buffer);function xr(r){return mr[0]=r,Ar[Nr]}var kr=!0===br?1:0,_r=new or(1),Er=new nr(_r.buffer);function Ur(r,e){return _r[0]=r,Er[kr]=e>>>0,_r[0]}var Ir=.6931471803691238,Sr=1.9082149292705877e-10;function Fr(r){var e,n,t,i,u,a,o,f,c,s,l,v;return 0===r?M:P(r)||r<0?NaN:(u=0,(n=xr(r))<1048576&&(u-=54,n=xr(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(f=(n&=1048575)+614244&1048576|0)>>20|0,o=(r=Ur(r,n|1072693248^f))-1,(1048575&2+n)<3?0===o?0===u?0:u*Ir+u*Sr:(a=o*o*(.5-.3333333333333333*o),0===u?o-a:u*Ir-(a-u*Sr-o)):(f=n-398458|0,c=440401-n|0,i=(l=(v=(s=o/(2+o))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=t+i,(f|=c)>0?(e=.5*o*o,0===u?o-(e-s*(e+a)):u*Ir-(e-(s*(e+a)+u*Sr)-o)):0===u?o-s*(o-a):u*Ir-(s*(o-a)-u*Sr-o))))}var Vr=Math.floor,jr=Math.ceil;function Tr(r){return r<0?jr(r):Vr(r)}function Or(r,e){var n,t,i,u;return i=(u=r*r)*u,t=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(i=1-(n=.5*u))+(1-i-n+(u*t-r*e))}var $r=-.16666666666666632;function Gr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*($r+i*n):r-(i*(.5*e-t*n)-e-t*$r)}var Hr,Lr,Wr=!0===br?0:1,Cr=new or(1),Pr=new nr(Cr.buffer);!0===br?(Hr=1,Lr=0):(Hr=0,Lr=1);var Rr={HIGH:Hr,LOW:Lr},Mr=new or(1),Zr=new nr(Mr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function qr(r,e){return Zr[Xr]=r,Zr[Yr]=e,Mr[0]}var zr,Br;!0===br?(zr=1,Br=0):(zr=0,Br=1);var Dr={HIGH:zr,LOW:Br},Jr=new or(1),Kr=new nr(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,n,t){return Jr[0]=r,e[t]=Kr[Qr],e[t+n]=Kr[re],e}function ne(r){return ee(r,[0,0],1,0)}C(ne,"assign",ee);var te=[0,0];function ie(r,e){var n,t;return ne.assign(r,te,1,0),n=te[0],n&=2147483647,t=xr(e),qr(n|=t&=2147483648,te[1])}function ue(r,e,n,t){return P(r)||Z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&X(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}C((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var ae=[0,0],oe=[0,0];function fe(r,e){var n,t;return 0===e||0===r||P(r)||Z(r)?r:(ue(r,ae,1,0),e+=ae[1],e+=function(r){var e=xr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=ae[0]),e<-1074?ie(0,r):e>1023?r<0?M:R:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ne.assign(r,oe,1,0),n=oe[0],n&=2148532223,t*qr(n|=e+1023<<20,oe[1])))}function ce(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var se=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],le=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ve=5.960464477539063e-8,pe=ce(20),ye=ce(20),ge=ce(20),he=ce(20);function de(r,e,n,t,i,u,a,o,f){var c,s,l,v,p,y,g,h,d;for(v=u,d=t[n],h=n,p=0;h>0;p++)s=ve*d|0,he[p]=d-16777216*s|0,d=t[h-1]+s,h-=1;if(d=fe(d,i),d-=8*Vr(.125*d),d-=g=0|d,l=0,i>0?(g+=p=he[n-1]>>24-i,he[n-1]-=p<<24-i,l=he[n-1]>>23-i):0===i?l=he[n-1]>>23:d>=.5&&(l=2),l>0){for(g+=1,c=0,p=0;p<n;p++)h=he[p],0===c?0!==h&&(c=1,he[p]=16777216-h):he[p]=16777215-h;if(i>0)switch(i){case 1:he[n-1]&=8388607;break;case 2:he[n-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=fe(1,i)))}if(0===d){for(h=0,p=n-1;p>=u;p--)h|=he[p];if(0===h){for(y=1;0===he[u-y];y++);for(p=n+1;p<=n+y;p++){for(f[o+p]=se[a+p],s=0,h=0;h<=o;h++)s+=r[h]*f[o+(p-h)];t[p]=s}return de(r,e,n+=y,t,i,u,a,o,f)}}if(0===d)for(n-=1,i-=24;0===he[n];)n-=1,i-=24;else(d=fe(d,-i))>=16777216?(s=ve*d|0,he[n]=d-16777216*s|0,i+=24,he[n+=1]=s):he[n]=0|d;for(s=fe(1,i),p=n;p>=0;p--)t[p]=s*he[p],s*=ve;for(p=n;p>=0;p--){for(s=0,y=0;y<=v&&y<=n-p;y++)s+=le[y]*t[p+y];ge[n-p]=s}for(s=0,p=n;p>=0;p--)s+=ge[p];for(e[0]=0===l?s:-s,s=ge[0]-s,p=1;p<=n;p++)s+=ge[p];return e[1]=0===l?s:-s,7&g}function we(r,e,n,t){var i,u,a,o,f,c,s;for(4,(u=(n-3)/24|0)<0&&(u=0),o=n-24*(u+1),c=u-(a=t-1),s=a+4,f=0;f<=s;f++)pe[f]=c<0?0:se[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*pe[a+(f-c)];ye[f]=i}return 4,de(r,e,4,ye,o,4,u,a,pe)}var be=Math.round;function Ne(r,e,n){var t,i,u,a,o;return u=r-1.5707963267341256*(t=be(.6366197723675814*r)),a=6077100506506192e-26*t,o=e>>20|0,n[0]=u-a,o-(xr(n[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((i=u)-(u=i-(a=6077100506303966e-26*t))-a),n[0]=u-a,o-(xr(n[0])>>20&2047)>49&&(a=84784276603689e-45*t-((i=u)-(u=i-(a=20222662487111665e-37*t))-a),n[0]=u-a)),n[1]=u-n[0]-a,t}var me=1.5707963267341256,Ae=6077100506506192e-26,xe=2*Ae,ke=4*Ae,_e=[0,0,0],Ee=[0,0];function Ue(r,e){var n,t,i,u,a,o,f;if((i=2147483647&xr(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Ne(r,i,e):i<=1073928572?r>0?(f=r-me,e[0]=f-Ae,e[1]=f-e[0]-Ae,1):(f=r+me,e[0]=f+Ae,e[1]=f-e[0]+Ae,-1):r>0?(f=r-2*me,e[0]=f-xe,e[1]=f-e[0]-xe,2):(f=r+2*me,e[0]=f+xe,e[1]=f-e[0]+xe,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Ne(r,i,e):r>0?(f=r-3*me,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*me,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===i?Ne(r,i,e):r>0?(f=r-4*me,e[0]=f-ke,e[1]=f-e[0]-ke,4):(f=r+4*me,e[0]=f+ke,e[1]=f-e[0]+ke,-4);if(i<1094263291)return Ne(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Cr[0]=r,Pr[Wr]}(r),f=qr(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)_e[a]=0|f,f=16777216*(f-_e[a]);for(_e[2]=f,u=3;0===_e[u-1];)u-=1;return o=we(_e,Ee,t,u),r<0?(e[0]=-Ee[0],e[1]=-Ee[1],-o):(e[0]=Ee[0],e[1]=Ee[1],o)}var Ie=[0,0];function Se(r){var e;if(e=xr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Or(r,0);if(e>=2146435072)return NaN;switch(3&Ue(r,Ie)){case 0:return Or(Ie[0],Ie[1]);case 1:return-Gr(Ie[0],Ie[1]);case 2:return-Or(Ie[0],Ie[1]);default:return Gr(Ie[0],Ie[1])}}var Fe=[0,0];function Ve(r){var e;if(e=xr(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Gr(r,0);if(e>=2146435072)return NaN;switch(3&Ue(r,Fe)){case 0:return Gr(Fe[0],Fe[1]);case 1:return Or(Fe[0],Fe[1]);case 2:return-Gr(Fe[0],Fe[1]);default:return-Or(Fe[0],Fe[1])}}var je=3.141592653589793;var Te=1.4616321449683622,Oe=1.4616321449683622;function $e(r){var e,n,t,i,u,a,o,f,c,s,l,v,p;if(P(r)||Z(r))return r;if(0===r)return R;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Fr(r);if(e){if(r>=4503599627370496)return R;if(c=function(r){var e,n;return P(r)||Z(r)?NaN:0===(e=X(n=r%2))||1===e?ie(0,n):e<.25?Ve(je*n):e<.75?ie(Se(je*(e=.5-e)),n):e<1.25?(n=ie(1,n)-n,Ve(je*n)):e<1.75?-ie(Se(je*(e-=1.5)),n):(n-=ie(2,n),Ve(je*n))}(r),0===c)return R;n=Fr(je/X(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(p=-Fr(r),r>=Te-1+.27?(l=1-r,t=0):r>=Te-1-.27?(l=r-(Oe-1),t=1):(l=r,t=2)):(p=0,r>=Te+.27?(l=2-r,t=0):r>=Te-.27?(l=r-Oe,t=1):(l=r-1,t=2)),t){case 0:a=.07721566490153287+(v=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),u=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),p+=(o=l*a+u)-.5*l;break;case 1:a=.48383612272381005+(s=(v=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),u=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),p+=-.12148629053584961+(o=v*a-(-3638676997039505e-33-s*(u+l*i)));break;case 2:a=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),u=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),p+=-.5*l+a/u}else if(r<8)switch(o=(l=r-(t=Tr(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),p=.5*l+o/f,v=1,t){case 7:v*=l+6;case 6:v*=l+5;case 5:v*=l+4;case 4:v*=l+3;case 3:p+=Fr(v*=l+2)}else r<0x400000000000000?(c=Fr(r),s=.4189385332046727+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=v*v),p=(r-.5)*(c-1)+s):p=r*(Fr(r)-1);return e&&(p=n-p),p}function Ge(r){return Vr(r)===r}function He(r){return 0===r&&1/r===M}function Le(r){return Ge(r/2)}function We(r){return Le(r>0?r-1:r+1)}var Ce=Math.sqrt,Pe=!0===br?0:1,Re=new or(1),Me=new nr(Re.buffer);function Ze(r,e){return Re[0]=r,Me[Pe]=e>>>0,Re[0]}function Xe(r){return 0|r}var Ye=[1,1.5],qe=[0,.5849624872207642],ze=[0,1.350039202129749e-8];var Be=1e300,De=[0,0],Je=[0,0];function Ke(r,e){var n,t,i,u,a,o,f,c,s,l,v,p,y,g;if(P(r)||P(e))return NaN;if(ne.assign(e,De,1,0),a=De[0],0===De[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Ce(r);if(-.5===e)return 1/Ce(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:X(r)<1==(e===R)?0:R}(r,e)}if(ne.assign(r,De,1,0),u=De[0],0===De[1]){if(0===u)return function(r,e){return e===M?R:e===R?0:e>0?We(e)?r:0:We(e)?ie(R,r):R}(r,e);if(1===r)return 1;if(-1===r&&We(e))return-1;if(Z(r))return r===M?Ke(-0,-e):e<0?0:R}if(r<0&&!1===Ge(e))return(r-r)/(r-r);if(i=X(r),n=2147483647&u|0,t=2147483647&a|0,f=a>>>31|0,o=(o=u>>>31|0)&&We(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&xr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?o*Be*Be:1e-300*o*1e-300;if(n>1072693248)return 0===f?o*Be*Be:1e-300*o*1e-300;v=function(r,e){var n,t,i,u,a,o;return n=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=Ze(t=(u=1.4426950216293335*i)+a,0))-u),r[0]=t,r[1]=n,r}(Je,i)}else v=function(r,e,n){var t,i,u,a,o,f,c,s,l,v,p,y,g,h,d,w,b,N,m,A,x;return N=0,n<1048576&&(N-=53,n=xr(e*=9007199254740992)),N+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?A=0:m<767610?A=1:(A=0,N+=1,n-=1048576),a=Ze(i=(w=(e=Ur(e,n))-(c=Ye[A]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Ur(0,t+=A<<18),d=(u=i*i)*u*(0===(x=u)?.5999999999999946:.5999999999999946+x*(.4285714285785502+x*(.33333332981837743+x*(.272728123808534+x*(.23066074577556175+.20697501780033842*x))))),f=Ze(f=3+(u=a*a)+(d+=(o=b*(w-a*f-a*(e-(f-c))))*(a+i)),0),g=(p=-7.028461650952758e-9*(l=Ze(l=(w=a*f)+(b=o*f+(d-(f-3-u))*i),0))+.9617966939259756*(b-(l-w))+ze[A])-((y=Ze(y=(v=.9617967009544373*l)+p+(s=qe[A])+(h=N),0))-h-s-v),r[0]=y,r[1]=g,r}(Je,i,n);if(p=(l=(e-(c=Ze(e,0)))*v[0]+e*v[1])+(s=c*v[0]),ne.assign(p,De,1,0),y=Xe(De[0]),g=Xe(De[1]),y>=1083179008){if(0!=(y-1083179008|g))return o*Be*Be;if(l+8008566259537294e-32>p-s)return o*Be*Be}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|g))return 1e-300*o*1e-300;if(l<=p-s)return 1e-300*o*1e-300}return p=function(r,e,n){var t,i,u,a,o,f,c,s,l,v,p;return v=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-v>>>0,r<0&&(s=-s),e-=u=Ur(0,t)),r=Xe(r=xr(c=1-((c=(a=.6931471824645996*(u=Ze(u=n+e,0)))+(o=.6931471805599453*(n-(u-e))+-1.904654299957768e-9*u))*(i=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=o-(c-a))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?fe(c,s):Ur(c,r)}(y,s,l),o*p}function Qe(r){var e;return P(r)||r===R?r:r===M?0:r>709.782712893384?R:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,u,a;return fe(1-(e-(t=r-e)*(u=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(e=Tr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function rn(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=Qe(r),2.5066282746310007*(n=r>143.01608?(t=Ke(r,.5*r-.25))*(t/n):Ke(r,r-.5)/n)*e}function en(r,e){return e/((1+.5772156649015329*r)*r)}function nn(r){var e,n,t,i;if(Ge(r)&&r<0||r===M||P(r))return NaN;if(0===r)return He(r)?M:R;if(r>171.61447887182297)return R;if(r<-170.5674972726612)return 0;if((n=X(r))>33)return r>=0?rn(r):(e=0==(1&(t=Vr(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*Ve(je*i),e*je/(X(i)*rn(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return en(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return en(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var tn=17976931348623157e292;var un=.8450629115104675;function an(r){var e,n,t,i,u,a,o,f;if(P(r))return NaN;if(r===R)return 0;if(r===M)return 2;if(0===r)return 1;if(r<0?(e=!0,n=-r):(e=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(i=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),u=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),a=i/u,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(n<1.25)return o=(u=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,f=1+u*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(u),e?1+un+o/f:1-un-o/f;if(n<28){if(u=1/(n*n),n<2.857142857142857)i=u*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(u);else{if(r<-6)return 2;i=u*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(u)}return i=Qe(-(t=Ze(n,0))*t-.5625)*Qe((t-n)*(t+n)+i/u),e?2-i/n:i/n}return e?2:0}function on(r,e){var n;return n=r*Fr(e),e>=1?n<709.782712893384&&-e>-708.3964185322641?Ke(e,r)*Qe(-e):r>=1?Ke(e/Qe(e/r),r):Qe(n-e):n>-708.3964185322641?Ke(e,r)*Qe(-e):e/r<709.782712893384?Ke(e/Qe(e/r),r):Qe(n-e)}function fn(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=r[t-=1]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var cn=Function;C(fn,"factory",(function(r){var e,n,t,i;if(r.length>500)return function(e){return fn(r,e)};if(e="return function evalpoly(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",new cn(e+="//# sourceURL=evalpoly.factory.js")()}));var sn=2220446049250313e-31,ln=eval;function vn(){var r;try{ln('"use strict"; (function* () {})'),r=!0}catch(e){r=!1}return r}var pn=vn()?function(r,e){var n,t,i,u,a;if(a={},arguments.length>1&&(a=e),n=a.tolerance||sn,i=a.maxTerms||1e6,u=a.initialValue||0,!0==("function"==typeof r.next)){for(t of r)if(X(n*(u+=t))>=X(t)||0==--i)break}else do{u+=t=r()}while(X(n*u)<X(t)&&--i);return u}:function(r,e){var n,t,i,u,a;a={},arguments.length>1&&(a=e),n=a.tolerance||sn,i=a.maxTerms||1e6,u=a.initialValue||0;do{u+=t=r()}while(X(n*u)<X(t)&&--i);return u};var yn=[0,0,0,0,0,0,0,0,0,0];function gn(r,e){var n,t,i,u;return t=-function(r){var e,n;return r<=-1?NaN:(n=X(r))>.95?Fr(1+r)-r:n<sn?-r*r/2:(e={initialValue:-r},pn(function(r){var e=-r,n=-1,t=0;return function(){return(n*=e)/(t+=1)}}(r),e))}((e-r)/r),i=r*t,u=Ce(2*t),e<r&&(u=-u),yn[0]=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(u),yn[1]=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(u),yn[2]=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(u),yn[3]=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(u),yn[4]=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(u),yn[5]=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(u),yn[6]=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)}(u),yn[7]=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))}(u),yn[8]=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094}(u),yn[9]=-.0005967612901927463,n=fn(yn,1/r),n*=Qe(-i)/Ce(6.283185307179586*r),e<r&&(n=-n),n+=an(Ce(i))/2}function hn(r,e,n){var t;return n=n||0,t=function(r,e){var n=1,t=r,i=e;return function(){var r=n;return n*=i/(t+=1),r}}(r,e),pn(t,{initialValue:n})}var dn=.6931471803691238,wn=1.9082149292705877e-10;function bn(r){var e,n,t,i,u,a,o,f,c,s;if(r<-1||P(r))return NaN;if(-1===r)return M;if(r===R)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(u=(s=((n=xr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(s=((n=xr(c=r))>>20)-1023,u=0),(n&=1048575)<434334?c=Ur(c,1072693248|n):(s+=1,c=Ur(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*dn+(u+=s*wn):s*dn-((f=e*(1-.6666666666666666*i))-(s*wn+u)-i):(f=(o=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?i-(e-a*(e+f)):s*dn-(e-(a*(e+f)+(s*wn+u))-i))}function Nn(r,e){return P(r)||P(e)?NaN:r===R||e===R?R:r===e&&0===r?function(r){return 0===r&&1/r===R}(r)?r:e:r>e?r:e}function mn(r,e){return P(r)||P(e)?NaN:r===M||e===M?M:r===e&&0===r?He(r)?r:e:r<e?r:e}function An(r,e){var n,t,i,u,a,o,f,c,s,l;return f=(e-r-10.900511+.5)/(i=r+10.900511-.5),r<1?e<=-708.3964185322641?Qe(r*Fr(e)-e-$e(r)):Ke(e,r)*Qe(-e)/nn(r):(X(f*f*r)<=100&&r>150?n=Qe(n=r*(bn(f)-f)+-10.400511*e/i):mn(u=r*Fr(e/i),a=r-e)<=-708.3964185322641||Nn(u,a)>=709.782712893384?(t=a/r,mn(u,a)/2>-708.3964185322641&&Nn(u,a)/2<709.782712893384?n=(o=Ke(e/i,r/2)*Qe(a/2))*o:mn(u,a)/4>-708.3964185322641&&Nn(u,a)/4<709.782712893384&&e>r?(n=(o=Ke(e/i,r/4)*Qe(a/4))*o,n*=n):n=t>-708.3964185322641&&t<709.782712893384?Ke(e*Qe(t)/i,r):Qe(u+a)):n=Ke(e/i,r)*Qe(a),n*=Ce(i/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(s=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(s=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),s/l)))}var xn=.6931471803691238,kn=1.9082149292705877e-10;function _n(r){var e,n,t,i,u,a,o,f,c,s,l,v,p;if(r===R||P(r))return r;if(r===M)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return R}if(a=0|xr(f),f>.34657359027997264)f<1.0397207708399179?t?(i=r+xn,u=-kn,p=-1):(i=r-xn,u=kn,p=1):(p=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,i=r-(l=p|=0)*xn,u=l*kn),s=i-(r=i-u)-u;else{if(a<1016070144)return r;p=0}return o=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),v=c*((o-(l=3-o*e))/(6-r*l)),0===p?r-(r*v-c):(n=qr(1023+p<<20,0),v=r*(v-s)-s,v-=c,-1===p?.5*(r-v)-.5:1===p?r<-.25?-2*(v-(r+.5)):1+2*(r-v):p<=-2||p>56?(f=1-(v-r),1024===p?f=Ur(f,i=xr(f)+(p<<20)|0):f*=n,f-1):(l=1,p<20?f=(l=Ur(l,i=1072693248-(2097152>>p)|0))-(v-r):(f=r-(v+(l=Ur(l,i=1023-p<<20|0))),f+=1),f*=n))}function En(r,e,n){var t,i,u,a,o,f,c;if(r<sn)return-Fr(r);if(0===e||0===n)return 0;if(i=0,r>2){if(r>=3){do{n-=1,i+=Fr(r-=1)}while(r>=3);n=r-2}return i+=.15896368026733398*(u=n*(r+1))+u*(a=0===(o=n)?-.01803556856784494:((o<0?-o:o)<=1?(f=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(f=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),f/c))}return r<1&&(i+=-Fr(r),n=e,e=r,r+=1),r<=1.5?(u=function(r){var e,n;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(e=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),n=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(e=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,n=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),e/n)}(e),i+=.5281534194946289*(t=e*n)+t*u):(u=n*e,a=function(r){var e,n;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(e=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,n=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(e=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),n=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),e/n)}(-n),i+=.45201730728149414*u+u*a)}function Un(r,e,n){var t,i,u,a;return t=function(r){return P(r)?NaN:r<0?r<-.5?nn(1+r)-1:_n(-bn(r)+En(r+2,r+1,r)):r<2?_n(En(r+1,r,r-1)):nn(1+r)-1}(r),i=(t+1)/r,u=function(r,e){var n;if(P(r)||P(e))return NaN;if(0===e)return 0;if(0===r)return-1;if(r<0&&e%2==0&&(r=-r),r>0){if((X(e*(r-1))<.5||X(e)<.2)&&(n=Fr(r)*e)<.5)return _n(n)}else if(Tr(e)!==e)return NaN;return Ke(r,e)-1}(e,r),t-=u,t/=r,a=function(r,e){var n,t,i,u;return n=-e,e=-e,t=r+1,i=1,function(){return u=n/t,n*=e,n/=i+=1,t+=1,u}}(r,e),t=-(u+=1)*pn(a,{initialValue:((n?i:0)-t)/u}),n&&(t=-t),[t,i]}function In(r,e,n){var t,i,u,a,o,f,c;if(a=(c=(t="function"==typeof r.next)?r.next().value:r())[1],u=c[0],0===a&&(a=11754943508222875e-54),o=a,f=0,!0===t)do{(c=r.next().value)&&(0===(f=c[1]+c[0]*f)&&(f=11754943508222875e-54),0===(o=c[1]+c[0]/o)&&(o=11754943508222875e-54),a*=i=o*(f=1/f))}while(X(i-1)>e&&--n);else do{(c=r())&&(0===(f=c[1]+c[0]*f)&&(f=11754943508222875e-54),0===(o=c[1]+c[0]/o)&&(o=11754943508222875e-54),a*=i=o*(f=1/f))}while(c&&X(i-1)>e&&--n);return u/a}function Sn(r,e,n){var t,i,u,a,o,f;if(0===(u=(f=(t="function"==typeof r.next)?r.next().value:r())[1])&&(u=11754943508222875e-54),a=u,o=0,!0===t)do{(f=r.next().value)&&(0===(o=f[1]+f[0]*o)&&(o=11754943508222875e-54),0===(a=f[1]+f[0]/a)&&(a=11754943508222875e-54),u*=i=a*(o=1/o))}while(f&&X(i-1)>e&&--n);else do{(f=r())&&(0===(o=f[1]+f[0]*o)&&(o=11754943508222875e-54),0===(a=f[1]+f[0]/a)&&(a=11754943508222875e-54),u*=i=a*(o=1/o))}while(f&&X(i-1)>e&&--n);return u}function Fn(r,e,n){var t,i,u,a,o,f;o=(f=r())[1],i=f[0],0===o&&(o=11754943508222875e-54),u=o,a=0;do{(f=r())&&(0===(a=f[1]+f[0]*a)&&(a=11754943508222875e-54),0===(u=f[1]+f[0]/u)&&(u=11754943508222875e-54),o*=t=u*(a=1/a))}while(f&&X(t-1)>e&&--n);return i/o}function Vn(r,e,n){var t,i,u,a,o;0===(a=(o=r())[1])&&(a=11754943508222875e-54),i=a,u=0;do{(o=r())&&(0===(u=o[1]+o[0]*u)&&(u=11754943508222875e-54),0===(i=o[1]+o[0]/i)&&(i=11754943508222875e-54),a*=t=i*(u=1/u))}while(o&&X(t-1)>e&&--n);return a}var jn=vn()?function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),n=t.maxIter||1e6,i=t.tolerance||sn,t.keep?Sn(r,i,n):In(r,i,n)}:function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),i=t.tolerance||sn,n=t.maxIter||1e6,t.keep?Vn(r,i,n):Fn(r,i,n)};function Tn(r,e){var n=function(r,e){var n=e-r+1,t=r,i=0;return function(){return[(i+=1)*(t-i),n+=2]}}(r,e);return 1/(e-r+1+jn(n))}function On(r,e,n,t){var i,u,a,o,f,c,s,l,v,p,y,g,h;if(r<0||e<=0)return NaN;if(u=void 0===n||n,s=t,l=0,e>=170&&!u)return s&&4*e<r?(l=e*Fr(r)-r,l+=Fr(Tn(e,r))):!s&&e>4*r?(l=e*Fr(r)-r,l+=Fr(hn(e,r,o=0)/e)):0===(l=On(e,r,!0,s))?s?(l=Fr(l=1+1/(12*e)+1/(288*e*e))-e+(e-.5)*Fr(e),l+=Fr(2.5066282746310007)):(l=e*Fr(r)-r,l+=Fr(hn(e,r,o=0)/e)):l=Fr(l)+$e(e),l>709.782712893384?R:Qe(l);switch(e<30&&e<=r+1&&r<709.782712893384?f=!(v=(g=Vr(e))===e)&&.5===X(g-e):v=f=!1,v&&r>.6?(s=!s,a=0):f&&r>.2?(s=!s,a=1):r<1.4901161193847656e-8&&e>1?a=6:r<.5?a=-.4/Fr(r)<e?2:3:r<1.1?a=.75*r<e?2:3:(c=!1,u&&e>20&&(p=X((r-e)/e),e>200?20/e>p*p&&(c=!0):p<.4&&(c=!0)),c?a=5:r-1/(3*r)<e?a=2:(a=4,s=!s)),a){case 0:l=function(r,e){var n,t,i;if(0!==(t=Qe(-e)))for(n=t,i=1;i<r;++i)n/=i,t+=n*=e;return t}(e,r),!1===u&&(l*=nn(e));break;case 1:l=function(r,e){var n,t,i,u;if(0!==(i=an(Ce(e)))&&r>1){for(n=Qe(-e)/Ce(je*e),n*=e,t=n/=.5,u=2;u<r;++u)n/=u-.5,t+=n*=e;i+=t}return i}(e,r),!1===u&&(l*=nn(e));break;case 2:0!==(l=u?An(e,r):on(e,r))&&(o=0,i=!1,s&&(o=u?1:nn(e),u||l>=1||tn*l>o?(o/=l,u||e<1||tn/e>o?(o*=-e,i=!0):o=0):o=0)),l*=hn(e,r,o)/e,i&&(s=!1,l=-l);break;case 3:l=(y=Un(e,r,s=!s))[0],h=y[1],s=!1,u&&(l/=h);break;case 4:0!==(l=u?An(e,r):on(e,r))&&(l*=Tn(e,r));break;case 5:l=gn(e,r),r>=e&&(s=!s);break;case 6:l=u?Ke(r,e)/nn(e+1):Ke(r,e)/e,l*=1-e*r/(e+1)}return u&&l>1&&(l=1),s&&(l=(u?1:nn(e))-l),l}function $n(r,e){return P(r)||P(e)||e<0?NaN:r<0?0:0===e||r===R?1:On(e,Vr(r)+1,!0,!0)}function Gn(r){return function(){return r}}function Hn(r){return P(r)?Gn(NaN):function(e){if(P(e))return NaN;return e<r?0:1}}function Ln(r){return P(r)||r<0?Gn(NaN):0===r?Hn(0):function(e){if(P(e))return NaN;if(e<0)return 0;if(e===R)return 1;return On(r,Vr(e)+1,!0,!0)}}C((function(r,e){return P(r)||P(e)?NaN:r<e?0:1}),"factory",Hn),C($n,"factory",Ln);export{$n as default,Ln as factory};
//# sourceMappingURL=mod.js.map
