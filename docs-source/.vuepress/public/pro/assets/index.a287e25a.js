
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as d}from"./index.87525c75.js";import{_}from"./index.7ad6cc10.js";import{_ as u}from"./index.57e02146.js";import{x as m,k as h,A as o,z as e,o as p,l as s,$ as f}from"./vendor.049789a1.js";const g={data(){return{url1:"",url2:"",url3:""}},mounted(){this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01").then(t=>{this.url1=t}).catch(t=>{console.log(t)}),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin \u771F\u68D2\uFF01").then(()=>{console.log("success")}).catch(t=>{console.log(t)}),this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then(t=>{this.url2=t}).catch(t=>{console.log(t)}),this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{width:100}).then(t=>{this.url3=t}).catch(t=>{console.log(t)})},methods:{open(t){window.open(t,"top")}}},v=f("node-qrcode \u5B98\u7F51"),x=["src"],$={ref:"canvas"},k=["src"],q=["src"];function E(t,a,j,w,c,l){const i=m("el-button"),r=_,n=d;return p(),h("div",null,[o(r,{title:"\u4E8C\u7EF4\u7801"},{default:e(()=>[o(i,{icon:"el-icon-link",onClick:a[0]||(a[0]=C=>l.open("https://github.com/soldair/node-qrcode"))},{default:e(()=>[v]),_:1})]),_:1}),o(n,{title:"\u6E32\u67D3\u6210 img \u6807\u7B7E"},{default:e(()=>[s("img",{src:c.url1},null,8,x)]),_:1}),o(n,{title:"\u6E32\u67D3\u6210 canvas \u6807\u7B7E"},{default:e(()=>[s("canvas",$,null,512)]),_:1}),o(n,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:e(()=>[s("img",{src:c.url2},null,8,k)]),_:1}),o(n,{title:"\u6307\u5B9A\u5BBD\u5EA6"},{default:e(()=>[s("img",{src:c.url3},null,8,q)]),_:1})])}var L=u(g,[["render",E]]);export{L as default};
