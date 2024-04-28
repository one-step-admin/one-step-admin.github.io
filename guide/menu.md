# 导航

项目导航配置存放在 `/src/menu/modules/` 目录下，每一个 ts 文件会被视为一个导航模块。

所有配置的导航模块均需要在 `/src/menu/index.ts` 文件里进行引入并放到主导航下。

## 基本配置

### 一级导航

一个导航模块包含以下结构：

```ts
const menus: Menu.recordRaw = {
  title: '演示',
  windowName: 'Example',
}

export default menus
```

:::warning 注意事项
整个项目所有导航的 `windowName` 不能重复
:::

### 多级导航

```ts
const menus: Menu.recordRaw = {
  title: '演示',
  children: [
    {
      title: '演示页面',
      windowName: 'Example',
    },
  ],
}

export default menus
```

### 外链

只需要将 `windowName` 设置为需要跳转的 HTTP 地址即可。

```ts
const menus: Menu.recordRaw = {
  title: '官网',
  windowName: 'https://one-step-admin.gitee.io',
}

export default menus
```

### 主导航

主导航会将我们配置好的导航模块进行归类，在 `/src/menu/index.ts` 里进行设置。

```ts
const menu = [
  {
    title: '演示',
    icon: 'sidebar-default',
    children: [
      WindowExample,
    ],
  },
]
```

主导航只需设置 `title` 、`icon` 和 `children` 三个参数，其中 `children` 则是存放我们配置的导航模块数据。

## 导航配置

### title

|  类型  | 是否必须 | 默认值 | 说明           |
| :----: | :------: | :----: | :------------- |
| string |    ✔️     |   /    | 导航展示的标题 |

<Badge type="tip" text="v4.4.0" /> 开始，<Badge type="pro" text="专业版" /> 支持设置 i18n 对应的 key 值，详细可阅读《[国际化](i18n)》。

### windowName

|  类型  | 是否必须 | 默认值 | 说明                 |
| :----: | :------: | :----: | :------------------- |
| string |    ✔️     |   /    | 窗口组件名，确保唯一 |

### ~~i18n~~ <Badge type="pro" text="专业版" /> <Badge type="warning" text="v4.4.0 移除" />

|  类型  | 是否必须 | 默认值 | 说明                    |
| :----: | :------: | :----: | :---------------------- |
| string |    ✖️     |   /    | 标题国际化对应的 key 值 |

详细可阅读《[国际化](i18n)》。

### noTitle <Badge type="pro" text="专业版" />

|  类型   | 是否必须 | 默认值 | 说明               |
| :-----: | :------: | :----: | :----------------- |
| boolean |    ✖️     | false  | 是否显示窗口标题栏 |

### icon

|  类型  | 是否必须 | 默认值 | 说明             |
| :----: | :------: | :----: | :--------------- |
| string |    ✖️     |   /    | 导航中显示的图标 |

该项配置最终会通过 `<svg-icon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[SVG 图标](./svg-icon)》。

### auth

|      类型      | 是否必须 | 默认值 | 说明                                                     |
| :------------: | :------: | :----: | :------------------------------------------------------- |
| string / array |    ✖️     |   /    | 该路由访问权限，支持多个权限叠加，只要满足一个，即可进入 |

用户在登录时，会获取用户权限，根据权限去过滤并动态注册路由。所以没有权限的路由不会被注册，也不会在侧边栏导航里显示，详细可阅读《[权限 - 路由权限](permission#路由权限)》。

### badge <Badge type="pro" text="专业版" />

|           类型            | 是否必须 | 默认值 | 说明     |
| :-----------------------: | :------: | :----: | :------- |
| boolean / number / string |    ✖️     |   /    | 导航标记 |

设置不同的类型值，展示效果也会不同。

- `boolean` 展示形式为点，当值为 false 时隐藏
- `number` 展示形式为文本，当值小于等于 0 时隐藏
- `string` 展示形式为文本，当值为空时隐藏

如果标记需要动态更新，请设置为箭头函数形式，并返回外部变量，例如搭配 pinia 一起使用。

```ts
badge: () => globalStore.number
```

### params

|  类型   | 是否必须 | 默认值 | 说明                                   |
| :-----: | :------: | :----: | :------------------------------------- |
| object |    ✖️     |   /    | 窗口外部传入参数 |

该属性通常不在导航里直接配置，而是通过调用全局 `useWindow()` 提供的 API ，在打开非导航窗口时动态传入窗口所需要的参数。

## 后端生成

在应用配置里开启：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    baseOn: 'backend'
  }
}
```

开启后在 `/src/api/modules/app.ts` 文件里找到 `menuList()` 这个函数，并修改这个函数的请求地址，请求返回的数据就是导航数据，你可以在 `/src/mock/app.ts` 里查看 mock 数据。

开启后端生成后，导航权限有两种做法，第一种是返回全部的导航数据，让框架自行处理（推荐），第二种是后端直接返回用户具备访问权限的导航数据。