
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as d}from"./index.0c7c3053.js";import{_}from"./index.56ea387f.js";import{_ as u}from"./index.e7d2f5e5.js";import{k as m,A as e,x as o,z as h,o as p,l as s,$ as f}from"./vendor.ac88770c.js";const g={data(){return{url1:"",url2:"",url3:""}},mounted(){this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01").then(t=>{this.url1=t}).catch(t=>{console.log(t)}),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin \u771F\u68D2\uFF01").then(()=>{console.log("success")}).catch(t=>{console.log(t)}),this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then(t=>{this.url2=t}).catch(t=>{console.log(t)}),this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{width:100}).then(t=>{this.url3=t}).catch(t=>{console.log(t)})},methods:{open(t){window.open(t,"top")}}},v=f("node-qrcode \u5B98\u7F51"),x=["src"],$={ref:"canvas"},k=["src"],q=["src"];function E(t,a,j,w,c,l){const i=h("el-button"),r=_,n=d;return p(),m("div",null,[e(r,{title:"\u4E8C\u7EF4\u7801"},{default:o(()=>[e(i,{icon:"el-icon-link",onClick:a[0]||(a[0]=C=>l.open("https://github.com/soldair/node-qrcode"))},{default:o(()=>[v]),_:1})]),_:1}),e(n,{title:"\u6E32\u67D3\u6210 img \u6807\u7B7E"},{default:o(()=>[s("img",{src:c.url1},null,8,x)]),_:1}),e(n,{title:"\u6E32\u67D3\u6210 canvas \u6807\u7B7E"},{default:o(()=>[s("canvas",$,null,512)]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:o(()=>[s("img",{src:c.url2},null,8,k)]),_:1}),e(n,{title:"\u6307\u5B9A\u5BBD\u5EA6"},{default:o(()=>[s("img",{src:c.url3},null,8,q)]),_:1})])}var L=u(g,[["render",E]]);export{L as default};
