// Testimonials.js
import React, { useEffect, useRef } from 'react';

const Testimonials = ({ targetUser }) => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const cards = testimonialsRef.current.querySelectorAll('.testimonial-card');
          cards.forEach(card => {
            card.classList.add('animate');
          });
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const getTitle = () => {
    switch (targetUser) {
      case 'intermediate':
        return 'アップグレードして満足の声';
      case 'advanced':
        return 'プロも認める品質と性能';
      default:
        return '選んで安心、使って満足の声';
    }
  };

  const getTestimonials = () => {
    switch (targetUser) {
      case 'intermediate':
        return [
          {
            content: 'スタンダードセットからアップグレードして大正解でした。特にマスクの視界の広さとフィンのパワーに驚きました。疲れにくくなって長時間楽しめます。',
            name: '山田 健太',
            image: '/svg/user1.svg',
            stars: 5
          },
          {
            content: '月に2回は海に行くのでいい装備が欲しかったんです。このセットにして水中での快適性が全く違います。特に呼吸のしやすさが格段に向上しました。',
            name: '鈴木 美香',
            image: '/svg/user2.svg',
            stars: 4
          },
          {
            content: '以前はレンタルで済ませていましたが、思い切って購入。プレミアムセットの品質の高さに感動しています。特にフィンの推進力が違いすぎて感動！',
            name: '佐藤 大輔',
            image: '/svg/user3.svg',
            stars: 5
          }
        ];
      case 'advanced':
        return [
          {
            content: '地方大会に出場するレベルですが、このプロフェッショナルセットを使うようになってからタイムが向上しました。特にフィンの反発力が素晴らしい。',
            name: '高橋 誠',
            image: '/svg/user1.svg',
            stars: 5
          },
          {
            content: '長年様々なセットを使ってきましたが、このエリートモデルは別格です。細部までこだわった設計で、水中での違和感がほとんどありません。',
            name: '中村 亜美',
            image: '/svg/user2.svg',
            stars: 5
          },
          {
            content: '指導者としてこのセットを推奨しています。プロ向けとしては価格もリーズナブルで、性能は一級品。上達を目指す人には最適な選択です。',
            name: '伊藤 康弘',
            image: '/svg/user3.svg',
            stars: 4
          }
        ];
      default: // beginner
        return [
          {
            content: '初めてのスキンダイビングでしたが、このスターターセットのおかげで安心して楽しめました。特に呼吸がしやすいスノーケルが良かったです。',
            name: '田中 太郎',
            image: '/svg/user1.svg',
            stars: 5
          },
          {
            content: 'マスクのフィット感が心配でしたが、スタンダードセットは調整可能で快適でした。初心者の私でも簡単に使いこなせて大満足です。',
            name: '佐藤 明美',
            image: '/svg/user2.svg',
            stars: 4
          },
          {
            content: '子供と一緒に始めるために購入しました。コスパも良く、これから長く使えそうな品質で安心です。説明書も詳しくて助かりました。',
            name: '山本 健一',
            image: '/svg/user3.svg',
            stars: 5
          }
        ];
    }
  };

  const getInstructor = () => {
    switch (targetUser) {
      case 'intermediate':
        return {
          name: '水谷 勇樹',
          title: 'スキンダイビング歴15年のプロコーチ',
          description: '国内外の多数のダイビングスポットを巡り、様々な環境での経験を積む。中級者から上級者へのステップアップ指導を得意とし、適切な装備選びのアドバイスも行っています。このサイトの全ての商品は実際に使用し、品質を確認済みです。',
          image: '/svg/instructor.svg'
        };
      case 'advanced':
        return {
          name: '水谷 勇樹',
          title: '競技スキンダイビング日本代表 元コーチ',
          description: '国際大会での指導経験を持ち、トップアスリートの装備選びをサポート。最新の技術と素材に精通し、競技者のパフォーマンス向上に貢献。このサイトで紹介している全ての商品は、競技レベルでの使用にも耐える高品質なものだけを厳選しています。',
          image: '/svg/instructor.svg'
        };
      default: // beginner
        return {
          name: '水谷 勇樹',
          title: 'スキンダイビング歴15年のプロ',
          description: '初心者からプロまで、あらゆるレベルの方にスキンダイビングを指導してきました。特に初めての方が安全かつ楽しく始められるようサポートすることを大切にしています。このサイトの全ての商品は実際に使用し、品質を確認済みです。',
          image: '/svg/instructor.svg'
        };
    }
  };

  const testimonials = getTestimonials();
  const instructor = getInstructor();

  return (
    <section className="testimonials" id="testimonials" ref={testimonialsRef}>
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{getTitle()}</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                {testimonial.content}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-stars">
                    {'★'.repeat(testimonial.stars)}
                    {'☆'.repeat(5 - testimonial.stars)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="instructor-profile">
          <div className="instructor-avatar">
            <img src={instructor.image} alt={instructor.name} />
          </div>
          <div className="instructor-info">
            <h3 className="instructor-name">{instructor.name}</h3>
            <div className="instructor-title">{instructor.title}</div>
            <p className="instructor-description">{instructor.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
