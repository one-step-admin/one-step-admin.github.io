
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(s,a,t)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;import{A as r,O as c,d as i,B as p,C as u,m as f,c as b,b as d,W as m,X as g,g as y,h as k,f as v,e as O,aU as h,E as j,i as C,a6 as w,a7 as E,_ as P,F as _}from"./index.1b2a4798.js";import{u as B}from"./index.c8167427.js";const S=r({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:c,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),x={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},T=i(($=((e,s)=>{for(var a in s||(s={}))o.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))l.call(s,a)&&n(e,a,s[a]);return e})({},{name:"ElTag"}),s($,a({props:S,emits:x,setup(e,{emit:s}){const a=e,t=B(),o=p("tag"),l=u((()=>{const{type:e,hit:s,effect:l,closable:n,round:r}=a;return[o.b(),o.is("closable",n),o.m(e),o.m(t.value),o.m(l),o.is("hit",s),o.is("round",r)]})),n=e=>{e.stopPropagation(),s("close",e)},r=e=>{s("click",e)};return(e,s)=>e.disableTransitions?(f(),k(E,{key:1,name:`${y(o).namespace.value}-zoom-in-center`},{default:v((()=>[d("span",{class:g(y(l)),style:w({backgroundColor:e.color}),onClick:r},[d("span",{class:g(y(o).e("content"))},[m(e.$slots,"default")],2),e.closable?(f(),k(y(j),{key:0,class:g(y(o).e("close")),onClick:n},{default:v((()=>[O(y(h))])),_:1},8,["class"])):C("v-if",!0)],6)])),_:3},8,["name"])):(f(),b("span",{key:0,class:g(y(l)),style:w({backgroundColor:e.color}),onClick:r},[d("span",{class:g(y(o).e("content"))},[m(e.$slots,"default")],2),e.closable?(f(),k(y(j),{key:0,class:g(y(o).e("close")),onClick:n},{default:v((()=>[O(y(h))])),_:1},8,["class"])):C("v-if",!0)],6))}}))));var $;const z=_(P(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{z as E,S as t};