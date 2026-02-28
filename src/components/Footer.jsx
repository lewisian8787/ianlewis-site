export default function Footer() {
  return (
    <footer style={footerStyle}>
      <span style={nameStyle}>Ian Lewis</span>
      <span style={yearStyle}>© {new Date().getFullYear()}</span>
    </footer>
  );
}

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 2.5rem',
  borderTop: '1px solid rgba(255,255,255,0.06)',
};

const nameStyle = {
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.2)',
  letterSpacing: '0.05em',
};

const yearStyle = {
  fontSize: '0.8rem',
  color: 'rgba(255,255,255,0.2)',
};
