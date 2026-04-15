import profilePic from '../assets/ian.jpeg'

export default function Hero() {
  return (
    <section style={sectionStyle}>
      <style>{`
        .hero-body { display: flex; flex-direction: column; gap: 4rem; }
        .hero-text { display: flex; flex-direction: column; gap: 4rem; }
        .hero-photo { order: -1; }
        @media (max-width: 640px) {
          .hero-photo { width: 160px !important; height: 200px !important; }
        }
        @media (min-width: 768px) {
          .hero-body { flex-direction: row; align-items: flex-start; gap: 6rem; }
          .hero-photo { order: 0; flex-shrink: 0; margin-left: 24rem; }
        }
      `}</style>
      <div style={innerStyle}>
        <p style={nameStyle}>[ ian lewis ]</p>
        <div className="hero-body">
          <div className="hero-text">
            <div style={contentGroupStyle}>
              <div style={textBlockStyle}>
                <p style={subtitleStyle}>who?</p>
                <p style={bodyStyle}>Full stack engineer with an obsessive curiosity, a love for building things from scratch, and a genuine passion for collaboration.</p>
              </div>
              <div style={textBlockStyle}>
                <p style={subtitleStyle}>why?</p>
                <p style={bodyStyle}>I love being able to see an idea through from conception to completion, be that by myself or as part of a team. </p>
              </div>
              <div style={textBlockStyle}>
                <p style={subtitleStyle}>where?</p>
                <p style={bodyStyle}>I live in Raleigh, North Carolina.</p>
              </div>
            </div>
            <div style={textBlockStyle}>
              <p style={subtitleStyle}>more</p>
              <div style={moreLinksStyle}>
                <a href="#about" style={moreLinkStyle}>more about me</a>
                <a href="#contact" style={moreLinkStyle}>contact me</a>
                <a href="#resume" style={moreLinkStyle}>resume / cv</a>
                <a href="#work" style={moreLinkStyle}>some of my work</a>
              </div>
            </div>
          </div>
          <img src={profilePic} style={photoStyle} className="hero-photo" aria-label="Photo placeholder" />
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'flex-start',
  padding: '4rem 2.5rem',
};

const innerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
};

const nameStyle = {
  fontSize: '1.4rem',
  fontWeight: 400,
  letterSpacing: '0.05em',
  background: 'linear-gradient(90deg, #4a9ab5, #c8a030)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const textBlockStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const contentGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const moreLinksStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const moreLinkStyle = {
  fontSize: '1rem',
  color: '#fff',
  fontWeight: 400,
  letterSpacing: '0.02em',
  borderBottom: '1px solid rgba(255,255,255,0.15)',
  paddingBottom: '0.5rem',
  width: 'fit-content',
  cursor: 'pointer',
};

const bodyStyle = {
  fontSize: '1.5rem',
  color: '#fff',
  lineHeight: 1.8,
  maxWidth: '780px',
};

const subtitleStyle = {
  fontSize: '2rem',
  fontWeight: 400,
  letterSpacing: '0.05em',
  background: 'linear-gradient(90deg, #4a9ab5, #c8a030)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const photoStyle = {
  width: '240px',
  height: '300px',
  objectFit: 'cover',
  objectPosition: 'center top',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '4px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
};
