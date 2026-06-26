import React from 'react';

const cases = [
  {
    name:        'Cigna',
    tag:         'Healthcare',
    tagColor:    'saffron',
    impact:      'Automated claims processing end-to-end — reducing review cycles by 60% and eliminating $2.4M in annual overhead within the first quarter.',
    metric:      '−60%',
    metricLabel: 'Review Time',
    accentColor: '#FF9932',
  },
  {
    name:        'Aetna',
    tag:         'Insurance',
    tagColor:    'forsythia',
    impact:      'Deployed localized AI agents for real-time actuarial risk assessment, cutting analyst load by 80% while improving accuracy by 23%.',
    metric:      '−80%',
    metricLabel: 'Analyst Load',
    accentColor: '#FFC801',
  },
  {
    name:        'Anthem',
    tag:         'Support Ops',
    tagColor:    'mystic',
    impact:      'Integrated NLP-powered data intelligence into customer support pipelines. CSAT increased 34% in the first 90 days of deployment.',
    metric:      '+34%',
    metricLabel: 'CSAT Score',
    accentColor: '#D9E8E2',
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="w-full py-32 relative z-10"
      style={{ background: 'linear-gradient(180deg, #0f1e24 0%, #081014 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-pill mb-5 inline-flex" style={{ borderColor: 'rgba(255,153,50,0.3)', color: '#FF9932', background: 'rgba(255,153,50,0.06)' }}>
              Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-sans font-black text-arctic leading-[1.05] mt-4">
              Proven{' '}
              <span className="text-gradient-gold glow-saffron">results</span>
              {' '}in the wild
            </h2>
          </div>
          <p className="text-mystic/50 font-sans text-sm max-w-xs md:text-right leading-relaxed">
            Deployed across some of the most complex regulated industries on earth.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-4">
          {cases.map((cs, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/6
                         hover:border-white/14
                         transition-all duration-500 ease-out"
              style={{
                background: 'rgba(255,255,255,0.022)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Hover sweep glow */}
              <div
                className="absolute inset-y-0 right-0 w-1/3 opacity-0 group-hover:opacity-100 pointer-events-none
                            transition-opacity duration-500"
                style={{
                  background: `linear-gradient(270deg, ${cs.accentColor}08, transparent)`,
                }}
              />

              {/* Left accent strip */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(180deg, transparent, ${cs.accentColor}, transparent)` }}
              />

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-10">

                {/* Company + tag */}
                <div className="md:w-[22%] flex-shrink-0">
                  <div
                    className="inline-block font-mono uppercase text-[10px] tracking-widest px-2.5 py-1 rounded-full border mb-3 transition-all duration-300 group-hover:border-opacity-60"
                    style={{ color: cs.accentColor, borderColor: `${cs.accentColor}40`, background: `${cs.accentColor}0a` }}
                  >
                    {cs.tag}
                  </div>
                  <h3
                    className="text-3xl font-mono font-black uppercase transition-all duration-300"
                    style={{ color: '#F1F6F4', textShadow: `0 0 0 transparent` }}
                  >
                    <span className="group-hover:text-forsythia group-hover:glow-forsythia transition-all duration-300">
                      {cs.name}
                    </span>
                  </h3>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px self-stretch bg-white/6 group-hover:bg-white/12 transition-colors duration-300 flex-shrink-0" />

                {/* Impact text */}
                <p className="flex-1 font-sans text-base text-mystic/60 leading-relaxed group-hover:text-mystic/80 transition-colors duration-300">
                  {cs.impact}
                </p>

                {/* Metric */}
                <div className="md:w-[16%] flex-shrink-0 flex flex-col items-start md:items-end">
                  <div
                    className="text-4xl font-mono font-black mb-1 transition-all duration-300 group-hover:scale-110 origin-right"
                    style={{ color: cs.accentColor, textShadow: `0 0 20px ${cs.accentColor}60` }}
                  >
                    {cs.metric}
                  </div>
                  <div className="font-mono uppercase text-[10px] tracking-widest text-mystic/40">
                    {cs.metricLabel}
                  </div>
                </div>
              </div>

              {/* Bottom line sweep */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: `linear-gradient(90deg, transparent, ${cs.accentColor}80, transparent)` }}
              />
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-mystic/60 hover:text-arctic">
            View all case studies
            <img src="/chevron-right.svg" className="w-4 h-4 invert opacity-50" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
