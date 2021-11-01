
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as g}from"./index.67dcbdc5.js";import{_ as V}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,q as w,x as e,y as t,o as y,s as o,B as S,C as q,H as r}from"./vendor.1e66543d.js";const k={name:"PersonalSetting",props:{},data(){return{form:{headimg:"",mobile:"",name:"",qq:"",wechat:""}}},created(){},mounted(){},methods:{handleSuccess(a){a.error==""?this.form.headimg=a.data.path:this.$message.warning(a.error)},editPassword(){this.$window.add("PersonalEditPassword")}}},i=a=>(S("data-v-11047674"),a=a(),q(),a),C=i(()=>o("h2",null,"\u57FA\u672C\u8BBE\u7F6E",-1)),P=r("\u4FDD\u5B58"),U=i(()=>o("h2",null,"\u5B89\u5168\u8BBE\u7F6E",-1)),B={class:"setting-list"},I={class:"item"},Q=i(()=>o("div",{class:"content"},[o("div",{class:"title"},"\u8D26\u6237\u5BC6\u7801"),o("div",{class:"desc"},"\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A\u5F3A")],-1)),j={class:"action"},N=r("\u4FEE\u6539"),E={class:"item"},O=i(()=>o("div",{class:"content"},[o("div",{class:"title"},"\u5BC6\u4FDD\u624B\u673A"),o("div",{class:"desc"},"\u5DF2\u7ED1\u5B9A\u624B\u673A\uFF1A187****3441")],-1)),T={class:"action"},D=r("\u4FEE\u6539"),H={class:"item"},K=i(()=>o("div",{class:"content"},[o("div",{class:"title"},"\u5907\u7528\u90AE\u7BB1"),o("div",{class:"desc"},"\u5F53\u524D\u672A\u7ED1\u5B9A\u5907\u7528\u90AE\u7BB1")],-1)),z={class:"action"},A=r("\u7ED1\u5B9A");function F(a,s,G,J,l,u){const c=d("el-input"),_=d("el-form-item"),m=d("el-button"),h=d("el-form"),p=d("el-col"),v=g,b=d("el-row"),f=d("el-tab-pane"),x=d("el-tabs");return y(),w("div",null,[e(x,{"tab-position":"left"},{default:t(()=>[e(f,{label:"\u57FA\u672C\u8BBE\u7F6E",class:"basic"},{default:t(()=>[C,e(b,{gutter:20},{default:t(()=>[e(p,{span:16},{default:t(()=>[e(h,{ref:"form",model:l.form,"label-width":"120px","label-suffix":"\uFF1A"},{default:t(()=>[e(_,{label:"\u540D \u79F0"},{default:t(()=>[e(c,{modelValue:l.form.name,"onUpdate:modelValue":s[0]||(s[0]=n=>l.form.name=n),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u624B\u673A\u53F7"},{default:t(()=>[e(c,{modelValue:l.form.mobile,"onUpdate:modelValue":s[1]||(s[1]=n=>l.form.mobile=n),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),e(_,{label:"QQ \u53F7"},{default:t(()=>[e(c,{modelValue:l.form.qq,"onUpdate:modelValue":s[2]||(s[2]=n=>l.form.qq=n),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684 QQ \u53F7"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u5FAE\u4FE1\u53F7"},{default:t(()=>[e(c,{modelValue:l.form.wechat,"onUpdate:modelValue":s[3]||(s[3]=n=>l.form.wechat=n),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u5FAE\u4FE1\u53F7"},null,8,["modelValue"])]),_:1}),e(_,null,{default:t(()=>[e(m,{type:"primary"},{default:t(()=>[P]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(p,{span:8},{default:t(()=>[e(v,{url:l.form.headimg,"onUpdate:url":s[4]||(s[4]=n=>l.form.headimg=n),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKD628431923530324"},notip:"",class:"headimg-upload",onOnSuccess:u.handleSuccess},null,8,["url","onOnSuccess"])]),_:1})]),_:1})]),_:1}),e(f,{label:"\u5B89\u5168\u8BBE\u7F6E",class:"security"},{default:t(()=>[U,o("div",B,[o("div",I,[Q,o("div",j,[e(m,{type:"text",onClick:u.editPassword},{default:t(()=>[N]),_:1},8,["onClick"])])]),o("div",E,[O,o("div",T,[e(m,{type:"text"},{default:t(()=>[D]),_:1})])]),o("div",H,[K,o("div",z,[e(m,{type:"text"},{default:t(()=>[A]),_:1})])])])]),_:1})]),_:1})])}var W=V(k,[["render",F],["__scopeId","data-v-11047674"]]);export{W as default};