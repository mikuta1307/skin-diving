// Problem.js
import React, { useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/assetPath';

const Problem = ({ targetUser }) => {
  const problemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const items = problemRef.current.querySelectorAll('.problem-item');
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

    if (problemRef.current) {
      observer.observe(problemRef.current);
    }

    return () => {
      if (problemRef.current) {
        observer.unobserve(problemRef.current);
      }
    };
  }, []);

  const getContent = () => {
    switch (targetUser) {
      case 'intermediate':
        return {
          title: 'そろそろ装備を見直す時期ではありませんか？',
          problems: [
            '初心者用セットの限界を感じている',
            '長時間の使用でも疲れにくい装備が欲しい',
            '視界や呼吸のしやすさをもっと改善したい',
            '耐久性の高い本格的な装備が必要'
          ],
          imageSrc: getAssetPath('/svg/worry-icon.svg')
        };
      case 'advanced':
        return {
          title: 'プロと同じパフォーマンスを出せていますか？',
          problems: [
            '装備の性能差がタイムに影響している',
            '長時間の潜水でも快適な装備が必要',
            'より深く、より長く潜れる装備を探している',
            '競技レベルの品質を求めている'
          ],
          imageSrc: getAssetPath('/svg/worry-icon.svg')
        };
      default: // beginner
        return {
          title: '初めての装備選び、こんな悩みありませんか？',
          problems: [
            '何を基準に選べばいいのか',
            '安いものを買って失敗したくない',
            '自分の顔や足に合うか不安',
            '最初からプロ用は必要？'
          ],
          imageSrc: getAssetPath('/svg/worry-icon.svg')
        };
    }
  };

  const content = getContent();

  return (
    <section className="problem" id="problem" ref={problemRef}>
      <div className="container">
        <div className="problem-container">
          <div className="problem-content">
            <h2 className="problem-title">{content.title}</h2>
            <div className="problem-list">
              {content.problems.map((problem, index) => (
                <div key={index} className="problem-item">
                  {problem}
                </div>
              ))}
            </div>
          </div>
          <div className="problem-image">
            <img src={content.imageSrc} alt="悩んでいる人" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
