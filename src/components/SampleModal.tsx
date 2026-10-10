import React, { useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  FileText,
  Layers,
  Tag,
  ExternalLink,
} from "lucide-react";
import { SampleProject } from "../data/portfolioData";
import { SmartImage } from "./SmartImage";

interface SampleModalProps {
  project: SampleProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const SampleModal: React.FC<SampleModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/90 text-stone-100 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-amber-400 font-bold text-xs">
              SPECIMEN #{project.id.toString().padStart(2, "0")}
            </span>
            <span className="text-stone-600">/</span>
            <span className="text-xs text-stone-300 font-mono">
              {project.styleCode}
            </span>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <span className="text-xs text-stone-400 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider bg-stone-850 text-amber-300 border border-stone-750">
              {project.status}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Grid: Visual Specimen & Primary Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual Specimen Container */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden border border-stone-800 bg-stone-950 shadow-inner">
              <div className="aspect-[4/3] sm:aspect-[16/10] relative">
                <SmartImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-stone-950"
                  type="sample"
                  sampleId={project.id}
                  title={project.title}
                  category={project.category}
                />
              </div>

              {/* Image Footer Caption */}
              <div className="p-3 bg-stone-950 border-t border-stone-850 text-xs text-stone-400 flex flex-wrap items-center justify-between gap-2 font-mono">
                <span>File: {project.imageFileName}</span>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer text-[11px] text-amber-400 hover:text-amber-300 font-sans font-medium px-2 py-1 rounded bg-stone-900 border border-stone-800 hover:border-amber-400/40 transition-colors">
                    <span>Upload / Replace Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            if (event.target?.result) {
                              localStorage.setItem(
                                `custom_img_sample_${project.id}`,
                                event.target.result as string,
                              );
                              window.location.reload();
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  <span className="text-stone-500 hidden sm:inline">·</span>
                  <span className="text-stone-400 hidden sm:inline">
                    Synergies Sourcing
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Spec Card */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white font-display leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-amber-400 font-mono mt-1">
                  {project.clientMarket} · {project.season}
                </p>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                {project.summary}
              </p>

              {/* Fabric Specs Box */}
              <div className="bg-stone-950 border border-stone-800 rounded-xl p-4 space-y-2.5 text-xs">
                <h4 className="font-mono text-[11px] font-semibold text-stone-200 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-stone-850">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Fabric Specifications</span>
                </h4>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-stone-500 block">Composition:</span>
                    <span className="text-stone-200 font-medium">
                      {project.fabricSpecs.composition}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Weight:</span>
                    <span className="text-stone-200 font-mono">
                      {project.fabricSpecs.gsmWeight}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Knit / Weave:</span>
                    <span className="text-stone-200">
                      {project.fabricSpecs.knitWeave}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">
                      Wash Treatment:
                    </span>
                    <span className="text-stone-200">
                      {project.fabricSpecs.washTreatment}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tag List */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-stone-400 bg-stone-800/80 border border-stone-750"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coordination Details & Buyer Comments Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-800">
            {/* Coordination Responsibilities */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-mono font-semibold text-stone-200 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Coordinator Actions & Execution</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                {project.coordinationHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Verification Note */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-mono font-semibold text-stone-200 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Buyer QC & Technical Sign-Off</span>
              </h4>
              <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-xs text-stone-300 italic">
                "{project.techComments}"
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono pt-1">
                <span>Verified by Sample Room QC</span>
                <span className="text-emerald-400">STATUS: VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar with Prev / Next Navigation */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-stone-800 bg-stone-950 text-stone-300 shrink-0">
          <button
            onClick={onPrev}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Specimen</span>
          </button>

          <span className="text-xs font-mono text-stone-500">
            {project.id} of 9
          </span>

          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <span>Next Specimen</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
