
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.e4264495.js";import{_ as o,o as t,j as a,w as r,y as d,t as n,a as f,g as i,k as l,ab as s,E as c,c as m}from"./index.b046d3e8.js";import{E as u}from"./el-row.d9220e4c.js";import{E as p}from"./el-col.62e05cfa.js";import{E as _}from"./el-card.fe3fee4d.js";/* empty css                */import{_ as b}from"./index.f1e68254.js";import{_ as g}from"./index.f15ab100.js";import"./typescript.14beffb5.js";const y={class:"num"},j={class:"tip"};var x=o({props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup:e=>(o,m)=>{const u=b,p=c,g=_;return t(),a(g,{shadow:"hover",class:"mini-card",style:s({background:`linear-gradient(50deg, ${e.colorFrom}, ${e.colorTo})`})},{header:r((()=>[d(n(e.header),1)])),default:r((()=>[f("div",y,n(e.num),1),f("div",j,n(e.tip),1),e.icon?(t(),a(p,{key:0},{default:r((()=>[i(u,{name:e.icon,rotate:20},null,8,["name"])])),_:1})):l("v-if",!0)])),_:1},8,["style"])}},[["__scopeId","data-v-8eb08d5e"]]);var h=o({},[["render",function(o,a){const d=g,n=x,f=p,l=u,s=e;return t(),m("div",null,[i(d,{title:"多彩渐变卡片",content:"ColorfulCard"}),i(s,null,{default:r((()=>[i(l,{gutter:20},{default:r((()=>[i(f,{md:12},{default:r((()=>[i(n,{header:"开发文档",num:123,tip:"较上周上升50%",icon:"index-document"})])),_:1}),i(f,{md:12},{default:r((()=>[i(n,{"color-from":"#fbaaa2","color-to":"#fc5286",header:"基础组件",num:12323,tip:"较上周上升50%",icon:"index-component"})])),_:1})])),_:1}),i(l,{gutter:20,style:{"margin-top":"20px"}},{default:r((()=>[i(f,{md:12},{default:r((()=>[i(n,{"color-from":"#ff763b","color-to":"#ffc480",header:"扩展组件",num:123,tip:"较上周上升50%",icon:"index-component"})])),_:1}),i(f,{md:12},{default:r((()=>[i(n,{"color-from":"#6a8eff","color-to":"#0e4cfd",header:"业务应用页面",num:123,tip:"较上周上升50%",icon:"index-page"})])),_:1})])),_:1})])),_:1})])}]]);export{h as default};