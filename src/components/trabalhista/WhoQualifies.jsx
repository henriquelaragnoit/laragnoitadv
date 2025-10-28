import React from 'react';
import { CheckIcon } from './Icons';

const WhoQualifies = () => (
  <section className="section-dark" aria-labelledby="quem-ajudamos">
    <div className="container">
      <h2 id="quem-ajudamos">Você se identifica com alguma destas situações?</h2>
      <div className="grid grid-2">
        <div className="card">
          <h3>Problemas Comuns no Trabalho:</h3>
          <div className="check-item"><CheckIcon /> Foi demitido e não recebeu tudo o que era devido?</div>
          <div className="check-item"><CheckIcon /> Faz horas extras que não são pagas ou registradas?</div>
          <div className="check-item"><CheckIcon /> Sofre com perseguição ou humilhação do seu chefe?</div>
          <div className="check-item"><CheckIcon /> Trabalha em ambiente perigoso ou insalubre sem o adicional?</div>
          <div className="check-item"><CheckIcon /> Acha que foi demitido por justa causa injustamente?</div>
        </div>
        <div className="card">
          <h3>Para quem atuamos:</h3>
          <p>Defendemos os direitos de todos os trabalhadores que se sentem lesados por seus empregadores.</p>
          <ul>
            <li>Trabalhadores urbanos e rurais.</li>
            <li>Profissionais da indústria, comércio e serviços.</li>
            <li>Empregados que não recebem seus direitos.</li>
            <li>Trabalhadores que sofreram acidentes ou doenças do trabalho.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhoQualifies;
