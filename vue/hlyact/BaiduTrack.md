# 百度统计

框架对百度统计进行了一次封装，载入页面时，会自动统计页面 PV，也可统计各种事件。

## 配置统计类别

在官方定义中，类别为要监控的目标的类型名称，通常是同一组目标的名字，比如"视频"、"音乐"、"软件"、"游戏"等等。这里我们一般设置为项目名称。

**配置文件在 `./src/config/ActivityInformation.ts`，配置 `BAIDU_TRACK_CATEGORY`字段**

## 统计事件

目前框架内部只预定义了统计点击事件的函数，如需统计其他类型的事件（如播放），可以按照代码举一反三。

### 预定义事件

源码路径`./src/components/BaiduTrack`，例子如下

```typescript
export const trackClick = (name: string, value = ""): void => {
  const action = "click";
  trackAction(action, name, value);
};

trackClick.getBenefit = () => {
  trackClick("getBenefit");
};
```

### 使用

```typescript
import { trackAction, trackClick } from "@/components/BaiduTrack";

// 统计已定义事件
trackClick.getBenefit();

// 统计未定义点击事件
trackClick("按钮", "按钮id");

// 统计未定义事件
trackAction("播放事件", "播放留言", "留言id");
```
