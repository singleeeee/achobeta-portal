import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/achobeta-portal/',
  // globalStyles: path.join(__dirname, 'src/styles/index.css'),
  title: 'AchoBeta',
  icon: '/achobeta.jpg',
  logoText: 'AchoBeta',
  lang: 'zh',
  logo: {
    light: '/achobeta.svg',
    dark: '/achobeta.svg',
  },
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'AchoBeta',
      description: 'A software development innovation laboratory full of passion.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'AchoBeta',
      description: '一个充满热情的软件开发创新实验室',
    },
  ],
  themeConfig: {
    enableContentAnimation: true,
    lastUpdated: true,
    locales: [
      {
        label: 'English',
        lang: 'en',
        outlineTitle: 'ON THIS Page',
      },
      {
        label: '简体中文',
        lang: 'zh',
        outlineTitle: '大纲',
        prevPageText: '上一页',
        nextPageText: '下一页',
        searchPlaceholderText: '搜索文档',
        lastUpdatedText: '上次更新时间'
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/AchoBeta',
      },
    ],
  },
});
