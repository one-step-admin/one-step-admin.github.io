# 更新日志

只记录 feat/fix 以及破坏性更新记录。

## 4.4.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.4.0)
🚀 Features

- 登录页增加扫码登录参考 &nbsp;-&nbsp; by @hooray [<samp>(bafaa)</samp>](https://github.com/one-step-admin/basic/commit/bafaa5d)

🐞 Bug Fixes

- 修复顶部导航鼠标滚动回弹 &nbsp;-&nbsp; by @hooray [<samp>(216ac)</samp>](https://github.com/one-step-admin/basic/commit/216ac32)
- 修复顶部导航数量过多，导致工具栏被遮挡 &nbsp;-&nbsp; by @hooray [<samp>(f49b6)</samp>](https://github.com/one-step-admin/basic/commit/f49b6c5)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.4.0)
🚨 Breaking Changes

- 移除导航`i18n`配置项，合并到`title`配置项内 &nbsp;-&nbsp; by @hooray [<samp>(1921b)</samp>](https://github.com/one-step-admin/pro/commit/1921b2a)

🚀 Features

- 登录页增加扫码登录参考 &nbsp;-&nbsp; by @hooray [<samp>(fc082)</samp>](https://github.com/one-step-admin/pro/commit/fc082a6)

🐞 Bug Fixes

- 修复顶部导航鼠标滚动回弹 &nbsp;-&nbsp; by @hooray [<samp>(1d900)</samp>](https://github.com/one-step-admin/pro/commit/1d90000)
- 修复顶部导航数量过多，导致工具栏被遮挡 &nbsp;-&nbsp; by @hooray [<samp>(4c70b)</samp>](https://github.com/one-step-admin/pro/commit/4c70bfc)
- 修复水印开启报错 &nbsp;-&nbsp; by @hooray [<samp>(33add)</samp>](https://github.com/one-step-admin/pro/commit/33add9c)
:::

## 4.3.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.3.0)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.3.0)
🚀 Features

- 提供 `$t` 函数,用于菜单 `i18n` 能在 VSCode I18n Ally 插件下正确显示 &nbsp;-&nbsp; by @hooray [<samp>(d8039)</samp>](https://github.com/one-step-admin/pro/commit/d803978)
- 工具栏部分按钮增加交互动效 &nbsp;-&nbsp; by @hooray [<samp>(8f597)</samp>](https://github.com/one-step-admin/pro/commit/8f597b2)
- 支持 RTL 模式 &nbsp;-&nbsp; by @hooray [<samp>(97483)</samp>](https://github.com/one-step-admin/pro/commit/9748302)

🐞 Bug Fixes

- 修复 mock 模板请求无响应数据 &nbsp;-&nbsp; by @hooray [<samp>(6c92d)</samp>](https://github.com/one-step-admin/pro/commit/6c92d4d)
:::

## 4.2.3

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.2.3)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.2.3)
无重大变化
:::

## 4.2.2

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.2.2)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.2.2)
无重大变化
:::

## 4.2.1

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.2.1)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.2.1)
🐞 Bug Fixes

- 修复 IconPicker 组件样式错乱 &nbsp;-&nbsp; by @hooray [<samp>(3bd3b)</samp>](https://github.com/one-step-admin/pro/commit/3bd3b0d)
:::

## 4.2.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.2.0)
🚀 Features

- 引入 unplugin-turbo-console 优化开发体验 &nbsp;-&nbsp; by @hooray [<samp>(43d09)</samp>](https://github.com/one-step-admin/basic/commit/43d0973)
- 增加打包后生成存档文件支持 &nbsp;-&nbsp; by @hooray [<samp>(66d9e)</samp>](https://github.com/one-step-admin/basic/commit/66d9e31)
- 增加图片支持，整站图标改用 unocss icon 方式使用，方便在内网环境使用 &nbsp;-&nbsp; by @hooray [<samp>(4bccd)</samp>](https://github.com/one-step-admin/basic/commit/4bccda4)
- 导航菜单收起时，无二级的一级导航增加 tooltip 展示 &nbsp;-&nbsp; by @hooray [<samp>(5e61c)</samp>](https://github.com/one-step-admin/basic/commit/5e61c84)
- 明暗模式设置为跟随系统时，支持动态切换 &nbsp;-&nbsp; by @hooray [<samp>(98792)</samp>](https://github.com/one-step-admin/basic/commit/98792c0)

🐞 Bug Fixes

- Mock 数据修复 &nbsp;-&nbsp; by @hooray [<samp>(fd2f6)</samp>](https://github.com/one-step-admin/basic/commit/fd2f6d5)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.2.0)
🚨 Breaking Changes

- 重构用户偏好模块，偏好设置可存放在 localStorage &nbsp;-&nbsp; by @hooray [<samp>(7a554)</samp>](https://github.com/one-step-admin/pro/commit/7a55430)
- 重构页面水印，支持动态更新 &nbsp;-&nbsp; by @hooray [<samp>(7cdc8)</samp>](https://github.com/one-step-admin/pro/commit/7cdc825)
- 移除内置 v-waves 指令，使用第三方 v-wave 插件 &nbsp;-&nbsp; by @hooray [<samp>(a7505)</samp>](https://github.com/one-step-admin/pro/commit/a750507)

🚀 Features

- 引入 unplugin-turbo-console 优化开发体验 &nbsp;-&nbsp; by @hooray [<samp>(f644e)</samp>](https://github.com/one-step-admin/pro/commit/f644e88)
- 增加打包后生成存档文件支持 &nbsp;-&nbsp; by @hooray [<samp>(2bb50)</samp>](https://github.com/one-step-admin/pro/commit/2bb506c)
- SvgIcon 增加图片支持，整站图标改用 unocss icon 方式使用，方便在内网环境使用 &nbsp;-&nbsp; by @hooray [<samp>(d5715)</samp>](https://github.com/one-step-admin/pro/commit/d571582)
- 导航菜单收起时，无二级的一级导航增加 tooltip 展示 &nbsp;-&nbsp; by @hooray [<samp>(95cf8)</samp>](https://github.com/one-step-admin/pro/commit/95cf89e)
- 明暗模式设置为跟随系统时，支持动态切换 &nbsp;-&nbsp; by @hooray [<samp>(c7bcb)</samp>](https://github.com/one-step-admin/pro/commit/c7bcb80)
- 增加 `v-zoomable` 图片预览指令 &nbsp;-&nbsp; by @hooray [<samp>(3d58e)</samp>](https://github.com/one-step-admin/pro/commit/3d58e48)

🐞 Bug Fixes

- Mock 数据修复 &nbsp;-&nbsp; by @hooray [<samp>(5c9ba)</samp>](https://github.com/one-step-admin/pro/commit/5c9ba02)
:::

## 4.1.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.1.0)
🚨 Breaking Changes

- Vite-plugin-fake-server 替换 vite-plugin-mock &nbsp;-&nbsp; by @hooray [<samp>(38039)</samp>](https://github.com/one-step-admin/basic/commit/380394c)
- 应用配置 `toolbar` 对象内属性调整 &nbsp;-&nbsp; by @hooray [<samp>(e2aaf)</samp>](https://github.com/one-step-admin/basic/commit/e2aaf24)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.1.0)
🚨 Breaking Changes

- Vite-plugin-fake-server 替换 vite-plugin-mock &nbsp;-&nbsp; by @hooray [<samp>(bdfa4)</samp>](https://github.com/one-step-admin/pro/commit/bdfa48d)
- 应用配置 `toolbar` 对象内属性调整 &nbsp;-&nbsp; by @hooray [<samp>(c2915)</samp>](https://github.com/one-step-admin/pro/commit/c2915b6)

🚀 Features

- 应用配置新增 `menu.subMenuAutoCollapse` ，支持次导航收起时，鼠标悬停临时展开 &nbsp;-&nbsp; by @hooray [<samp>(970ef)</samp>](https://github.com/one-step-admin/pro/commit/970eff7)
- 应用配置新增 `toolbar.layout` 属性，支持工具栏自定义布局 &nbsp;-&nbsp; by @hooray [<samp>(cc87f)</samp>](https://github.com/one-step-admin/pro/commit/cc87f70)
:::

## 4.0.1

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.0.1)
🐞 Bug Fixes

- 修复登录页 Copyright 组件未展示 &nbsp;-&nbsp; by @hooray [<samp>(0b03a)</samp>](https://github.com/one-step-admin/basic/commit/0b03a10)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.0.1)
🐞 Bug Fixes

- 修复登录页 Copyright 组件未展示 &nbsp;-&nbsp; by @hooray [<samp>(a808f)</samp>](https://github.com/one-step-admin/pro/commit/a808f6c)
:::

## 4.0.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v4.0.0)
🚨 Breaking Changes

- 启用新的 eslint 配置文件 &nbsp;-&nbsp; by @hooray [<samp>(5f9f1)</samp>](https://github.com/one-step-admin/basic/commit/5f9f1c7)
- 移除应用配置中 Element Plus 默认尺寸的配置项 &nbsp;-&nbsp; by @hooray [<samp>(dfc51)</samp>](https://github.com/one-step-admin/basic/commit/dfc5127)

🚀 Features

- 支持使用 Iconify 完整图标库 &nbsp;-&nbsp; by @hooray [<samp>(2d642)</samp>](https://github.com/one-step-admin/basic/commit/2d64215)
- 重构框架核心源码 &nbsp;-&nbsp; by @hooray [<samp>(874e3)</samp>](https://github.com/one-step-admin/basic/commit/874e3db)
- Eslint 增加 unocss 配置 &nbsp;-&nbsp; by @hooray [<samp>(dcbcc)</samp>](https://github.com/one-step-admin/basic/commit/dcbcc46)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v4.0.0)
🚨 Breaking Changes

- 启用新的 eslint 配置文件 &nbsp;-&nbsp; by @hooray [<samp>(66160)</samp>](https://github.com/one-step-admin/pro/commit/66160a5)
- 移除应用配置中 Element Plus 默认尺寸的配置项 &nbsp;-&nbsp; by @hooray [<samp>(6720a)</samp>](https://github.com/one-step-admin/pro/commit/6720a34)

🚀 Features

- 重构框架核心源码 &nbsp;-&nbsp; by @hooray [<samp>(215ef)</samp>](https://github.com/one-step-admin/pro/commit/215efcb)
- 全局搜索支持拼音 &nbsp;-&nbsp; by @hooray [<samp>(cbb68)</samp>](https://github.com/one-step-admin/pro/commit/cbb688f)
- Eslint 增加 unocss 配置 &nbsp;-&nbsp; by @hooray [<samp>(0b078)</samp>](https://github.com/one-step-admin/pro/commit/0b07896)

🐞 Bug Fixes

- 修复收藏夹默认存储位置错误 &nbsp;-&nbsp; by @hooray [<samp>(d2a2d)</samp>](https://github.com/one-step-admin/pro/commit/d2a2dc1)
:::

- 拥抱原子化 CSS ，启用 UnoCSS ，并对框架部分组件样式进行了重构

  > 如果你正在将老版本的业务代码向新版本迁移，推荐安装 [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 这个 VSCode 插件，它能高亮显示 UnoCSS 的代码。如果你的业务页面代码中定义的 class 和 UnoCSS 的 class 重名，也可以通过这个插件快速识别到并修改。

- 与 Element Plus 组件库解耦，方便替换成其他第三方 UI 组件库，详细可阅读：
  - 《[替换为 Ant Design Vue](/guide/replace-to-antd)》
  - 《[替换为 Arco Design Vue](/guide/replace-to-arco)》
  - 《[替换为 Naive UI](/guide/replace-to-naive)》
  - 《[替换为 TDesign](/guide/replace-to-tdesign)》
  - 《[替换为 Vexip UI](/guide/replace-to-vexip)》
  - 《[替换为 iDux](/guide/replace-to-idux)》

- ESLint 配置文件格式调整，详细可阅读《[代码规范 - ESLint 配置](/guide/coding-standard#eslint-配置)》

  > ESLint 提供了全新的配置方式，所有配置项将都在一个 `eslint.config.js` 文件中实现。

- 基础版现在可以使用 Iconify 完整图标库，详细可阅读《[图标 - Iconify 图标](/guide/svg-icon#iconify-图标)》

- 全新的主题配色方案，详细可阅读《[主题 - 框架主题](/guide/theme#框架主题)》

- 移除 Element Plus 自定义主题配置

  > 如果你依旧需要自定义 Element Plus 的主题，可以阅读 Element Plus 官方文档《[自定义主题](https://element-plus.gitee.io/zh-CN/guide/theming.html)》，或者参考下面提供的最佳实践。
  >
  > 在 `/src/assets/styles/` 目录下分别新建 `element-plus.scss` 和 `element-plus.dark.scss` 并写入下面的代码：
  >
  > ```scss
  > // element-plus.scss
  > @forward "element-plus/theme-chalk/src/common/var.scss" with (
  >   $colors: (
  >     "primary": (
  >       "base": green
  >     )
  >   )
  > );
  > @use "element-plus/theme-chalk/src/index.scss" as *;
  > @use "./element-plus.dark.scss" as *;
  > ```
  >
  > ```scss
  > // element-plus.dark.scss
  > @forward "element-plus/theme-chalk/src/dark/var.scss" with (
  >   $bg-color: (
  >     "page": #0a0a0a,
  >     "": #141414,
  >     "overlay": #1d1e1f,
  >   )
  > );
  > @use "element-plus/theme-chalk/src/dark/css-vars.scss" as *;
  > ```
  >
  > 修改 `/src/main.ts`
  > ```ts
  > ...
  > import ElementPlus from 'element-plus'
  > import 'element-plus/dist/index.css' // [!code --]
  > import 'element-plus/theme-chalk/dark/css-vars.css' // [!code --]
  > import '@/assets/styles/element-plus.scss' // [!code ++]
  > ...
  > ```

- 移除应用配置中 Element Plus 默认尺寸的配置项

  > 如果你依旧需要全局配置 Element Plus 的默认尺寸，可以参考《[Config Provider 全局配置](http://element-plus.org/zh-CN/component/config-provider.html)》并在 `/src/App.vue` 中进行修改。

- 移除精灵图支持

  > 原有 `/src/assets/sprites/` 目录中的图片，现在可以移动到 `/src/assets/images/` 目录中，并修改代码中的使用方式。

- 应用配置中导航栏填充风格的配置项名称变更 <Badge type="pro" text="专业版" />

  ```ts
  const globalSettings: Settings.all = {
    menu: {
      /** // [!code --]
      * 留空默认 // [!code --]
      * radius 圆角 // [!code --]
      */ // [!code --]
      menuFillStyle: '', // [!code --]
      // 导航栏是否圆角 // [!code ++]
      isRounded: false, // [!code ++]
    },
  }
  ```

## 3.1.3

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v3.1.3)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v3.1.3)
无重大变化
:::

## 3.1.2

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v3.1.2)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v3.1.2)
无重大变化
:::

## 3.1.1

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v3.1.1)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v3.1.1)
无重大变化
:::

## 3.1.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v3.1.0)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v3.1.0)
🚀 Features

- 增加收藏夹 &nbsp;-&nbsp; by @hooray [<samp>(7146d)</samp>](https://github.com/one-step-admin/pro/commit/7146d71)
- 新增用户偏好设置 &nbsp;-&nbsp; by @hooray [<samp>(ba111)</samp>](https://github.com/one-step-admin/pro/commit/ba11141)
:::

## 3.0.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v3.0.0)
🚨 Breaking Changes

- 移除 `BatchActionBar` 组件 &nbsp;-&nbsp; by @hooray [<samp>(b1f8f)</samp>](https://github.com/hooray/one-step-admin/commit/b1f8f42e)
- 移除 `Editor` 组件 &nbsp;-&nbsp; by @hooray [<samp>(2ea5f)</samp>](https://github.com/hooray/one-step-admin/commit/2ea5f783)
- 移除 vite-plugin-html 插件 &nbsp;-&nbsp; by @hooray [<samp>(9d1d3)</samp>](https://github.com/hooray/one-step-admin/commit/9d1d35e8)
- 调整应用配置的配置项，并将应用配置按钮从工具栏删除 &nbsp;-&nbsp; by @hooray [<samp>(ceffd)</samp>](https://github.com/hooray/one-step-admin/commit/ceffded2)
- 重构接口请求，统一管理接口请求模块 &nbsp;-&nbsp; by @hooray [<samp>(301d7)</samp>](https://github.com/hooray/one-step-admin/commit/301d78ac)

🚀 Features

- 引入 stylelint-stylistic 插件 &nbsp;-&nbsp; by @hooray [<samp>(38e3f)</samp>](https://github.com/hooray/one-step-admin/commit/38e3fe8c)

🐞 Bug Fixes

- 修复 axios baseURL 配置，解决构建后 baseURL 不生效的问题 &nbsp;-&nbsp; by @hooray [<samp>(87963)</samp>](https://github.com/hooray/one-step-admin/commit/87963f5b)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v3.0.0)
🚨 Breaking Changes

- 移除 `BatchActionBar` 组件 &nbsp;-&nbsp; by @hooray [<samp>(ca569)</samp>](https://github.com/one-step-admin/pro/commit/ca56946)
- 移除 `Editor` 组件 &nbsp;-&nbsp; by @hooray [<samp>(6fff3)</samp>](https://github.com/one-step-admin/pro/commit/6fff36d)
- 移除 vite-plugin-html 插件 &nbsp;-&nbsp; by @hooray [<samp>(f9c4e)</samp>](https://github.com/one-step-admin/pro/commit/f9c4e7c)
- 调整应用配置的配置项，并将应用配置按钮从工具栏删除 &nbsp;-&nbsp; by @hooray [<samp>(abea5)</samp>](https://github.com/one-step-admin/pro/commit/abea596)
- 重构标准模块，增加表格高度自适应功能 &nbsp;-&nbsp; by @hooray [<samp>(f20ca)</samp>](https://github.com/one-step-admin/pro/commit/f20ca65)
- 重构接口请求，统一管理接口请求模块 &nbsp;-&nbsp; by @hooray [<samp>(831ab)</samp>](https://github.com/one-step-admin/pro/commit/831ab21)

🚀 Features

- 引入 stylelint-stylistic 插件 &nbsp;-&nbsp; by @hooray [<samp>(f0826)</samp>](https://github.com/one-step-admin/pro/commit/f0826b3)
- 新增 StorageBox 组件 &nbsp;-&nbsp; by @hooray [<samp>(38efb)</samp>](https://github.com/one-step-admin/pro/commit/38efbe7)
- 增加明暗切换过渡动效 &nbsp;-&nbsp; by @hooray [<samp>(44045)</samp>](https://github.com/one-step-admin/pro/commit/4404510)

🐞 Bug Fixes

- 修复 axios baseURL 配置，解决构建后 baseURL 不生效的问题 &nbsp;-&nbsp; by @hooray [<samp>(3fa26)</samp>](https://github.com/one-step-admin/pro/commit/3fa268a)
- 增加 dropdown 组件外边框的临时解决方案 &nbsp;-&nbsp; by @hooray [<samp>(9cd44)</samp>](https://github.com/one-step-admin/pro/commit/9cd44df)
:::

## 2.3.2

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v2.3.2)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v2.3.2)
无重大变化
:::

## 2.3.1

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v2.3.1)
无重大变化
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v2.3.1)
无重大变化
:::

## 2.3.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v2.3.0)
🚨 Breaking Changes

- Pinia store 改为 setup 写法 &nbsp;-&nbsp; by @hooray [<samp>(1cd93)</samp>](https://github.com/hooray/one-step-admin/commit/1cd93934)
- UseCurrentInstance() 重命名为 useGlobalProperties() &nbsp;-&nbsp; by @hooray [<samp>(0311a)</samp>](https://github.com/hooray/one-step-admin/commit/0311aa5e)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v2.3.0)
🚨 Breaking Changes

- Pinia store 改为 setup 写法 &nbsp;-&nbsp; by @hooray [<samp>(040a5)</samp>](https://github.com/one-step-admin/pro/commit/040a5f9)
- UseCurrentInstance() 重命名为 useGlobalProperties() &nbsp;-&nbsp; by @hooray [<samp>(39d56)</samp>](https://github.com/one-step-admin/pro/commit/39d56dd)

🐞 Bug Fixes

- 修复顶部主导航国际化配置不生效 &nbsp;-&nbsp; by @hooray [<samp>(02548)</samp>](https://github.com/one-step-admin/pro/commit/02548cc)
- 修复切换国际化语言时，主导航激活项被复原到第一个 &nbsp;-&nbsp; by @hooray [<samp>(e6846)</samp>](https://github.com/one-step-admin/pro/commit/e684642)
:::

## 2.2.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v2.2.0)
🐞 Bug Fixes

- 修复次导航收起时图标不居中 &nbsp;-&nbsp; by @hooray [<samp>(2b5ca)</samp>](https://github.com/hooray/one-step-admin/commit/2b5ca1d0)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v2.2.0)
🚀 Features

- 个人设置窗口补充 i18n 配置 &nbsp;-&nbsp; by @hooray [<samp>(2655c)</samp>](https://github.com/one-step-admin/pro/commit/2655cf8)

🐞 Bug Fixes

- 修复次导航收起时图标不居中 &nbsp;-&nbsp; by @hooray [<samp>(2fc11)</samp>](https://github.com/one-step-admin/pro/commit/2fc1114)
- 修复主导航国际化配置不生效 &nbsp;-&nbsp; by @hooray [<samp>(490b1)</samp>](https://github.com/one-step-admin/pro/commit/490b1c1)
:::

## 2.1.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v2.1.0)
🐞 Bug Fixes

- 修复类型报错 &nbsp;-&nbsp; by @hooray [<samp>(8aba7)</samp>](https://github.com/hooray/one-step-admin/commit/8aba71a2)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v2.1.0)
🐞 Bug Fixes

- 修复 mock 文件后缀名错误 &nbsp;-&nbsp; by @hooray [<samp>(8bc65)</samp>](https://github.com/one-step-admin/pro/commit/8bc6556)
- 修复无法打开修改密码窗口的问题 &nbsp;-&nbsp; by @hooray [<samp>(0c353)</samp>](https://github.com/one-step-admin/pro/commit/0c35313)
- 修复类型报错 &nbsp;-&nbsp; by @hooray [<samp>(56855)</samp>](https://github.com/one-step-admin/pro/commit/56855c6)
:::

## 2.0.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v2.0.0)
🚨 Breaking Changes

- TypeScript 支持 &nbsp;-&nbsp; by @hooray [<samp>(0b8ac)</samp>](https://github.com/hooray/one-step-admin/commit/0b8ac44a)
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v2.0.0)
🚨 Breaking Changes

- TypeScript 支持 &nbsp;-&nbsp; by @hooray [<samp>(13b2c)</samp>](https://github.com/one-step-admin/pro/commit/13b2c2d)
:::

## v1.0.0

:::info [基础版](https://github.com/one-step-admin/basic/releases/tag/v1.0.0)
JS 版本存档，框架下次更新将切换到 TS 版本，JS 版本将不再维护。
:::

:::tip [专业版](https://github.com/one-step-admin/pro/releases/tag/v1.0.0)
JS 版本存档，框架下次更新将切换到 TS 版本，JS 版本将不再维护。
:::