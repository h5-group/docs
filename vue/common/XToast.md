# 轻提示

轻提示目前使用方式基本上照搬了 Vant

**代码路径 `@/xcomponents/toast/XToast.ts`**

## 一般用法

```typescript
import { XToast } from "@/xcomponents";

XToast("这是一条提示");

XToast.loading("加载中");

XToast.success("成功了");

XToast.fail("失败了");

XToast.clear();
```

## 使用配置对象

```typescript
XToast(ToastOptions);

XToast.loading(ToastOptions);
```

```typescript
type ToastOptions = {
  type?: ToastType;
  message?: string | number;
  duration?: number;
  forbidClick?: boolean;
};
```
