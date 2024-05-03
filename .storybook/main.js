const {VanillaExtractPlugin} = require("@vanilla-extract/webpack-plugin");

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/html-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: (config) => {
    config.plugins = [
      new VanillaExtractPlugin(),
      ...config.plugins,
    ];
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
