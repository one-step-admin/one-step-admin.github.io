
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{Z as e,D as a,f as n,r as t,o,U as d,ae as r,au as l}from"./index.eaca9d64.js";import{f as u,a as i}from"./index2.fa9449b9.js";const s={prefix:Math.floor(1e4*Math.random()),current:0},m=Symbol("elIdInjection"),v=t=>{const o=e(m,s);return a((()=>n(t)||`el-id-${o.prefix}-${o.current++}`))},I=()=>({form:e(u,void 0),formItem:e(i,void 0)}),p=(e,{formItemContext:n,disableIdGeneration:u,disableIdManagement:i})=>{u||(u=t(!1)),i||(i=t(!1));const s=t();let m;const I=a((()=>{var a;return!!(!e.label&&n&&n.inputIds&&(null==(a=n.inputIds)?void 0:a.length)<=1)}));return o((()=>{m=d([r(e,"id"),u],(([e,a])=>{const t=null!=e?e:a?void 0:v().value;t!==s.value&&((null==n?void 0:n.removeInputId)&&(s.value&&n.removeInputId(s.value),(null==i?void 0:i.value)||a||!t||n.addInputId(t)),s.value=t)}),{immediate:!0})})),l((()=>{m&&m(),(null==n?void 0:n.removeInputId)&&s.value&&n.removeInputId(s.value)})),{isLabeledByFormItem:I,inputId:s}};export{I as a,p as b,v as u};
