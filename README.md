# スキンダイビング スターターセット LP

## 📋 概要

「スキンダイビング スターターセット LP」は、架空のスキンダイビング用品販売サイトのランディングページです。このプロジェクトは架空のWebサイトであり、実在のサービスではありません。

コンセプトは「スキンダイビングを始めるなら、失敗しない装備選びが第一歩」をテーマに、初心者の方でも予算や目的に合わせて最適な装備を選べるよう、プロが厳選したスターターセットを紹介するLPです。

## 🛠️ 使用技術

- React
- Next.js
- HTML5
- CSS3
  - Flexbox
  - CSS Grid
  - CSS Animation
  - レスポンシブデザイン
- JavaScript
- Material Icons
- SVGアニメーション

## 🔒 検索エンジン対策

- `robots.txt` によるインデックス防止
- `meta robots` タグによる補完的な制御
- 架空サイトであることの明示的な記載

これらを設置することで、架空のサイトが実在のサービスと誤認されることを防止しています。

## ✨ 特徴

- **ターゲット層に応じた表示変更**: ユーザーの予算やニーズに合わせたコンテンツ表示
- **モダンなデザイン**: 海をイメージした爽やかな配色とクリーンなレイアウト
- **レスポンシブ対応**: モバイル、タブレット、デスクトップに最適化
- **アニメーション**: スクロール時のフェードインやホバーエフェクト
- **Material Icons活用**: 視認性の高いアイコンでユーザビリティ向上
- **SVGグラフィック**: 軽量で高品質な画像表現
- **アクセシビリティ対応**: セマンティックHTML構造、適切なコントラスト比

## 📱 レスポンシブデザイン

- モバイル（～767px）
  - すべてのセクションを縦一列に配置
  - 画面下部に固定表示される簡易CTA
  - ハンバーガーメニューによるナビゲーション
- タブレット（768px～1199px）
  - 商品セレクションを2カラムに変更
  - 装備選びのポイント解説を2カラム表示
- デスクトップ（1200px～）
  - 3カラムのグリッドレイアウトを商品セクションに使用
  - サイドバーに固定表示されるスティッキーCTA

## 🎨 配色

- プライマリーカラー: `#0077B6` (ディープブルー)
- セカンダリーカラー: `#00B4D8` (ライトブルー)
- アクセントカラー: `#FFD166` (イエロー)
- ダークカラー: `#03045E` (ネイビー)
- ライトカラー: `#CAF0F8` (ペールブルー)

## 📂 ディレクトリ構造

```
skin-diving/
├── public/
│   └── svg/
│       ├── logo.svg
│       ├── trust-badge1.svg
│       ├── trust-badge2.svg
│       ├── worry-icon.svg
│       ├── fit-icon.svg
│       ├── quality-icon.svg
│       ├── value-icon.svg
│       ├── mask-icon.svg
│       ├── snorkel-icon.svg
│       ├── fins-icon.svg
│       ├── bonus-icon.svg
│       ├── hero-bg.svg
│       ├── hero-bg-mobile.svg
│       ├── economy-set.svg
│       ├── standard-set.svg
│       ├── premium-set.svg
│       ├── mask.svg
│       ├── snorkel.svg
│       ├── fins.svg
│       ├── user1.svg
│       ├── user2.svg
│       ├── user3.svg
│       └── instructor.svg
├── src/
│   ├── pages/
│   │   ├── index.js
│   │   └── _app.js
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── Solution.jsx
│   │   ├── ProductSelection.jsx
│   │   ├── Product.jsx
│   │   ├── EquipmentPoints.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Bonus.jsx
│   │   ├── Footer.jsx
│   │   ├── CountdownTimer.jsx
│   │   └── TargetSelector.jsx
│   │   └── TargetSelectorModal.jsx
│   ├── hooks/
│   │   └── useTargetUser.js
│   └── styles/
│       ├── globals.css
│       ├── Header.css
│       ├── Hero.css
│       ├── Problem.css
│       ├── Solution.css
│       ├── ProductSelection.css
│       ├── Product.css
│       ├── EquipmentPoints.css
│       ├── Testimonials.css
│       ├── FAQ.css
│       ├── Bonus.css
│       ├── Footer.css
│       ├── CountdownTimer.css
│       └── TargetSelector.css
│       └── TargetSelectorModal.css
├── next.config.js
└── package.json
├── README.md
└── LICENSE
```

## 🌟 実装したセクション

1. **ヘッダー**: ロゴとナビゲーションリンク
2. **ヒーローセクション**: 水中スキンダイビング背景画像と主要メッセージ
3. **問題提起セクション**: 初心者が直面する悩みを視覚的に表現
4. **ソリューション紹介**: 初心者にセットがおすすめな理由
5. **商品セレクション**: 予算別3種類のスターターセット紹介
6. **装備選びのポイント解説**: マスク、スノーケル、フィンの選び方
7. **信頼性担保セクション**: ユーザーレビューと専門家のプロフィール
8. **よくある質問（FAQ）**: アコーディオン形式のQ&A
9. **限定特典セクション**: カウントダウンタイマー付きの期間限定特典
10. **まとめとフッター**: 最終CTAとダウンロード用のメールフォーム

## ⭐ デザイン上のこだわり

- **水中世界の表現**: 青を基調としたグラデーションで海中の美しさを表現
- **視覚的階層**: 重要な情報を視覚的に目立たせる配色とサイズ設計
- **アニメーションの活用**: スクロール時のフェードイン効果で視線を誘導
- **直感的な操作感**: ホバーエフェクトやアコーディオンUIで操作感を向上
- **余白の適切な活用**: 読みやすさとデザイン性のバランスを追求

## 📝 学んだこと・工夫した点

- React/Next.jsでのコンポーネント設計と状態管理
- ユーザーのターゲット層に応じた表示切り替えの実装
- レスポンシブデザインの段階的な最適化手法
- アニメーションの適切な使用によるUX向上
- Material Iconsの効果的な活用方法
- 商品選択プロセスのわかりやすい視覚化

## 📊 今後の改善点

- TypeScriptの導入によるコード品質の向上
- パフォーマンス最適化のさらなる改善
- A/Bテスト機能の実装によるコンバージョン率向上
- アクセシビリティ対応の強化
- より高度なユーザーセグメンテーション機能の追加

## 📜 ライセンス

このプロジェクトは架空のWebサイトです。  
コードは[MITライセンス](LICENSE)の下で公開しています。これは以下を意味します：

- 自由に使用、修正、配布可能（商用利用も含む）
- 著作権表示とライセンス表示を維持すること
- 作者は法的責任を負わない

※ 画像やSVGについても独自に作成したオリジナルのものとして扱いますが、同様にMITライセンスを適用します。

## 👨‍💻 作者

mikuta1307

https://mikuta1307.github.io/skin-diving/

---

※ このプロジェクトは架空の練習用LPであり、実在の団体やサービスとは関係ありません。
