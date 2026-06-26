"use client";

import React, { useState, useEffect } from 'react';

const features = [
  {
    id: 'discovery',
    tag: '01',
    title: 'Discovery',
    desc: 'Identify workflow bottlenecks and hidden data silos instantly. Our deep-scanning neural models map your entire operation in minutes, not months.',
    icon: '/cog-8-tooth.svg',
    stat: { value: '3 min', label: 'Avg scan time' },
  },
  {
    id: 'analysis',
    tag: '02',
    title: 'Analysis',
    desc: 'Transform unstructured noise into structured, actionable telemetry. Real-time LLM inference turns raw logs into strategic decisions.',
    icon: '/cube-16-solid.svg',
    stat: { value: '99%', label: 'Signal accuracy' },
  },
  {
    id: 'training',
    tag: '03',
    title: 'Training',
    desc: 'Train dedicated agents securely on your proprietary data. Your IP stays inside your VPC — zero exposure to public model endpoints, ever.',
    icon: '/chart-pie.svg',
    stat: { value: '0 leaks', label: 'Data exposure' },
  },
  {
    id: 'deploy',
    tag: '04',
    title: 'Deploy',
    desc: 'Push autonomous agents to production with one-click orchestration, built-in guardrails, automatic rollback, and real-time monitoring.',
    icon: '/arrow-path.svg',
    stat: { value: '< 60s', label: 'Deploy time' },
  },
];

export default function BentoAccordion() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="features"
      className="w-full py-32 relative z-10 noise-overlay"
      style={{ background: 'linear-gradient(180deg, #0f1e24 0%, #172B36 50%, #0f1e24 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-pill mb-5 inline-flex">
              <span className="ticker-dot" />
              How It Works
            </span>
            <h2 className="text-4xl md:text-6xl font-sans font-black text-arctic leading-[1.05] mt-4">
              Engineered for{' '}
              <span className="text-gradient-gold glow-forsythia">Autonomy</span>
            </h2>
          </div>
          <p className="text-mystic/55 font-sans text-base max-w-sm md:text-right leading-relaxed">
            Four precision stages — from discovery to deployment — closing the loop between your data and intelligent action.
          </p>
        </div>

        {/* ── Bento / Accordion ── */}
        <div className={`${isMobile ? 'flex flex-col gap-3' : 'grid grid-cols-3 gap-5 auto-rows-[270px]'}`}>
          {features.map((f, idx) => {
            const isActive = activeIdx === idx;
            const spanClass = !isMobile ? (idx === 0 || idx === 3 ? 'col-span-2' : 'col-span-1') : '';

            return (
              <div
                key={f.id}
                onMouseEnter={() => !isMobile && setActiveIdx(idx)}
                onClick={() => isMobile && setActiveIdx(isActive ? -1 : idx)}
                className={`
                  relative overflow-hidden cursor-pointer rounded-3xl border
                  transition-all duration-500 ease-out
                  ${spanClass}
                  ${isActive
                    ? 'border-forsythia/35 shadow-[0_0_70px_rgba(255,200,1,0.16),0_0_140px_rgba(255,200,1,0.07),inset_0_0_50px_rgba(255,200,1,0.04)]'
                    : 'border-white/6 hover:border-white/12'}
                `}
                style={{
                  background: isActive
                    ? 'rgba(255,255,255,0.065)'
                    : 'rgba(255,255,255,0.022)',
                  backdropFilter: 'blur(24px)',
                }}
              >
                {/* Active pulsing corner glow */}
                {isActive && (
                  <>
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-forsythia/12 blur-[100px] pointer-events-none transition-all duration-700" />
                    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-forsythia/8 blur-[60px] pointer-events-none" />
                  </>
                )}

                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: '80px 80px',
                  }}
                />

                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  {/* Top row */}
                  <div>
                    {/* Tag + icon row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`font-mono text-xs font-bold tracking-[0.3em] transition-colors duration-300
                                        ${isActive ? 'text-forsythia' : 'text-white/20'}`}>
                        {f.tag}
                      </span>
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300
                                       ${isActive ? 'bg-forsythia/15 border-forsythia/40 scale-110' : 'bg-white/4 border-white/8'}`}>
                        <img
                          src={f.icon}
                          alt={f.title}
                          className={`w-6 h-6 transition-all duration-300
                                      ${isActive ? 'invert sepia saturate-[10] hue-rotate-[-20deg] brightness-110' : 'invert opacity-45'}`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl lg:text-3xl font-black font-mono uppercase transition-all duration-300 leading-none
                                    ${isActive ? 'text-forsythia glow-forsythia' : 'text-arctic/80'}`}>
                      {f.title}
                    </h3>
                  </div>

                  {/* Description — always on desktop, accordion on mobile */}
                  <div className={`${isMobile ? 'accordion-content' : 'mt-4'} ${isMobile && isActive ? 'open' : ''}`}>
                    <p className={`font-sans text-base leading-relaxed transition-colors duration-300
                                   ${isActive ? 'text-mystic/80' : 'text-mystic/40'}`}>
                      {f.desc}
                    </p>

                    {/* Mini stat */}
                    {!isMobile && (
                      <div className={`mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300
                                       ${isActive ? 'border-forsythia/30 bg-forsythia/8' : 'border-white/6 bg-white/3'}`}>
                        <span className={`font-mono font-bold text-sm transition-colors duration-300
                                          ${isActive ? 'text-forsythia' : 'text-white/30'}`}>
                          {f.stat.value}
                        </span>
                        <span className={`font-mono uppercase text-[10px] tracking-wider transition-colors duration-300
                                          ${isActive ? 'text-mystic/60' : 'text-white/20'}`}>
                          {f.stat.label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom active bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-saffron via-forsythia to-saffron
                                 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            );
          })}
        </div>

        {/* ── Step nav ── */}
        {!isMobile && (
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            {features.map((f, idx) => (
              <React.Fragment key={f.id}>
                <button
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono uppercase text-xs tracking-wider border transition-all duration-300
                               ${activeIdx === idx
                      ? 'bg-forsythia/12 border-forsythia/45 text-forsythia shadow-[0_0_12px_rgba(255,200,1,0.15)]'
                      : 'bg-white/3 border-white/8 text-mystic/40 hover:text-mystic/70 hover:border-white/18'}`}
                >
                  <span className="text-forsythia/50">{f.tag}</span>
                  {f.title}
                </button>
                {idx < features.length - 1 && (
                  <img src="/chevron-right.svg" className="w-3.5 h-3.5 invert opacity-15" alt="" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
