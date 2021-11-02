# 标准模块 <Badge type="tip" text="专业版" vertical="top" />

在《[代码文件自动生成 - module](plop.md#module)》里介绍了如何快速生成一个标准模块，这个标准模块是一个最基础的 CURD 模块，它包含列表页和编辑页，同时提供了搜索和删除的功能，并且同时也可以生成对应的 mock 文件，在这基础上可以更方便的进行业务扩展。

下面我就实际操作一遍，并介绍一下这个标准模块有哪些特性。

# 用法说明

```:no-line-numbers
? 请选择需要创建的模式： module - 创建标准窗口
? 请输入窗口组件名称 test window
? 请输入模块中文名称 默认模块
? 是否生成 Mock Yes
√  ++ \src\views\windows\TestWindow\index.vue
√  ++ \src\views\windows\TestWindow\components\DetailForm\index.vue
√  ++ \src\views\windows\TestWindow\components\FormMode\index.vue
√  ++ \src\mock\test-window.js
```

这里我已经通过命令在 `/src/views/windows/` 目录下创建好了一个 TestWindow 文件夹，并且也生成了 mock 数据。接下来需要去配置下导航，这样我们才可以在导航栏里访问到。

首先在 `/src/menu/modules/` 目录下新建一个 `test.window.js` 文件，并在里面复制以下代码：

```js:no-line-numbers
export default {
    title: '测试模块',
    windowName: 'TestWindow'
}
```

然后到 `/src/menu/index.js` 文件里加上这个路由配置文件的引用。

```js:no-line-numbers {1,12}
import TestWindow from './modules/test.window'

const menu = [
    ...,
    {
        meta: {
            title: '页面',
            icon: 'ri-pages-line'
        },
        children: [
            ...PagesExample,
            TestWindow
        ]
    },
    ...
]
```

这时候就可以通过导航栏访问到我们的窗口了，我们的一个演示模块也就初步创建好了。

<p><img :src="$withBase('/module1.gif')" /></p>

## 特性介绍

功能部分的介绍主要还是要看代码，先从列表页 `index.vue` 开始。

最先看到的是这句文件导入代码，因为几乎每个列表页都需要翻页功能，所以把翻页相关的东西都存放在 `/src/util/pagination.js` 方便复用。

```js:no-line-numbers
import usePagination from '@/util/pagination.js'

const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()
```

接着在 `data` 里存放的是标准模块提供的一些配置项和必要数据参数字段。

```js:no-line-numbers {9,25}
const data = ref({
    loading: false,
    /**
     * 详情展示模式
     * dialog 对话框
     * drawer 抽屉
     */
    formMode: 'dialog',
    // 详情
    formModeProps: {
        visible: false,
        id: ''
    },
    // 搜索
    search: {
        account: '',
        name: '',
        mobile: '',
        sex: ''
    },
    searchMore: false,
    // 批量操作
    batch: {
        enable: true,
        selectionDataList: []
    },
    // 列表数据
    dataList: []
})
```

标准模块提供了 2 种详情展示模式，默认是弹窗的方式，你可以修改 `formMode: 'drawer'` 开启详情抽屉模式，保存后效果如下：

<p><img :src="$withBase('/module2.gif')" /></p>

再往下就是需要你修改或编写业务代码的部分，这里就不继续展开了。

详情页的代码就不多介绍了，相对比较简单，可自行阅读理解。其中表单部分单独封装成组件存放在 `/src/views/windows/[模块文件夹]/components/DetailForm/index.vue` 里了，同样你在 `components/` 文件夹下还能看到另外一个 `FormMode` 的文件夹，这样的用意是让表单可以复用，**可以通过路由弹窗或抽屉的形式打开详情页**。

可能有人会有疑问，为什么不在生成文件的时候直接让我选择用哪种形式，这样生成出来就是哪种，而是在生成好的代码文件里再进行配置？

这样设计的目的主要有三点：

1. **合理使用**。关于表单具体使用哪种展示模式比较好，我们的建议是，当表单与当前列表页关联性较强，内容少则使用弹窗，内容多则使用抽屉；而当表单与当前列表页关联性较弱，且内容多，可以使用新建窗口的形式，让新窗口进行承载。
2. **方便后期维护**。考虑到需求会变，可能一开始是一个很简单的表单，后期需求一点点增加，变成了一个庞大的表单，这时候就要从弹窗改成抽屉的形式，反之也可能是从抽屉改成弹窗的形式，处理起来都很麻烦。所以方便后期维护，这部分是有意而为之，做成了 2 种形式共存，通过配置可一键切换。
3. **跨窗口的组件调用**。第一点里有提到，如果既不想使用弹窗，也不想使用抽屉，你还可以使用新窗口的形式进行处理，这时候由于表单部分已抽象成组件，所以即便是在新窗口里，也可以直接调用该组件，从而无需编写重复代码。

---

当然标准模块也只是框架提供的一个标准，你可以沿用，也可以根据自己的需求指定一套标准，毕竟最终目的都是提高开发效率，同时也确保多人协作开发的时候有个统一标准，不会出现每个人做出来的模块风格都不一样。