import React from 'react';

const items = [
  { text: 'ACME Corp',         dot: true  },
  { text: 'GlobalTech',        dot: false },
  { text: 'Quantum Dynamics',  dot: true  },
  { text: 'Nexus Industries',  dot: false },
  { text: 'AeroSpaceX',        dot: true  },
  { text: 'Stark Ind',         dot: false },
  { text: 'Wayne Enterprises', dot: true  },
  { text: 'Cyberdyne',         dot: false },
  { text: 'Umbrella Corp',     dot: true  },
  { text: 'Initech',           dot: false },
  { text: 'Soylent Corp',      dot: true  },
  { text: 'Veridian Dynamics', dot: false },
];

function MarqueeItem({ text, dot }: { text: string; dot: boolean }) {
  return (
    <div className="flex items-center gap-4 flex-shrink-0">
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-forsythia/40 flex-shrink-0" />
      )}
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-mystic/35 whitespace-nowrap hover:text-mystic/70 transition-colors duration-500 cursor-default">
        {text}
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="relative w-full py-7 overflow-hidden noise-overlay"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(8,16,20,0.7) 30%, rgba(8,16,20,0.7) 70%, transparent 100%)',
        borderTop: '1px solid rgba(17,76,90,0.3)',
        borderBottom: '1px solid rgba(17,76,90,0.3)',
      }}
    >
      {/* Gold shimmer line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forsythia/20 to-transparent" />

      <div className="marquee-container w-full">
        {[0, 1].map(pass => (
          <div key={pass} className="marquee-content" aria-hidden={pass === 1}>
            {items.map((item, i) => (
              <MarqueeItem key={i} text={item.text} dot={item.dot} />
            ))}
          </div>
        ))}
      </div>

      {/* Gold shimmer line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forsythia/20 to-transparent" />
    </div>
  );
}
