// CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [flipped, setFlipped] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    // コンポーネントがマウントされた後にのみ時間を計算
    setTimeLeft(calculateTimeLeft());
    
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      
      // 秒が変わったらフリップアニメーション用のフラグを設定
      if (newTimeLeft.seconds !== timeLeft.seconds) {
        setFlipped(prev => ({ ...prev, seconds: !prev.seconds }));
      }
      // 分が変わったらフリップアニメーション用のフラグを設定
      if (newTimeLeft.minutes !== timeLeft.minutes) {
        setFlipped(prev => ({ ...prev, minutes: !prev.minutes }));
      }
      // 時間が変わったらフリップアニメーション用のフラグを設定
      if (newTimeLeft.hours !== timeLeft.hours) {
        setFlipped(prev => ({ ...prev, hours: !prev.hours }));
      }
      // 日が変わったらフリップアニメーション用のフラグを設定
      if (newTimeLeft.days !== timeLeft.days) {
        setFlipped(prev => ({ ...prev, days: !prev.days }));
      }
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]); // timeLeftが変わるたびに実行

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="countdown-item">
        <div className={`countdown-number ${flipped[interval] ? 'flip-top' : ''}`}>
          {timeLeft[interval].toString().padStart(2, '0')}
        </div>
        <div className="countdown-label">{interval}</div>
      </div>
    );
  });

  return (
    <div className="countdown-timer">
      {timerComponents.length ? timerComponents : <span>終了しました！</span>}
    </div>
  );
};

export default CountdownTimer;
