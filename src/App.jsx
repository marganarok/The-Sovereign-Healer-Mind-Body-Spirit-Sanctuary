import React, { useState, useEffect } from 'react'
import './App.css'
import ArtsGallery from './pages/ArtsGallery';
import HomePage from './pages/HomePage';
import StarfieldBackground from './effects/StarfieldBackground';
import CosmicCursor from './effects/CosmicCursor';

const App = () => {
  // Core State
  const [activeSection, setActiveSection] = useState('home')
  // Removed unused mousePosition and cursorTrail state
  const [isLoading, setIsLoading] = useState(true)
  // Theme & Menu Panel State
  const [themePanelOpen, setThemePanelOpen] = useState(false)
  const [menuNames, setMenuNames] = useState([
    'home', 'services', 'arts', 'education', 'community', 'contact'
  ])
  // Per-section theme state
  const defaultSectionTheme = {
    colorVars: {
      sage: getComputedStyle(document.documentElement).getPropertyValue('--sage') || '#87a96b',
      amethyst: getComputedStyle(document.documentElement).getPropertyValue('--amethyst') || '#9b7cb6',
      gold: getComputedStyle(document.documentElement).getPropertyValue('--gold') || '#d4af37',
      forest: getComputedStyle(document.documentElement).getPropertyValue('--forest') || '#2d5016',
      bgDark: getComputedStyle(document.documentElement).getPropertyValue('--bg-dark') || '#1a1a1a',
      textLight: getComputedStyle(document.documentElement).getPropertyValue('--text-light') || '#ffffff',
      textDim: getComputedStyle(document.documentElement).getPropertyValue('--text-dim') || 'rgba(255,255,255,0.7)'
    },
    glassAlpha: 0.1,
    effectType: 'glass',
    combineEffects: []
  }
  const [sectionThemes, setSectionThemes] = useState(() => {
    const obj = {}
    menuNames.forEach(name => { obj[name] = { ...defaultSectionTheme } })
    return obj
  })
  const [selectedSection, setSelectedSection] = useState(menuNames[0])
  // Update CSS variables for selected section live
  useEffect(() => {
    const theme = sectionThemes[selectedSection] || defaultSectionTheme
    Object.entries(theme.colorVars).forEach(([key, val]) => {
      let cssKey = '--' + key.replace(/[A-Z]/g, m => '-' + m.toLowerCase())
      document.documentElement.style.setProperty(cssKey, val)
    })
    document.documentElement.style.setProperty('--glass-bg', `rgba(255,255,255,${theme.glassAlpha})`)
    document.documentElement.style.setProperty('--glass-border', `rgba(255,255,255,${Math.max(theme.glassAlpha*2,0.2)})`)
  }, [sectionThemes, selectedSection, defaultSectionTheme])

  // Effect class builder for a section
  const getPanelClass = (section) => {
    const theme = sectionThemes[section] || defaultSectionTheme
    let base = 'panel '
    if (theme.effectType === 'glass') base += 'glass '
    if (theme.effectType === 'frosted') base += 'glass glass-strong '
    if (theme.effectType === 'aurora') base += 'aurora-bg '
    if (theme.effectType === 'glow') base += 'glow-meta '
    if (theme.effectType === 'meta') base += 'meta-bg '
    if (theme.combineEffects.includes('aurora')) base += 'aurora-bg '
    if (theme.combineEffects.includes('glow')) base += 'glow-meta '
    if (theme.combineEffects.includes('meta')) base += 'meta-bg '
    return base.trim()
  }

  // Theme panel handlers for per-section
  const handleColorChange = (key, val) => {
    setSectionThemes(themes => ({
      ...themes,
      [selectedSection]: {
        ...themes[selectedSection],
        colorVars: { ...themes[selectedSection].colorVars, [key]: val }
      }
    }))
  }
  const handleGlassChange = (val) => {
    setSectionThemes(themes => ({
      ...themes,
      [selectedSection]: {
        ...themes[selectedSection],
        glassAlpha: val
      }
    }))
  }
  const handleEffectTypeChange = (val) => {
    setSectionThemes(themes => ({
      ...themes,
      [selectedSection]: {
        ...themes[selectedSection],
        effectType: val
      }
    }))
  }
  const handleCombineEffectsChange = (effect) => {
    setSectionThemes(themes => {
      const arr = themes[selectedSection].combineEffects
      return {
        ...themes,
        [selectedSection]: {
          ...themes[selectedSection],
          combineEffects: arr.includes(effect)
            ? arr.filter(x => x !== effect)
            : [...arr, effect]
        }
      }
    })
  }
  // When menuNames change, sync sectionThemes
  useEffect(() => {
    setSectionThemes(themes => {
      const newThemes = { ...themes }
      menuNames.forEach(name => {
        if (!newThemes[name]) newThemes[name] = { ...defaultSectionTheme }
      })
      // Remove deleted
      Object.keys(newThemes).forEach(name => {
        if (!menuNames.includes(name)) delete newThemes[name]
      })
      return newThemes
    })
    if (!menuNames.includes(selectedSection)) setSelectedSection(menuNames[0])
  }, [menuNames])

  // (Removed duplicate handleColorChange and handleGlassChange)
  const handleMenuNameChange = (idx, val) => {
    setMenuNames(names => names.map((n, i) => i === idx ? val : n))
  }
  const handleMenuAdd = () => {
    setMenuNames(names => [...names, 'new'])
  }
  const handleMenuRemove = (idx) => {
    setMenuNames(names => names.filter((_, i) => i !== idx))
  }

  // Initialize app
  useEffect(() => {
    // Hide loading after delay
    const loadingTimer = setTimeout(() => setIsLoading(false), 2000)
    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Business data
  const businessData = {
    services: [
      { id: 'reiki', name: 'Reiki Energy Healing', price: '$85', duration: '60 min', icon: '✋', description: 'Traditional Usui Reiki session to balance your energy centers' },
      { id: 'sound', name: 'Sound Healing', price: '$95', duration: '75 min', icon: '🎵', description: 'Therapeutic vibrations using singing bowls and tuning forks' },
      { id: 'aromatherapy', name: 'Aromatherapy', price: '$75', duration: '45 min', icon: '🌿', description: 'Personalized essential oil blends for emotional wellness' },
      { id: 'rife', name: 'Rife Therapy', price: '$120', duration: '60 min', icon: '⚡', description: 'Frequency-based therapy using Rife technology' },
      { id: 'massage', name: 'Therapeutic Massage', price: '$110', duration: '90 min', icon: '💆', description: 'Integrative bodywork with energy healing techniques' },
      { id: 'package', name: 'Healing Package', price: '$275', duration: '3 sessions', icon: '🎁', description: 'Complete wellness experience combining multiple modalities' }
    ],
    products: [
      { id: 'crystals', name: 'Reiki-Infused Crystals', price: '$25 - $150', icon: '💎', description: 'Ethically sourced crystals charged with Reiki energy' },
      { id: 'orgones', name: 'Custom Orgone Devices', price: '$45 - $200', icon: '🔺', description: 'Handcrafted orgone pyramids for energy balancing' },
      { id: 'herbs', name: 'Healing Teas & Tinctures', price: '$18 - $65', icon: '🌿', description: 'Organic herbal blends for specific wellness goals' },
      { id: 'sound-tools', name: 'Sound Healing Tools', price: '$75 - $350', icon: '🎵', description: 'Tibetan singing bowls and tuning forks' },
      { id: 'artisan', name: 'Local Artisan Pieces', price: '$35 - $250', icon: '🎨', description: 'Unique artwork supporting our community' },
      { id: 'jewelry', name: 'Sacred Jewelry', price: '$30 - $120', icon: '📿', description: 'Blessed malas and chakra bracelets' }
    ]
  }

  // Handle form submission
  const handleContactSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log('Contact form submitted:', data)
    // Here you would typically send to your backend
    alert('Thank you for your message! We\'ll respond within 24 hours.')
    e.target.reset()
  }

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d5016 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          border: '4px solid rgba(255, 255, 255, 0.1)',
          borderTop: '4px solid #87a96b',
          borderRight: '4px solid #9b7cb6',
          borderRadius: '50%',
          animation: 'spin 2s linear infinite',
          marginBottom: '2rem'
        }}></div>
        <div style={{
          fontFamily: 'Crimson Text, serif',
          fontSize: '1.5rem',
          color: '#87a96b',
          textAlign: 'center'
        }}>
          Preparing Your Sacred Space
          <div style={{ fontSize: '1rem', opacity: 0.7, marginTop: '0.5rem' }}>Mind • Body • Spirit</div>
        </div>
      </div>
    )
  }

  return (
    <div className="app" style={{position:'relative', zIndex:1}}>
      <StarfieldBackground />
      <CosmicCursor />
      


      {/* Header */}
      <header
        className="header"
        style={activeSection === 'arts'
          ? {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 100,
              background: 'rgba(30,30,30,0.18)',
              boxShadow: 'none',
              padding: '0.5rem 0 0.5rem 0',
              pointerEvents: 'auto',
              backdropFilter: 'blur(8px)'
            }
          : {}}
      >
        <div
          className="nav-container glass"
          style={activeSection === 'arts'
            ? {
                width: '100%',
                maxWidth: 'none',
                borderRadius: 32,
                boxSizing: 'border-box',
                padding: '0.5rem 2vw',
                background: 'rgba(30,30,30,0.18)',
                boxShadow: 'none',
                pointerEvents: 'auto',
                backdropFilter: 'blur(8px)'
              }
            : {
                width: '100%',
                maxWidth: 'none',
                borderRadius: 32,
                boxSizing: 'border-box',
                paddingLeft: '4vw',
                paddingRight: '4vw'
              }}
        >
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            🕉️ <span contentEditable suppressContentEditableWarning onBlur={() => {}}>The Sovereign Healer</span>
          </h1>
          <p style={{ color: 'var(--text-dim)', marginBottom: '1rem' }}>
            Mind, Body & Spirit Sanctuary
          </p>
          <button style={{position:'absolute',top:10,right:10,zIndex:200}} className="gradient-button" onClick={()=>setThemePanelOpen(v=>!v)}>
            {themePanelOpen ? '✕' : '🎨 Theme'}
          </button>
          <nav className="nav-menu" style={{display:'flex',justifyContent:'space-between',gap:'2vw',width:'100%',maxWidth:'100%',margin:'0 auto'}}>
            {menuNames.map((section, idx) => (
              <span key={section+idx} style={{display:'flex',alignItems:'center',gap:4}}>
                <button
                  className={`nav-item shimmer ${activeSection === section ? 'active' : ''}`}
                  onClick={() => navigateToSection(section)}
                >
                  <input value={section} onChange={e=>handleMenuNameChange(idx,e.target.value)} style={{background:'none',border:'none',color:'inherit',font:'inherit',width:Math.max(6,section.length)+"ch",textAlign:'center'}} />
                </button>
                <button onClick={()=>handleMenuRemove(idx)} style={{background:'none',border:'none',color:'var(--gold)',fontWeight:700,cursor:'pointer'}} title="Remove">×</button>
              </span>
            ))}
            <button className="gradient-button" style={{marginLeft:8}} onClick={handleMenuAdd}>＋</button>
          </nav>
        </div>
      </header>
      {/* Theme & Menu Panel */}
      {themePanelOpen && (
        <div style={{position:'fixed',top:80,right:20,zIndex:9999,background:'var(--glass-bg)',backdropFilter:'blur(20px)',border:'1px solid var(--glass-border)',borderRadius:16,padding:24,minWidth:360,boxShadow:'0 8px 32px rgba(0,0,0,0.3)'}}>
          <h3 style={{marginBottom:12}}>🎨 Theme & Menu Panel</h3>
          <div style={{marginBottom:16}}>
            <b>Section:</b>
            <select value={selectedSection} onChange={e=>setSelectedSection(e.target.value)} style={{marginLeft:8}}>
              {menuNames.map(name => <option key={name} value={name}>{name.charAt(0).toUpperCase()+name.slice(1)}</option>)}
            </select>
          </div>
          <div style={{marginBottom:16}}>
            <b>Colors:</b>
            {Object.entries(sectionThemes[selectedSection]?.colorVars || defaultSectionTheme.colorVars).map(([key,val])=>(
              <div key={key} style={{display:'flex',alignItems:'center',margin:'6px 0'}}>
                <span style={{width:80,textTransform:'capitalize'}}>{key.replace(/([A-Z])/g,' $1')}</span>
                <input type="color" value={val.startsWith('#')?val:'#'+parseInt(val.replace('#','').replace('rgb','').replace(/[^0-9a-f]/gi,''),16).toString(16).padStart(6,'0')} onChange={e=>handleColorChange(key,e.target.value)} style={{marginRight:8}} />
                <input type="text" value={val} onChange={e=>handleColorChange(key,e.target.value)} style={{width:100}} />
              </div>
            ))}
          </div>
          <div style={{marginBottom:16}}>
            <b>Panel Effects:</b>
            <div style={{display:'flex',flexDirection:'column',gap:4,marginTop:4}}>
              <label><input type="radio" name="effectType" value="glass" checked={sectionThemes[selectedSection]?.effectType==='glass'} onChange={()=>handleEffectTypeChange('glass')} /> Glass (default)</label>
              <label><input type="radio" name="effectType" value="frosted" checked={sectionThemes[selectedSection]?.effectType==='frosted'} onChange={()=>handleEffectTypeChange('frosted')} /> Frosted (stronger blur, white)</label>
              <label><input type="radio" name="effectType" value="aurora" checked={sectionThemes[selectedSection]?.effectType==='aurora'} onChange={()=>handleEffectTypeChange('aurora')} /> Aurora (animated gradient)</label>
              <label><input type="radio" name="effectType" value="glow" checked={sectionThemes[selectedSection]?.effectType==='glow'} onChange={()=>handleEffectTypeChange('glow')} /> Glow (intense color glow)</label>
              <label><input type="radio" name="effectType" value="meta" checked={sectionThemes[selectedSection]?.effectType==='meta'} onChange={()=>handleEffectTypeChange('meta')} /> Meta/Transcendent (shifting gradients)</label>
            </div>
            <div style={{marginTop:8}}>
              <b>Combine Effects:</b>
              <label style={{marginLeft:8}}><input type="checkbox" checked={sectionThemes[selectedSection]?.combineEffects.includes('aurora')} onChange={()=>handleCombineEffectsChange('aurora')} /> Aurora</label>
              <label style={{marginLeft:8}}><input type="checkbox" checked={sectionThemes[selectedSection]?.combineEffects.includes('glow')} onChange={()=>handleCombineEffectsChange('glow')} /> Glow</label>
              <label style={{marginLeft:8}}><input type="checkbox" checked={sectionThemes[selectedSection]?.combineEffects.includes('meta')} onChange={()=>handleCombineEffectsChange('meta')} /> Meta</label>
            </div>
          </div>
          <div style={{marginBottom:16}}>
            <b>Glass Alpha:</b>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <span>Alpha</span>
              <input type="range" min="0.01" max="0.4" step="0.01" value={sectionThemes[selectedSection]?.glassAlpha} onChange={e=>handleGlassChange(Number(e.target.value))} />
              <span>{sectionThemes[selectedSection]?.glassAlpha}</span>
            </div>
          </div>
          <div style={{marginBottom:16}}>
            <b>Menu Names:</b>
            <div style={{fontSize:'0.95em',color:'var(--text-dim)'}}>Edit, add, or remove menu items live.</div>
          </div>
          <button className="gradient-button" onClick={()=>setThemePanelOpen(false)} style={{marginTop:12}}>Close</button>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        
        {/* Home Section */}
        {activeSection === 'home' && (
          <HomePage navigateToSection={navigateToSection} getPanelClass={getPanelClass} />
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
          <div className={getPanelClass('services')}>
            <h2 className="panel-title gradient-text">Healing Services</h2>
            <p className="panel-subtitle">
              Professional healing sessions tailored to your unique needs and spiritual journey
            </p>
            
            <div className="card-grid">
              {businessData.services.map((service) => (
                <div key={service.id} className="card glass glow-hover shimmer">
                  <div className="card-icon">{service.icon}</div>
                  <h3 className="card-title">{service.name}</h3>
                  <p className="card-content">{service.description}</p>
                  <div className="card-price">{service.price} / {service.duration}</div>
                  <button className="gradient-button" style={{ marginTop: '1rem' }}>
                    Book Session
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Section */}
  {activeSection === 'arts' && <ArtsGallery />}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className={getPanelClass('education')}>
            <h2 className="panel-title gradient-text">Sacred Education</h2>
            <p className="panel-subtitle">
              Learn the sacred art of Reiki through our comprehensive certification program
            </p>
            
            <div className="card-grid">
              <div className="card glass glow-hover">
                <div className="card-icon">📚</div>
                <h3 className="card-title">Level 1 (Shoden)</h3>
                <p className="card-content">Foundation of Self-Healing</p>
                <div className="card-price">$350 / 2-day workshop</div>
                <button className="gradient-button" style={{ marginTop: '1rem' }}>
                  Enroll Now
                </button>
              </div>
              
              <div className="card glass glow-hover">
                <div className="card-icon">🎓</div>
                <h3 className="card-title">Level 2 (Okuden)</h3>
                <p className="card-content">Advanced Techniques & Distance Healing</p>
                <div className="card-price">$450 / 2-day workshop</div>
                <button className="gradient-button" style={{ marginTop: '1rem' }}>
                  Enroll Now
                </button>
              </div>
              
              <div className="card glass glow-hover">
                <div className="card-icon">👑</div>
                <h3 className="card-title">Master Level</h3>
                <p className="card-content">Teacher Training & Mastery</p>
                <div className="card-price">$750 / 3-day intensive</div>
                <button className="gradient-button" style={{ marginTop: '1rem' }}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Community Section */}
        {activeSection === 'community' && (
          <div className={getPanelClass('community')}>
            <h2 className="panel-title gradient-text">Community Altar</h2>
            <p className="panel-subtitle">
              Join our healing community through regular gatherings, workshops, and sacred ceremonies
            </p>
            
            <div className="card-grid">
              <div className="card glass glow-hover">
                <div className="card-icon">🌟</div>
                <h3 className="card-title">Monthly Reiki Circle</h3>
                <p className="card-content">Group healing sessions on first Thursday</p>
                <div className="card-price">$25 per session</div>
                <button className="gradient-button" style={{ marginTop: '1rem' }}>
                  Register
                </button>
              </div>
              
              <div className="card glass glow-hover">
                <div className="card-icon">💎</div>
                <h3 className="card-title">Crystal Grid Workshop</h3>
                <p className="card-content">Learn powerful crystal grid manifestation</p>
                <div className="card-price">$45 per workshop</div>
                <button className="gradient-button" style={{ marginTop: '1rem' }}>
                  Register
                </button>
              </div>
              
              <div className="card glass glow-hover">
                <div className="card-icon">🎵</div>
                <h3 className="card-title">Sound Healing Circle</h3>
                <p className="card-content">Vocal toning and sound healing</p>
                <div className="card-price">$20 per session</div>
                <button className="gradient-button" style={{ marginTop: '1rem' }}>
                  Register
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className={getPanelClass('contact')}>
            <h2 className="panel-title gradient-text">Sacred Connection</h2>
            <p className="panel-subtitle">
              Ready to begin your healing journey? Connect with us for guidance and support
            </p>
            
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <form className="glass" style={{ padding: '3rem', marginBottom: '3rem' }} onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" name="name" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">I'm Interested In</label>
                  <select name="interest" className="form-input" required>
                    <option value="">Please select...</option>
                    <option value="healing-session">Healing Session</option>
                    <option value="reiki-training">Reiki Training</option>
                    <option value="products">Products</option>
                    <option value="community-events">Community Events</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea 
                    name="message" 
                    className="form-input" 
                    rows="6" 
                    style={{ minHeight: '150px', resize: 'vertical' }}
                    required 
                  />
                </div>
                
                <button type="submit" className="gradient-button" style={{ width: '100%', fontSize: '1.1rem' }}>
                  Send Message
                </button>
              </form>
              
              <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '2rem', fontFamily: 'Crimson Text, serif', fontSize: '1.8rem' }}>
                  Visit Our Sanctuary
                </h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600' }}>
                  180 E Main Street<br />
                  Hillsboro, Oregon
                </p>
                <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
                  Open by appointment<br />
                  Free local pickup available
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ color: 'var(--sage)', fontSize: '1.5rem' }}>📞</span>
                    <p>Call for appointments</p>
                  </div>
                  <div>
                    <span style={{ color: 'var(--amethyst)', fontSize: '1.5rem' }}>📧</span>
                    <p>info@sovereignhealer.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="footer glass">
        <div className="footer-content">
          <div className="footer-logo gradient-text">The Sovereign Healer</div>
          <p style={{ color: 'var(--text-dim)', margin: '2rem 0', fontSize: '1.1rem', lineHeight: '1.7' }}>
            "Our mission is not merely to sell products or services, but to create a sanctuary for healing, 
            education, and community for like-minded people. We guide others on their journey to balance 
            their mind, body, and spirit."
          </p>
          
          <div className="footer-links">
            <button className="footer-link" onClick={() => navigateToSection('services')}>Services</button>
            <button className="footer-link" onClick={() => navigateToSection('arts')}>Arts</button>
            <button className="footer-link" onClick={() => navigateToSection('education')}>Education</button>
            <button className="footer-link" onClick={() => navigateToSection('community')}>Community</button>
            <button className="footer-link" onClick={() => navigateToSection('contact')}>Contact</button>
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-dim)', opacity: 0.6 }}>
              © 2025 The Sovereign Healer • All Rights Reserved • Made with Sacred Intent
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App