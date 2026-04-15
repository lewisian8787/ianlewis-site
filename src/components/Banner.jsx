const SQUARES = [
  { left: '2%',   top: '55%', w: 10, h: 10, color: '#3d7fa8', delay: 0 },
  { left: '5%',   top: '35%', w: 6,  h: 6,  color: '#c8881a', delay: 1.2 },
  { left: '8%',   top: '65%', w: 14, h: 14, color: '#3d7fa8', delay: 0.4 },
  { left: '11%',  top: '40%', w: 8,  h: 8,  color: '#d4582a', delay: 2.1 },
  { left: '14%',  top: '60%', w: 5,  h: 5,  color: '#5a8faa', delay: 0.8 },
  { left: '17%',  top: '30%', w: 16, h: 16, color: '#c8881a', delay: 1.5 },
  { left: '19%',  top: '70%', w: 12, h: 12, color: '#3d7fa8', delay: 0.2 },
  { left: '22%',  top: '45%', w: 6,  h: 6,  color: '#d4582a', delay: 1.9 },
  { left: '25%',  top: '55%', w: 18, h: 18, color: '#8aacb8', delay: 0.6 },
  { left: '28%',  top: '35%', w: 5,  h: 5,  color: '#d4582a', delay: 2.4 },
  { left: '31%',  top: '65%', w: 9,  h: 9,  color: '#c8881a', delay: 1.1 },
  { left: '34%',  top: '40%', w: 7,  h: 7,  color: '#3d7fa8', delay: 0.3 },
  { left: '37%',  top: '60%', w: 4,  h: 4,  color: '#d4582a', delay: 1.7 },
  { left: '40%',  top: '30%', w: 13, h: 13, color: '#d4582a', delay: 0.9 },
  { left: '42%',  top: '70%', w: 6,  h: 6,  color: '#5a8faa', delay: 2.2 },
  { left: '45%',  top: '50%', w: 4,  h: 4,  color: '#c8881a', delay: 0.5 },
  { left: '48%',  top: '38%', w: 10, h: 10, color: '#5a7a9c', delay: 1.3 },
  { left: '51%',  top: '62%', w: 8,  h: 8,  color: '#d4582a', delay: 0.7 },
  { left: '54%',  top: '42%', w: 5,  h: 5,  color: '#3d7fa8', delay: 2.0 },
  { left: '57%',  top: '58%', w: 16, h: 16, color: '#c8a030', delay: 1.6 },
  { left: '60%',  top: '32%', w: 7,  h: 7,  color: '#5a8faa', delay: 0.1 },
  { left: '63%',  top: '68%', w: 4,  h: 4,  color: '#d4582a', delay: 2.3 },
  { left: '66%',  top: '45%', w: 11, h: 11, color: '#3d7fa8', delay: 1.0 },
  { left: '69%',  top: '55%', w: 18, h: 18, color: '#5a7a9c', delay: 0.4 },
  { left: '72%',  top: '35%', w: 6,  h: 6,  color: '#c8881a', delay: 1.8 },
  { left: '75%',  top: '65%', w: 8,  h: 8,  color: '#d4582a', delay: 0.6 },
  { left: '78%',  top: '40%', w: 5,  h: 5,  color: '#5a8faa', delay: 2.1 },
  { left: '81%',  top: '60%', w: 12, h: 12, color: '#3d7fa8', delay: 1.4 },
  { left: '84%',  top: '30%', w: 7,  h: 7,  color: '#d4582a', delay: 0.8 },
  { left: '87%',  top: '70%', w: 4,  h: 4,  color: '#c8881a', delay: 2.5 },
  { left: '90%',  top: '48%', w: 9,  h: 9,  color: '#5a7a9c', delay: 0.2 },
  { left: '93%',  top: '38%', w: 6,  h: 6,  color: '#d4582a', delay: 1.6 },
  { left: '96%',  top: '62%', w: 10, h: 10, color: '#3d7fa8', delay: 0.9 },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Banner({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .theme-toggle {
          position: absolute;
          right: 2.5rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: 1px solid rgba(128,128,128,0.3);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: inherit;
          opacity: 0.7;
          transition: opacity 0.2s, border-color 0.2s;
        }
        .theme-toggle:hover { opacity: 1; border-color: rgba(128,128,128,0.6); }
        .theme-toggle:focus-visible {
          outline: 2px solid #c8a030;
          outline-offset: 3px;
          opacity: 1;
        }
      `}</style>
      <div style={bannerStyle}>
        {SQUARES.map((sq, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: sq.left,
              top: sq.top,
              width: sq.w,
              height: sq.h,
              background: sq.color,
              borderRadius: '2px',
              animation: `float ${2.5 + (i % 3) * 0.5}s ease-in-out ${sq.delay}s infinite`,
              opacity: 0.85,
            }}
          />
        ))}
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={!isDark}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </>
  );
}

const bannerStyle = {
  position: 'relative',
  width: '100%',
  height: '70px',
  overflow: 'hidden',
  marginTop: '104px',
  background: 'var(--bg)',
};
