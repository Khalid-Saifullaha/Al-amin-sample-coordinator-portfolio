import React from "react";
import {
  Calendar,
  Target,
  ShieldCheck,
  CheckCircle2,
  Award,
} from "lucide-react";
import { motion } from "motion/react";
import { CLIENT_DATA } from "../data/portfolioData";

export const CareerHighlights: React.FC = () => {
  const highlights = [
    {
      index: "01",
      icon: Calendar,
      title: "Sample Coordinator Since Feb 2022",
      badge: "4+ Years Continuous",
      leadText: "Working as a Sample Coordinator since February 2022.",
      narrative:
        "Over 4 years of continuous, full-time coordination service in the Design & Product Development department at Synergies Sourcing Bangladesh.",
      points: [
        "1 February 2022 – Present active service",
        "Design & Product Development department",
        "Synergies Sourcing Bangladesh liaison",
      ],
    },
    {
      index: "02",
      icon: Target,
      title: "Core Operational & Buyer Focus",
      badge: "Core Specialization",
      leadText:
        "Experience focus: sample development coordination, buyer requirements, follow-up, and delivery timelines.",
      narrative:
        "End-to-end follow-up bridging international buyer tech packs, sample room floor patterns, and strict dispatch deadlines.",
      points: [
        "Rigorous buyer tech pack & fit compliance",
        "Daily sample room floor follow-up",
        "On-time courier dispatch & handover",
      ],
    },
    {
      index: "03",
      icon: ShieldCheck,
      title: "Teamwork & Continuous Improvement",
      badge: "Work Values",
      leadText:
        "Committed to teamwork, attention to detail, and continuous improvement.",
      narrative:
        "Dedicated to zero-defect execution, cross-departmental collaboration, and proactive problem-solving across all product lines.",
      points: [
        "Meticulous attention to garment details",
        "High-trust cross-functional teamwork",
        "Continuous personal & technical growth",
      ],
    },
  ];

  return (
    <section
      id="highlights"
      className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Professional Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            CAREER HIGHLIGHTS
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2.5 leading-relaxed">
            Proven track record in apparel sample development, buyer
            coordination, and on-time execution at Synergies Sourcing
            Bangladesh.
          </p>
        </motion.div>

        {/* 3 Modern Dark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {highlights.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.12,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className="group relative rounded-2xl bg-gradient-to-b from-stone-900 via-stone-900 to-stone-925 border border-stone-800/90 hover:border-amber-400/40 p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl h-full transition-colors duration-300"
              >
                {/* Top Ambient Glow on Hover */}
                <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-5">
                  {/* Card Header: Icon & Editorial Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center transition-colors group-hover:bg-amber-400 group-hover:text-stone-950">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-lg font-bold text-stone-600 group-hover:text-amber-400/70 transition-colors">
                      {item.index}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-400/90 block mb-1">
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Primary Highlight Statement */}
                  <p className="text-sm font-semibold text-stone-200 leading-relaxed border-l-2 border-amber-400/70 pl-3">
                    {item.leadText}
                  </p>

                  {/* Narrative details */}
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.narrative}
                  </p>

                  {/* Bullet Checklist */}
                  <div className="pt-2 space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 text-xs text-stone-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>Synergies Bangladesh</span>
                  <span className="text-amber-400/80">Active Focus</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
