/* Feedback — testimonials carousel with manual controls + auto-advance */

const TESTIMONIALS = [
  {
    quote: "The Cosmic Dev rebuilt our dashboard in six weeks. It is faster than what 9 engineers shipped in a year — and our activation jumped 38%.",
    name: 'Ananya Krishnan',
    role: 'CPO, Helio Pay',
    rating: 5,
  },
  {
    quote: "They behave like operators, not vendors. Every check-in moves a metric. I'd hire them again before any agency on the planet.",
    name: 'Marco Lévêque',
    role: 'Founder, Orbit OS',
    rating: 5,
  },
  {
    quote: "We had a wireframe and a deadline. They came back two days later with an interactive prototype. Shipping a v1 felt inevitable from that point.",
    name: 'Priya Shah',
    role: 'Head of Product, Nebula Health',
    rating: 5,
  },
  {
    quote: "Best engineering pod I've worked with in 12 years. Tight, opinionated, and surprisingly kind. Our codebase has never been healthier.",
    name: 'Daniel Okafor',
    role: 'CTO, Pulse Logistics',
    rating: 5,
  },
];

const Star = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#5E0ED7' : 'none'} stroke="#5E0ED7" strokeWidth="2" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Feedback = () => {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = TESTIMONIALS.length;

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(id);
  }, [paused, n]);

  const t = TESTIMONIALS[i];

  return (
    <section
      id="feedback"
      className="relative bg-white border-t-2 border-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="px-5 sm:px-8 md:px-12 pt-14 md:pt-20 pb-6 flex items-end justify-between gap-4 border-b border-black/15">
        <div>
          <span className="tag">04 / Feedback</span>
          <h2 className="mt-4 text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase leading-[0.95] tracking-tight">
            <ClipReveal text="What partners say" />
          </h2>
        </div>
        <span className="hidden md:block text-xs font-semibold tracking-widest uppercase text-black/55 max-w-[260px] text-right">
          {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
        </span>
      </div>

      <div className="px-5 sm:px-8 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="md:col-span-2 flex md:flex-col gap-1.5 md:gap-2">
          {[...Array(t.rating)].map((_, k) => <Star key={k} filled />)}
        </div>

        <div className="md:col-span-8">
          {/* Quote with key-driven remount for fade */}
          <blockquote key={i} className="cd-fade-up" style={{ animationDuration: '.6s' }}>
            <p className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight leading-[1.08]">
              <span className="text-accent">&ldquo;</span>{t.quote}<span className="text-accent">&rdquo;</span>
            </p>
            <footer className="mt-8 md:mt-12 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-black text-white grid place-items-center text-sm font-semibold tracking-widest">
                {t.name.split(' ').map(w => w[0]).join('').slice(0,2)}
              </span>
              <div>
                <div className="text-sm font-semibold tracking-widest uppercase">{t.name}</div>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-black/55 mt-0.5">{t.role}</div>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="md:col-span-2 flex md:flex-col items-end md:items-start gap-3 md:gap-4">
          <button
            onClick={() => setI((v) => (v - 1 + n) % n)}
            className="w-12 h-12 rounded-full border-2 border-black grid place-items-center hover:bg-black hover:text-white transition-colors no-tap"
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => setI((v) => (v + 1) % n)}
            className="w-12 h-12 rounded-full bg-accent text-white grid place-items-center hover:bg-black transition-colors no-tap"
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Progress dots */}
      <div className="px-5 sm:px-8 md:px-12 pb-12 md:pb-16 flex items-center gap-3">
        {TESTIMONIALS.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Go to testimonial ${k+1}`}
            className="h-1 transition-all no-tap"
            style={{
              width: i === k ? 64 : 24,
              background: i === k ? '#5E0ED7' : 'rgba(0,0,0,0.2)',
            }}
          />
        ))}
        <span className="ml-auto text-[10px] font-semibold tracking-widest uppercase text-black/55">
          {paused ? 'Paused' : 'Auto-cycling'}
        </span>
      </div>
    </section>
  );
};

Object.assign(window, { Feedback });
