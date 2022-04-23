# 基础组件

基础组件由 Element Plus 提供，其中包含**按钮**、**文字链接**、**单选框**、**多选框**、**输入框**、**计数器**、**级联选择器**、**开关**、**滑块**等 **50+** 个组件。

阅读并学习请查看 [Element Plus 官方文档](https://element-plus.org/#/zh-CN)。

## 注意事项

框架严格按照 Element Plus 推荐的使用方式进行引入，即按需自动导入，意味着你可以直接在代码里使用组件，而无需手动注册。

但也意味着 Element Plus 一些全局方法将无法使用，例如 Message 消息提示组件。

```js:no-line-numbers
// 无法使用
const { proxy } = getCurrentInstance()
proxy.$message.success(options)

// 可以使用
ElMessage.success(options)
```

另外因为框架没有采用 Element Plus 官方的图标使用方式，这也意味着部分组件的 icon 属性将无法使用，例如 Button 按钮组件。

```vue:no-line-numbers
<!-- 无法使用 -->
<el-button icon="el-icon-edit">编辑</el-button>

<!-- 可以使用插槽代替 -->
<el-button>
    <template #icon>
        <el-icon>
            <svg-icon name="ep:edit" />
        </el-icon>
    </template>
    编辑
</el-button>
```