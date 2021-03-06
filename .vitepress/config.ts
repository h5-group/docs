import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "讯飞樽鸿大前端快速开发指南",
  themeConfig: {
    // 顶部导航栏内容
    nav: [
      { text: "Vue开发指南", link: "/", activeMatch: "^/$|^/vue/" },
      // {
      //   text: "Config Reference",
      //   link: "/config/basics",
      //   activeMatch: "^/config/",
      // },
      // {
      //   text: "Release Notes",
      //   link: "https://github.com/vuejs/vitepress/releases",
      // },
    ],
    // 侧边栏导航内容
    sidebar: {
      "/vue/": getVueSidebar(),
      // "/config/": getConfigSidebar(),
      "/": getVueSidebar(),
    },
    // algolia: {
    //   appId: "8J64VVRP8K",
    //   apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //   indexName: "vitepress",
    // },
  },
});

function getVueSidebar() {
  return [
    {
      text: "指南",
      children: [
        { text: "提前准备", link: "/vue/guide/Prepare" },
        { text: "代码风格", link: "/vue/guide/CodeStyle" },
        { text: "打包上线", link: "/vue/guide/Build" },
      ],
    },
    {
      text: "通用组件和功能",
      link: "/vue/common/index",
      children: [
        { text: "网络请求", link: "/vue/common/XRequest" },
        { text: "轻提示", link: "/vue/common/XToast" },
        { text: "预处理输入框", link: "/vue/common/XInput" },
        { text: "多国语言", link: "/vue/common/I18n" },
        { text: "其他功能", link: "/vue/common/Other" },
      ],
    },
    {
      text: "常规项目开发",
      link: "/vue/general/index",
      children: [{ text: "快速开始", link: "/vue/general/GettingStarted" }],
    },
    {
      text: "和留言活动开发",
      children: [
        { text: "快速开始", link: "/vue/hlyact/GettingStarted" },
        { text: "预设功能", link: "/vue/hlyact/GettingStarted" },
        { text: "配置活动信息", link: "/vue/hlyact/ActivityInformation" },
        { text: "使用百度统计", link: "/vue/hlyact/BaiduTrack" },
        { text: "微信相关功能", link: "/vue/hlyact/WeChat" },
        { text: "登录", link: "/vue/hlyact/Login" },
      ],
    },
  ];
}

function getConfigSidebar() {
  return [
    {
      text: "App Config",
      children: [{ text: "Basics", link: "/config/basics" }],
    },
    {
      text: "Theme Config",
      children: [
        { text: "Homepage", link: "/config/homepage" },
        { text: "Algolia Search", link: "/config/algolia-search" },
        { text: "Carbon Ads", link: "/config/carbon-ads" },
      ],
    },
  ];
}
