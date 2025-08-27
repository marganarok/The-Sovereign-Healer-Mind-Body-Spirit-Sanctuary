
import React from 'react';

const socials = [
	{ href: 'https://www.youtube.com/@thesovereignhealer', icon: '▶️', label: 'YouTube' },
	{ href: 'https://www.instagram.com/thesovereignhealer', icon: '📸', label: 'Instagram' },
	{ href: 'mailto:info@sovereignhealer.com', icon: '✉️', label: 'Email' },
];


// navLinks will be passed as menuNames prop from App.jsx

const Header = ({ onNavigate, menuNames }) => {
	return (
		<header className="header" style={{ position: 'relative', overflow: 'hidden' }}>
			{/* Subtle background effect */}
			<div style={{
				position: 'absolute',
				inset: 0,
				zIndex: 0,
				background: 'radial-gradient(circle at 60% 0%, #9b7cb6 0%, transparent 70%), linear-gradient(135deg, #1a1a1a 0%, #2d5016 100%)',
				opacity: 0.18,
				pointerEvents: 'none',
			}} />
			<div className="nav-container glass" style={{ position: 'relative', paddingBottom: 24, zIndex: 1 }}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
					{/* Branding */}
					<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ fontSize: '2.2rem', lineHeight: 1 }}>🕉️</span>
						<span className="gradient-text" contentEditable suppressContentEditableWarning style={{ fontSize: '2.1rem', fontWeight: 700, letterSpacing: 1 }}>
							The Sovereign Healer
						</span>
					</div>
					{/* Socials */}
					<div style={{ display: 'flex', gap: 12 }}>
						{socials.map(s => (
							<a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} style={{ fontSize: '1.5rem', color: 'var(--amethyst)', textDecoration: 'none', transition: 'color 0.2s' }}>
								<span role="img" aria-label={s.label}>{s.icon}</span>
							</a>
						))}
					</div>
				</div>
				{/* Tagline */}
				<p style={{ color: 'var(--text-dim)', margin: '1rem 0 1.5rem', textAlign: 'center', fontSize: '1.15rem', fontWeight: 500 }}>
					Mind, Body & Spirit Sanctuary
				</p>
				{/* Navigation */}
						<nav style={{ display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap', marginBottom: 24 }}>
							{menuNames && menuNames.map((name, idx) => (
								<button
									key={name+idx}
									className="nav-item shimmer"
									style={{ background: 'none', border: 'none', color: 'var(--text-light)', fontSize: '1.08rem', fontWeight: 600, cursor: 'pointer', padding: '6px 14px', borderRadius: 8, transition: 'background 0.2s' }}
									onClick={() => onNavigate && onNavigate(name)}
								>
									{name.charAt(0).toUpperCase() + name.slice(1)}
								</button>
							))}
						</nav>
				{/* Video Box */}
				<div
					style={{
						maxWidth: 480,
						margin: '0 auto 1.5rem',
						background: 'rgba(30,30,30,0.88)',
						borderRadius: 18,
						boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
						overflow: 'hidden',
						border: '2px solid var(--amethyst, #9b7cb6)',
						position: 'relative',
						aspectRatio: '16/9',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/0WxNqlnyO5w?start=37"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						allowFullScreen
						style={{ minHeight: 220, minWidth: 320, border: 'none', background: 'black' }}
					></iframe>
				</div>
			</div>
		</header>
	);
};

export default Header;
