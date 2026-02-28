export default function Hero() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <p style={eyebrowStyle}>Software Engineer</p>
        <h1 style={headingStyle}>Ian Lewis</h1>
        <p style={subStyle}>
          I build things for the web.
        </p>
        <div style={ctaStyle}>
          <a href="#work" style={primaryBtn}>View my work</a>
          <a href="#contact" style={ghostBtn}>Get in touch</a>
        </div>
      </div>
      <div style={gridOverlay} aria-hidden="true" />
    </section>
  );
}

const sectionStyle = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '0 2.5rem',
  overflow: 'hidden',
};

const innerStyle = {
  maxWidth: '700px',
  position: 'relative',
  zIndex: 1,
};

const eyebrowStyle = {
  fontSize: '0.8rem',
  fontWeight: 600,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '1.25rem',
};

const headingStyle = {
  fontSize: 'clamp(3rem, 8vw, 6rem)',
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: '-0.03em',
  color: '#ffffff',
  marginBottom: '1.5rem',
};

const subStyle = {
  fontSize: '1.15rem',
  color: 'rgba(255,255,255,0.45)',
  fontWeight: 400,
  maxWidth: '480px',
  marginBottom: '2.5rem',
};

const ctaStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const primaryBtn = {
  display: 'inline-block',
  padding: '0.75rem 1.75rem',
  background: '#fff',
  color: '#0d0d0d',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '0.9rem',
  letterSpacing: '0.01em',
};

const ghostBtn = {
  display: 'inline-block',
  padding: '0.75rem 1.75rem',
  background: 'transparent',
  color: 'rgba(255,255,255,0.6)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '6px',
  fontWeight: 500,
  fontSize: '0.9rem',
};

const gridOverlay = {
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
  maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
};
