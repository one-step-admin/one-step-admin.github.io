---
url: /guide/window.md
---
# 窗口

## defineWindow()

通过 `defineWindow()` 配置窗口：

```vue {2-5}
<script setup lang="ts">
defineWindow({
  title: 'menu.style',
  icon: 'i-ion:dice',
})
</script>

<template>
  <!-- ... -->
</template>
```

:::danger 警告
不能在 `defineWindow()` 中使用变量，因为其传递的参数会在构建时提取并从 `<script setup>` 中删除。
:::

## 窗口配置

### id

```ts
/**
 * ID，全局唯一，不指定时根据文件路径自动生成
 */
id?: string
```

### auth

```ts
/**
 * 权限
 * @description 窗口访问权限，配置为数组时，只需满足一个即可进入
 * @default undefined
 * @example
 * 'news:view' - 访问该窗口时，需要具备 news:view 权限
 * ['news:view', 'news:edit'] - 访问该窗口时，需要具备 news:view 或 news:edit 权限
 */
auth?: string | string[]
```

用户在打开窗口时，会判断当前窗口是否具备访问权限，不具备访问权限则会禁止访问，详细可阅读《[权限 - 窗口权限](./auth#窗口权限)》。

### localeAuth

```ts
/**
 * 区域权限
 * @description 区域语言权限，配置为数组时，只需满足一个即可进入
 * @default undefined
 * @example
 * 'zh-cn' - 当前区域语言为 zh-cn 允许访问该路由
 * ['zh-cn', 'zh-tw'] - 当前区域语言为 zh-cn 或 zh-tw 允许访问该路由
 */
localeAuth?: string | string[]
```

在做国际化业务场景时，可以对某个窗口做区域访问限制。

```ts {4}
defineWindow({
  title: 'menu.style',
  icon: 'i-ion:dice',
  localeAuth: ['zh-cn', 'zh-tw'],
})
```

### title

```ts
/**
 * 标题
 * @description 标题会在窗口、导航、收藏夹等需要的展示位置显示
 * @default undefined
 * @example
 * '新闻管理' - 标题为新闻管理
 */
title: string
```

&#x20;支持设置 i18n 对应的 key 值，详细可阅读《[国际化](i18n)》。

### icon

```ts
/**
 * 图标
 * @description 窗口图标
 * @default undefined
 * @example
 * 'i-ep:lock' - 显示 i-ep:lock 图标
 */
icon?: string
```

该项配置最终会通过 `OcIcon` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[图标](./icon)》。

### style

```ts
/**
 * 窗口风格
 * @description 设置当前窗口风格，优先级高于全局 stage.windowStyle
 * @default undefined
 * @example
 * 'default' - 默认窗口，显示窗口标题栏
 * 'neo-brutalism' - 新粗野主义窗口，显示粗描边、高对比度色块和硬阴影
 * 'macos' - macOS 风格窗口，关闭按钮位于标题栏左侧
 * 'custom' - 自定义窗口，不显示窗口标题栏
 */
style?: import('@one-step-console/settings/types').DefineWindowStyle
```

```vue {4}
<script setup lang="ts">
defineWindow({
  title: '自定义窗口',
  style: 'custom',
})
</script>

<template>
  <OcPageHeader title="注意看，我是没有标题栏的" class="stage-window-handle cursor-grab active:cursor-grabbing" />
</template>
```

如果在窗口内实现自定义标题栏，建议在 class 上增加 `stage-window-handle` 以保留窗口拖拽的能力。

如果希望使用框架内置的新粗野主义窗口，可将 `style` 设置为 `neo-brutalism`；如果希望使用 macOS 风格窗口，可将 `style` 设置为 `macos`。

### class

```ts
/**
 * 父级容器扩展 class
 * @description 推荐使用 UnoCSS 原子类进行样式定制
 * @default undefined
 * @example
 * 'bg-white dark:bg-gray-800' - 父级容器背景色在亮色模式下为白色，在暗色模式下为灰色
 */
class?: string
```
