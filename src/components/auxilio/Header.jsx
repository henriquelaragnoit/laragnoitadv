import React from 'react';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = "https://wa.me/5511943849988?text=Tenho%20d%C3%BAvidas%20sobre%20Aux%C3%ADlio-Acidente";

const Header = () => (
  <header className="hero" role="banner">
    <div className="halo" aria-hidden="true"></div>
    <div className="container hero-wrap">
      <div>
        <span className="eyebrow">⚖️ Benefício Previdenciário</span>
        <h1>Sofreu Acidente ou Doença de Trabalho? <span>Você pode ter direito ao Auxílio-Acidente.</span></h1>
        <p className="lead">Requeira uma indenização mensal paga pelo INSS até sua aposentadoria, mesmo que você continue trabalhando.</p>
        <p className="lead">Analisamos seu caso gratuitamente.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Quero verificar meu direito
          </a>
          <a className="btn btn-outline" href="#como-funciona">Entenda como funciona</a>
        </div>
      </div>
      <div className="hero-card" aria-label="Resumo do atendimento">
        <div className="label">Nosso Compromisso</div>
        <div className="row">✅ Análise 100% gratuita e online</div>
        <div className="row">👩‍⚖️ Advogados especialistas em INSS</div>
        <div className="row">🕒 Atendimento rápido e dedicado</div>
      </div>
    </div>
  </header>
);

export default Header;
