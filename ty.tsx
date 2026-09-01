import React from 'react';
import { Navbar } from './Navbar';
import './HeroSection.css';

export interface HeroSectionProps {
  /**
   * Slot opcional para injetar um componente de animação (Canvas, Three.js, WebGL, Lottie, etc.)
   * diretamente dentro do container hero-animation.
   */
  animationSlot?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ animationSlot }) => {
  const highlights = [
    {
      number: '01',
      title: 'Fotografia',
      description: 'Imagens que comunicam.',
    },
    {
      number: '02',
      title: 'Vídeo',
      description: 'Histórias em movimento.',
    },
    {
      number: '03',
      title: 'Identidade',
      description: 'Uma presença visual única.',
    },
  ];

  return (
    <section className="hero-wrapper" id="inicio" aria-label="Apresentação Principal">
      {/* Navbar Integrada */}
      <Navbar />

      {/* Hero Body Composition */}
      <div className="hero-body">
        <div className="hero-container">
          <div className="hero-grid">
            
            {/* LADO ESQUERDO — CONTEÚDO EDITORIAL & ESTRUTURAL (52%) */}
            <div className="hero-content">
              
              {/* Eyebrow / Tagline de Atuação */}
              <div className="hero-eyebrow">
                <span className="eyebrow-accent-dot" aria-hidden="true" />
                <span>FOTOGRAFIA • VÍDEO • IDENTIDADE VISUAL</span>
              </div>

              {/* Headline Principal */}
              <h1 className="hero-headline">
                Sua história merece ser{' '}
                <span className="headline-emphasis">vista.</span>
              </h1>

              {/* Subheadline */}
              <p className="hero-subheadline">
                Criamos imagens, vídeos e experiências visuais que transformam ideias em presença.
              </p>

              {/* 3 Destaques Discretos e Tipográficos */}
              <div className="hero-highlights">
                {highlights.map((item) => (
                  <div key={item.number} className="highlight-item">
                    <div className="highlight-header">
                      <span className="highlight-number">{item.number} —</span>
                      <span className="highlight-title">{item.title}</span>
                    </div>
                    <p className="highlight-desc">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Chamada para Ação (CTA) */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  className="hero-primary-btn"
                  onClick={() => {
                    const el = document.getElementById('contato');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Vamos criar algo incrível</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </button>

                <a href="#orcamento" className="hero-secondary-link">
                  Solicite um orçamento
                </a>
              </div>

            </div>

            {/* LADO DIREITO — CONTAINER EXCLUSIVO PARA FUTURA ANIMAÇÃO (48%) */}
            <div className="hero-visual-wrapper">
              <div
                className="hero-animation"
                id="hero-animation"
                role="region"
                aria-label="Espaço reservado para visual interativo e animação"
              >
                {/* 
                  Container vazio e perfeitamente dimensionado.
                  Renderiza o elemento injetado via prop ou preserva o layout limpo e intencional.
                */}
                {animationSlot ? (
                  animationSlot
                ) : (
                  <div className="animation-placeholder-guide" aria-hidden="true">
                    <div className="guide-crosshair" />
                    <span className="guide-label">hero-animation</span>
                    <span className="guide-sublabel">[ Espaço reservado para 3D / WebGL / Canvas ]</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};