
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,u=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&o(e,t,r[t]);if(n)for(var t of n(r))i.call(r,t)&&o(e,t,r[t]);return e},s=(e,n)=>r(e,t(n));import{I as l,J as f,K as c,L as d,M as p,S as v,N as y,A as m,G as h,O as g,P as b,Q as j,R as w,r as O,C as q,d as F,B as x,T as A,D as P,U as E,V as S,m as k,c as M,W as B,X as W,g as R,_ as I,Y as $,H as _,o as D,Z as V,$ as C,a0 as N,e as L,a1 as T,x as z,a2 as U,a3 as J,a4 as Z,a5 as G,f as Y,a6 as H,s as K,t as Q,i as X,b as ee,a7 as re,F as te,a8 as ne}from"./index.2721a539.js";import{u as ae,f as ie,a as oe}from"./index.438da6eb.js";import{t as ue}from"./error.b438369f.js";import{i as se,a as le,b as fe,o as ce,k as de,g as pe,s as ve,c as ye,d as me,U as he,e as ge,n as be,f as je,h as we,S as Oe,j as qe,l as Fe}from"./isEqual.819cbe5b.js";var xe=Object.create,Ae=function(){function e(){}return function(r){if(!l(r))return{};if(xe)return xe(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function Pe(e,r,t,n){var a=!t;t||(t={});for(var i=-1,o=r.length;++i<o;){var u=r[i],s=n?n(t[u],e[u],u,t,e):void 0;void 0===s&&(s=e[u]),a?f(t,u,s):c(t,u,s)}return t}var Ee=Object.prototype.hasOwnProperty;function Se(e){if(!l(e))return function(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}(e);var r=se(e),t=[];for(var n in e)("constructor"!=n||!r&&Ee.call(e,n))&&t.push(n);return t}function ke(e){return le(e)?fe(e,!0):Se(e)}var Me=ce(Object.getPrototypeOf,Object);function Be(){if(!arguments.length)return[];var e=arguments[0];return d(e)?e:[e]}var We="object"==typeof exports&&exports&&!exports.nodeType&&exports,Re=We&&"object"==typeof module&&module&&!module.nodeType&&module,Ie=Re&&Re.exports===We?p.Buffer:void 0,$e=Ie?Ie.allocUnsafe:void 0;var _e=Object.getOwnPropertySymbols?function(e){for(var r=[];e;)ye(r,pe(e)),e=Me(e);return r}:ve;function De(e){return me(e,ke,_e)}var Ve=Object.prototype.hasOwnProperty;function Ce(e){var r=new e.constructor(e.byteLength);return new he(r).set(new he(e)),r}var Ne=/\w*$/;var Le=v?v.prototype:void 0,Te=Le?Le.valueOf:void 0;function ze(e,r,t){var n,a,i,o=e.constructor;switch(r){case"[object ArrayBuffer]":return Ce(e);case"[object Boolean]":case"[object Date]":return new o(+e);case"[object DataView]":return function(e,r){var t=r?Ce(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}(e,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,r){var t=r?Ce(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}(e,t);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(e);case"[object RegExp]":return(i=new(a=e).constructor(a.source,Ne.exec(a))).lastIndex=a.lastIndex,i;case"[object Symbol]":return n=e,Te?Object(Te.call(n)):{}}}var Ue=be&&be.isMap,Je=Ue?je(Ue):function(e){return y(e)&&"[object Map]"==ge(e)};var Ze=be&&be.isSet,Ge=Ze?je(Ze):function(e){return y(e)&&"[object Set]"==ge(e)},Ye={};function He(e,r,t,n,a,i){var o,u=1&r,s=2&r,f=4&r;if(t&&(o=a?t(e,n,a,i):t(e)),void 0!==o)return o;if(!l(e))return e;var p=d(e);if(p){if(o=function(e){var r=e.length,t=new e.constructor(r);return r&&"string"==typeof e[0]&&Ve.call(e,"index")&&(t.index=e.index,t.input=e.input),t}(e),!u)return function(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}(e,o)}else{var v=ge(e),y="[object Function]"==v||"[object GeneratorFunction]"==v;if(we(e))return function(e,r){if(r)return e.slice();var t=e.length,n=$e?$e(t):new e.constructor(t);return e.copy(n),n}(e,u);if("[object Object]"==v||"[object Arguments]"==v||y&&!a){if(o=s||y?{}:function(e){return"function"!=typeof e.constructor||se(e)?{}:Ae(Me(e))}(e),!u)return s?function(e,r){return Pe(e,_e(e),r)}(e,function(e,r){return e&&Pe(r,ke(r),e)}(o,e)):function(e,r){return Pe(e,pe(e),r)}(e,function(e,r){return e&&Pe(r,de(r),e)}(o,e))}else{if(!Ye[v])return a?e:{};o=ze(e,v,u)}}i||(i=new Oe);var m=i.get(e);if(m)return m;i.set(e,o),Ge(e)?e.forEach((function(n){o.add(He(n,r,t,n,e,i))})):Je(e)&&e.forEach((function(n,a){o.set(a,He(n,r,t,a,e,i))}));var h=p?void 0:(f?s?De:qe:s?ke:de)(e);return function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n&&!1!==r(e[t],t,e););}(h||e,(function(n,a){h&&(n=e[a=n]),c(o,a,He(n,r,t,a,e,i))})),o}Ye["[object Arguments]"]=Ye["[object Array]"]=Ye["[object ArrayBuffer]"]=Ye["[object DataView]"]=Ye["[object Boolean]"]=Ye["[object Date]"]=Ye["[object Float32Array]"]=Ye["[object Float64Array]"]=Ye["[object Int8Array]"]=Ye["[object Int16Array]"]=Ye["[object Int32Array]"]=Ye["[object Map]"]=Ye["[object Number]"]=Ye["[object Object]"]=Ye["[object RegExp]"]=Ye["[object Set]"]=Ye["[object String]"]=Ye["[object Symbol]"]=Ye["[object Uint8Array]"]=Ye["[object Uint8ClampedArray]"]=Ye["[object Uint16Array]"]=Ye["[object Uint32Array]"]=!0,Ye["[object Error]"]=Ye["[object Function]"]=Ye["[object WeakMap]"]=!1;const Ke=m({model:Object,rules:{type:h(Object)},labelPosition:String,labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:g},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),Qe={validate:(e,r,t)=>(b(e)||j(e))&&w(r)&&j(t)};const Xe=(e,r)=>{const t=Be(r);return t.length>0?e.filter((e=>e.prop&&t.includes(e.prop))):e};var er=I(F(s(u({},{name:"ElForm"}),{props:Ke,emits:Qe,setup(e,{expose:r,emit:t}){const n=e,a=[],i=ae(),o=x("form"),l=q((()=>{const{labelPosition:e,inline:r}=n;return[o.b(),o.m(i.value||"default"),{[o.m(`label-${e}`)]:e,[o.m("inline")]:r}]})),f=(e=[])=>{n.model&&Xe(a,e).forEach((e=>e.resetField()))},c=(e=[])=>{Xe(a,e).forEach((e=>e.clearValidate()))},d=q((()=>!!n.model)),p=async e=>y(void 0,e),v=async(e=[])=>{if(!d.value)return!1;const r=(e=>{if(0===a.length)return[];const r=Xe(a,e);return r.length?r:[]})(e);if(0===r.length)return!0;let t={};for(const a of r)try{await a.validate("")}catch(n){t=u(u({},t),n)}return 0===Object.keys(t).length||Promise.reject(t)},y=async(e=[],r)=>{const t=!$(r);try{const t=await v(e);return!0===t&&(null==r||r(t)),t}catch(a){const e=a;return n.scrollToError&&m(Object.keys(e)[0]),null==r||r(!1,e),t&&Promise.reject(e)}},m=e=>{var r;const t=Xe(a,e)[0];t&&(null==(r=t.$el)||r.scrollIntoView())};return A((()=>n.rules),(()=>{n.validateOnRuleChange&&p()}),{deep:!0}),P(ie,E(u(s(u({},S(n)),{emit:t,resetFields:f,clearValidate:c,validateField:y,addField:e=>{a.push(e)},removeField:e=>{e.prop&&a.splice(a.indexOf(e),1)}}),function(){const e=O([]);function r(r){return e.value.indexOf(r)}return{autoLabelWidth:q((()=>{if(!e.value.length)return"0";const r=Math.max(...e.value);return r?`${r}px`:""})),registerLabelWidth:function(t,n){if(t&&n){const a=r(n);e.value.splice(a,1,t)}else t&&e.value.push(t)},deregisterLabelWidth:function(t){const n=r(t);n>-1&&e.value.splice(n,1)}}}()))),r({validate:p,validateField:y,resetFields:f,clearValidate:c,scrollToField:m}),(e,r)=>(k(),M("form",{class:W(R(l))},[B(e.$slots,"default")],2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function rr(){return rr=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},rr.apply(this,arguments)}function tr(e){return(tr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function nr(e,r){return(nr=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function ar(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ir(e,r,t){return(ir=ar()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var a=new(Function.bind.apply(e,n));return t&&nr(a,t.prototype),a}).apply(null,arguments)}function or(e){var r="function"==typeof Map?new Map:void 0;return or=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return ir(e,arguments,tr(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),nr(n,e)},or(e)}var ur=/%[sdj%]/g,sr=function(){};function lr(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function fr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=0,i=t.length;if("function"==typeof e)return e.apply(null,t);if("string"==typeof e){var o=e.replace(ur,(function(e){if("%%"===e)return"%";if(a>=i)return e;switch(e){case"%s":return String(t[a++]);case"%d":return Number(t[a++]);case"%j":try{return JSON.stringify(t[a++])}catch(r){return"[Circular]"}break;default:return e}}));return o}return e}function cr(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function dr(e,r,t){var n=0,a=e.length;!function i(o){if(o&&o.length)t(o);else{var u=n;n+=1,u<a?r(e[u],i):t([])}}([])}"undefined"!=typeof process&&process.env;var pr=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,nr(r,t),n}(or(Error));function vr(e,r,t,n,a){if(r.first){var i=new Promise((function(r,i){var o=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);dr(o,t,(function(e){return n(e),e.length?i(new pr(e,lr(e))):r(a)}))}));return i.catch((function(e){return e})),i}var o=!0===r.firstFields?Object.keys(e):r.firstFields||[],u=Object.keys(e),s=u.length,l=0,f=[],c=new Promise((function(r,i){var c=function(e){if(f.push.apply(f,e),++l===s)return n(f),f.length?i(new pr(f,lr(f))):r(a)};u.length||(n(f),r(a)),u.forEach((function(r){var n=e[r];-1!==o.indexOf(r)?dr(n,t,c):function(e,r,t){var n=[],a=0,i=e.length;function o(e){n.push.apply(n,e||[]),++a===i&&t(n)}e.forEach((function(e){r(e,o)}))}(n,t,c)}))}));return c.catch((function(e){return e})),c}function yr(e,r){return function(t){var n,a;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(a=t)&&void 0!==a.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function mr(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=rr({},e[t],n):e[t]=n}return e}var hr=function(e,r,t,n,a,i){!e.required||t.hasOwnProperty(e.field)&&!cr(r,i||e.type)||n.push(fr(a.messages.required,e.fullField))},gr={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},br={integer:function(e){return br.number(e)&&parseInt(e,10)===e},float:function(e){return br.number(e)&&!br.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!br.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(gr.email)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(gr.url)},hex:function(e){return"string"==typeof e&&!!e.match(gr.hex)}},jr={required:hr,whitespace:function(e,r,t,n,a){(/^\s+$/.test(r)||""===r)&&n.push(fr(a.messages.whitespace,e.fullField))},type:function(e,r,t,n,a){if(e.required&&void 0===r)hr(e,r,t,n,a);else{var i=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(i)>-1?br[i](r)||n.push(fr(a.messages.types[i],e.fullField,e.type)):i&&typeof r!==e.type&&n.push(fr(a.messages.types[i],e.fullField,e.type))}},range:function(e,r,t,n,a){var i="number"==typeof e.len,o="number"==typeof e.min,u="number"==typeof e.max,s=r,l=null,f="number"==typeof r,c="string"==typeof r,d=Array.isArray(r);if(f?l="number":c?l="string":d&&(l="array"),!l)return!1;d&&(s=r.length),c&&(s=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),i?s!==e.len&&n.push(fr(a.messages[l].len,e.fullField,e.len)):o&&!u&&s<e.min?n.push(fr(a.messages[l].min,e.fullField,e.min)):u&&!o&&s>e.max?n.push(fr(a.messages[l].max,e.fullField,e.max)):o&&u&&(s<e.min||s>e.max)&&n.push(fr(a.messages[l].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,a){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(r)&&n.push(fr(a.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,r,t,n,a){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(fr(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(fr(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},wr=function(e,r,t,n,a){var i=e.type,o=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r,i)&&!e.required)return t();jr.required(e,r,n,o,a,i),cr(r,i)||jr.type(e,r,n,o,a)}t(o)},Or={string:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r,"string")&&!e.required)return t();jr.required(e,r,n,i,a,"string"),cr(r,"string")||(jr.type(e,r,n,i,a),jr.range(e,r,n,i,a),jr.pattern(e,r,n,i,a),!0===e.whitespace&&jr.whitespace(e,r,n,i,a))}t(i)},method:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r)&&!e.required)return t();jr.required(e,r,n,i,a),void 0!==r&&jr.type(e,r,n,i,a)}t(i)},number:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),cr(r)&&!e.required)return t();jr.required(e,r,n,i,a),void 0!==r&&(jr.type(e,r,n,i,a),jr.range(e,r,n,i,a))}t(i)},boolean:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r)&&!e.required)return t();jr.required(e,r,n,i,a),void 0!==r&&jr.type(e,r,n,i,a)}t(i)},regexp:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r)&&!e.required)return t();jr.required(e,r,n,i,a),cr(r)||jr.type(e,r,n,i,a)}t(i)},integer:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r)&&!e.required)return t();jr.required(e,r,n,i,a),void 0!==r&&(jr.type(e,r,n,i,a),jr.range(e,r,n,i,a))}t(i)},float:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r)&&!e.required)return t();jr.required(e,r,n,i,a),void 0!==r&&(jr.type(e,r,n,i,a),jr.range(e,r,n,i,a))}t(i)},array:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();jr.required(e,r,n,i,a,"array"),null!=r&&(jr.type(e,r,n,i,a),jr.range(e,r,n,i,a))}t(i)},object:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r)&&!e.required)return t();jr.required(e,r,n,i,a),void 0!==r&&jr.type(e,r,n,i,a)}t(i)},enum:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r)&&!e.required)return t();jr.required(e,r,n,i,a),void 0!==r&&jr.enum(e,r,n,i,a)}t(i)},pattern:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r,"string")&&!e.required)return t();jr.required(e,r,n,i,a),cr(r,"string")||jr.pattern(e,r,n,i,a)}t(i)},date:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r,"date")&&!e.required)return t();var o;if(jr.required(e,r,n,i,a),!cr(r,"date"))o=r instanceof Date?r:new Date(r),jr.type(e,o,n,i,a),o&&jr.range(e,o.getTime(),n,i,a)}t(i)},url:wr,hex:wr,email:wr,required:function(e,r,t,n,a){var i=[],o=Array.isArray(r)?"array":typeof r;jr.required(e,r,n,i,a,o),t(i)},any:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(cr(r)&&!e.required)return t();jr.required(e,r,n,i,a)}t(i)}};function qr(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Fr=qr(),xr=function(){function e(e){this.rules=null,this._messages=Fr,this.define(e)}var r=e.prototype;return r.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},r.messages=function(e){return e&&(this._messages=mr(qr(),e)),this._messages},r.validate=function(r,t,n){var a=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var i=r,o=t,u=n;if("function"==typeof o&&(u=o,o={}),!this.rules||0===Object.keys(this.rules).length)return u&&u(null,i),Promise.resolve(i);if(o.messages){var s=this.messages();s===Fr&&(s=qr()),mr(s,o.messages),o.messages=s}else o.messages=this.messages();var l={};(o.keys||Object.keys(this.rules)).forEach((function(e){var t=a.rules[e],n=i[e];t.forEach((function(t){var o=t;"function"==typeof o.transform&&(i===r&&(i=rr({},i)),n=i[e]=o.transform(n)),(o="function"==typeof o?{validator:o}:rr({},o)).validator=a.getValidationMethod(o),o.validator&&(o.field=e,o.fullField=o.fullField||e,o.type=a.getType(o),l[e]=l[e]||[],l[e].push({rule:o,value:n,source:i,field:e}))}))}));var f={};return vr(l,o,(function(r,t){var n,a=r.rule,u=!("object"!==a.type&&"array"!==a.type||"object"!=typeof a.fields&&"object"!=typeof a.defaultField);function s(e,r){return rr({},r,{fullField:a.fullField+"."+e,fullFields:a.fullFields?[].concat(a.fullFields,[e]):[e]})}function l(n){void 0===n&&(n=[]);var l=Array.isArray(n)?n:[n];!o.suppressWarning&&l.length&&e.warning("async-validator:",l),l.length&&void 0!==a.message&&(l=[].concat(a.message));var c=l.map(yr(a,i));if(o.first&&c.length)return f[a.field]=1,t(c);if(u){if(a.required&&!r.value)return void 0!==a.message?c=[].concat(a.message).map(yr(a,i)):o.error&&(c=[o.error(a,fr(o.messages.required,a.field))]),t(c);var d={};a.defaultField&&Object.keys(r.value).map((function(e){d[e]=a.defaultField})),d=rr({},d,r.rule.fields);var p={};Object.keys(d).forEach((function(e){var r=d[e],t=Array.isArray(r)?r:[r];p[e]=t.map(s.bind(null,e))}));var v=new e(p);v.messages(o.messages),r.rule.options&&(r.rule.options.messages=o.messages,r.rule.options.error=o.error),v.validate(r.value,r.rule.options||o,(function(e){var r=[];c&&c.length&&r.push.apply(r,c),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(c)}u=u&&(a.required||!a.required&&r.value),a.field=r.field,a.asyncValidator?n=a.asyncValidator(a,r.value,l,r.source,o):a.validator&&(!0===(n=a.validator(a,r.value,l,r.source,o))?l():!1===n?l("function"==typeof a.message?a.message(a.fullField||a.field):a.message||(a.fullField||a.field)+" fails"):n instanceof Array?l(n):n instanceof Error&&l(n.message)),n&&n.then&&n.then((function(){return l()}),(function(e){return l(e)}))}),(function(e){!function(e){for(var r,t,n=[],a={},o=0;o<e.length;o++)r=e[o],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(a=lr(n),u(n,a)):u(null,i)}(e)}),i)},r.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!Or.hasOwnProperty(e.type))throw new Error(fr("Unknown rule type %s",e.type));return e.type||"string"},r.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?Or.required:Or[this.getType(e)]||void 0},e}();xr.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");Or[e]=r},xr.warning=sr,xr.messages=Fr,xr.validators=Or;const Ar=m({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:h([String,Array])},required:{type:Boolean,default:void 0},rules:{type:h([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:g}});var Pr=F({name:"ElLabelWrap",props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:r}){const t=_(ie,void 0);_(oe)||ue("ElLabelWrap","usage: <el-form-item><label-wrap /></el-form-item>");const n=x("form"),a=O(),i=O(0),o=(n="update")=>{z((()=>{r.default&&e.isAutoWidth&&("update"===n?i.value=(()=>{var e;if(null==(e=a.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(a.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===n&&(null==t||t.deregisterLabelWidth(i.value)))}))},u=()=>o("update");return D((()=>{u()})),V((()=>{o("remove")})),C((()=>u())),A(i,((r,n)=>{e.updateAll&&(null==t||t.registerLabelWidth(r,n))})),N(q((()=>{var e,r;return null!=(r=null==(e=a.value)?void 0:e.firstElementChild)?r:null})),u),()=>{var o,u;if(!r)return null;const{isAutoWidth:s}=e;if(s){const e=null==t?void 0:t.autoLabelWidth,u={};if(e&&"auto"!==e){const r=Math.max(0,Number.parseInt(e,10)-i.value),n="left"===t.labelPosition?"marginRight":"marginLeft";r&&(u[n]=`${r}px`)}return L("div",{ref:a,class:[n.be("item","label-wrap")],style:u},[null==(o=r.default)?void 0:o.call(r)])}return L(T,{ref:a},[null==(u=r.default)?void 0:u.call(r)])}}});const Er=["for"];var Sr=I(F(s(u({},{name:"ElFormItem"}),{props:Ar,setup(e,{expose:r}){const t=e,o=U(),l=_(ie,void 0),f=_(oe,void 0),c=ae(void 0,{formItem:!1}),d=x("form-item"),p=O(""),v=J(p,100),y=O(""),m=O();let h,g=!1;const b=q((()=>{if("top"===(null==l?void 0:l.labelPosition))return{};const e=Z(t.labelWidth||(null==l?void 0:l.labelWidth)||"");return e?{width:e}:{}})),F=q((()=>{if("top"===(null==l?void 0:l.labelPosition)||(null==l?void 0:l.inline))return{};if(!t.label&&!t.labelWidth&&ne)return{};const e=Z(t.labelWidth||(null==l?void 0:l.labelWidth)||"");return t.label||o.label?{}:{marginLeft:e}})),I=q((()=>[d.b(),d.m(c.value),d.is("error","error"===p.value),d.is("validating","validating"===p.value),d.is("success","success"===p.value),d.is("required",ce.value||t.required),d.is("no-asterisk",null==l?void 0:l.hideRequiredAsterisk),{[d.m("feedback")]:null==l?void 0:l.statusIcon}])),C=q((()=>w(t.inlineMessage)?t.inlineMessage:(null==l?void 0:l.inlineMessage)||!1)),N=q((()=>[d.e("error"),{[d.em("error","inline")]:C.value}])),T=q((()=>t.prop?j(t.prop)?t.prop:t.prop.join("."):"")),te=q((()=>t.for||T.value)),ne=!!f,ue=q((()=>{const e=null==l?void 0:l.model;if(e&&t.prop)return G(e,t.prop).value})),se=q((()=>{const e=t.rules?Be(t.rules):[],r=null==l?void 0:l.rules;if(r&&t.prop){const n=G(r,t.prop).value;n&&e.push(...Be(n))}return void 0!==t.required&&e.push({required:!!t.required}),e})),le=q((()=>se.value.length>0)),fe=e=>se.value.filter((r=>!r.trigger||!e||(Array.isArray(r.trigger)?r.trigger.includes(e):r.trigger===e))).map((e=>{var r=e,{trigger:t}=r;return((e,r)=>{var t={};for(var o in e)a.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&n)for(var o of n(e))r.indexOf(o)<0&&i.call(e,o)&&(t[o]=e[o]);return t})(r,["trigger"])})),ce=q((()=>se.value.some((e=>!0===e.required)))),de=q((()=>{var e;return"error"===v.value&&t.showMessage&&(null==(e=null==l?void 0:l.showMessage)||e)})),pe=q((()=>`${t.label||""}${(null==l?void 0:l.labelSuffix)||""}`)),ve=e=>{p.value=e},ye=async e=>{const r=T.value;return new xr({[r]:e}).validate({[r]:ue.value},{firstFields:!0}).then((()=>(ve("success"),null==l||l.emit("validate",t.prop,!0,""),!0))).catch((e=>((e=>{var r,n;const{errors:a,fields:i}=e;ve("error"),y.value=a?null!=(n=null==(r=null==a?void 0:a[0])?void 0:r.message)?n:`${t.prop} is required`:"",null==l||l.emit("validate",t.prop,!1,y.value)})(e),Promise.reject(e))))},me=async(e,r)=>{if(g)return g=!1,!1;const t=$(r);if(!le.value)return null==r||r(!1),!1;const n=fe(e);return 0===n.length?(null==r||r(!0),!0):(ve("validating"),ye(n).then((()=>(null==r||r(!0),!0))).catch((e=>{const{fields:n}=e;return null==r||r(!1,n),!t&&Promise.reject(n)})))},he=()=>{ve(""),y.value=""},ge=async()=>{const e=null==l?void 0:l.model;if(!e||!t.prop)return;const r=G(e,t.prop);Fe(r.value,h)||(g=!0),r.value=h,await z(),he()};A((()=>t.error),(e=>{y.value=e||"",ve(e?"error":"")}),{immediate:!0}),A((()=>t.validateStatus),(e=>ve(e||"")));const be=E(s(u({},S(t)),{$el:m,size:c,validateState:p,resetField:ge,clearValidate:he,validate:me}));return P(oe,be),D((()=>{var e;t.prop&&(null==l||l.addField(be),e=ue.value,h=He(e,4))})),V((()=>{null==l||l.removeField(be)})),r({size:c,validateMessage:y,validateState:p,validate:me,clearValidate:he,resetField:ge}),(e,r)=>{var t;return k(),M("div",{ref_key:"formItemRef",ref:m,class:W(R(I))},[L(R(Pr),{"is-auto-width":"auto"===R(b).width,"update-all":"auto"===(null==(t=R(l))?void 0:t.labelWidth)},{default:Y((()=>[e.label||e.$slots.label?(k(),M("label",{key:0,for:R(te),class:W(R(d).e("label")),style:H(R(b))},[B(e.$slots,"label",{label:R(pe)},(()=>[K(Q(R(pe)),1)]))],14,Er)):X("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),ee("div",{class:W(R(d).e("content")),style:H(R(F))},[B(e.$slots,"default"),L(re,{name:`${R(d).namespace.value}-zoom-in-top`},{default:Y((()=>[R(de)?B(e.$slots,"error",{key:0,error:y.value},(()=>[ee("div",{class:W(R(N))},Q(y.value),3)])):X("v-if",!0)])),_:3},8,["name"])],6)],2)}}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const kr=te(er,{FormItem:Sr}),Mr=ne(Sr);export{Mr as E,kr as a};
