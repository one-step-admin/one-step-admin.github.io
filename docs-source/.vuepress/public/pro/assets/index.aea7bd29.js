
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as t}from"./index.7ae327c0.js";import{_ as a}from"./index.60634e19.js";import{_ as e,E as i,c as s,g as n,w as o,o as r,a as c,y as l}from"./index.89c4a536.js";import{E as d}from"./el-button.ee77ba8f.js";/* empty css                */import{_ as u}from"./index.2a4f1e1c.js";import"./index.0dfe2aba.js";import"./index.a744c982.js";const m={data:()=>({url1:"",url2:"",url3:""}),mounted(){this.$qrcode.toDataURL("Fantastic-admin 真棒！").then((t=>{this.url1=t})).catch((t=>{})),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((t=>{this.url2=t})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((t=>{this.url3=t})).catch((t=>{}))},methods:{open(t){window.open(t,"top")}}},h=l(" node-qrcode 官网 "),f=["src"],p={ref:"canvas"},_=["src"],j=["src"];var g=e(m,[["render",function(e,l,m,g,v,x){const E=u,b=i,q=d,$=a,w=t;return r(),s("div",null,[n($,{title:"二维码"},{default:o((()=>[n(q,{onClick:l[0]||(l[0]=t=>x.open("https://github.com/soldair/node-qrcode"))},{icon:o((()=>[n(b,null,{default:o((()=>[n(E,{name:"ep:link"})])),_:1})])),default:o((()=>[h])),_:1})])),_:1}),n(w,{title:"渲染成 img 标签"},{default:o((()=>[c("img",{src:v.url1},null,8,f)])),_:1}),n(w,{title:"渲染成 canvas 标签"},{default:o((()=>[c("canvas",p,null,512)])),_:1}),n(w,{title:"自定义颜色"},{default:o((()=>[c("img",{src:v.url2},null,8,_)])),_:1}),n(w,{title:"指定宽度"},{default:o((()=>[c("img",{src:v.url3},null,8,j)])),_:1})])}]]);export{g as default};
