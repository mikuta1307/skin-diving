// Bonus.js
import React from 'react';
import CountdownTimer from './CountdownTimer';

const Bonus = ({ targetUser }) => {
  // 6月30日までのカウントダウン
  const targetDate = '2025-06-30T23:59:59';

  const getTitle = () => {
    switch (targetUser) {
      case 'intermediate':
        return '6月限定特別特典';
      case 'advanced':
        return 'プロセット特別限定オファー';
      default:
        return '今だけの特典';
    }
  };

  const getBonuses = () => {
    switch (targetUser) {
      case 'intermediate':
        return [
          {
            icon: '/svg/bonus-icon.svg',
            text: '期間限定：6月中の購入でアップグレードセット送料無料＆25%OFF'
          },
          {
            icon: '/svg/bonus-icon.svg',
            text: 'セット購入で専用ネオプレン素材防水バッグをプレゼント'
          }
        ];
      case 'advanced':
        return [
          {
            icon: '/svg/bonus-icon.svg',
            text: '期間限定：6月中の購入でプロモデル送料無料＆30%OFF'
          },
          {
            icon: '/svg/bonus-icon.svg',
            text: 'エリートモデル購入で競技用カスタムセッティング無料＆防水バッグ付き'
          }
        ];
      default: // beginner
        return [
          {
            icon: '/svg/bonus-icon.svg',
            text: '期間限定：6月中の購入で送料無料'
          },
          {
            icon: '/svg/bonus-icon.svg',
            text: 'セット購入で防水バッグをプレゼント'
          }
        ];
    }
  };

  const getCtaText = () => {
    switch (targetUser) {
      case 'intermediate':
        return '特典付きアップグレードセットを今すぐチェック';
      case 'advanced':
        return '限定特典付きプロモデルを今すぐチェック';
      default:
        return '特典付きセットを今すぐチェック';
    }
  };

  const bonuses = getBonuses();

  return (
    <section className="bonus" id="bonus">
      <div className="container bonus-container">
        <h2 className="bonus-title">{getTitle()}</h2>

        <div className="bonus-list">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bonus-item">
              <img src={bonus.icon} alt="ボーナス" className="bonus-icon" />
              <div className="bonus-text">{bonus.text}</div>
            </div>
          ))}
        </div>

        <div className="countdown">
          <div className="countdown-title">特典終了まで：</div>
          <CountdownTimer targetDate={targetDate} />
        </div>

        <div className="bonus-cta">
          <a href="#products" className="btn btn-lg">{getCtaText()}</a>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
