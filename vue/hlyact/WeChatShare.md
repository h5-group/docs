# 微信分享

## 开启微信分享（默认打开）

**配置文件在 `./src/config/Base.ts`**
将`USE_WECHAT_SHARE_SDK`设置为 true

## 微信分享默认信息配置

**配置文件在 `./src/config/WeChat.ts`**

|                    | 对应字段           |
| ------------------ | ------------------ |
| 默认微信分享标题   | WECHAT_SHARE_TITLE |
| 默认微信分享描述   | WECHAT_SHARE_DESC  |
| 开启微信分享 DEBUG | WECHAT_DEBUG       |
| 只启用微信环境     | WECHAT_ONLY        |

## 重新载入微信分享信息

项目加载时会根据配置文件自动加载微信分享，但有时需要更新微信分享信息的，则可以按照下面方法更新

```
import {reloadWeChatShare} from "@/components/WeChatShare"

  reloadWeChatShare({
    shareTitle: "分享标题",
    shareDesc: "分享描述",
    shareLink: "分享链接",
    logoFileName: "图标名称",
  });

```
