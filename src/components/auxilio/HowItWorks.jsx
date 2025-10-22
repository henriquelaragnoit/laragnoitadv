import React from 'react';

const HowItWorks = () => (
  <section id="como-funciona" aria-labelledby="como-funciona-h2">
    <div className="container">
      <h2 id="como-funciona-h2">Nosso processo é simples e transparente</h2>
      <div className="grid grid-3">
        <div className="card">
          <h3>1. Análise Gratuita</h3>
          <p>Você nos conta seu caso pelo WhatsApp. Analisamos seus documentos e avaliamos a viabilidade do seu direito, sem nenhum custo inicial.</p>
        </div>
        <div className="card">
          <h3>2. Processo e Acompanhamento</h3>
          <p>Cuidamos de toda a burocracia, seja no pedido administrativo ao INSS ou, se necessário, na ação judicial, mantendo você sempre informado.</p>
        </div>
        <div className="card">
          <h3>3. Transparência nos Honorários</h3>
          <p>Cobramos apenas uma taxa inicial para iniciar o processo. O restante dos honorários só é pago no final, se o benefício for concedido. Dessa forma, trabalhamos sempre alinhados ao seu interesse: conquistar o direito que você merece.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
