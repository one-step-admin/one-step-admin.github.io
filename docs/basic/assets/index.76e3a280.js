
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as x}from"./index.01cc99bb.js";import{_ as g}from"./index.c68129cf.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{c as y,o as _,C as c,J as u,M as d,D as o,H as e,b as f,T as h,r as m,I as s}from"./vendor.b89370fb.js";import{_ as b}from"./index.08106675.js";const w={key:0,class:"prefix"},$={class:"text"},j={key:1,class:"suffix"},C={props:{value:{type:String,required:!0},type:{type:String,validator:n=>["up","down"].includes(n),default:"up"},prefix:{type:String,default:""},suffix:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(n){const i=n,a=y(()=>{let t=i.type==="up";return i.reverse&&(t=!t),t});return(t,r)=>{const l=g;return _(),c("div",{class:h(`trend ${f(a)?"up":"down"}`)},[n.prefix?(_(),c("span",w,u(n.prefix),1)):d("v-if",!0),o("span",$,u(n.value),1),n.suffix?(_(),c("span",j,u(n.suffix),1)):d("v-if",!0),e(l,{name:`${f(a)?"el-icon-caret-top":"el-icon-caret-bottom"}`},null,8,["name"])],2)}}};var S=p(C,[["__scopeId","data-v-5e8531b1"]]);const k={},B=o("p",null,"Trend",-1),N=o("p",{style:{"margin-bottom":"0"}},"\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916",-1);function V(n,i){const a=b,t=S,r=x,l=m("el-col"),v=m("el-row");return _(),c("div",null,[e(a,{title:"\u8D8B\u52BF\u7B26\u53F7"},{content:s(()=>[B,N]),_:1}),e(v,{gutter:20,style:{margin:"0 10px"}},{default:s(()=>[e(l,{md:8},{default:s(()=>[e(r,{title:"\u57FA\u7840\u7528\u6CD5",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3"})]),o("p",null,[e(t,{value:"12.3",type:"down"})])]),_:1})]),_:1}),e(l,{md:8},{default:s(()=>[e(r,{title:"\u989C\u8272\u53CD\u8F6C",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3",reverse:""})]),o("p",null,[e(t,{value:"12.3",type:"down",reverse:""})])]),_:1})]),_:1}),e(l,{md:8},{default:s(()=>[e(r,{title:"\u524D\u7F00\u540E\u7F00",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3",prefix:"$"})]),o("p",null,[e(t,{value:"12.3",suffix:"%"})])]),_:1})]),_:1})]),_:1})])}var z=p(k,[["render",V]]);export{z as default};