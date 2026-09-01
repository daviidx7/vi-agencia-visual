import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
  ];

  return (
    <header className="hero-nav-wrapper">
      <div className="hero-container">
        <nav className="hero-nav" aria-label="Navegação Principal">
          {/* Logo / Nome da Agência */}
          <a href="#inicio" className="nav-logo" aria-label="VIA Agência Visual">
            <span className="nav-logo-brand">VIA</span>
            <span className="nav-logo-dot" aria-hidden="true" />
            <span className="nav-logo-tag">Agência Visual</span>
          </a>

          {/* Links Centrais Desktop */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-link-item">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA Direito */}
          <div className="nav-actions">
            <a href="#contato" className="nav-cta-btn">
              Falar com a gente
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={mobileMenuOpen ? 'nav-mobile-toggle is-open' : 'nav-mobile-toggle'}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer">
          <ul className="nav-mobile-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="nav-cta-btn nav-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Falar com a gente
          </a>
        </div>
      )}
    </header>
  );
};