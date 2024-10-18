# 权限

首先需要在应用配置里开启权限功能。

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    enablePermission: true,
  },
}
```

然后在 `/src/api/modules/user.ts` 文件里找到 `getPermissions` 的方法，该方法用于登录成功后获取用户权限。在实际开发中，需要手动进行修改，框架默认通过 mock 模拟获取用户权限。

在演示源码中，默认提供了两组权限，你可以在“权限验证”导航里切换帐号查看不同权限下的效果。如果使用的不是 `admin` 或 `test` 用户名登录，则在导航栏里看不到“权限验证”导航入口。

## 鉴权指令

对于单个元素，提供了 `v-auth` 指令。

```vue-html
<!-- 单权限验证 -->
<button v-auth="'department.create'">新增部门</button>

<!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 -->
<button v-auth="['department.create', 'department.edit']">新增部门</button>

<!-- 多权限验证，用户必须具备全部权限，才验证通过 -->
<button v-auth.all="['department.create', 'department.edit']">新增部门</button>
```

## 鉴权组件

页面中某个模块，当前用户具备该权限是如何显示，不具备该权限又是如何显示，针对这样的需求，框架提供了 `<Auth>` 组件。

```vue-html
<!-- 单权限验证 -->
<Auth :value="'department.create'">
  <p>你有该权限</p>
  <template #no-auth>
    <p>你没有该权限</p>
  </template>
</Auth>

<!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 -->
<Auth :value="['department.create', 'department.edit']">
  <p>你有该权限</p>
  <template #no-auth>
    <p>你没有该权限</p>
  </template>
</Auth>

<!-- 多权限验证，用户必须具备全部权限，才验证通过 -->
<Auth :value="['department.create', 'department.edit']" all>
  <p>你有该权限</p>
  <template #no-auth>
    <p>你没有该权限</p>
  </template>
</Auth>
```

## 鉴权函数

鉴权组件和鉴权指令控制的是页面上的元素，而鉴权函数则更多是使用在业务流程代码里的权限判断。

```ts
import useAuth from '@/utils/composables/useAuth'
const { auth, authAll } = useAuth()

// 单权限验证，返回 true 或 false
auth('department.create')

// 多权限验证，用户只要具备其中任何一个权限，则验证通过，返回 true 或 false
auth(['department.create', 'department.edit'])

// 多权限验证，用户必须具备全部权限，才验证通过，返回 true 或 false
authAll(['department.create', 'department.edit'])
```
