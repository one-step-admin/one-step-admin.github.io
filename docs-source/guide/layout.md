# 布局

通过 5 种导航栏模式和 6 款主题，**可实现 30 种界面风格**。

## 导航栏模式

在框架配置里进行设置，可实现 5 种导航栏模式：

- 顶部模式
- 侧边栏模式（含主导航）
- 侧边栏模式（无主导航）
- 侧边栏精简模式 <Badge type="tip" text="专业版" vertical="top" />
- 顶部精简模式 <Badge type="tip" text="专业版" vertical="top" />

### 顶部模式

<p><img :src="$withBase('/menu-mode-head.png')" /></p>

```js:no-line-numbers
menu: {
    menuMode: 'head'
}
```

### 侧边栏模式（含主导航）

<p><img :src="$withBase('/menu-mode-side.png')" /></p>

```js:no-line-numbers
menu: {
    menuMode: 'side'
}
```

### 侧边栏模式（无主导航）

<p><img :src="$withBase('/menu-mode-single.png')" /></p>

```js:no-line-numbers
menu: {
    menuMode: 'single'
}
```

### 侧边栏精简模式 <Badge type="tip" text="专业版" vertical="top" />

<p><img :src="$withBase('/menu-mode-only-side.png')" /></p>

```js:no-line-numbers
menu: {
    menuMode: 'only-side'
}
```

### 顶部精简模式 <Badge type="tip" text="专业版" vertical="top" />

<p><img :src="$withBase('/menu-mode-only-head.png')" /></p>

```js:no-line-numbers
menu: {
    menuMode: 'only-head'
}
```

## 变量

布局相关的部分宽高变量存放在 `/src/assets/styles/resources/layout.scss` 文件中。

```scss
// 全局变量

// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）
$g-header-width: 100%;
// 头部高度
$g-header-height: 70px;
// 侧边栏宽度
$g-main-sidebar-width: 70px;
$g-sub-sidebar-width: 220px;
// 侧边栏Logo高度
$g-sidebar-logo-height: 50px;
// 顶部导航栏高度
$g-topbar-height: 50px;

// 窗口预览缩放系数
$g-window-perview-scale: 0.5;
// 窗口内边距
$g-window-container-padding: 10px;
```