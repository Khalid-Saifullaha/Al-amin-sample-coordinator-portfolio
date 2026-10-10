import React, { useState, useEffect } from "react";
import { Phone, Mail, ArrowDown } from "lucide-react";
import { COORDINATOR_DATA } from "../data/portfolioData";
import heroImage from "../assets/hero-section-image.png";

interface HeroProps {
  onOpenContact: () => void;
}

// Hook for smooth numerical count-up animation
function useCountUp(
  target: number,
  duration: number = 2000,
  decimals: number = 0,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth easeOutExpo formula
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * target;

      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, decimals]);

  return count;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  // Animated statistics
  const yearsCount = useCountUp(4, 1800, 0);
  const stylesCount = useCountUp(350, 2200, 0);
  const onTimeCount = useCountUp(98.5, 2000, 1);
  const satisfactionCount = useCountUp(99, 2100, 0);

  return (
    <section className="relative bg-stone-950 text-stone-100 pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-stone-800 overflow-hidden">
      {/* Subtle background weave glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-stone-800/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Clean Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 uppercase">
              <span>Garments & Textile Industry</span>
              <span className="text-stone-600">/</span>
              <span>Synergies Sourcing Bangladesh</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08] text-balance">
                MD. AL AMIN
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-amber-400 font-display tracking-wide">
                SAMPLE COORDINATOR
              </p>
            </div>

            {/* Clean Unboxed Metadata & Competencies */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm text-stone-300 font-medium border-y border-stone-800/80 py-3">
              <span>Sample Development</span>
              <span className="text-amber-500/70" aria-hidden="true">
                ·
              </span>
              <span>Buyer Requirements</span>
              <span className="text-amber-500/70" aria-hidden="true">
                ·
              </span>
              <span>Sample Follow-up</span>
              <span className="text-amber-500/70" aria-hidden="true">
                ·
              </span>
              <span>Coordination</span>
              <span className="text-amber-500/70" aria-hidden="true">
                ·
              </span>
              <span className="text-stone-100 font-semibold">
                On-time Delivery
              </span>
            </div>

            {/* Lead Narrative */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Working as a dedicated Sample Coordinator at{" "}
              <strong className="text-white font-semibold">
                Synergies Sourcing Bangladesh
              </strong>{" "}
              in the{" "}
              <span className="text-amber-300">
                Design & Product Development
              </span>{" "}
              department since February 2022. Specialized in orchestrating
              apparel prototype development, resolving technical holds,
              satisfying complex buyer fit parameters, and securing on-time
              delivery.
            </p>

            {/* Contact Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-300 pt-1">
              <div className="flex items-center gap-2.5 bg-stone-900/80 border border-stone-800 rounded-lg p-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-stone-400 block text-[10px]">
                    Direct Phone
                  </span>
                  <a
                    href={`tel:${COORDINATOR_DATA.contact.phone}`}
                    className="text-stone-100 hover:text-amber-400 font-mono font-medium"
                  >
                    {COORDINATOR_DATA.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-stone-900/80 border border-stone-800 rounded-lg p-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="truncate">
                  <span className="text-stone-400 block text-[10px]">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${COORDINATOR_DATA.contact.email}`}
                    className="text-stone-100 hover:text-amber-400 font-mono truncate block"
                  >
                    {COORDINATOR_DATA.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#gallery"
                className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-colors shadow-md flex items-center gap-2"
              >
                <span>Explore Sample Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="px-5 py-3 rounded-lg bg-stone-800 hover:bg-stone-750 text-white font-medium text-sm border border-stone-700 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Container (Md. Al Amin Portrait) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl aspect-[3/4] max-h-[520px]">
                <img
                  src={heroImage}
                  alt="Md. Al Amin - Sample Coordinator"
                  className="w-full h-full object-cover object-top"
                />

                {/* Scrim Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent p-5 pt-12 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-xs mb-1">
                    {/* <span className="font-mono text-amber-400 font-medium">
                      SYNERGIES SOURCING
                    </span> */}
                    {/* <span className="text-emerald-400 text-[11px] font-medium font-mono">
                      Active Coordinator
                    </span> */}
                  </div>
                  {/* <h3 className="text-lg font-bold text-white font-display">
                    Md. Al Amin
                  </h3> */}
                  <p className="text-xs text-stone-300">
                    Design & Product Development Dept
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    1 February 2022 – Present
                  </p>
                </div>
              </div>

              {/* Floating tenure badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-stone-900 border border-stone-800 p-3.5 rounded-xl shadow-xl flex items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 font-bold font-mono text-sm">
                  {yearsCount}+
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">
                    Years at Synergies
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    Sample Development & Buyer Follow-up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Numerical Metric Strip */}
        <div className="mt-16 pt-8 border-t border-stone-800 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Stat 1: 4+ Years */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
              <span>{yearsCount}</span>
              <span className="text-amber-400">+</span>
              <span className="text-lg text-stone-400 font-normal ml-1">
                Years
              </span>
            </div>
            <div className="text-sm font-semibold text-stone-200">
              Experience
            </div>
            <div className="text-xs text-stone-400">Since Feb 2022</div>
          </div>

          {/* Stat 2: 350+ Styles */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
              <span>{stylesCount}</span>
              <span className="text-amber-400">+</span>
            </div>
            <div className="text-sm font-semibold text-stone-200">
              Styles Coordinated
            </div>
            <div className="text-xs text-stone-400">Per Annual Cycles</div>
          </div>

          {/* Stat 3: 98.5% On-Time */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
              <span>{onTimeCount}</span>
              <span className="text-amber-400">%</span>
            </div>
            <div className="text-sm font-semibold text-stone-200">
              On-Time Dispatch
            </div>
            <div className="text-xs text-stone-400">Courier & Handover</div>
          </div>

          {/* Stat 4: 99% Satisfaction */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
              <span>{satisfactionCount}</span>
              <span className="text-amber-400">%</span>
            </div>
            <div className="text-sm font-semibold text-stone-200">
              Buyer Satisfaction
            </div>
            <div className="text-xs text-stone-400">Sample First-Fit Pass</div>
          </div>
        </div>
      </div>
    </section>
  );
};
