# SVG 图标

越来越多项目开始使用 SVG 图标来代替精灵图或者字体图标，本框架也提供了 SVG 图标支持。

## 自定义图标

这是最常使用的一种方式，你可以去[阿里巴巴矢量图标库](https://www.iconfont.cn/)，或者其它支持下载 SVG 图标文件的网站，然后将下载好的 SVG 图标文件放到 `/src/assets/icons/` 目录下，最后在页面中就可以通过 SvgIcon 组件使用了，name 就是 svg 的文件名。

```vue:no-line-numbers
<!-- /src/assets/icons/example.svg -->
<svg-icon name="example" />
```

因为 SvgIcon 组件只负责渲染 `<svg>` 元素，而下载的 SVG 图标文件的尺寸可能不统一，建议在外层使用 ElIcon 组件进行包裹，对 `<svg>` 元素进行统一处理。

```vue:no-line-numbers
<!-- 同时你还可以使用 el-icon 提供的 color 和 size 属性 -->
<el-icon color="red" size="48px">
    <svg-icon name="example" />
</el-icon>
```

## Element Plus 图标

由于 Element Plus 官方的 SVG 图标暂时不支持自动导入，使用较为繁琐，开发体验上并不友好，所以框架并没有采用 Element Plus 官方提供的使用方式。

框架提供了另一种使用方案，那就是 Iconify 图标集，Iconify 提供了 100+ 套图标集，其中也包括了 Element Plus 的图标。如果你想了解具体如何通过 Iconify 使用 Element Plus 的图标，那么请继续往下阅读。

## Iconify 图标

:::tip 介绍
[Iconify](https://github.com/iconify/iconify) 提供 100+ 套图标集，有 100,000+ 个图标可以免费使用。

专业版可以使用任意图标集的图标，基础版只能使用 Element Plus 的图标。
:::

### 使用 Element Plus 图标

使用方式也很简单，你只需进入 Iconify 的 [Element Plus 图标](https://icon-sets.iconify.design/ep/)页面，然后点击需要使用的图标，复制图标名称`ep:xxx`，最后通过 Iconify 提供的 Icon 组件就可以使用了。

```vue:no-line-numbers
<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <el-icon>
        <Icon icon="el:arrow-right" />
    </el-icon>
</template>
```

当然这么使用并没有很方便，依旧还是需要手动导入一个 Icon 组件。如果你也觉得麻烦的话，那么你可以使用 SvgIcon 组件来展示，框架已经帮你做好的所有处理。

```vue:no-line-numbers
<el-icon>
    <svg-icon name="el:arrow-right" />
</el-icon>
```

### 使用其它图标集的图标 <Badge type="tip" text="专业版" vertical="top" />

你可以在[Iconify 官网](https://icon-sets.iconify.design/)上查找 Iconify 提供的所有图标，并按照使用 Element Plus 图标的方式去使用。

或者你也可以在 [Icônes 网站](https://icones.js.org/) 上查找你想要的图标，这是一个基于 Iconify 的在线图标搜索网站，它比 Iconify 官网的操作更直观。并且还提供了 VSCode 扩展，安装 [Icônes 扩展](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones)就可以在 VSCode 里进行图标查找。

<p><img :src="$withBase('/icones1.png')" /></p>

<p><img :src="$withBase('/icones2.png')" /></p>

### 调用本地 Iconify 图标

由于 Iconify 图标默认是在线的服务，即首次调用会触发一个外部网络请求，去获取 svg 原始数据，并缓存在 localStorage 和 sessionStorage 中，这样下次再调用的时候，则直接从缓存中获取并展示。

但如果你开发的后台应用是部署在内部网络，无法访问互联网，那么就需要使用到本地的 Iconify 图标。

这里基础版和专业版的配置方式不太一样，请自行选择查看。

<details><summary>基础版</summary>

在应用配置里修改 Iconify 图标的使用方式改为离线使用。

```js:no-line-numbers
app: {
    iconifyOfflineUse: true
}
```

</details>

<details><summary>专业版</summary>

在框架中执行 `pnpm run generate:icons` 命令后，按照指引选择你需要用到的图标集，并选择使用方式为离线。

这样再在框架中使用这些图标，就不会触发外部网络请求了。如果使用选择之外的图标，依旧还是会触发外部网络请求。

</details>

### 另一种使用 Iconify 图标的方式 <Badge type="tip" text="专业版" vertical="top" />

由于使用本地 Iconify 图标时，框架会在首次加载时候将所有图标进行注册，类似于全局引入的概念，一定程度上会影响首屏的加载时间。但这点性能消耗似乎是微乎其微的，除非你在框架中需要使用到几十套图标集，并且使用场景还是内网环境。

如果你特别在意这部分的性能，那么你还可以通过 `<i-{集合名}-{图标名} />` 的方式去使用它。

```vue:no-line-numbers
<el-icon>
    <i-ep-arrow-right />
</el-icon>
```

> 该特性由 [unplugin-icons](https://github.com/antfu/unplugin-icons) 提供支持，它只会构建使用到的图标，而不会对整个图标集进行构建，从而减小构建体积。

## 图标选择器 <Badge type="tip" text="专业版" vertical="top" />

图标选择器是一个特殊的组件，它可能需要展示多套图标集内的所有图标。

通过执行 `pnpm run generate:icons` 命令，并按照指引完成操作后，图标选择器就会自动生效了。

> Element Plus 图标集是默认生效的，所以即便执行命令后，不选择任何图标集，框架也会引入 Element Plus 图标集。