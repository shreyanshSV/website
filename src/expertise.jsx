/* Expertise — three big rows, accordion-on-click. Web Apps / Projects / Software Solutions */

const EXPERTISE = [
  {
    n: '01',
    title: 'Web Apps',
    blurb: 'Dashboards, SaaS, internal tools.',
    deliverables: ['Discovery sprint', 'Design system', 'Auth + payments', 'Multi-tenant data', 'Realtime + analytics', 'Launch & on-call'],
    stack: ['React', 'Next.js', 'TypeScript', 'Postgres', 'tRPC', 'Tailwind'],
    timeline: '4–12 weeks',
  },
  {
    n: '02',
    title: 'Projects',
    blurb: 'Bespoke builds, micro-sites, launches.',
    deliverables: ['Concept + art direction', 'Motion + interaction', 'Headless CMS', 'A11y + perf budget', 'CDN + analytics', 'Hand-off + docs'],
    stack: ['Astro', 'React', 'Three.js', 'GSAP', 'Sanity', 'Vercel'],
    timeline: '2–6 weeks',
  },
  {
    n: '03',
    title: 'Software Solutions',
    blurb: 'Backends, integrations, automations.',
    deliverables: ['Architecture review', 'API design', 'ETL + pipelines', 'AI features', 'CI/CD + IaC', 'Observability'],
    stack: ['Node', 'Python', 'Postgres', 'Redis', 'Docker', 'AWS / GCP'],
    timeline: '6–16 weeks',
  },
];

const ExpRow = ({ item, open, onToggle, last }) => {
  return (
    <div className={`exp-row ${open ? 'open' : ''} ${last ? '' : 'border-b'} border-black`}>
      <button
        onClick={onToggle}
        className="w-full text-left py-7 md:py-10 px-5 sm:px-8 md:px-12 flex items-center gap-5 md:gap-10 no-tap group"
        aria-expanded={open}
      >
        <span className="text-accent text-xs sm:text-sm font-semibold tracking-widest tnum w-10">{item.n}</span>

        <div className="flex-1 flex items-end justify-between gap-4">
          <h3 className="font-semibold uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 7.5vw, 6.5rem)' }}>
            {item.title}
          </h3>
          <span className="hidden sm:inline-block text-[10px] md:text-xs font-semibold tracking-widest uppercase text-black/55 pb-3 md:pb-4 max-w-[180px] md:max-w-[260px] text-right">
            {item.blurb}
          </span>
        </div>

        <span className="exp-arrow w-10 h-10 md:w-12 md:h-12 rounded-full grid place-items-center border-2 border-black group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-colors">
          {open ? <MinusIcon size={18} /> : <PlusIcon size={18} />}
        </span>
      </button>

      <div className="exp-extra px-5 sm:px-8 md:px-12">
        <div className="pb-10 md:pb-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-5 md:col-start-3">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-black/50 mb-3">Deliverables</div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {item.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-black/50 mb-3">Stack</div>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((s) => (
                <span key={s} className="text-[11px] font-semibold tracking-widest uppercase border border-black/30 rounded-full px-3 py-1.5">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-black/50 mb-3">Timeline</div>
            <div className="text-2xl font-semibold tracking-wide">{item.timeline}</div>
            <button onClick={() => scrollToId('contact')} className="btn-pill accent mt-5">
              Start Brief <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  const [open, setOpen] = React.useState(0); // first row open by default

  return (
    <section id="expertise" className="relative bg-white border-t-2 border-black">
      <div className="px-5 sm:px-8 md:px-12 pt-14 md:pt-20 pb-6 md:pb-10 flex items-end justify-between gap-4 border-b border-black/15">
        <div>
          <span className="tag">02 / Expertise</span>
          <h2 className="mt-4 text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase leading-[0.95] tracking-tight">
            <ClipReveal text="What we make" />
          </h2>
        </div>
        <span className="hidden md:block text-xs font-semibold tracking-widest uppercase text-black/55 max-w-[220px] text-right">
          Three pods. One playbook. Every engagement runs the same loop — discover, design, build, ship, measure.
        </span>
      </div>

      <div>
        {EXPERTISE.map((it, i) => (
          <ExpRow
            key={it.n}
            item={it}
            open={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)}
            last={i === EXPERTISE.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { Expertise });
