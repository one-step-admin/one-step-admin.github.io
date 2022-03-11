
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.e5c277f9.js";import{_ as e}from"./index.a32c7679.js";import{_ as i}from"./index.9dc02013.js";import{s as r,z as s,o as a,t as o,x as d,l as n,A as l,B as c,u as p,k as h}from"./vendor.6ae38f98.js";import{_ as u}from"./index.e3b25878.js";const g={class:"image-slot"};var m=i({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const i=t,h=r((()=>"string"==typeof i.width?i.width:`${i.width}px`)),u=r((()=>"string"==typeof i.height?i.height:`${i.height}px`));return(i,r)=>{const m=e,f=s("el-image");return a(),o(f,{src:t.src,fit:"cover",style:c(`width:${p(h)};height:${p(u)};`),"preview-src-list":[t.src]},{error:d((()=>[n("div",g,[l(m,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-318badd8"]]);var f=i({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,r,s,o,c){const p=u,g=m,f=t;return a(),h("div",null,[l(p,{title:"图片预览",content:"ImagePreview"}),l(f,null,{default:d((()=>[n("div",null,[l(g,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),l(f,{title:"图片加载失败时"},{default:d((()=>[n("div",null,[l(g,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-3599e071"]]);export{f as default};
