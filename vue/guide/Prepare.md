# 提前准备

## 开发要求

- 代码保存时需使用 Prettier 格式化代码以保证代码格式统一（需要开启保存时自动格式化: VSCode-> 首选项->设置->Format On Save）
- 避免依赖问题，统一使用 pnpm 进行包管理，安装命令： `npm i pnpm -g`
- 开发框架时使用严格使用 TypeScript，尽量避免使用 any 类型
- 使用框架开发业务时无需使用 TypeScript，可直接混写 JS
- 提交代码前使用 `pnpm run lint` 检查除 reactivity-transform 以外的所有错误

## 编辑器和插件

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) ( 请禁用 Vetur 再安装 )
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [pnpm](https://pnpm.io/)

## 可参考文档

- [Vue3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [pinia](https://pinia.vuejs.org)
- [TypeScript](https://zhuanlan.zhihu.com/p/405982472)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [代码风格](https://vuejs.org/style-guide/)
