# 版权信息

版权信息位于页面底部显示。

<ZoomImg src="/copyright.png" />

## 使用

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    enable: true,
  },
}
```

## 网站运行日期

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    dates: '2021-2022',
  },
}
```

## 公司名称

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    company: 'One-step-admin',
  },
}
```

## 网站地址

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    website: 'https://one-step-admin.gitee.io',
  },
}
```

如果未设置网站名称，则该设置将被忽略。

## 网站备案号

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    beian: '',
  },
}
```