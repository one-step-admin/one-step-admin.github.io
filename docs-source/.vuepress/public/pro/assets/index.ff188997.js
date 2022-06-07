
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.a1a42e0f.js";import{_ as l,c as a,b as o,w as d,n as t,e as m,y as r}from"./index.0a5e3bc2.js";import{E as u}from"./el-button.2fada245.js";import{_ as f}from"./index.15becada.js";import{E as p}from"./el-row.5ffdf9e2.js";import{E as s,a as i}from"./el-form.baa50cfd.js";/* empty css                       *//* empty css                 *//* empty css                          */import{E as n,a as b}from"./el-checkbox.b123cdbb.js";import{E as c}from"./el-switch.06a9dca8.js";import{E as V}from"./el-time-picker.b5b52461.js";import{E as j}from"./el-input.3dbe719d.js";/* empty css                     */import"./el-popper.807071fe.js";import{E as _}from"./el-col.3759f1e4.js";import{E as y}from"./el-date-picker.9a4948d1.js";/* empty css               */import{E as h,b as U}from"./el-select.1c87b690.js";import"./el-form-item.e866842d.js";import{_ as g}from"./index.7bc6f31f.js";import{b as x,a as v}from"./index2.841f0948.js";import"./index2.5834ab0d.js";import"./error2.1d524120.js";import"./index2.f37a6952.js";import"./index2.2a4e9295.js";import"./index2.fa2fe4ab.js";/* empty css                */import"./index.5fef9d7d.js";import"./isEqual.e1bd83ff.js";import"./event2.27558ffe.js";import"./validator2.66f5dd98.js";import"./panel-time-pick2.d7ec4b46.js";import"./index2.6a73fda0.js";import"./index2.32130bcb.js";import"./event2.3b438cf1.js";import"./arrow-up.72ffa464.js";import"./arrow-down.2c5054c4.js";import"./debounce.527fb442.js";import"./_baseFlatten.36d4779d.js";import"./typescript2.7477ece2.js";import"./index2.0c75c32d.js";import"./isNil.aac33454.js";import"./focus-trap2.8b38c312.js";import"./arrays2.7500bfa6.js";import"./index2.465fddca.js";import"./d-arrow-right.5de046fc.js";import"./arrow-left.1f454394.js";import"./arrow-right.aba418f8.js";import"./index2.6e216417.js";import"./resize-event2.a830ea20.js";import"./scroll2.09311c78.js";const w={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}})},E=m("p",null,"ActionContainer",-1),k=m("p",{style:{"margin-bottom":"0"}},"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",-1),z=r("-"),q=r("-"),A=r("-"),C=r("立即创建"),F=r("取消");var N=l(w,[["render",function(l,m,r,w,N,B){const D=g,G=j,H=s,I=h,J=U,K=y,L=_,M=V,O=c,P=n,Q=b,R=x,S=v,T=i,W=p,X=f,Y=u,Z=e;return t(),a("div",null,[o(Z,null,{action:d((()=>[o(Y,{type:"primary",size:"large"},{default:d((()=>[C])),_:1}),o(Y,{size:"large"},{default:d((()=>[F])),_:1})])),default:d((()=>[o(D,{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",style:{margin:"0 0 20px"}},{content:d((()=>[E,k])),_:1}),o(X,null,{default:d((()=>[o(W,null,{default:d((()=>[o(L,{md:24,lg:12},{default:d((()=>[o(T,{ref:"form",model:N.form,"label-width":"120px"},{default:d((()=>[o(H,{label:"活动名称"},{default:d((()=>[o(G,{modelValue:N.form.name,"onUpdate:modelValue":m[0]||(m[0]=e=>N.form.name=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动区域"},{default:d((()=>[o(J,{modelValue:N.form.region,"onUpdate:modelValue":m[1]||(m[1]=e=>N.form.region=e),placeholder:"请选择活动区域"},{default:d((()=>[o(I,{label:"区域一",value:"shanghai"}),o(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动时间"},{default:d((()=>[o(L,{span:11},{default:d((()=>[o(K,{modelValue:N.form.date1,"onUpdate:modelValue":m[2]||(m[2]=e=>N.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(L,{class:"line",span:2},{default:d((()=>[z])),_:1}),o(L,{span:11},{default:d((()=>[o(M,{modelValue:N.form.date2,"onUpdate:modelValue":m[3]||(m[3]=e=>N.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),o(H,{label:"即时配送"},{default:d((()=>[o(O,{modelValue:N.form.delivery,"onUpdate:modelValue":m[4]||(m[4]=e=>N.form.delivery=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动性质"},{default:d((()=>[o(Q,{modelValue:N.form.type,"onUpdate:modelValue":m[5]||(m[5]=e=>N.form.type=e)},{default:d((()=>[o(P,{label:"美食/餐厅线上活动",name:"type"}),o(P,{label:"地推活动",name:"type"}),o(P,{label:"线下主题活动",name:"type"}),o(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"特殊资源"},{default:d((()=>[o(S,{modelValue:N.form.resource,"onUpdate:modelValue":m[6]||(m[6]=e=>N.form.resource=e)},{default:d((()=>[o(R,{label:"线上品牌商赞助"}),o(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动形式"},{default:d((()=>[o(G,{modelValue:N.form.desc,"onUpdate:modelValue":m[7]||(m[7]=e=>N.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),o(H,{label:"活动名称"},{default:d((()=>[o(G,{modelValue:N.form.name,"onUpdate:modelValue":m[8]||(m[8]=e=>N.form.name=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动区域"},{default:d((()=>[o(J,{modelValue:N.form.region,"onUpdate:modelValue":m[9]||(m[9]=e=>N.form.region=e),placeholder:"请选择活动区域"},{default:d((()=>[o(I,{label:"区域一",value:"shanghai"}),o(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动时间"},{default:d((()=>[o(L,{span:11},{default:d((()=>[o(K,{modelValue:N.form.date1,"onUpdate:modelValue":m[10]||(m[10]=e=>N.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(L,{class:"line",span:2},{default:d((()=>[q])),_:1}),o(L,{span:11},{default:d((()=>[o(M,{modelValue:N.form.date2,"onUpdate:modelValue":m[11]||(m[11]=e=>N.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),o(H,{label:"即时配送"},{default:d((()=>[o(O,{modelValue:N.form.delivery,"onUpdate:modelValue":m[12]||(m[12]=e=>N.form.delivery=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动性质"},{default:d((()=>[o(Q,{modelValue:N.form.type,"onUpdate:modelValue":m[13]||(m[13]=e=>N.form.type=e)},{default:d((()=>[o(P,{label:"美食/餐厅线上活动",name:"type"}),o(P,{label:"地推活动",name:"type"}),o(P,{label:"线下主题活动",name:"type"}),o(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"特殊资源"},{default:d((()=>[o(S,{modelValue:N.form.resource,"onUpdate:modelValue":m[14]||(m[14]=e=>N.form.resource=e)},{default:d((()=>[o(R,{label:"线上品牌商赞助"}),o(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动形式"},{default:d((()=>[o(G,{modelValue:N.form.desc,"onUpdate:modelValue":m[15]||(m[15]=e=>N.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),o(H,{label:"活动名称"},{default:d((()=>[o(G,{modelValue:N.form.name,"onUpdate:modelValue":m[16]||(m[16]=e=>N.form.name=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动区域"},{default:d((()=>[o(J,{modelValue:N.form.region,"onUpdate:modelValue":m[17]||(m[17]=e=>N.form.region=e),placeholder:"请选择活动区域"},{default:d((()=>[o(I,{label:"区域一",value:"shanghai"}),o(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动时间"},{default:d((()=>[o(L,{span:11},{default:d((()=>[o(K,{modelValue:N.form.date1,"onUpdate:modelValue":m[18]||(m[18]=e=>N.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(L,{class:"line",span:2},{default:d((()=>[A])),_:1}),o(L,{span:11},{default:d((()=>[o(M,{modelValue:N.form.date2,"onUpdate:modelValue":m[19]||(m[19]=e=>N.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),o(H,{label:"即时配送"},{default:d((()=>[o(O,{modelValue:N.form.delivery,"onUpdate:modelValue":m[20]||(m[20]=e=>N.form.delivery=e)},null,8,["modelValue"])])),_:1}),o(H,{label:"活动性质"},{default:d((()=>[o(Q,{modelValue:N.form.type,"onUpdate:modelValue":m[21]||(m[21]=e=>N.form.type=e)},{default:d((()=>[o(P,{label:"美食/餐厅线上活动",name:"type"}),o(P,{label:"地推活动",name:"type"}),o(P,{label:"线下主题活动",name:"type"}),o(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"特殊资源"},{default:d((()=>[o(S,{modelValue:N.form.resource,"onUpdate:modelValue":m[22]||(m[22]=e=>N.form.resource=e)},{default:d((()=>[o(R,{label:"线上品牌商赞助"}),o(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),o(H,{label:"活动形式"},{default:d((()=>[o(G,{modelValue:N.form.desc,"onUpdate:modelValue":m[23]||(m[23]=e=>N.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})])),_:1})])}]]);export{N as default};
