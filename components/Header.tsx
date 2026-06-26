"use client";

import React, { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { label: 'Platform', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll tracking ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Find which section is in view
      const sections = NAV_LINKS.map(l => ({
        id: l.href.replace('#', ''),
        href: l.href,
      }));

      let current = '';
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = s.href;
        }
      }
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Smooth scroll handler ── */
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // account for fixed header height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 pointer-events-none">
      <header
        className={`
          flex items-center justify-between w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl pointer-events-auto
          px-4 md:px-6 py-3.5 rounded-2xl
          transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-oceanic/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
            : 'bg-white/[0.02] backdrop-blur-md border border-white/5'}
        `}
      >
        {/* ── Logo ── */}
        <a
          href="#hero"
          onClick={e => handleNavClick(e, '#hero')}
          className="flex-shrink-0 group"
          aria-label="Armory home"
        >
          <span className="font-mono text-2xl font-black tracking-tighter text-arctic uppercase
                           group-hover:text-gradient-gold transition-all duration-300
                           drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
            armory
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className={`nav-link px-4 ${activeLink === link.href ? 'active text-forsythia' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right Actions ── */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden p-2 text-mystic hover:text-forsythia focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <img src="/x-mark.svg" className="w-5 h-5 invert" alt="Close" />
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* CTA button */}
          <button className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-mono uppercase font-bold
                              text-oceanic bg-gradient-to-r from-saffron to-forsythia rounded-full
                              shadow-[0_0_20px_rgba(255,200,1,0.35)] hover:shadow-[0_0_35px_rgba(255,200,1,0.65)]
                              hover:-translate-y-0.5 transition-all duration-300 ease-out
                              animate-pulse-ring">
            Get Early Access
          </button>
        </div>
      </header>

      {/* ── Mobile Dropdown ── */}
      {mobileOpen && (
        <div className="absolute top-[76px] left-4 right-4 bg-[#172B36] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-2xl py-4 px-2 pointer-events-auto z-[60]">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className={`block w-full px-5 py-3 font-mono uppercase text-sm tracking-wider rounded-xl
                          transition-all duration-200
                          ${activeLink === link.href
                  ? 'text-forsythia bg-forsythia/10'
                  : 'text-mystic hover:text-arctic hover:bg-white/5'}`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 px-3">
            <button className="w-full py-3 font-mono uppercase font-bold text-sm text-oceanic
                                bg-gradient-to-r from-saffron to-forsythia rounded-full
                                shadow-[0_0_20px_rgba(255,200,1,0.4)] transition-all duration-300">
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
