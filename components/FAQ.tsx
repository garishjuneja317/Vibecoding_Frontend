"use client";

import React, { useState } from 'react';

const faqData = {
  Overview: [
    { q: 'What is Armory?',                    a: 'Armory is an enterprise-grade AI automation platform that builds and deploys autonomous agents to handle complex workflows — from discovery and analysis to training and production deployment. Think of it as your AI engineering team, running 24/7.' },
    { q: 'How quickly can I deploy?',           a: 'Most standard agents are live in under 5 minutes using our one-click orchestration wizard. Custom-trained agents take 20–30 minutes, including fine-tuning on your private data.' },
    { q: 'What industries does Armory serve?',  a: 'Armory is deployed across healthcare, insurance, fintech, logistics, and legal — anywhere workflows are complex, rule-based, and expensive to staff manually.' },
  ],
  Security: [
    { q: 'Where does my data go?',         a: 'Nowhere outside your control. Armory trains all models locally within your VPC. Zero data touches public model endpoints. All weights, embeddings, and inference logs remain in your cloud environment.' },
    { q: 'Is it SOC2 and HIPAA compliant?', a: 'Yes. We are fully SOC2 Type II and HIPAA compliant. Enterprise plans include BAA signing, dedicated audit logs, role-based access control, and SSO via SAML.' },
    { q: 'Can I do pen testing?',           a: 'Absolutely. We welcome third-party security audits and penetration tests. Contact security@armory.ai to schedule a coordinated test window.' },
  ],
  Protocols: [
    { q: 'What APIs are supported?',      a: 'REST, GraphQL, and WebSockets out of the box. We also offer native connectors for Postgres, MongoDB, Snowflake, BigQuery, Kafka, and S3-compatible stores.' },
    { q: 'Can I bring my own model?',     a: 'Yes. Plug in custom weights from HuggingFace, connect a private inference endpoint, or use our BYOM adapter for proprietary architectures including Llama, Mistral, and Falcon variants.' },
  ],
  Licensing: [
    { q: 'How does pricing scale?',       a: 'We charge by inference volume and agent-hours — not per seat. This means you only pay for what you use, with no surprise overages from team headcount growth.' },
    { q: 'Can I change plans anytime?',   a: 'Yes. Upgrades are instant. Downgrades take effect at the end of your billing period. Enterprise contracts are negotiated annually with flexible terms and committed-use discounts.' },
  ],
};

type Category = keyof typeof faqData;

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>('Overview');
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (i: number) =>
    setOpenItems(p => ({ ...p, [i]: !p[i] }));

  const switchCat = (cat: Category) => {
    setActiveCategory(cat);
    setOpenItems({ 0: true });
  };

  return (
    <section
      className="w-full py-32 relative z-10"
      style={{ background: 'linear-gradient(180deg, #081014 0%, #0d1a20 100%)' }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="section-pill-mystic section-pill mb-6 inline-flex">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-sans font-black text-arctic leading-tight mt-2">
            Common{' '}
            <span className="text-gradient">questions</span>
          </h2>
          <p className="text-mystic/45 font-sans text-base mt-4 max-w-sm mx-auto">
            Everything you need to know before you build.
          </p>
        </div>

        {/* ── Category tabs ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(faqData) as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => switchCat(cat)}
              className={`px-5 py-2.5 font-mono uppercase text-xs tracking-wider rounded-full border transition-all duration-300
                           ${activeCategory === cat
                             ? 'bg-forsythia/12 border-forsythia/40 text-forsythia shadow-[0_0_14px_rgba(255,200,1,0.12)]'
                             : 'bg-white/[0.025] border-white/7 text-mystic/50 hover:text-arctic hover:border-white/18'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Accordion ── */}
        <div className="flex flex-col gap-3">
          {faqData[activeCategory].map((item, i) => {
            const open = !!openItems[i];
            return (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-all duration-400"
                style={{
                  background: open ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.022)',
                  borderColor: open ? 'rgba(255,200,1,0.22)' : 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: open ? '0 0 30px rgba(255,200,1,0.06)' : 'none',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-7 py-5 text-left group focus:outline-none"
                >
                  <span className={`text-base md:text-lg font-sans font-semibold leading-snug transition-colors duration-200 pr-4
                                    ${open ? 'text-arctic' : 'text-arctic/70 group-hover:text-arctic'}`}>
                    {item.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-400"
                    style={{
                      background: open ? 'rgba(255,200,1,0.15)' : 'rgba(255,255,255,0.04)',
                      borderColor: open ? 'rgba(255,200,1,0.4)' : 'rgba(255,255,255,0.09)',
                      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <img src="/chevron-down.svg" className="w-4 h-4 invert opacity-70" alt="" />
                  </div>
                </button>

                <div className={`accordion-content ${open ? 'open' : ''}`}>
                  <p className="px-7 pb-6 font-sans text-base text-mystic/65 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA strip ── */}
        <div
          className="mt-16 rounded-3xl border overflow-hidden p-10 text-center relative"
          style={{
            background: 'rgba(255,255,255,0.03)',
            borderColor: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-20 bg-forsythia/10 blur-[60px] rounded-full pointer-events-none" />

          <p className="text-arctic font-sans text-xl font-semibold mb-2 relative z-10">
            Still have questions?
          </p>
          <p className="text-mystic/50 font-sans text-sm mb-7 relative z-10">
            Our team is online and ready to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="btn-primary">
              Talk to Sales
            </button>
            <button className="btn-secondary">
              <img src="/link.svg" className="w-4 h-4 invert opacity-60" alt="" />
              Read the Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
