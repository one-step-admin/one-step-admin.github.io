
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.d92f6c0c.js";import{_ as e}from"./index.fadd46b6.js";import{_ as i}from"./index.091d1180.js";import{s as r,z as s,o as a,t as d,x as o,l as n,A as c,B as l,u as p,k as h}from"./vendor.b0dde714.js";import{_ as u}from"./index.c2d6d7be.js";const g={class:"image-slot"};var m=i({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const i=t,h=r((()=>"string"==typeof i.width?i.width:`${i.width}px`)),u=r((()=>"string"==typeof i.height?i.height:`${i.height}px`));return(i,r)=>{const m=e,f=s("el-image");return a(),d(f,{src:t.src,fit:"cover",style:l(`width:${p(h)};height:${p(u)};`),"preview-src-list":[t.src]},{error:o((()=>[n("div",g,[c(m,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-6ac2dcda"]]);var f=i({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,r,s,d,l){const p=u,g=m,f=t;return a(),h("div",null,[c(p,{title:"图片预览",content:"ImagePreview"}),c(f,null,{default:o((()=>[n("div",null,[c(g,{src:`https://hooray.${l.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),c(f,{title:"图片加载失败时"},{default:o((()=>[n("div",null,[c(g,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-3599e071"]]);export{f as default};
