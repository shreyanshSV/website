/* App — composes all sections + sticky mini-nav after scroll */

const ScrollProgress = () => {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
      <div className="h-full bg-accent transition-[width] duration-100" style={{ width: `${w}%` }} />
    </div>
  );
};

const StickyMiniNav = ({ onNav }) => {
  const y = useScrollY();
  const visible = y > 720;
  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: `translate(-50%, ${visible ? '0' : '-12px'})`,
      }}
    >
      <div className="flex items-center gap-1 bg-white border-2 border-black rounded-full px-2 py-2 shadow-[4px_4px_0_0_#000]">
        <button onClick={() => scrollToId('top')} className="rounded-full grid place-items-center mx-1" style={{ width: 24, height: 24, border: '2px solid #5E0ED7' }} aria-label="Home">
          <span className="block rounded-full" style={{ width: 8, height: 8, background: '#5E0ED7' }} />
        </button>
        {NAV_LINKS.map(l => (
          <button
            key={l.id}
            onClick={() => onNav(l.id)}
            className="hidden sm:inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors no-tap"
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={() => onNav('contact')}
          className="text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-accent text-white hover:bg-black transition-colors no-tap"
        >
          Contact ↗
        </button>
      </div>
    </div>
  );
};

const CursorBlob = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };
    const onOver = (e) => {
      const t = e.target;
      const interactive = t.closest('a, button, [data-cursor="grow"]');
      el.style.width = interactive ? '44px' : '18px';
      el.style.height = interactive ? '44px' : '18px';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);
  return <div ref={ref} className="cursor-blob hidden md:block" />;
};

const App = () => {
  const onNav = (id) => scrollToId(id);
  return (
    <>
      <ScrollProgress />
      <CursorBlob />
      <StickyMiniNav onNav={onNav} />
      <Hero onNav={onNav} />
      <Story />
      <Expertise />
      <Studios />
      <Feedback />
      <Contact />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
