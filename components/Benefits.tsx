"use client";

import { useRef } from "react";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "Streamline Clinical Workflows",
    description:
      "Eliminate inefficiencies and automate routine tasks to let your clinical staff focus on what matters most — patient care.",
    icon: (
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
  {
    title: "Enhance Patient Outcomes",
    description:
      "Leverage data-driven insights and AI-powered analytics to make better clinical decisions and improve patient care quality.",
    icon: (
      <path
        d="M12 21s-7.5-4.6-10-9.1C.4 8.4 2 4.5 6 4c2.2-.3 4 .9 6 3 2-2.1 3.8-3.3 6-3 4 .5 5.6 4.4 4 7.9-2.5 4.5-10 9.1-10 9.1z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Reduce Administrative Burden",
    description:
      "Free up valuable time and resources by automating administrative tasks and reducing paperwork complexity.",
    icon: (
      <>
        <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" strokeLinejoin="round" />
        <path d="M9 13h6M9 17h6M9 9h2" strokeLinecap="round" />
      </>
    ),
  },
];

function TiltCard({ b }: { b: Benefit }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 16; // left/right tilt
    const rotateX = (0.5 - py) * 16; // up/down tilt

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  }

  return (
    <div className="tilt-wrap">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card relative glass rounded-2xl p-8 cursor-pointer"
      >
        <div className="tilt-glow" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--teal)]/20 to-[var(--blue)]/20 border border-[var(--border)] flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8">
              {b.icon}
            </svg>
          </div>

          <h3 className="font-display text-xl font-semibold mb-3 text-[#e7f5f3]">{b.title}</h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed">{b.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="relative py-24 border-t border-[var(--border)]/60 overflow-hidden">
      <div className="absolute inset-0 grid-fade" />
      <div className="orb orb-teal w-[300px] h-[300px] top-0 left-1/4 opacity-30" />
      <div className="orb orb-blue w-[280px] h-[280px] top-10 right-1/4 opacity-30" />

      <div className="relative max-w-3xl mx-auto px-6 text-center mb-16">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4 text-[#e7f5f3] leading-tight">
          Transform your <span className="gradient-text">healthcare operations</span>
        </h2>
        <p className="text-[var(--muted)] text-lg">
          Discover the key benefits leading healthcare organizations experience with ClinicForce.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
        {BENEFITS.map((b, i) => (
          <TiltCard key={i} b={b} />
        ))}
      </div>

      <style>{`
        .tilt-wrap {
          transform-style: preserve-3d;
          animation: axis-spin 6s ease-in-out infinite;
        }
        .tilt-wrap:hover {
          animation-play-state: paused;
        }
        @keyframes axis-spin {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          25%  { transform: rotateX(4deg) rotateY(10deg); }
          50%  { transform: rotateX(0deg) rotateY(0deg); }
          75%  { transform: rotateX(-4deg) rotateY(-10deg); }
          100% { transform: rotateX(0deg) rotateY(0deg); }
        }
        .tilt-card {
          transform: perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale3d(1, 1, 1);
          transition: transform .15s ease-out, box-shadow .25s ease-out, border-color .25s ease-out;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        .tilt-card:hover {
          box-shadow: 0 0 0 1px rgba(45,212,191,0.3), 0 20px 40px -12px rgba(45,212,191,0.25);
          border-color: rgba(45,212,191,0.35);
        }
        .tilt-glow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(45,212,191,0.14), transparent 60%);
          opacity: 0;
          transition: opacity .25s ease;
          pointer-events: none;
        }
        .tilt-card:hover .tilt-glow {
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .tilt-wrap { animation: none; }
          .tilt-card { transition: none; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
