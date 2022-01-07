# 代码文件自动生成

开发过程中，避免不了手动去频繁创建页面、组件等文件，并且还要在文件里写一些必要的代码，是不是觉得很麻烦？现在你可以用更简洁的方式来处理这一切。

:::tip 说明
该功能基于 [plop](https://www.npmjs.com/package/plop) 实现，在扩展新的模式前，请先详细阅读 plop 文档。
:::

框架默认提供了 5 种模式，通过 `pnpm run new` 指令可以自行选择。

- `page` 窗口组件文件
- `component` 组件文件
- `store` pinia 全局状态文件
- `mock` mock 文件
- `module` 窗口组件模块文件 <Badge type="tip" text="专业版" vertical="top" />

除了框架提供的 5 种模式，你还可以自定义新的模式，其原理就是通过预设模板，按照特定规则创建文件或者文件夹。

预设模板文件存放在 `./plop-templates/` 目录下，并在 `./plopfile.js` 文件里进行引用，你可以参考现有 5 种模式的目录结构进行创建新的模板。

## page

<p><img :src="$withBase('/plop-page.gif')" /></p>

page 模式下，只需输入组件名，就会在 `/src/windows/` 目录下就会自动创建一个窗口组件的文件夹及文件。

## component

<p><img :src="$withBase('/plop-component.gif')" /></p>

component 模式是用来创建全局组件的，其生成目录为 `/src/components/` 。

## store

<p><img :src="$withBase('/plop-store.gif')" /></p>

store 模式则会在 `/src/store/modules/` 目录下生成一个空模板。

## mock

<p><img :src="$withBase('/plop-mock.gif')" /></p>

mock 模式则会在 `/src/mock/` 目录下生成一个标准 CURD 的 mock 数据。

## module <Badge type="tip" text="专业版" vertical="top" />

<p><img :src="$withBase('/plop-module.gif')" /></p>

module 模式是一个窗口组件的标准模块模板，会在 `/src/windows/` 目录下生成模块文件夹，并且包含列表页、编辑（详情）页，以及相关局部组件。

这块部分详细介绍请阅读《[标准模块](plop-module.md)》。