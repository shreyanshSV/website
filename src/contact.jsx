/* Contact — Work With Us form (multi-step feel, single screen) + Footer */

const SERVICES = ['Web App', 'Project', 'Software Solution', 'Not Sure Yet'];
const BUDGETS  = ['< $10k', '$10–25k', '$25–75k', '$75k+'];

const Field = ({ id, label, ...props }) => (
  <label htmlFor={id} className="block">
    <span className="block text-[10px] font-semibold tracking-widest uppercase text-black/55 mb-2">{label}</span>
    <input id={id} className="field" {...props} />
  </label>
);

const Chip = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-[11px] sm:text-xs font-semibold tracking-widest uppercase px-4 py-2.5 rounded-full border-2 transition-all no-tap ${
      active ? 'bg-accent text-white border-accent' : 'bg-transparent text-black border-black/25 hover:border-black'
    }`}
  >
    {children}
  </button>
);

const Contact = () => {
  const [form, setForm] = React.useState({
    name: '', email: '', company: '', service: 'Web App', budget: '$25–75k', message: ''
  });
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); }, 900);
  };

  return (
    <section id="contact" className="relative bg-white border-t-2 border-black">
      <div className="px-5 sm:px-8 md:px-12 pt-14 md:pt-20 pb-6 flex items-end justify-between gap-4 border-b border-black/15">
        <div>
          <span className="tag">05 / Work With Us</span>
          <h2 className="mt-4 text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase leading-[0.95] tracking-tight">
            <ClipReveal text="Tell us what" />
            <span className="block text-accent"><ClipReveal text="you're building." delay={120} /></span>
          </h2>
        </div>
        <span className="hidden md:block text-xs font-semibold tracking-widest uppercase text-black/55 max-w-[260px] text-right">
          We reply within one working day, usually less. No sales calls, just answers.
        </span>
      </div>

      <div className="px-5 sm:px-8 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Form */}
        <form className="md:col-span-7 space-y-8 md:space-y-10" onSubmit={onSubmit}>
          {!sent ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                <Field id="name"    label="Your Name *"     placeholder="Jane Cosmonaut"
                       value={form.name}    onChange={e => set('name', e.target.value)} required />
                <Field id="email"   label="Email *"         placeholder="you@studio.io" type="email"
                       value={form.email}   onChange={e => set('email', e.target.value)} required />
              </div>

              <Field id="company" label="Company / Project" placeholder="Orbit Labs"
                     value={form.company} onChange={e => set('company', e.target.value)} />

              <div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-black/55 mb-3">What do you need?</div>
                <div className="flex flex-wrap gap-2.5">
                  {SERVICES.map(s => (
                    <Chip key={s} active={form.service === s} onClick={() => set('service', s)}>{s}</Chip>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-black/55 mb-3">Budget Range</div>
                <div className="flex flex-wrap gap-2.5">
                  {BUDGETS.map(b => (
                    <Chip key={b} active={form.budget === b} onClick={() => set('budget', b)}>{b}</Chip>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="block text-[10px] font-semibold tracking-widest uppercase text-black/55 mb-2">Tell us the story *</span>
                <textarea
                  rows={3}
                  className="field"
                  placeholder="What are you trying to build? What's the moment that mattered?"
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                  required
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider uppercase text-accent hover:text-black transition-colors no-tap disabled:opacity-60"
              >
                {submitting ? 'Transmitting…' : 'Send Transmission'} <ArrowUpRight size={28} />
              </button>
            </>
          ) : (
            <div className="cd-fade-up" style={{ animationDuration: '.5s' }}>
              <div className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Signal received</div>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold uppercase leading-[0.95] tracking-tight">
                Thanks, {form.name.split(' ')[0] || 'cosmonaut'}.
              </h3>
              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black/75 max-w-xl">
                We've got your brief about <span className="text-accent font-semibold">{form.service.toLowerCase()}</span> work
                at the <span className="text-accent font-semibold">{form.budget}</span> range. Expect a real human reply within one working day —
                with questions, a calendar link, and a rough plan of attack.
              </p>
              <button onClick={() => { setSent(false); setForm({ name:'', email:'', company:'', service:'Web App', budget:'$25–75k', message:'' }); }} className="btn-pill mt-10">
                Send Another <PlusIcon size={14} />
              </button>
            </div>
          )}
        </form>

        {/* Aside */}
        <aside className="md:col-span-5 md:pl-10 md:border-l md:border-black/15 space-y-10">
          <div>
            <div className="text-[10px] font-semibold tracking-widest uppercase text-black/55 mb-3">Direct Lines</div>
            <a href="mailto:hello@thecosmicdev.studio" className="block text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider uppercase text-black hover:text-accent transition-colors">
              hello@thecosmicdev.studio
            </a>
            <a href="tel:+10000000000" className="block mt-2 text-xs font-semibold tracking-widest uppercase text-black/55 hover:text-accent transition-colors">
              +1 (000) 000 0000
            </a>
          </div>

          <div>
            <div className="text-[10px] font-semibold tracking-widest uppercase text-black/55 mb-3">Pod Hours</div>
            <ul className="space-y-2 text-sm font-semibold tracking-widest uppercase">
              <li className="flex justify-between"><span>Mon — Fri</span><span className="text-accent">09:00 — 19:00 IST</span></li>
              <li className="flex justify-between"><span>Sat</span><span className="text-accent">Async only</span></li>
              <li className="flex justify-between text-black/40"><span>Sun</span><span>Off the grid</span></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-semibold tracking-widest uppercase text-black/55 mb-3">Process Snapshot</div>
            <ol className="space-y-3">
              {['Brief & call', 'Scoping doc', 'Kick-off', 'Bi-weekly ship', 'Hand-off'].map((s, i) => (
                <li key={s} className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
                  <span className="text-accent tnum text-xs">{String(i+1).padStart(2,'0')}</span>
                  <span className="flex-1">{s}</span>
                  <span className="flex-[0_0_60px] h-px bg-black/15" />
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      <Footer />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="px-5 sm:px-8 md:px-12 pt-16 md:pt-24 pb-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4">
            <span className="rounded-full grid place-items-center" style={{ width: 44, height: 44, border: '2px solid #5E0ED7' }}>
              <span className="logo-dot block rounded-full" style={{ width: 14, height: 14, background: '#5E0ED7' }} />
            </span>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase">The Cosmic Dev</span>
          </div>

          <h3 className="mt-10 font-semibold uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 9rem)' }}>
            Build something<br />
            <span className="text-accent">cosmic</span> with us.
          </h3>

          <button onClick={() => scrollToId('contact')} className="mt-10 inline-flex items-center gap-3 text-base md:text-lg font-semibold tracking-widest uppercase border-2 border-white rounded-full px-6 py-3 hover:bg-accent hover:border-accent transition-colors no-tap">
            Start a Brief <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-8 md:pt-6">
          <div>
            <div className="text-[10px] font-semibold tracking-widest uppercase text-white/50 mb-4">Studio</div>
            <ul className="space-y-2.5 text-sm font-semibold tracking-widest uppercase">
              {NAV_LINKS.map(l => (
                <li key={l.id}><button onClick={() => scrollToId(l.id)} className="hover:text-accent transition-colors no-tap">{l.label}</button></li>
              ))}
              <li><button onClick={() => scrollToId('contact')} className="hover:text-accent transition-colors no-tap">Contact</button></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-widest uppercase text-white/50 mb-4">Channels</div>
            <ul className="space-y-2.5 text-sm font-semibold tracking-widest uppercase">
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn ↗</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">GitHub ↗</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Dribbble ↗</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Read.cv ↗</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 sm:px-8 md:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-semibold tracking-widest uppercase text-white/55">
        <span>© 2026 The Cosmic Dev · A remote-first studio</span>
        <span className="flex items-center gap-4">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent logo-dot" /> Currently taking briefs for Q3</span>
        </span>
      </div>
    </footer>
  );
};

Object.assign(window, { Contact, Footer });
