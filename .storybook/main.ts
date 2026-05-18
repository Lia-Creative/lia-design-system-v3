import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  // When building for production we serve Storybook from /storybook on lia.build,
  // so asset URLs need to resolve at that prefix. Dev mode (storybook dev) stays
  // at root. See vercel.json + README "Deployment" for the routing story.
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/storybook/'
    }
    return config
  },
}
export default config