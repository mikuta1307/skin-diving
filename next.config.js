/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 修正: リポジトリ名を正しく「skin-diving」に変更
  basePath: process.env.NODE_ENV === 'production' ? '/skin-diving' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/skin-diving/' : '',
  trailingSlash: true,  // 追加: URLの末尾にスラッシュを付ける
  // 画像最適化の無効化（GitHub Pages対応）
  images: {
    unoptimized: true
  },
  // Next.js 13.4以降の対応
  output: 'export'
};

module.exports = nextConfig;
