import React from 'react';

const Footer = ({ navigateToSection }) => (
	<footer className="footer glass">
		<div className="footer-content">
			<div className="footer-logo gradient-text">The Sovereign Healer</div>
			<p style={{ color: 'var(--text-dim)', margin: '2rem 0', fontSize: '1.1rem', lineHeight: '1.7' }}>
				"Our mission is not merely to sell products or services, but to create a sanctuary for healing, 
				education, and community for like-minded people. We guide others on their journey to balance 
				their mind, body, and spirit."
			</p>
					<div className="footer-links">
						<button className="footer-link" onClick={() => navigateToSection && navigateToSection('services')}>Services</button>
						<button className="footer-link" onClick={() => navigateToSection && navigateToSection('arts')}>Arts</button>
						<button className="footer-link" onClick={() => navigateToSection && navigateToSection('education')}>Education</button>
						<button className="footer-link" onClick={() => navigateToSection && navigateToSection('community')}>Community</button>
						<button className="footer-link" onClick={() => navigateToSection && navigateToSection('contact')}>Contact</button>
					</div>
			<div style={{ marginTop: '3rem' }}>
				<p style={{ color: 'var(--text-dim)', opacity: 0.6 }}>
					© 2025 The Sovereign Healer • All Rights Reserved • Made with Sacred Intent
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
