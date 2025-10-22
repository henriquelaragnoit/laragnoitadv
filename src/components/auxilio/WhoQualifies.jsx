import React from 'react';
import { CheckIcon } from './Icons';

const WhoQualifies = () => (
  <section className="section-dark" aria-labelledby="quem-tem-direito">
    <div className="container">
      <h2 id="quem-tem-direito">Quem pode ter direito ao benefício?</h2>
      <div className="grid grid-2">
        <div className="card">
          <h3>Requisitos Principais:</h3>
          <div className="check-item"><CheckIcon /> Ser segurado do INSS (ex: trabalhador com carteira assinada).</div>
          <div className="check-item"><CheckIcon /> Ter sofrido um acidente de qualquer natureza ou doença ocupacional.</div>
          <div className="check-item"><CheckIcon /> Ficar com sequelas que reduzem permanentemente a capacidade de trabalho.</div>
        </div>
        <div className="card">
          <h3>Exemplos Comuns de Sequelas:</h3>
          <p>Qualquer limitação, por menor que seja, pode dar direito ao benefício.</p>
          <ul>
            <li>Lesões na coluna com limitação de esforço.</li>
            <li>Redução de força ou movimento em braços, mãos ou pernas.</li>
            <li>Limitações e dores crônicas após fraturas ou cirurgias.</li>
            <li>Perda parcial da audição ou visão.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhoQualifies;
