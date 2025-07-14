import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bhan's Frontend KB",
  description: "前端技术知识分享平台 - 实用技术、开发工具、性能优化、问题解决方案",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:title', content: "Bhan's Frontend KB | 前端技术知识分享" }],
    ['meta', { property: 'og:site_name', content: "Bhan's Frontend KB" }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://usechen-effect.github.io/' }],
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: "Bhan's KB",
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { 
        text: '📚 知识库', 
        items: [
          { text: '前端技巧', link: '/frontend-tips' },
          { text: '开发工具', link: '/dev-tools' },
          { text: '性能优化', link: '/performance' },
          { text: '问题解决', link: '/solutions' }
        ]
      },
      { text: '🔧 工具集', link: '/tools' },
      { text: '📖 示例', link: '/markdown-examples' },
      { text: '🌟 趋势', link: '/tech-trends' }
    ],

    sidebar: {
      '/': [
        {
          text: '快速开始',
          items: [
            { text: 'Markdown 示例', link: '/markdown-examples' },
            { text: 'API 示例', link: '/api-examples' }
          ]
        }
      ],
      '/frontend-tips/': [
        {
          text: '前端技巧',
          items: [
            { text: 'JavaScript 技巧', link: '/frontend-tips/javascript' },
            { text: 'CSS 技巧', link: '/frontend-tips/css' },
            { text: 'Vue.js 实践', link: '/frontend-tips/vue' },
            { text: 'React 技巧', link: '/frontend-tips/react' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/useChenEffect' }
    ],
    
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/useChenEffect/useChenEffect.github.io/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Bhan`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
