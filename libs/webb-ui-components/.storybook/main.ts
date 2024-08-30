import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';
import path from 'node:path';
import remarkGfm from 'remark-gfm';
import svgr from 'vite-plugin-svgr';

// eslint-disable-next-line @nx/enforce-module-boundaries
import rootMain from '../../../.storybook/main';

export default {
  stories: [
    ...rootMain.stories,
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    ...rootMain.addons,
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-themes',
    '@nx/react/plugins/storybook',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {
      nextAppDir: path.join(__dirname, '../'),
    },
  },
  viteFinal: (config) => {
    return {
      ...config,
      plugins: [...(config.plugins ?? []), svgr({})],
    };
  },
} satisfies StorybookConfig;
