
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{r as e}from"./index.25647206.js";function r(){const r=e({page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper",sort:null,order:null});return{pagination:r,getParams:function(e={}){const n={from:(r.value.page-1)*r.value.size,limit:r.value.size};return r.value.sort&&r.value.order&&(n.sort=r.value.sort,n.order=r.value.order),Object.assign(n,e),n},onSizeChange:function(e){return new Promise((n=>{r.value.size=e,n()}))},onCurrentChange:function(e){return new Promise((n=>{r.value.page=e,n()}))},onSortChange:function({prop:e,order:n}){return new Promise((o=>{r.value.sort=e,r.value.order="ascending"===n?"asc":"desc",o()}))}}}export{r as u};
