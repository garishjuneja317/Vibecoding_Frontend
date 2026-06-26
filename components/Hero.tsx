"use client";

import React, { useEffect, useRef, useState } from 'react';
import Marquee from './Marquee';

/* All words must be short enough to never wrap on a single line.
   "Custom Agents" was removed — it broke the layout at mid-range viewports.
   These are single-token or tight two-word phrases that fit within ~50% viewport. */
const WORDS = ['AI Strategy', 'Deployment', 'Automation', 'Intelligence'];


export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fading, setFading] = useState(false);

  // Word cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setFading(false);
      }, 350);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  // Staggered reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.hero-reveal');
    els.forEach((el, i) => { el.style.animationDelay = `${i * 0.11}s`; });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center pt-32 pb-0 overflow-hidden noise-overlay"
      style={{
        background:
          'radial-gradient(ellipse 90% 70% at 50% -5%, rgba(17,76,90,0.65) 0%, #172B36 40%, #0c1a1f 70%, #081014 100%)',
      }}
    >
      {/* ─ Giant decorative ring ─ */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none opacity-[0.04] animate-rotate-slow"
        style={{ border: '1px solid #F1F6F4' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none opacity-[0.06] animate-rotate-slow"
        style={{ border: '1px solid #FFC801', animationDirection: 'reverse', animationDuration: '30s' }}
      />

      {/* ─ Ambient glow orbs ─ */}
      <div className="absolute top-[12%] left-[6%]   w-[700px] h-[700px] rounded-full bg-forsythia/[0.055] blur-[180px] animate-blob pointer-events-none" />
      <div className="absolute top-[35%] right-[3%]  w-[550px] h-[550px] rounded-full bg-nocturnal/60      blur-[140px] animate-blob pointer-events-none" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-[8%] left-[28%] w-[450px] h-[450px] rounded-full bg-saffron/[0.045]  blur-[130px] animate-blob pointer-events-none" style={{ animationDelay: '8s' }} />

      {/* ─ Grid texture ─ */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(241,246,244,1) 1px, transparent 1px), linear-gradient(90deg, rgba(241,246,244,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col items-start space-y-8">

            {/* Live badge */}
            <div className="hero-reveal fade-up">
              <div className="flex items-center gap-2.5 glass-panel px-4 py-2 !rounded-full w-fit">
                <span className="ticker-dot" />
                <span className="font-mono uppercase text-xs tracking-[0.2em] text-forsythia">
                  Live Beta &nbsp;·&nbsp; 200+ Teams Deployed
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="hero-reveal fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-[5.8rem] font-sans font-black tracking-tight leading-[1.02]">
                <span className="shimmer-text">Power your</span>
                <br />
                <span className="text-arctic">future with</span>
                <br />
                {/* Cycling word — fixed-height wrapper prevents layout shift.
                    white-space: nowrap ensures the word NEVER wraps to line 2.
                    overflow: visible lets it bleed right if ever it's too wide,
                    which is always preferable to pushing content down. */}
                <span
                  className="block overflow-visible"
                  style={{ lineHeight: '1.02', height: '1.02em' }}
                >
                  <span
                    className="text-gradient-gold glow-forsythia whitespace-nowrap"
                    style={{
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                      opacity: fading ? 0 : 1,
                      transform: fading ? 'translateY(10px)' : 'translateY(0)',
                      display: 'inline-block',
                    }}
                  >
                    {WORDS[wordIdx]}.
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="hero-reveal fade-up text-lg lg:text-xl text-mystic/80 font-sans max-w-md leading-relaxed">
              Armory deploys{' '}
              <span className="text-arctic font-semibold">autonomous AI agents</span> that connect raw data to cognitive action — at infinite scale, in under 5 minutes.
            </p>

            {/* CTAs */}
            <div className="hero-reveal fade-up flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="btn-primary group">
                <span>Build A Workflow</span>
                <img
                  src="/arrow-path.svg"
                  className="w-4 h-4 invert group-hover:rotate-180 transition-transform duration-500"
                  alt=""
                />
              </button>
              <button className="btn-secondary group">
                <span>See it in Action</span>
                <img src="/chevron-right.svg" className="w-4 h-4 invert opacity-60 group-hover:translate-x-1 transition-transform duration-300" alt="" />
              </button>
            </div>

            {/* Trust line */}
            <p className="hero-reveal fade-up font-mono uppercase text-xs tracking-[0.2em] text-mystic/40">
              No card required &nbsp;·&nbsp; 5-min setup &nbsp;·&nbsp; SOC2 + HIPAA
            </p>
          </div>

          {/* ── RIGHT: Visual ── */}
          <div className="flex justify-center lg:justify-end items-center relative min-h-[420px]">

            {/* Central pulsing orb */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-nocturnal/30 blur-[90px] animate-orb" />
            </div>

            {/* Keyword stack */}
            <ul className="relative z-10 flex flex-col space-y-5 border-l-2 border-forsythia/18 pl-10">
              {[
                { text: 'AI Strategy', hl: false },
                { text: 'Custom Agents', hl: false },
                { text: 'Process Automation', hl: true },
                { text: 'Data Intelligence', hl: false },
              ].map(({ text, hl }) => (
                <li
                  key={text}
                  className={`
                    font-mono font-black uppercase cursor-default select-none
                    transition-all duration-400 ease-out
                    hover:-translate-y-1 hover:translate-x-4
                    ${hl
                      ? 'text-forsythia text-3xl lg:text-4xl glow-forsythia scale-[1.06]'
                      : 'text-mystic/55 text-2xl lg:text-[2rem] hover:text-arctic/90'}
                  `}
                >
                  {hl && <span className="inline-block w-2.5 h-2.5 rounded-full bg-forsythia mr-3 animate-pulse-ring align-middle" />}
                  {text}
                </li>
              ))}
            </ul>

            {/* ── 11ms chip: top-right, clear of keyword list ── */}
            <div
              className="absolute top-0 right-0 glass-panel !rounded-2xl px-5 py-3.5 animate-float z-20"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="text-2xl font-mono font-black text-forsythia glow-forsythia">11ms</div>
              <div className="text-mystic/60 text-[10px] font-mono uppercase tracking-widest mt-0.5">Avg Latency</div>
            </div>

            {/* ── 9× chip: bottom-left corner, below keyword list ── */}
            <div
              className="absolute -bottom-8 left-0 glass-panel !rounded-2xl px-5 py-3.5 animate-float z-20"
              style={{ animationDelay: '1.8s' }}
            >
              <div className="text-2xl font-mono font-black text-saffron glow-saffron">9×</div>
              <div className="text-mystic/60 text-[10px] font-mono uppercase tracking-widest mt-0.5">Throughput</div>
            </div>

            {/* ── 99.9% chip: bottom-right, clear of keyword list ── */}
            <div
              className="absolute -bottom-8 right-0 glass-panel !rounded-2xl px-5 py-3.5 animate-float-slow z-20"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-2xl font-mono font-black text-arctic glow-arctic">99.9%</div>
              <div className="text-mystic/60 text-[10px] font-mono uppercase tracking-widest mt-0.5">Uptime SLA</div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative z-10 mt-28">
        <Marquee />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #081014)' }}
      />
    </section>
  );
}
