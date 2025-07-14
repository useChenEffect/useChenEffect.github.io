---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Bhan's KB"
  text: "Tech Share Hub"
  tagline: "Better late than never."
  image:
    src: /logo.svg
    alt: Bhan's KB Logo
  actions:
    - theme: brand
      text: 🚀 开始探索
      link: /markdown-examples
    - theme: alt
      text: 📖 API 示例
      link: /api-examples
    - theme: alt
      text: 🔧 工具集合
      link: /tools

features:
  - icon: 🎯
    title: 实用技术分享
    details: 精选前端开发中的实用技术和最佳实践，从基础概念到高级技巧，助你快速提升开发技能
    link: /frontend-tips
    linkText: 查看技术分享
  
  - icon: ⚡
    title: 高效开发工具
    details: 收集整理各种提升开发效率的工具和脚本，包括代码生成器、调试工具、性能优化等
    link: /dev-tools
    linkText: 探索工具集
  
  - icon: 📈
    title: 性能优化实战
    details: 深入分析网站性能优化策略，从加载速度到用户体验，提供可执行的优化方案
    link: /performance
    linkText: 学习优化
  
  - icon: 🔍
    title: 问题解决方案
    details: 整理开发过程中遇到的常见问题和解决方案，包括调试技巧、错误处理、兼容性处理等
    link: /solutions
    linkText: 查看方案
  
  - icon: 🌟
    title: 最新技术动态
    details: 跟踪前端技术发展趋势，分享新框架、新工具的使用心得和实践经验
    link: /tech-trends
    linkText: 了解动态
  
  - icon: 📚
    title: 学习资源整理
    details: 精心整理的学习资源，包括文档、教程、视频课程和实战项目，构建完整学习路径
    link: /resources
    linkText: 浏览资源
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.VPHero .name {
  font-size: 2.8rem !important;
}

@media (min-width: 640px) {
  .VPHero .name {
    font-size: 3.2rem !important;
  }
}

@media (min-width: 960px) {
  .VPHero .name {
    font-size: 3.6rem !important;
  }
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPFeature {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.VPFeature:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.VPFeatures .VPFeature .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>

