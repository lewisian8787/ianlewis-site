import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav-burger span {
          display: block;
          width: 24px;
          height: 2px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          transition: opacity 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .overlay-fade { animation: fadeIn 0.25s ease forwards; }
        .overlay-link { opacity: 0; animation: fadeInUp 0.3s ease forwards; }
        .overlay-link:nth-child(1) { animation-delay: 0.1s; }
        .overlay-link:nth-child(2) { animation-delay: 0.18s; }
        .overlay-link:nth-child(3) { animation-delay: 0.26s; }
        @media (max-width: 640px) {
          .nav-burger { display: flex; }
          .nav-links { display: none; }
        }
      `}</style>
      <nav style={navStyle}>
        <div style={brandStyle}>
          <div style={logoPlaceholderStyle} />
          <span style={logoStyle}>Ian<br />Lewis</span>
        </div>
        <div className="nav-links">
          <a href="#projects" style={linkStyle}>projects</a>
          <a href="#contact" style={linkStyle}>contact me</a>
          <a href="#about" style={linkStyle}>about me</a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </nav>
      {open && (
        <div style={overlayStyle} className="overlay-fade" onClick={() => setOpen(false)}>
          <a href="#projects" style={overlayLinkStyle} className="overlay-link" onClick={() => setOpen(false)}>projects</a>
          <a href="#contact" style={overlayLinkStyle} className="overlay-link" onClick={() => setOpen(false)}>contact me</a>
          <a href="#about" style={overlayLinkStyle} className="overlay-link" onClick={() => setOpen(false)}>about me</a>
        </div>
      )}
    </>
  );
}

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.25rem 2.5rem',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  backdropFilter: 'blur(12px)',
  background: 'rgba(13,21,32,0.85)',
};

const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
};

const logoPlaceholderStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '4px',
  background: 'rgba(255,255,255,0.1)',
  flexShrink: 0,
};

const logoStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  fontFamily: "'Raleway', sans-serif",
  letterSpacing: '0.1em',
  lineHeight: 1.2,
  color: '#fff',
};

const linkStyle = {
  fontSize: '0.875rem',
  color: 'rgba(255,255,255,0.5)',
  fontWeight: 500,
  cursor: 'pointer',
};

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  zIndex: 98,
  background: 'rgba(13,21,32,0.92)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
};

const overlayLinkStyle = {
  fontSize: '1.5rem',
  color: 'rgba(255,255,255,0.7)',
  fontWeight: 500,
  cursor: 'pointer',
};
