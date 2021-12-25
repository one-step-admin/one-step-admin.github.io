import{r as a,c as s,a as n,b as e,F as p,d as l,e as t,o as r}from"./app.ef7340bf.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";const o={},i=n("h1",{id:"布局",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#布局","aria-hidden":"true"},"#"),l(" 布局")],-1),u=n("p",null,[l("通过 5 种导航栏模式和 6 款主题，"),n("strong",null,"可实现 30 种界面风格"),l("。")],-1),d=n("h2",{id:"导航栏模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导航栏模式","aria-hidden":"true"},"#"),l(" 导航栏模式")],-1),h=n("p",null,"在框架配置里进行设置，可实现 5 种导航栏模式：",-1),b=n("li",null,"顶部模式",-1),m=n("li",null,"侧边栏模式（含主导航）",-1),g=n("li",null,"侧边栏模式（无主导航）",-1),k=l("侧边栏精简模式 "),v=l("顶部精简模式 "),x=n("h3",{id:"顶部模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#顶部模式","aria-hidden":"true"},"#"),l(" 顶部模式")],-1),y=["src"],j=t('<div class="language-javascript ext-js"><pre class="language-javascript"><code>menuMode<span class="token operator">:</span> <span class="token string">&#39;head&#39;</span>\n</code></pre></div><h3 id="侧边栏模式-含主导航" tabindex="-1"><a class="header-anchor" href="#侧边栏模式-含主导航" aria-hidden="true">#</a> 侧边栏模式（含主导航）</h3>',2),f=["src"],w=t('<div class="language-javascript ext-js"><pre class="language-javascript"><code>menuMode<span class="token operator">:</span> <span class="token string">&#39;side&#39;</span>\n</code></pre></div><h3 id="侧边栏模式-无主导航" tabindex="-1"><a class="header-anchor" href="#侧边栏模式-无主导航" aria-hidden="true">#</a> 侧边栏模式（无主导航）</h3>',2),$=["src"],B=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[l("menuMode"),n("span",{class:"token operator"},":"),l(),n("span",{class:"token string"},"'single'"),l("\n")])])],-1),M={id:"侧边栏精简模式",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#侧边栏精简模式","aria-hidden":"true"},"#",-1),F=l(" 侧边栏精简模式 "),L=["src"],q=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[l("menuMode"),n("span",{class:"token operator"},":"),l(),n("span",{class:"token string"},"'only-side'"),l("\n")])])],-1),z={id:"顶部精简模式",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#顶部精简模式","aria-hidden":"true"},"#",-1),C=l(" 顶部精简模式 "),D=["src"],E=t('<div class="language-javascript ext-js"><pre class="language-javascript"><code>menuMode<span class="token operator">:</span> <span class="token string">&#39;only-head&#39;</span>\n</code></pre></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>布局相关的部分宽高变量存放在 <code>/src/assets/styles/resources/layout.scss</code> 文件中。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 全局变量</span>\n\n<span class="token comment">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span>\n<span class="token property"><span class="token variable">$g-header-width</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token comment">// 头部高度</span>\n<span class="token property"><span class="token variable">$g-header-height</span></span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>\n<span class="token comment">// 侧边栏宽度</span>\n<span class="token property"><span class="token variable">$g-main-sidebar-width</span></span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$g-sub-sidebar-width</span></span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>\n<span class="token comment">// 侧边栏Logo高度</span>\n<span class="token property"><span class="token variable">$g-sidebar-logo-height</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n<span class="token comment">// 顶部导航栏高度</span>\n<span class="token property"><span class="token variable">$g-topbar-height</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n\n<span class="token comment">// 窗口预览缩放系数</span>\n<span class="token property"><span class="token variable">$g-window-perview-scale</span></span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>\n<span class="token comment">// 窗口内边距</span>\n<span class="token property"><span class="token variable">$g-window-container-padding</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',4);var G=c(o,[["render",function(l,t){const c=a("Badge");return r(),s(p,null,[i,u,d,h,n("ul",null,[b,m,g,n("li",null,[k,e(c,{type:"tip",text:"专业版",vertical:"top"})]),n("li",null,[v,e(c,{type:"tip",text:"专业版",vertical:"top"})])]),x,n("p",null,[n("img",{src:l.$withBase("/menu-mode-head.png")},null,8,y)]),j,n("p",null,[n("img",{src:l.$withBase("/menu-mode-side.png")},null,8,f)]),w,n("p",null,[n("img",{src:l.$withBase("/menu-mode-single.png")},null,8,$)]),B,n("h3",M,[_,F,e(c,{type:"tip",text:"专业版",vertical:"top"})]),n("p",null,[n("img",{src:l.$withBase("/menu-mode-only-side.png")},null,8,L)]),q,n("h3",z,[A,C,e(c,{type:"tip",text:"专业版",vertical:"top"})]),n("p",null,[n("img",{src:l.$withBase("/menu-mode-only-head.png")},null,8,D)]),E],64)}]]);export{G as default};