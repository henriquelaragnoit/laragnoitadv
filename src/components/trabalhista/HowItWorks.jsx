import React from 'react';

const HowItWorks = () => (
  <section id="como-funciona" aria-labelledby="como-funciona-h2">
    <div className="container">
      <h2 id="como-funciona-h2">Nosso processo é simples, rápido e 100% online</h2>
      <div className="grid grid-3">
        <div className="card">
          <h3>1. Análise Gratuita</h3>
          <p>Você nos conta seu caso pelo WhatsApp. Nossos especialistas analisam sua situação e seus direitos, sem custo e sem compromisso.</p>
        </div>
        <div className="card">
          <h3>2. Ação Judicial</h3>
          <p>Se identificarmos uma violação dos seus direitos, cuidamos de todo o processo judicial para buscar a sua indenização, mantendo você sempre informado.</p>
        </div>
        <div className="card">
          <h3>3. Pagamento no Êxito</h3>
          <p>Você não paga nada para começar. Nossos honorários são cobrados apenas se você ganhar a causa, com total transparência desde o início.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
