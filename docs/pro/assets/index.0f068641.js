
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as x}from"./index.87525c75.js";import{_ as g}from"./index.a0eee7e3.js";import{_ as p}from"./index.57e02146.js";import{t as y,o as _,k as i,Y as c,m as d,l as o,A as e,u as f,a5 as h,x as m,z as s}from"./vendor.049789a1.js";import{_ as w}from"./index.7ad6cc10.js";const $={key:0,class:"prefix"},j={class:"text"},k={key:1,class:"suffix"},S={props:{value:{type:String,required:!0},type:{type:String,validator:n=>["up","down"].includes(n),default:"up"},prefix:{type:String,default:""},suffix:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(n){const u=n,l=y(()=>{let t=u.type==="up";return u.reverse&&(t=!t),t});return(t,r)=>{const a=g;return _(),i("div",{class:h(`trend ${f(l)?"up":"down"}`)},[n.prefix?(_(),i("span",$,c(n.prefix),1)):d("v-if",!0),o("span",j,c(n.value),1),n.suffix?(_(),i("span",k,c(n.suffix),1)):d("v-if",!0),e(a,{name:`${f(l)?"el-icon-caret-top":"el-icon-caret-bottom"}`},null,8,["name"])],2)}}};var B=p(S,[["__scopeId","data-v-0e16ba3a"]]);const C={},b=o("p",null,"Trend",-1),N=o("p",{style:{"margin-bottom":"0"}},"\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916",-1);function V(n,u){const l=w,t=B,r=x,a=m("el-col"),v=m("el-row");return _(),i("div",null,[e(l,{title:"\u8D8B\u52BF\u7B26\u53F7"},{content:s(()=>[b,N]),_:1}),e(v,{gutter:20,style:{margin:"0 10px"}},{default:s(()=>[e(a,{md:8},{default:s(()=>[e(r,{title:"\u57FA\u7840\u7528\u6CD5",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3"})]),o("p",null,[e(t,{value:"12.3",type:"down"})])]),_:1})]),_:1}),e(a,{md:8},{default:s(()=>[e(r,{title:"\u989C\u8272\u53CD\u8F6C",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3",reverse:""})]),o("p",null,[e(t,{value:"12.3",type:"down",reverse:""})])]),_:1})]),_:1}),e(a,{md:8},{default:s(()=>[e(r,{title:"\u524D\u7F00\u540E\u7F00",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3",prefix:"$"})]),o("p",null,[e(t,{value:"12.3",suffix:"%"})])]),_:1})]),_:1})]),_:1})])}var E=p(C,[["render",V]]);export{E as default};
