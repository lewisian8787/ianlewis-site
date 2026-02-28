export default function Nav() {
  return (
    <nav style={navStyle}>
      <span style={logoStyle}>IL</span>
      <div style={linksStyle}>
        <a href="#work" style={linkStyle}>Work</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
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
  background: 'rgba(13,13,13,0.85)',
};

const logoStyle = {
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  color: '#fff',
};

const linksStyle = {
  display: 'flex',
  gap: '2rem',
};

const linkStyle = {
  fontSize: '0.875rem',
  color: 'rgba(255,255,255,0.5)',
  fontWeight: 500,
  transition: 'color 0.2s',
  cursor: 'pointer',
};
