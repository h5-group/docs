# 微信相关功能

## 微信分享

### 开启微信分享（默认打开）

**配置文件在 `./src/config/Base.ts`**
将 `USE_WECHAT_SHARE_SDK`设置为 true

### 微信分享默认信息配置

**配置文件在 `./src/config/WeChat.ts`**

| 功能               | 对应字段                   |
| ------------------ | -------------------------- |
| 默认分享标题       | WECHAT_SHARE_TITLE         |
| 默认分享描述       | WECHAT_SHARE_DESC          |
| 默认分享图标文件名 | WECHAT_SHARE_LOGO_FILENAME |
| 开启微信分享 DEBUG | WECHAT_DEBUG               |

> 注：微信分享图标存放于 public 文件夹下

### 重新载入微信分享信息

项目加载时会根据配置文件自动加载微信分享，但有时需要更新微信分享信息的，则可以按照下面方法更新。

```javascript
import { reloadWeChatShare } from "@/components/WeChatShare";

reloadWeChatShare({
  shareTitle: "分享标题",
  shareDesc: "分享描述",
  shareLink: "分享链接",
  logoFileName: "图标名称",
});
```

## 仅微信环境使用项目

框架支持将项目设置为仅微信环境使用，启用该功能后，将不支持在微信外访问，并且在微信内部打开会自动进行微信鉴权。

### 开启仅微信环境使用（默认关闭）

**配置文件在 `./src/config/WeChat.ts`**
将 `WECHAT_ONLY`设置为 true
