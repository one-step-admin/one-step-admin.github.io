---
url: /guide/api.md
---
# 常用 API

## 接口请求

详细可阅读《[与服务端交互 - 接口请求](axios#接口请求)》。

```ts
import api from '@/api'

api.get()
api.post()
```

## 事件总线

基于 [mitt](https://github.com/developit/mitt) 简单封装，使用方法请查阅官方文档。

```ts
import eventBus from '@/utils/eventBus'

eventBus.on()
eventBus.emit()
eventBus.off()
```

## 日期

基于 [dayjs](https://day.js.org/zh-CN/) 简单封装，使用方法请查阅官方文档。

```ts
import dayjs from '@/utils/dayjs'

dayjs()
```

## 舞台

舞台相关能力由 `useAppStage()` 提供，可用于在业务代码中打开窗口、关闭窗口、刷新窗口，以及打开收藏夹中保存的舞台布局。

```ts
const appStage = useAppStage()
```

### API 总览

| 方法 | 说明 |
| --- | --- |
| `addWindow(options)` | 添加窗口，可选择打开到当前舞台 |
| `removeWindow(id)` | 关闭指定窗口 |
| `reloadWindow(id)` | 重新加载指定窗口 |
| `moveWindowToStandaloneStage(id)` | 将指定窗口移动到独立舞台 |
| `closeOtherWindows(id)` | 关闭指定窗口所在舞台的其它窗口 |
| `closeOtherStages(stageId)` | 关闭指定舞台之外的其它舞台 |
| `addStage(stageId)` | 打开收藏夹中保存的舞台 |

### addWindow()

添加一个窗口。

```ts
interface AppStageAddWindowOptions {
  id: WindowId
  currentStage?: boolean
  params?: Record<string, unknown>
}
```

| 参数 | 说明 |
| --- | --- |
| `id` | 窗口 ID，类型来自窗口注册表 `WindowId` |
| `currentStage` | 是否打开到当前激活舞台，默认 `false` |
| `params` | 传给窗口的参数，可在目标窗口中读取 |

当 `currentStage` 为 `true` 时，会调用 `openWindowToActiveStage()` 将窗口添加到当前舞台；否则会调用 `openWindow()` 按默认策略打开窗口。

```ts
const { addWindow } = useAppStage()

// 按默认策略打开窗口
addWindow({
  id: 'standard_module_example/detail',
})

// 打开到当前舞台，并传入参数
addWindow({
  id: 'standard_module_example/detail',
  currentStage: true,
  params: {
    id: 1,
  },
})
```

### removeWindow()

关闭指定窗口。

```ts
const { removeWindow } = useAppStage()

removeWindow('standard_module_example/detail')
```

### reloadWindow()

重新加载指定窗口。

```ts
const { reloadWindow } = useAppStage()

reloadWindow('standard_module_example/detail')
```

### moveWindowToStandaloneStage()

将指定窗口从当前舞台中移出，并放到一个独立舞台中。

```ts
const { moveWindowToStandaloneStage } = useAppStage()

moveWindowToStandaloneStage('standard_module_example/detail')
```

### closeOtherWindows()

关闭指定窗口所在舞台里的其它窗口，保留传入的窗口。

```ts
const { closeOtherWindows } = useAppStage()

closeOtherWindows('standard_module_example/detail')
```

### closeOtherStages()

关闭指定舞台之外的其它舞台。

```ts
const { closeOtherStages } = useAppStage()

closeOtherStages(stageId)
```

### addStage()

打开收藏夹中保存的舞台。这里的 `stageId` 是收藏夹条目的 `id`，不是窗口 ID。

```ts
const { addStage } = useAppStage()

await addStage(favoriteStageId)
```

打开收藏舞台时，框架会根据收藏数据恢复窗口集合、布局模式、窗口排序和窗口参数。如果收藏舞台里的窗口已经在其它舞台中打开，框架会先弹出确认框；用户取消时返回 `false`，确认后继续打开。

### 使用示例

在列表页新增数据时，将详情页作为窗口打开到当前舞台：

```ts
const { addWindow } = useAppStage()

function onCreate() {
  addWindow({
    id: 'standard_module_example/detail',
    currentStage: true,
  })
}
```

在详情页保存完成后关闭当前窗口：

```ts
const { removeWindow } = useAppStage()

function closeDetailWindow() {
  removeWindow('standard_module_example/detail')
}
```
