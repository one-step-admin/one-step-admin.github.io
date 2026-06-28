---
url: /guide/settings/stage.md
---
# 舞台

## 侧边舞台停靠位置&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  stage: {
    sideStagePosition: 'right',
  },
})
```

![](/settings/stage-sideStagePosition.png){data-zoomable}

## 侧边宽度&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  stage: {
    sideWidth: 150,
  },
})
```

![](/settings/stage-sideWidth.png){data-zoomable}

## 最大舞台数&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  stage: {
    maximumStages: 10,
  },
})
```

![](/settings/stage-maximumStages.png){data-zoomable}

## 快捷键&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  stage: {
    hotkeys: true,
  },
})
```

该配置默认关闭。开启后可使用舞台相关快捷键，例如 `Alt + 1~9` 切换指定侧栏舞台，`` Alt + ` `` 切换最近切换的舞台。

## 窗口风格&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  stage: {
    windowStyle: 'macos',
  },
})
```

![](/settings/stage-windowStyle.png){data-zoomable}
