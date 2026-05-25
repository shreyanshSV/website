/* Hero — full-screen video bg, exact spec from brief, branded The Cosmic Dev */

const NAV_LINKS = [
  { label: 'Story',     id: 'story' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Studios',   id: 'studios' },
  { label: 'Feedback',  id: 'feedback' },
];

const HERO_STATS = [
  { value: 300, label: 'CRAFTED\nWEB APPS' },
  { value: 200, label: 'DIGITAL\nPRODUCTS' },
  { value: 100, label: 'SOFTWARE\nSOLUTIONS' },
];

const HamburgerBtn = ({ onClick, label = 'Open menu' }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="w-9 h-9 rounded-full bg-black grid place-items-center no-tap hover:bg-accent transition-colors"
  >
    <span className="flex flex-col gap-1">
      <span className="block w-4 h-0.5 bg-white" />
      <span className="block w-4 h-0.5 bg-white" />
      <span className="block w-4 h-0.5 bg-white" />
    </span>
  </button>
);

const CloseBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Close menu"
    className="w-9 h-9 rounded-full bg-black text-white grid place-items-center no-tap hover:bg-accent transition-colors"
  >
    <XIcon size={18} />
  </button>
);

const Nav = ({ onOpenMenu, onNav }) => {
  return (
    <nav className="relative z-30 flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
      <div className="mount-down" style={{ transitionDelay: '0ms' }}>
        <a href="#top" className="flex items-center gap-3 no-tap">
          <span className="rounded-full grid place-items-center" style={{ width: 32, height: 32, border: '2px solid #5E0ED7' }}>
            <span className="logo-dot block rounded-full" style={{ width: 10, height: 10, background: '#5E0ED7' }} />
          </span>
          <span className="hidden sm:inline text-[11px] font-semibold tracking-[0.22em] uppercase text-black">
            The Cosmic Dev
          </span>
        </a>
      </div>

      <ul className="hidden md:flex items-center gap-9">
        {NAV_LINKS.map((l, i) => (
          <li key={l.id} className="mount-down" style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
            <button
              onClick={() => onNav(l.id)}
              className="text-[14px] font-semibold tracking-widest uppercase text-black hover:text-accent transition-colors no-tap"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="mount-down" style={{ transitionDelay: '500ms' }}>
        <HamburgerBtn onClick={onOpenMenu} />
      </div>
    </nav>
  );
};

const Stat = ({ value, label, index }) => (
  <div className="text-right mount-up" style={{ transitionDelay: `${index * 120}ms` }}>
    <div className="stat-num tnum flex items-baseline justify-end">
      <span className="text-accent" style={{ fontSize: '0.5em', lineHeight: 1, marginRight: '0.05em' }}>+</span>
      <span className="text-black">{value}</span>
    </div>
    <div
      className="mt-1 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-tight"
      style={{ whiteSpace: 'pre-line' }}
    >
      {label}
    </div>
  </div>
);

const MobileMenu = ({ open, onClose, onNav }) => {
  if (!open) return null;
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
  return (
    <div className="fixed inset-0 z-50 bg-white cd-fade-in" style={{ animationDuration: '.3s' }}>
      <div className="flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
        <Logo />
        <CloseBtn onClick={onClose} />
      </div>

      <ul className="flex flex-col gap-8 mt-16 px-5 sm:px-8 md:px-12">
        {NAV_LINKS.map((l, i) => (
          <li key={l.id} style={{ animation: `cd-fade-up .5s cubic-bezier(.22,1,.36,1) ${i * 60}ms both` }}>
            <button
              onClick={() => { onClose(); setTimeout(() => onNav(l.id), 80); }}
              className="text-3xl font-semibold tracking-widest uppercase text-black hover:text-accent transition-colors no-tap"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-auto absolute bottom-8 left-5 right-5 sm:left-8 sm:right-8 md:left-12 md:right-12 flex items-end justify-between gap-4">
        <div className="text-[10px] font-semibold tracking-widest uppercase text-black/60">
          hello@thecosmicdev.studio
        </div>
        <button
          onClick={() => { onClose(); setTimeout(() => onNav('contact'), 80); }}
          className="inline-flex items-center gap-2 text-xl font-semibold tracking-wider uppercase text-accent no-tap"
        >
          Work With Us <ArrowUpRight size={22} />
        </button>
      </div>
    </div>
  );
};

const Hero = ({ onNav }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
    // Flip mount class on the next frame so transitions fire from the pre-mount snapshot.
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setMounted(true));
      Hero._raf2 = raf2;
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (Hero._raf2) cancelAnimationFrame(Hero._raf2);
    };
  }, []);

  return (
    <section id="top" className={`relative min-h-screen flex flex-col overflow-hidden hero-fallback text-black ${mounted ? 'mounted' : 'pre-mount'}`}>
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay loop muted playsInline preload="auto"
        poster=""
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
          type="video/mp4"
        />
      </video>
      {/* Soft top→bottom legibility wash */}
      <div className="absolute inset-0 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,.35) 35%, rgba(255,255,255,.55) 100%)' }} />

      {/* Content stack */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Nav onOpenMenu={() => setMenuOpen(true)} onNav={onNav} />

        {/* Stats row */}
        <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
          <div className="flex flex-row items-end gap-5 sm:gap-8 md:gap-10">
            {HERO_STATS.map((s, i) => (
              <Stat key={s.label} value={s.value} label={s.label} index={i + 2} />
            ))}
          </div>
        </div>

        {/* Bottom block */}
        <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
          {/* Row A — tagline + CTA */}
          <div className="flex flex-row items-center justify-between gap-4">
            <p
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black mount-up"
              style={{ transitionDelay: '600ms', maxWidth: 'min(160px, 38vw)' }}
            >
              Shaping bold<br />visions into power<br />for your tribe
            </p>
            <button
              onClick={() => onNav('contact')}
              className="inline-flex items-center gap-2 text-base sm:text-xl md:text-2xl font-semibold tracking-wider uppercase text-accent whitespace-nowrap mount-up no-tap"
              style={{ transitionDelay: '720ms' }}
            >
              Work With Us <ArrowUpRight className="sm:hidden" size={18} />
              <ArrowUpRight className="hidden sm:inline" size={22} />
            </button>
          </div>

          {/* Row B — description + main heading */}
          <div className="flex flex-row items-end justify-between gap-3 sm:gap-4">
            <p
              className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0 text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-left md:text-right mount-up"
              style={{ transitionDelay: '840ms' }}
            >
              Creative studios building web apps,<br className="hidden sm:inline" /> projects &amp; software solutions for ambitious teams.
            </p>

            <h1 className="flex-1 text-right mount-clip">
              {['Fearless', 'Vision', 'Delivered'].map((w, i) => (
                <span key={w} className="block overflow-hidden">
                  <span
                    className="hero-word text-black"
                    style={{ transitionDelay: `${400 + i * 140}ms` }}
                  >
                    {w}
                  </span>
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNav={onNav} />
    </section>
  );
};

Object.assign(window, { Hero, NAV_LINKS });
