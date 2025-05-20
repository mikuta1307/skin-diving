// ProductSelection.js
import React, { useState, useEffect, useRef } from 'react';
import Product from './Product';
import { getAssetPath } from '../utils/assetPath';

const ProductSelection = ({ targetUser }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const productsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const items = productsRef.current.querySelectorAll('.product-card');
          items.forEach(item => {
            item.classList.add('animate');
          });
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => {
      if (productsRef.current) {
        observer.unobserve(productsRef.current);
      }
    };
  }, []);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const getProducts = () => {
    switch (targetUser) {
      case 'intermediate':
        return [
          {
            type: 'economy',
            name: 'ステップアップスタンダードセット',
            price: '¥25,000前後',
            image: getAssetPath('/svg/economy-set.svg'),
            features: [
              '中級者向けの基本性能',
              'フィット感が向上した設計',
              '耐久性に優れた素材使用'
            ],
            recommendation: '「頻繁に使用する」「快適性を重視したい」方',
            link: '#'
          },
          {
            type: 'standard',
            name: '快適性重視プレミアムセット',
            price: '¥35,000前後',
            image: getAssetPath('/svg/standard-set.svg'),
            features: [
              '長時間の快適性を追求',
              '視界の広い高品質マスク',
              '疲れにくい設計のフィン'
            ],
            recommendation: '「性能にこだわりたい」「長時間の使用」を考えている方',
            link: '#'
          },
          {
            type: 'premium',
            name: 'プロフェッショナルセット',
            price: '¥45,000前後',
            image: getAssetPath('/svg/premium-set.svg'),
            features: [
              'プロも愛用するハイエンドモデル',
              'カーボン製の軽量かつ強力なフィン',
              '最高級素材で耐久性も抜群'
            ],
            recommendation: '「最高の性能を求める」「競技に参加する」方',
            link: '#'
          }
        ];
      case 'advanced':
        return [
          {
            type: 'economy',
            name: 'トレーニング用ハイスペックセット',
            price: '¥40,000前後',
            image: getAssetPath('/svg/premium-set.svg'),
            features: [
              '日常練習向けの高性能モデル',
              '軽量で長時間使用が快適',
              '耐久性に優れた競技仕様'
            ],
            recommendation: '「日常的に練習する」「気軽に使える本格装備が欲しい」方',
            link: '#'
          },
          {
            type: 'standard',
            name: 'プロフェッショナルセット',
            price: '¥55,000前後',
            image: getAssetPath('/svg/premium-set.svg'),
            features: [
              '競技レベルの性能',
              'カスタムフィット可能な設計',
              '最高クラスの視界と推進力'
            ],
            recommendation: '「競技参加を視野に」「最高の性能を求める」方',
            link: '#'
          },
          {
            type: 'premium',
            name: 'エリートアスリートモデル',
            price: '¥70,000前後',
            image: getAssetPath('/svg/premium-set.svg'),
            features: [
              'トッププロ仕様のハイエンドモデル',
              'オーダーメイドレベルのフィット感',
              '極限環境下でも性能を発揮'
            ],
            recommendation: '「競技で結果を出したい」「プロ並みのパフォーマンスを目指す」方',
            link: '#'
          }
        ];
      default: // beginner
        return [
          {
            type: 'economy',
            name: '週末の海を楽しみたい方向け エコノミーセット',
            price: '¥15,000前後',
            image: getAssetPath('/svg/economy-set.svg'),
            features: [
              '初心者に十分な基本性能',
              '軽量で持ち運びやすい',
              'コストパフォーマンスに優れた厳選アイテム'
            ],
            recommendation: '「まずは気軽に始めたい」「予算を抑えたい」方',
            link: '#'
          },
          {
            type: 'standard',
            name: '長く使える定番モデル スタンダードセット',
            price: '¥25,000前後',
            image: getAssetPath('/svg/standard-set.svg'),
            features: [
              '快適な装着感で長時間の使用も快適',
              '耐久性に優れた素材使用',
              '視界の広いマスクと呼吸しやすいスノーケル'
            ],
            recommendation: '「快適さを重視したい」「定期的に楽しみたい」方',
            link: '#'
          },
          {
            type: 'premium',
            name: '本格志向の方向け プレミアムセット',
            price: '¥35,000前後',
            image: getAssetPath('/svg/premium-set.svg'),
            features: [
              'プロも使用する高品質モデル',
              'フィット感と水中視界を最大化',
              '長期間使用しても性能が落ちにくい'
            ],
            recommendation: '「長く続ける予定」「性能にこだわりたい」方',
            link: '#'
          }
        ];
    }
  };

  const getTitle = () => {
    switch (targetUser) {
      case 'intermediate':
        return 'レベルに合わせて選べるアップグレードセット';
      case 'advanced':
        return 'プロフェッショナル向けラインナップ';
      default:
        return '価格で選ぶスターターセット';
    }
  };

  const getSubtitle = () => {
    switch (targetUser) {
      case 'intermediate':
        return '使用頻度や目的に応じて、最適なセットをご紹介します';
      case 'advanced':
        return '求める性能に合わせて、最適なプロモデルをご紹介します';
      default:
        return '予算や目的に応じて、最適なセットをご紹介します';
    }
  };

  const products = getProducts();

  return (
    <section className="product-selection" id="products" ref={productsRef}>
      <div className="container">
        <div className="product-selection-header">
          <h2 className="product-selection-title">{getTitle()}</h2>
          <p className="product-selection-subtitle">{getSubtitle()}</p>
        </div>

        {/* デスクトップ/タブレット用グリッド表示 */}
        <div className="products-grid">
          {products.map((product, index) => (
            <Product key={index} data={product} isStandard={product.type === 'standard'} />
          ))}
        </div>

        {/* モバイル用カルーセル */}
        <div className="products-carousel">
          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {products.map((product, index) => (
                <div key={index} className="carousel-item">
                  <Product data={product} isStandard={product.type === 'standard'} />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            {products.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSelection;
