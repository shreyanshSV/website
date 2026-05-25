/* Icons (inline SVG, lucide-style) + shared primitives */

const ArrowUpRight = ({ size = 22, className = "", strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const XIcon = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" /><path d="M6 6l12 12" />
  </svg>
);

const PlusIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const MinusIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
  </svg>
);

const ChevronDown = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/* Cosmic Dev logo (circle w/ accent ring + inner dot) */
const Logo = ({ size = 32, dark = false }) => (
  <a href="#top" className="flex items-center gap-3 no-tap" aria-label="The Cosmic Dev home">
    <span
      className="rounded-full grid place-items-center"
      style={{ width: size, height: size, border: `2px solid #5E0ED7` }}
    >
      <span className="logo-dot block rounded-full" style={{ width: 10, height: 10, background: '#5E0ED7' }} />
    </span>
    <span
      className={`hidden sm:inline text-[11px] font-semibold tracking-[0.22em] uppercase ${dark ? 'text-white' : 'text-black'}`}
    >
      The Cosmic Dev
    </span>
  </a>
);

/* useInView — toggles a class when element scrolls into view */
function useInView(opts = { threshold: 0.18, once: true }) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (opts.once) io.unobserve(e.target);
          } else if (!opts.once) {
            setInView(false);
          }
        }
      },
      { threshold: opts.threshold ?? 0.18, rootMargin: opts.rootMargin || '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

/* Reveal: fade + slide up when in view */
const Reveal = ({ as: As = 'div', delay = 0, className = '', children, ...rest }) => {
  const [ref, inView] = useInView();
  const style = { ...(rest.style || {}), transitionDelay: `${delay}ms` };
  return (
    <As ref={ref} className={`in-view-init ${inView ? 'in-view-on' : ''} ${className}`} style={style} {...rest}>
      {children}
    </As>
  );
};

/* ClipReveal: words slide up from below an overflow-hidden mask */
const ClipReveal = ({ text, className = '', wordClass = '', delay = 0, gap = 140 }) => {
  const words = text.split(' ');
  const [ref, inView] = useInView();
  return (
    <span ref={ref} className={`in-view-clip ${inView ? 'in-view-on' : ''} ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="overflow-hidden align-bottom inline-block" style={{ marginRight: '0.25em' }}>
          <span
            className={`inline-block ${wordClass}`}
            style={{ transitionDelay: `${delay + i * gap}ms` }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
};

/* useScrollY */
function useScrollY() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const on = () => setY(window.scrollY);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return y;
}

/* smooth scroll to id */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* Animated counter from 0 to value when in view */
function useCountUp(value, { duration = 1400 } = {}) {
  const [ref, inView] = useInView({ threshold: 0.4, once: true });
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return [ref, n];
}

Object.assign(window, {
  ArrowUpRight, XIcon, PlusIcon, MinusIcon, ChevronDown,
  Logo, useInView, Reveal, ClipReveal, useScrollY, scrollToId, useCountUp,
});
