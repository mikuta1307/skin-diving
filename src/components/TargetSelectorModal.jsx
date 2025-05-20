// TargetSelectorModal.jsx (構造修正版)
import React, { useState, useEffect } from 'react';

const TargetSelectorModal = ({ currentTarget, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // ローカルストレージから選択済みかどうかをチェック
  useEffect(() => {
    const hasSelected = localStorage.getItem('hasSelectedTarget');
    if (!hasSelected) {
      setIsVisible(true);
    }
  }, []);
  
  const handleSelect = (target) => {
    // 選択したことをローカルストレージに記録
    localStorage.setItem('hasSelectedTarget', 'true');
    localStorage.setItem('userType', target);
    
    // ページのURLを変更（リロードなし）
    const url = new URL(window.location);
    url.searchParams.set('user', target);
    window.history.pushState({}, '', url);
    
    // モーダルを閉じる
    setIsVisible(false);
    
    // 親コンポーネントに通知（必要に応じて）
    if (onClose) onClose(target);
    
    // ページをリロードして表示を更新
    window.location.reload();
  };
  
  // スタイリングされたポップアップボタン（少しの間表示された後に最小化）
  const FloatingButton = () => (
    <button 
      className="target-selector-float-btn"
      onClick={() => setIsVisible(true)}
    >
      <span>🎯</span>
      <span className="target-selector-float-text">表示内容を変更</span>
    </button>
  );
  
  if (!isVisible) return <FloatingButton />;
  
  return (
    <>
      <div className="target-selector-overlay" onClick={() => setIsVisible(false)}></div>
      <div className="target-selector-modal">
        <button className="target-selector-close" onClick={() => setIsVisible(false)}>✕</button>
        <h2>あなたに合った情報を表示します</h2>
        <p>スキンダイビングの経験レベルを選んでください</p>
        
        <div className="target-selector-modal-buttons">
          <button 
            className={`target-modal-button ${currentTarget === 'beginner' ? 'active' : ''}`}
            onClick={() => handleSelect('beginner')}
          >
            <div className="target-modal-icon">🌊</div>
            <div className="target-modal-title">初心者向け</div>
            <div className="target-modal-subtitle">はじめての方</div>
          </button>
          
          <button 
            className={`target-modal-button ${currentTarget === 'intermediate' ? 'active' : ''}`}
            onClick={() => handleSelect('intermediate')}
          >
            <div className="target-modal-icon">🏊</div>
            <div className="target-modal-title">中級者向け</div>
            <div className="target-modal-subtitle">ステップアップしたい方</div>
          </button>
          
          <button 
            className={`target-modal-button ${currentTarget === 'advanced' ? 'active' : ''}`}
            onClick={() => handleSelect('advanced')}
          >
            <div className="target-modal-icon">🏆</div>
            <div className="target-modal-title">上級者向け</div>
            <div className="target-modal-subtitle">プロを目指す方</div>
          </button>
        </div>
        
        <div className="target-selector-modal-footer">
          <button className="target-selector-skip" onClick={() => setIsVisible(false)}>
            後で選択する
          </button>
        </div>
      </div>
    </>
  );
};

export default TargetSelectorModal;
