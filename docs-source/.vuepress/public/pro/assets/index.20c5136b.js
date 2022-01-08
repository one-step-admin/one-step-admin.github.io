
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as h}from"./index.87525c75.js";import{_ as v}from"./index.a0eee7e3.js";import{_ as p}from"./index.57e02146.js";import{t as l,x as f,o as u,y as x,z as r,l as s,A as t,B as w,u as m,k as y}from"./vendor.049789a1.js";import{_ as $}from"./index.7ad6cc10.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,a=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),_=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,c)=>{const i=v,o=f("el-image");return u(),x(o,{src:n.src,fit:"cover",style:w(`width:${m(a)};height:${m(_)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var B=p(j,[["__scopeId","data-v-318badd8"]]);const k={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,a,_,g,c){const i=$,o=B,d=h;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(d,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(d,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=p(k,[["render",N],["__scopeId","data-v-3599e071"]]);export{V as default};
