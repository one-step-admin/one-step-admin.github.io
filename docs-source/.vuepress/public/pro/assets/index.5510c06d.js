
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.5f22a7e5.js";import{_ as l,c as a,g as o,w as d,o as t,a as m,y as r}from"./index.89c4a536.js";import{E as u}from"./el-button.ee77ba8f.js";import{_ as p}from"./index.7ae327c0.js";import{E as f}from"./el-row.589e4137.js";import{E as s,a as i}from"./el-form.49f8d7cd.js";/* empty css                       *//* empty css                 *//* empty css                          */import{E as n,a as b}from"./el-checkbox.bcb6e2a2.js";import{E as V}from"./el-switch.48ce42ad.js";import{E as c}from"./el-time-picker.59b79305.js";import{E as j}from"./el-input.344ef3e5.js";/* empty css                     */import"./el-popper.27b489eb.js";import{E as _}from"./el-col.1980009e.js";import{E as y}from"./el-date-picker.e8c70690.js";/* empty css               */import{E as h,b as g}from"./el-select.97bb5b88.js";import"./el-form-item.e866842d.js";import{_ as U}from"./index.60634e19.js";import{b as x,a as v}from"./index.d974899f.js";import"./index.0ddec936.js";import"./error.67356979.js";import"./index.0dfe2aba.js";import"./index.a744c982.js";/* empty css                */import"./isEqual.f1aee1ae.js";import"./event.87cd92d6.js";import"./validator.0261e922.js";import"./panel-time-pick.69ba7404.js";import"./index.a1ac867d.js";import"./index.71e1be7e.js";import"./event.e842ba5a.js";import"./arrow-up.62d5044f.js";import"./arrow-down.b0d54151.js";import"./debounce.4df1b226.js";import"./_baseFlatten.2a1fbbb9.js";import"./typescript.f55dff19.js";import"./index.4b6badd5.js";import"./isNil.aac33454.js";import"./arrays.6f73fe37.js";import"./index.74c86e0f.js";import"./d-arrow-right.11ad9dde.js";import"./arrow-left.6b9dcff5.js";import"./arrow-right.1602ba15.js";import"./index.b6762400.js";import"./resize-event.1ca4e7b2.js";import"./scroll.cf7b6596.js";import"./deprecation.3d238bdd.js";import"./index.8ab22528.js";const w={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}})},E=m("p",null,"ActionContainer",-1),k=m("p",{style:{"margin-bottom":"0"}},"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",-1),z=r("-"),q=r("-"),A=r("-"),C=r("立即创建"),F=r("取消");var N=l(w,[["render",function(l,m,r,w,N,B){const D=U,G=j,H=s,I=h,J=g,K=y,L=_,M=c,O=V,P=n,Q=b,R=x,S=v,T=i,W=f,X=p,Y=u,Z=e;return t(),a("div",null,[o(Z,null,{action:d((()=>[o(Y,{type:"primary",size:"large"},{default:d((()=>[C])),_:1}),o(Y,{size:"large"},{default:d((()=>[F])),_:1})])),default:d((()=>[o(D,{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",style:{margin:"0 0 20px"}},{content:d((()=>[E,k])),_:1}),o(X,null,{default:d((()=>[o(W,null,{default:d((()=>[o(L,{md:24,lg:12},{default:d((()=>[o(T,{ref:"form",model:N.form,"label-width":"120px"},{default:d((()=>[o(H,{label:"活动名称"},{default:d((()=>[o(G,{modelValue:N.form.name,"onUpdate:modelValue":m[0]||(m[0]=e=>N.form.name=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动区域"},{default:d((()=>[o(J,{modelValue:N.form.region,"onUpdate:modelValue":m[1]||(m[1]=e=>N.form.region=e),placeholder:"请选择活动区域"},{default:d((()=>[o(I,{label:"区域一",value:"shanghai"}),o(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动时间"},{default:d((()=>[o(L,{span:11},{default:d((()=>[o(K,{modelValue:N.form.date1,"onUpdate:modelValue":m[2]||(m[2]=e=>N.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(L,{class:"line",span:2},{default:d((()=>[z])),_:1}),o(L,{span:11},{default:d((()=>[o(M,{modelValue:N.form.date2,"onUpdate:modelValue":m[3]||(m[3]=e=>N.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),o(H,{label:"即时配送"},{default:d((()=>[o(O,{modelValue:N.form.delivery,"onUpdate:modelValue":m[4]||(m[4]=e=>N.form.delivery=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动性质"},{default:d((()=>[o(Q,{modelValue:N.form.type,"onUpdate:modelValue":m[5]||(m[5]=e=>N.form.type=e)},{default:d((()=>[o(P,{label:"美食/餐厅线上活动",name:"type"}),o(P,{label:"地推活动",name:"type"}),o(P,{label:"线下主题活动",name:"type"}),o(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"特殊资源"},{default:d((()=>[o(S,{modelValue:N.form.resource,"onUpdate:modelValue":m[6]||(m[6]=e=>N.form.resource=e)},{default:d((()=>[o(R,{label:"线上品牌商赞助"}),o(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动形式"},{default:d((()=>[o(G,{modelValue:N.form.desc,"onUpdate:modelValue":m[7]||(m[7]=e=>N.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),o(H,{label:"活动名称"},{default:d((()=>[o(G,{modelValue:N.form.name,"onUpdate:modelValue":m[8]||(m[8]=e=>N.form.name=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动区域"},{default:d((()=>[o(J,{modelValue:N.form.region,"onUpdate:modelValue":m[9]||(m[9]=e=>N.form.region=e),placeholder:"请选择活动区域"},{default:d((()=>[o(I,{label:"区域一",value:"shanghai"}),o(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动时间"},{default:d((()=>[o(L,{span:11},{default:d((()=>[o(K,{modelValue:N.form.date1,"onUpdate:modelValue":m[10]||(m[10]=e=>N.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(L,{class:"line",span:2},{default:d((()=>[q])),_:1}),o(L,{span:11},{default:d((()=>[o(M,{modelValue:N.form.date2,"onUpdate:modelValue":m[11]||(m[11]=e=>N.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),o(H,{label:"即时配送"},{default:d((()=>[o(O,{modelValue:N.form.delivery,"onUpdate:modelValue":m[12]||(m[12]=e=>N.form.delivery=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动性质"},{default:d((()=>[o(Q,{modelValue:N.form.type,"onUpdate:modelValue":m[13]||(m[13]=e=>N.form.type=e)},{default:d((()=>[o(P,{label:"美食/餐厅线上活动",name:"type"}),o(P,{label:"地推活动",name:"type"}),o(P,{label:"线下主题活动",name:"type"}),o(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"特殊资源"},{default:d((()=>[o(S,{modelValue:N.form.resource,"onUpdate:modelValue":m[14]||(m[14]=e=>N.form.resource=e)},{default:d((()=>[o(R,{label:"线上品牌商赞助"}),o(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动形式"},{default:d((()=>[o(G,{modelValue:N.form.desc,"onUpdate:modelValue":m[15]||(m[15]=e=>N.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),o(H,{label:"活动名称"},{default:d((()=>[o(G,{modelValue:N.form.name,"onUpdate:modelValue":m[16]||(m[16]=e=>N.form.name=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动区域"},{default:d((()=>[o(J,{modelValue:N.form.region,"onUpdate:modelValue":m[17]||(m[17]=e=>N.form.region=e),placeholder:"请选择活动区域"},{default:d((()=>[o(I,{label:"区域一",value:"shanghai"}),o(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动时间"},{default:d((()=>[o(L,{span:11},{default:d((()=>[o(K,{modelValue:N.form.date1,"onUpdate:modelValue":m[18]||(m[18]=e=>N.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(L,{class:"line",span:2},{default:d((()=>[A])),_:1}),o(L,{span:11},{default:d((()=>[o(M,{modelValue:N.form.date2,"onUpdate:modelValue":m[19]||(m[19]=e=>N.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),o(H,{label:"即时配送"},{default:d((()=>[o(O,{modelValue:N.form.delivery,"onUpdate:modelValue":m[20]||(m[20]=e=>N.form.delivery=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动性质"},{default:d((()=>[o(Q,{modelValue:N.form.type,"onUpdate:modelValue":m[21]||(m[21]=e=>N.form.type=e)},{default:d((()=>[o(P,{label:"美食/餐厅线上活动",name:"type"}),o(P,{label:"地推活动",name:"type"}),o(P,{label:"线下主题活动",name:"type"}),o(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"特殊资源"},{default:d((()=>[o(S,{modelValue:N.form.resource,"onUpdate:modelValue":m[22]||(m[22]=e=>N.form.resource=e)},{default:d((()=>[o(R,{label:"线上品牌商赞助"}),o(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动形式"},{default:d((()=>[o(G,{modelValue:N.form.desc,"onUpdate:modelValue":m[23]||(m[23]=e=>N.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})])),_:1})])}]]);export{N as default};
