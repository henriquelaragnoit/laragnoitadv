import React from 'react';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = "http://wa.me/5511943849988";

const FloatingWhatsAppButton = () => (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="floating-whatsapp-btn" aria-label="Fale no WhatsApp">
        <WhatsAppIcon size={32} />
    </a>
);

export default FloatingWhatsAppButton;
