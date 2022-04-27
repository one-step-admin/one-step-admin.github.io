
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.9c1fa942.js";import{_ as a}from"./index.abd93cee.js";import{_ as e,E as i,c as s,e as n,w as r,n as o,f as c,y as l}from"./index.05e4ed9f.js";import{E as d}from"./el-button.a01942a9.js";/* empty css                */import{_ as u}from"./index.dd2c42e8.js";import"./index.48c8fc0e.js";import"./index.aa8c6f3e.js";const m={data:()=>({url1:"",url2:"",url3:""}),mounted(){this.$qrcode.toDataURL("Fantastic-admin 真棒！").then((t=>{this.url1=t})).catch((t=>{})),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((t=>{this.url2=t})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((t=>{this.url3=t})).catch((t=>{}))},methods:{open(t){window.open(t,"top")}}},f=l(" node-qrcode 官网 "),h=["src"],p={ref:"canvas"},_=["src"],j=["src"];var v=e(m,[["render",function(e,l,m,v,x,E){const g=u,q=i,b=d,$=a,w=t;return o(),s("div",null,[n($,{title:"二维码"},{default:r((()=>[n(b,{onClick:l[0]||(l[0]=t=>E.open("https://github.com/soldair/node-qrcode"))},{icon:r((()=>[n(q,null,{default:r((()=>[n(g,{name:"ep:link"})])),_:1})])),default:r((()=>[f])),_:1})])),_:1}),n(w,{title:"渲染成 img 标签"},{default:r((()=>[c("img",{src:x.url1},null,8,h)])),_:1}),n(w,{title:"渲染成 canvas 标签"},{default:r((()=>[c("canvas",p,null,512)])),_:1}),n(w,{title:"自定义颜色"},{default:r((()=>[c("img",{src:x.url2},null,8,_)])),_:1}),n(w,{title:"指定宽度"},{default:r((()=>[c("img",{src:x.url3},null,8,j)])),_:1})])}]]);export{v as default};
