
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.e4264495.js";import{_ as t,bW as n,bX as s,A as o,c as l,g as i,w as a,o as u,a as c,y as d}from"./index.b046d3e8.js";import{E as r}from"./el-button.12f8eb95.js";/* empty css                */import"./index.2b0c4341.js";import"./index.16ef6f7e.js";const f={methods:{debounce:n((function(){this.message()}),1e3),debounce2:n((function(){this.message()}),1e3,!1),throttle:s((function(){this.message()}),1e3),message(){o.success({message:"恭喜你，这是一条成功消息"})}}},m=c("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),b=d("连续点击我，只会执行最后一次点击事件，立即执行"),p=d("连续点击我，只会执行最后一次点击事件，延后执行"),h=c("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),_=d("连续点击我，每一秒只会执行一次点击事件");var g=t(f,[["render",function(t,n,s,o,d,f){const g=r,j=e;return u(),l("div",null,[i(j,{title:"防抖：debounce"},{default:a((()=>[m,c("p",null,[i(g,{onClick:f.debounce},{default:a((()=>[b])),_:1},8,["onClick"])]),c("p",null,[i(g,{onClick:f.debounce2},{default:a((()=>[p])),_:1},8,["onClick"])])])),_:1}),i(j,{title:"节流：throttle"},{default:a((()=>[h,c("p",null,[i(g,{onClick:f.throttle},{default:a((()=>[_])),_:1},8,["onClick"])])])),_:1})])}]]);export{g as default};
