/* eslint-disable @typescript-eslint/quotes */
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.column.create({
    data: {
      title: "走进 WebAssembly 的世界",
      cover: "走进WebAssembly的世界.png",
      url: "https://juejin.cn/column/7210666370487681082",
      desc: "本专栏从 WebAssembly 的基础入手，由浅入深的系统化介绍了 WebAssembly 的相关技术、底层设计原理、语言、库与工具链，并结合有代表性的实际业务场景，探讨其未来发展方向、发展趋势，同大家一起走入 WebAssembly 的世界。",
      content: "",
      // oPrice: 299,
      // price: 199,
    },
  })
  await prisma.column.create({
    data: {
      title: "JavaScript - 对话面试官系列",
      cover: "JavaScript对话面试官系列.png",
      url: "https://juejin.cn/column/7077028611433168910",
      desc: "本系列要解决的问题就是对话面试官，问一个 JavaScript 知识点，我们可以由浅入深，深入浅出的去表达，去呈现给面试官。",
      content: "",
      // oPrice: 699,
      // price: 599,
    },
  })

  await prisma.column.create({
    data: {
      title: "React18 - 源码系列",
      cover: "React18源码系列.png",
      url: "https://juejin.cn/column/7149818417325801503",
      desc: "React18 - 源码系列",
      content: "",
      // oPrice: 699,
      // price: 599,
    },
  })

  await prisma.column.create({
    data: {
      title: "Vue源码解析",
      cover: "Vue源码解析.png",
      url: "https://juejin.cn/column/6969563635194527758",
      desc: "Vue源码解析",
      content: "",
      // oPrice: 399,
      // price: 299,
    },
  })

  // await prisma.column.create({
  //   data: {
  //     title: '上层框架最佳选择: Nuxt',
  //     cover: 'column-nuxt.png',
  //     desc: '上层框架最佳选择：Nuxt 是一个基于 Vue 的上层全栈通用框架，它提供了大量优秀特性提升开发效率和体验，因此是 Vue 栈上层框架的最佳选择之一。',
  //     content: `开箱即用的开发环境
  //     开发者对一款现代框架的一个重要要求就是开箱即用。在这方面 Nuxt 提供了如下能力：

  //     整合 Vue3 作为视图引擎；
  //     整合 Webpack5 和 Vite 作为打包工具；
  //     提供最新 ES 语法，零配置 TS 支持；
  //     内置 vue-router，基于文件的路由；
  //     内置 SSR 友好的全局状态管理模块；
  //     内置数据访问模块 useFetch 等等。
  //     良好的开发体验
  //     良好的开发体验主要来源于效率工具和避免重复劳动，这方面我们看一下 Nuxt 提供的能力：

  //     基于文件的路由支持；
  //     组件、依赖库、工具集的自动导入；
  //     内置的数据获取模块和新的编程范式；
  //     零配置的 TS 支持；
  //     插件、模块、中间件等多种复用机制。
  //     服务端能力
  //     Nuxt 内置了 Nitro 服务端引擎，能够同时提供 SSR 和 API 路由支持，这也就是说，除了能够提供服务端渲染能力，我们还能编写服务端接口，这使我们拥有了全栈开发能力。另外 API 兼容 node、connect、express，未来也可以把应用发布到 Node.js、Serverless 等服务器运行环境。

  //     不同场景解决方案
  //     为了满足开发者多种场景开发需求，Nuxt 提供了 5 种渲染模式：

  //     服务端渲染 SSR；
  //     客户端渲染 SPA；
  //     全静态内容生成 SSG；
  //     混合渲染模式 Hybrid；
  //     边缘渲染 Edge-render。
  //     在后面章节中，我们也将给大家详细介绍这几种模式的异同和选择。`,
  //   },
  // })
  await prisma.course.create({
    data: {
      title: "前端性能优化原理与实践",
      cover: "前端性能优化原理与实践.png",
      desc: "毫秒必争！深入理解前端性能原理，将晦涩的知识转化为可爱的生产力，建立你自己的优化技能索引目录",
      oPrice: 29,
      price: 20,
      url: "https://juejin.cn/book/6844733750048210957?utm_source=course_list",
    },
  })
  await prisma.course.create({
    data: {
      title: "现代 CSS",
      cover: "现代CSS.png",
      desc: "跟着前手淘前端技术专家一起进阶 CSS",
      oPrice: 99,
      price: 49,
      url: "https://juejin.cn/book/7223230325122400288?utm_source=course_list",
    },
  })
  await prisma.course.create({
    data: {
      title: "JavaScript 语言编程进阶",
      cover: "JavaScript语言进阶.png",
      desc: "从规范层面吃透 JavaScript，助力你快速实现前端能力跃迁",
      oPrice: 199,
      price: 99,
      url: "https://juejin.cn/book/7226969813581889575?utm_source=course_list",
    },
  })
  await prisma.course.create({
    data: {
      title: "TypeScript 框架开发实战",
      cover: "typescript框架开发.png",
      desc: "再现基于 TypeScript 的开源 Web 框架开发历程，助你跨入全栈工程师赛道！",
      oPrice: 99,
      price: 59,
      url: "https://juejin.cn/book/7256280698201243700?utm_source=course_list",
    },
  })
  await prisma.course.create({
    data: {
      title: "深入浅出微前端",
      cover: "深入浅出微前端.png",
      desc: "微前端的技术深度相对于 React 或者 Vue 框架要简单很多，但是它的广度却涵盖了前端知识的方方面面。本课程将会带你系统了解微前端的运行本质，有助于你在业务广度和技术深度上更进一层",
      oPrice: 99,
      price: 59,
      url: "https://juejin.cn/book/7258893482318626868",
    },
  })
  await prisma.course.create({
    data: {
      title: "Nest 通关秘籍",
      cover: "Nest通关秘籍.png",
      desc: "掌握 Nest 和各种后端中间件，成为真正的全栈工程师！",
      oPrice: 129,
      price: 79,
      url: "https://juejin.cn/book/7226988578700525605?scrollMenuIndex=1",
    },
  })
  await prisma.course.create({
    data: {
      title: "趣学 Node.js",
      cover: "趣学Nodejs.png",
      desc: "带你重新体悟 Node.js 之美",
      oPrice: 49,
      price: 39,
      url: "https://juejin.cn/book/7196627546253819916?utm_source=course_list",
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt3全栈开发',
      cover: 'Nuxt3全栈开发.png',
      desc: '这门课我会全面讲解 Nuxt3 核心知识，然后在后端开发方面做一个知识扩展，最后带大家完成一个完整的实战项目。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：
      模块一，将从渲染模式等基础概念出发，先扭转一些同学的固有思维，补充缺失知识；
      模块二，结合个人博客案例，深入学习 Nuxt3 核心特性；
      模块三，解决项目工程化问题，从扩展性、复用性等角度深入了解模块等框架进阶知识；
      模块四，将为项目实战做准备，给大家讲解全栈知识，包括数据库设计、接口设计和开发，大家会接触并掌握 Apifox、Prisma 等前端比较时髦的新工具；
      模块五，项目实战，我会带大家开发一个知识分享社区主题的全栈项目，包括了从接口开发，到前端开发，再到优化、部署和持续集成的全流程实战。
      相信学习完本小册，会让你深入掌握 Nuxt3 的同时，还能全方位提升自己的知识深度和架构水平。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })

  await prisma.banner.create({
    data: {
      src: "./Vue.png",
      url: "https://vuejs.org/",
    },
  })
  await prisma.banner.create({
    data: {
      src: "./react.png",
      url: "https://react.dev/",
    },
  })
  await prisma.banner.create({
    data: {
      src: "./vite.png",
      url: "https://vitejs.dev/",
    },
  })
  await prisma.banner.create({
    data: {
      src: "./webpack.png",
      url: "https://webpack.js.org/",
    },
  })
  await prisma.banner.create({
    data: {
      src: "./nuxt.png",
      url: "https://nuxt.com/",
    },
  })
  await prisma.banner.create({
    data: {
      src: "./next.png",
      url: "https://nextjs.org/",
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
