import{r as e,c as t,a as n,b as a,w as s,F as i,d,e as o,o as r}from"./app.9ae672c6.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";const l={},p=n("h1",{id:"代码规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码规范","aria-hidden":"true"},"#"),d(" 代码规范")],-1),u=n("h2",{id:"ide-编辑器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ide-编辑器","aria-hidden":"true"},"#"),d(" IDE 编辑器")],-1),h={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"TIP",-1),f=d("请确保已阅读《"),x=d("准备工作 - 开发环境"),v=d("》，并且按照文档说明安装好相关软件及扩展。"),y=d("为保证代码风格统一，请使用 "),b={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},m=d("Visual Studio Code"),k=d(" 做为开发 IDE ，框架源码里已提供相关配置文件，可直接测试效果：在保存代码时，会自动对当前文件进行代码格式化操作。"),E=n("h2",{id:"husky-lint-staged",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#husky-lint-staged","aria-hidden":"true"},"#"),d(" husky & lint-staged")],-1),_=d("由于 IDE 能做的事比较有限，只能对代码的书写规范进行格式化，对于一些无法自动修复的错误代码，如果没有改正到就被推送到 git 仓库，在多人协作开发时，可能会影响到别人的开发体验。所以框架集成了 "),j={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},I=d("husky"),C=d(" 和 "),D={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},L=d("lint-staged"),S=d(" 这两个依赖来解决这一问题。"),w=o('<p>在提交代码时，husky 会通过 lint-staged 对 <code>/src</code> 目录下的 js vue scss 文件进行分别进行 eslint 和 stylelint 检测，如果有报错，则会阻止本次代码提交，直到开发者修改完所有错误代码后，才允许提交到 git 仓库，这样可以确保 git 仓库里的代码不会有语法错误。</p><div class="custom-container tip"><p class="custom-container-title">更多</p><p>可通过修改 <code>.eslintignore</code> 和 <code>.stylelintignore</code> 忽略无需做代码规范校验的文件，例如在项目中导入了一些第三方的插件或组件，我们就可以将其进行忽略。</p></div><h2 id="配置代码规范" tabindex="-1"><a class="header-anchor" href="#配置代码规范" aria-hidden="true">#</a> 配置代码规范</h2><p>配置文件主要有 3 处，分别为 IDE 配置（<code>.editorconfig</code>）、ESLint 配置（<code>.eslintrc.js</code> 和 <code>.eslintignore</code>）、StyleLint 配置（<code>.stylelintrc</code> 和 <code>.stylelintignore</code>）。</p><p>以代码缩进举例，框架默认是以 4 空格进行缩进，如果要调整为 2 空格，则需要在 <code>.editorconfig</code> 里修改：</p><div class="language-text ext-text"><pre class="language-text"><code>indent_size = 2\n</code></pre></div><p>在 <code>.eslintrc.js</code> 里修改：</p><div class="language-text ext-text"><pre class="language-text"><code>&#39;indent&#39;: [2, 2, {\n    &#39;SwitchCase&#39;: 1\n}],\n\n...\n\n&#39;vue/html-indent&#39;: [2, 2],\n\n...\n\n&#39;vue/script-indent&#39;: [2, 2, {\n    &#39;switchCase&#39;: 1\n}]\n</code></pre></div><p>在 <code>.stylelintrc</code> 里修改：</p><div class="language-text ext-text"><pre class="language-text"><code>&quot;indentation&quot;: 2\n</code></pre></div><p>修改完毕后，再分别执行下面两句命令：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run lint:eslint\n<span class="token function">pnpm</span> run lint:stylelint\n</code></pre></div><p>该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。以上面的例子，当缩进规则调整后，我们无需手动去每个文件调整，通过命令可以自动应用新的缩进规则。</p><h2 id="关闭代码规范校验" tabindex="-1"><a class="header-anchor" href="#关闭代码规范校验" aria-hidden="true">#</a> 关闭代码规范校验</h2><p>注重代码规范是一个程序员的职业基本素养，并且当多人协助开发时，它是保证代码一致性的最佳手段。</p><p>如果执意想关闭代码规范校验，可将 <code>src/</code> 目录分别加入 <code>.eslintignore</code> 和 <code>.stylelintignore</code> 进行忽略即可。</p>',16);var F=c(l,[["render",function(d,o){const c=e("RouterLink"),l=e("OutboundLink");return r(),t(i,null,[p,u,n("div",h,[g,n("p",null,[f,a(c,{to:"/guide/ready.html#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83"},{default:s((()=>[x])),_:1}),v])]),n("p",null,[y,n("a",b,[m,a(l)]),k]),E,n("p",null,[_,n("a",j,[I,a(l)]),C,n("a",D,[L,a(l)]),S]),w],64)}]]);export{F as default};
