
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as h}from"./index.01cc99bb.js";import{_ as f}from"./index.c68129cf.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{c as l,r as v,o as u,a as x,I as r,D as s,H as t,n as w,b as m,C as y}from"./vendor.b89370fb.js";import{_ as $}from"./index.08106675.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,c=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),a=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,_)=>{const i=f,o=v("el-image");return u(),x(o,{src:n.src,fit:"cover",style:w(`width:${m(c)};height:${m(a)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var B=d(j,[["__scopeId","data-v-318badd8"]]);const I={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,c,a,g,_){const i=$,o=B,p=h;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=d(I,[["render",N],["__scopeId","data-v-3599e071"]]);export{V as default};
