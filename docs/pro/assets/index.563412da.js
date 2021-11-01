
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as A}from"./index.b92ebba1.js";import{_ as C}from"./index.a4d9ae54.js";import{a2 as h,h as E,r as d,G as g,l as o,j as n,o as c,k as p,R as v,O as z,V as U,U as y,i as B}from"./vendor.e2abc40b.js";import"./plugin-vue_export-helper.5a098b48.js";const F={setup(R){const m=h([{name:"\u7AD9\u70B9\u7BA1\u7406",module:"station",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u505C\u7528",module:"disabled"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u542F\u7528",module:"enable"}]},{name:"\u90E8\u95E8\u7BA1\u7406",module:"department",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u5220\u9664",module:"delete"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u65B0\u589E",module:"new"}]},{name:"\u804C\u4F4D\u7BA1\u7406",module:"department_job",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u65B0\u589E",module:"new"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u5220\u9664",module:"delete"}]},{name:"\u89D2\u8272\u7BA1\u7406",module:"role",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u5220\u9664",module:"delete"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u65B0\u589E",module:"new"}]},{name:"\u7BA1\u7406\u5458\u7BA1\u7406",module:"admin_manager",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u7F16\u8F91\u6743\u9650",module:"authorization_edit"},{name:"\u67E5\u770B\u6743\u9650\u8BE6\u60C5",module:"authorization_info"},{name:"\u5220\u9664",module:"delete"},{name:"\u505C\u7528",module:"disabled"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u542F\u7528",module:"enable"},{name:"\u65B0\u589E",module:"new"},{name:"\u91CD\u7F6E\u5BC6\u7801",module:"reset"}]}]),t=h({name:"",brief:"",authorization_list:[]}),$=h({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"}],authorization_list:[{validator:(r,e,l)=>{e.length==0?l(new Error("\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6743\u9650")):l()},trigger:"change"}]}),s=E(()=>{let r=[];return m.value.forEach(e=>{let l=[];e.authorization_list.forEach(i=>{t.value.authorization_list.includes(`${e.module}.${i.module}`)&&l.push(`${e.module}.${i.module}`)}),r.push({checkAll:l.length==e.authorization_list.length,indeterminate:l.length>0&&l.length<e.authorization_list.length})}),r});function V(r,e){r?m.value[e].authorization_list.forEach(l=>{t.value.authorization_list.includes(`${m.value[e].module}.${l.module}`)||t.value.authorization_list.push(`${m.value[e].module}.${l.module}`)}):m.value[e].authorization_list.forEach(l=>{t.value.authorization_list=t.value.authorization_list.filter(i=>i!=`${m.value[e].module}.${l.module}`)})}return(r,e)=>{const l=C,i=d("el-input"),_=d("el-form-item"),f=d("el-checkbox"),b=d("el-table-column"),w=d("el-checkbox-group"),x=d("el-table"),k=d("el-form"),j=A;return c(),g("div",null,[o(l,{title:"\u6743\u9650",content:"\u8BE5\u9875\u9762\u751F\u6210\u7684\u6743\u9650\u683C\u5F0F\uFF0C\u53EF\u76F4\u63A5\u7528\u4E8E\u672C\u9879\u76EE\u7684\u6743\u9650\u6A21\u5F0F"}),o(j,null,{default:n(()=>[o(k,{model:t.value,rules:$.value,"label-width":"80px","label-suffix":"\uFF1A"},{default:n(()=>[o(_,{label:"\u540D\u79F0",prop:"name"},{default:n(()=>[o(i,{modelValue:t.value.name,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value.name=a),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(_,{label:"\u7B80\u4ECB"},{default:n(()=>[o(i,{modelValue:t.value.brief,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value.brief=a),type:"textarea",autosize:{minRows:2,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7B80\u4ECB"},null,8,["modelValue"])]),_:1}),o(_,{label:"\u6743\u9650",prop:"authorization_list"},{default:n(()=>[o(x,{data:m.value,border:"",stripe:"","highlight-current-row":"",style:{"line-height":"normal"}},{default:n(()=>[o(b,{prop:"name",width:"200",label:"\u6A21\u5757"},{default:n(a=>[o(f,{modelValue:p(s)[a.$index].checkAll,"onUpdate:modelValue":u=>p(s)[a.$index].checkAll=u,indeterminate:p(s)[a.$index].indeterminate,onChange:u=>V(u,a.$index)},{default:n(()=>[v(z(a.row.name),1)]),_:2},1032,["modelValue","onUpdate:modelValue","indeterminate","onChange"])]),_:1}),o(b,{label:"\u6743\u9650"},{default:n(a=>[o(w,{modelValue:t.value.authorization_list,"onUpdate:modelValue":e[2]||(e[2]=u=>t.value.authorization_list=u)},{default:n(()=>[(c(!0),g(U,null,y(a.row.authorization_list,u=>(c(),B(f,{key:`${a.row.module}.${u.module}`,label:`${a.row.module}.${u.module}`},{default:n(()=>[v(z(u.name),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}};export{F as default};
