"use client";

type Testimonial = {
  name: string;
  location: string;
  rating: number; // 1-5
  quote: string;
  initials: string;
};

// Edit this array with your real testimonials later
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alice Johnson",
    location: "Chicago",
    rating: 4,
    quote: "ClinicForce made it a 1000 times easier to efficiently send my health history to my doctors!",
    initials: "AJ",
  },
  {
    name: "Bob Brown",
    location: "Miami",
    rating: 5,
    quote: "The healthcare advocate tool is brilliant.",
    initials: "BB",
  },
  {
    name: "Emily Davis",
    location: "Austin",
    rating: 5,
    quote: "I'm so happy I registered on their portal for my provider.",
    initials: "ED",
  },
  {
    name: "John Doe",
    location: "New York",
    rating: 5,
    quote: "The qr code sharing makes it so easy to work with receptionists!",
    initials: "JD",
  },
  {
    name: "Priya Patel",
    location: "Seattle",
    rating: 5,
    quote: "Fast, reliable, and the interface feels like it was built for me.",
    initials: "PP",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < rating ? "var(--teal)" : "none"}
          stroke={i < rating ? "var(--teal)" : "var(--border)"}
          strokeWidth="1.2"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.74 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="glass rounded-xl p-6 w-[320px] shrink-0 mx-2.5 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--blue)] flex items-center justify-center text-[#04141a] text-sm font-semibold shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-medium text-[#e7f5f3]">{t.name}</div>
          <div className="text-xs text-[var(--muted-2)]">{t.location}</div>
        </div>
      </div>
      <Stars rating={t.rating} />
      <p className="text-sm text-[var(--muted)] leading-relaxed italic">&quot;{t.quote}&quot;</p>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate the list so the marquee loop is seamless
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 border-t border-[var(--border)]/60 overflow-hidden">
      <div className="absolute inset-0 grid-fade" />

      <div className="relative max-w-3xl mx-auto px-6 text-center mb-14">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3 text-[#e7f5f3]">
          Loved by patients across the country
        </h2>
        <p className="text-[var(--muted)]">
          Don&apos;t just take our word for it — here&apos;s what people are saying.
        </p>
      </div>

      <div className="relative marquee-mask">
        <div className="flex w-max marquee-track">
          {loop.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          animation: marquee 32s linear infinite;
        }
        .marquee-mask:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
