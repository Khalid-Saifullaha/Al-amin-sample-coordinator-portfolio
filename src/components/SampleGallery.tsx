import React, { useState, useEffect, useRef } from "react";
import { CLIENT_DATA, SampleItem } from "../data/portfolioData";
import { SmartImage } from "./SmartImage";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion } from "motion/react";

export const SampleGallery: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<SampleItem | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const mobileSliderRef = useRef<HTMLDivElement>(null);

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

  // Mobile Auto-slide behavior (pauses on user touch)
  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      if (!mobileSliderRef.current) return;
      const nextIndex = (activeMobileIndex + 1) % CLIENT_DATA.samples.length;
      scrollToMobileIndex(nextIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeMobileIndex, isInteracting]);

  const scrollToMobileIndex = (index: number) => {
    if (!mobileSliderRef.current) return;
    const container = mobileSliderRef.current;
    const cardWidth = container.offsetWidth * 0.85; // matches 85% width card
    const targetScroll = index * (cardWidth + 16); // 16px gap
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setActiveMobileIndex(index);
  };

  const handleMobileScroll = () => {
    if (!mobileSliderRef.current) return;
    const container = mobileSliderRef.current;
    const cardWidth = container.offsetWidth * 0.85;
    const index = Math.round(container.scrollLeft / (cardWidth + 16));
    if (index >= 0 && index < CLIENT_DATA.samples.length) {
      setActiveMobileIndex(index);
    }
  };

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
      className="py-14 sm:py-16 lg:py-20 bg-stone-950 text-stone-100 border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-8 sm:mb-10"
        >
          <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Work Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            SAMPLE WORKS
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-2">
            Garments and textile development samples coordinated by Md. Al Amin.
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* 1. MOBILE VIEW ONLY: Touch-Friendly Auto Slider (Hidden on Desktop) */}
        {/* ============================================================== */}
        <div className="block md:hidden">
          <div
            ref={mobileSliderRef}
            onScroll={handleMobileScroll}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setTimeout(() => setIsInteracting(false), 2000)}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CLIENT_DATA.samples.map((sample) => (
              <div
                key={sample.id}
                onClick={() => setSelectedSample(sample)}
                className="w-[85vw] flex-shrink-0 snap-center rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 active:scale-[0.99] transition-transform shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                  <SmartImage
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover"
                    imageKey={`sample_${sample.id}`}
                    label={sample.fileName}
                  />

                  {/* Identification Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-stone-950/85 backdrop-blur-md text-[10px] font-mono text-amber-400 border border-stone-800">
                    {sample.fileName}
                  </div>

                  {/* Tap to zoom hint */}
                  <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-stone-950/80 text-amber-400 border border-stone-800/80">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Dots & Counter */}
          <div className="flex items-center justify-between pt-3 px-1 text-xs">
            {/* Clear, High-Contrast Dots */}
            <div className="flex items-center gap-2">
              {CLIENT_DATA.samples.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToMobileIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeMobileIndex === idx
                      ? "w-6 bg-amber-400 shadow-sm shadow-amber-400/40"
                      : "w-2 bg-stone-500/50 hover:bg-stone-400 border border-stone-600/30"
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-[11px] font-mono text-stone-400">
              <span className="text-amber-400 font-bold">
                {activeMobileIndex + 1}
              </span>
              {" / "}
              <span>{CLIENT_DATA.samples.length}</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. DESKTOP VIEW ONLY: 3-Column Grid (Hidden on Mobile)         */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {CLIENT_DATA.samples.map((sample, idx) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.0,
                delay: (idx % 3) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedSample(sample)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-400 shadow-md hover:shadow-xl flex flex-col transition-colors duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                <SmartImage
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  imageKey={`sample_${sample.id}`}
                  label={sample.fileName}
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-stone-900/90 text-amber-400 shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-stone-950/80 text-[10px] font-mono text-amber-400 border border-stone-800">
                  {sample.fileName}
                </div>
              </div>
            </motion.div>
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
