# 其他

## 强制开启控制台

当有异常需要调试时，可以通过给链接加上 `?debug=[DEBUG_KEY]` 的方式强制打开控制台，适用于任何环境

`DEBUG_KEY` 的值可在 `@/config/Base.ts` 中配置

## 配置 Token 变量名

配置文件在 `./src/config/Base.ts`，配置 `HEADER_TOKEN_STRING` 字段

配置和后端协商的在 Header 中携带的 token 变量名，默认为 `token`
