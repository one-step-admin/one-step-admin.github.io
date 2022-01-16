
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{r as i}from"./vendor.18c32348.js";function c(){const e=i({page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper",sort:null,order:null});function o(n={}){const r={from:(e.value.page-1)*e.value.size,limit:e.value.size};return e.value.sort&&e.value.order&&(r.sort=e.value.sort,r.order=e.value.order),Object.assign(r,n),r}function a(n){return new Promise(r=>{e.value.size=n,r()})}function t(n){return new Promise(r=>{e.value.page=n,r()})}function s({prop:n,order:r}){return new Promise(u=>{console.log(r),e.value.sort=n,e.value.order=r==="ascending"?"asc":"desc",u()})}return{pagination:e,getParams:o,onSizeChange:a,onCurrentChange:t,onSortChange:s}}export{c as u};
