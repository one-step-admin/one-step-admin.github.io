
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;import{_ as d,r as i,f as n,A as u,h as m,o as c,c as p,g as f,w as b,y as g,B as v,C as h,j as _,i as j,be as x,k as y,as as w,a as V,d as k,E as C,q as z,v as U}from"./index.89c4a536.js";import{v as $}from"./el-loading.a11d3df9.js";import{_ as E}from"./index.7ae327c0.js";import{E as P}from"./el-pagination.7d47f74a.js";import{E as L}from"./el-input.344ef3e5.js";/* empty css               */import"./el-select.97bb5b88.js";/* empty css                     */import"./el-popper.27b489eb.js";import{E as M,a as S}from"./el-table-column.dba5e459.js";import"./el-checkbox.bcb6e2a2.js";import"./el-tooltip.586473e3.js";import{E as O,a as R,b as K}from"./el-dropdown-item.fd9a20db.js";import{E as q}from"./el-button.ee77ba8f.js";import{E as D}from"./el-switch.48ce42ad.js";import{_ as I}from"./index.51d2887e.js";import{_ as A}from"./index.0ddb3ade.js";import{E as N,a as B}from"./el-form.49f8d7cd.js";/* empty css                       *//* empty css                        */import{E as T}from"./el-row.589e4137.js";import{E as F}from"./el-col.1980009e.js";import"./el-form-item.e866842d.js";/* empty css                */import{_ as G}from"./index.2a4f1e1c.js";import{_ as H}from"./index.60634e19.js";import{a as J,E as Q}from"./el-drawer.9614a77b.js";import"./el-overlay.2ed94eee.js";import{u as W}from"./usePagination.54650d51.js";import{E as X}from"./el-dialog.09c7a1f3.js";import{E as Y,a as Z}from"./index.d974899f.js";import{E as ee}from"./index.b6762400.js";import"./arrow-left.6b9dcff5.js";import"./arrow-right.1602ba15.js";import"./typescript.f55dff19.js";import"./index.a1ac867d.js";import"./isEqual.f1aee1ae.js";import"./d-arrow-right.11ad9dde.js";import"./error.67356979.js";import"./index.0dfe2aba.js";import"./event.87cd92d6.js";import"./index.4b6badd5.js";import"./index.a744c982.js";import"./isNil.aac33454.js";import"./index.0ddec936.js";import"./resize-event.1ca4e7b2.js";import"./scroll.cf7b6596.js";import"./debounce.4df1b226.js";import"./index.74c86e0f.js";import"./validator.0261e922.js";import"./deprecation.3d238bdd.js";import"./index.8ab22528.js";import"./arrow-up.62d5044f.js";import"./event.e842ba5a.js";import"./arrow-down.b0d54151.js";import"./caret-bottom.f3dc6deb.js";import"./caret-top.18285b0c.js";import"./aria.fe92e444.js";const ae=g("保密"),le=g("男"),oe=g("女");var te=d({props:{id:{type:[Number,String],default:""}},setup(e,{expose:a}){const l=e,{proxy:o}=v(),t=i({loading:!1,form:{id:l.id,account:"",name:"",mobile:"",sex:"2"},rules:{account:[{required:!0,message:"请输入帐号",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:(e,a,l)=>{let r={key:"mobile",value:a};""!=t.value.form.id&&(r.id=t.value.form.id),o.$api.get("pages_example/manager/check",{baseURL:"/mock/",params:r}).then((e=>{e.data.exist?l(new Error("手机号已存在")):l()}))},trigger:"blur"}]}});return n((()=>{""!=t.value.form.id&&(t.value.loading=!0,o.$api.get("pages_example/manager/detail",{baseURL:"/mock/",params:{id:t.value.form.id}}).then((e=>{t.value.loading=!1,t.value.form.account=e.data.account,t.value.form.name=e.data.name,t.value.form.mobile=e.data.mobile})))})),a({submit(e){""==t.value.form.id?o.$refs.form.validate((a=>{a&&o.$api.post("pages_example/manager/create",t.value.form,{baseURL:"/mock/"}).then((()=>{u.success({message:"模拟新增成功",center:!0}),e&&e()}))})):o.$refs.form.validate((a=>{a&&o.$api.post("pages_example/manager/edit",t.value.form,{baseURL:"/mock/"}).then((()=>{u.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=L,o=N,r=Y,s=Z,d=B,i=$;return m((c(),p("div",null,[f(d,{ref:"form",model:t.value.form,rules:t.value.rules,"label-width":"120px","label-suffix":"："},{default:b((()=>[f(o,{label:"帐号",prop:"account"},{default:b((()=>[f(l,{modelValue:t.value.form.account,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value.form.account=e),placeholder:"请输入帐号"},null,8,["modelValue"])])),_:1}),f(o,{label:"姓名",prop:"name"},{default:b((()=>[f(l,{modelValue:t.value.form.name,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value.form.name=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1}),f(o,{label:"手机号",prop:"mobile"},{default:b((()=>[f(l,{modelValue:t.value.form.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value.form.mobile=e),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),f(o,{label:"性别",prop:"sex"},{default:b((()=>[f(s,{modelValue:t.value.form.sex,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value.form.sex=e),size:"small"},{default:b((()=>[f(r,{label:"2"},{default:b((()=>[ae])),_:1}),f(r,{label:"1"},{default:b((()=>[le])),_:1}),f(r,{label:"0"},{default:b((()=>[oe])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[i,t.value.loading]])}}},[["__scopeId","data-v-7bd26ffc"]]);const re=g("取 消"),se=g("确 定"),de={class:"buttons"},ie=g("取 消"),ne=g("确 定"),ue={props:(me=((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&s(e,l,a[l]);if(o)for(var l of o(a))r.call(a,l)&&s(e,l,a[l]);return e})({},te.props),ce={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},a(me,l(ce))),emits:["update:modelValue","success"],setup(e,{emit:a}){const l=e,{proxy:o}=v();let t=h({get:function(){return l.modelValue},set:function(e){a("update:modelValue",e)}});const r=h((()=>""==l.id?"新增管理员":"编辑管理员"));function s(){o.$refs.form.submit((()=>{a("success"),d()}))}function d(){t.value=!1}return(e,a)=>{const o=q,i=X,n=J;return c(),p("div",null,["dialog"===l.mode?(c(),_(i,{key:0,modelValue:j(t),"onUpdate:modelValue":a[0]||(a[0]=e=>x(t)?t.value=e:t=e),title:j(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:b((()=>[f(o,{size:"large",onClick:d},{default:b((()=>[re])),_:1}),f(o,{type:"primary",size:"large",onClick:s},{default:b((()=>[se])),_:1})])),default:b((()=>[f(te,w({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===l.mode?(c(),_(n,{key:1,modelValue:j(t),"onUpdate:modelValue":a[1]||(a[1]=e=>x(t)?t.value=e:t=e),title:j(r),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:b((()=>[f(te,w({ref:"form"},e.$props,{class:"form-container"}),null,16),V("div",de,[f(o,{size:"large",onClick:d},{default:b((()=>[ie])),_:1}),f(o,{type:"primary",size:"large",onClick:s},{default:b((()=>[ne])),_:1})])])),_:1},8,["modelValue","title"])):y("v-if",!0)])}}};var me,ce,pe=d(ue,[["__scopeId","data-v-240f849c"]]);const fe=g(" 新增管理员 "),be=g("全部"),ge=g("男"),ve=g("女"),he=g("保密"),_e=g(" 筛选 "),je=g("批量操作"),xe=g("男"),ye=g("女"),we=g("保密"),Ve=g("编辑"),ke=g(" 更多操作 "),Ce=g("重置密码"),ze=g("删除"),Ue=k({name:"PagesExampleManagerList"});var $e=d(Object.assign(Ue,{setup(e){const{pagination:a,getParams:l,onSizeChange:o,onCurrentChange:t,onSortChange:r}=W(),{proxy:s}=v(),d=i({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{account:"",name:"",mobile:"",sex:""},searchMore:!1,batch:{enable:!0,selectionDataList:[]},dataList:[]});function g(){d.value.loading=!0;let e=l();d.value.search.account&&(e.account=d.value.search.account),d.value.search.name&&(e.name=d.value.search.name),d.value.search.mobile&&(e.mobile=d.value.search.mobile),""!=d.value.search.sex&&(e.sex=d.value.search.sex),s.$api.get("pages_example/manager/list",{baseURL:"/mock/",params:e}).then((e=>{d.value.loading=!1,d.value.dataList=e.data.list,a.value.total=e.data.total}))}function h(e){o(e).then((()=>g()))}function x(e){t(e).then((()=>g()))}function w(e,a){r(e,a).then((()=>g()))}function V(){d.value.formModeProps.id="",d.value.formModeProps.visible=!0}function k(e,a){switch(e){case"resetPassword":!function(e){Q.confirm(`确认将「${e.account}」的密码重置为 “123456” 吗？`,"确认信息").then((()=>{s.$api.post("pages_example/manager/password/reset",{id:e.id},{baseURL:"/mock/"}).then((()=>{u.success({message:"模拟重置成功",center:!0})}))})).catch((()=>{}))}(a);break;case"delete":!function(e){Q.confirm(`确认删除「${e.account}」管理员吗？`,"确认信息").then((()=>{s.$api.post("pages_example/manager/delete",{id:e.id},{baseURL:"/mock/"}).then((()=>{g(),u.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}))}(a)}}return n((()=>{g()})),(e,l)=>{const o=H,t=G,r=C,i=q,n=L,v=N,J=F,W=T,X=Y,ae=Z,le=B,oe=A,te=I,re=M,se=ee,de=D,ie=O,ne=R,ue=K,me=S,ce=P,Ue=E,$e=$;return c(),p("div",null,[f(o,{title:"管理员管理",content:"页面数据为 Mock 示例数据，非真实数据。"}),f(Ue,null,{default:b((()=>[f(i,{type:"primary",size:"large",onClick:V},{icon:b((()=>[f(r,null,{default:b((()=>[f(t,{name:"ep:plus"})])),_:1})])),default:b((()=>[fe])),_:1}),f(oe,{"show-more":"",onToggle:l[4]||(l[4]=e=>d.value.searchMore=e)},{default:b((()=>[f(le,{model:d.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:b((()=>[f(W,null,{default:b((()=>[f(J,{md:12},{default:b((()=>[f(v,{label:"帐号"},{default:b((()=>[f(n,{modelValue:d.value.search.account,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value.search.account=e),placeholder:"请输入帐号，支持模糊查询",clearable:"",onKeydown:z(g,["enter"]),onClear:g},null,8,["modelValue","onKeydown"])])),_:1})])),_:1}),f(J,{md:12},{default:b((()=>[f(v,{label:"姓名"},{default:b((()=>[f(n,{modelValue:d.value.search.name,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value.search.name=e),placeholder:"请输入姓名，支持模糊查询",clearable:"",onKeydown:z(g,["enter"]),onClear:g},null,8,["modelValue","onKeydown"])])),_:1})])),_:1})])),_:1}),m(f(W,null,{default:b((()=>[f(J,{md:12},{default:b((()=>[f(v,{label:"手机号"},{default:b((()=>[f(n,{modelValue:d.value.search.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>d.value.search.mobile=e),placeholder:"请输入手机号",clearable:"",onKeydown:z(g,["enter"]),onClear:g},null,8,["modelValue","onKeydown"])])),_:1})])),_:1}),f(J,{md:12},{default:b((()=>[f(v,{label:"性别"},{default:b((()=>[f(ae,{modelValue:d.value.search.sex,"onUpdate:modelValue":l[3]||(l[3]=e=>d.value.search.sex=e),onChange:g},{default:b((()=>[f(X,{label:""},{default:b((()=>[be])),_:1}),f(X,{label:"1"},{default:b((()=>[ge])),_:1}),f(X,{label:"0"},{default:b((()=>[ve])),_:1}),f(X,{label:"2"},{default:b((()=>[he])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[U,d.value.searchMore]]),f(v,null,{default:b((()=>[f(i,{type:"primary",onClick:g},{icon:b((()=>[f(r,null,{default:b((()=>[f(t,{name:"ep:search"})])),_:1})])),default:b((()=>[_e])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),d.value.batch.enable?(c(),_(te,{key:0,data:d.value.dataList,"selection-data":d.value.batch.selectionDataList,onCheckAll:l[5]||(l[5]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:l[6]||(l[6]=a=>e.$refs.table.clearSelection())},{default:b((()=>[f(i,{size:"default"},{default:b((()=>[je])),_:1})])),_:1},8,["data","selection-data"])):y("v-if",!0),m((c(),_(me,{ref:"table",class:"list-table",data:d.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:w,onSelectionChange:l[7]||(l[7]=e=>d.value.batch.selectionDataList=e)},{default:b((()=>[d.value.batch.enable?(c(),_(re,{key:0,type:"selection",align:"center",fixed:""})):y("v-if",!0),f(re,{prop:"account",sortable:"",label:"帐号"}),f(re,{prop:"name",label:"姓名",width:"100",align:"center"}),f(re,{prop:"sex",label:"性别",width:"100",align:"center"},{default:b((e=>[1==e.row.sex?(c(),_(se,{key:0,type:"success",size:"small"},{default:b((()=>[xe])),_:1})):0==e.row.sex?(c(),_(se,{key:1,type:"warning",size:"small"},{default:b((()=>[ye])),_:1})):(c(),_(se,{key:2,type:"info",size:"small"},{default:b((()=>[we])),_:1}))])),_:1}),f(re,{prop:"mobile",label:"手机号",width:"150",align:"center"}),f(re,{label:"状态",width:"100",align:"center"},{default:b((e=>[f(de,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,onChange:a=>{return l=a,o=e.row,void Q.confirm(`确认${l?"启用":"停用"}「${o.account}」吗？`,"确认信息").then((()=>{s.$api.post("pages_example/manager/change/status",{id:o.id,status:l},{baseURL:"/mock/"}).then((()=>{u.success({message:`模拟${l?"启用":"停用"}成功`,center:!0})}))})).catch((()=>{o.status=!l}));var l,o}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),f(re,{label:"操作",width:"200",align:"center",fixed:"right"},{default:b((e=>[f(i,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,d.value.formModeProps.id=l.id,void(d.value.formModeProps.visible=!0);var l}},{default:b((()=>[Ve])),_:2},1032,["onClick"]),f(ue,{onCommand:a=>k(a,e.row)},{dropdown:b((()=>[f(ne,null,{default:b((()=>[f(ie,{command:"resetPassword"},{default:b((()=>[Ce])),_:1}),f(ie,{command:"delete",divided:""},{default:b((()=>[ze])),_:1})])),_:1})])),default:b((()=>[f(i,{size:"small"},{default:b((()=>[ke,f(r,{class:"el-icon--right"},{default:b((()=>[f(t,{name:"ep:arrow-down"})])),_:1})])),_:1})])),_:2},1032,["onCommand"])])),_:1})])),_:1},8,["data"])),[[$e,d.value.loading]]),f(ce,{"current-page":j(a).page,total:j(a).total,"page-size":j(a).size,"page-sizes":j(a).sizes,layout:j(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onCurrentChange:x,onSizeChange:h},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(d.value.formMode)?(c(),_(pe,{key:0,id:d.value.formModeProps.id,modelValue:d.value.formModeProps.visible,"onUpdate:modelValue":l[8]||(l[8]=e=>d.value.formModeProps.visible=e),mode:d.value.formMode,onSuccess:g},null,8,["id","modelValue","mode"])):y("v-if",!0)])}}}),[["__scopeId","data-v-7265d160"]]);export{$e as default};
