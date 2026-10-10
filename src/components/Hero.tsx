import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { COORDINATOR_DATA } from "../data/portfolioData";
import heroImage from "../assets/hero-section-image.png";

interface HeroProps {
  onOpenContact?: () => void;
}

// Interactive Textile Weave / Thread Mesh Background
const TextileThreadCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 800);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let mouseX = width * 0.7;
    let mouseY = height * 0.5;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let step = 0;
    const linesCount = 14;

    const render = () => {
      step += 0.008;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();
        const baseOpacity = 0.04 + (i / linesCount) * 0.12;
        ctx.strokeStyle = `rgba(245, 158, 11, ${baseOpacity})`;
        ctx.lineWidth = 1.2;

        const points = 35;
        for (let j = 0; j <= points; j++) {
          const x = (width / points) * j;
          const wave1 = Math.sin(step + j * 0.2 + i * 0.45) * 35;
          const wave2 = Math.cos(step * 0.8 + (x / width) * 4) * 20;

          const dx = mouseX - x;
          const dy = mouseY - (height * 0.5 + wave1);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / 220) * 25;

          const y =
            height * 0.48 +
            wave1 +
            wave2 +
            (i - linesCount / 2) * 16 -
            mouseInfluence;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
};

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

export const Hero: React.FC<HeroProps> = () => {
  // Animated statistics
  const yearsCount = useCountUp(4, 1800, 0);
  const stylesCount = useCountUp(350, 2200, 0);
  const onTimeCount = useCountUp(98.5, 2000, 1);
  const satisfactionCount = useCountUp(99, 2100, 0);

  return (
    <section className="relative bg-stone-950 text-stone-100 pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-stone-800 overflow-hidden">
      {/* Interactive Textile Thread / Wave Canvas */}
      <TextileThreadCanvas />

      {/* Subtle background weave glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-stone-800/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
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
                    className="text-stone-100 hover:text-amber-400 font-mono font-medium "
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

              <a
                href="#contact"
                className="px-5 py-3 rounded-lg bg-stone-800 hover:bg-stone-750 text-white font-medium text-sm border border-stone-700 transition-colors inline-flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Container - Perfectly Aligned Without Cropping */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* Preserves original size and sticks perfectly to the right */}
            <div className="relative w-full max-w-[420px] lg:ml-auto">
              {/* Outer Frame with original height and no cropping */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl h-[480px] sm:h-[520px] lg:h-[540px] w-full">
                <img
                  src={heroImage}
                  alt="Md. Al Amin - Sample Coordinator"
                  className="w-full h-full object-cover object-top"
                />

                {/* Scrim Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent p-5 pt-14 flex flex-col justify-end">
                  <p className="text-xs text-stone-300">
                    Design & Product Development Dept
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    1 February 2022 – Present
                  </p>
                </div>
              </div>

              {/* Floating tenure badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-stone-900 border border-stone-800 p-3.5 rounded-xl shadow-xl flex items-center gap-3 max-w-[260px] z-20"
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Numerical Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-stone-800 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
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
        </motion.div>
      </div>
    </section>
  );
};
