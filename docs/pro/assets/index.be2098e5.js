
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as u}from"./index.1ee8d9f4.js";import{_ as c}from"./index.e01cfd04.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{r as s,I as f,l as e,j as t,o as b,T as _}from"./vendor.6b4522dc.js";const g={computed:{enableWatermark:{get:function(){return this.$store.state.settings.enableWatermark},set:function(o){this.$store.commit("settings/updateThemeSetting",{enableWatermark:o})}}}},x=_("\u5F00\u542F"),k=_("\u5173\u95ED");function h(o,n,j,W,v,a){const l=c,r=s("el-radio-button"),d=s("el-radio-group"),i=u;return b(),f("div",null,[e(l,{title:"\u9875\u9762\u6C34\u5370",content:"\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u4E0D\u5E0C\u671B\u7528\u6237\u5C06\u7CFB\u7EDF\u91CC\u7684\u4FE1\u606F\u968F\u610F\u622A\u56FE\u5E76\u8F6C\u53D1\uFF0C\u8FD9\u65F6\u53EF\u5F00\u542F\u9875\u9762\u6C34\u5370\uFF0C\u4EE5\u51CF\u5C11\u8FD9\u79CD\u60C5\u51B5\u53D1\u751F"}),e(i,{title:"\u53EF\u5728 src\\util\\useWatermark.js \u6587\u4EF6\u91CC\u5B9A\u5236\u6C34\u5370\u6587\u6848\u5185\u5BB9"},{default:t(()=>[e(d,{modelValue:a.enableWatermark,"onUpdate:modelValue":n[0]||(n[0]=m=>a.enableWatermark=m)},{default:t(()=>[e(r,{label:!0},{default:t(()=>[x]),_:1}),e(r,{label:!1},{default:t(()=>[k]),_:1})]),_:1},8,["modelValue"])]),_:1})])}var C=p(g,[["render",h]]);export{C as default};
