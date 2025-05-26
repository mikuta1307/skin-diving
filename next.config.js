// next.config.js
const isGitHub = process.env.TARGET_ENV === 'github';

module.exports = {
  reactStrictMode: true,
  basePath: isGitHub ? '/skin-diving' : '',
  assetPrefix: isGitHub ? '/skin-diving/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  output: 'export'
};
