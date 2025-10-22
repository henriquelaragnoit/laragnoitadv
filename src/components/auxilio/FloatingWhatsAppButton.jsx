import React from 'react';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = "https://wa.me/5511943849988?text=Tenho%20d%C3%BAvidas%20sobre%20Aux%C3%ADlio-Acidente";

const FloatingWhatsAppButton = () => (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="floating-whatsapp-btn" aria-label="Fale no WhatsApp">
        <WhatsAppIcon size={32} />
    </a>
);

export default FloatingWhatsAppButton;
