import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="section" style={{ position: 'relative' }}>
      <div className="max-w-content">
        <div className="section-header">
          <div className="section-tag">
            <Camera size={14} /> PHOTO ARCHIVE
          </div>
          <h2 className="section-title">
            PREVIOUS <span>EDITION HIGHLIGHTS</span>
          </h2>
          <p className="section-desc">
            Moments from past summits showcasing high-level networking, keynotes, exhibition booths, and executive deal-making.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {GALLERY_IMAGES.map((imgUrl, index) => (
            <div
              key={index}
              className="glass-card"
              onClick={() => openLightbox(index)}
              style={{
                height: index % 3 === 0 ? '280px' : '220px',
                borderRadius: '14px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <img
                src={imgUrl}
                alt={`Fintech Revolution Summit past edition memory ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${1511578314322 + index}?w=600&auto=format&fit=crop`;
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(5, 8, 14, 0.4)',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="gallery-hover-overlay"
              >
                <div
                  style={{
                    background: 'rgba(0, 240, 155, 0.9)',
                    color: '#03140d',
                    padding: '10px',
                    borderRadius: '50%',
                  }}
                >
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="modal-backdrop"
          onClick={closeLightbox}
          style={{ zIndex: 1200, padding: '20px' }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1210,
            }}
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1210,
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 240, 155, 0.2)',
            }}
          >
            <img
              src={GALLERY_IMAGES[activeImageIndex]}
              alt="Enlarged gallery preview"
              style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', display: 'block' }}
            />
          </div>

          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1210,
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      <style>{`
        .glass-card:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};
