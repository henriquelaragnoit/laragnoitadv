import React from 'react';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = "http://wa.me/5511943849988/?text=Quero%20saber%20meus%20direitos%20trabalhistas";

const FAQ = () => (
    <section id="faq" aria-labelledby="faq-h2">
        <div className="container" style={{ maxWidth: '800px' }}>
            <h2 id="faq-h2" style={{ textAlign: 'center' }}>Perguntas Frequentes</h2>
            <div className="faq-list">
                {[{
                    question: 'Quanto custa para entrar com uma ação trabalhista?',
                    answer: 'A análise do seu caso é gratuita. Nossos honorários são de êxito, ou seja, só recebemos um percentual do valor que você ganhar ao final do processo. Você não precisa pagar nada para começar.'
                }, {
                    question: 'Quanto tempo tenho para entrar com uma ação?',
                    answer: 'Você tem até 2 (dois) anos após o término do seu contrato de trabalho para iniciar uma ação. No entanto, você só pode cobrar os direitos dos últimos 5 (cinco) anos trabalhados. Por isso, é importante buscar ajuda o mais rápido possível.'
                }, {
                    question: 'Quais documentos eu preciso?',
                    answer: 'Inicialmente, seu documento de identidade e sua carteira de trabalho (física ou digital) já ajudam. Outros documentos como contracheques, contrato de trabalho e provas da situação (fotos, e-mails, testemunhas) serão importantes no decorrer do atendimento.'
                }, {
                    question: 'O processo é online?',
                    answer: 'Sim, todo o processo desde o nosso atendimento até o acompanhamento da ação é online. Todavia, em alguns casos o juiz pode determinar o comparecimento no Fórum para audiência de conciliação e audiência para ouvir as partes e testemunhas.'
                }].map((item, idx) => (
                    <FAQItem key={idx} question={item.question} answer={item.answer} />
                ))}
            </div>
            <div className="cta-center">
                <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Quero analisar meu caso gratuitamente</a>
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
