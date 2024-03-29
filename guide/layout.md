# 布局

通过 5 种导航栏模式和 4 种页宽模式的组合搭配，可实现 20 种布局结构，再搭配默认提供的 6 款主题，**即可实现上百种界面风格**。

## 导航栏模式

在应用配置里进行设置，可实现 5 种导航栏模式：

- 顶部模式
- 侧边栏模式（含主导航）
- 侧边栏模式（无主导航）
- 侧边栏精简模式 <Badge type="pro" text="专业版" />
- 顶部精简模式 <Badge type="pro" text="专业版" />

### 顶部模式

![](/menu-mode-head.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'head',
  },
}
```

### 侧边栏模式（含主导航）

![](/menu-mode-side.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'side',
  },
}
```

### 侧边栏模式（无主导航）

![](/menu-mode-single.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'single',
  },
}
```

### 侧边栏精简模式 <Badge type="pro" text="专业版" />

![](/menu-mode-only-side.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'only-side',
  },
}
```

### 顶部精简模式 <Badge type="pro" text="专业版" />

![](/menu-mode-only-head.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'only-head',
  },
}
```

## 变量

布局相关的变量存放在 `/src/assets/styles/globals.scss` 文件中（注意看注释），均为 CSS 变量。