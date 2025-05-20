// index.js (両方のUI維持版)
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'; // next/dynamicをインポート
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import ProductSelection from '../components/ProductSelection';
import EquipmentPoints from '../components/EquipmentPoints';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Bonus from '../components/Bonus';
import Footer from '../components/Footer';
import TargetSelector from '../components/TargetSelector';
import TargetSelectorModal from '../components/TargetSelectorModal';
import useTargetUser from '../hooks/useTargetUser';
import Head from 'next/head';

// Bonusコンポーネントを動的にインポート（カウントダウンタイマーを含むため）
const DynamicBonus = dynamic(() => import('../components/Bonus'), {
  ssr: false,
  loading: () => <div className="section">Loading bonus section...</div>
});

const Home = () => {
  const targetUser = useTargetUser();

  useEffect(() => {
    // スクロールアニメーションの初期化などを行うことができます
    const handleScroll = () => {
      // スクロール時の処理（必要であれば）
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPageTitle = () => {
    switch (targetUser) {
      case 'intermediate':
        return 'スキンダイビングアップグレードセット | 中級者向け高品質装備';
      case 'advanced':
        return 'スキンダイビングプロフェッショナルセット | 競技者向け最高級装備';
      default:
        return 'スキンダイビングスターターセット | 初心者向け厳選装備';
    }
  };

  const getPageDescription = () => {
    switch (targetUser) {
      case 'intermediate':
        return '中級者向けスキンダイビング装備のアップグレードセット。長時間の快適性と高性能を両立した、プロも推奨する高品質セットを厳選。';
      case 'advanced':
        return 'プロフェッショナル向けスキンダイビング装備セット。競技レベルの最高性能を発揮する、トップアスリートも使用する最高級モデルを厳選。';
      default:
        return '初心者向けスキンダイビング装備のスターターセット。プロが厳選した初心者に最適なマスク・スノーケル・フィンのセットをご紹介。';
    }
  };

  return (
    <div>
      <Head>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header targetUser={targetUser} />
      <main>
        <Hero targetUser={targetUser} />
        <TargetSelector currentTarget={targetUser} /> {/* 通常の選択UIも維持 */}
        <Problem targetUser={targetUser} />
        <Solution targetUser={targetUser} />
        <ProductSelection targetUser={targetUser} />
        <EquipmentPoints targetUser={targetUser} />
        <Testimonials targetUser={targetUser} />
        <FAQ targetUser={targetUser} />
        <DynamicBonus targetUser={targetUser} />
      </main>
      <Footer targetUser={targetUser} />
      
      {/* モーダル形式のターゲットセレクター */}
      <TargetSelectorModal currentTarget={targetUser} />
    </div>
  );
};

export default Home;
