
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.84a18d1d.js";import{_ as a}from"./index.c51a8d86.js";import{_ as n,c as s,b as e,w as i,m as c,n as l,e as r,y as o}from"./index.93ad63e3.js";const d={data:()=>({url1:"",url2:"",url3:""}),mounted(){this.$qrcode.toDataURL("Fantastic-admin 真棒！").then((t=>{this.url1=t})).catch((t=>{})),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((t=>{this.url2=t})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((t=>{this.url3=t})).catch((t=>{}))},methods:{open(t){window.open(t,"top")}}},u=o("node-qrcode 官网"),h=["src"],m={ref:"canvas"},f=["src"],p=["src"];var _=n(d,[["render",function(n,o,d,_,v,g){const q=c("el-button"),E=a,$=t;return l(),s("div",null,[e(E,{title:"二维码"},{default:i((()=>[e(q,{icon:"el-icon-link",onClick:o[0]||(o[0]=t=>g.open("https://github.com/soldair/node-qrcode"))},{default:i((()=>[u])),_:1})])),_:1}),e($,{title:"渲染成 img 标签"},{default:i((()=>[r("img",{src:v.url1},null,8,h)])),_:1}),e($,{title:"渲染成 canvas 标签"},{default:i((()=>[r("canvas",m,null,512)])),_:1}),e($,{title:"自定义颜色"},{default:i((()=>[r("img",{src:v.url2},null,8,f)])),_:1}),e($,{title:"指定宽度"},{default:i((()=>[r("img",{src:v.url3},null,8,p)])),_:1})])}]]);export{_ as default};
