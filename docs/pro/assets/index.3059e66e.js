
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.84a18d1d.js";import{_ as n}from"./index.c51a8d86.js";import{_ as t,c as a,b as i,w as o,m as r,n as l}from"./index.93ad63e3.js";function s(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"zh-cn":{intro:e=>{const{normalize:n}=e;return n(["除了支持全局多语言切换，还支持 Vue 单文件模式语言切换，你可以尝试在这个页面点击右上角的语言切换试试"])}},"zh-tw":{intro:e=>{const{normalize:n}=e;return n(["除了支持全局多語言切換，還支持 Vue 單文件模式語言切換，你可以嘗試在這個頁面點擊右上角的語言切換試試"])}},en:{intro:e=>{const{normalize:n}=e;return n(["In addition to global multi-language switch, also support Vue single file mode language switch, you can try to click on the top right corner of the page to switch language"])}}}})}const g={data:()=>({page:1,pageSize:100}),methods:{handleSizeChange(e){this.pageSize=e},handleCurrentChange(e){this.page=e}}};s(g);var u=t(g,[["render",function(t,s,g,u,h,p){const c=n,d=r("el-pagination"),z=e;return l(),a("div",null,[i(c,{title:t.$t("route.i18n"),content:t.$t("intro")},null,8,["title","content"]),i(z,{title:"Element 组件"},{default:o((()=>[i(d,{"current-page":h.page,"page-sizes":[100,200,300,400],"page-size":h.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange},null,8,["current-page","page-size","onSizeChange","onCurrentChange"])])),_:1})])}]]);export{u as default};
