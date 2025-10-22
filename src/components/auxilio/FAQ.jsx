import React from 'react';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = "https://wa.me/5511943849988?text=Tenho%20d%C3%BAvidas%20sobre%20Aux%C3%ADlio-Acidente";

const FAQ = () => (
  <section id="faq" className="section-dark" aria-labelledby="faq-h2">
    <div className="container" style={{maxWidth: '800px'}}>
      <h2 id="faq-h2" style={{textAlign: 'center'}}>Perguntas Frequentes</h2>
      <div className="faq-list">
        {[{
          question: 'Posso receber mesmo continuando a trabalhar?',
          answer: 'Sim! O Auxílio-Acidente é uma indenização, não um benefício por incapacidade.'
        }, {
          question: 'Qual o valor e por quanto tempo recebo?',
          answer: 'O valor corresponde a 50% do seu salário de benefício e é pago mensalmente até a sua aposentadoria.'
        }, {
          question: 'Preciso ter a CAT (Comunicação de Acidente de Trabalho)?',
          answer: 'Não necessariamente. O benefício é devido para acidentes de qualquer natureza, mesmo os que ocorrem fora do ambiente de trabalho. A CAT é importante, mas não é obrigatória.'
        }, {
          question: 'Quanto tempo tenho para pedir o benefício?',
          answer: 'Embora não haja um prazo final (prescrição) para pedir a concessão do benefício, você só pode cobrar os valores retroativos dos últimos 5 anos. Por isso, não perca tempo e dinheiro, busque seu direito o quanto antes.'
        }].map((item, idx) => (
          <FAQItem key={idx} question={item.question} answer={item.answer} />
        ))}
      </div>
      <div className="cta-center">
        <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agendar minha análise gratuita</a>
      </div>
    </div>
  </section>
);

function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  const cardRef = React.useRef();
  return (
    <div
      className={`faq-item${open ? ' open' : ''}`}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      aria-label={open ? `Fechar resposta: ${question}` : `Abrir resposta: ${question}`}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(v => !v)}
      style={{
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(.4,0,.2,1)',
        maxHeight: open ? cardRef.current?.scrollHeight + 80 || 500 : 64,
        marginBottom: '1rem',
        borderRadius: 12,
  border: '1px solid #e6ecf2',
        background: '#fff',
        boxShadow: open ? '0 6px 24px rgba(37,211,102,0.10)' : '0 2px 8px rgba(0,0,0,0.03)',
        cursor: 'pointer',
        outline: 'none',
      }}
      ref={cardRef}
    >
      <div
        style={{
          padding: '1.5rem',
          fontWeight: 'bold',
          position: 'relative',
          paddingRight: '3rem',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {question}
        <span
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: open ? 'translateY(-50%) rotate(90deg)' : 'translateY(-50%) rotate(0deg)',
            fontSize: '1.5rem',
            transition: 'transform 0.3s',
            color: open ? '#25d366' : '#5b708b',
            fontWeight: 700,
          }}
          aria-hidden="true"
        >▶</span>
      </div>
      <div
        className="answer"
        style={{
          padding: open ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
          borderTop: open ? '1px solid #e6ecf2' : 'none',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <p style={{ marginBottom: 0 }}>{answer}</p>
      </div>
    </div>
  );
}

export default FAQ;
