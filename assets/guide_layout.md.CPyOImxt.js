import{_ as e,C as p,c as h,o as k,j as i,a4 as l,a,G as n}from"./chunks/framework.D-zNm3Tp.js";const d="/menu-mode-head.png",g="/menu-mode-side.png",r="/menu-mode-single.png",E="/menu-mode-only-side.png",o="/menu-mode-only-head.png",y="/menu-mode-side-panel.png",m="/menu-mode-head-panel.png",_=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[],"relativePath":"guide/layout.md","filePath":"guide/layout.md"}'),u={name:"guide/layout.md"},F={id:"侧边栏精简模式",tabindex:"-1"},b={id:"顶部精简模式",tabindex:"-1"},C={id:"侧边栏面板模式",tabindex:"-1"},v={id:"顶部面板模式",tabindex:"-1"};function A(x,s,B,D,c,S){const t=p("Badge");return k(),h("div",null,[s[23]||(s[23]=i("h1",{id:"布局",tabindex:"-1"},[a("布局 "),i("a",{class:"header-anchor",href:"#布局","aria-label":'Permalink to "布局"'},"​")],-1)),s[24]||(s[24]=i("p",null,[a("通过 7 种导航栏模式和 4 种页宽模式的组合搭配，可实现 28 种布局结构，再搭配默认提供的 6 款主题，"),i("strong",null,"即可实现上百种界面风格"),a("。")],-1)),s[25]||(s[25]=i("h2",{id:"导航栏模式",tabindex:"-1"},[a("导航栏模式 "),i("a",{class:"header-anchor",href:"#导航栏模式","aria-label":'Permalink to "导航栏模式"'},"​")],-1)),s[26]||(s[26]=i("p",null,"在应用配置里进行设置，可实现 7 种导航栏模式：",-1)),i("ul",null,[s[6]||(s[6]=i("li",null,"顶部模式",-1)),s[7]||(s[7]=i("li",null,"侧边栏模式（含主导航）",-1)),s[8]||(s[8]=i("li",null,"侧边栏模式（无主导航）",-1)),i("li",null,[s[0]||(s[0]=a("侧边栏精简模式 ")),n(t,{type:"pro",text:"专业版"})]),i("li",null,[s[1]||(s[1]=a("顶部精简模式 ")),n(t,{type:"pro",text:"专业版"})]),i("li",null,[s[2]||(s[2]=a("侧边栏面板模式 ")),n(t,{type:"pro",text:"专业版"}),s[3]||(s[3]=a()),n(t,{type:"tip",text:"v4.5.0 新增"})]),i("li",null,[s[4]||(s[4]=a("顶部面板模式 ")),n(t,{type:"pro",text:"专业版"}),s[5]||(s[5]=a()),n(t,{type:"tip",text:"v4.5.0 新增"})])]),s[27]||(s[27]=l('<h3 id="顶部模式" tabindex="-1">顶部模式 <a class="header-anchor" href="#顶部模式" aria-label="Permalink to &quot;顶部模式&quot;">​</a></h3><p><img src="'+d+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;head&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.5.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="侧边栏模式-含主导航" tabindex="-1">侧边栏模式（含主导航） <a class="header-anchor" href="#侧边栏模式-含主导航" aria-label="Permalink to &quot;侧边栏模式（含主导航）&quot;">​</a></h3><p><img src="`+g+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;side&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.5.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="侧边栏模式-无主导航" tabindex="-1">侧边栏模式（无主导航） <a class="header-anchor" href="#侧边栏模式-无主导航" aria-label="Permalink to &quot;侧边栏模式（无主导航）&quot;">​</a></h3><p><img src="`+r+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;single&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.5.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9)),i("h3",F,[s[9]||(s[9]=a("侧边栏精简模式 ")),n(t,{type:"pro",text:"专业版"}),s[10]||(s[10]=a()),s[11]||(s[11]=i("a",{class:"header-anchor",href:"#侧边栏精简模式","aria-label":'Permalink to "侧边栏精简模式 <Badge type="pro" text="专业版" />"'},"​",-1))]),s[28]||(s[28]=l('<p><img src="'+E+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;only-side&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.5.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)),i("h3",b,[s[12]||(s[12]=a("顶部精简模式 ")),n(t,{type:"pro",text:"专业版"}),s[13]||(s[13]=a()),s[14]||(s[14]=i("a",{class:"header-anchor",href:"#顶部精简模式","aria-label":'Permalink to "顶部精简模式 <Badge type="pro" text="专业版" />"'},"​",-1))]),s[29]||(s[29]=l('<p><img src="'+o+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;only-head&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.5.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)),i("h3",C,[s[15]||(s[15]=a("侧边栏面板模式 ")),n(t,{type:"pro",text:"专业版"}),s[16]||(s[16]=a()),n(t,{type:"tip",text:"v4.5.0 新增"}),s[17]||(s[17]=a()),s[18]||(s[18]=i("a",{class:"header-anchor",href:"#侧边栏面板模式","aria-label":'Permalink to "侧边栏面板模式 <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.5.0 新增" />"'},"​",-1))]),s[30]||(s[30]=l('<p><img src="'+y+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;side-panel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)),i("h3",v,[s[19]||(s[19]=a("顶部面板模式 ")),n(t,{type:"pro",text:"专业版"}),s[20]||(s[20]=a()),n(t,{type:"tip",text:"v4.5.0 新增"}),s[21]||(s[21]=a()),s[22]||(s[22]=i("a",{class:"header-anchor",href:"#顶部面板模式","aria-label":'Permalink to "顶部面板模式 <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.5.0 新增" />"'},"​",-1))]),s[31]||(s[31]=l('<p><img src="'+m+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;head-panel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>布局相关的变量存放在 <code>/src/assets/styles/globals.css</code> 文件中（注意看注释），均为 CSS 变量。</p>`,4))])}const P=e(u,[["render",A]]);export{_ as __pageData,P as default};
