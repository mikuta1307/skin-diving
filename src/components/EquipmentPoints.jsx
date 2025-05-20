// EquipmentPoints.js
import React, { useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/assetPath';

const EquipmentPoints = ({ targetUser }) => {
  const pointsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const points = pointsRef.current.querySelectorAll('.equipment-point');
          points.forEach(point => {
            point.classList.add('animate');
          });
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (pointsRef.current) {
      observer.observe(pointsRef.current);
    }

    return () => {
      if (pointsRef.current) {
        observer.unobserve(pointsRef.current);
      }
    };
  }, []);

  const getTitle = () => {
    switch (targetUser) {
      case 'intermediate':
        return 'アップグレードで重視すべき3つのポイント';
      case 'advanced':
        return 'プロ装備選びの3つの重要ポイント';
      default:
        return '失敗しない装備選びの3つのポイント';
    }
  };

  const getPoints = () => {
    switch (targetUser) {
      case 'intermediate':
        return [
          {
            icon: getAssetPath('/svg/mask-icon.svg'),
            title: 'マスク',
            text: '広視界と長時間の快適性を両立。顔にフィットするシリコン素材のものを選び、水漏れを防ぎながら視界を確保しましょう。',
            image: getAssetPath('/svg/mask.svg')
          },
          {
            icon: getAssetPath('/svg/snorkel-icon.svg'),
            title: 'スノーケル',
            text: '呼吸の抵抗が少なく、パージバルブ付きのモデルが理想的。水の侵入を最小限に抑え、排水が簡単なものを選びましょう。',
            image: getAssetPath('/svg/snorkel.svg')
          },
          {
            icon: getAssetPath('/svg/fins-icon.svg'),
            title: 'フィン',
            text: '適度な硬さと柔軟性を持ったミディアムブレードが推奨。長時間使用しても疲れにくく、推進力の高いモデルを選びましょう。',
            image: getAssetPath('/svg/fins.svg')
          }
        ];
      case 'advanced':
        return [
          {
            icon: getAssetPath('/svg/mask-icon.svg'),
            title: 'マスク',
            text: '低容積で水の抵抗を減らし、視界を最大化する設計。顔の形に合わせたカスタムフィットが重要で、競技用の高品質モデルを選びましょう。',
            image: getAssetPath('/svg/mask.svg')
          },
          {
            icon: getAssetPath('/svg/snorkel-icon.svg'),
            title: 'スノーケル',
            text: '競技用に設計された低抵抗モデル。呼吸効率を最大化し、水の侵入を完全に防ぐドライトップタイプが理想的です。',
            image: getAssetPath('/svg/snorkel.svg')
          },
          {
            icon: getAssetPath('/svg/fins-icon.svg'),
            title: 'フィン',
            text: 'カーボンファイバーなど高剛性素材で、最大の推進力を実現。足のサイズと筋力に合った硬さを選び、長時間の使用でもパフォーマンスを維持できるものを。',
            image: getAssetPath('/svg/fins.svg')
          }
        ];
      default: // beginner
        return [
          {
            icon: getAssetPath('/svg/mask-icon.svg'),
            title: 'マスク',
            text: '顔にフィットするものを。漏水の原因になるため、サイズ選びが最も重要です。試着して確認しましょう。',
            image: getAssetPath('/svg/mask.svg')
          },
          {
            icon: getAssetPath('/svg/snorkel-icon.svg'),
            title: 'スノーケル',
            text: '呼吸のしやすさを重視。シンプルな構造のものから始めて、慣れてきたら機能的なモデルにステップアップしましょう。',
            image: getAssetPath('/svg/snorkel.svg')
          },
          {
            icon: getAssetPath('/svg/fins-icon.svg'),
            title: 'フィン',
            text: 'サイズと硬さが重要。初心者は柔らかめのフィンから始めると足への負担が少なく、長く使えます。',
            image: getAssetPath('/svg/fins.svg')
          }
        ];
    }
  };

  const points = getPoints();
  const ctaText = targetUser === 'advanced' ? 'プロ向け詳細な選び方をダウンロード' : '詳しい選び方をダウンロード';

  return (
    <section className="equipment-points" id="guide" ref={pointsRef}>
      <div className="container">
        <div className="equipment-points-header">
          <h2 className="equipment-points-title">{getTitle()}</h2>
        </div>
        <div className="equipment-points-grid">
          {points.map((point, index) => (
            <div key={index} className="equipment-point">
              <img src={point.icon} alt={point.title} className="equipment-point-icon" />
              <h3 className="equipment-point-title">
                <span className="equipment-point-number">{index + 1}</span>
                {point.title}
              </h3>
              <p className="equipment-point-text">{point.text}</p>
              <div className="equipment-point-image">
                <img src={point.image} alt={point.title} />
              </div>
            </div>
          ))}
        </div>
        <div className="equipment-cta">
          <a href="#" className="btn">{ctaText}</a>
        </div>
      </div>
    </section>
  );
};

export default EquipmentPoints;
