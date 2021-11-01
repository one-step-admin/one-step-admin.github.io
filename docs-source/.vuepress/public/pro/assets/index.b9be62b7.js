
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.b92ebba1.js";import{_ as f}from"./index.55ffcc18.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{h as l,r as v,o as u,i as x,j as r,H as a,l as t,T as w,k as m,G as y}from"./vendor.e2abc40b.js";import{_ as b}from"./index.a4d9ae54.js";const $={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,s=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),_=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,c)=>{const i=f,o=v("el-image");return u(),x(o,{src:n.src,fit:"cover",style:w(`width:${m(s)};height:${m(_)};`),"preview-src-list":[n.src]},{error:r(()=>[a("div",$,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var k=d(j,[["__scopeId","data-v-6ac2dcda"]]);const B={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,s,_,g,c){const i=b,o=k,p=h;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[a("div",null,[t(o,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[a("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=d(B,[["render",N],["__scopeId","data-v-fab78e5e"]]);export{V as default};
