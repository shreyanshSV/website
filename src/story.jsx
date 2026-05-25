/* Story — Who we are. Marquee + big paragraph + numbered facts */

const StoryMarquee = () => {
  const items = ['The Cosmic Dev', '✦', 'Web Apps', '✦', 'Software Solutions', '✦', 'Projects That Ship', '✦', 'Est. 2019', '✦'];
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden border-y-2 border-black py-5 md:py-7">
      <div className="marquee-track flex whitespace-nowrap" style={{ width: 'max-content' }}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 px-6 text-2xl md:text-4xl font-semibold tracking-widest uppercase">
            {t === '✦' ? <span className="text-accent">✦</span> : t}
          </span>
        ))}
      </div>
    </div>
  );
};

const StoryFact = ({ n, title, copy, delay }) => (
  <Reveal delay={delay} className="border-t border-black/15 pt-5">
    <div className="flex items-baseline gap-4">
      <span className="text-accent text-xs font-semibold tracking-widest tnum">{n}</span>
      <h4 className="text-sm font-semibold tracking-widest uppercase">{title}</h4>
    </div>
    <p className="mt-3 text-[13px] md:text-sm font-medium tracking-wide leading-relaxed text-black/75">
      {copy}
    </p>
  </Reveal>
);

const Story = () => {
  const [yearsRef, years]   = useCountUp(7);
  const [shipRef, ships]    = useCountUp(420);
  const [teamRef, team]     = useCountUp(14);

  return (
    <section id="story" className="relative bg-white text-black">
      <StoryMarquee />

      <div className="px-5 sm:px-8 md:px-12 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="flex items-center justify-between gap-4">
          <span className="tag">01 / Story</span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-black/50">
            Est. 2019 — Remote, everywhere
          </span>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <h2 className="md:col-span-7 text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase leading-[0.95] tracking-tight">
            <ClipReveal text="We are a small studio with one cosmic obsession:" />
            <span className="text-accent"> </span>
            <span className="block mt-2 text-accent">
              <ClipReveal text="shipping software that actually feels alive." delay={120} />
            </span>
          </h2>

          <div className="md:col-span-5 md:pt-3 space-y-6">
            <Reveal>
              <p className="text-[15px] md:text-base font-medium leading-relaxed text-black/80 tracking-wide">
                The Cosmic Dev is a tight-knit collective of engineers, product designers and
                strategists. We partner with founders, operators and product teams to build
                <span className="text-accent font-semibold"> web apps</span>,
                <span className="text-accent font-semibold"> custom projects</span> and
                <span className="text-accent font-semibold"> software solutions </span>
                that move metrics, not vibes.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-[13px] md:text-sm font-semibold tracking-widest uppercase text-black/60 leading-relaxed">
                From ambiguous wireframe to production-grade release,
                we run the loop end-to-end.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <button
                onClick={() => scrollToId('expertise')}
                className="btn-pill mt-2"
              >
                See How We Work <ArrowUpRight size={14} />
              </button>
            </Reveal>
          </div>
        </div>

        {/* Counter row */}
        <div className="mt-16 md:mt-24 grid grid-cols-3 gap-4 md:gap-10 border-t-2 border-black pt-6 md:pt-10">
          <div ref={yearsRef}>
            <div className="text-4xl sm:text-6xl md:text-7xl font-semibold tnum">{years}<span className="text-accent">.</span></div>
            <div className="mt-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-black/60">Years<br />Building</div>
          </div>
          <div ref={shipRef}>
            <div className="text-4xl sm:text-6xl md:text-7xl font-semibold tnum">{ships}<span className="text-accent">+</span></div>
            <div className="mt-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-black/60">Features<br />Shipped</div>
          </div>
          <div ref={teamRef}>
            <div className="text-4xl sm:text-6xl md:text-7xl font-semibold tnum">{team}<span className="text-accent">★</span></div>
            <div className="mt-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-black/60">Builders<br />On Deck</div>
          </div>
        </div>

        {/* Numbered facts */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <StoryFact n="01"
            title="We Build Like Operators"
            copy="Every commit ladders to a metric. We obsess about activation, retention and the boring parts that make products durable."
            delay={0}
          />
          <StoryFact n="02"
            title="Design Is Engineering"
            copy="Interfaces are not paint. Components are typed, tokens are tracked, and the system grows with you — not against you."
            delay={120}
          />
          <StoryFact n="03"
            title="Tiny Pod, Big Surface"
            copy="A senior pod of four runs your account. No middle layer, no junior handoff, no Slack ping going into a void."
            delay={240}
          />
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Story });
