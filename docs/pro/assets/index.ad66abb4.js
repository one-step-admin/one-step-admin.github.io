
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.d92f6c0c.js";import{_ as t,i as s,t as n}from"./index.091d1180.js";import{k as l,A as o,x as a,z as u,o as i,l as c,$ as d}from"./vendor.b0dde714.js";const r={methods:{debounce:s((function(){this.message()}),1e3),debounce2:s((function(){this.message()}),1e3,!1),throttle:n((function(){this.message()}),1e3),message(){this.$message.success({message:"恭喜你，这是一条成功消息"})}}},f=c("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),m=d("连续点击我，只会执行最后一次点击事件，立即执行"),p=d("连续点击我，只会执行最后一次点击事件，延后执行"),h=c("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),b=d("连续点击我，每一秒只会执行一次点击事件");var k=t(r,[["render",function(t,s,n,d,r,k){const _=u("el-button"),g=e;return i(),l("div",null,[o(g,{title:"防抖：debounce"},{default:a((()=>[f,c("p",null,[o(_,{onClick:k.debounce},{default:a((()=>[m])),_:1},8,["onClick"])]),c("p",null,[o(_,{onClick:k.debounce2},{default:a((()=>[p])),_:1},8,["onClick"])])])),_:1}),o(g,{title:"节流：throttle"},{default:a((()=>[h,c("p",null,[o(_,{onClick:k.throttle},{default:a((()=>[b])),_:1},8,["onClick"])])])),_:1})])}]]);export{k as default};
