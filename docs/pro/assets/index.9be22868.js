
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.84a18d1d.js";import{_ as n,ac as s,ad as t,c as l,b as a,w as o,m as u,n as c,e as i,y as d}from"./index.93ad63e3.js";const r={methods:{debounce:s((function(){this.message()}),1e3),debounce2:s((function(){this.message()}),1e3,!1),throttle:t((function(){this.message()}),1e3),message(){this.$message.success({message:"恭喜你，这是一条成功消息"})}}},f=i("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),m=d("连续点击我，只会执行最后一次点击事件，立即执行"),h=d("连续点击我，只会执行最后一次点击事件，延后执行"),p=i("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),b=d("连续点击我，每一秒只会执行一次点击事件");var _=n(r,[["render",function(n,s,t,d,r,_){const g=u("el-button"),k=e;return c(),l("div",null,[a(k,{title:"防抖：debounce"},{default:o((()=>[f,i("p",null,[a(g,{onClick:_.debounce},{default:o((()=>[m])),_:1},8,["onClick"])]),i("p",null,[a(g,{onClick:_.debounce2},{default:o((()=>[h])),_:1},8,["onClick"])])])),_:1}),a(k,{title:"节流：throttle"},{default:o((()=>[p,i("p",null,[a(g,{onClick:_.throttle},{default:o((()=>[b])),_:1},8,["onClick"])])])),_:1})])}]]);export{_ as default};
