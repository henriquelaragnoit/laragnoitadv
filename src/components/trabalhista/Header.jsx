import React from 'react';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = "http://wa.me/5511943849988";

const Header = () => (
  <header className="hero" role="banner">
    <div className="halo" aria-hidden="true"></div>
    <div className="container hero-wrap">
      <div>
        <span className="eyebrow">⚖️ Advocacia Trabalhista</span>
        <h1>Seus Direitos Foram Desrespeitados? <span>Nós lutamos por você.</span></h1>
        <p className="lead">Busque a justiça que você merece.</p>
        <p className="lead">Fale com um especialista e faça uma análise gratuita do seu caso.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Falar com Advogado
          </a>
        </div>
      </div>
      <div className="hero-card" aria-label="Resumo do atendimento">
        <div className="label">Nosso Compromisso</div>
        <div className="row">✅ Análise de caso 100% gratuita e online</div>
        <div className="row">👩‍⚖️ Advogados especialistas em Direito do Trabalho</div>
        <div className="row">🕒 Atendimento rápido, humano e sigiloso</div>
      </div>
    </div>
  </header>
);

export default Header;
