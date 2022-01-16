
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as h}from"./index.ef5f4349.js";import{_ as f}from"./index.3082f817.js";import{_ as p}from"./index.5c755cb6.js";import{s as l,z as v,o as u,t as x,x as r,l as s,A as t,B as w,u as m,k as y}from"./vendor.18c32348.js";import{_ as $}from"./index.da599f69.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,a=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),c=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,_)=>{const i=f,o=v("el-image");return u(),x(o,{src:n.src,fit:"cover",style:w(`width:${m(a)};height:${m(c)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var B=p(j,[["__scopeId","data-v-6ac2dcda"]]);const k={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,a,c,g,_){const i=$,o=B,d=h;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(d,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(d,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=p(k,[["render",N],["__scopeId","data-v-3599e071"]]);export{V as default};
