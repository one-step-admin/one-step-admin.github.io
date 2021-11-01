
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as $}from"./index.3ac8c786.js";import{P as j,u as B,U as E,I as d,W as P,r as _,o as A,q as F,x as e,y as a,s as l,J as q,L as i,_ as p,H as u,B as J,C as O,Z as H}from"./vendor.1e66543d.js";import{_ as L}from"./plugin-vue_export-helper.5a098b48.js";const k=v=>(J("data-v-dd6afa2e"),v=v(),O(),v),R=u("\u5BFC\u822A\u680F\u6A21\u5F0F"),W={class:"menu-mode"},Z=u("\u4FA7\u8FB9\u680F"),D={class:"setting-item"},G=k(()=>l("div",{class:"label"},"\u6298\u53E0\u6309\u94AE",-1)),K={class:"setting-item"},Q=k(()=>l("div",{class:"label"},"\u662F\u5426\u6298\u53E0",-1)),X={class:"setting-item"},Y={class:"label"},ee=u(" \u5207\u6362\u8DF3\u8F6C "),te={class:"setting-item"},ne={class:"label"},se=u(" \u4FDD\u6301\u5C55\u5F00\u4E00\u4E2A "),le=u("\u529F\u80FD\u6309\u94AE"),oe={class:"setting-item"},ae={class:"label"},ie=u(" \u5BFC\u822A\u680F\u641C\u7D22 "),de={class:"setting-item"},ue={class:"label"},ce=u(" \u5168\u5C4F "),me=u("\u5176\u5B83"),pe={class:"setting-item"},re={class:"label"},_e=u(" \u7EC4\u4EF6\u5C3A\u5BF8 "),ge={class:"setting-item"},ve=k(()=>l("div",{class:"label"},"\u5E95\u90E8\u7248\u6743",-1)),fe=j({name:"ThemeSetting"});function be(v){const{proxy:z}=H(),o=B(),f=E(!1),g=d({get:function(){return o.state.settings.menuMode},set:function(n){o.commit("menu/switchHeaderActived",0),o.commit("settings/updateThemeSetting",{menuMode:n})}}),V=d({get:function(){return o.state.settings.elementSize},set:function(n){z.$ELEMENT.size=n,o.commit("settings/updateThemeSetting",{elementSize:n})}}),S=d({get:function(){return o.state.settings.enableSidebarCollapse},set:function(n){o.commit("settings/updateThemeSetting",{enableSidebarCollapse:n})}}),C=d({get:function(){return o.state.settings.sidebarCollapse},set:function(n){o.commit("settings/updateThemeSetting",{sidebarCollapse:n})}}),w=d({get:function(){return o.state.settings.switchSidebarAndPageJump},set:function(n){o.commit("settings/updateThemeSetting",{switchSidebarAndPageJump:n})}}),y=d({get:function(){return o.state.settings.sidebarUniqueOpened},set:function(n){o.commit("settings/updateThemeSetting",{sidebarUniqueOpened:n})}}),x=d({get:function(){return o.state.settings.showCopyright},set:function(n){o.commit("settings/updateThemeSetting",{showCopyright:n})}}),T=d({get:function(){return o.state.settings.enableNavSearch},set:function(n){o.commit("settings/updateThemeSetting",{enableNavSearch:n})}}),U=d({get:function(){return o.state.settings.enableFullscreen},set:function(n){o.commit("settings/updateThemeSetting",{enableFullscreen:n})}});return P(()=>{z.$eventBus.on("global-theme-toggle",()=>{f.value=!f.value})}),(n,t)=>{const N=_("el-alert"),b=_("el-divider"),c=$,m=_("el-tooltip"),r=_("el-switch"),h=_("el-option"),I=_("el-select"),M=_("el-drawer");return A(),F("div",null,[e(M,{modelValue:f.value,"onUpdate:modelValue":t[11]||(t[11]=s=>f.value=s),title:"\u4E3B\u9898\u914D\u7F6E",direction:"rtl",size:350},{default:a(()=>[e(N,{title:"\u4E3B\u9898\u914D\u7F6E\u53EF\u5B9E\u65F6\u9884\u89C8\u6548\u679C\uFF0C\u66F4\u591A\u8BBE\u7F6E\u8BF7\u5728 src/settings.js \u4E2D\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u9690\u85CF\u4E3B\u9898\u914D\u7F6E\u529F\u80FD",type:"error",closable:!1}),e(b,null,{default:a(()=>[R]),_:1}),l("div",W,[e(m,{content:"\u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u542B\u4E3B\u5BFC\u822A\uFF09",placement:"top","show-after":500,"append-to-body":!1},{default:a(()=>[l("div",{class:q(["mode mode-side",{active:i(g)==="side"}]),onClick:t[0]||(t[0]=s=>g.value="side")},[e(c,{name:"ri-checkbox-circle-fill"})],2)]),_:1}),e(m,{content:"\u9876\u90E8\u6A21\u5F0F",placement:"top","show-after":500,"append-to-body":!1},{default:a(()=>[l("div",{class:q(["mode mode-head",{active:i(g)==="head"}]),onClick:t[1]||(t[1]=s=>g.value="head")},[e(c,{name:"ri-checkbox-circle-fill"})],2)]),_:1}),e(m,{content:"\u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u4E0D\u542B\u4E3B\u5BFC\u822A\uFF09",placement:"top","show-after":500,"append-to-body":!1},{default:a(()=>[l("div",{class:q(["mode mode-single",{active:i(g)==="single"}]),onClick:t[2]||(t[2]=s=>g.value="single")},[e(c,{name:"ri-checkbox-circle-fill"})],2)]),_:1})]),e(b,null,{default:a(()=>[Z]),_:1}),l("div",D,[G,e(r,{modelValue:i(S),"onUpdate:modelValue":t[3]||(t[3]=s=>p(S)?S.value=s:null)},null,8,["modelValue"])]),l("div",K,[Q,e(r,{modelValue:i(C),"onUpdate:modelValue":t[4]||(t[4]=s=>p(C)?C.value=s:null)},null,8,["modelValue"])]),l("div",X,[l("div",Y,[ee,e(m,{content:"\u5F00\u542F\u8BE5\u529F\u80FD\u540E\uFF0C\u5207\u6362\u4FA7\u8FB9\u680F\u65F6\uFF0C\u9875\u9762\u81EA\u52A8\u8DF3\u8F6C\u81F3\u8BE5\u4FA7\u8FB9\u680F\u5BFC\u822A\u4E0B\u7B2C\u4E00\u4E2A\u8DEF\u7531\u5730\u5740",placement:"top","append-to-body":!1},{default:a(()=>[e(c,{name:"el-icon-question"})]),_:1})]),e(r,{modelValue:i(w),"onUpdate:modelValue":t[5]||(t[5]=s=>p(w)?w.value=s:null),disabled:n.$store.state.settings.menuMode==="single"},null,8,["modelValue","disabled"])]),l("div",te,[l("div",ne,[se,e(m,{content:"\u5F00\u542F\u8BE5\u529F\u80FD\u540E\uFF0C\u4FA7\u8FB9\u680F\u53EA\u4FDD\u6301\u4E00\u4E2A\u5B50\u83DC\u5355\u7684\u5C55\u5F00",placement:"top","append-to-body":!1},{default:a(()=>[e(c,{name:"el-icon-question"})]),_:1})]),e(r,{modelValue:i(y),"onUpdate:modelValue":t[6]||(t[6]=s=>p(y)?y.value=s:null)},null,8,["modelValue"])]),e(b,null,{default:a(()=>[le]),_:1}),l("div",oe,[l("div",ae,[ie,e(m,{content:"\u5BF9\u5BFC\u822A\u680F\u8FDB\u884C\u5FEB\u6377\u641C\u7D22",placement:"top","append-to-body":!1},{default:a(()=>[e(c,{name:"el-icon-question"})]),_:1})]),e(r,{modelValue:i(T),"onUpdate:modelValue":t[7]||(t[7]=s=>p(T)?T.value=s:null)},null,8,["modelValue"])]),l("div",de,[l("div",ue,[ce,e(m,{content:"\u8BE5\u529F\u80FD\u4F7F\u7528\u573A\u666F\u6781\u5C11\uFF0C\u7528\u6237\u4E60\u60EF\u4E8E\u901A\u8FC7\u7A97\u53E3\u201C\u6700\u5927\u5316\u201D\u529F\u80FD\u6765\u6269\u5927\u663E\u793A\u533A\u57DF\uFF0C\u4EE5\u663E\u793A\u66F4\u591A\u5185\u5BB9\uFF0C\u5E76\u4E14\u4F7F\u7528 F11 \u952E\u4E5F\u53EF\u4EE5\u8FDB\u5165\u5168\u5C4F\u6548\u679C",placement:"top","append-to-body":!1},{default:a(()=>[e(c,{name:"el-icon-question"})]),_:1})]),e(r,{modelValue:i(U),"onUpdate:modelValue":t[8]||(t[8]=s=>p(U)?U.value=s:null)},null,8,["modelValue"])]),e(b,null,{default:a(()=>[me]),_:1}),l("div",pe,[l("div",re,[_e,e(m,{content:"\u5168\u5C40\u8BBE\u7F6E Element Plus \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\u5927\u5C0F",placement:"top","append-to-body":!1},{default:a(()=>[e(c,{name:"el-icon-question"})]),_:1})]),e(I,{modelValue:i(V),"onUpdate:modelValue":t[9]||(t[9]=s=>p(V)?V.value=s:null),size:"small"},{default:a(()=>[e(h,{label:"\u9ED8\u8BA4 (large)",value:"large"}),e(h,{label:"\u4E2D\u7B49 (medium)",value:"medium"}),e(h,{label:"\u5C0F (small)",value:"small"}),e(h,{label:"\u6781\u5C0F (mini)",value:"mini"})]),_:1},8,["modelValue"])]),l("div",ge,[ve,e(r,{modelValue:i(x),"onUpdate:modelValue":t[10]||(t[10]=s=>p(x)?x.value=s:null)},null,8,["modelValue"])])]),_:1},8,["modelValue"])])}}const he=Object.assign(fe,{setup:be});var we=L(he,[["__scopeId","data-v-dd6afa2e"]]);export{we as default};
