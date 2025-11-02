export function trackWhatsAppClick({ destination, origin }) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    whatsapp_destination: destination,
    whatsapp_origin: origin
  });
}
