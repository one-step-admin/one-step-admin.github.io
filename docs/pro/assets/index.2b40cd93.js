
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.e4264495.js";import{_ as a}from"./index.f15ab100.js";import{_ as e,E as i,c as s,g as n,w as o,o as r,a as l,y as c}from"./index.b046d3e8.js";import{E as d}from"./el-button.12f8eb95.js";/* empty css                */import{_ as u}from"./index.f1e68254.js";import"./index.2b0c4341.js";import"./index.16ef6f7e.js";const m={data:()=>({url1:"",url2:"",url3:""}),mounted(){this.$qrcode.toDataURL("Fantastic-admin 真棒！").then((t=>{this.url1=t})).catch((t=>{})),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((t=>{this.url2=t})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((t=>{this.url3=t})).catch((t=>{}))},methods:{open(t){window.open(t,"top")}}},f=c(" node-qrcode 官网 "),h=["src"],p={ref:"canvas"},_=["src"],b=["src"];var j=e(m,[["render",function(e,c,m,j,g,v){const x=u,E=i,q=d,$=a,w=t;return r(),s("div",null,[n($,{title:"二维码"},{default:o((()=>[n(q,{onClick:c[0]||(c[0]=t=>v.open("https://github.com/soldair/node-qrcode"))},{icon:o((()=>[n(E,null,{default:o((()=>[n(x,{name:"ep:link"})])),_:1})])),default:o((()=>[f])),_:1})])),_:1}),n(w,{title:"渲染成 img 标签"},{default:o((()=>[l("img",{src:g.url1},null,8,h)])),_:1}),n(w,{title:"渲染成 canvas 标签"},{default:o((()=>[l("canvas",p,null,512)])),_:1}),n(w,{title:"自定义颜色"},{default:o((()=>[l("img",{src:g.url2},null,8,_)])),_:1}),n(w,{title:"指定宽度"},{default:o((()=>[l("img",{src:g.url3},null,8,b)])),_:1})])}]]);export{j as default};
