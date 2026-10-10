import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { COORDINATOR_DATA, EDUCATION_DATA, SAMPLE_PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-white text-stone-900 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[94vh]">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-stone-900 text-white shrink-0 print:hidden">
          <div className="text-xs font-mono text-amber-400">
            OFFICIAL CURRICULUM VITAE · MD. AL AMIN
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors ml-2"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 bg-white text-stone-900 font-sans print:p-0 print:m-0">
          
          {/* Header */}
          <div className="border-b-2 border-stone-900 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-display">
                {COORDINATOR_DATA.name}
              </h1>
              <p className="text-sm sm:text-base font-bold text-amber-800 uppercase tracking-wider mt-1">
                {COORDINATOR_DATA.designation} · Garments & Textile Industry
              </p>
              <p className="text-xs text-stone-600 mt-1">
                {COORDINATOR_DATA.company} · {COORDINATOR_DATA.department}
              </p>
            </div>

            {/* Contact details list */}
            <div className="text-xs space-y-1 text-stone-700 font-mono text-left sm:text-right shrink-0">
              <div>Phone: <strong className="text-stone-950">{COORDINATOR_DATA.contact.phone}</strong></div>
              <div>Email: <strong className="text-stone-950">{COORDINATOR_DATA.contact.email}</strong></div>
              <div>Location: {COORDINATOR_DATA.contact.location}</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Results-driven Sample Coordinator with over 4 years of continuous experience (since 1 February 2022) at Synergies Sourcing Bangladesh. Specialized in bridging international apparel buyers, product development teams, sample pattern rooms, fabric mills, and manufacturing lines. Dedicated to precision execution of buyer requirements, rapid sample turnaround, and flawless on-time delivery across knit, woven, and washed garment collections.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2 font-mono">
              Core Competencies & Key Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-800">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Sample Development</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Buyer Requirements</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Sample Follow-up</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Cross-Team Coordination</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>On-time Delivery & Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Tech Pack Analysis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Fabric & Lab Dip Sourcing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Attention to Detail</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Teamwork & Continuous Improvement</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3 font-mono">
              Work Experience
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-950">
                    Sample Coordinator — Design & Product Development
                  </h3>
                  <span className="text-xs font-mono text-stone-600">
                    1 February 2022 – Present (4+ Years)
                  </span>
                </div>
                <div className="text-xs font-semibold text-amber-800 mb-2">
                  Synergies Sourcing Bangladesh · Dhaka, Bangladesh
                </div>

                <ul className="space-y-1.5 text-xs text-stone-700 list-disc list-inside">
                  <li>Directly coordinate prototype, fit, salesman (SMS), and pre-production (PP) samples with sample rooms and factory teams.</li>
                  <li>Translate international buyer tech packs, fit comments, and grading specs into actionable pattern cutting and sewing floor directives.</li>
                  <li>Follow up fabric lab dips, knit/weave trials, rib collar matching, strike-off prints, and wash effect standards.</li>
                  <li>Maintain 98.5% on-time sample handover for DHL/FedEx courier dispatch to overseas buyer design studios.</li>
                  <li>Troubleshoot technical hold items and pattern revisions, ensuring continuous sample room flow.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3 font-mono">
              Education & Academic Credentials
            </h2>

            <div className="space-y-2.5">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border-b border-stone-100 pb-2">
                  <div>
                    <strong className="text-stone-950">{edu.degreeName} ({edu.qualification})</strong>
                    <span className="text-stone-600 block sm:inline sm:ml-2">· {edu.institutionLevel}</span>
                  </div>
                  <div className="font-mono text-stone-700 mt-0.5 sm:mt-0">
                    Year: <strong className="text-stone-950">{edu.year}</strong> | Result: <strong className="text-amber-800">{edu.result}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Sample Projects Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2 font-mono">
              Representative Sample Projects Coordinated
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-700">
              {SAMPLE_PROJECTS.slice(0, 6).map((proj) => (
                <div key={proj.id} className="p-2 rounded bg-stone-50 border border-stone-200">
                  <div className="font-semibold text-stone-950 font-mono">{proj.styleCode}: {proj.title}</div>
                  <div className="text-stone-600 mt-0.5">{proj.category} · {proj.fabricSpecs.gsmWeight}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
