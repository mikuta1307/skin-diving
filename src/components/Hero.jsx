// Hero.js
import React from 'react';

const Hero = ({ targetUser }) => {
  const getContent = () => {
    switch (targetUser) {
      case 'intermediate':
        return {
          title: 'スキンダイビングをさらに楽しむための最適な装備',
          subtitle: 'ステップアップしたい方に、プロ仕様の快適セット',
          ctaText: 'アップグレードセットを見る'
        };
      case 'advanced':
        return {
          title: '極めるためのプロフェッショナル装備',
          subtitle: '本格派ダイバーのための最高級セット',
          ctaText: 'プロ仕様セットを見る'
        };
      default: // beginner
        return {
          title: 'スキンダイビングを始めるなら、失敗しない装備選びが第一歩',
          subtitle: 'プロが厳選！初心者に最適なスターターセット',
          ctaText: 'あなたにぴったりのセットを選ぶ'
        };
    }
  };

  const content = getContent();

  return (
    <section className="hero" id="hero">
      <img
        //src={`/svg/hero-bg${targetUser !== 'beginner' ? '-' + targetUser : ''}.svg`}
        src="/svg/hero-bg.svg"
        alt="スキンダイビング背景"
        className="hero-bg"
      />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{content.title}</h1>
          <h2 className="hero-subtitle">{content.subtitle}</h2>
          <div className="hero-cta">
            <a href="#products" className="btn btn-lg">{content.ctaText}</a>
          </div>
          <div className="hero-badges">
            <img src="/svg/trust-badge1.svg" alt="プロ推奨品質" className="hero-badge" />
            <img src="/svg/trust-badge2.svg" alt="安心保証付き" className="hero-badge" />
          </div>
        </div>
      </div>
      <div className="hero-wave"></div>
    </section>
  );
};

export default Hero;
