import React from 'react';

/* ── Pure Server Component — zero JS event handlers ────────────────────────
   All hover effects use Tailwind group/peer utilities or CSS custom classes.
   This satisfies Next.js App Router's constraint that Server Components
   cannot receive or attach event handler props.
   ──────────────────────────────────────────────────────────────────────── */

const productLinks = ['Features', 'Pricing', 'Changelog', 'Documentation', 'Status Page'];
const companyLinks = ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'];
const socialLinks  = ['X / Twitter', 'GitHub', 'LinkedIn'];

const TRUST_BADGES = ['SOC2 Type II', 'HIPAA Compliant', '99.99% Uptime', 'Zero Data Leakage'];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden z-10"
      style={{ background: '#050d10' }}
    >
      {/* ── Ambient top glow (CSS only — no JS) ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'rgba(17,76,90,0.22)', filter: 'blur(150px)' }}
      />
      <div
        className="absolute top-20 left-1/4 w-[400px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'rgba(255,200,1,0.032)', filter: 'blur(120px)' }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 pt-24 pb-12">

        {/* ── Pre-footer CTA banner ── */}
        <div
          className="relative rounded-3xl overflow-hidden p-6 md:p-20 mb-24 text-center"
          style={{
            background:    'rgba(255,255,255,0.03)',
            border:        '1px solid rgba(255,255,255,0.08)',
            backdropFilter:'blur(24px)',
            boxShadow:     'inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {/* Glow blob */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] rounded-full pointer-events-none"
            style={{ background: 'rgba(255,200,1,0.07)', filter: 'blur(80px)' }}
          />
          {/* Corner accents (pure CSS, no JS) */}
          <div
            className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(circle at 0 0, #FFC801, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-15"
            style={{ background: 'radial-gradient(circle at 100% 100%, #FF9932, transparent 70%)' }}
          />

          <span className="section-pill mb-7 inline-flex relative z-10">Early Access Open</span>

          <h2 className="text-4xl md:text-7xl font-sans font-black text-arctic mb-5 leading-[1.02] relative z-10">
            Ready to build your
            <br />
            <span className="shimmer-text">first agent?</span>
          </h2>

          <p className="text-mystic/50 font-sans text-base md:text-lg mb-10 relative z-10 max-w-md mx-auto">
            Join 200+ teams automating their most complex workflows. No credit card. Ship in 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="btn-primary text-base">
              Start Building Free
              <img src="/arrow-path.svg" className="w-5 h-5 invert" alt="" />
            </button>
            <button className="btn-secondary text-base">
              Book a Live Demo
              <img src="/chevron-right.svg" className="w-5 h-5 invert opacity-60" alt="" />
            </button>
          </div>

          {/* Trust badges — pure CSS, no handlers */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 relative z-10">
            {TRUST_BADGES.map(b => (
              <div
                key={b}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono uppercase text-[10px] tracking-widest text-mystic/40"
                style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-forsythia/55 flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* ── Link columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div
              className="font-mono text-3xl font-black tracking-tighter uppercase mb-4 text-arctic"
              style={{ textShadow: '0 0 20px rgba(241,246,244,0.2)' }}
            >
              armory
            </div>
            <p className="text-mystic/45 font-sans text-sm leading-relaxed max-w-xs mb-6">
              Enterprise AI automation. Autonomous agents that connect raw data to intelligent action — at infinite scale.
            </p>

            {/* Social chips — CSS-only hover via Tailwind */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(s => (
                <a
                  key={s}
                  href="#"
                  className="
                    px-3.5 py-1.5 font-mono uppercase text-[10px] tracking-wider
                    text-mystic/40 hover:text-forsythia
                    rounded-full transition-colors duration-200
                    border border-white/7 hover:border-forsythia/30
                  "
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-[0.2em] text-[11px] text-arctic/70 mb-5">
              Product
            </h4>
            <ul className="flex flex-col gap-3.5">
              {productLinks.map(l => (
                <li key={l}>
                  {/* 
                    Hover effect: CSS group utility — the gold bar slides in from width-0 to width-3 
                    purely via Tailwind transition classes, zero JS required.
                  */}
                  <a
                    href="#"
                    className="group text-mystic/45 hover:text-arctic font-sans text-sm
                               transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="
                      inline-block h-px bg-forsythia/60
                      w-0 group-hover:w-3
                      transition-all duration-300 ease-out flex-shrink-0
                    " />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-[0.2em] text-[11px] text-arctic/70 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              {companyLinks.map(l => (
                <li key={l}>
                  <a
                    href="#"
                    className="group text-mystic/45 hover:text-arctic font-sans text-sm
                               transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="
                      inline-block h-px bg-forsythia/60
                      w-0 group-hover:w-3
                      transition-all duration-300 ease-out flex-shrink-0
                    " />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-mystic/30 font-sans text-xs">
            © {new Date().getFullYear()} Armory AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a
                key={l}
                href="#"
                className="text-mystic/30 font-mono uppercase text-[10px] tracking-wider
                           hover:text-arctic/60 transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Watermark (pure CSS — no JS) ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none flex justify-center opacity-[0.022] translate-y-[35%]">
        <span className="text-[24vw] font-mono font-black tracking-tighter leading-none select-none text-arctic">
          armory
        </span>
      </div>
    </footer>
  );
}
