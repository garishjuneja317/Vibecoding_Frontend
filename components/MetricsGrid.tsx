"use client";

import React, { useEffect, useRef } from 'react';

const metrics = [
  {
    value: '11ms',
    label: 'Avg Inference Latency',
    sub: 'Industry avg: 340ms',
    icon: '/search.svg',
    color: 'forsythia',
  },
  {
    value: '9×',
    label: 'Throughput Multiplier',
    sub: 'vs. manual pipelines',
    icon: '/arrow-trending-up.svg',
    color: 'saffron',
  },
  {
    value: '87%',
    label: 'Less Manual Work',
    sub: 'First 30 days',
    icon: '/chart-pie.svg',
    color: 'forsythia',
  },
  {
    value: '99.99%',
    label: 'Uptime SLA',
    sub: 'Zero-downtime deploys',
    icon: '/link-solid.svg',
    color: 'arctic',
  },
];

const glowMap: Record<string, string> = {
  forsythia: 'rgba(255,200,1,0.35)',
  saffron: 'rgba(255,153,50,0.35)',
  arctic: 'rgba(241,246,244,0.25)',
};
const textMap: Record<string, string> = {
  forsythia: '#FFC801',
  saffron: '#FF9932',
  arctic: '#F1F6F4',
};

export default function MetricsGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>('.metric-card').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
              }, i * 120);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 relative z-10"
      style={{ background: 'linear-gradient(180deg, #081014 0%, #0f1e24 100%)' }}
    >
      {/* Section divider label */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-14">
        <div className="flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/8" />
          <span className="section-pill-mystic section-pill">Platform Performance</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/8" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="metric-card group relative overflow-hidden glass-panel glass-panel-hover cursor-default"
              style={{
                opacity: 0,
                transform: 'translateY(32px) scale(0.97)',
                transition: 'opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1)',
                padding: '2rem',
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-0
                            group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
                style={{ background: glowMap[m.color] }}
              />

              {/* Icon pill */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${glowMap[m.color].replace('0.35', '0.1')}`,
                    borderColor: `${glowMap[m.color].replace('0.35', '0.3')}`,
                  }}
                >
                  <img src={m.icon} alt="" className="w-5 h-5 invert opacity-80" />
                </div>
                {/* Right arrow */}
                <img src="/chevron-right.svg" className="w-4 h-4 invert opacity-0 group-hover:opacity-30 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" alt="" />
              </div>

              {/* Value */}
              <div
                className="text-5xl md:text-6xl font-mono font-black tracking-tight mb-2 transition-all duration-300 group-hover:scale-105 origin-left"
                style={{ color: textMap[m.color], textShadow: `0 0 30px ${glowMap[m.color]}` }}
              >
                {m.value}
              </div>

              {/* Label */}
              <div className="font-mono uppercase text-xs tracking-wider text-mystic/55 mb-1">
                {m.label}
              </div>

              {/* Sub label */}
              <div className="font-sans text-xs text-mystic/30">
                {m.sub}
              </div>

              {/* Bottom line sweep */}
              <div
                className="absolute bottom-0 left-0 h-[2.5px] w-0 group-hover:w-full transition-all duration-600 ease-out rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${textMap[m.color]})`, transitionDuration: '0.6s' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
