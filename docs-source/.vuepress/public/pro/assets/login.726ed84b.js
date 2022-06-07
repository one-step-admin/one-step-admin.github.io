
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e,a}from"./index.aa5311fb.js";import{_ as l,d as o,u as r,a as s,v as t,r as i,s as n,o as u,E as d,c as p,b as c,w as m,e as f,f as v,g,h as _,i as b,j as w,p as x,k as h,l as y,m as k,n as V,t as j,q as C,x as P,y as q,z as U,A as E,B as R}from"./index.0a5e3bc2.js";import{E as z,a as F}from"./el-form.baa50cfd.js";import{E as $}from"./el-divider.fcf83d94.js";import{E as L}from"./el-button.2fada245.js";import{E as I}from"./el-link.080e9c24.js";import{E as K}from"./el-checkbox.b123cdbb.js";import"./el-form-item.e866842d.js";import{E as O}from"./el-input.3dbe719d.js";/* empty css                */import{_ as A}from"./index.5fef9d7d.js";import"./el-dropdown-item.389ff654.js";import"./el-popper.807071fe.js";import"./index2.f37a6952.js";import"./focus-trap2.8b38c312.js";import"./event2.3b438cf1.js";import"./index2.fa2fe4ab.js";import"./index2.5834ab0d.js";import"./error2.1d524120.js";import"./arrow-down.2c5054c4.js";import"./refs2.9c081471.js";import"./isEqual.e1bd83ff.js";import"./index2.2a4e9295.js";import"./event2.27558ffe.js";import"./typescript2.7477ece2.js";import"./index2.0c75c32d.js";import"./isNil.aac33454.js";const B=e=>(x("data-v-6de0a54e"),e=e(),h(),e),N=B((()=>f("div",{class:"bg-banner"},null,-1))),D={id:"login-box"},G={class:"login-banner"},H=B((()=>f("div",{class:"logo"},null,-1))),J=["src"],M={class:"title-container"},Q={class:"title"},S={class:"flex-bar"},T=q("记住我"),W=q("忘记密码了?"),X={class:"sub-link"},Y=B((()=>f("span",{class:"text"},"还没有帐号?",-1))),Z=q("创建新帐号"),ee={style:{"margin-top":"20px","margin-bottom":"-20px","text-align":"center"}},ae=q("演示账号一键登录"),le=q("admin"),oe=q("test"),re=B((()=>f("div",{class:"title-container"},[f("h3",{class:"title"},"探索从这里开始! 🚀")],-1))),se=q("发送验证码"),te=q("注册"),ie={class:"sub-link"},ne=B((()=>f("span",{class:"text"},"已经有帐号?",-1))),ue=q("去登录"),de=B((()=>f("div",{class:"title-container"},[f("h3",{class:"title"},"忘记密码了? 🔒")],-1))),pe={class:"sub-link"},ce=o({name:"Login"});var me=l(Object.assign(ce,{setup(l){const{proxy:o}=R(),x=y(),h=k(),B=r(),ce=s(),{t:me}=t.exports.useI18n(),fe=new URL("./assets/login-banner.c39180d1.png",self.location).href,ve=i("login"),ge=i({account:n.local.get("login_account"),password:"",remember:n.local.has("login_account")}),_e=i({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function be(){o.$refs.loginFormRef.validate((e=>{e&&(je.value=!0,ce.login(ge.value).then((()=>{je.value=!1,ge.value.remember?n.local.set("login_account",ge.value.account):n.local.remove("login_account"),h.push(Pe.value)})).catch((()=>{je.value=!1})))}))}const we=i({account:"",captcha:"",password:"",checkPassword:""}),xe=i({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkPassword:[{required:!0,trigger:"blur",message:"请再次输入密码"},{validator:(e,a,l)=>{a!==we.password?l(new Error("两次输入的密码不一致")):l()}}]});function he(){U({message:"注册模块仅提供界面演示，无实际功能，需开发者自行扩展",type:"warning"}),o.$refs.registerFormRef.validate((e=>{}))}const ye=i({account:n.local.get("login_account"),captcha:"",newPassword:""}),ke=i({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function Ve(){U({message:"重置密码仅提供界面演示，无实际功能，需开发者自行扩展",type:"info"}),o.$refs.resetFormRef.validate((e=>{}))}const je=i(!1),Ce=i("password"),Pe=i(null);function qe(){Ce.value="password"===Ce.value?"":"password",E((()=>{o.$refs.password.focus()}))}function Ue(e){ge.value.account=e,ge.value.password="123456",be()}return u((()=>{var e;Pe.value=null!=(e=x.query.redirect)?e:"/"})),(l,o)=>{const r=A,s=d,t=e,i=O,n=z,u=K,x=I,h=L,y=$,k=F,U=a;return V(),p("div",null,[N,c(t,{class:"i18n-selector"},{default:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ri:translate"})])),_:1})])),_:1}),f("div",D,[f("div",G,[H,f("img",{src:v(fe),class:"banner"},null,8,J)]),g(c(k,{ref:"loginFormRef",model:ge.value,rules:_e.value,class:"login-form",autocomplete:"on"},{default:m((()=>[f("div",M,[f("h3",Q,"欢迎来到 "+j(v("One-step-admin 专业版"))+" ! 👋🏻",1)]),f("div",null,[c(n,{prop:"account"},{default:m((()=>[c(i,{ref:"name",modelValue:ge.value.account,"onUpdate:modelValue":o[0]||(o[0]=e=>ge.value.account=e),placeholder:v(me)("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ri:user-3-fill"})])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),c(n,{prop:"password"},{default:m((()=>[c(i,{ref:"password",modelValue:ge.value.password,"onUpdate:modelValue":o[1]||(o[1]=e=>ge.value.password=e),type:Ce.value,placeholder:v(me)("app.password"),tabindex:"2",autocomplete:"on",onKeyup:C(be,["enter"])},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ri:lock-2-fill"})])),_:1})])),suffix:m((()=>[c(s,{onClick:qe},{default:m((()=>[c(r,{name:"password"===Ce.value?"i-ri:eye-close-line":"i-ri:eye-line"},null,8,["name"])])),_:1})])),_:1},8,["modelValue","type","placeholder","onKeyup"])])),_:1})]),f("div",S,[c(u,{modelValue:ge.value.remember,"onUpdate:modelValue":o[2]||(o[2]=e=>ge.value.remember=e)},{default:m((()=>[T])),_:1},8,["modelValue"]),c(x,{type:"primary",underline:!1,onClick:o[3]||(o[3]=e=>ve.value="reset")},{default:m((()=>[W])),_:1})]),c(h,{loading:je.value,type:"primary",size:"large",style:{width:"100%"},onClick:P(be,["prevent"])},{default:m((()=>[q(j(v(me)("app.login")),1)])),_:1},8,["loading","onClick"]),f("div",X,[Y,c(x,{type:"primary",underline:!1,onClick:o[4]||(o[4]=e=>ve.value="register")},{default:m((()=>[Z])),_:1})]),f("div",ee,[c(y,null,{default:m((()=>[ae])),_:1}),c(h,{type:"primary",size:"small",plain:"",onClick:o[5]||(o[5]=e=>Ue("admin"))},{default:m((()=>[le])),_:1}),c(h,{size:"small",plain:"",onClick:o[6]||(o[6]=e=>Ue("test"))},{default:m((()=>[oe])),_:1})])])),_:1},8,["model","rules"]),[[_,"login"==ve.value]]),g(c(k,{ref:"registerFormRef",model:we.value,rules:xe.value,class:"login-form","auto-complete":"on"},{default:m((()=>[re,f("div",null,[c(n,{prop:"account"},{default:m((()=>[c(i,{ref:"name",modelValue:we.value.account,"onUpdate:modelValue":o[7]||(o[7]=e=>we.value.account=e),placeholder:"用户名",tabindex:"1",autocomplete:"on"},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ri:user-3-fill"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(n,{prop:"captcha"},{default:m((()=>[c(i,{ref:"captcha",modelValue:we.value.captcha,"onUpdate:modelValue":o[8]||(o[8]=e=>we.value.captcha=e),placeholder:"验证码",tabindex:"2",autocomplete:"on"},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ic:baseline-verified-user"})])),_:1})])),append:m((()=>[c(h,null,{default:m((()=>[se])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(n,{prop:"password"},{default:m((()=>[c(i,{ref:"password",modelValue:we.value.password,"onUpdate:modelValue":o[9]||(o[9]=e=>we.value.password=e),type:Ce.value,placeholder:"密码",tabindex:"3",autocomplete:"on"},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ri:lock-2-fill"})])),_:1})])),suffix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"password"===Ce.value?"eye":"eye-open",onClick:qe},null,8,["name"])])),_:1})])),_:1},8,["modelValue","type"])])),_:1}),c(n,{prop:"checkPassword"},{default:m((()=>[c(i,{ref:"checkPassword",modelValue:we.value.checkPassword,"onUpdate:modelValue":o[10]||(o[10]=e=>we.value.checkPassword=e),type:Ce.value,placeholder:"确认密码",tabindex:"4",autocomplete:"on"},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ri:lock-2-fill"})])),_:1})])),suffix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"password"===Ce.value?"eye":"eye-open",onClick:qe},null,8,["name"])])),_:1})])),_:1},8,["modelValue","type"])])),_:1})]),c(h,{loading:je.value,type:"primary",size:"large",style:{width:"100%","margin-top":"20px"},onClick:P(he,["prevent"])},{default:m((()=>[te])),_:1},8,["loading","onClick"]),f("div",ie,[ne,c(x,{type:"primary",underline:!1,onClick:o[11]||(o[11]=e=>ve.value="login")},{default:m((()=>[ue])),_:1})])])),_:1},8,["model","rules"]),[[_,"register"==ve.value]]),g(c(k,{ref:"resetFormRef",model:ye.value,rules:ke.value,class:"login-form","auto-complete":"on"},{default:m((()=>[de,f("div",null,[c(n,{prop:"account"},{default:m((()=>[c(i,{ref:"name",modelValue:ye.value.account,"onUpdate:modelValue":o[12]||(o[12]=e=>ye.value.account=e),placeholder:v(me)("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ri:user-3-fill"})])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),c(n,{prop:"captcha"},{default:m((()=>[c(i,{ref:"captcha",modelValue:ye.value.captcha,"onUpdate:modelValue":o[13]||(o[13]=e=>ye.value.captcha=e),placeholder:v(me)("app.captcha"),type:"text",tabindex:"2",autocomplete:"on"},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ic:baseline-verified-user"})])),_:1})])),append:m((()=>[c(h,null,{default:m((()=>[q(j(v(me)("app.sendCaptcha")),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),c(n,{prop:"newPassword"},{default:m((()=>[c(i,{ref:"newPassword",modelValue:ye.value.newPassword,"onUpdate:modelValue":o[14]||(o[14]=e=>ye.value.newPassword=e),type:Ce.value,placeholder:v(me)("app.newPassword"),tabindex:"3",autocomplete:"on"},{prefix:m((()=>[c(s,null,{default:m((()=>[c(r,{name:"i-ri:lock-2-fill"})])),_:1})])),suffix:m((()=>[c(s,{onClick:qe},{default:m((()=>[c(r,{name:"password"===Ce.value?"i-ri:eye-close-line":"i-ri:eye-line"},null,8,["name"])])),_:1})])),_:1},8,["modelValue","type","placeholder"])])),_:1})]),c(h,{loading:je.value,type:"primary",size:"large",style:{width:"100%","margin-top":"20px"},onClick:P(Ve,["prevent"])},{default:m((()=>[q(j(v(me)("app.check")),1)])),_:1},8,["loading","onClick"]),f("div",pe,[c(x,{type:"primary",underline:!1,onClick:o[15]||(o[15]=e=>ve.value="login")},{default:m((()=>[q(j(v(me)("app.goLogin")),1)])),_:1})])])),_:1},8,["model","rules"]),[[_,"reset"==ve.value]])]),v(B).copyright.enable?(V(),b(U,{key:0})):w("v-if",!0)])}}}),[["__scopeId","data-v-6de0a54e"]]);export{me as default};