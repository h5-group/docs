# 预处理输入框

输入框自带了一些预处理逻辑
代码路径 `@/xcomponents/input/XInput.tsx`

::: warning
该组件目前存在一些不影响功能的小问题，待后续优化
https://its401.com/article/weixin_43550660/103220424
:::

#### 组件开发目的

- 校验逻辑复用

## XInputPhone

```vue
<XInputPhone
  class="sms-login-window-content-phone-input login-input"
  v-model.trim="inputPhone"
  placeholder="请输入中国移动手机号"
  ref="refInputPhone"
></XInputPhone>
```

### 功能

- 手机号校验
- 长度限制

### Expose

|  名称   | 说明                       | 类型 | 参数 | 返回值                  |
| :-----: | -------------------------- | ---- | ---- | ----------------------- |
| checked | 输入的内容是否通过内置校验 | 变量 | -    | ComputedRef `<boolean>` |

## XInputCode

```vue
<XInputCode
  class="sms-login-window-content-sms-input login-input"
  v-model.trim="inputSMSCode"
  length="6"
  placeholder="请输入验证码"
  ref="refInputSMSCode"
></XInputCode>
```

### 功能

- 长度限制

### Props

|  名称  | 说明       | 类型             | 默认值 |
| :----: | ---------- | ---------------- | ------ |
| length | 验证码长度 | [Number, String] | null   |

### Expose

|  名称   | 说明                       | 类型 | 参数 | 返回值                  |
| :-----: | -------------------------- | ---- | ---- | ----------------------- |
| checked | 输入的内容是否通过内置校验 | 变量 | -    | ComputedRef `<boolean>` |
