// Solution.js
import React, { useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/assetPath';

const Solution = ({ targetUser }) => {
  const solutionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const features = solutionRef.current.querySelectorAll('.solution-feature');
          features.forEach(feature => {
            feature.classList.add('animate');
          });
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (solutionRef.current) {
      observer.observe(solutionRef.current);
    }

    return () => {
      if (solutionRef.current) {
        observer.unobserve(solutionRef.current);
      }
    };
  }, []);

  const getContent = () => {
    switch (targetUser) {
      case 'intermediate':
        return {
          title: 'だからこそ、アップグレードにはセットがおすすめ',
          features: [
            {
              icon: getAssetPath('/svg/fit-icon.svg'),
              title: '最適な適合性',
              text: '長時間の使用でも疲れにくい、あなたの体型に合った設計。プロが選んだフィット感抜群のモデルをセットに。'
            },
            {
              icon: getAssetPath('/svg/quality-icon.svg'),
              title: '中級者向け品質',
              text: '耐久性と性能を両立した中級者向けの装備。頻繁な使用にも耐える信頼性の高さが特徴です。'
            },
            {
              icon: getAssetPath('/svg/value-icon.svg'),
              title: '投資対効果',
              text: '個別購入よりもお得なセットで、コストパフォーマンスと性能アップを同時に実現。長く使えて満足度の高い装備です。'
            }
          ],
          ctaText: '6月限定割引アップグレードセットをチェック'
        };
      case 'advanced':
        return {
          title: 'プロフェッショナルセットだからできること',
          features: [
            {
              icon: getAssetPath('/svg/fit-icon.svg'),
              title: 'カスタムフィット',
              text: '選手仕様の装備で、あなたの体に完璧にフィット。最高のパフォーマンスを引き出す設計で深度と時間を拡張します。'
            },
            {
              icon: getAssetPath('/svg/quality-icon.svg'),
              title: 'プロ級の品質',
              text: '競技でも使用される最高級素材と構造。極限環境下でも性能を維持し、長期間の使用にも耐える耐久性を備えています。'
            },
            {
              icon: getAssetPath('/svg/value-icon.svg'),
              title: '最高のパフォーマンス',
              text: '一流メーカーの最高級モデルをセットで。わずかな違いが大きな差を生む、プロのために設計された装備です。'
            }
          ],
          ctaText: '6月限定割引プロ仕様セットをチェック'
        };
      default: // beginner
        return {
          title: 'だからこそ、初心者にはセットがおすすめ',
          features: [
            {
              icon: getAssetPath('/svg/fit-icon.svg'),
              title: '適合性',
              text: '初心者の多くの体型に合うよう設計された装備。無理なくフィットし、水中での快適性を確保します。'
            },
            {
              icon: getAssetPath('/svg/quality-icon.svg'),
              title: '品質',
              text: '安心して使える品質管理された商品のみ。耐久性も十分で、初心者の使用頻度に最適化されています。'
            },
            {
              icon: getAssetPath('/svg/value-icon.svg'),
              title: 'コスパ',
              text: '個別購入よりもお得なセット価格。必要なものだけをコストパフォーマンス良く手に入れられます。'
            }
          ],
          ctaText: '6月限定割引セットをチェック'
        };
    }
  };

  const content = getContent();

  return (
    <section className="solution" id="solution" ref={solutionRef}>
      <div className="container">
        <h2 className="solution-title">{content.title}</h2>
        <div className="solution-features">
          {content.features.map((feature, index) => (
            <div key={index} className="solution-feature">
              <img src={feature.icon} alt={feature.title} className="solution-feature-icon" />
              <h3 className="solution-feature-title">{feature.title}</h3>
              <p className="solution-feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="solution-cta">
          <a href="#products" className="btn btn-accent">{content.ctaText}</a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
