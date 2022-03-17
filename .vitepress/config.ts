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
        { text: "介绍", link: "/vue/index" },
        { text: "提前准备", link: "/vue/guide/Prepare" },
        { text: "代码风格", link: "/vue/guide/CodeStyle" },
        { text: "打包上线", link: "/vue/guide/Build" },
      ],
    },
    {
      text: "和留言活动开发",
      children: [
        { text: "快速开始", link: "/vue/hlyact/GettingStarted" },
        { text: "活动信息配置", link: "/vue/hlyact/ActivityInformation" },
        { text: "配置微信相关功能", link: "/vue/hlyact/WeChat" },
        {
          text: "登录",
          children: [
            {
              text: "蜂窝登录（一键登录）",
              link: "/vue/hlyact/CellularLogin",
            },
          ],
        },
        {
          text: "其他功能",
          children: [
            {
              text: "调试",
              link: "/vue/hlyact/",
            },
            {
              text: "任意环境强制开启控制台",
              link: "/vue/hlyact/",
            },

            {
              text: "AES加密秘钥配置",
              link: "/vue/hlyact/",
            },
          ],
        },
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
