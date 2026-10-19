import { fileURLToPath } from 'node:url';

export const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));
export const presentations = [
  {
    path: '2026/app-development-components-frameworks',
    title: 'App Development with Components',
  },
  {
    path: '2026/ai-infused-development-lessons-patterns',
    title: 'AI across the development cycle',
    videos: [{ slide: 9, clicks: 1 }],
  },
];
