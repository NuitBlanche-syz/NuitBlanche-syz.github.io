import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: "/",
  title: '🌸🌸🌸',
  description: 'NuitBlanche',
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/': [
        {
          text: 'syz && wjx',
          // 相对路径会自动追加子路径前缀
          children: [
            {
              text: 'love 璇宝',
              link: '/lovewjx/'
            },
            {
              text: 'love 舟宝',
              link: '/lovesyz/'
            }
          ],
        },
      ],
      '/lovewjx/': 'heading',
      '/lovesyz/': 'heading',
    },
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
})