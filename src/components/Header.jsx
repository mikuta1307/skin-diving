// Header.js
import React, { useState, useEffect } from 'react';

const Header = ({ targetUser }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // ターゲット層に応じたナビゲーションリンクを調整
  const getNavLinks = () => {
    const commonLinks = [
      { text: 'ホーム', href: '#' },
      { text: 'セット一覧', href: '#products' },
      { text: '選び方', href: '#guide' },
    ];

    if (targetUser === 'intermediate') {
      return [
        ...commonLinks,
        { text: 'レビュー', href: '#testimonials' },
        { text: 'よくある質問', href: '#faq' },
      ];
    } else if (targetUser === 'advanced') {
      return [
        ...commonLinks,
        { text: 'レビュー', href: '#testimonials' },
        { text: 'よくある質問', href: '#faq' },
        { text: '講習会情報', href: '#workshop' },
      ];
    }

    return commonLinks;
  };

  const navLinks = getNavLinks();

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="header-logo">
          <a href="#"><img src="/svg/logo.svg" alt="スキンダイビングスターターセット" /></a>
        </div>

        <nav className="nav-links">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}>{link.text}</a>
          ))}
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} onClick={() => setMobileMenuOpen(false)}>
            {link.text}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
