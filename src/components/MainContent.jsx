import React from 'react';

const MainContent = ({
	activeSection,
	getPanelClass,
	businessData,
	handleContactSubmit,
	navigateToSection
}) => {
	return (
		<main className="main-content">
			{/* Home Section */}
			{activeSection === 'home' && (
				<div className={getPanelClass('home')}>
					<h2 className="panel-title gradient-text">Sacred Healing Sanctuary</h2>
					<p className="panel-subtitle">
						Where ancient wisdom meets modern healing techniques to restore 
						balance and harmony to your mind, body, and spirit
					</p>
					<div style={{ textAlign: 'center', margin: '3rem 0' }}>
						<div className="pulse" style={{ fontSize: '6rem', color: 'var(--gold)' }}>🕉️</div>
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
			{activeSection === 'products' && (
				<div className={getPanelClass('products')}>
					<h2 className="panel-title gradient-text">Sovereign Products</h2>
					<p className="panel-subtitle">
						Take your healing journey home with our carefully curated collection of energetically charged products
					</p>
					<div className="card-grid">
						{businessData.products.map((product) => (
							<div key={product.id} className="card glass glow-hover shimmer">
								<div className="card-icon">{product.icon}</div>
								<h3 className="card-title">{product.name}</h3>
								<p className="card-content">{product.description}</p>
								<div className="card-price">{product.price}</div>
								<button className="gradient-button" style={{ marginTop: '1rem' }}>
									View Collection
								</button>
							</div>
						))}
					</div>
				</div>
			)}

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
	);
};

export default MainContent;
