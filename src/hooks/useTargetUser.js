// useTargetUser.js
import { useState, useEffect } from 'react';

const useTargetUser = () => {
  const [targetUser, setTargetUser] = useState('beginner'); // デフォルトは初心者

  useEffect(() => {
    // ユーザーを判別するロジック
    const determineUserType = () => {
      // 例: URLパラメータから判別
      const urlParams = new URLSearchParams(window.location.search);
      const userParam = urlParams.get('user');
      
      if (userParam) {
        if (userParam === 'intermediate') {
          return 'intermediate';
        } else if (userParam === 'advanced') {
          return 'advanced';
        } else {
          return 'beginner';
        }
      }
      
      // 例: ローカルストレージから履歴を確認
      const storedUserType = localStorage.getItem('userType');
      if (storedUserType) {
        return storedUserType;
      }
      
      // 例: 閲覧履歴や行動からユーザータイプを推測
      // ここでは簡易的に、訪問回数に基づいて判定
      const visitCount = parseInt(localStorage.getItem('visitCount') || '0');
      localStorage.setItem('visitCount', (visitCount + 1).toString());
      
      if (visitCount > 5) {
        return 'advanced';
      } else if (visitCount > 2) {
        return 'intermediate';
      }
      
      return 'beginner';
    };
    
    // ユーザータイプを決定して保存
    const userType = determineUserType();
    setTargetUser(userType);
    localStorage.setItem('userType', userType);
    
    // body要素にクラスを追加してテーマを適用
    document.body.className = `${userType}-theme`;
    
    return () => {
      // クリーンアップ関数
      document.body.className = '';
    };
  }, []);
  
  return targetUser;
};

export default useTargetUser;
