# 布局

通过 7 种导航栏模式和 4 种页宽模式的组合搭配，可实现 28 种布局结构，再搭配默认提供的 6 款主题，**即可实现上百种界面风格**。

## 导航栏模式

在应用配置里进行设置，可实现 7 种导航栏模式：

- 顶部模式
- 侧边栏模式（含主导航）
- 侧边栏模式（无主导航）
- 侧边栏精简模式 <Badge type="pro" text="专业版" />
- 顶部精简模式 <Badge type="pro" text="专业版" />
- 侧边栏面板模式 <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.5.0 新增" />
- 顶部面板模式 <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.5.0 新增" />

### 顶部模式

![](/menu-mode-head.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    mode: 'head', // v4.5.0 之前版本为 menuMode
  },
}
```

### 侧边栏模式（含主导航）

![](/menu-mode-side.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    mode: 'side', // v4.5.0 之前版本为 menuMode
  },
}
```

### 侧边栏模式（无主导航）

![](/menu-mode-single.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    mode: 'single', // v4.5.0 之前版本为 menuMode
  },
}
```

### 侧边栏精简模式 <Badge type="pro" text="专业版" />

![](/menu-mode-only-side.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    mode: 'only-side', // v4.5.0 之前版本为 menuMode
  },
}
```

### 顶部精简模式 <Badge type="pro" text="专业版" />

![](/menu-mode-only-head.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    mode: 'only-head', // v4.5.0 之前版本为 menuMode
  },
}
```

### 侧边栏面板模式 <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.5.0 新增" />

![](/menu-mode-side-panel.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    mode: 'side-panel',
  },
}
```

### 顶部面板模式 <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.5.0 新增" />

![](/menu-mode-head-panel.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    mode: 'head-panel',
  },
}
```

## 变量

布局相关的变量存放在 `/src/assets/styles/globals.css` 文件中（注意看注释），均为 CSS 变量。