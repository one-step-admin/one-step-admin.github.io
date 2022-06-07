
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.15becada.js";import{_ as n,b_ as t,b$ as s,z as o,c as a,b as i,w as l,n as d,e as u,y as c}from"./index.0a5e3bc2.js";import{E as f}from"./el-button.2fada245.js";/* empty css                */import"./index.5fef9d7d.js";import"./index2.f37a6952.js";import"./index2.2a4e9295.js";import"./index2.fa2fe4ab.js";const r={methods:{debounce:t((function(){this.message()}),1e3),debounce2:t((function(){this.message()}),1e3,!1),throttle:s((function(){this.message()}),1e3),message(){o.success({message:"恭喜你，这是一条成功消息"})}}},m=u("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),b=c("连续点击我，只会执行最后一次点击事件，立即执行"),p=c("连续点击我，只会执行最后一次点击事件，延后执行"),j=u("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),_=c("连续点击我，每一秒只会执行一次点击事件");var h=n(r,[["render",function(n,t,s,o,c,r){const h=f,x=e;return d(),a("div",null,[i(x,{title:"防抖：debounce"},{default:l((()=>[m,u("p",null,[i(h,{onClick:r.debounce},{default:l((()=>[b])),_:1},8,["onClick"])]),u("p",null,[i(h,{onClick:r.debounce2},{default:l((()=>[p])),_:1},8,["onClick"])])])),_:1}),i(x,{title:"节流：throttle"},{default:l((()=>[j,u("p",null,[i(h,{onClick:r.throttle},{default:l((()=>[_])),_:1},8,["onClick"])])])),_:1})])}]]);export{h as default};
