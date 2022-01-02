
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as l,g as v}from"./index.1c098545.js";import{o as s,j as n,$ as _,Y as o,q as $,t as C,x as d,y as i,z as a,A as b,a1 as k,u as w,a2 as x,a3 as I,l as L,C as N}from"./vendor.f0fdd3fc.js";const j={},B={class:"copyright"},D=["href"],S={key:1},V=_(" All Rights Reserved ");function z(e,c){return s(),n("footer",B,[_(" Copyright \xA9 "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(s(),n("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,D)):(s(),n("span",S,o(e.$store.state.settings.copyrightCompany)+",",1)),V])}var q=l(j,[["render",z],["__scopeId","data-v-bc8b40c8"]]);const A={setup(e){const{proxy:c}=N(),p=$(),u=C(()=>v());function m(t){c.$i18n.locale=t,p.commit("settings/setDefaultLang",t)}return(t,E)=>{const g=d("el-dropdown-item"),f=d("el-dropdown-menu"),y=d("el-dropdown");return t.$store.state.settings.enableI18n?(s(),i(y,{key:0,class:"language-container",size:"medium",onCommand:m},{dropdown:a(()=>[b(f,null,{default:a(()=>[(s(!0),n(x,null,k(w(u),(r,h)=>(s(),i(g,{key:h,disabled:t.$store.state.settings.defaultLang===r.name,command:r.name},{default:a(()=>[_(o(r.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:a(()=>[I(t.$slots,"default",{},void 0,!0)]),_:3})):L("v-if",!0)}}};var F=l(A,[["__scopeId","data-v-44df281a"]]);export{F as _,q as a};
