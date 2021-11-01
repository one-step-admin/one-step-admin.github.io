
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{c as A}from"./index.c0f98470.js";import{o as u,G as d,X as k,r as _,l as s,j as e,H as t,O as B,I as p,R as o}from"./vendor.e2abc40b.js";import{_ as y}from"./index.2a27b371.js";import{_ as N}from"./index.b92ebba1.js";import{_ as D}from"./plugin-vue_export-helper.5a098b48.js";const C={props:{value:{type:Array,default:()=>[]}},setup(i){const n=i;function g(){return A(n.value)}return(m,h)=>(u(),d("div",null,[g()?k(m.$slots,"default",{key:0}):k(m.$slots,"no-auth",{key:1})]))}},S={data(){return{account:this.$store.state.user.account}},methods:{accountChange(i){this.$loading({lock:!0,text:"\u5E10\u53F7\u5207\u6362\u4E2D",background:"rgba(0, 0, 0, 0.7)"}),this.$store.dispatch("user/login",{account:i,password:""}).then(()=>{setTimeout(()=>{location.reload()},1e3)})},permissionCheck(i){this.$auth(i)?this.$message.success("\u6821\u9A8C\u901A\u8FC7"):this.$message.error("\u6821\u9A8C\u4E0D\u901A\u8FC7")},permissionCheck2(i){this.$authAll(i)?this.$message.success("\u6821\u9A8C\u901A\u8FC7"):this.$message.error("\u6821\u9A8C\u4E0D\u901A\u8FC7")}}},T={key:0},E={key:1},G=t("h3",null,"\u5207\u6362\u5E10\u53F7",-1),H=t("h3",null,"\u5E10\u53F7\u6743\u9650",-1),I=t("h3",null,"\u9274\u6743\u7EC4\u4EF6\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),O=o("\u4F60\u6709 permission.browse \u6743\u9650"),P=o("\u4F60\u6CA1\u6709 permission.browse \u6743\u9650"),R=o("\u4F60\u6709 permission.create \u6743\u9650"),U=o("\u4F60\u6CA1\u6709 permission.create \u6743\u9650"),X=o("\u4F60\u6709 permission.browse \u6216 permission.create \u6743\u9650"),q=o("\u4F60\u6CA1\u6709 permission.browse \u6216 permission.create \u6743\u9650"),z=o("\u4F60\u6709 permission.browse \u548C permission.create \u6743\u9650"),F=o("\u4F60\u6CA1\u6709 permission.browse \u548C permission.create \u6743\u9650"),J=t("h3",null,"\u9274\u6743\u6307\u4EE4\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),K=o(" \u5982\u679C\u4F60\u6709 permission.browse \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),L=[K],M=o(" \u5982\u679C\u4F60\u6709 permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),Q=[M],W=o(" \u5982\u679C\u4F60\u6709 permission.browse \u6216 permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),Y=[W],Z=o(" \u5982\u679C\u4F60\u6709 permission.browse \u548C permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),ee=[Z],se=t("h3",null,"\u9274\u6743\u51FD\u6570\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),oe=o("\u6821\u9A8C permission.browse \u6743\u9650"),te=o("\u6821\u9A8C permission.create \u6743\u9650"),ne=o("\u6821\u9A8C permission.browse \u6216 permission.create \u6743\u9650"),ie=o("\u6821\u9A8C permission.browse \u548C permission.create \u6743\u9650");function re(i,n,g,m,h,a){const v=_("el-radio-button"),$=_("el-radio-group"),r=_("el-tag"),b=y,x=C,c=_("el-button"),w=_("el-button-group"),j=N,f=y,V=C;return u(),d("div",null,[s(j,null,{default:e(()=>[i.$store.state.settings.enablePermission?(u(),d("div",E,[G,s($,{modelValue:h.account,"onUpdate:modelValue":n[0]||(n[0]=l=>h.account=l),onChange:a.accountChange},{default:e(()=>[s(v,{label:"admin"}),s(v,{label:"test"})]),_:1},8,["modelValue","onChange"]),H,t("div",null,B(i.$store.state.user.permissions),1),I,t("div",null,[s(b,{value:"permission.browse",style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(r,{type:"danger"},{default:e(()=>[P]),_:1})]),default:e(()=>[s(r,null,{default:e(()=>[O]),_:1})]),_:1}),s(b,{value:"permission.create",style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(r,{type:"danger"},{default:e(()=>[U]),_:1})]),default:e(()=>[s(r,null,{default:e(()=>[R]),_:1})]),_:1}),s(b,{value:["permission.browse","permission.create"],style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(r,{type:"danger"},{default:e(()=>[q]),_:1})]),default:e(()=>[s(r,null,{default:e(()=>[X]),_:1})]),_:1},8,["value"]),s(x,{value:["permission.browse","permission.create"]},{"no-auth":e(()=>[s(r,{type:"danger"},{default:e(()=>[F]),_:1})]),default:e(()=>[s(r,null,{default:e(()=>[z]),_:1})]),_:1},8,["value"])]),J,t("div",null,[p(t("div",null,L,512),[[f,"permission.browse"]]),p(t("div",null,Q,512),[[f,"permission.create"]]),p(t("div",null,Y,512),[[f,["permission.browse","permission.create"]]]),p(t("div",null,ee,512),[[V,["permission.browse","permission.create"]]])]),se,t("div",null,[s(w,{style:{display:"block","margin-bottom":"10px"}},{default:e(()=>[s(c,{onClick:n[1]||(n[1]=l=>a.permissionCheck("permission.browse"))},{default:e(()=>[oe]),_:1}),s(c,{onClick:n[2]||(n[2]=l=>a.permissionCheck("permission.create"))},{default:e(()=>[te]),_:1})]),_:1}),s(w,null,{default:e(()=>[s(c,{onClick:n[3]||(n[3]=l=>a.permissionCheck(["permission.browse","permission.create"]))},{default:e(()=>[ne]),_:1}),s(c,{onClick:n[4]||(n[4]=l=>a.permissionCheck2(["permission.browse","permission.create"]))},{default:e(()=>[ie]),_:1})]),_:1})])])):(u(),d("div",T,"\u8BF7\u5230 seeting.js \u91CC\u6253\u5F00\u6743\u9650\u529F\u80FD\uFF0C\u518D\u8FDB\u5165\u8BE5\u9875\u9762\u67E5\u770B\u6F14\u793A"))]),_:1})])}var de=D(S,[["render",re]]);export{de as default};
