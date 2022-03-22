# 网络请求

目前只内置了 get、post 两种请求方式，其他可以自行添加，并逐步添加到代码库

**代码路径 `@/xcomponents/request/XRequest.ts`**

#### 组件开发目的

- 统一请求接口使用方式
- 解决 axios 中 get、post 使用方式不统一问题

## 一般用法（带请求 Toast）

无论任何请求方式，统一使用如下格式请求

`XRequest.[method](url, [paramsObject],[configObject]);`

```typescript
import { XRequest } from "@/xcomponents";

XRequest.get(url, { id: 1 });

XRequest.post(
  "url",
  {},
  {
    useLoading: false,
  }
);
```

## 静默请求（请求时不展示 Toast）

```typescript
import { XRequest } from "@/xcomponents";
XRequest.post(
  "url",
  { id: 2 },
  {
    useLoading: false,
  }
);
```

## configObject

```typescript
type requestContentType =
  | "application/json"
  | "application/x-www-form-urlencoded"
  | string;

type requestOptions = {
  // 是否使用Loading提示
  useLoading?: boolean;
  // contentType 类型，目前仅post支持
  contentType?: requestContentType;
};
```
