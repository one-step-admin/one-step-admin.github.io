
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(n,a,t)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,i=(e,n)=>{for(var a in n||(n={}))r.call(n,a)&&o(e,a,n[a]);if(t)for(var a of t(n))s.call(n,a)&&o(e,a,n[a]);return e},l=(e,t)=>n(e,a(t));import{bK as u,U as c,d,J as m,C as p,r as f,N as b,a2 as v,bH as h,ax as g,az as S,n as k,c as w,f as y,a1 as C,t as T,e as O,j as x,K as M,am as R}from"./index.05e4ed9f.js";import{d as _,u as A,g as P,c as j,t as D,T as V,e as E,C as H}from"./panel-time-pick.c5a4aebe.js";import{u as B}from"./index.5e52605c.js";import{b as K}from"./_baseFlatten.ac610fbe.js";import{a as I,m as U,p as q,q as F,r as z}from"./isEqual.dd51095a.js";function J(e){return e}function N(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}var $=Date.now;var G,L,Q,W=u?function(e,n){return u(e,"toString",{configurable:!0,enumerable:!1,value:(a=n,function(){return a}),writable:!0});var a}:J,X=(G=W,L=0,Q=0,function(){var e=$(),n=16-(e-Q);if(Q=e,n>0){if(++L>=800)return arguments[0]}else L=0;return G.apply(void 0,arguments)});function Y(e){return e!=e}function Z(e,n){return!!(null==e?0:e.length)&&function(e,n,a){return n==n?function(e,n,a){for(var t=a-1,r=e.length;++t<r;)if(e[t]===n)return t;return-1}(e,n,a):function(e,n,a,t){for(var r=e.length,s=a+(t?1:-1);t?s--:++s<r;)if(n(e[s],s,e))return s;return-1}(e,Y,a)}(e,n,0)>-1}var ee=Math.max;function ne(e){return c(e)&&I(e)}function ae(e,n,a){for(var t=-1,r=null==e?0:e.length;++t<r;)if(a(n,e[t]))return!0;return!1}var te=U&&1/q(new U([,-0]))[1]==1/0?function(e){return new U(e)}:function(){};var re=function(e,n){return X(function(e,n,a){return n=ee(void 0===n?e.length-1:n,0),function(){for(var t=arguments,r=-1,s=ee(t.length-n,0),o=Array(s);++r<s;)o[r]=t[n+r];r=-1;for(var i=Array(n+1);++r<n;)i[r]=t[r];return i[n]=a(o),N(e,this,i)}}(e,n,J),e+"")}((function(e){return function(e,n,a){var t=-1,r=Z,s=e.length,o=!0,i=[],l=i;if(a)o=!1,r=ae;else if(s>=200){var u=n?null:te(e);if(u)return q(u);o=!1,r=z,l=new F}else l=n?[]:i;e:for(;++t<s;){var c=e[t],d=n?n(c):c;if(c=a||0!==c?c:0,o&&d==d){for(var m=l.length;m--;)if(l[m]===d)continue e;n&&l.push(d),i.push(c)}else r(l,d,a)||(l!==i&&l.push(d),i.push(c))}return i}(K(e,1,ne,!0))})),se=re;const oe=(e,n)=>{const a=[];for(let t=e;t<=n;t++)a.push(t);return a},ie=d({components:{TimeSpinner:_},props:{visible:Boolean,actualVisible:Boolean,parsedValue:{type:[Array]},format:{type:String,default:""}},emits:["pick","select-range","set-picker-option"],setup(e,n){const{t:a,lang:t}=B(),r=m("time"),s=m("picker"),o=p((()=>e.parsedValue[0])),i=p((()=>e.parsedValue[1])),l=A(e),u=p((()=>e.format.includes("ss"))),c=p((()=>e.format.includes("A")?"A":e.format.includes("a")?"a":"")),d=f([]),v=f([]),S=(e,a)=>{n.emit("pick",[e,a],!0)},k=p((()=>o.value>i.value)),w=f([0,2]),y=p((()=>u.value?11:8)),C=(e,n)=>{const a=H?H(e):[],t="start"===e,r=(n||(t?i.value:o.value)).hour(),s=t?oe(r+1,23):oe(0,r-1);return se(a,s)},T=(e,n,a)=>{const t=K?K(e,n):[],r="start"===n,s=a||(r?i.value:o.value);if(e!==s.hour())return t;const l=s.minute(),u=r?oe(l+1,59):oe(0,l-1);return se(t,u)},O=(e,n,a,t)=>{const r=I?I(e,n,a):[],s="start"===a,l=t||(s?i.value:o.value),u=l.hour(),c=l.minute();if(e!==u||n!==c)return r;const d=l.second(),m=s?oe(d+1,59):oe(0,d-1);return se(r,m)},x=e=>e.map(((n,a)=>j(e[0],e[1],0===a?"start":"end"))),{getAvailableHours:M,getAvailableMinutes:R,getAvailableSeconds:_}=P(C,T,O),j=(e,n,a)=>{const t={hour:M,minute:R,second:_},r="start"===a;let s=r?e:n;const o=r?n:e;return["hour","minute","second"].forEach((e=>{if(t[e]){let n;const i=t[e];if(n="minute"===e?i(s.hour(),a,o):"second"===e?i(s.hour(),s.minute(),a,o):i(a,o),n&&n.length&&!n.includes(s[e]())){const a=r?0:n.length-1;s=s[e](n[a])}}})),s};n.emit("set-picker-option",["formatToString",n=>n?Array.isArray(n)?n.map((n=>n.format(e.format))):n.format(e.format):null]),n.emit("set-picker-option",["parseUserInput",n=>n?Array.isArray(n)?n.map((n=>h(n,e.format).locale(t.value))):h(n,e.format).locale(t.value):null]),n.emit("set-picker-option",["isValidValue",e=>{const n=e.map((e=>h(e).locale(t.value))),a=x(n);return n[0].isSame(a[0])&&n[1].isSame(a[1])}]),n.emit("set-picker-option",["handleKeydown",e=>{const n=e.code;if(n===g.left||n===g.right){return(e=>{const n=u.value?[0,3,6,11,14,17]:[0,3,8,11],a=["hours","minutes"].concat(u.value?["seconds"]:[]),t=(n.indexOf(w.value[0])+e+n.length)%n.length,r=n.length/2;t<r?D.start_emitSelectRange(a[t]):D.end_emitSelectRange(a[t-r])})(n===g.left?-1:1),void e.preventDefault()}if(n===g.up||n===g.down){const a=n===g.up?-1:1,t=w.value[0]<y.value?"start":"end";return D[`${t}_scrollDown`](a),void e.preventDefault()}}]),n.emit("set-picker-option",["getDefaultValue",()=>{if(Array.isArray(U))return U.map((e=>h(e).locale(t.value)));const e=h(U).locale(t.value);return[e,e.add(60,"m")]}]),n.emit("set-picker-option",["getRangeAvailableTime",x]);const D={},V=b("EP_PICKER_BASE"),{arrowControl:E,disabledHours:H,disabledMinutes:K,disabledSeconds:I,defaultValue:U}=V.props;return{nsTime:r,nsPicker:s,arrowControl:E,onSetOption:e=>{D[e[0]]=e[1]},setMaxSelectionRange:(e,a)=>{n.emit("select-range",e,a,"max"),w.value=[e+y.value,a+y.value]},setMinSelectionRange:(e,a)=>{n.emit("select-range",e,a,"min"),w.value=[e,a]},btnConfirmDisabled:k,handleCancel:()=>{n.emit("pick",l.value,!1)},handleConfirm:(e=!1)=>{n.emit("pick",[o.value,i.value],e)},t:a,showSeconds:u,minDate:o,maxDate:i,amPmMode:c,handleMinChange:e=>{S(e.millisecond(0),i.value)},handleMaxChange:e=>{S(o.value,e.millisecond(0))},minSelectableRange:d,maxSelectableRange:v,disabledHours_:C,disabledMinutes_:T,disabledSeconds_:O}}}),le=["disabled"];var ue=v(ie,[["render",function(e,n,a,t,r,s){const o=S("time-spinner");return e.actualVisible?(k(),w("div",{key:0,class:C([e.nsTime.b("range-picker"),e.nsPicker.b("panel")])},[y("div",{class:C(e.nsTime.be("range-picker","content"))},[y("div",{class:C(e.nsTime.be("range-picker","cell"))},[y("div",{class:C(e.nsTime.be("range-picker","header"))},T(e.t("el.datepicker.startTime")),3),y("div",{class:C([e.nsTime.be("range-picker","body"),e.nsTime.be("panel","content"),e.nsTime.is("arrow",e.arrowControl),{"has-seconds":e.showSeconds}])},[O(o,{ref:"minSpinner",role:"start","show-seconds":e.showSeconds,"am-pm-mode":e.amPmMode,"arrow-control":e.arrowControl,"spinner-date":e.minDate,"disabled-hours":e.disabledHours_,"disabled-minutes":e.disabledMinutes_,"disabled-seconds":e.disabledSeconds_,onChange:e.handleMinChange,onSetOption:e.onSetOption,onSelectRange:e.setMinSelectionRange},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onChange","onSetOption","onSelectRange"])],2)],2),y("div",{class:C(e.nsTime.be("range-picker","cell"))},[y("div",{class:C(e.nsTime.be("range-picker","header"))},T(e.t("el.datepicker.endTime")),3),y("div",{class:C([e.nsTime.be("range-picker","body"),e.nsTime.be("panel","content"),e.nsTime.is("arrow",e.arrowControl),{"has-seconds":e.showSeconds}])},[O(o,{ref:"maxSpinner",role:"end","show-seconds":e.showSeconds,"am-pm-mode":e.amPmMode,"arrow-control":e.arrowControl,"spinner-date":e.maxDate,"disabled-hours":e.disabledHours_,"disabled-minutes":e.disabledMinutes_,"disabled-seconds":e.disabledSeconds_,onChange:e.handleMaxChange,onSetOption:e.onSetOption,onSelectRange:e.setMaxSelectionRange},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onChange","onSetOption","onSelectRange"])],2)],2)],2),y("div",{class:C(e.nsTime.be("panel","footer"))},[y("button",{type:"button",class:C([e.nsTime.be("panel","btn"),"cancel"]),onClick:n[0]||(n[0]=n=>e.handleCancel())},T(e.t("el.datepicker.cancel")),3),y("button",{type:"button",class:C([e.nsTime.be("panel","btn"),"confirm"]),disabled:e.btnConfirmDisabled,onClick:n[1]||(n[1]=n=>e.handleConfirm())},T(e.t("el.datepicker.confirm")),11,le)],2)],2)):x("v-if",!0)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);h.extend(j);const ce=d({name:"ElTimePicker",install:null,props:l(i({},D),{isRange:{type:Boolean,default:!1}}),emits:["update:modelValue"],setup(e,n){const a=f(null),t=e.isRange?"timerange":"time",r=e.isRange?ue:V,s=l(i({},e),{focus:()=>{var e;null==(e=a.value)||e.handleFocus()},blur:()=>{var e;null==(e=a.value)||e.handleBlur()}});return M("ElPopperOptions",e.popperOptions),n.expose(s),()=>{var s;const o=null!=(s=e.format)?s:E;return R(H,l(i({},e),{format:o,type:t,ref:a,"onUpdate:modelValue":e=>n.emit("update:modelValue",e)}),{default:e=>R(r,e)})}}});ce.install=e=>{e.component(ce.name,ce)};const de=ce;export{de as E};
