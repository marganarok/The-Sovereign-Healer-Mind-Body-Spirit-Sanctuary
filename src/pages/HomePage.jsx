import React from 'react';
import '../App.css';
import '../styles/Roadmap.css';
import '../styles/HomeGalleryShowcase.css';

const HomePage = ({ navigateToSection, getPanelClass }) => (
  <div className={getPanelClass('home')}>
    <h2 className="panel-title gradient-text">Sacred Healing Sanctuary</h2>
    <p className="panel-subtitle">
      Where ancient wisdom meets modern healing techniques to restore
      balance and harmony to your mind, body, and spirit
    </p>
    <div style={{ textAlign: 'center', margin: '3rem 0' }}>
      <div className="pulse" style={{ fontSize: '6rem', color: 'var(--gold)' }}>🕉️</div>
    </div>
    {/* Home Gallery Showcase - 4 images in unique shapes */}
    <div className="home-gallery-showcase">
      <img src="/gallery/1%20(1).jpg" alt="Gallery 1" className="home-gallery-img shape-blob" />
      <img src="/gallery/1%20(2).jpg" alt="Gallery 2" className="home-gallery-img shape-circle" />
      <img src="/gallery/1%20(3).jpg" alt="Gallery 3" className="home-gallery-img shape-hex" />
      <img src="/gallery/1%20(4).jpg" alt="Gallery 4" className="home-gallery-img shape-rounded" />
    </div>
    {/* 100-Day Roadmap Section */}
    <div style={{margin:'3.5rem 0 2.5rem 0'}}>
      <h3 className="gradient-text" style={{fontSize:'2rem',marginBottom:'2.2rem',textAlign:'center'}}>100-Day Roadmap</h3>
      <div className="roadmap-vertical">
        {/* Step 1: Our Website Launch */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon pulse">🌐</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">Our Website Launch</span>
            <span className="roadmap-step-desc">The Sovereign Healer cosmic sanctuary goes live! Explore our modular, interactive site and discover a new era of mind, body & spirit healing.</span>
          </div>
        </div>
        {/* Step 2: Arts Gallery Expansion + YouTube */}
        <div style={{display:'flex',gap:'1.5rem',alignItems:'stretch',justifyContent:'center',width:'100%'}}>
          <div className="roadmap-step glow-hover tilt-3d" style={{flex:'1 1 320px',minWidth:0}}>
            <span className="roadmap-step-icon">🖼️</span>
            <div className="roadmap-step-content">
              <span className="roadmap-step-title">Arts Gallery Expansion</span>
              <span className="roadmap-step-desc">Launch the 100-piece cosmic arts gallery with categories, search, and immersive modal viewer.</span>
            </div>
          </div>
          <div className="roadmap-step glow-hover tilt-3d" style={{flex:'1 1 320px',minWidth:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'0.7rem 0.5rem'}}>
            <span className="roadmap-step-title" style={{marginBottom:'0.7rem',fontSize:'1.1rem'}}>Featured YouTube</span>
            <div style={{width:'100%',maxWidth:'320px',aspectRatio:'16/9',background:'#222',borderRadius:'12px',overflow:'hidden',boxShadow:'0 2px 12px #9b7cb655'}}>
              <iframe
                width="100%"
                height="100%"
                  src="https://www.youtube.com/embed/0WxNqlnyO5w"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{display:'block',width:'100%',height:'100%'}}
              ></iframe>
            </div>
          </div>
        </div>
        {/* Step 3: Theming & Customization */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon">🎨</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">Theming & Customization</span>
            <span className="roadmap-step-desc">Enable live theme editing, per-section effects, and menu customization for a truly personal experience.</span>
          </div>
        </div>
        {/* Step 4: Community & Testimonials */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon">🤝</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">Community & Testimonials</span>
            <span className="roadmap-step-desc">Add testimonials, news, and a blog to foster community and share healing journeys.</span>
          </div>
        </div>
        {/* Step 5: AI-Powered Features */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon">🤖</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">AI-Powered Features</span>
            <span className="roadmap-step-desc">Integrate AI art, prompts, and smart search to enhance discovery and creativity.</span>
          </div>
        </div>
        {/* Step 6: User Accounts & Personalization */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon">🧑‍🚀</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">User Accounts & Personalization</span>
            <span className="roadmap-step-desc">Allow users to create profiles, save favorites, and comment on art and blog posts.</span>
          </div>
        </div>
        {/* Step 7: Performance & Accessibility */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon">⚡</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">Performance & Accessibility</span>
            <span className="roadmap-step-desc">Optimize animations, effects, and accessibility for all users and devices.</span>
          </div>
        </div>
        {/* Step 8: Internationalization */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon">🌍</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">Internationalization</span>
            <span className="roadmap-step-desc">Add multi-language support to welcome a global audience.</span>
          </div>
        </div>
        {/* Step 9: Admin & Gallery Uploads */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon">🛠️</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">Admin & Gallery Uploads</span>
            <span className="roadmap-step-desc">Enable admin panel for uploading and managing gallery content and site features.</span>
          </div>
        </div>
        {/* Step 10: Testing & CI/CD */}
        <div className="roadmap-step glow-hover tilt-3d">
          <span className="roadmap-step-icon">🧪</span>
          <div className="roadmap-step-content">
            <span className="roadmap-step-title">Testing & CI/CD</span>
            <span className="roadmap-step-desc">Add automated tests and continuous integration for robust, reliable releases.</span>
          </div>
        </div>
      </div>
    </div>
    <div className="card-grid">
      <div className="card glass glow-hover">
        <div className="card-icon pulse">🌿</div>
        <h3 className="card-title">Holistic Healing</h3>
        <p className="card-content">
          Experience transformative healing modalities that address root causes of imbalance.
        </p>
      </div>
      <div className="card glass glow-hover">
        <div className="card-icon float">✨</div>
        <h3 className="card-title">Energy Balancing</h3>
        <p className="card-content">
          Restore natural flow of life force energy through your body.
        </p>
      </div>
      <div className="card glass glow-hover">
        <div className="card-icon pulse">🧘</div>
        <h3 className="card-title">Spiritual Growth</h3>
        <p className="card-content">
          Embark on a journey of spiritual awakening and self-discovery.
        </p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <button className="gradient-button" onClick={() => navigateToSection('services')}>
        Begin Your Healing Journey
      </button>
    </div>
  </div>
);

export default HomePage;
