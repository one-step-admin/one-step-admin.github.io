
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./index.b92ebba1.js";import{_ as g}from"./index.a4d9ae54.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{r as h,G as m,l as o,j as d,o as z}from"./vendor.e2abc40b.js";function i(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"zh-cn":{intro:n=>{const{normalize:t}=n;return t(["\u9664\u4E86\u652F\u6301\u5168\u5C40\u591A\u8BED\u8A00\u5207\u6362\uFF0C\u8FD8\u652F\u6301 Vue \u5355\u6587\u4EF6\u6A21\u5F0F\u8BED\u8A00\u5207\u6362\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u5728\u8FD9\u4E2A\u9875\u9762\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u8BED\u8A00\u5207\u6362\u8BD5\u8BD5"])}},"zh-tw":{intro:n=>{const{normalize:t}=n;return t(["\u9664\u4E86\u652F\u6301\u5168\u5C40\u591A\u8A9E\u8A00\u5207\u63DB\uFF0C\u9084\u652F\u6301 Vue \u55AE\u6587\u4EF6\u6A21\u5F0F\u8A9E\u8A00\u5207\u63DB\uFF0C\u4F60\u53EF\u4EE5\u5617\u8A66\u5728\u9019\u500B\u9801\u9762\u9EDE\u64CA\u53F3\u4E0A\u89D2\u7684\u8A9E\u8A00\u5207\u63DB\u8A66\u8A66"])}},en:{intro:n=>{const{normalize:t}=n;return t(["In addition to global multi-language switch, also support Vue single file mode language switch, you can try to click on the top right corner of the page to switch language"])}}}})}const l={data(){return{page:1,pageSize:100}},methods:{handleSizeChange(e){this.pageSize=e,console.log(`\u6BCF\u9875 ${e} \u6761`)},handleCurrentChange(e){this.page=e,console.log(`\u5F53\u524D\u9875: ${e}`)}}};function f(e,n,t,C,a,r){const s=g,p=h("el-pagination"),c=u;return z(),m("div",null,[o(s,{title:e.$t("route.i18n"),content:e.$t("intro")},null,8,["title","content"]),o(c,{title:"Element \u7EC4\u4EF6"},{default:d(()=>[o(p,{"current-page":a.page,"page-sizes":[100,200,300,400],"page-size":a.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:r.handleSizeChange,onCurrentChange:r.handleCurrentChange},null,8,["current-page","page-size","onSizeChange","onCurrentChange"])]),_:1})])}typeof i=="function"&&i(l);var w=_(l,[["render",f]]);export{w as default};
