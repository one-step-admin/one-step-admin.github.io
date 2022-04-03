
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.538e7de7.js";import{_ as a}from"./index.bc6ef411.js";import{_ as e,c as n,b as s,w as i,m as c,n as l,e as r,y as o}from"./index.25647206.js";const d={data:()=>({url1:"",url2:"",url3:""}),mounted(){this.$qrcode.toDataURL("Fantastic-admin 真棒！").then((t=>{this.url1=t})).catch((t=>{})),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((t=>{this.url2=t})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((t=>{this.url3=t})).catch((t=>{}))},methods:{open(t){window.open(t,"top")}}},u=o("node-qrcode 官网"),h=["src"],m={ref:"canvas"},f=["src"],p=["src"];var _=e(d,[["render",function(e,o,d,_,v,g){const q=c("el-button"),E=a,$=t;return l(),n("div",null,[s(E,{title:"二维码"},{default:i((()=>[s(q,{icon:"el-icon-link",onClick:o[0]||(o[0]=t=>g.open("https://github.com/soldair/node-qrcode"))},{default:i((()=>[u])),_:1})])),_:1}),s($,{title:"渲染成 img 标签"},{default:i((()=>[r("img",{src:v.url1},null,8,h)])),_:1}),s($,{title:"渲染成 canvas 标签"},{default:i((()=>[r("canvas",m,null,512)])),_:1}),s($,{title:"自定义颜色"},{default:i((()=>[r("img",{src:v.url2},null,8,f)])),_:1}),s($,{title:"指定宽度"},{default:i((()=>[r("img",{src:v.url3},null,8,p)])),_:1})])}]]);export{_ as default};
