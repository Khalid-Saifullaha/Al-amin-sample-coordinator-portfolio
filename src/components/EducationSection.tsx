import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
            Academic Background & Ongoing Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Education & Academic Credentials
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            Consistently achieving high academic results (GPA 4.38 in HSC and GPA 4.32 in SSC) while currently continuing 3rd-year Bachelor of Arts degree studies in parallel with full-time professional sample coordination.
          </p>
        </div>

        {/* 3-in-a-Row Educational Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((item, idx) => {
            const isOngoing = item.year.includes('Ongoing');

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 flex flex-col justify-between space-y-5 border transition-all ${
                  isOngoing
                    ? 'bg-stone-900 border-amber-500/40 shadow-lg relative overflow-hidden'
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                {/* Active Indicator for Ongoing Degree */}
                {isOngoing && (
                  <div className="absolute top-0 right-0 bg-amber-400 text-stone-950 text-[10px] font-mono font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Running · 3rd Year
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isOngoing
                        ? 'bg-amber-400/10 border border-amber-400/30 text-amber-400'
                        : 'bg-stone-800 text-stone-300'
                    }`}>
                      {isOngoing ? <BookOpen className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                    </div>

                    <div>
                      <span className="text-xs font-mono text-stone-400 block">{item.qualification}</span>
                      <h3 className="text-lg font-bold text-white font-display leading-tight">{item.degreeName}</h3>
                    </div>
                  </div>

                  {/* Result & Timeline row */}
                  <div className="pt-2 border-t border-stone-800/80 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Year:</span>
                      <span className="font-mono text-stone-200 font-semibold">{item.year}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Result:</span>
                      <span className={`font-mono font-bold ${isOngoing ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {item.result}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Level:</span>
                      <span className="text-stone-300">{item.institutionLevel}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Status footnote */}
                <div className="pt-3 border-t border-stone-800 text-[11px] flex items-center gap-1.5 text-stone-400 font-medium">
                  {isOngoing ? (
                    <>
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-300">Currently Continuing Studies</span>
                    </>
                  ) : (
                    <>
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-stone-300">Official Board Verified</span>
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Commitment to continuous improvement callout */}
        <div className="mt-10 p-5 rounded-xl bg-stone-900 border border-stone-800 flex items-center gap-4 text-xs sm:text-sm text-stone-300">
          <Award className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            <strong className="text-white">Growth Mindset:</strong> Combining formal higher educational foundations with real-world garment export operations at Synergies Sourcing Bangladesh to deliver high-standard documentation, communication, and technical precision.
          </span>
        </div>

      </div>
    </section>
  );
};
