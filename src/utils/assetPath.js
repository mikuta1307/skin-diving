// src/utils/assetPath.js
export const getAssetPath = (path) => {
  // 本番環境（GitHub Pages）ではbasePathを設定
  const basePath = process.env.NODE_ENV === 'production' ? '/skin-diving' : '';
  return `${basePath}${path}`;
};