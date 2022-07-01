// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return n({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,u=Object.prototype,i=u.toString,f=u.__defineGetter__,o=u.__defineSetter__,c=u.__lookupGetter__,a=u.__lookupSetter__,l=t,v=function(r,n,e){var t,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,n)||a.call(r,n)?(t=r.__proto__,r.__proto__=u,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),v="get"in e,y="set"in e,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&f&&f.call(r,n,e.get),y&&o&&o.call(r,n,e.set),r},y=e()?l:v,s=function(r,n,e){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})},p=function(r){return r!=r},b=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY,h=b,w=N,d=function(r){return r===h||r===w},m=function(r){return Math.abs(r)},A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,g=_,U=function(r){return g.call(r)},x=Object.prototype.hasOwnProperty,j=function(r,n){return null!=r&&x.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",k=j,O=I,S=_,T=U,F=function(r){var n,e,t;if(null==r)return S.call(r);e=r[O],n=k(r,O);try{r[O]=void 0}catch(n){return S.call(r)}return t=S.call(r),n?r[O]=e:delete r[O],t},E=A&&"symbol"==typeof Symbol.toStringTag?F:T,H=E,V="function"==typeof Uint32Array,G="function"==typeof Uint32Array?Uint32Array:null,P=function(r){return V&&r instanceof Uint32Array||"[object Uint32Array]"===H(r)},L=G,M=function(){var r,n;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,4294967296,4294967297]),r=P(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},W="function"==typeof Uint32Array?Uint32Array:void 0,Y=function(){throw new Error("not implemented")},q=M()?W:Y,C=E,R="function"==typeof Float64Array,z="function"==typeof Float64Array?Float64Array:null,B=function(r){return R&&r instanceof Float64Array||"[object Float64Array]"===C(r)},D=z,J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D([1,3.14,-3.14,NaN]),r=B(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},K="function"==typeof Float64Array?Float64Array:void 0,Q=function(){throw new Error("not implemented")},X=J()?K:Q,Z=E,$="function"==typeof Uint8Array,rr="function"==typeof Uint8Array?Uint8Array:null,nr=function(r){return $&&r instanceof Uint8Array||"[object Uint8Array]"===Z(r)},er=rr,tr=function(){var r,n;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,256,257]),r=nr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},ur="function"==typeof Uint8Array?Uint8Array:void 0,ir=function(){throw new Error("not implemented")},fr=tr()?ur:ir,or=E,cr="function"==typeof Uint16Array,ar="function"==typeof Uint16Array?Uint16Array:null,lr=function(r){return cr&&r instanceof Uint16Array||"[object Uint16Array]"===or(r)},vr=ar,yr=function(){var r,n;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,65536,65537]),r=lr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},sr="function"==typeof Uint16Array?Uint16Array:void 0,pr=function(){throw new Error("not implemented")},br={uint16:yr()?sr:pr,uint8:fr};(r=new br.uint16(1))[0]=4660;var Nr,hr,wr=52===new br.uint8(r.buffer)[0],dr=q,mr=!0===wr?1:0,Ar=new X(1),_r=new dr(Ar.buffer),gr=function(r){return Ar[0]=r,_r[mr]},Ur=q,xr=!0===wr?1:0,jr=new X(1),Ir=new Ur(jr.buffer),kr=function(r,n){return jr[0]=r,Ir[xr]=n>>>0,jr[0]},Or=kr,Sr=gr,Tr=Or,Fr=p,Er=N,Hr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Vr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Gr=.6931471803691238,Pr=1.9082149292705877e-10,Lr=1048575,Mr=function(r){var n,e,t,u,i,f,o,c,a,l,v;return 0===r?Er:Fr(r)||r<0?NaN:(u=0,(e=Sr(r))<1048576&&(u-=54,e=Sr(r*=0x40000000000000)),e>=2146435072?r+r:(u+=(e>>20)-1023|0,u+=(o=614244+(e&=Lr)&1048576|0)>>20|0,f=(r=Tr(r,e|1072693248^o))-1,(Lr&2+e)<3?0===f?0===u?0:u*Gr+u*Pr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Gr-(i-u*Pr-f)):(o=e-398458|0,c=440401-e|0,t=(l=(v=(a=f/(2+f))*a)*v)*Hr(l),i=v*Vr(l)+t,(o|=c)>0?(n=.5*f*f,0===u?f-(n-a*(n+i)):u*Gr-(n-(a*(n+i)+u*Pr)-f)):0===u?f-a*(f-i):u*Gr-(a*(f-i)-u*Pr-f))))},Wr=Math.floor,Yr=Math.ceil,qr=Wr,Cr=Yr,Rr=function(r){return r<0?Cr(r):qr(r)},zr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Br=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7},Dr=function(r,n){var e,t,u,i;return u=(i=r*r)*i,t=i*zr(i),t+=u*u*Br(i),(u=1-(e=.5*i))+(1-u-e+(i*t-r*n))},Jr=-.16666666666666632,Kr=function(r,n){var e,t,u;return e=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===n?r+t*(Jr+u*e):r-(u*(.5*n-t*e)-n-t*Jr)},Qr=q,Xr=!0===wr?0:1,Zr=new X(1),$r=new Qr(Zr.buffer),rn=function(r){return Zr[0]=r,$r[Xr]};!0===wr?(Nr=1,hr=0):(Nr=0,hr=1);var nn,en,tn=q,un={HIGH:Nr,LOW:hr},fn=new X(1),on=new tn(fn.buffer),cn=un.HIGH,an=un.LOW,ln=function(r,n){return on[cn]=r,on[an]=n,fn[0]},vn=ln;!0===wr?(nn=1,en=0):(nn=0,en=1);var yn=q,sn={HIGH:nn,LOW:en},pn=new X(1),bn=new yn(pn.buffer),Nn=sn.HIGH,hn=sn.LOW,wn=function(r,n){return pn[0]=n,r[0]=bn[Nn],r[1]=bn[hn],r},dn=function(r,n){return 1===arguments.length?wn([0,0],r):wn(r,n)},mn=dn,An=mn,_n=gr,gn=vn,Un=[0,0],xn=function(r,n){var e,t;return An(Un,r),e=Un[0],e&=2147483647,t=_n(n),gn(e|=t&=2147483648,Un[1])},jn=d,In=p,kn=m,On=function(r,n){return In(n)||jn(n)?(r[0]=n,r[1]=0,r):0!==n&&kn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},Sn=function(r,n){return 1===arguments.length?On([0,0],r):On(r,n)},Tn=gr,Fn=function(r){var n=Tn(r);return(n=(2146435072&n)>>>20)-1023|0},En=b,Hn=N,Vn=p,Gn=d,Pn=xn,Ln=Sn,Mn=Fn,Wn=mn,Yn=vn,qn=[0,0],Cn=[0,0],Rn=function(r,n){var e,t;return 0===n||0===r||Vn(r)||Gn(r)?r:(Ln(qn,r),n+=qn[1],(n+=Mn(r=qn[0]))<-1074?Pn(0,r):n>1023?r<0?Hn:En:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,Wn(Cn,r),e=Cn[0],e&=2148532223,t*Yn(e|=n+1023<<20,Cn[1])))},zn=Rn,Bn=function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e},Dn=Wr,Jn=zn,Kn=function(r){return Bn(0,r)},Qn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Xn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Zn=16777216,$n=5.960464477539063e-8,re=Kn(20),ne=Kn(20),ee=Kn(20),te=Kn(20);function ue(r,n,e,t,u,i,f,o,c){var a,l,v,y,s,p,b,N,h;for(y=i,h=t[e],N=e,s=0;N>0;s++)l=$n*h|0,te[s]=h-Zn*l|0,h=t[N-1]+l,N-=1;if(h=Jn(h,u),h-=8*Dn(.125*h),h-=b=0|h,v=0,u>0?(b+=s=te[e-1]>>24-u,te[e-1]-=s<<24-u,v=te[e-1]>>23-u):0===u?v=te[e-1]>>23:h>=.5&&(v=2),v>0){for(b+=1,a=0,s=0;s<e;s++)N=te[s],0===a?0!==N&&(a=1,te[s]=16777216-N):te[s]=16777215-N;if(u>0)switch(u){case 1:te[e-1]&=8388607;break;case 2:te[e-1]&=4194303}2===v&&(h=1-h,0!==a&&(h-=Jn(1,u)))}if(0===h){for(N=0,s=e-1;s>=i;s--)N|=te[s];if(0===N){for(p=1;0===te[i-p];p++);for(s=e+1;s<=e+p;s++){for(c[o+s]=Qn[f+s],l=0,N=0;N<=o;N++)l+=r[N]*c[o+(s-N)];t[s]=l}return ue(r,n,e+=p,t,u,i,f,o,c)}}if(0===h)for(e-=1,u-=24;0===te[e];)e-=1,u-=24;else(h=Jn(h,-u))>=Zn?(l=$n*h|0,te[e]=h-Zn*l|0,u+=24,te[e+=1]=l):te[e]=0|h;for(l=Jn(1,u),s=e;s>=0;s--)t[s]=l*te[s],l*=$n;for(s=e;s>=0;s--){for(l=0,p=0;p<=y&&p<=e-s;p++)l+=Xn[p]*t[s+p];ee[e-s]=l}for(l=0,s=e;s>=0;s--)l+=ee[s];for(n[0]=0===v?l:-l,l=ee[0]-l,s=1;s<=e;s++)l+=ee[s];return n[1]=0===v?l:-l,7&b}var ie=function(r,n,e,t){var u,i,f,o,c,a,l;for((i=(e-3)/24|0)<0&&(i=0),o=e-24*(i+1),a=i-(f=t-1),l=f+4,c=0;c<=l;c++)re[c]=a<0?0:Qn[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=f;a++)u+=r[a]*re[f+(c-a)];ne[c]=u}return ue(r,n,4,ne,o,4,i,f,re)},fe=Math.round,oe=gr,ce=gr,ae=rn,le=vn,ve=ie,ye=function(r,n,e){var t,u,i,f,o;return i=r-1.5707963267341256*(t=fe(.6366197723675814*r)),f=6077100506506192e-26*t,o=n>>20|0,e[0]=i-f,o-(oe(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),e[0]=i-f,o-(oe(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),e[0]=i-f)),e[1]=i-e[0]-f,t},se=1.5707963267341256,pe=6077100506506192e-26,be=2*pe,Ne=3*pe,he=4*pe,we=[0,0,0],de=[0,0],me=function(r,n){var e,t,u,i,f,o,c;if((u=2147483647&ce(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?ye(r,u,n):u<=1073928572?r>0?(c=r-se,n[0]=c-pe,n[1]=c-n[0]-pe,1):(c=r+se,n[0]=c+pe,n[1]=c-n[0]+pe,-1):r>0?(c=r-2*se,n[0]=c-be,n[1]=c-n[0]-be,2):(c=r+2*se,n[0]=c+be,n[1]=c-n[0]+be,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?ye(r,u,n):r>0?(c=r-3*se,n[0]=c-Ne,n[1]=c-n[0]-Ne,3):(c=r+3*se,n[0]=c+Ne,n[1]=c-n[0]+Ne,-3):1075388923===u?ye(r,u,n):r>0?(c=r-4*se,n[0]=c-he,n[1]=c-n[0]-he,4):(c=r+4*se,n[0]=c+he,n[1]=c-n[0]+he,-4);if(u<1094263291)return ye(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=ae(r),c=le(u-((t=(u>>20)-1046)<<20|0),e),f=0;f<2;f++)we[f]=0|c,c=16777216*(c-we[f]);for(we[2]=c,i=3;0===we[i-1];)i-=1;return o=ve(we,de,t,i),r<0?(n[0]=-de[0],n[1]=-de[1],-o):(n[0]=de[0],n[1]=de[1],o)},Ae=gr,_e=Dr,ge=Kr,Ue=me,xe=[0,0],je=gr,Ie=Dr,ke=Kr,Oe=me,Se=[0,0],Te=function(r){var n;if(n=je(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ke(r,0);if(n>=2146435072)return NaN;switch(3&Oe(r,Se)){case 0:return ke(Se[0],Se[1]);case 1:return Ie(Se[0],Se[1]);case 2:return-ke(Se[0],Se[1]);default:return-Ie(Se[0],Se[1])}},Fe=3.141592653589793,Ee=p,He=d,Ve=function(r){var n;if(n=Ae(r),(n&=2147483647)<=1072243195)return n<1044381696?1:_e(r,0);if(n>=2146435072)return NaN;switch(3&Ue(r,xe)){case 0:return _e(xe[0],xe[1]);case 1:return-ge(xe[0],xe[1]);case 2:return-_e(xe[0],xe[1]);default:return ge(xe[0],xe[1])}},Ge=Te,Pe=m,Le=xn,Me=Fe,We=p,Ye=d,qe=m,Ce=Mr,Re=Rr,ze=function(r){var n,e;return Ee(r)||He(r)?NaN:0===(n=Pe(e=r%2))||1===n?Le(0,e):n<.25?Ge(Me*e):n<.75?Le(Ve(Me*(n=.5-n)),e):n<1.25?(e=Le(1,e)-e,Ge(Me*e)):n<1.75?-Le(Ve(Me*(n-=1.5)),e):(e-=Le(2,e),Ge(Me*e))},Be=b,De=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Je=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Ke=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Qe=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Xe=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},Ze=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},$e=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},rt=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},nt=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},et=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},tt=1.4616321449683622,ut=1.4616321449683622,it=function(r){var n,e,t,u,i,f,o,c;if(We(r)||Ye(r))return r;if(0===r)return Be;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Ce(r);if(n){if(r>=4503599627370496)return Be;if(0===(u=ze(r)))return Be;e=Ce(3.141592653589793/qe(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(c=-Ce(r),r>=tt-1+.27?(f=1-r,t=0):r>=tt-1-.27?(f=r-(ut-1),t=1):(f=r,t=2)):(c=0,r>=tt+.27?(f=2-r,t=0):r>=tt-.27?(f=r-ut,t=1):(f=r-1,t=2)),t){case 0:c+=f*(.07721566490153287+(o=f*f)*De(o))+o*(.3224670334241136+o*Je(o))-.5*f;break;case 1:c+=(o=f*f)*(.48383612272381005+(i=o*f)*Xe(i))-(-3638676997039505e-33-i*(i*Ze(i)-.1475877229945939+f*(.06462494023913339+i*$e(i))))-.12148629053584961;break;case 2:c+=-.5*f+f*(f*rt(f)-.07721566490153287)/(1+f*nt(f))}else if(r<8)switch(c=.5*(f=r-(t=Re(r)))+f*(f*Qe(f)-.07721566490153287)/(1+f*Ke(f)),o=1,t){case 7:o*=f+6;case 6:o*=f+5;case 5:o*=f+4;case 4:o*=f+3;case 3:c+=Ce(o*=f+2)}else c=r<0x400000000000000?(r-.5)*((u=Ce(r))-1)+(i=.4189385332046727+(o=1/r)*et(f=o*o)):r*(Ce(r)-1);return n&&(c=e-c),c},ft=Wr,ot=function(r){return ft(r)===r},ct=N,at=function(r){return 0===r&&1/r===ct},lt=ot,vt=function(r){return lt(r/2)},yt=function(r){return vt(r>0?r-1:r+1)},st=Math.sqrt,pt=q,bt=!0===wr?0:1,Nt=new X(1),ht=new pt(Nt.buffer),wt=function(r,n){return Nt[0]=r,ht[bt]=n>>>0,Nt[0]},dt=function(r){return 0|r},mt=yt,At=xn,_t=N,gt=b,Ut=gr,xt=m,jt=b,It=gr,kt=wt,Ot=Or,St=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Tt=1048576,Ft=[1,1.5],Et=[0,.5849624872207642],Ht=[0,1.350039202129749e-8],Vt=wt,Gt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)},Pt=gr,Lt=Or,Mt=wt,Wt=dt,Yt=zn,qt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Ct=2147483647,Rt=1048575,zt=1048576,Bt=p,Dt=yt,Jt=d,Kt=ot,Qt=st,Xt=m,Zt=mn,$t=wt,ru=dt,nu=N,eu=b,tu=function(r,n){return n===_t?gt:n===gt?0:n>0?mt(n)?r:0:mt(n)?At(gt,r):gt},uu=function(r,n){return(2147483647&Ut(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},iu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:xt(r)<1==(n===jt)?0:jt},fu=function(r,n,e){var t,u,i,f,o,c,a,l,v,y,s,p,b,N,h,w,d,m,A,_;return m=0,e<Tt&&(m-=53,e=It(n*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(A=1048575&e|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,e-=Tt),t=524288+(e>>1|536870912),o=(d=1/((n=Ot(n,e))+(a=Ft[_])))*((w=n-a)-(f=kt(u=w*d,0))*(c=Ot(0,t+=_<<18))-f*(n-(c-a))),h=(i=u*u)*i*St(i),c=kt(c=3+(i=f*f)+(h+=o*(f+u)),0),b=(s=-7.028461650952758e-9*(v=kt(v=(w=f*c)+(d=o*c+(h-(c-3-i))*u),0))+.9617966939259756*(d-(v-w))+Ht[_])-((p=kt(p=(y=.9617967009544373*v)+s+(l=Et[_])+(N=m),0))-N-l-y),r[0]=p,r[1]=b,r},ou=function(r,n){var e,t,u,i,f;return e=(f=1.9259629911266175e-8*(u=n-1)-u*u*Gt(u)*1.4426950408889634)-((t=Vt(t=(i=1.4426950216293335*u)+f,0))-i),r[0]=t,r[1]=e,r},cu=function(r,n,e){var t,u,i,f,o,c,a,l,v;return v=((l=r&Ct|0)>>20)-1023|0,a=0,l>1071644672&&(u=Lt(0,((a=r+(zt>>v+1)>>>0)&~(Rt>>(v=((a&Ct)>>20)-1023|0)))>>>0),a=(a&Rt|zt)>>20-v>>>0,r<0&&(a=-a),n-=u),o=(f=.6931471805599453*(e-((u=Mt(u=e+n,0))-n))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+f)-i),t=c-(u=c*c)*qt(u),r=Pt(c=1-(c*t/(t-2)-(o+c*o)-c)),r=Wt(r),c=(r+=a<<20>>>0)>>20<=0?Yt(c,a):Lt(c,r)},au=2147483647,lu=1083179008,vu=1e300,yu=1e-300,su=[0,0],pu=[0,0],bu=function r(n,e){var t,u,i,f,o,c,a,l,v,y,s,p,b,N;if(Bt(n)||Bt(e))return NaN;if(Zt(su,e),o=su[0],0===su[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return Qt(n);if(-.5===e)return 1/Qt(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(Jt(e))return iu(n,e)}if(Zt(su,n),f=su[0],0===su[1]){if(0===f)return tu(n,e);if(1===n)return 1;if(-1===n&&Dt(e))return-1;if(Jt(n))return n===nu?r(-0,-e):e<0?0:eu}if(n<0&&!1===Kt(e))return(n-n)/(n-n);if(i=Xt(n),t=f&au|0,u=o&au|0,a=o>>>31|0,c=(c=f>>>31|0)&&Dt(e)?-1:1,u>1105199104){if(u>1139802112)return uu(n,e);if(t<1072693247)return 1===a?c*vu*vu:c*yu*yu;if(t>1072693248)return 0===a?c*vu*vu:c*yu*yu;s=ou(pu,i)}else s=fu(pu,i,t);if(y=(e-(l=$t(e,0)))*s[0]+e*s[1],v=l*s[0],Zt(su,p=y+v),b=ru(su[0]),N=ru(su[1]),b>=lu){if(0!=(b-lu|N))return c*vu*vu;if(y+8008566259537294e-32>p-v)return c*vu*vu}else if((b&au)>=1083231232){if(0!=(b-3230714880|N))return c*yu*yu;if(y<=p-v)return c*yu*yu}return c*(p=cu(b,v,y))},Nu=bu,hu=zn,wu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},du=p,mu=Rr,Au=N,_u=b,gu=function(r,n,e){var t,u,i;return i=(t=r-n)-(u=t*t)*wu(u),hu(1-(n-t*i/(2-i)-r),e)},Uu=1.4426950408889634,xu=1/(1<<28),ju=function(r){var n;return du(r)||r===_u?r:r===Au?0:r>709.782712893384?_u:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<xu?1+r:(n=mu(r<0?Uu*r-.5:Uu*r+.5),gu(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Iu=Nu,ku=ju,Ou=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))},Su=p,Tu=ot,Fu=at,Eu=m,Hu=Wr,Vu=Te,Gu=b,Pu=N,Lu=Fe,Mu=function(r){var n,e,t;return n=1+(n=1/r)*Ou(n),e=ku(r),2.5066282746310007*(e=r>143.01608?(t=Iu(r,.5*r-.25))*(t/e):Iu(r,r-.5)/e)*n},Wu=function(r,n){return n/((1+.5772156649015329*r)*r)},Yu=function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)},qu=function(r){var n,e,t,u;if(Tu(r)&&r<0||r===Pu||Su(r))return NaN;if(0===r)return Fu(r)?Pu:Gu;if(r>171.61447887182297)return Gu;if(r<-170.5674972726612)return 0;if((e=Eu(r))>33)return r>=0?Mu(r):(n=0==(1&(t=Hu(e)))?-1:1,(u=e-t)>.5&&(u=e-(t+=1)),u=e*Vu(Lu*u),n*Lu/(Eu(u)*Mu(e)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Wu(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Wu(r,u);u/=r,r+=1}return 2===r?u:u*Yu(r-=2)},Cu=709.782712893384,Ru=ju,zu=function(r,n){var e,t,u;if(0!==(t=Ru(-n)))for(e=t,u=1;u<r;++u)e/=u,t+=e*=n;return t},Bu=p,Du=ju,Ju=wt,Ku=b,Qu=N,Xu=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},Zu=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},$u=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},ri=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},ni=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},ei=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},ti=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},ui=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},ii=.8450629115104675,fi=function(r){var n,e,t,u,i,f,o,c;if(Bu(r))return NaN;if(r===Ku)return 0;if(r===Qu)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(f=(u=.12837916709551256+(t=r*r)*Xu(t))/(i=1+t*Zu(t)),r<.25?1-(r+r*f):(u=r*f,.5-(u+=r-.5)));if(e<1.25)return o=(i=e-1)*$u(i)-.0023621185607526594,c=1+i*ri(i),n?1+ii+o/c:1-ii-o/c;if(e<28){if(i=1/(e*e),e<2.857142857142857)u=i*ni(i)-.009864944034847148,i=1+i*ei(i);else{if(r<-6)return 2;u=i*ti(i)-.0098649429247001,i=1+i*ui(i)}return t=Ju(e,0),u=Du(-t*t-.5625)*Du((t-e)*(t+e)+u/i),n?2-u/e:u/e}return n?2:0},oi=fi,ci=st,ai=ju,li=function(r,n){var e,t,u,i;if(0!==(u=oi(ci(n)))&&r>1){for(e=ai(-n)/ci(3.141592653589793*n),e*=n,t=e/=.5,i=2;i<r;++i)e/=i-.5,t+=e*=n;u+=t}return u},vi=-708.3964185322641,yi=ju,si=Nu,pi=Mr,bi=Cu,Ni=vi,hi=function(r,n){var e;return e=r*pi(n),n>=1?e<bi&&-n>Ni?si(n,r)*yi(-n):r>=1?si(n/yi(n/r),r):yi(e-n):e>Ni?si(n,r)*yi(-n):n/r<bi?si(n/yi(n/r),r):yi(e-n)},wi=function(r,n){var e,t;if((t=r.length)<2||0===n)return 0===t?0:r[0];for(e=r[t-=1]*n+r[t-1],t-=2;t>=0;)e=e*n+r[t],t-=1;return e},di=wi,mi=wi;s(mi,"factory",(function(r){var n,e,t,u;if(r.length>500)return function(n){return di(r,n)};if(n="return function evalpoly(x){",0===(e=r.length))n+="return 0.0;";else if(1===e)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],t=e-1,u=1;u<e;u++)n+="+x*",u<t&&(n+="("),n+=r[u];for(u=0;u<t-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var Ai,_i=mi,gi=fi,Ui=st,xi=ju,ji=Mr,Ii=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333},ki=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852},Oi=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)},Si=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))},Ti=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117},Fi=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813},Ei=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)},Hi=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))},Vi=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094},Gi=[0,0,0,0,0,0,0,0,0,0],Pi=function(r,n){var e,t,u,i,f;return i=r*(u=-ji(1+(t=(n-r)/r))+t),f=Ui(2*u),n<r&&(f=-f),Gi[0]=Ii(f),Gi[1]=ki(f),Gi[2]=Oi(f),Gi[3]=Si(f),Gi[4]=Ti(f),Gi[5]=Fi(f),Gi[6]=Ei(f),Gi[7]=Hi(f),Gi[8]=Vi(f),Gi[9]=-.0005967612901927463,e=_i(Gi,1/r),e*=xi(-i)/Ui(6.283185307179586*r),n<r&&(e=-e),e+=gi(Ui(i))/2},Li=eval,Mi=function(){var r;try{Li('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r},Wi=Mi,Yi=2220446049250313e-31,qi=m,Ci=Yi,Ri=1e6,zi=function(r,n){var e,t,u,i,f;if(f={},arguments.length>1&&(f=n),e=f.tolerance||Ci,u=f.maxTerms||Ri,i=f.initialValue||0,!0==("function"==typeof r.next)){for(t of r)if(qi(e*(i+=t))>=qi(t)||0==--u)break}else do{i+=t=r()}while(qi(e*i)<qi(t)&&--u);return i},Bi=m,Di=Yi,Ji=1e6,Ki=function(r,n){var e,t,u,i,f;f={},arguments.length>1&&(f=n),e=f.tolerance||Di,u=f.maxTerms||Ji,i=f.initialValue||0;do{i+=t=r()}while(Bi(e*i)<Bi(t)&&--u);return i},Qi=zi,Xi=Ki,Zi=Ai=Wi()?Qi:Xi,$i=function(r,n){var e=1,t=r,u=n;return function(){var r=e;return e*=u/(t+=1),r}},rf=function(r,n,e){var t;return e=e||0,t=$i(r,n),Zi(t,{initialValue:e})},nf=p,ef=gr,tf=Or,uf=b,ff=N,of=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},cf=.6931471803691238,af=1.9082149292705877e-10,lf=function(r){var n,e,t,u,i,f,o,c,a,l;if(r<-1||nf(r))return NaN;if(-1===r)return ff;if(r===uf)return r;if(0===r)return r;if(l=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,e=1)}return 0!==l&&(t<9007199254740992?(i=(l=((e=ef(a=1+r))>>20)-1023)>0?1-(a-r):r-(a-1),i/=a):(l=((e=ef(a=r))>>20)-1023,i=0),(e&=1048575)<434334?a=tf(a,1072693248|e):(l+=1,a=tf(a,1071644672|e),e=1048576-e>>2),u=a-1),n=.5*u*u,0===e?0===u?l*cf+(i+=l*af):l*cf-((c=n*(1-.6666666666666666*u))-(l*af+i)-u):(c=(o=(f=u/(2+u))*f)*of(o),0===l?u-(n-f*(n+c)):l*cf-(n-(f*(n+c)+(l*af+i))-u))},vf=b,yf=function(r){return 0===r&&1/r===vf},sf=p,pf=N,bf=b,Nf=function(r,n){var e,t,u,i;if(2===(e=arguments.length))return sf(r)||sf(n)?NaN:r===bf||n===bf?bf:r===n&&0===r?yf(r)?r:n:r>n?r:n;for(t=pf,i=0;i<e;i++){if(sf(u=arguments[i])||u===bf)return u;(u>t||u===t&&0===u&&yf(u))&&(t=u)}return t},hf=at,wf=p,df=N,mf=b,Af=function(r,n){var e,t,u,i;if(2===(e=arguments.length))return wf(r)||wf(n)?NaN:r===df||n===df?df:r===n&&0===r?hf(r)?r:n:r<n?r:n;for(t=mf,i=0;i<e;i++){if(wf(u=arguments[i])||u===df)return u;(u<t||u===t&&0===u&&hf(u))&&(t=u)}return t},_f=function(r){var n,e;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),e=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),e=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/e)},gf=it,Uf=qu,xf=lf,jf=st,If=m,kf=ju,Of=Nu,Sf=Nf,Tf=Af,Ff=Mr,Ef=Cu,Hf=vi,Vf=10.900511,Gf=function(r,n){var e,t,u,i,f,o,c;return c=(n-r-Vf+.5)/(u=r+Vf-.5),r<1?n<=Hf?kf(r*Ff(n)-n-gf(r)):Of(n,r)*kf(-n)/Uf(r):(If(c*c*r)<=100&&r>150?(e=r*(xf(c)-c)+n*(.5-Vf)/u,e=kf(e)):(i=r*Ff(n/u),Tf(i,f=r-n)<=Hf||Sf(i,f)>=Ef?(t=f/r,Tf(i,f)/2>Hf&&Sf(i,f)/2<Ef?e=(o=Of(n/u,r/2)*kf(f/2))*o:Tf(i,f)/4>Hf&&Sf(i,f)/4<Ef&&n>r?(e=(o=Of(n/u,r/4)*kf(f/4))*o,e*=e):e=t>Hf&&t<Ef?Of(n*kf(t)/u,r):kf(i+f)):e=Of(n/u,r)*kf(f)),e*=jf(u/2.718281828459045)/_f(r))},Pf=p,Lf=gr,Mf=Or,Wf=b,Yf=N,qf=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},Cf=.6931471803691238,Rf=1.9082149292705877e-10,zf=1.4426950408889634,Bf=function(r){var n,e,t,u,i,f,o,c,a,l,v,y;if(r===Wf||Pf(r))return r;if(r===Yf)return-1;if(0===r)return r;if(r<0?(e=!0,o=-r):(e=!1,o=r),o>=38.816242111356935){if(e)return-1;if(o>=709.782712893384)return Wf}if(i=0|Lf(o),o>.34657359027997264)o<1.0397207708399179?e?(t=r+Cf,u=-Rf,y=-1):(t=r-Cf,u=Rf,y=1):(y=e?zf*r-.5:zf*r+.5,t=r-(l=y|=0)*Cf,u=l*Rf),a=t-(r=t-u)-u;else{if(i<1016070144)return r;y=0}return v=(c=r*(n=.5*r))*(((f=1+c*qf(c))-(l=3-f*n))/(6-r*l)),0===y?r-(r*v-c):(v=r*(v-a)-a,v-=c,-1===y?.5*(r-v)-.5:1===y?r<-.25?-2*(v-(r+.5)):1+2*(r-v):y<=-2||y>56?(t=Lf(o=1-(v-r))+(y<<20)|0,(o=Mf(o,t))-1):(l=1,y<20?o=(l=Mf(l,t=1072693248-(2097152>>y)|0))-(v-r):(o=r-(v+(l=Mf(l,t=1023-y<<20|0))),o+=1),t=Lf(o)+(y<<20)|0,Mf(o,t)))},Df=p,Jf=m,Kf=Bf,Qf=Mr,Xf=Nu,Zf=Rr,$f=Mr,ro=function(r){var n,e;return 0===r?-.01803556856784494:((r<0?-r:r)<=1?(n=r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(r*(r*(0*r-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,e=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+-2.2335276320861708e-7*r))))))):(n=0+(r=1/r)*(r*(r*(r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+-.01803556856784494*r)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),e=r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+1*r))))))-2.2335276320861708e-7),n/e)},no=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)},eo=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)},to=qu,uo=Bf,io=lf,fo=p,oo=function(r,n,e){var t,u,i;if(r<2220446049250313e-31)return-$f(r);if(0===n||0===e)return 0;if(u=0,r>2){if(r>=3){do{e-=1,u+=$f(r-=1)}while(r>=3);e=r-2}return u+=.15896368026733398*(i=e*(r+1))+i*ro(e)}return r<1&&(u+=-$f(r),e=n,n=r,r+=1),u+=r<=1.5?.5281534194946289*(t=n*e)+t*(i=no(n)):.45201730728149414*(i=e*n)+i*eo(-e)},co=function(r,n){var e;if(Df(r)||Df(n))return NaN;if(0===n)return 0;if(0===r)return-1;if(r<0&&n%2==0&&(r=-r),r>0){if((Jf(n*(r-1))<.5||Jf(n)<.2)&&(e=Qf(r)*n)<.5)return Kf(e)}else if(Zf(n)!==n)return NaN;return Xf(r,n)-1},ao=Ai,lo=function(r){return fo(r)?NaN:r<0?r<-.5?to(1+r)-1:uo(-io(r)+oo(r+2,r+1,r)):r<2?uo(oo(r+1,r,r-1)):to(1+r)-1},vo=function(r,n){var e,t,u,i;return e=-n,n=-n,t=r+1,u=1,function(){return i=e/t,e*=n,e/=u+=1,t+=1,i}},yo=function(r,n,e){var t,u,i,f;return u=((t=lo(r))+1)/r,t-=i=co(n,r),t/=r,f=vo(r,n),t=-(i+=1)*ao(f,{initialValue:((e?u:0)-t)/i}),e&&(t=-t),[t,u]},so=11754943508222875e-54,po=m,bo=so,No=Yi,ho=1e6;function wo(r,n,e){var t,u,i,f,o,c,a;if(f=(a=(t="function"==typeof r.next)?r.next().value:r())[1],i=a[0],0===f&&(f=bo),o=f,c=0,!0===t)do{(a=r.next().value)&&(0===(c=a[1]+a[0]*c)&&(c=bo),0===(o=a[1]+a[0]/o)&&(o=bo),f*=u=o*(c=1/c))}while(po(u-1)>n&&--e);else do{(a=r())&&(0===(c=a[1]+a[0]*c)&&(c=bo),0===(o=a[1]+a[0]/o)&&(o=bo),f*=u=o*(c=1/c))}while(a&&po(u-1)>n&&--e);return i/f}function mo(r,n,e){var t,u,i,f,o,c;if(0===(i=(c=(t="function"==typeof r.next)?r.next().value:r())[1])&&(i=bo),f=i,o=0,!0===t)do{(c=r.next().value)&&(0===(o=c[1]+c[0]*o)&&(o=bo),0===(f=c[1]+c[0]/f)&&(f=bo),i*=u=f*(o=1/o))}while(c&&po(u-1)>n&&--e);else do{(c=r())&&(0===(o=c[1]+c[0]*o)&&(o=bo),0===(f=c[1]+c[0]/f)&&(f=bo),i*=u=f*(o=1/o))}while(c&&po(u-1)>n&&--e);return i}var Ao=function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),e=t.maxIter||ho,u=t.tolerance||No,t.keep?mo(r,u,e):wo(r,u,e)},_o=m,go=Yi,Uo=so,xo=1e6;function jo(r,n,e){var t,u,i,f,o,c;o=(c=r())[1],u=c[0],0===o&&(o=Uo),i=o,f=0;do{(c=r())&&(0===(f=c[1]+c[0]*f)&&(f=Uo),0===(i=c[1]+c[0]/i)&&(i=Uo),o*=t=i*(f=1/f))}while(c&&_o(t-1)>n&&--e);return u/o}function Io(r,n,e){var t,u,i,f,o;0===(f=(o=r())[1])&&(f=Uo),u=f,i=0;do{(o=r())&&(0===(i=o[1]+o[0]*i)&&(i=Uo),0===(u=o[1]+o[0]/u)&&(u=Uo),f*=t=u*(i=1/i))}while(o&&_o(t-1)>n&&--e);return f}var ko=function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),u=t.tolerance||go,e=t.maxIter||xo,t.keep?Io(r,u,e):jo(r,u,e)},Oo=Ao,So=ko,To=Wi()?Oo:So,Fo=function(r,n){var e=n-r+1,t=r,u=0;return function(){return[(u+=1)*(t-u),e+=2]}},Eo=it,Ho=Wr,Vo=qu,Go=m,Po=ju,Lo=Nu,Mo=Mr,Wo=17976931348623157e292,Yo=Cu,qo=b,Co=zu,Ro=li,zo=hi,Bo=Pi,Do=rf,Jo=Gf,Ko=yo,Qo=function(r,n){var e=Fo(r,n);return 1/(n-r+1+To(e))},Xo=function r(n,e,t,u){var i,f,o,c,a,l,v,y,s,p,b,N,h;if(n<0||e<=0)return NaN;if(f=void 0===t||t,v=u,y=0,e>=170&&!f)return v&&4*e<n?(y=e*Mo(n)-n,y+=Mo(Qo(e,n))):!v&&e>4*n?(y=e*Mo(n)-n,y+=Mo(Do(e,n,c=0)/e)):0===(y=r(e,n,!0,v))?v?(y=Mo(y=1+1/(12*e)+1/(288*e*e))-e+(e-.5)*Mo(e),y+=Mo(2.5066282746310007)):(y=e*Mo(n)-n,y+=Mo(Do(e,n,c=0)/e)):y=Mo(y)+Eo(e),y>Yo?qo:Po(y);switch(e<30&&e<=n+1&&n<Yo?a=!(s=(N=Ho(e))===e)&&.5===Go(N-e):s=a=!1,s&&n>.6?(v=!v,o=0):a&&n>.2?(v=!v,o=1):n<1.4901161193847656e-8&&e>1?o=6:n<.5?o=-.4/Mo(n)<e?2:3:n<1.1?o=.75*n<e?2:3:(l=!1,f&&e>20&&(p=Go((n-e)/e),e>200?20/e>p*p&&(l=!0):p<.4&&(l=!0)),l?o=5:n-1/(3*n)<e?o=2:(o=4,v=!v)),o){case 0:y=Co(e,n),!1===f&&(y*=Vo(e));break;case 1:y=Ro(e,n),!1===f&&(y*=Vo(e));break;case 2:0!==(y=f?Jo(e,n):zo(e,n))&&(c=0,i=!1,v&&(c=f?1:Vo(e),f||y>=1||Wo*y>c?(c/=y,f||e<1||Wo/e>c?(c*=-e,i=!0):c=0):c=0)),y*=Do(e,n,c)/e,i&&(v=!1,y=-y);break;case 3:y=(b=Ko(e,n,v=!v))[0],h=b[1],v=!1,f&&(y/=h);break;case 4:0!==(y=f?Jo(e,n):zo(e,n))&&(y*=Qo(e,n));break;case 5:y=Bo(e,n),n>=e&&(v=!v);break;case 6:y=f?Lo(n,e)/Vo(e+1):Lo(n,e)/e,y*=1-e*n/(e+1)}return f&&y>1&&(y=1),v&&(y=(f?1:Vo(e))-y),y},Zo=Xo;function $o(r,n){return p(r)||p(n)||n<0?NaN:r<0?0:0===n||r===b?1:Zo(n,Wr(r)+1,!0,!0)}var rc=function(r){return function(){return r}},nc=p,ec=rc,tc=p,uc=function(r,n){return nc(r)||nc(n)?NaN:r<n?0:1};s(uc,"factory",(function(r){return tc(r)?ec(NaN):function(n){return tc(n)?NaN:n<r?0:1}}));var ic=uc;return s($o,"factory",(function(r){return p(r)||r<0?rc(NaN):0===r?ic.factory(0):function(n){return p(n)?NaN:n<0?0:n===b?1:Zo(r,Wr(n)+1,!0,!0)}})),$o},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=n();
//# sourceMappingURL=index.js.map
