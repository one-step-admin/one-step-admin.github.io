
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.8a3d2fc0.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,L as d,m as t,n as u,c as o,P as r,e as s,f as n,x as c,t as p,i as _,a$ as m,w as f,h as b,v as h}from"./index.f83bbb39.js";import{_ as i}from"./index.febab5b1.js";const v={class:"search-container"},V={key:0,class:"more"};var y=l({props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:l}){const m=e,f=a(!m.unfold);function b(){f.value=!f.value,l("toggle",f.value)}return d((()=>m.unfold),(()=>b()),{immediate:!0}),(l,a)=>{const d=t("el-button");return u(),o("div",v,[r(l.$slots,"default",{},void 0,!0),e.showMore?(u(),o("div",V,[s(d,{type:"text",size:"small",icon:f.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:b},{default:n((()=>[c(p(f.value?"收起":"展开"),1)])),_:1},8,["icon"])])):_("v-if",!0)])}}},[["__scopeId","data-v-13d6ea9a"]]);const w={data:()=>({search:{name:"",department_id:"",department_job_id:"",role_id:"",check1:!0,check2:!1},searchMore:!1,searchMore2:!1})},x=c("备选项"),j=c("备选项"),U=c("筛选"),g=c("导出"),k=c("查看已导出记录"),M=c("备选项"),z=c("备选项"),B=c("筛选"),T=c("导出"),$=c("查看已导出记录");var C=l(w,[["render",function(l,a,d,r,c,p){const _=i,v=t("el-input"),V=t("el-form-item"),w=t("el-col"),C=t("el-row"),I=t("el-option"),L=t("el-select"),P=t("el-checkbox"),S=t("el-button"),q=t("el-form"),A=y,D=e,E=m("auth");return u(),o("div",null,[s(_,{title:"搜索面板",content:"SearchBar"}),s(D,null,{default:n((()=>[s(A,{"show-more":"",onToggle:a[4]||(a[4]=e=>c.searchMore=e)},{default:n((()=>[s(q,{model:c.search,size:"default","label-width":"120px"},{default:n((()=>[s(C,null,{default:n((()=>[s(w,{span:18},{default:n((()=>[s(V,{label:"姓名 / 手机号"},{default:n((()=>[s(v,{modelValue:c.search.name,"onUpdate:modelValue":a[0]||(a[0]=e=>c.search.name=e),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(C,null,{default:n((()=>[s(w,{span:12},{default:n((()=>[f((u(),b(V,{label:"部门"},{default:n((()=>[s(L,{modelValue:c.search.department_id,"onUpdate:modelValue":a[1]||(a[1]=e=>c.search.department_id=e),clearable:"",placeholder:"请选择部门"},{default:n((()=>[s(I,{label:"技术部",value:1}),s(I,{label:"设计部",value:2}),s(I,{label:"行政部",value:3})])),_:1},8,["modelValue"])])),_:1})),[[E,"supplay.department.browse"]])])),_:1}),s(w,{span:12},{default:n((()=>[f((u(),b(V,{label:"职位"},{default:n((()=>[s(L,{modelValue:c.search.department_job_id,"onUpdate:modelValue":a[2]||(a[2]=e=>c.search.department_job_id=e),clearable:"",placeholder:"请选择职位"},{default:n((()=>[s(I,{label:"程序员",value:1}),s(I,{label:"设计师",value:2}),s(I,{label:"人事",value:3})])),_:1},8,["modelValue"])])),_:1})),[[E,"supplay.department_job.browse"]])])),_:1}),s(w,{span:12},{default:n((()=>[f((u(),b(V,{label:"角色"},{default:n((()=>[s(L,{modelValue:c.search.role_id,"onUpdate:modelValue":a[3]||(a[3]=e=>c.search.role_id=e),clearable:"",placeholder:"请选择角色"},{default:n((()=>[s(I,{label:"主管",value:1}),s(I,{label:"普通职员",value:2})])),_:1},8,["modelValue"])])),_:1})),[[E,"supplay.role.browse"]])])),_:1})])),_:1}),f(s(C,null,{default:n((()=>[s(w,{span:24},{default:n((()=>[s(V,{label:"角色"},{default:n((()=>[s(P,{value:!0},{default:n((()=>[x])),_:1}),s(P,{value:!1},{default:n((()=>[j])),_:1})])),_:1})])),_:1})])),_:1},512),[[h,c.searchMore]]),s(V,null,{default:n((()=>[s(S,{type:"primary",icon:"el-icon-search"},{default:n((()=>[U])),_:1}),s(S,null,{default:n((()=>[g])),_:1}),s(S,{type:"text"},{default:n((()=>[k])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),s(D,{title:"默认展开"},{default:n((()=>[s(A,{"show-more":"",unfold:"",onToggle:a[11]||(a[11]=e=>c.searchMore2=e)},{default:n((()=>[s(q,{model:c.search,size:"default","label-width":"120px"},{default:n((()=>[s(C,null,{default:n((()=>[s(w,{span:18},{default:n((()=>[s(V,{label:"姓名 / 手机号"},{default:n((()=>[s(v,{modelValue:c.search.name,"onUpdate:modelValue":a[5]||(a[5]=e=>c.search.name=e),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(C,null,{default:n((()=>[s(w,{span:12},{default:n((()=>[f((u(),b(V,{label:"部门"},{default:n((()=>[s(L,{modelValue:c.search.department_id,"onUpdate:modelValue":a[6]||(a[6]=e=>c.search.department_id=e),clearable:"",placeholder:"请选择部门"},{default:n((()=>[s(I,{label:"技术部",value:1}),s(I,{label:"设计部",value:2}),s(I,{label:"行政部",value:3})])),_:1},8,["modelValue"])])),_:1})),[[E,"supplay.department.browse"]])])),_:1}),s(w,{span:12},{default:n((()=>[f((u(),b(V,{label:"职位"},{default:n((()=>[s(L,{modelValue:c.search.department_job_id,"onUpdate:modelValue":a[7]||(a[7]=e=>c.search.department_job_id=e),clearable:"",placeholder:"请选择职位"},{default:n((()=>[s(I,{label:"程序员",value:1}),s(I,{label:"设计师",value:2}),s(I,{label:"人事",value:3})])),_:1},8,["modelValue"])])),_:1})),[[E,"supplay.department_job.browse"]])])),_:1}),s(w,{span:12},{default:n((()=>[f((u(),b(V,{label:"角色"},{default:n((()=>[s(L,{modelValue:c.search.role_id,"onUpdate:modelValue":a[8]||(a[8]=e=>c.search.role_id=e),clearable:"",placeholder:"请选择角色"},{default:n((()=>[s(I,{label:"主管",value:1}),s(I,{label:"普通职员",value:2})])),_:1},8,["modelValue"])])),_:1})),[[E,"supplay.role.browse"]])])),_:1})])),_:1}),f(s(C,null,{default:n((()=>[s(w,{span:24},{default:n((()=>[s(V,{label:"角色"},{default:n((()=>[s(P,{modelValue:c.search.check1,"onUpdate:modelValue":a[9]||(a[9]=e=>c.search.check1=e)},{default:n((()=>[M])),_:1},8,["modelValue"]),s(P,{modelValue:c.search.check2,"onUpdate:modelValue":a[10]||(a[10]=e=>c.search.check2=e)},{default:n((()=>[z])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[h,c.searchMore2]]),s(V,null,{default:n((()=>[s(S,{type:"primary",icon:"el-icon-search"},{default:n((()=>[B])),_:1}),s(S,null,{default:n((()=>[T])),_:1}),s(S,{type:"text"},{default:n((()=>[$])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])}]]);export{C as default};
