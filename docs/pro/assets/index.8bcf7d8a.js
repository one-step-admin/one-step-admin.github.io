
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";import{a2 as x,a8 as b,r,al as h,I as $,o as y,G as I,l as s,j as i,m as U}from"./vendor.e2abc40b.js";const V={props:{id:{type:[Number,String],default:""}},setup(m,{expose:n}){const u=m,{proxy:t}=U(),e=x({loading:!1,form:{id:u.id,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}]}});b(()=>{e.value.form.id!=""&&d()});function d(){e.value.loading=!0,t.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(a=>{e.value.loading=!1,e.value.form.title=a.data.title})}return n({submit(a){e.value.form.id==""?t.$refs.form.validate(o=>{o&&t.$api.post("pages_example/form_mode/create",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),a&&a()})}):t.$refs.form.validate(o=>{o&&t.$api.post("pages_example/form_mode/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),a&&a()})})}}),(a,o)=>{const f=r("el-input"),p=r("el-form-item"),_=r("el-form"),c=h("loading");return $((y(),I("div",null,[s(_,{ref:(l,v)=>{v.form=l},model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:i(()=>[s(p,{label:"\u6807\u9898",prop:"title"},{default:i(()=>[s(f,{modelValue:e.value.form.title,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value.form.title=l),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])],512)),[[c,e.value.loading]])}}};var C=g(V,[["__scopeId","data-v-765814a8"]]);export{C as default};