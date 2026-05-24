import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = ['Work', 'Services', 'Process', 'Blog', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav
        className="relative z-10 mx-auto flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5"
        style={{ maxWidth: '1280px' }}
      >
        <a href="#" className="flex items-center gap-2" aria-label="The Cosmic Dev">
          <Logo />
          <span
            className="text-base sm:text-lg tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#F2F2EE',
              letterSpacing: '-0.01em',
            }}
          >
            The Cosmic Dev
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8" style={{ color: '#F2F2EE' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ background: '#7342E2' }}
          >
            Start a Project
          </button>
          <button
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
            style={{ background: '#F2F2EE', color: '#192837' }}
          >
            Sign In
          </button>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center rounded-full p-2"
          style={{ background: 'rgba(242,242,238,0.12)', color: '#F2F2EE' }}
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40"
              style={{
                background: 'rgba(10,14,39,0.45)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              key="sheet"
              className="fixed right-0 top-0 z-50 flex flex-col"
              style={{
                width: 'min(88vw, 360px)',
                height: '100dvh',
                background: '#CFC8C5',
                boxShadow: '-12px 0 48px rgba(25,40,55,0.18)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2">
                  <Logo fill="#192837" />
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: '#192837',
                      fontSize: '1rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    The Cosmic Dev
                  </span>
                </div>
                <button
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center rounded-full p-2"
                  style={{ background: 'rgba(25,40,55,0.08)', color: '#192837' }}
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ height: '1px', background: 'rgba(25,40,55,0.12)' }} />

              <nav className="flex flex-col gap-2 px-5 py-6 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium py-2"
                    style={{ color: '#192837', fontFamily: 'var(--font-body)' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.18 + i * 0.07,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 px-5 pb-8">
                <button
                  className="rounded-full px-5 py-3 text-sm font-semibold text-white"
                  style={{ background: '#7342E2' }}
                >
                  Start a Project
                </button>
                <button
                  className="rounded-full px-5 py-3 text-sm font-semibold"
                  style={{ background: '#F2F2EE', color: '#192837' }}
                >
                  Sign In
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
