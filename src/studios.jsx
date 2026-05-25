/* Studios — project showcase grid with hover reveal */

const PROJECTS = [
  {
    id: 'orbit',
    title: 'Orbit OS',
    kind: 'SaaS Platform',
    year: '2026',
    tag: 'Web App',
    color: '#5E0ED7',
    bg: '#0a0014',
    grid: 'md:col-span-7 md:row-span-2',
    blurb: 'A multi-tenant ops cockpit for a Series-B logistics startup. Replaced 5 internal tools.',
  },
  {
    id: 'helio',
    title: 'Helio Pay',
    kind: 'Fintech',
    year: '2025',
    tag: 'Software',
    color: '#FF6B35',
    bg: '#1a0a05',
    grid: 'md:col-span-5',
    blurb: 'B2B payments rails — KYC, ledger, reconciliation. SOC 2 from day zero.',
  },
  {
    id: 'nebula',
    title: 'Nebula Health',
    kind: 'Telemedicine',
    year: '2025',
    tag: 'Project',
    color: '#1ED760',
    bg: '#02140a',
    grid: 'md:col-span-5',
    blurb: 'HIPAA-grade patient portal + clinician scheduling. Launched in 9 weeks.',
  },
  {
    id: 'qubit',
    title: 'Qubit Studio',
    kind: 'Creative tools',
    year: '2024',
    tag: 'Web App',
    color: '#FFD23F',
    bg: '#0e0a00',
    grid: 'md:col-span-7',
    blurb: 'Realtime collaborative canvas for motion designers. WebRTC + WebGL.',
  },
  {
    id: 'pulse',
    title: 'Pulse Logistics',
    kind: 'Enterprise',
    year: '2024',
    tag: 'Software',
    color: '#06B6D4',
    bg: '#001216',
    grid: 'md:col-span-6',
    blurb: 'AI-driven dispatch + route optimization across 1,200 vehicles.',
  },
  {
    id: 'lumen',
    title: 'Lumen Bookings',
    kind: 'Hospitality',
    year: '2023',
    tag: 'Project',
    color: '#EC4899',
    bg: '#1a0011',
    grid: 'md:col-span-6',
    blurb: 'White-label booking engine for a boutique hotel group. 14 properties live.',
  },
];

/* Procedural cover — gradient + grid + glyph (no external imagery) */
const ProjectCover = ({ project }) => {
  const { color, bg, title, kind } = project;
  return (
    <div className="absolute inset-0" style={{ background: bg }}>
      {/* Radial accent */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(120% 80% at 80% 20%, ${color}55 0%, transparent 60%), radial-gradient(80% 60% at 10% 90%, ${color}33 0%, transparent 55%)`
      }} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage:
          `linear-gradient(${color}66 1px, transparent 1px), linear-gradient(90deg, ${color}66 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />
      {/* Centered monogram */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div
            className="font-semibold uppercase tracking-tight"
            style={{ color, fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 0.85, textShadow: `0 0 80px ${color}80` }}
          >
            {title.split(' ').map((w, i) => (
              <div key={i}>{w}</div>
            ))}
          </div>
          <div className="mt-4 text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: `${color}cc` }}>
            ✦ {kind} ✦
          </div>
        </div>
      </div>
      {/* Corner tag */}
      <div className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase" style={{ color }}>
        {project.tag}
      </div>
      <div className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase" style={{ color: `${color}aa` }}>
        {project.year}
      </div>
    </div>
  );
};

const StudioCard = ({ project, index }) => {
  return (
    <Reveal
      delay={index * 80}
      className={`studio-card group relative ${project.grid} aspect-[4/3] md:aspect-auto md:min-h-[260px] cursor-pointer overflow-hidden`}
      style={{ minHeight: 260 }}
    >
      <ProjectCover project={project} />

      {/* Reveal panel */}
      <div className="reveal p-6 md:p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-semibold tracking-widest uppercase text-white/60">{project.tag} · {project.year}</div>
            <h3 className="mt-3 text-3xl md:text-5xl font-semibold uppercase leading-[0.95] tracking-tight">{project.title}</h3>
            <div className="mt-2 text-xs font-semibold tracking-widest uppercase text-white/60">{project.kind}</div>
          </div>
          <span className="w-10 h-10 rounded-full grid place-items-center border-2 border-white/70 text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="text-sm md:text-base font-medium tracking-wide leading-relaxed text-white/85">
          {project.blurb}
        </p>
      </div>
    </Reveal>
  );
};

const Studios = () => {
  return (
    <section id="studios" className="relative bg-black text-white border-t-2 border-black">
      <div className="px-5 sm:px-8 md:px-12 pt-14 md:pt-20 pb-8 md:pb-12 flex items-end justify-between gap-4">
        <div>
          <span className="tag text-white before:bg-accent" style={{}}>
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle" />
            03 / Studios
          </span>
          <h2 className="mt-4 text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase leading-[0.95] tracking-tight text-white">
            <ClipReveal text="Selected work" />
          </h2>
        </div>
        <span className="hidden md:block text-xs font-semibold tracking-widest uppercase text-white/55 max-w-[260px] text-right">
          A slice of recent engagements across SaaS, fintech, health and creative tooling.
        </span>
      </div>

      <div className="px-5 sm:px-8 md:px-12 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {PROJECTS.map((p, i) => <StudioCard key={p.id} project={p} index={i} />)}
      </div>

      <div className="px-5 sm:px-8 md:px-12 pb-14 md:pb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border-t border-white/15 pt-8">
        <p className="text-sm md:text-base font-semibold tracking-widest uppercase max-w-md">
          Trusted by founders in <span className="text-accent">SF</span>, <span className="text-accent">Berlin</span>, <span className="text-accent">Bangalore</span> &amp; <span className="text-accent">São Paulo</span>.
        </p>
        <button onClick={() => scrollToId('contact')} className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold tracking-wider uppercase text-white hover:text-accent transition-colors no-tap">
          Start Your Brief <ArrowUpRight size={26} />
        </button>
      </div>
    </section>
  );
};

Object.assign(window, { Studios });
