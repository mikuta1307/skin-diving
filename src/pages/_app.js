// _app.js (両方のUI対応版)
import React from 'react';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Hero.css';
import '../styles/Problem.css';
import '../styles/Solution.css';
import '../styles/ProductSelection.css';
import '../styles/Product.css';
import '../styles/EquipmentPoints.css';
import '../styles/Testimonials.css';
import '../styles/FAQ.css';
import '../styles/Bonus.css';
import '../styles/Footer.css';
import '../styles/CountdownTimer.css';
import '../styles/TargetSelector.css'; // 通常の選択UI用
import '../styles/TargetSelectorModal.css'; // モーダル用

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
