import React from 'react';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = "https://wa.me/5511943849988?text=Quero%20saber%20meus%20direitos%20trabalhistas";

const getPhoneFromWaLink = (url) => {
  try {
    const u = new URL(url);
    const phone = u.pathname.replace('/', '').trim();
    return phone || 'desconhecido';
  } catch {
    return 'desconhecido';
  }
};

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    const phone = getPhoneFromWaLink(WHATSAPP_LINK);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_click',          
      whatsapp_destination: phone,      
      whatsapp_origin: 'floating_button'
    });
  };

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Fale no WhatsApp"
      onClick={handleClick}
    >
      <WhatsAppIcon size={32} />
    </a>
  );
};

export default FloatingWhatsAppButton;
