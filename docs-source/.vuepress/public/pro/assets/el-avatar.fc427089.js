
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;import{I as c,V as i,ae as l,M as p,d as u,J as f,r as v,C as y,X as m,ao as b,a9 as d,Z as g,o as S,c as j,ab as O,i as h,j as w,w as E,ai as k,E as P,H as z,a1 as _,a2 as x,L as I}from"./index.89c4a536.js";const q=c({size:{type:[Number,String],values:i,default:"",validator:e=>"number"==typeof e},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:l},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:p(String),default:"cover"}}),A={error:e=>e instanceof Event},C=["src","alt","srcset"],D=u((F=((e,a)=>{for(var r in a||(a={}))s.call(a,r)&&n(e,r,a[r]);if(t)for(var r of t(a))o.call(a,r)&&n(e,r,a[r]);return e})({},{name:"ElAvatar"}),a(F,r({props:q,emits:A,setup(e,{emit:a}){const r=e,t=f("avatar"),s=v(!1),o=y((()=>{const{size:e,icon:a,shape:s}=r,o=[t.b()];return m(e)&&o.push(t.m(e)),a&&o.push(t.m("icon")),s&&o.push(t.m(s)),o})),n=y((()=>{const{size:e}=r;return b(e)?{"--el-avatar-size":d(e)}:void 0})),c=y((()=>({objectFit:r.fit})));function i(e){s.value=!0,a("error",e)}return g((()=>r.src),(()=>s.value=!1)),(e,a)=>(S(),j("span",{class:_(h(o)),style:O(h(n))},[!e.src&&!e.srcSet||s.value?e.icon?(S(),w(h(P),{key:1},{default:E((()=>[(S(),w(k(e.icon)))])),_:1})):z(e.$slots,"default",{key:2}):(S(),j("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:O(h(c)),onError:i},null,44,C))],6))}}))));var F;const H=I(x(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]));export{H as E};
