// Footer.js
import React from 'react';

const Footer = ({ targetUser }) => {
  const getTitle = () => {
    switch (targetUser) {
      case 'intermediate':
        return 'あなたのスキンダイビングスキルを次のレベルへ';
      case 'advanced':
        return 'プロとしてのパフォーマンスを最大限に';
      default:
        return 'あなたのスキンダイビングライフを最高のスタートで';
    }
  };

  const getCtaText = () => {
    switch (targetUser) {
      case 'intermediate':
        return 'アップグレードセットを選ぶ';
      case 'advanced':
        return 'プロ仕様セットを選ぶ';
      default:
        return 'あなたにぴったりのセットを選ぶ';
    }
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer" id="footer">
      <div className="container footer-container">
        <h2 className="footer-title">{getTitle()}</h2>

        <div className="footer-cta">
          <a href="#products" className="btn btn-lg">{getCtaText()}</a>
        </div>

        <div className="footer-form">
          <h3 className="footer-form-title">無料の装備選びガイドをダウンロード</h3>
          <div className="footer-form-input">
            <input type="email" placeholder="メールアドレスを入力" />
            <button className="btn">ダウンロード</button>
          </div>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">会社概要</a>
          <a href="#" className="footer-link">プライバシーポリシー</a>
          <a href="#" className="footer-link">特定商取引法に基づく表記</a>
          <a href="#" className="footer-link">お問い合わせ</a>
          <a href="#" className="footer-link">FAQ</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {getCurrentYear()} スキンダイビングスターターセット All Rights Reserved.</p>
          <p>※このサイトは架空のLPであり、実在するサービスではありません。商品の購入や予約はできません。</p>
        </div>
      </div>

      {/* モバイル固定CTA */}
      <div className="mobile-fixed-cta">
        <a href="#products" className="btn">{getCtaText()}</a>
      </div>
    </footer>
  );
};

export default Footer;
