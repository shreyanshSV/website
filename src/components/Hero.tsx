import type { CSSProperties } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRightCircle, Rocket, Code2, Sparkles } from 'lucide-react';
import Navbar from './Navbar';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const iconStyle: CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
  position: 'relative',
  top: '-2px',
  color: '#F2F2EE',
};

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ fontFamily: 'var(--font-body)', color: '#F2F2EE' }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,14,39,0.55) 0%, rgba(10,14,39,0.35) 40%, rgba(10,14,39,0.65) 100%)',
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <div
          className="mx-auto px-5 sm:px-8"
          style={{
            maxWidth: '1280px',
            paddingTop: 'clamp(40px, 8vw, 72px)',
            paddingBottom: 'clamp(40px, 8vw, 96px)',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6"
              style={{
                background: 'rgba(242,242,238,0.10)',
                border: '1px solid rgba(242,242,238,0.18)',
                backdropFilter: 'blur(8px)',
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Sparkles size={14} style={{ color: '#7342E2' }} />
              <span className="text-xs font-medium tracking-wide" style={{ opacity: 0.85 }}>
                Web apps · Software · Product design
              </span>
            </motion.div>

            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.85rem, 5.5vw, 3.4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                color: '#F2F2EE',
                marginBottom: '24px',
                maxWidth: '720px',
              }}
            >
              <Rocket size={28} style={iconStyle} /> Building Stellar Web Apps with{' '}
              <Code2 size={28} style={iconStyle} /> Cosmic-Grade Software{' '}
              <Sparkles size={28} style={iconStyle} />
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 2.4vw, 1.15rem)',
                lineHeight: 1.65,
                opacity: 0.85,
                maxWidth: '560px',
                marginBottom: '32px',
                color: '#F2F2EE',
              }}
            >
              From concept to launch, The Cosmic Dev crafts pixel-perfect web applications and
              high-performance software that propel ambitious brands into new galaxies of growth.
            </motion.p>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-between text-white font-semibold"
                style={{
                  background: '#7342E2',
                  borderRadius: '50px',
                  padding: '17px 24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  boxShadow: '0 4px 24px rgba(115,66,226,0.45)',
                  minWidth: '230px',
                  gap: '32px',
                }}
              >
                <span>Launch Your Project</span>
                <ArrowRightCircle size={20} />
              </motion.button>

              <motion.a
                href="#work"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: '#F2F2EE', opacity: 0.9 }}
              >
                See our work
                <ArrowRightCircle size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{ color: '#F2F2EE', opacity: 0.75 }}
            >
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    lineHeight: 1,
                  }}
                >
                  120+
                </span>
                <span className="text-xs mt-1 tracking-wide">Projects shipped</span>
              </div>
              <div style={{ width: '1px', height: '32px', background: 'rgba(242,242,238,0.25)' }} />
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    lineHeight: 1,
                  }}
                >
                  40+
                </span>
                <span className="text-xs mt-1 tracking-wide">Happy clients</span>
              </div>
              <div style={{ width: '1px', height: '32px', background: 'rgba(242,242,238,0.25)' }} />
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    lineHeight: 1,
                  }}
                >
                  4.9★
                </span>
                <span className="text-xs mt-1 tracking-wide">Average rating</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
