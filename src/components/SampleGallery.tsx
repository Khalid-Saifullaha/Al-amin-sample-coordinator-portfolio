import React, { useState, useEffect } from "react";
import { CLIENT_DATA, SampleItem } from "../data/portfolioData";
import { SmartImage } from "./SmartImage";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export const SampleGallery: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<SampleItem | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedSample) return;
      if (e.key === "Escape") setSelectedSample(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedSample]);

  const handlePrev = () => {
    if (!selectedSample) return;
    const currentIndex = CLIENT_DATA.samples.findIndex(
      (s) => s.id === selectedSample.id,
    );
    const prevIndex =
      (currentIndex - 1 + CLIENT_DATA.samples.length) %
      CLIENT_DATA.samples.length;
    setSelectedSample(CLIENT_DATA.samples[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedSample) return;
    const currentIndex = CLIENT_DATA.samples.findIndex(
      (s) => s.id === selectedSample.id,
    );
    const nextIndex = (currentIndex + 1) % CLIENT_DATA.samples.length;
    setSelectedSample(CLIENT_DATA.samples[nextIndex]);
  };

  return (
    <section
      id="gallery"
      className="py-16 lg:py-20 bg-stone-950 text-stone-100 border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Work Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            SAMPLE WORKS
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            Garments and textile development samples coordinated by Md. Al Amin.
          </p>
        </div>

        {/* 9-Image Gallery Grid (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_DATA.samples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setSelectedSample(sample)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                <SmartImage
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  imageKey={`sample_${sample.id}`}
                  label={sample.fileName}
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-stone-900/90 text-amber-400 shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-stone-950/80 text-[10px] font-mono text-amber-400 border border-stone-800">
                  {sample.fileName}
                </div>
              </div>

              {/* <div className="p-3.5 flex items-center justify-between text-xs text-stone-300 bg-stone-900">
                <span className="font-medium">{sample.title}</span>
                <span className="text-[11px] font-mono text-stone-500">
                  #{sample.id.toString().padStart(2, "0")}
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedSample && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedSample(null)}
          />

          <div className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-800 bg-stone-950 text-stone-200">
              <span className="text-xs font-mono text-amber-400">
                {selectedSample.fileName}
                {/* — {selectedSample.title} */}
              </span>
              <button
                onClick={() => setSelectedSample(null)}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Area */}
            <div className="relative flex-1 bg-stone-950 flex items-center justify-center p-2 min-h-[300px] overflow-hidden">
              <SmartImage
                src={selectedSample.image}
                alt={selectedSample.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                imageKey={`sample_${selectedSample.id}`}
                label={selectedSample.fileName}
              />
            </div>

            {/* Lightbox Footer Controls */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-stone-800 bg-stone-950 text-xs">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="font-mono text-stone-500">
                {selectedSample.id} of {CLIENT_DATA.samples.length}
              </span>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
