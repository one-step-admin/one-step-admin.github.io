
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as t}from"./index.15becada.js";import{_ as a}from"./index.7bc6f31f.js";import{_ as e,E as i,c as s,b as n,w as r,n as o,e as l,y as c}from"./index.0a5e3bc2.js";import{E as d}from"./el-button.2fada245.js";/* empty css                */import{_ as u}from"./index.5fef9d7d.js";import"./index2.f37a6952.js";import"./index2.2a4e9295.js";import"./index2.fa2fe4ab.js";const m={data:()=>({url1:"",url2:"",url3:""}),mounted(){this.$qrcode.toDataURL("Fantastic-admin 真棒！").then((t=>{this.url1=t})).catch((t=>{})),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((t=>{this.url2=t})).catch((t=>{})),this.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((t=>{this.url3=t})).catch((t=>{}))},methods:{open(t){window.open(t,"top")}}},f=c(" node-qrcode 官网 "),h=["src"],p={ref:"canvas"},_=["src"],b=["src"];var j=e(m,[["render",function(e,c,m,j,x,v){const E=u,g=i,q=d,$=a,w=t;return o(),s("div",null,[n($,{title:"二维码"},{default:r((()=>[n(q,{onClick:c[0]||(c[0]=t=>v.open("https://github.com/soldair/node-qrcode"))},{icon:r((()=>[n(g,null,{default:r((()=>[n(E,{name:"ep:link"})])),_:1})])),default:r((()=>[f])),_:1})])),_:1}),n(w,{title:"渲染成 img 标签"},{default:r((()=>[l("img",{src:x.url1},null,8,h)])),_:1}),n(w,{title:"渲染成 canvas 标签"},{default:r((()=>[l("canvas",p,null,512)])),_:1}),n(w,{title:"自定义颜色"},{default:r((()=>[l("img",{src:x.url2},null,8,_)])),_:1}),n(w,{title:"指定宽度"},{default:r((()=>[l("img",{src:x.url3},null,8,b)])),_:1})])}]]);export{j as default};
