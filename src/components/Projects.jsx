const PROJECTS = [
  {
    name: 'WrestleGuess',
    description: 'A pick\'em platform for wrestling fans. Make predictions on match outcomes, earn points, and compete on a global leaderboard.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    url: "wrestleguess.com",
  },
  {
    name: 'The Dugout',
    description: 'A RAG-powered chatbot for exploring football tactics and statistics through a conversational AI interface.',
    tags: ['Python', 'FastAPI', 'TypeScript', 'Vite', 'Pinecone', 'SQL'],
    url: 'https://dugout.ianlewis.online',
    github: 'https://github.com/lewisian8787/rag_soccer',
  },
];

export default function Projects() {
  return (
    <section id="work" style={sectionStyle}>
      <div style={innerStyle}>
        <p style={eyebrowStyle}>Selected Work</p>
        <h2 style={headingStyle}>Projects</h2>
        <div style={gridStyle}>
          {PROJECTS.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div style={cardStyle}>
      <div style={cardTopStyle}>
        <h3 style={cardTitleStyle}>{project.name}</h3>
        <div style={cardLinksStyle}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>
              GitHub
            </a>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>
              Live ↗
            </a>
          )}
        </div>
      </div>
      <p style={cardDescStyle}>{project.description}</p>
      <div style={tagsStyle}>
        {project.tags.map(tag => (
          <span key={tag} style={tagStyle}>{tag}</span>
        ))}
      </div>
    </div>
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
  marginBottom: '3rem',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '1px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '12px',
  overflow: 'hidden',
};

const cardStyle = {
  background: '#0d1520',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  transition: 'background 0.2s',
  cursor: 'default',
};

const cardTopStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const cardTitleStyle = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#fff',
  letterSpacing: '-0.01em',
};

const cardLinksStyle = {
  display: 'flex',
  gap: '1.25rem',
  flexShrink: 0,
};

const cardLinkStyle = {
  fontSize: '0.8rem',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.4)',
  letterSpacing: '0.02em',
};

const cardDescStyle = {
  fontSize: '0.9rem',
  color: 'rgba(255,255,255,0.45)',
  lineHeight: 1.7,
  flexGrow: 1,
};

const tagsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
};

const tagStyle = {
  fontSize: '0.75rem',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.35)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '4px',
  padding: '0.25rem 0.6rem',
  letterSpacing: '0.03em',
};
