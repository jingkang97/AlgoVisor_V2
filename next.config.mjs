// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    devIndicators: {
      buildActivity: false, // Disable build activity overlay
    },
    compiler: {
      reactRemoveProperties: true,
    },
    webpack(config) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== "ReactRefreshWebpackPlugin"
      );
      return config;
    },
  };
  return nextConfig;
};
