// TargetSelector.jsx (構造修正版)
import React from 'react';

const TargetSelector = ({ currentTarget }) => {
  return (
    <section className="target-selector-section">
      <div className="container">
        <div className="target-selector-content">
          <h3>あなたに合った情報を表示中：</h3>
          <div className="target-selector-buttons">
            <a 
              href="?user=beginner" 
              className={`target-button ${currentTarget === 'beginner' ? 'active' : ''}`}
            >
              <span className="target-button-icon">🌊</span>
              <span className="target-button-text">初心者向け</span>
              <small>はじめての方</small>
            </a>
            <a 
              href="?user=intermediate" 
              className={`target-button ${currentTarget === 'intermediate' ? 'active' : ''}`}
            >
              <span className="target-button-icon">🏊</span>
              <span className="target-button-text">中級者向け</span>
              <small>ステップアップしたい方</small>
            </a>
            <a 
              href="?user=advanced" 
              className={`target-button ${currentTarget === 'advanced' ? 'active' : ''}`}
            >
              <span className="target-button-icon">🏆</span>
              <span className="target-button-text">上級者向け</span>
              <small>プロを目指す方</small>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSelector;
