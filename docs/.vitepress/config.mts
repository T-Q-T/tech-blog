import { defineConfig } from "vitepress";
import { bookSideBarConfig } from "../knowledge/book/config";
import { algorithmSidebarConfig } from "../knowledge/algorithm/index";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QT",
  description: "学习记录",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "知识库", link: "/knowledge/javascript/newKnowledge" },
      // { text: "文集", link: "/article/" },
      // { text: "小游戏", link: "/games/" },
      // { text: "工具集", link: "/tools/" },
    ],

    sidebar: {
      "": [],

      "/knowledge/": [
        {
          text: "JavaScript",
          collapsed: false,
          items: [
            { text: "一些新知识", link: "/knowledge/javascript/newKnowledge" },
          ],
        },
        {
          text: "正则表达式",
          collapsed: false,
          items: [
            { text: "正则小记", link: "/knowledge/reg/index" },
          ],
        },
        {
          text: "CSS",
          collapsed: false,
          items: [
          ],
        },
        {
          text: "设计模式",
          collapsed: false,
          items: [
            { text: "策略模式", link: "/knowledge/design-patterns/strategy" },
            { text: "单例模式", link: "/knowledge/design-patterns/singleton" },
            { text: "发布订阅模式", link: "/knowledge/design-patterns/pubsub" },
            { text: "观察者模式", link: "/knowledge/design-patterns/observer" },
            { text: "工厂模式", link: "/knowledge/design-patterns/factory" },
            { text: "适配器模式", link: "/knowledge/design-patterns/adapter" },
            { text: "装饰器模式", link: "/knowledge/design-patterns/decorator" },
            { text: "迭代器模式", link: "/knowledge/design-patterns/iterator" },
            { text: "原型模式", link: "/knowledge/design-patterns/prototype" },
            { text: "代理模式", link: "/knowledge/design-patterns/proxy" },
          ],
        },
        {
          text: "算法",
          collapsed: false,
          items: algorithmSidebarConfig,
        },
        {
          text: "Book",
          collapsed: true,
          items: bookSideBarConfig,
        },
        {
          text: "计算机网络",
          collapsed: true,
          link: "/knowledge/network/",
          items: [
            { text: "HTTP", link: "/knowledge/network/http" },
            { text: "WebSocket", link: "/knowledge/network/websocket" },
            { text: "TCP/UDP", link: "/knowledge/network/tcp" },
            { text: "RPC", link: "/knowledge/network/rpc" },
            { text: "DNS", link: "/knowledge/network/dns" },
            { text: "跨域", link: "/knowledge/network/cors" },
          ],
        },
        {
          text: "前端安全",
          collapsed: true,
          link: "/knowledge/security/",
          items: [
            { text: "csrf", link: "/knowledge/security/csrf" },
            { text: "xss", link: "/knowledge/security/xss" }
          ],
        },
        {
          text: "TypeScript",
          collapsed: true,
          link: "/knowledge/typescript/",
          items: [],
        },
        {
          text: "NodeJS",
          collapsed: true,
          link: "/knowledge/nodejs/",
          items: [],
        },
        {
          text: "Vue",
          collapsed: true,
          link: "/knowledge/vue/",
          items: [],
        },
        {
          text: "React",
          collapsed: true,
          link: "/knowledge/react/",
          items: [],
        },
        {
          text: "Angular",
          collapsed: true,
          link: "/knowledge/angular/",
          items: [],
        },
        {
          text: "RxJS",
          collapsed: true,
          link: "/knowledge/rxjs/",
          items: [],
        },
        {
          text: "工作流",
          collapsed: true,
          items: [
            { text: "git", link: "/knowledge/workflow/git" },
          ],
        },
        {
          text: "杂记",
          collapsed: false,
          items: [
            {
              text: "css",
              collapsed: false,
              items: [
              ],
            },
          ],
        },
      ],
      "/article/": [
        {
          text: "算法",
          collapsed: false,
          items: [
          ],
        },
        {
          text: "服务器",
          collapsed: false,
          items: [
          ],
        },
      ],
      "/python/firstAcquaintance": [
        {
          text: "初识 Python",
          items: [
            { text: "语言背景及处理场景", link: "/python/firstAcquaintance/background" },
            { text: "应用场景", link: "/python/firstAcquaintance/scene" },
          ],
        }, {
          text: "语言基础",
          items: [
            {
              text: "基本数据类型与操作",
              link: "/python/firstAcquaintance/base/dataBase"
            },
            {
              text: "语句",
              link: "/python/firstAcquaintance/base/statement"
            }
          ]
        }
      ]
    },
  },
  head: [
    [
      "script",
      {
        async: "",
        type: "module",
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs",
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
  ],
  base: "/tech-blog/",
});
