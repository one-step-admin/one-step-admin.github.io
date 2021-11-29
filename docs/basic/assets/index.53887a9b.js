
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as k}from"./index.a5905c3e.js";import{_ as P}from"./index.2bdf6f6c.js";import{q as j,u as q,s as C,t as E,v as m,r as l,o as N,y as R,D as e,F as s,N as U,P as B}from"./vendor.b8cae0bd.js";import"./plugin-vue_export-helper.21dcd24c.js";const S=U("\u63D0\u4EA4"),$=j({name:"PersonalEditPassword"});function z(D){const p=q(),i=C(),_=E(),{proxy:c}=B(),f=(n,t,a)=>{t!==o.value.newpassword?a(new Error("\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801")):a()},o=m({password:"",newpassword:"",checkpassword:""}),w=m({password:[{required:!0,message:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801",trigger:"blur"}],newpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}],checkpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{validator:f}]});function g(){c.$refs.formRef.validate(n=>{n&&p.dispatch("user/editPassword",o.value).then(()=>{c.$message({type:"success",message:"\u6A21\u62DF\u4FEE\u6539\u6210\u529F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"}),p.dispatch("user/logout").then(()=>{_.push({name:"login",query:{redirect:i.fullPath}})})}).catch(()=>{})})}return(n,t)=>{const a=P,u=l("el-input"),d=l("el-form-item"),v=l("el-form"),h=l("el-col"),b=l("el-row"),V=l("el-button"),x=k;return N(),R("div",null,[e(x,null,{action:s(()=>[e(V,{type:"primary",size:"small",onClick:g},{default:s(()=>[S]),_:1})]),default:s(()=>[e(a,{title:"\u4FEE\u6539\u5BC6\u7801",content:"\u5B9A\u671F\u4FEE\u6539\u5BC6\u7801\u53EF\u4EE5\u63D0\u9AD8\u5E10\u53F7\u5B89\u5168\u6027\u5662~"}),e(b,null,{default:s(()=>[e(h,{md:24,lg:12},{default:s(()=>[e(v,{ref:(r,y)=>{y.form=r,o.value=r},model:o.value,rules:w.value,"label-width":"120px"},{default:s(()=>[e(d,{label:"\u539F\u5BC6\u7801",prop:"password"},{default:s(()=>[e(u,{modelValue:o.value.password,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value.password=r),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u65B0\u5BC6\u7801",prop:"newpassword"},{default:s(()=>[e(u,{modelValue:o.value.newpassword,"onUpdate:modelValue":t[1]||(t[1]=r=>o.value.newpassword=r),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",prop:"checkpassword"},{default:s(()=>[e(u,{modelValue:o.value.checkpassword,"onUpdate:modelValue":t[2]||(t[2]=r=>o.value.checkpassword=r),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1})])}}const A=Object.assign($,{setup:z});export{A as default};