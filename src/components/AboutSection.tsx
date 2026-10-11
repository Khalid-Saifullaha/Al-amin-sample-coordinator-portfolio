import React from "react";
import {
  Building2,
  Calendar,
  Target,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Compass,
  Users,
} from "lucide-react";
import { COORDINATOR_DATA } from "../data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
            Professional Profile & Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Coordinating Global Apparel Development with Precision
          </h2>
          <p className="mt-4 text-stone-300 text-base leading-relaxed">
            Since joining{" "}
            <span className="text-white font-semibold">
              Synergies Sourcing Bangladesh
            </span>{" "}
            on 1 February 2022, Md. Al-Amin has been driving product development
            coordination within the Design & Product Development department.
          </p>
        </div>

        {/* 2-Column Professional Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Organization & Experience Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            {/* Employment Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 space-y-5">
              <div className="flex items-start justify-between border-b border-stone-850 pb-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wide">
                    Current Role
                  </span>
                  <h3 className="text-xl font-bold text-white font-display mt-0.5">
                    Sample Coordinator
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-medium">
                  Active
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center gap-3 text-stone-300">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 text-xs block">
                      Company
                    </span>
                    <strong className="text-white font-medium">
                      {COORDINATOR_DATA.company}
                    </strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone-300">
                  <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 text-xs block">
                      Department
                    </span>
                    <span className="text-stone-200">
                      {COORDINATOR_DATA.department}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone-300">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 text-xs block">
                      Employment Duration
                    </span>
                    <span className="text-stone-200 font-mono">
                      {COORDINATOR_DATA.employmentPeriod}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-850 text-xs text-stone-400 leading-relaxed">
                Operating directly at the intersection of international retail
                buyers, merchandising accounts, CAD pattern rooms, dye houses,
                and sewing lines.
              </div>
            </div>

            {/* Career Highlights Card */}
            <div
              id="highlights"
              className="bg-stone-950 border border-stone-800 rounded-xl p-6"
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                <span>Career Highlights</span>
              </h4>

              <ul className="space-y-3.5 text-sm text-stone-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">
                      Sample Coordinator Experience:
                    </strong>{" "}
                    Serving in continuous full-time coordination since February
                    2022.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Core Focus:</strong>{" "}
                    End-to-end sample development, buyer requirements
                    compliance, real-time floor follow-up, and strict delivery
                    timelines.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Professional Values:</strong>{" "}
                    Deeply committed to teamwork, relentless attention to
                    detail, and continuous process improvement.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: 5 Core Competency Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white font-display mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Core Functional Pillars</span>
            </h3>

            <div className="grid grid-cols-1 gap-3.5">
              {COORDINATOR_DATA.corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-stone-950 border border-stone-800/90 hover:border-amber-500/40 rounded-xl p-5 transition-colors group"
                >
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h4 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {idx + 1}. {pillar.title}
                    </h4>
                    <span className="text-xs font-mono text-stone-500">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Collaborative Mindset Callout */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-stone-950 to-stone-900 border border-stone-800 flex items-center gap-4 mt-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-stone-300">
                <strong className="text-white">
                  Seamless Cross-Department Synergy:
                </strong>{" "}
                Fostering high-trust relationships between creative European &
                US fashion designers, technical merchandisers, sample masters,
                and quality controllers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
