import React from 'react';
import { EVENT_DATA } from '../data';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={EVENT_DATA.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Chat with us on WhatsApp"
      aria-label="Chat with event organizers on WhatsApp"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp support"
      />
    </a>
  );
};
