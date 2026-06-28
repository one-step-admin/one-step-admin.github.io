---
url: /guide/settings/menu.md
---
# 导航菜单

## 模式&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  menu: {
    mode: 'panel',
  },
})
```

:::: tabs
::: tab dropdown
![](/settings/menu-mode-dropdown.png){data-zoomable}
:::
::: tab panel
![](/settings/menu-mode-panel.png){data-zoomable}
:::
::::
