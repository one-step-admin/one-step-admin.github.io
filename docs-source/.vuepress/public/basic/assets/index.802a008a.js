
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as h}from"./index.add06bb2.js";import{_ as v}from"./index.3ac8c786.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{I as l,r as f,o as u,c as x,y as r,s,x as t,K as w,L as m,q as y}from"./vendor.1e66543d.js";import{_ as $}from"./index.727c9c70.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,a=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),c=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,_)=>{const i=v,o=f("el-image");return u(),x(o,{src:n.src,fit:"cover",style:w(`width:${m(a)};height:${m(c)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var B=d(j,[["__scopeId","data-v-6ac2dcda"]]);const I={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,a,c,g,_){const i=$,o=B,p=h;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=d(I,[["render",N],["__scopeId","data-v-3599e071"]]);export{V as default};
