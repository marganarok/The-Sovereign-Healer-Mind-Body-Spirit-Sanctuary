
import React, { useState, useEffect, useRef } from 'react';
import './ArtsGallery.css';
import StarfieldBackground from '../effects/StarfieldBackground';
import CosmicCursor from '../effects/CosmicCursor';
import Header from '../components/Header';

// Dynamically import all images from public/gallery
const imageModules = import.meta.glob('/public/gallery/*.{jpg,jpeg,png,gif}', { eager: true, as: 'url' });
const imagePaths = Object.values(imageModules);

const CATEGORIES = ['Shapes', 'History', 'Cosmos', 'Artists', 'Fun-Town'];

function getArtMeta(index) {
  const cat = CATEGORIES[index % CATEGORIES.length];
  return {
    id: index + 1,
    title: `${cat} Art #${index + 1}`,
    category: cat,
    fallback: `https://picsum.photos/seed/art${index + 1}/600/400`,
    description: `This is a cosmic, meta-inspired art piece number ${index + 1} in the ${cat} category. Each piece is unique and alive with color, shape, and energy.`,
    aiPrompt: `Imagine a ${cat.toLowerCase()}-themed cosmic artwork, blending deep space colors and vibrant energy.`
  };
}

const ArtsGallery = () => {
  const [modalArt, setModalArt] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const galleryRef = useRef(null);

  // Build arts array
  const arts = imagePaths.map((img, i) => ({ ...getArtMeta(i, imagePaths.length), image: img }));

  // Filter by category and search
  const filteredArts = arts.filter(art =>
    (activeCategory === 'All' || art.category === activeCategory) &&
    (art.title.toLowerCase().includes(search.toLowerCase()) || art.description.toLowerCase().includes(search.toLowerCase()))
  );

  // Auto-scroll into view on mount
  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // 3D tilt effect
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((x - centerX) / centerX) * 10;
    const tiltY = ((centerY - y) / centerY) * 10;
    card.style.setProperty('--tilt-x', `${tiltX}deg`);
    card.style.setProperty('--tilt-y', `${tiltY}deg`);
  };
  const resetTilt = (e) => {
    e.currentTarget.style.setProperty('--tilt-x', '0deg');
    e.currentTarget.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <div ref={galleryRef} className="arts-gallery-page aurora-bg" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: 0 }}>
  {/* ...header removed, only global header remains... */}
      <StarfieldBackground />
      <CosmicCursor />
      {/* Cosmic background particles */}
      <div className="meta-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="meta-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${18 + Math.random() * 32}px`,
            height: `${18 + Math.random() * 32}px`,
            background: `radial-gradient(circle at 60% 40%, #${Math.floor(Math.random() * 16777215).toString(16)} 0%, #fff0 100%)`,
            animationDelay: `${Math.random() * 12}s`
          }} />
        ))}
      </div>
      <h2 className="gradient-text cosmic-shimmer" style={{ textAlign: 'center', margin: '1.2rem 0 1.2rem', fontSize: '2.3rem' }}>Cosmic Gallery</h2>
      {/* Category Tabs & Search */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', margin: '0 0 1.5rem 0' }}>
        <div className="category-tabs" style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
          <button
            className={`gradient-button pulse-animate${activeCategory === 'All' ? ' active' : ''}`}
            style={{ padding: '0.5rem 1.2rem', fontSize: '1.05rem', borderRadius: 18, background: activeCategory === 'All' ? 'var(--amethyst,#9b7cb6)' : '', boxShadow: activeCategory === 'All' ? '0 0 16px 2px var(--gold,#d4af37)' : '', fontWeight: 600 }}
            onClick={() => setActiveCategory('All')}
          >All</button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`gradient-button pulse-animate${activeCategory === cat ? ' active' : ''}`}
              style={{ padding: '0.5rem 1.2rem', fontSize: '1.05rem', borderRadius: 18, background: activeCategory === cat ? 'var(--amethyst,#9b7cb6)' : '', boxShadow: activeCategory === cat ? '0 0 16px 2px var(--gold,#d4af37)' : '', fontWeight: 600 }}
              onClick={() => setActiveCategory(cat)}
            >{cat}</button>
          ))}
        </div>
        <input
          type="text"
          className="glass"
          style={{ padding: '0.7rem 1.2rem', fontSize: '1.08rem', borderRadius: 18, minWidth: 180, maxWidth: 320, background: 'rgba(255,255,255,0.13)', color: 'var(--text-light,#fff)', border: 'none', outline: 'none', boxShadow: '0 2px 8px #9b7cb633' }}
          placeholder="Search art..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* Responsive grid, all images */}
      <div className="arts-grid arts-grid-large">
        {filteredArts.map(art => (
          <div
            className="art-card cosmic-shape tilt-3d glow-hover"
            key={art.id}
            tabIndex={0}
            onClick={() => setModalArt(art)}
            onKeyDown={e => { if (e.key === 'Enter') setModalArt(art); }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="art-img-wrap art-img-wrap-large">
              <img
                src={art.image}
                alt={art.title}
                className="art-img art-img-large"
                onError={e => { e.target.onerror = null; e.target.src = art.fallback; }}
              />
              <div className="art-overlay">
                <span className="art-overlay-title">{art.title}</span>
                <span className="art-overlay-desc">View Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for art details */}
      {modalArt && (
        <div className="art-modal" onClick={() => setModalArt(null)}>
          <div className="art-modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalArt.image} alt={modalArt.title} className="art-modal-img" />
            <div className="art-modal-info">
              <h4 className="art-modal-title">{modalArt.title}</h4>
              <p className="art-modal-desc">{modalArt.description}</p>
              <div style={{ margin: '1.2rem 0 0.5rem 0', fontSize: '1.01rem', color: 'var(--amethyst,#9b7cb6)', fontStyle: 'italic', opacity: 0.85 }}>
                <b>AI Prompt:</b> {modalArt.aiPrompt}
              </div>
              <button className="gradient-button pulse-animate" onClick={() => setModalArt(null)} style={{ marginTop: 16 }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtsGallery;
