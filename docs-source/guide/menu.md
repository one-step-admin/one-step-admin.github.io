# 导航

项目导航配置存放在 `/src/menu/modules/` 目录下，每一个 js 文件会被视为一个导航模块。

所有配置的导航模块均需要在 `/src/menu/index.js` 文件里进行引入并放到主导航下。

### 一级导航

一个导航模块包含以下结构：

```js:no-line-numbers
export default {
    title: '演示',
    windowName: 'Example'
}
```

:::warning 注意事项
- 整个项目所有导航的 `windowName` 不能重复
:::

### 多级导航

```js:no-line-numbers
export default {
    title: '演示',
    children: [
        {
            title: '演示页面',
            windowName: 'Example'
        }
    ]
}
```

### 外链

只需要将 `windowName` 设置为需要跳转的 HTTP 地址即可。

```js:no-line-numbers
export default {
    title: '官网',
    windowName: 'https://hooray.gitee.io/one-step-admin/'
}
```

### 主导航

主导航会将我们配置好的导航模块进行归类，在 `/src/menu/index.js` 里进行设置。

```js
const menu = [
    {
        title: '演示',
        icon: 'sidebar-default',
        children: [
            WindowExample,
            ComponentBasicExample
        ]
    },
    {
        title: '其它',
        icon: 'sidebar-other'
        children: [
            MockExample,
            PermissionExample
        ]
    }
]
```

主导航只需设置 `title` 、`icon` 和 `children` 三个参数，其中 `children` 则是存放我们配置的导航模块数据。

## 导航配置

### title

|  类型  | 是否必须 | 说明           |
| :----: | :------: | :------------- |
| string |    ✔️     | 导航展示的标题 |

### windowName

|  类型  | 是否必须 | 说明                 |
| :----: | :------: | :------------------- |
| string |    ✔️     | 窗口组件名，确保唯一 |

### i18n <Badge type="tip" text="专业版" vertical="top" />

|  类型  | 是否必须 | 说明                    |
| :----: | :------: | :---------------------- |
| string |    ✖️     | 标题国际化对应的 key 值 |

### noTitle <Badge type="tip" text="专业版" vertical="top" />

|  类型   | 是否必须 | 说明               |
| :-----: | :------: | :----------------- |
| boolean |    ✖️     | 是否显示窗口标题栏 |

### icon

|  类型  | 是否必须 | 说明                                               |
| :----: | :------: | :------------------------------------------------- |
| string |    ✖️     | 导航中显示的图标，图标使用 `<svg-icon />` 组件展示 |

专业版支持使用 ElementPlus Icon 和 RemixIcon 图标：

```js:no-line-numbers
icon: 'el-icon-star-on'
icon: 'ri-star-fill'
```

### auth

|      类型      | 是否必须 | 说明                                                     |
| :------------: | :------: | :------------------------------------------------------- |
| string / array |    ✖️     | 该路由访问权限，支持多个权限叠加，只要满足一个，即可进入 |

用户在登录时，会获取用户权限，根据权限去过滤并动态注册路由。所以没有权限的路由不会被注册，也不会在侧边栏导航里显示，详细可阅读《[权限 - 路由权限](permission.md#路由权限)》。

### badge <Badge type="tip" text="专业版" vertical="top" />

|           类型            | 是否必须 | 说明     |
| :-----------------------: | :------: | :------- |
| boolean / number / string |    ✖️     | 导航标记 |

设置不同的类型值，展示效果也会不同。

- `boolean` 展示形式为点，当值为 false 时隐藏
- `number` 展示形式为文本，当值小于等于 0 时隐藏
- `string` 展示形式为文本，当值为空时隐藏

如果标记需要动态更新，请设置为箭头函数形式，并返回外部变量，例如搭配 pinia 一起使用。

```js:no-line-numbers
badge: () => globalStore.number
```

### params

|  类型  | 是否必须 | 说明             |
| :----: | :------: | :--------------- |
| object |    ✖️     | 窗口外部传入参数 |

该属性通常不在导航里直接配置，而是通过调用全局 `this.$window.add()` 打开非导航窗口时动态传入窗口所需要的参数。

## 后端生成

在框架配置里开启：

```js:no-number-lines
enableBackendReturnMenu: true
```

开启后访问 `/src/store/modules/menu.js` 文件，找到 `generateRoutesAtBack()` 这个 action 方法，你要做的就是修改这个方法里的请求地址，请求返回的数据就是导航数据，你可以在 `/src/mock/menu.js` 里查看 mock 数据。

开启后端生成后，导航权限有两种做法，一种是后端直接返回用户具备访问权限的导航数据，另一种则返回全部的导航的数据，让框架自行处理。两种做法的区别在于第一种返回的导航数据里，无需设置 auth 参数。