
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as M}from"./index.3ac8c786.js";import{P as O,u as D,U as S,I as H,w as B,W as U,r as q,o as u,q as h,s,G as _,x as m,F as $,R as T,S as I,J as V,c as E,A as K,D as L,H as d,L as A,B as F,C as R,Z as z}from"./vendor.1e66543d.js";import{_ as G}from"./plugin-vue_export-helper.5a098b48.js";const C=f=>(F("data-v-172208af"),f=f(),R(),f),J={class:"container"},P={class:"tips"},W=C(()=>s("div",{class:"tip"},[s("span",null,"Alt"),d("+"),s("span",null,"S"),d(" \u5524\u9192\u641C\u7D22\u9762\u677F ")],-1)),Z={class:"tip"},Q=d(" \u5207\u6362\u641C\u7D22\u7ED3\u679C "),X={class:"tip"},Y=d(" \u8BBF\u95EE\u9875\u9762 "),ee=C(()=>s("div",{class:"tip"},[s("span",null,"ESC"),d(" \u9000\u51FA ")],-1)),se=["onClick","onMouseover"],te={class:"icon"},ne={class:"info"},oe={class:"title"},ae={class:"breadcrumb"},le=C(()=>s("i",{class:"el-icon-arrow-right"},null,-1)),re=O({name:"Search"});function ie(f){const{proxy:e}=z(),x=D(),r=S(!1),v=S(""),t=S(-1),i=H(()=>{let n=[];return n=Object.values(x.getters["menu/flatMenu"]).filter(a=>{let p=!1;return a.title.indexOf(v.value)>=0&&(p=!0),a.breadcrumbNeste.some(c=>c.title.indexOf(v.value)>=0)&&(p=!0),p}),n});B(()=>r.value,n=>{n?(document.querySelector("body").classList.add("hidden"),e.$refs.search.scrollTop=0,e.$hotkeys("up",g),e.$hotkeys("down",y),e.$hotkeys("enter",b),setTimeout(()=>{e.$refs.input.$el.children[0].focus()},100)):(document.querySelector("body").classList.remove("hidden"),e.$hotkeys.unbind("up",g),e.$hotkeys.unbind("down",y),e.$hotkeys.unbind("enter",b),setTimeout(()=>{v.value="",t.value=-1},500))}),B(()=>i.value,()=>{t.value=-1,k(0)}),U(()=>{e.$eventBus.on("global-search-toggle",()=>{r.value=!r.value}),e.$hotkeys("alt+s",n=>{x.state.settings.enableNavSearch&&(n.preventDefault(),r.value=!0)})});function g(){i.value.length&&(t.value-=1,t.value<0&&(t.value=i.value.length-1),k(e.$refs[`search-item-${t.value}`].offsetTop))}function y(){i.value.length&&(t.value+=1,t.value>i.value.length-1&&(t.value=0),k(e.$refs[`search-item-${t.value}`].offsetTop))}function b(){t.value!==-1&&e.$refs[`search-item-${t.value}`].click()}function k(n){t.value!==-1&&(n+e.$refs[`search-item-${t.value}`].clientHeight>e.$refs.search.scrollTop+e.$refs.search.clientHeight||n+e.$refs[`search-item-${t.value}`].clientHeight<=e.$refs.search.scrollTop)&&e.$refs.search.scrollTo({top:n,behavior:"smooth"})}function N(n){/^(https?:|mailto:|tel:)/.test(n)?window.open(n):e.$window.add(n)}return(n,a)=>{const p=q("el-input"),c=M;return u(),h("div",{id:"search",class:V({searching:r.value}),onClick:a[3]||(a[3]=o=>r.value&&n.$eventBus.emit("global-search-toggle"))},[s("div",J,[s("div",{class:"search-box",onClick:a[2]||(a[2]=_(()=>{},["stop"]))},[m(p,{ref:(o,l)=>{l.input=o},modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=o=>v.value=o),"prefix-icon":"el-icon-search",placeholder:"\u641C\u7D22\u9875\u9762\uFF0C\u652F\u6301\u6807\u9898\u3001URL\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:[a[1]||(a[1]=$(o=>n.$eventBus.emit("global-search-toggle"),["esc"])),$(_(g,["prevent"]),["up"]),$(_(y,["prevent"]),["down"]),$(_(b,["prevent"]),["enter"])]},null,8,["modelValue","onKeydown"]),s("div",P,[W,s("div",Z,[s("span",null,[m(c,{name:"search-up"})]),s("span",null,[m(c,{name:"search-down"})]),Q]),s("div",X,[s("span",null,[m(c,{name:"search-enter"})]),Y]),ee])]),s("div",{ref:(o,l)=>{l.search=o},class:"result"},[(u(!0),h(T,null,I(A(i),(o,l)=>(u(),h("div",{key:o.path,ref:`search-item-${l}`,class:V(["item",{actived:l===t.value}]),onClick:w=>N(o.windowName),onMouseover:w=>t.value=l},[s("div",te,[o.icon?(u(),E(c,{key:0,name:o.icon},null,8,["name"])):K("v-if",!0)]),s("div",ne,[s("div",oe,L(o.title),1),s("div",ae,[(u(!0),h(T,null,I(o.breadcrumbNeste,(w,j)=>(u(),h("span",{key:j},[d(L(w.title)+" ",1),le]))),128))])])],42,se))),128))],512)])],2)}}const ce=Object.assign(re,{setup:ie});var pe=G(ce,[["__scopeId","data-v-172208af"]]);export{pe as default};
