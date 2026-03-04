"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=f(function(G,b){
var E=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-abs/dist');function O(r,a,n,o,u,x,_){var v,t,s,e,i;if(r<=0)return NaN;for(t=o,s=_,i=0;i<r&&(e=a[t],!(e===e&&u[s]===0));i++)t+=n,s+=x;if(i===r)return NaN;for(v=c(e),i+=1,i;i<r;i++)t+=n,s+=x,!u[s]&&(e=c(a[t]),!E(e)&&e>v&&(v=e));return v}b.exports=O
});var y=f(function(H,p){
var d=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(r,a,n,o,u){return g(r,a,n,d(r,n),o,u,d(r,u))}p.exports=h
});var l=f(function(I,k){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=y(),z=m();w(j,"ndarray",z);k.exports=j
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=l(),q,R=B(A(__dirname,"./native.js"));C(R)?q=D:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
