
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as me}from"./index.b3fadcf3.js";import{v as j,A as q,o as i,C as _,J as g,M as N,u as K,y as pe,c as A,B as Q,U as ve,r as w,D as e,H as t,b as T,I as m,P as v,K as H,L as R,R as z,V as se,a as S,W as B,X as D,Y as oe,T as M,Z as le,w as ee,Q as ie,O as J,S as fe,N as Z,_ as L,$ as he,n as ge}from"./vendor.f5f43216.js";import{_ as U}from"./index.d1263db4.js";import{_ as be}from"./logo.d77fe55e.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as $e}from"./index.e0bf3217.js";const we=["title"],ye=["src"],ke={key:1},Se=j({name:"Logo"}),Ce=Object.assign(Se,{props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(s){const o=q("One-step-admin \u57FA\u7840\u7248"),n=q(be);return(a,c)=>(i(),_("div",{class:"title",title:o.value},[s.showLogo?(i(),_("img",{key:0,src:n.value,class:"logo"},null,8,ye)):g("v-if",!0),s.showTitle?(i(),_("span",ke,N(o.value),1)):g("v-if",!0)],8,we))}});var te=O(Ce,[["__scopeId","data-v-3a55106c"]]);const ae=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],W=(()=>{const s=ae[0],o={};for(const n of ae)if((n==null?void 0:n[1])in document){for(const[c,l]of n.entries())o[s[c]]=l;return o}return!1})(),ce={change:W.fullscreenchange,error:W.fullscreenerror};let V={request(s=document.documentElement,o){return new Promise((n,a)=>{const c=()=>{V.off("change",c),n()};V.on("change",c);const l=s[W.requestFullscreen](o);l instanceof Promise&&l.then(c).catch(a)})},exit(){return new Promise((s,o)=>{if(!V.isFullscreen){s();return}const n=()=>{V.off("change",n),s()};V.on("change",n);const a=document[W.exitFullscreen]();a instanceof Promise&&a.then(n).catch(o)})},toggle(s,o){return V.isFullscreen?V.exit():V.request(s,o)},onchange(s){V.on("change",s)},onerror(s){V.on("error",s)},on(s,o){const n=ce[s];n&&document.addEventListener(n,o,!1)},off(s,o){const n=ce[s];n&&document.removeEventListener(n,o,!1)},raw:W};Object.defineProperties(V,{isFullscreen:{get:()=>Boolean(document[W.fullscreenElement])},element:{enumerable:!0,get:()=>{var s;return(s=document[W.fullscreenElement])!=null?s:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[W.fullscreenEnabled])}});W||(V={isEnabled:!1});var Y=V;const xe=s=>(H("data-v-2480a0fa"),s=s(),R(),s),Te={class:"user"},Fe={class:"tools"},Me=xe(()=>e("span",{class:"title"},"\u67E5\u770B\u4E13\u4E1A\u7248",-1)),Oe={key:0,class:"item"},Ve={class:"user-wrapper"},qe=v("\u4E2A\u4EBA\u8BBE\u7F6E"),Ee=v("\u9000\u51FA\u767B\u5F55"),Ie=j({name:"UserMenu"}),je=Object.assign(Ie,{setup(s){const{proxy:o}=z(),n=K(),a=pe(),c=A(()=>Y.isEnabled),l=q(!1);Q(()=>{c.value&&Y.on("change",u)}),ve(()=>{c.value&&Y.off("change",u)});function r(){n.commit("settings/updateThemeSetting",{previewAllWindows:!0})}function $(){Y.toggle()}function u(){l.value=Y.isFullscreen}function C(k){switch(k){case"setting":o.$window.add({title:"\u4E2A\u4EBA\u8BBE\u7F6E",name:"PersonalSetting"});break;case"logout":n.dispatch("user/logout").then(()=>{a.push({name:"login"})});break}}function E(){window.open(`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/one-step-admin/pro`,"top")}return(k,f)=>{const d=U,p=w("el-icon-user-filled"),h=w("el-icon"),b=w("el-avatar"),F=w("el-icon-caret-bottom"),x=w("el-dropdown-item"),I=w("el-dropdown-menu"),P=w("el-dropdown");return i(),_("div",Te,[e("div",Fe,[e("span",{class:"item item-pro",onClick:E},[t(d,{name:"pro"}),Me]),k.$store.state.window.list.length>1?(i(),_("span",Oe,[t(d,{name:"toolbar-preview-windows",onClick:r})])):g("v-if",!0),k.$store.state.settings.enableNavSearch?(i(),_("span",{key:1,class:"item",onClick:f[0]||(f[0]=X=>k.$eventBus.emit("global-search-toggle"))},[t(d,{name:"search"})])):g("v-if",!0),T(c)&&k.$store.state.settings.enableFullscreen?(i(),_("span",{key:2,class:"item",onClick:$},[t(d,{name:l.value?"fullscreen-exit":"fullscreen"},null,8,["name"])])):g("v-if",!0),k.$store.state.settings.enableThemeSetting?(i(),_("span",{key:3,class:"item",onClick:f[1]||(f[1]=X=>k.$eventBus.emit("global-theme-toggle"))},[t(d,{name:"toolbar-theme"})])):g("v-if",!0)]),t(P,{class:"user-container",onCommand:C},{dropdown:m(()=>[t(I,{class:"user-dropdown"},{default:m(()=>[t(x,{command:"setting"},{default:m(()=>[qe]),_:1}),t(x,{divided:"",command:"logout"},{default:m(()=>[Ee]),_:1})]),_:1})]),default:m(()=>[e("div",Ve,[t(b,{size:"medium"},{default:m(()=>[t(h,null,{default:m(()=>[t(p)]),_:1})]),_:1}),v(" "+N(k.$store.state.user.account)+" ",1),t(h,null,{default:m(()=>[t(F)]),_:1})])]),_:1})])}}});var re=O(je,[["__scopeId","data-v-2480a0fa"]]);const Ae={key:0},Ne={class:"header-container"},Be={class:"main"},Ue={class:"nav"},We=["onClick"],Le={key:1},ze=j({name:"Header"}),De=Object.assign(ze,{setup(s){const o=se("switchMenu");return(n,a)=>{const c=U;return i(),S(oe,{name:"header"},{default:m(()=>[n.$store.state.settings.menuMode==="head"?(i(),_("header",Ae,[e("div",Ne,[e("div",Be,[t(te),g(" \u9876\u90E8\u6A21\u5F0F "),e("div",Ue,[(i(!0),_(B,null,D(n.$store.getters["menu/menus"],(l,r)=>(i(),_(B,{key:r},[l.children&&l.children.length!==0?(i(),_("div",{key:0,class:M(["item",{active:r==n.$store.state.menu.headerActived}]),onClick:$=>T(o)(r)},[l.icon?(i(),S(c,{key:0,name:l.icon},null,8,["name"])):g("v-if",!0),l.title?(i(),_("span",Le,N(l.title),1)):g("v-if",!0)],10,We)):g("v-if",!0)],64))),128))])]),t(re)])])):g("v-if",!0)]),_:1})}}});var Pe=O(De,[["__scopeId","data-v-7b888286"]]);const He={key:0,class:"main-sidebar-container"},Re={class:"nav"},Je=["title","onClick"],Ke=j({name:"MainSidebar"}),Qe=Object.assign(Ke,{setup(s){const o=se("switchMenu");return(n,a)=>{const c=U;return i(),S(oe,{name:"main-sidebar"},{default:m(()=>[n.$store.state.settings.menuMode==="side"?(i(),_("div",He,[t(te,{"show-title":!1,class:"sidebar-logo"}),g(" \u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u542B\u4E3B\u5BFC\u822A\uFF09 "),e("div",Re,[(i(!0),_(B,null,D(n.$store.getters["menu/menus"],(l,r)=>(i(),_(B,null,[l.children&&l.children.length!==0?(i(),_("div",{key:r,class:M({item:!0,active:r===n.$store.state.menu.headerActived}),title:l.title,onClick:$=>T(o)(r)},[l.icon?(i(),S(c,{key:0,name:l.icon},null,8,["name"])):g("v-if",!0),e("span",null,N(l.title),1)],10,Je)):g("v-if",!0)],64))),256))])])):g("v-if",!0)]),_:1})}}});var Ye=O(Qe,[["__scopeId","data-v-0cdafc84"]]);const Ge={class:"sidebar-item"},Ze={class:"title"},Xe={class:"title"},et=j({name:"SidebarItem"}),tt=Object.assign(et,{props:{item:{type:Object,required:!0}},setup(s){const{proxy:o}=z();function n(a){/^(https?:|mailto:|tel:)/.test(a)?window.open(a):o.$window.add(a)}return(a,c)=>{const l=U,r=w("el-menu-item"),$=w("el-sub-menu");return i(),_("div",Ge,[s.item.children?(i(),S($,{key:1,title:s.item.title,index:JSON.stringify(s.item)},{title:m(()=>[s.item.icon?(i(),S(l,{key:0,name:s.item.icon},null,8,["name"])):g("v-if",!0),e("span",Xe,N(s.item.title),1)]),default:m(()=>[(i(!0),_(B,null,D(s.item.children,u=>(i(),S(de,{key:u.path,item:u},null,8,["item"]))),128))]),_:1},8,["title","index"])):(i(),S(r,{key:0,title:s.item.title,index:JSON.stringify(s.item),onClick:c[0]||(c[0]=u=>n(s.item.windowName))},{default:m(()=>[s.item.icon?(i(),S(l,{key:0,name:s.item.icon},null,8,["name"])):g("v-if",!0),e("span",Ze,N(s.item.title),1)]),_:1},8,["title","index"]))])}}});var de=O(tt,[["__scopeId","data-v-4232489c"]]);const nt=j({name:"SubSidebar"}),st=Object.assign(nt,{setup(s){const o=q(0);function n(a){o.value=a.target.scrollTop}return(a,c)=>{const l=w("el-menu");return["side","head","single"].includes(a.$store.state.settings.menuMode)?(i(),_("div",{key:0,class:M(["sub-sidebar-container",{"is-collapse":a.$store.state.settings.sidebarCollapse}]),onScroll:n},[t(te,{"show-logo":a.$store.state.settings.menuMode==="single",class:M({"sidebar-logo":!0,"sidebar-logo-bg":a.$store.state.settings.menuMode==="single",shadow:o.value})},null,8,["show-logo","class"]),g(" \u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u65E0\u4E3B\u5BFC\u822A\uFF09\u6216\u4FA7\u8FB9\u680F\u7CBE\u7B80\u6A21\u5F0F "),t(l,{"unique-opened":a.$store.state.settings.sidebarUniqueOpened,collapse:a.$store.state.settings.sidebarCollapse,"collapse-transition":!1,class:M({"is-collapse-without-logo":a.$store.state.settings.menuMode!=="single"&&a.$store.state.settings.sidebarCollapse})},{default:m(()=>[t(le,{name:"sub-sidebar"},{default:m(()=>[(i(!0),_(B,null,D(a.$store.getters["menu/sidebarMenus"],r=>(i(),S(de,{key:JSON.stringify(r),item:r},null,8,["item"]))),128))]),_:1})]),_:1},8,["unique-opened","collapse","class"])],34)):g("v-if",!0)}}});var ot=O(st,[["__scopeId","data-v-bfe4794c"]]);const lt={class:"topbar-container","data-fixed-calc-width":""},it={class:"left-box"},at=j({name:"Topbar"}),ct=Object.assign(at,{setup(s){return(o,n)=>{const a=U;return i(),_("div",lt,[e("div",it,[["side","head","single"].includes(o.$store.state.settings.menuMode)&&o.$store.state.settings.enableSidebarCollapse?(i(),_("div",{key:0,class:M(["sidebar-collapse",{"is-collapse":o.$store.state.settings.sidebarCollapse}]),onClick:n[0]||(n[0]=c=>o.$store.commit("settings/toggleSidebarCollapse"))},[t(a,{name:"toolbar-collapse"})],2)):g("v-if",!0)]),t(re)])}}});var rt=O(ct,[["__scopeId","data-v-67b383d3"]]);const dt=s=>(H("data-v-9e44f3be"),s=s(),R(),s),ut={class:"empty-container"},_t=dt(()=>e("div",{style:{"margin-bottom":"5px"}},[v("\u8FD9\u662F\u4E00\u6B3E"),e("b",{class:"text-emphasis"},"\u5E72\u5565\u90FD\u5FEB\u4EBA\u4E00\u6B65"),v("\u7684\u4E2D\u540E\u53F0\u6846\u67B6\uFF0C\u5B83\u62E5\u6709"),e("b",null,"\u5168\u65B0\u7684\u4EA4\u4E92\u65B9\u5F0F"),v("\uFF0C\u53EA\u4E3A"),e("b",null,"\u63D0\u5347\u64CD\u4F5C\u6548\u7387"),v("\u800C\u751F\u3002")],-1)),mt=v("\u5982\u679C\u4F60\u53EA\u662F\u9700\u8981\u4E00\u6B3E\u901A\u7528\u7684\u4E2D\u540E\u53F0\u6846\u67B6\uFF0C\u53EF\u4EE5\u4E86\u89E3\u4E0B "),pt=["href"],vt=v(" \uFF0C\u5B83\u540C\u6837\u662F\u4E00\u6B3E\u975E\u5E38\u4F18\u79C0\u4E14\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u540E\u53F0\u6846\u67B6\u3002"),ft={setup(s){const o=q(location.href);return(n,a)=>{const c=$e;return i(),_("div",ut,[t(c,{title:"\u6B22\u8FCE\u4F7F\u7528 One-step-admin\uFF08\u57FA\u7840\u7248\uFF09",class:"header"},{content:m(()=>[e("div",null,[_t,e("div",null,[mt,e("a",{href:`https://hooray.${o.value.includes("gitee")?"gitee":"github"}.io/fantastic-admin`,target:"_blank"},"Fantastic-admin",8,pt),vt])])]),_:1})])}}};var ht=O(ft,[["__scopeId","data-v-9e44f3be"]]);const gt=s=>(H("data-v-b190dde0"),s=s(),R(),s),bt={class:"preview-all-mode"},$t=gt(()=>e("div",{class:"title"},"\u9884\u89C8",-1)),wt=["onDblclick"],yt={class:"titles"},kt={class:"title"},St=["onClick"],Ct={class:"container"},xt=["onClick"],Tt=j({name:"Dashboard"}),Ft=Object.assign(Tt,{setup(s){const{proxy:o}=z(),n=K();o.$eventBus.on("scrollToWindow",u=>l(u));const a=q(0);ee(()=>n.state.settings.previewAllWindows,u=>{u&&(a.value=o.$refs.windows.scrollLeft)}),Q(()=>{o.$hotkeys("alt+w",u=>{n.state.window.list.length>1&&(u.preventDefault(),n.state.settings.previewAllWindows?r():n.commit("settings/updateThemeSetting",{previewAllWindows:!0}))})});function c(u){ie(()=>{o.$refs.windows.scroll(u,0)})}function l(u){ie(()=>{const C=o.$refs[`window-${u}`].offsetLeft;o.$refs.windows.scrollTo({left:C,behavior:"smooth"})})}function r(){n.state.settings.previewAllWindows&&(n.commit("settings/updateThemeSetting",{previewAllWindows:!1}),c(a.value))}function $(u){r(),setTimeout(()=>{l(u)},0)}return(u,C)=>{const E=U,k=w("el-tooltip"),f=w("el-icon-close-bold"),d=w("el-icon"),p=w("el-scrollbar");return i(),_("div",{ref:"windows",class:M(["dashboard",{"preview-all":u.$store.state.settings.previewAllWindows}]),onClick:r},[e("div",bt,[$t,t(k,{content:"\u53EF\u4EE5\u901A\u8FC7\u5FEB\u6377\u952E Alt + W \u5FEB\u901F\u8FDB\u5165\u7A97\u53E3\u9884\u89C8\u754C\u9762",placement:"left","append-to-body":!1},{default:m(()=>[t(E,{name:"el-icon-question",class:"help"})]),_:1})]),u.$store.state.window.list.length>0?(i(),S(le,{key:0,name:"window",tag:"div",class:"dashboard-container"},{default:m(()=>[(i(!0),_(B,null,D(u.$store.state.window.list,h=>(i(),_("div",{key:h.name,ref_for:!0,ref:`window-${h.name}`,class:"window",onClick:C[1]||(C[1]=J(()=>{},["stop"]))},[e("div",{class:M(["window-container",{preview:u.$store.state.settings.previewAllWindows}])},[e("div",{class:"header",onDblclick:b=>l(h.name)},[e("div",yt,[h.title?(i(),S(k,{key:0,effect:"dark",content:h.breadcrumbNeste.map(b=>b.title).join(" / "),placement:"bottom-start","show-after":500,disabled:h.breadcrumbNeste.map(b=>b.title).length==0},{default:m(()=>[e("span",kt,N(h.title),1)]),_:2},1032,["content","disabled"])):g("v-if",!0)]),e("div",{class:"btns",onDblclick:C[0]||(C[0]=J(()=>{},["stop"]))},[e("div",{class:"btn",onClick:b=>u.$window.remove(h.name)},[t(d,null,{default:m(()=>[t(f)]),_:1})],8,St)],32)],40,wt),e("div",Ct,[t(p,null,{default:m(()=>[h.reload?g("v-if",!0):(i(),S(fe(h.name),{key:0,params:h.params},null,8,["params"]))]),_:2},1024)]),e("div",{class:"mask",onClick:b=>$(h.name)},null,8,xt)],2)]))),128))]),_:1})):(i(),S(ht,{key:1}))],2)}}});var Mt=O(Ft,[["__scopeId","data-v-b190dde0"]]);const ue=s=>(H("data-v-2ebc5f89"),s=s(),R(),s),Ot={class:"container"},Vt={class:"tips"},qt=ue(()=>e("div",{class:"tip"},[e("span",null,"Alt"),v("+"),e("span",null,"S"),v(" \u5524\u9192\u641C\u7D22\u9762\u677F ")],-1)),Et={class:"tip"},It=v(" \u5207\u6362\u641C\u7D22\u7ED3\u679C "),jt={class:"tip"},At=v(" \u8BBF\u95EE\u9875\u9762 "),Nt=ue(()=>e("div",{class:"tip"},[e("span",null,"ESC"),v(" \u9000\u51FA ")],-1)),Bt={ref:"search",class:"result"},Ut=["onClick","onMouseover"],Wt={class:"icon"},Lt={class:"info"},zt={class:"title"},Dt={class:"breadcrumb"},Pt=j({name:"Search"}),Ht=Object.assign(Pt,{setup(s){const{proxy:o}=z(),n=K(),a=q(!1),c=q(""),l=q(-1),r=A(()=>{let f=[];return f=Object.values(n.getters["menu/flatMenu"]).filter(d=>{let p=!1;return d.title.indexOf(c.value)>=0&&(p=!0),d.breadcrumbNeste.some(h=>h.title.indexOf(c.value)>=0)&&(p=!0),p}),f});ee(()=>a.value,f=>{f?(document.querySelector("body").classList.add("hidden"),o.$refs.search.scrollTop=0,o.$hotkeys("up",$),o.$hotkeys("down",u),o.$hotkeys("enter",C),setTimeout(()=>{o.$refs.input.$el.children[0].focus()},100)):(document.querySelector("body").classList.remove("hidden"),o.$hotkeys.unbind("up",$),o.$hotkeys.unbind("down",u),o.$hotkeys.unbind("enter",C),setTimeout(()=>{c.value="",l.value=-1},500))}),ee(()=>r.value,()=>{l.value=-1,E(0)}),Q(()=>{o.$eventBus.on("global-search-toggle",()=>{a.value=!a.value}),o.$hotkeys("alt+s",f=>{n.state.settings.enableNavSearch&&(f.preventDefault(),a.value=!0)})});function $(){r.value.length&&(l.value-=1,l.value<0&&(l.value=r.value.length-1),E(o.$refs[`search-item-${l.value}`].offsetTop))}function u(){r.value.length&&(l.value+=1,l.value>r.value.length-1&&(l.value=0),E(o.$refs[`search-item-${l.value}`].offsetTop))}function C(){l.value!==-1&&o.$refs[`search-item-${l.value}`].click()}function E(f){l.value!==-1&&(f+o.$refs[`search-item-${l.value}`].clientHeight>o.$refs.search.scrollTop+o.$refs.search.clientHeight||f+o.$refs[`search-item-${l.value}`].clientHeight<=o.$refs.search.scrollTop)&&o.$refs.search.scrollTo({top:f,behavior:"smooth"})}function k(f){/^(https?:|mailto:|tel:)/.test(f)?window.open(f):o.$window.add(f)}return(f,d)=>{const p=w("el-input"),h=U;return i(),_("div",{id:"search",class:M({searching:a.value}),onClick:d[3]||(d[3]=b=>a.value&&f.$eventBus.emit("global-search-toggle"))},[e("div",Ot,[e("div",{class:"search-box",onClick:d[2]||(d[2]=J(()=>{},["stop"]))},[t(p,{ref:"input",modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=b=>c.value=b),"prefix-icon":"el-icon-search",placeholder:"\u641C\u7D22\u9875\u9762\uFF0C\u652F\u6301\u6807\u9898\u3001URL\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:[d[1]||(d[1]=Z(b=>f.$eventBus.emit("global-search-toggle"),["esc"])),Z(J($,["prevent"]),["up"]),Z(J(u,["prevent"]),["down"]),Z(J(C,["prevent"]),["enter"])]},null,8,["modelValue","onKeydown"]),e("div",Vt,[qt,e("div",Et,[e("span",null,[t(h,{name:"search-up"})]),e("span",null,[t(h,{name:"search-down"})]),It]),e("div",jt,[e("span",null,[t(h,{name:"search-enter"})]),At]),Nt])]),e("div",Bt,[(i(!0),_(B,null,D(T(r),(b,F)=>(i(),_("div",{key:b.path,ref_for:!0,ref:`search-item-${F}`,class:M(["item",{actived:F===l.value}]),onClick:x=>k(b.windowName),onMouseover:x=>l.value=F},[e("div",Wt,[b.icon?(i(),S(h,{key:0,name:b.icon},null,8,["name"])):g("v-if",!0)]),e("div",Lt,[e("div",zt,N(b.title),1),e("div",Dt,[(i(!0),_(B,null,D(b.breadcrumbNeste,(x,I)=>(i(),_("span",{key:I},[v(N(x.title)+" ",1),t(h,{name:"el-icon-arrow-right"})]))),128))])])],42,Ut))),128))],512)])],2)}}});var Rt=O(Ht,[["__scopeId","data-v-2ebc5f89"]]);const ne=s=>(H("data-v-801fb5ae"),s=s(),R(),s),Jt=v("\u5BFC\u822A\u680F\u6A21\u5F0F"),Kt={class:"menu-mode"},Qt=v("\u4FA7\u8FB9\u680F"),Yt={class:"setting-item"},Gt=ne(()=>e("div",{class:"label"},"\u6298\u53E0\u6309\u94AE",-1)),Zt={class:"setting-item"},Xt=ne(()=>e("div",{class:"label"},"\u662F\u5426\u6298\u53E0",-1)),en={class:"setting-item"},tn={class:"label"},nn=v(" \u5207\u6362\u8DF3\u8F6C "),sn={class:"setting-item"},on={class:"label"},ln=v(" \u4FDD\u6301\u5C55\u5F00\u4E00\u4E2A "),an=v("\u529F\u80FD\u6309\u94AE"),cn={class:"setting-item"},rn={class:"label"},dn=v(" \u5BFC\u822A\u680F\u641C\u7D22 "),un={class:"setting-item"},_n={class:"label"},mn=v(" \u5168\u5C4F "),pn=v("\u5176\u5B83"),vn={class:"setting-item"},fn={class:"label"},hn=v(" \u7EC4\u4EF6\u5C3A\u5BF8 "),gn={class:"setting-item"},bn=ne(()=>e("div",{class:"label"},"\u5E95\u90E8\u7248\u6743",-1)),$n=j({name:"ThemeSetting"}),wn=Object.assign($n,{setup(s){const{proxy:o}=z(),n=K(),a=q(!1),c=A({get:function(){return n.state.settings.menuMode},set:function(d){n.commit("menu/switchHeaderActived",0),n.commit("settings/updateThemeSetting",{menuMode:d})}}),l=A({get:function(){return n.state.settings.elementSize},set:function(d){o.$ELEMENT.size=d,n.commit("settings/updateThemeSetting",{elementSize:d})}}),r=A({get:function(){return n.state.settings.enableSidebarCollapse},set:function(d){n.commit("settings/updateThemeSetting",{enableSidebarCollapse:d})}}),$=A({get:function(){return n.state.settings.sidebarCollapse},set:function(d){n.commit("settings/updateThemeSetting",{sidebarCollapse:d})}}),u=A({get:function(){return n.state.settings.switchSidebarAndOpenWindow},set:function(d){n.commit("settings/updateThemeSetting",{switchSidebarAndOpenWindow:d})}}),C=A({get:function(){return n.state.settings.sidebarUniqueOpened},set:function(d){n.commit("settings/updateThemeSetting",{sidebarUniqueOpened:d})}}),E=A({get:function(){return n.state.settings.showCopyright},set:function(d){n.commit("settings/updateThemeSetting",{showCopyright:d})}}),k=A({get:function(){return n.state.settings.enableNavSearch},set:function(d){n.commit("settings/updateThemeSetting",{enableNavSearch:d})}}),f=A({get:function(){return n.state.settings.enableFullscreen},set:function(d){n.commit("settings/updateThemeSetting",{enableFullscreen:d})}});return Q(()=>{o.$eventBus.on("global-theme-toggle",()=>{a.value=!a.value})}),(d,p)=>{const h=w("el-alert"),b=w("el-divider"),F=U,x=w("el-tooltip"),I=w("el-switch"),P=w("el-option"),X=w("el-select"),_e=w("el-drawer");return i(),_("div",null,[t(_e,{modelValue:a.value,"onUpdate:modelValue":p[11]||(p[11]=y=>a.value=y),title:"\u4E3B\u9898\u914D\u7F6E",direction:"rtl",size:350},{default:m(()=>[t(h,{title:"\u4E3B\u9898\u914D\u7F6E\u53EF\u5B9E\u65F6\u9884\u89C8\u6548\u679C\uFF0C\u66F4\u591A\u8BBE\u7F6E\u8BF7\u5728 src/settings.js \u4E2D\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u9690\u85CF\u4E3B\u9898\u914D\u7F6E\u529F\u80FD",type:"error",closable:!1}),t(b,null,{default:m(()=>[Jt]),_:1}),e("div",Kt,[t(x,{content:"\u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u542B\u4E3B\u5BFC\u822A\uFF09",placement:"top","show-after":500,"append-to-body":!1},{default:m(()=>[e("div",{class:M(["mode mode-side",{active:T(c)==="side"}]),onClick:p[0]||(p[0]=y=>c.value="side")},[t(F,{name:"ri-checkbox-circle-fill"})],2)]),_:1}),t(x,{content:"\u9876\u90E8\u6A21\u5F0F",placement:"top","show-after":500,"append-to-body":!1},{default:m(()=>[e("div",{class:M(["mode mode-head",{active:T(c)==="head"}]),onClick:p[1]||(p[1]=y=>c.value="head")},[t(F,{name:"ri-checkbox-circle-fill"})],2)]),_:1}),t(x,{content:"\u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u4E0D\u542B\u4E3B\u5BFC\u822A\uFF09",placement:"top","show-after":500,"append-to-body":!1},{default:m(()=>[e("div",{class:M(["mode mode-single",{active:T(c)==="single"}]),onClick:p[2]||(p[2]=y=>c.value="single")},[t(F,{name:"ri-checkbox-circle-fill"})],2)]),_:1})]),t(b,null,{default:m(()=>[Qt]),_:1}),e("div",Yt,[Gt,t(I,{modelValue:T(r),"onUpdate:modelValue":p[3]||(p[3]=y=>L(r)?r.value=y:null)},null,8,["modelValue"])]),e("div",Zt,[Xt,t(I,{modelValue:T($),"onUpdate:modelValue":p[4]||(p[4]=y=>L($)?$.value=y:null)},null,8,["modelValue"])]),e("div",en,[e("div",tn,[nn,t(x,{content:"\u5F00\u542F\u8BE5\u529F\u80FD\u540E\uFF0C\u5207\u6362\u4FA7\u8FB9\u680F\u65F6\uFF0C\u9875\u9762\u81EA\u52A8\u8DF3\u8F6C\u81F3\u8BE5\u4FA7\u8FB9\u680F\u5BFC\u822A\u4E0B\u7B2C\u4E00\u4E2A\u8DEF\u7531\u5730\u5740",placement:"top","append-to-body":!1},{default:m(()=>[t(F,{name:"el-icon-question"})]),_:1})]),t(I,{modelValue:T(u),"onUpdate:modelValue":p[5]||(p[5]=y=>L(u)?u.value=y:null),disabled:d.$store.state.settings.menuMode==="single"},null,8,["modelValue","disabled"])]),e("div",sn,[e("div",on,[ln,t(x,{content:"\u5F00\u542F\u8BE5\u529F\u80FD\u540E\uFF0C\u4FA7\u8FB9\u680F\u53EA\u4FDD\u6301\u4E00\u4E2A\u5B50\u83DC\u5355\u7684\u5C55\u5F00",placement:"top","append-to-body":!1},{default:m(()=>[t(F,{name:"el-icon-question"})]),_:1})]),t(I,{modelValue:T(C),"onUpdate:modelValue":p[6]||(p[6]=y=>L(C)?C.value=y:null)},null,8,["modelValue"])]),t(b,null,{default:m(()=>[an]),_:1}),e("div",cn,[e("div",rn,[dn,t(x,{content:"\u5BF9\u5BFC\u822A\u680F\u8FDB\u884C\u5FEB\u6377\u641C\u7D22",placement:"top","append-to-body":!1},{default:m(()=>[t(F,{name:"el-icon-question"})]),_:1})]),t(I,{modelValue:T(k),"onUpdate:modelValue":p[7]||(p[7]=y=>L(k)?k.value=y:null)},null,8,["modelValue"])]),e("div",un,[e("div",_n,[mn,t(x,{content:"\u8BE5\u529F\u80FD\u4F7F\u7528\u573A\u666F\u6781\u5C11\uFF0C\u7528\u6237\u4E60\u60EF\u4E8E\u901A\u8FC7\u7A97\u53E3\u201C\u6700\u5927\u5316\u201D\u529F\u80FD\u6765\u6269\u5927\u663E\u793A\u533A\u57DF\uFF0C\u4EE5\u663E\u793A\u66F4\u591A\u5185\u5BB9\uFF0C\u5E76\u4E14\u4F7F\u7528 F11 \u952E\u4E5F\u53EF\u4EE5\u8FDB\u5165\u5168\u5C4F\u6548\u679C",placement:"top","append-to-body":!1},{default:m(()=>[t(F,{name:"el-icon-question"})]),_:1})]),t(I,{modelValue:T(f),"onUpdate:modelValue":p[8]||(p[8]=y=>L(f)?f.value=y:null)},null,8,["modelValue"])]),t(b,null,{default:m(()=>[pn]),_:1}),e("div",vn,[e("div",fn,[hn,t(x,{content:"\u5168\u5C40\u8BBE\u7F6E Element Plus \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\u5927\u5C0F",placement:"top","append-to-body":!1},{default:m(()=>[t(F,{name:"el-icon-question"})]),_:1})]),t(X,{modelValue:T(l),"onUpdate:modelValue":p[9]||(p[9]=y=>L(l)?l.value=y:null),size:"small"},{default:m(()=>[t(P,{label:"\u9ED8\u8BA4 (large)",value:"large"}),t(P,{label:"\u4E2D\u7B49 (medium)",value:"medium"}),t(P,{label:"\u5C0F (small)",value:"small"}),t(P,{label:"\u6781\u5C0F (mini)",value:"mini"})]),_:1},8,["modelValue"])]),e("div",gn,[bn,t(I,{modelValue:T(E),"onUpdate:modelValue":p[10]||(p[10]=y=>L(E)?E.value=y:null)},null,8,["modelValue"])])]),_:1},8,["modelValue"])])}}});var yn=O(wn,[["__scopeId","data-v-801fb5ae"]]);const G=s=>(H("data-v-7a194e3c"),s=s(),R(),s),kn=G(()=>e("span",{class:"title"},[v("\u5728\u7EBF"),e("br"),v("\u54A8\u8BE2")],-1)),Sn=G(()=>e("span",{class:"title"},[v("\u52A0\u5165"),e("br"),v("QQ\u7FA4")],-1)),Cn=G(()=>e("span",{class:"title"},[v("\u8D2D\u4E70"),e("br"),v("\u4E13\u4E1A\u7248")],-1)),xn=G(()=>e("span",{class:"title"},[v("\u5F00\u53D1"),e("br"),v("\u6587\u6863")],-1)),Tn=G(()=>e("span",{class:"title"},[v("\u4E0B\u8F7D"),e("br"),v("\u57FA\u7840\u7248")],-1)),Fn=j({name:"BuyIt"}),Mn=Object.assign(Fn,{setup(s){const{proxy:o}=z(),n=q(location.href),a=q(!0);setTimeout(()=>{a.value=!1},5e3),Q(()=>{o.$notify({type:"success",title:"\u6E29\u99A8\u63D0\u793A",dangerouslyUseHTMLString:!0,message:`
                <p>\u5F53\u524D\u8BBF\u95EE\u7684\u662F<b>\u57FA\u7840\u7248</b></p>
                <p>\u4F60\u53EF\u4EE5\u70B9<a href="https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/one-step-admin/pro/" target="_blank"><b>\u8FD9\u91CC</b></a>\u8BBF\u95EE\u4E13\u4E1A\u7248</p>
            `,position:"bottom-right",duration:5e3})});function c(l){window.open(l,"top")}return(l,r)=>{const $=U;return i(),_("div",{class:M(["buy-it",{actived:a.value}])},[e("div",{class:"item",onClick:r[0]||(r[0]=u=>c("https://wpa.qq.com/msgrd?v=3&uin=304327508&site=qq&menu=yes"))},[t($,{name:"fixed-right-qq"}),kn]),e("div",{class:"item chat",onClick:r[1]||(r[1]=u=>c("https://qm.qq.com/cgi-bin/qm/qr?k=WoDBYN0S9r94f9oBZkxlGbiYxu3dEzgt&jump_from=webapi"))},[t($,{name:"fixed-right-chat"}),Sn]),e("div",{class:"item buy",onClick:r[2]||(r[2]=u=>c(`https://hooray.${n.value.includes("gitee")?"gitee":"github"}.io/one-step-admin/buy.html`))},[t($,{name:"fixed-right-buy"}),Cn]),e("div",{class:"item doc",onClick:r[3]||(r[3]=u=>c(`https://hooray.${n.value.includes("gitee")?"gitee":"github"}.io/one-step-admin/`))},[t($,{name:"fixed-right-doc"}),xn]),e("div",{class:"item code",onClick:r[4]||(r[4]=u=>c(`https://${n.value.includes("gitee")?"gitee":"github"}.com/hooray/one-step-admin/`))},[t($,{name:"fixed-right-code"}),Tn])],2)}}});var On=O(Mn,[["__scopeId","data-v-7a194e3c"]]);const Vn={class:"layout"},qn={id:"app-main"},En={class:"wrapper"},In={class:"sidebar-container"},jn={class:"main"},An={setup(s){const{proxy:o}=z(),n=K();he("switchMenu",a);function a(l){if(n.commit("menu/switchHeaderActived",l),n.state.settings.switchSidebarAndOpenWindow){const r=c(n.getters["menu/sidebarMenus"][0]);/^(https?:|mailto:|tel:)/.test(r)?window.open(r):o.$window.add(r)}}function c(l){return l.children?c(l.children[0]):l.windowName}return(l,r)=>{const $=me,u=w("el-backtop");return i(),_("div",Vn,[e("div",qn,[t(Pe),e("div",En,[e("div",In,[t(Ye),t(ot)]),e("div",{class:"main-container",style:ge({"padding-bottom":l.$route.meta.paddingBottom})},[l.$store.state.settings.menuMode==="head"&&!l.$store.state.settings.enableSidebarCollapse?g("v-if",!0):(i(),S(rt,{key:0})),e("div",jn,[t(Mt)]),l.$store.state.settings.showCopyright?(i(),S($,{key:1})):g("v-if",!0)],4)]),t(u,{right:20,bottom:20,title:"\u56DE\u5230\u9876\u90E8"})]),t(Rt),t(yn),t(On)])}}};var Dn=O(An,[["__scopeId","data-v-5573a3aa"]]);export{Dn as default};
