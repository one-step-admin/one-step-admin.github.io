
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.1eec6a2d.js";import{d as a,u as l,a as o,r as t,o as s,E as r,c as n,b as u,w as i,v as d,e as p,f as c,g as m,h as f,i as g,p as v,j as b,k as _,l as x,m as w,t as y,n as h,q as j,s as V,x as k,y as C,z as q}from"./index.2721a539.js";import{E}from"./el-row.f59b4fa1.js";import{E as z}from"./el-col.a55a639f.js";import{E as P,a as U}from"./el-form.4b17c9ef.js";import{E as S}from"./el-button.702f0937.js";import{E as F}from"./el-checkbox.27569b23.js";import"./el-form-item.e866842d.js";import{E as R}from"./el-input.7cd14637.js";/* empty css                */import{_ as I}from"./index.4b9f4b82.js";/* empty css                   */import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import"./typescript.b0ac2d0c.js";import"./index.438da6eb.js";import"./error.b438369f.js";import"./isEqual.819cbe5b.js";import"./index.f8027735.js";import"./event.75bf56a9.js";import"./validator.760ca6f5.js";import"./index.95a1d188.js";import"./isNil.aac33454.js";const K=e=>(v("data-v-11955f31"),e=e(),b(),e),O=K((()=>u("div",{class:"bg-banner"},null,-1))),L={id:"login-box"},N=K((()=>u("div",{class:"login-banner"},null,-1))),A={class:"title-container"},B={class:"title"},D={class:"flex-bar"},G=V("记住我"),H=V("忘记密码"),J=V("登 录"),M={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},Q=K((()=>u("span",{style:{"margin-right":"5px"}},"演示帐号一键登录：",-1))),T=V("admin"),W=V("test"),X=K((()=>u("div",{class:"title-container"},[u("h3",{class:"title"},"重置密码")],-1))),Y=V("发送验证码"),Z=V("去登录"),ee=V("确认"),ae=a({name:"Login"});var le=$(Object.assign(ae,{setup(a){const{proxy:v}=q(),b=_(),V=x(),$=l(),K=o(),ae=t("login"),le=t({account:localStorage.login_account||"",password:"",remember:!!localStorage.login_account}),oe=t({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),te=t({account:localStorage.login_account||"",captcha:"",newPassword:""}),se=t({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),re=t(!1),ne=t("password"),ue=t(null);function ie(){ne.value="password"===ne.value?"":"password",k((()=>{v.$refs.password.focus()}))}function de(){v.$refs.loginFormRef.validate((e=>{e&&(re.value=!0,K.login(le.value).then((()=>{re.value=!1,le.value.remember?localStorage.setItem("login_account",le.value.account):localStorage.removeItem("login_account"),V.push(ue.value)})).catch((()=>{re.value=!1})))}))}function pe(){C({message:"重置密码仅提供界面演示，无实际功能，需开发者自行扩展",type:"info"}),v.$refs.resetFormRef.validate((e=>{}))}function ce(e){le.value.account=e,le.value.password="123456",de()}return s((()=>{var e;ue.value=null!=(e=b.query.redirect)?e:"/"})),(a,l)=>{const o=I,t=r,s=R,v=P,b=F,_=S,x=U,V=z,k=E,C=e;return w(),n("div",null,[O,u("div",L,[N,i(p(x,{ref:"loginFormRef",model:le.value,rules:oe.value,class:"login-form",autocomplete:"on","label-position":"left"},{default:c((()=>[u("div",A,[u("h3",B,y(m("One-step-admin 基础版"))+"管理后台",1)]),u("div",null,[p(v,{prop:"account"},{default:c((()=>[p(s,{ref:"name",modelValue:le.value.account,"onUpdate:modelValue":l[0]||(l[0]=e=>le.value.account=e),placeholder:"用户名",type:"text",tabindex:"1",autocomplete:"on"},{prefix:c((()=>[p(t,null,{default:c((()=>[p(o,{name:"user"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),p(v,{prop:"password"},{default:c((()=>[p(s,{ref:"password",modelValue:le.value.password,"onUpdate:modelValue":l[1]||(l[1]=e=>le.value.password=e),type:ne.value,placeholder:"密码",tabindex:"2",autocomplete:"on",onKeyup:h(de,["enter"])},{prefix:c((()=>[p(t,null,{default:c((()=>[p(o,{name:"password"})])),_:1})])),suffix:c((()=>[p(t,null,{default:c((()=>[p(o,{name:"password"===ne.value?"eye":"eye-open",onClick:ie},null,8,["name"])])),_:1})])),_:1},8,["modelValue","type","onKeyup"])])),_:1})]),u("div",D,[p(b,{modelValue:le.value.remember,"onUpdate:modelValue":l[2]||(l[2]=e=>le.value.remember=e)},{default:c((()=>[G])),_:1},8,["modelValue"]),p(_,{type:"text",onClick:l[3]||(l[3]=e=>ae.value="reset")},{default:c((()=>[H])),_:1})]),p(_,{loading:re.value,type:"primary",size:"large",style:{width:"100%"},onClick:j(de,["prevent"])},{default:c((()=>[J])),_:1},8,["loading","onClick"]),u("div",M,[Q,p(_,{type:"danger",size:"small",onClick:l[4]||(l[4]=e=>ce("admin"))},{default:c((()=>[T])),_:1}),p(_,{type:"danger",size:"small",plain:"",onClick:l[5]||(l[5]=e=>ce("test"))},{default:c((()=>[W])),_:1})])])),_:1},8,["model","rules"]),[[d,"login"==ae.value]]),i(p(x,{ref:"resetFormRef",model:te.value,rules:se.value,class:"login-form","auto-complete":"on","label-position":"left"},{default:c((()=>[X,u("div",null,[p(v,{prop:"account"},{default:c((()=>[p(s,{ref:"name",modelValue:te.value.account,"onUpdate:modelValue":l[6]||(l[6]=e=>te.value.account=e),placeholder:"用户名",type:"text",tabindex:"1",autocomplete:"on"},{prefix:c((()=>[p(t,null,{default:c((()=>[p(o,{name:"user"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),p(v,{prop:"captcha"},{default:c((()=>[p(s,{ref:"captcha",modelValue:te.value.captcha,"onUpdate:modelValue":l[7]||(l[7]=e=>te.value.captcha=e),placeholder:"验证码",type:"text",tabindex:"2",autocomplete:"on"},{prefix:c((()=>[p(t,null,{default:c((()=>[p(o,{name:"captcha"})])),_:1})])),append:c((()=>[p(_,null,{default:c((()=>[Y])),_:1})])),_:1},8,["modelValue"])])),_:1}),p(v,{prop:"newPassword"},{default:c((()=>[p(s,{ref:"newPassword",modelValue:te.value.newPassword,"onUpdate:modelValue":l[8]||(l[8]=e=>te.value.newPassword=e),type:ne.value,placeholder:"新密码",tabindex:"3",autocomplete:"on"},{prefix:c((()=>[p(t,null,{default:c((()=>[p(o,{name:"password"})])),_:1})])),suffix:c((()=>[p(t,null,{default:c((()=>[p(o,{name:"password"===ne.value?"eye":"eye-open",onClick:ie},null,8,["name"])])),_:1})])),_:1},8,["modelValue","type"])])),_:1})]),p(k,{gutter:15,style:{"padding-top":"20px"}},{default:c((()=>[p(V,{md:6},{default:c((()=>[p(_,{size:"large",style:{width:"100%"},onClick:l[9]||(l[9]=e=>ae.value="login")},{default:c((()=>[Z])),_:1})])),_:1}),p(V,{md:18},{default:c((()=>[p(_,{loading:re.value,type:"primary",size:"large",style:{width:"100%"},onClick:j(pe,["prevent"])},{default:c((()=>[ee])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1},8,["model","rules"]),[[d,"reset"==ae.value]])]),m($).copyright.enable?(w(),f(C,{key:0})):g("v-if",!0)])}}}),[["__scopeId","data-v-11955f31"]]);export{le as default};
