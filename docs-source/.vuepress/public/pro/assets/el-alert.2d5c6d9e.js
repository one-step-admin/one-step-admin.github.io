
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;import{O as i,bv as n,bk as c,d as p,bj as f,a6 as d,V as u,r as b,C as y,n as v,i as m,w as g,g as k,h as O,e as j,f as w,E as h,$ as S,ab as x,j as E,c as P,H as $,y as _,t as C,b as B,G as I,ac as T,a0 as A,ad as D}from"./index.0a5e3bc2.js";const G=i({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:n(c),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),H={close:e=>e instanceof MouseEvent},M=p((V=((e,t)=>{for(var s in t||(t={}))l.call(t,s)&&r(e,s,t[s]);if(a)for(var s of a(t))o.call(t,s)&&r(e,s,t[s]);return e})({},{name:"ElAlert"}),t(V,s({props:G,emits:H,setup(e,{emit:t}){const s=e,{Close:a}=f,l=d(),o=u("alert"),r=b(!0),i=y((()=>c[s.type]||c.info)),n=y((()=>s.description||{[o.is("big")]:l.default})),p=y((()=>s.description||{[o.is("bold")]:l.default})),A=e=>{r.value=!1,t("close",e)};return(e,t)=>(v(),m(T,{name:w(o).b("fade")},{default:g((()=>[k(j("div",{class:S([w(o).b(),w(o).m(e.type),w(o).is("center",e.center),w(o).is(e.effect)]),role:"alert"},[e.showIcon&&w(i)?(v(),m(w(h),{key:0,class:S([w(o).e("icon"),w(n)])},{default:g((()=>[(v(),m(x(w(i))))])),_:1},8,["class"])):E("v-if",!0),j("div",{class:S(w(o).e("content"))},[e.title||e.$slots.title?(v(),P("span",{key:0,class:S([w(o).e("title"),w(p)])},[$(e.$slots,"title",{},(()=>[_(C(e.title),1)]))],2)):E("v-if",!0),e.$slots.default||e.description?(v(),P("p",{key:1,class:S(w(o).e("description"))},[$(e.$slots,"default",{},(()=>[_(C(e.description),1)]))],2)):E("v-if",!0),e.closable?(v(),P(I,{key:2},[e.closeText?(v(),P("div",{key:0,class:S([w(o).e("close-btn"),w(o).is("customed")]),onClick:A},C(e.closeText),3)):(v(),m(w(h),{key:1,class:S(w(o).e("close-btn")),onClick:A},{default:g((()=>[B(w(a))])),_:1},8,["class"]))],2112)):E("v-if",!0)],2)],2),[[O,r.value]])])),_:3},8,["name"]))}}))));var V;const q=D(A(M,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]));export{q as E};