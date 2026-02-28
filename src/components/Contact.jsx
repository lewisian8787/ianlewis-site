export default function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <div style={innerStyle}>
        <p style={eyebrowStyle}>Contact</p>
        <h2 style={headingStyle}>Get in touch</h2>
        <p style={subStyle}>
          Have a project in mind or just want to say hello?
        </p>
        <a href="mailto:ralphnessinc@gmail.com" style={emailStyle}>
          ralphnessinc@gmail.com
        </a>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '8rem 2.5rem',
  borderTop: '1px solid rgba(255,255,255,0.06)',
};

const innerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
};

const eyebrowStyle = {
  fontSize: '0.8rem',
  fontWeight: 600,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '0.75rem',
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: '#fff',
  marginBottom: '1rem',
};

const subStyle = {
  fontSize: '1rem',
  color: 'rgba(255,255,255,0.4)',
  marginBottom: '2rem',
};

const emailStyle = {
  display: 'inline-block',
  fontSize: '1.1rem',
  fontWeight: 500,
  color: '#fff',
  borderBottom: '1px solid rgba(255,255,255,0.2)',
  paddingBottom: '2px',
};
