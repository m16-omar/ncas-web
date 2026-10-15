import React from 'react';
import { Film } from 'lucide-react';

interface PhotoProps {
  src?: string;
  alt?: string;
  className?: string;
  label?: string;
  icon?: React.ElementType;
}

// An image slot. Shows the photo when `src` is set, otherwise a cinematic placeholder
// so the layout reads correctly before the team's photography is ready.
export const Photo: React.FC<PhotoProps> = ({ src, alt = '', className = '', label, icon: Icon = Film }) =>
  src ? (
    <img className={`photo ${className}`} src={src} alt={alt} loading="lazy" />
  ) : (
    <div className={`photo photo-ph ${className}`} role={alt ? 'img' : undefined} aria-label={alt || undefined}>
      <Icon size={36} strokeWidth={1.2} aria-hidden="true" />
      {label && <span>{label}</span>}
    </div>
  );
