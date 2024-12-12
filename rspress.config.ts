import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/achobeta-portal/',
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
      },
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
