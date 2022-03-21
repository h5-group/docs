# 打包上线

构建前使用 `pnpm run lint` 检查除 reactivity-transform 以外的所有错误

代码校验完成后，运行`pnpm run build`打包代码

代码打包完成后，运行`pnpm run preview`检查打包后代码的可用性

确认不存在明显问题后提测
