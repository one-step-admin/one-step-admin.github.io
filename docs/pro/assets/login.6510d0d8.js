
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as O,a as E}from"./index.22ea7c82.js";import{_ as X}from"./index.e7ddb757.js";import{i as Y,q as Z,S as G,T as H,r,U as J,x as c,j as Q,A as e,z as o,k as n,V as q,X as F,y as W,l as ee,p as oe,m as te,o as S,Y as v,u as ae,Z as le,_ as U,$ as u,a0 as ne,C as se}from"./vendor.f0fdd3fc.js";import{_ as re,s as w}from"./index.1c098545.js";const h=y=>(oe("data-v-0d9a95a2"),y=y(),te(),y),ue=h(()=>n("div",{class:"bg-banner"},null,-1)),ie=h(()=>n("i",{class:"ri-translate"},null,-1)),de={id:"login-box"},pe=h(()=>n("div",{class:"login-banner"},null,-1)),ce={class:"title-container"},me={class:"title"},_e={class:"flex-bar"},fe=u("\u8BB0\u4F4F\u6211"),ge=u("\u5FD8\u8BB0\u5BC6\u7801"),ve={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},we=h(()=>n("span",{style:{"margin-right":"5px"}},"\u6F14\u793A\u5E10\u53F7\u4E00\u952E\u767B\u5F55\uFF1A",-1)),he=u("admin"),ye=u("test"),be=h(()=>n("div",{class:"title-container"},[n("h3",{class:"title"},"\u91CD\u7F6E\u5BC6\u7801")],-1)),xe=Y({name:"Login"}),Ve=Object.assign(xe,{setup(y){const{proxy:b}=se(),j=Z(),I=G(),T=H(),z="One-step-admin \u4E13\u4E1A\u7248",x=r("login"),s=r({account:w.local.get("login_account"),password:"",remember:w.local.has("login_account")}),B=r({account:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],password:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}]}),i=r({account:w.local.get("login_account"),captcha:"",newPassword:""}),N=r({account:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],captcha:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],newPassword:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}]}),_=r(!1),m=r("password"),$=r(null);J(()=>{var a;$.value=(a=I.query.redirect)!=null?a:"/"});function k(){m.value=m.value==="password"?"":"password",ne(()=>{b.$refs.password.focus()})}function V(){b.$refs.loginFormRef.validate(a=>{a&&(_.value=!0,j.dispatch("user/login",s.value).then(()=>{_.value=!1,s.value.remember?w.local.set("login_account",s.value.account):w.local.remove("login_account"),T.push($.value)}).catch(()=>{_.value=!1}))})}function K(){b.$message({message:"\u91CD\u7F6E\u5BC6\u7801\u4EC5\u63D0\u4F9B\u754C\u9762\u6F14\u793A\uFF0C\u65E0\u5B9E\u9645\u529F\u80FD\uFF0C\u9700\u5F00\u53D1\u8005\u81EA\u884C\u6269\u5C55",type:"info"}),b.$refs.resetFormRef.validate(a=>{})}function C(a){s.value.account=a,s.value.password="123456",V()}return(a,t)=>{const L=O,d=X,f=c("el-input"),g=c("el-form-item"),A=c("el-checkbox"),p=c("el-button"),P=c("el-form"),R=c("el-col"),D=c("el-row"),M=E;return S(),Q("div",null,[ue,e(L,{class:"i18n-selector"},{default:o(()=>[ie]),_:1}),n("div",de,[pe,q(e(P,{ref:"loginFormRef",model:s.value,rules:B.value,class:"login-form",autocomplete:"on","label-position":"left"},{default:o(()=>[n("div",ce,[n("h3",me,v(ae(z))+"\u7BA1\u7406\u540E\u53F0",1)]),n("div",null,[e(g,{prop:"account"},{default:o(()=>[e(f,{ref:"name",modelValue:s.value.account,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value.account=l),placeholder:a.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:o(()=>[e(d,{name:"user"})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(g,{prop:"password"},{default:o(()=>[e(f,{ref:"password",modelValue:s.value.password,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.password=l),type:m.value,placeholder:a.$t("app.password"),tabindex:"2",autocomplete:"on",onKeyup:le(V,["enter"])},{prefix:o(()=>[e(d,{name:"password"})]),suffix:o(()=>[e(d,{name:m.value==="password"?"eye":"eye-open",onClick:k},null,8,["name"])]),_:1},8,["modelValue","type","placeholder","onKeyup"])]),_:1})]),n("div",_e,[e(A,{modelValue:s.value.remember,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value.remember=l)},{default:o(()=>[fe]),_:1},8,["modelValue"]),e(p,{type:"text",onClick:t[3]||(t[3]=l=>x.value="reset")},{default:o(()=>[ge]),_:1})]),e(p,{loading:_.value,type:"primary",style:{width:"100%"},onClick:U(V,["prevent"])},{default:o(()=>[u(v(a.$t("app.login")),1)]),_:1},8,["loading","onClick"]),n("div",ve,[we,e(p,{type:"danger",size:"mini",onClick:t[4]||(t[4]=l=>C("admin"))},{default:o(()=>[he]),_:1}),e(p,{type:"danger",size:"mini",plain:"",onClick:t[5]||(t[5]=l=>C("test"))},{default:o(()=>[ye]),_:1})])]),_:1},8,["model","rules"]),[[F,x.value=="login"]]),q(e(P,{ref:"resetFormRef",model:i.value,rules:N.value,class:"login-form","auto-complete":"on","label-position":"left"},{default:o(()=>[be,n("div",null,[e(g,{prop:"account"},{default:o(()=>[e(f,{ref:"name",modelValue:i.value.account,"onUpdate:modelValue":t[6]||(t[6]=l=>i.value.account=l),placeholder:a.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:o(()=>[e(d,{name:"user"})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(g,{prop:"captcha"},{default:o(()=>[e(f,{ref:"captcha",modelValue:i.value.captcha,"onUpdate:modelValue":t[7]||(t[7]=l=>i.value.captcha=l),placeholder:a.$t("app.captcha"),type:"text",tabindex:"2",autocomplete:"on"},{prefix:o(()=>[e(d,{name:"captcha"})]),append:o(()=>[e(p,null,{default:o(()=>[u(v(a.$t("app.sendCaptcha")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(g,{prop:"newPassword"},{default:o(()=>[e(f,{ref:"newPassword",modelValue:i.value.newPassword,"onUpdate:modelValue":t[8]||(t[8]=l=>i.value.newPassword=l),type:m.value,placeholder:a.$t("app.newPassword"),tabindex:"3",autocomplete:"on"},{prefix:o(()=>[e(d,{name:"password"})]),suffix:o(()=>[e(d,{name:m.value==="password"?"eye":"eye-open",onClick:k},null,8,["name"])]),_:1},8,["modelValue","type","placeholder"])]),_:1})]),e(D,{gutter:15,style:{"padding-top":"20px"}},{default:o(()=>[e(R,{md:6},{default:o(()=>[e(p,{style:{width:"100%"},onClick:t[9]||(t[9]=l=>x.value="login")},{default:o(()=>[u(v(a.$t("app.goLogin")),1)]),_:1})]),_:1}),e(R,{md:18},{default:o(()=>[e(p,{loading:_.value,type:"primary",style:{width:"100%"},onClick:U(K,["prevent"])},{default:o(()=>[u(v(a.$t("app.check")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["model","rules"]),[[F,x.value=="reset"]])]),a.$store.state.settings.showCopyright?(S(),W(M,{key:0})):ee("v-if",!0)])}}});var Re=re(Ve,[["__scopeId","data-v-0d9a95a2"]]);export{Re as default};
