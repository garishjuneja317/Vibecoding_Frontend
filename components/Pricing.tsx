"use client";

import React, { useState } from 'react';

const PRICING = {
  tiers: {
    starter:      { base: 100, name: 'Starter',      sub: 'For indie builders & small teams.',        features: ['5 autonomous agents', '10K runs / month', 'REST API access', 'Community support', 'SOC2 compliant', '99.9% uptime SLA'] },
    professional: { base: 250, name: 'Professional',  sub: 'Scale your AI operations effortlessly.',   features: ['25 autonomous agents', '100K runs / month', 'GraphQL + WebSockets', 'Priority support (4h SLA)', 'Custom agent training', 'HIPAA compliant', 'Advanced analytics'] },
    enterprise:   { base: 800, name: 'Enterprise',    sub: 'Custom infra, SLAs, and white-glove care.', features: ['Unlimited agents', 'Unlimited runs', 'Dedicated VPC deployment', '24/7 dedicated support', 'Custom SLA & MSA', 'On-premise option', 'SAML SSO', 'Audit log export'] },
  },
  multipliers: { monthly: 1, annual: 0.8 },
  currencies: {
    USD: { symbol: '$',  rate: 1    },
    EUR: { symbol: '€',  rate: 0.92 },
    INR: { symbol: '₹',  rate: 83.5 },
  },
} as const;

type Tier     = keyof typeof PRICING.tiers;
type Billing  = keyof typeof PRICING.multipliers;
type Currency = keyof typeof PRICING.currencies;

function Price({ tier, billing, currency }: { tier: Tier; billing: Billing; currency: Currency }) {
  const base  = PRICING.tiers[tier].base;
  const multi = PRICING.multipliers[billing];
  const curr  = PRICING.currencies[currency];
  const val   = (base * multi * curr.rate).toFixed(currency === 'INR' ? 0 : 2);
  return (
    <div className="flex items-end gap-1.5 my-6">
      <span className="text-4xl md:text-5xl font-mono font-black text-arctic leading-none">{curr.symbol}{val}</span>
      <div className="flex flex-col pb-1 gap-0.5">
        <span className="text-mystic/50 font-sans text-xs">/ month</span>
        {billing === 'annual' && (
          <span className="text-forsythia font-mono text-[10px] uppercase tracking-wider">20% off</span>
        )}
      </div>
    </div>
  );
}

function CheckItem({ text, dimmed = false }: { text: string; dimmed?: boolean }) {
  return (
    <li className={`flex items-center gap-3 text-sm font-sans transition-colors duration-200 ${dimmed ? 'text-mystic/35' : 'text-mystic/70'}`}>
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-forsythia/12 border border-forsythia/25 flex items-center justify-center">
        <img src="/chevron-up-solid.svg" className="w-3 h-3 invert opacity-75 rotate-90" alt="✓" />
      </span>
      {text}
    </li>
  );
}

const tierOrder: Tier[] = ['starter', 'professional', 'enterprise'];

