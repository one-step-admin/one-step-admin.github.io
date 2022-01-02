
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as y}from"./index.9bf2b3b4.js";import{_ as k}from"./index.e0bf3217.js";import{v as C,u as P,x as j,y as q,A as c,r,C as R,H as e,I as s,o as E,P as U,R as B}from"./vendor.f5f43216.js";import"./plugin-vue_export-helper.21dcd24c.js";const I=U("\u63D0\u4EA4"),N=C({name:"PersonalEditPassword"}),O=Object.assign(N,{setup(S){const p=P(),_=j(),i=q(),{proxy:m}=B(),f=(n,t,a)=>{t!==o.value.newpassword?a(new Error("\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801")):a()},o=c({password:"",newpassword:"",checkpassword:""}),w=c({password:[{required:!0,message:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801",trigger:"blur"}],newpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}],checkpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{validator:f}]});function g(){m.$refs.formRef.validate(n=>{n&&p.dispatch("user/editPassword",o.value).then(()=>{m.$message({type:"success",message:"\u6A21\u62DF\u4FEE\u6539\u6210\u529F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"}),p.dispatch("user/logout").then(()=>{i.push({name:"login",query:{redirect:_.fullPath}})})}).catch(()=>{})})}return(n,t)=>{const a=k,u=r("el-input"),d=r("el-form-item"),v=r("el-form"),b=r("el-col"),h=r("el-row"),x=r("el-button"),V=y;return E(),R("div",null,[e(V,null,{action:s(()=>[e(x,{type:"primary",size:"small",onClick:g},{default:s(()=>[I]),_:1})]),default:s(()=>[e(a,{title:"\u4FEE\u6539\u5BC6\u7801",content:"\u5B9A\u671F\u4FEE\u6539\u5BC6\u7801\u53EF\u4EE5\u63D0\u9AD8\u5E10\u53F7\u5B89\u5168\u6027\u5662~"}),e(h,null,{default:s(()=>[e(b,{md:24,lg:12},{default:s(()=>[e(v,{ref_key:"form",ref:o,model:o.value,rules:w.value,"label-width":"120px"},{default:s(()=>[e(d,{label:"\u539F\u5BC6\u7801",prop:"password"},{default:s(()=>[e(u,{modelValue:o.value.password,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value.password=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u65B0\u5BC6\u7801",prop:"newpassword"},{default:s(()=>[e(u,{modelValue:o.value.newpassword,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value.newpassword=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",prop:"checkpassword"},{default:s(()=>[e(u,{modelValue:o.value.checkpassword,"onUpdate:modelValue":t[2]||(t[2]=l=>o.value.checkpassword=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1})])}}});export{O as default};
