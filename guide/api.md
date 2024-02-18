# 常用 API

## 接口请求

详细可阅读《[与服务端交互 - 接口请求](axios#接口请求)》。

```ts
import api from '@/api'

api.get()
api.post()
```

## 鉴权

详细可阅读《[权限 - 鉴权函数](permission#鉴权函数)》。

```ts
import useAuth from '@/utils/composables/useAuth'

const { auth, authAll } = useAuth()

auth()
authAll()
```

## 主导航

### 切换

切换主导航，`index` 为主导航序列数。

```ts
import useMenu from '@/utils/composables/useMenu'

useMenu().switchTo(index)
```

## 窗口

### 新增窗口

```ts
import useWindow from '@/utils/composables/useWindow'

useWindow.add('windowName')

useWindow.add({
  title: '窗口标题',
	name: 'windowName'
})
```

### 关闭窗口

```ts
import useWindow from '@/utils/composables/useWindow'

useWindow().remove('windowName')
```

### 窗口全屏切换 <Badge type="pro" text="专业版" />

```ts
import useWindow from '@/utils/composables/useWindow'

useWindow().toggleMaximize('windowName')
```

### 判断窗口是否全屏 <Badge type="pro" text="专业版" />

```ts
import useWindow from '@/utils/composables/useWindow'

useWindow().isMaximize('windowName')  // true / false
```

### 窗口刷新

```ts
import useWindow from '@/utils/composables/useWindow'

useWindow().reload('windowName')
```

## 事件总线

基于 [mitt](https://github.com/developit/mitt) 简单封装，使用方法请查阅官方文档。

```ts
import eventBus from '@/utils/eventBus'

eventBus.on()
eventBus.emit()
eventBus.off()
```

## 日期 <Badge type="pro" text="专业版" />

基于 [dayjs](https://day.js.org/zh-CN/) 简单封装，使用方法请查阅官方文档。

```ts
import dayjs from '@/utils/dayjs'

dayjs()
```