export default function Pricing() {
  const [billing,  setBilling]  = useState<Billing>('monthly');
  const [currency, setCurrency] = useState<Currency>('USD');

  return (
    <section
      id="pricing"
      className="w-full py-32 relative z-10 noise-overlay"
      style={{ background: 'linear-gradient(180deg, #081014 0%, #172B36 60%, #081014 100%)' }}
    >
      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-forsythia/[0.04] blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="section-pill mb-6 inline-flex">Pricing</span>
          <h2 className="text-4xl md:text-6xl font-sans font-black text-arctic mb-4 leading-tight">
            Transparent,{' '}
            <span className="shimmer-text">usage-based</span>
            {' '}pricing
          </h2>
          <p className="text-mystic/50 font-sans text-base max-w-md mx-auto">
            Pay for inference volume — not per seat. Scale to zero, scale to infinity.
          </p>
        </div>

        {/* ── Toggle controls ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Billing */}
          <div className="flex items-center glass-panel !rounded-full p-1">
            {(['monthly', 'annual'] as Billing[]).map(b => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-5 py-2 font-mono uppercase text-xs tracking-wider rounded-full transition-all duration-300
                             ${billing === b
                               ? 'bg-forsythia/18 text-forsythia border border-forsythia/35 shadow-[0_0_12px_rgba(255,200,1,0.15)]'
                               : 'text-mystic/50 hover:text-arctic'}`}
              >
                {b === 'annual' ? 'Annual −20%' : 'Monthly'}
              </button>
            ))}
          </div>
          {/* Currency */}
          <div className="flex items-center glass-panel !rounded-full p-1">
            {(Object.keys(PRICING.currencies) as Currency[]).map(c => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-4 py-2 font-mono uppercase text-xs tracking-wider rounded-full transition-all duration-300
                             ${currency === c
                               ? 'bg-white/12 text-arctic border border-white/20'
                               : 'text-mystic/50 hover:text-arctic'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tier cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
          {tierOrder.map(key => {
            const t       = PRICING.tiers[key];
            const popular = key === 'professional';

            return (
              <div
                key={key}
                className={`
                  relative flex flex-col rounded-3xl border overflow-hidden
                  transition-all duration-500 ease-out
                  ${popular
                    ? 'md:-translate-y-8 z-10'
                    : 'hover:-translate-y-2'}
                `}
                style={{
                  background: popular
                    ? 'rgba(255,255,255,0.065)'
                    : 'rgba(255,255,255,0.025)',
                  backdropFilter: 'blur(24px)',
                  borderColor: popular
                    ? 'rgba(255,200,1,0.32)'
                    : 'rgba(255,255,255,0.07)',
                  boxShadow: popular
                    ? '0 0 80px rgba(255,200,1,0.14), 0 0 160px rgba(255,200,1,0.06), inset 0 1px 0 rgba(255,255,255,0.07)'
                    : '0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Popular badge */}
                {popular && (
                  <div
                    className="absolute -top-0 left-0 right-0 h-1 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, #FF9932, #FFC801, #FF9932)' }}
                  />
                )}
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <span
                      className="inline-block px-5 py-1.5 rounded-full font-mono uppercase font-black text-xs tracking-widest text-oceanic"
                      style={{
                        background: 'linear-gradient(135deg, #FF9932, #FFC801)',
                        boxShadow: '0 0 22px rgba(255,200,1,0.55)',
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Tier header */}
                  <h3 className={`text-2xl font-mono font-black uppercase ${popular ? 'text-forsythia glow-forsythia' : 'text-arctic'}`}>
                    {t.name}
                  </h3>
                  <p className="text-mystic/50 font-sans text-sm mt-1.5">{t.sub}</p>

                  {/* Price */}
                  <Price tier={key} billing={billing} currency={currency} />

                  {/* Divider */}
                  <div className="h-px mb-7" style={{ background: popular ? 'rgba(255,200,1,0.18)' : 'rgba(255,255,255,0.06)' }} />

                  {/* Features */}
                  <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                    {t.features.map((f, fi) => (
                      <CheckItem key={fi} text={f} />
                    ))}
                  </ul>

                  {/* CTA — glow intensity handled by .btn-cta-gold CSS class (no JS handlers) */}
                  {popular ? (
                    <button
                      className="btn-cta-gold w-full py-4 font-mono uppercase font-black rounded-full text-sm tracking-wider text-oceanic transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Upgrade to Pro
                    </button>
                  ) : (
                    <button
                      className="w-full py-4 font-mono uppercase font-bold rounded-full text-sm tracking-wider text-arctic/80 transition-all duration-300 hover:text-arctic hover:-translate-y-0.5 border border-white/8 hover:border-forsythia/25 hover:shadow-[0_0_18px_rgba(255,200,1,0.1)]"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    >
                      {key === 'enterprise' ? 'Contact Sales' : 'Get Started Free'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-mystic/30 font-mono text-[10px] uppercase tracking-[0.25em] mt-14">
          All plans include 14-day free trial &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Cancel anytime
        </p>
      </div>
    </section>
  );
}
