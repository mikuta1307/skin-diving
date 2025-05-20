module.exports = {
  // GitHub Pages用の設定
  basePath: process.env.NODE_ENV === 'production' ? '/skindiving-starter' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/skindiving-starter/' : '',
  // 画像最適化の無効化（GitHub Pages対応）
  images: {
    unoptimized: true
  }
}
