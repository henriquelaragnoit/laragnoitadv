import React from 'react';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, não encontramos a página que você procurou.</p>
      <a href="/laragnoitadv/" style={{ color: '#25d366', fontWeight: 600 }}>Voltar para a página inicial</a>
    </div>
  );
}
