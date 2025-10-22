import React from 'react';

const TrustBelt = () => (
  <div className="belt" role="region" aria-label="Pontos de confiança">
    <div className="container belt-list">
      <div className="belt-item"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> Análise gratuita do seu caso</div>
      <div className="belt-item"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 1v22M1 12h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> Atuação em todas as instâncias</div>
      <div className="belt-item"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm6 0 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> Honorários somente no êxito</div>
    </div>
  </div>
);

export default TrustBelt;
