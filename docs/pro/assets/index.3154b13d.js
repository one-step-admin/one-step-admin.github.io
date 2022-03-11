
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.e5c277f9.js";import{_ as a}from"./index.e3b25878.js";import{_ as e}from"./index.9dc02013.js";import{k as n,A as s,x as i,z as o,o as r,l,$ as c}from"./vendor.6ae38f98.js";const d={data:()=>({url1:"",url2:"",url3:""}),mounted(){this.$qrcode.toDataURL("Fantastic-admin 真棒！").then((t=>{this.url1=t})).catch((t=>{})),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((t=>{this.url2=t})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((t=>{this.url3=t})).catch((t=>{}))},methods:{open(t){window.open(t,"top")}}},u=c("node-qrcode 官网"),h=["src"],m={ref:"canvas"},f=["src"],p=["src"];var _=e(d,[["render",function(e,c,d,_,v,g){const q=o("el-button"),$=a,x=t;return r(),n("div",null,[s($,{title:"二维码"},{default:i((()=>[s(q,{icon:"el-icon-link",onClick:c[0]||(c[0]=t=>g.open("https://github.com/soldair/node-qrcode"))},{default:i((()=>[u])),_:1})])),_:1}),s(x,{title:"渲染成 img 标签"},{default:i((()=>[l("img",{src:v.url1},null,8,h)])),_:1}),s(x,{title:"渲染成 canvas 标签"},{default:i((()=>[l("canvas",m,null,512)])),_:1}),s(x,{title:"自定义颜色"},{default:i((()=>[l("img",{src:v.url2},null,8,f)])),_:1}),s(x,{title:"指定宽度"},{default:i((()=>[l("img",{src:v.url3},null,8,p)])),_:1})])}]]);export{_ as default};
