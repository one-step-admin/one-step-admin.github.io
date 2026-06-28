---
url: /guide/settings/app.md
---
# 应用

## 账号相关

### 权限验证

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    account: {
      auth: true,
    },
  },
})
```

### 登录过期弹窗&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    account: {
      expiredMode: 'popup',
    },
  },
})
```

![](/settings/app-account-expiredMode.png){data-zoomable}

切换为弹窗模式后，登录过期将不会跳转到登录页，但重新登录表单需要开发者自行扩展，相关文件为 `apps/<app>/src/components/AppAccountForm/login-again.vue` 。

### 多账号管理&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    account: {
      multipleAccounts: true,
    },
  },
})
```

![](/settings/app-account-multipleAccounts.png){data-zoomable}

多账号管理的原理是将已登录账号的 `token` 以相关信息记录在浏览器 `localStorage` 中，从而实现快速切换，可在 `apps/<app>/src/store/modules/app/account.ts` 中修改记录方式。

## 导航菜单数据来源

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    menuBaseOn: 'backend',
  },
})
```

设置后还需要再 `apps/<app>/src/api/modules/app.ts` 文件里找到 `menuList` 这个函数，并修改这个函数的请求地址，请求返回的数据就是菜单数据，你可以在 `apps/<app>/src/api/fake_modules/app.fake.ts` 里找到假数据示例。

## 页面水印&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    watermark: true,
  },
})
```

![](/settings/app-watermark.png){data-zoomable}

在 `apps/<app>/src/store/modules/app/watermark.ts` 中可修改水印展示内容，以及其他水印相关配置，并且支持动态更新：

```vue
<script setup lang="ts">
const appWatermarkStore = useAppWatermarkStore()

appWatermarkStore.update({
  text: '设置水印',
  // 更多设置项请查阅官方文档
})

// 重置水印，恢复到默认设置
appWatermarkStore.update()
</script>
```

## 反馈&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    feedback: true,
  },
})
```

![](/settings/app-feedback.gif){data-zoomable}

改功能通常用于帮助系统管理员更高效的收集使用者的反馈信息。

该模块仅实现了前端逻辑，不涉及后端业务，需开发者自行扩展完善，相关文件为 `apps/<app>/src/components/AccountButton/feedback.vue` 。

## 锁屏&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    lockScreen: true,
  },
})
```

![](/settings/app-lockScreen.gif){data-zoomable}

## 错误日志&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    errorLog: true,
  },
})
```

开启后需要到 `apps/<app>/src/utils/errorLog.ts` 中编写业务代码，框架为方便演示，默认将错误日志记录在 `sessionStorage` 里。

开发者需要根据实际业务情况修改代码，例如将增加上报信息，记录用户账号、token等数据，并且将错误日志进行上报。

由于开启错误日志监控后，Vue 相关的错误将不会在浏览器控制台里显示，所以该配置并不会在开发环境下生效，如果需要开发并调试该功能，请在 `apps/<app>/src/utils/errorLog.ts` 里临时修改开启的条件判断。

## 检查更新&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    checkUpdates: true
  },
})
```

![](/settings/app-checkUpdates.png){data-zoomable}

采用轮询请求 `index.html` 获取响应头中的 `etag` 或 `last-modified` 作为版本标识的方法来判断页面是否有更新。

你也可以修改 `apps/<app>/src/components/AppCheckUpdates/index.vue` 文件中的 `getVersionTag` 函数，实现自定义检查更新。

## 哀悼模式

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    rip: true,
  },
})
```

## 版权信息

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    copyright: {
      enable: true,
    },
  },
})
```

### 网站运行日期

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    copyright: {
      dates: '2020-present',
    },
  },
})
```

### 公司名称

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    copyright: {
      company: 'one-step-console',
    },
  },
})
```

### 网站地址

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    copyright: {
      website: 'https://one-step-admin.hurui.me',
    },
  },
})
```

如果未设置公司名称，则该设置将被忽略。

## 用户偏好设置&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    preferences: {
      theme: true,
      menu: true,
      toolbar: true,
      stage: true,
    },
  },
})
```

![](/settings/app-preferences.gif){data-zoomable}

应用配置中除了 `app` 外的所有配置项都可暴露给用户，让用户可以自行设置，这就是用户偏好设置。

### 细化定制

`app.preferences` 支持布尔值和对象两种写法：

* 设置为 `true`：表示该分组下所有可配置项都允许用户调整
* 设置为对象：可以进一步细化到具体字段

以下是一份细化的偏好配置：

```ts twoslash
import { setSettings } from '@one-step-console/settings'

export default setSettings({
  app: {
    preferences: {
      theme: {
        light: true,
        dark: true,
        colorScheme: true,
        sync: true,
        radius: true,
        background: true,
      },
      menu: {
        mode: true,
      },
      toolbar: {
        favorites: true,
        menuSearch: true,
        i18n: true,
        colorScheme: true,
      },
      stage: {
        hotkeys: true,
        sideStagePosition: true,
        sideWidth: true,
      },
    },
  },
})
```

### 数据存储

用户偏好设置默认存储在浏览器 `localStorage` 中，如果需要改为服务端存储，请到 `apps/<app>/src/store/modules/app/preferences.ts` 中调整 `storageTo` 的值，并在 `apps/<app>/src/api/modules/app.ts` 中实现 `preferences()` 和 `preferencesEdit()` 两个接口。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `longtext` 。
:::
