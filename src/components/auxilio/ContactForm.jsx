import React, { useState } from 'react';

const WHATSAPP_LINK = "https://wa.me/5511943849988?text=Tenho%20d%C3%BAvidas%20sobre%20Aux%C3%ADlio-Acidente";

const maskPhone = (v) =>
  v
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
    .slice(0, 15);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!consent) {
      alert('Por favor, confirme que você leu e concorda com os termos de privacidade.');
      return;
    }
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/mzzazerw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message, _subject: 'Novo Contato - Auxílio-Acidente' }),
      });
      if (response.ok) {
        setStatus('success');
        setName('');
        setPhone('');
        setMessage('');
        setConsent(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="form-section" aria-labelledby="form-h2">
      <div className="container" style={{maxWidth: '700px'}}>
        <h2 id="form-h2">Análise Preliminar Gratuita</h2>
        <p className="lead" style={{textAlign: 'center', marginBottom: '32px'}}>Prefere ser contatado? Preencha o formulário abaixo que um de nossos especialistas retornará o mais breve possível.</p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" disabled={status === 'submitting'} />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp (com DDD)</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              autoComplete="tel"
              disabled={status === 'submitting'}
            />
          </div>
           <div className="form-group">
            <label htmlFor="message">Descreva brevemente o seu caso (opcional)</label>
            <textarea id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} disabled={status === 'submitting'}></textarea>
          </div>
          <div className="form-consent">
            <input type="checkbox" id="lgpd" name="lgpd" required checked={consent} onChange={(e) => setConsent(e.target.checked)} disabled={status === 'submitting'} />
            <label htmlFor="lgpd">Li e concordo que meus dados serão usados para fins de contato, conforme a Lei Geral de Proteção de Dados (LGPD).</label>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%'}} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Enviando...' : 'Enviar para análise'}
          </button>
          {status === 'success' && <p className="form-status success">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>}
          {status === 'error' && <p className="form-status error">Ocorreu um erro ao enviar. Por favor, tente novamente ou nos chame no WhatsApp.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
