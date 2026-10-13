import React, { useState, useEffect, useRef } from "react";
import { CLIENT_DATA, SampleItem } from "../data/portfolioData";
import { SmartImage } from "./SmartImage";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion } from "motion/react";

export const SampleGallery: React.FC = () => {
  // শুধুমাত্র ৩টি ইমেজ ফিল্টার করে নেওয়া হলো
  const displaySamples = CLIENT_DATA.samples.slice(0, 3);

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

  // Mobile Auto-slide behavior
  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      if (!mobileSliderRef.current) return;
      const nextIndex = (activeMobileIndex + 1) % displaySamples.length;
      scrollToMobileIndex(nextIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeMobileIndex, isInteracting]);

  const scrollToMobileIndex = (index: number) => {
    if (!mobileSliderRef.current) return;
    const container = mobileSliderRef.current;
    const cardWidth = container.offsetWidth * 0.85;
    const targetScroll = index * (cardWidth + 16);
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
    if (index >= 0 && index < displaySamples.length) {
      setActiveMobileIndex(index);
    }
  };

  const handlePrev = () => {
    if (!selectedSample) return;
    const currentIndex = displaySamples.findIndex(
      (s) => s.id === selectedSample.id,
    );
    const prevIndex =
      (currentIndex - 1 + displaySamples.length) % displaySamples.length;
    setSelectedSample(displaySamples[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedSample) return;
    const currentIndex = displaySamples.findIndex(
      (s) => s.id === selectedSample.id,
    );
    const nextIndex = (currentIndex + 1) % displaySamples.length;
    setSelectedSample(displaySamples[nextIndex]);
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
            Garments and textile development samples coordinated by Md. Al-Amin.
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* 1. MOBILE VIEW ONLY: Touch-Friendly Auto Slider */}
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
            {displaySamples.map((sample) => (
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
            <div className="flex items-center gap-2">
              {displaySamples.map((_, idx) => (
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
            <div className="text-[11px] font-mono text-stone-400">
              <span className="text-amber-400 font-bold">
                {activeMobileIndex + 1}
              </span>
              {" / "}
              <span>{displaySamples.length}</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. DESKTOP VIEW ONLY: Unique Bento Box Layout (1 Large, 2 Small) */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-12 md:grid-rows-2 gap-4 lg:gap-6 md:h-[500px] lg:h-[600px]">
          {displaySamples.map((sample, idx) => {
            // প্রথম ইমেজটি গ্রিডে বড় জায়গা নিবে
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 1.0,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelectedSample(sample)}
                className={`group cursor-pointer rounded-2xl lg:rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-500/50 shadow-md hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 relative
                  ${isFeatured ? "md:col-span-8 md:row-span-2" : "md:col-span-4 md:row-span-1"}
                `}
              >
                <div className="absolute inset-0 w-full h-full bg-stone-950">
                  <SmartImage
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    imageKey={`sample_${sample.id}`}
                    label={sample.fileName}
                  />

                  {/* Gradient Overlay for better text visibility */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
                  />

                  {/* Hover icon */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="p-3 rounded-full bg-stone-950/80 backdrop-blur-sm text-amber-400 shadow-xl border border-stone-700/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Badge & Title */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-xs font-mono text-amber-400 border border-stone-700/50">
                      {sample.fileName}
                    </div>
                  </div>

                  {isFeatured && (
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-md">
                        {sample.title}
                      </h3>
                      <div className="h-1 w-12 bg-amber-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal (আগের মতোই রাখা হয়েছে) */}
      {selectedSample && (
        <div className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedSample(null)}
          />

          <div className="relative max-w-5xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-800 bg-stone-950 text-stone-200">
              <span className="text-sm font-mono text-amber-400">
                {selectedSample.fileName}
              </span>
              <button
                onClick={() => setSelectedSample(null)}
                className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 bg-stone-950 flex items-center justify-center p-4 min-h-[400px] overflow-hidden">
              <SmartImage
                src={selectedSample.image}
                alt={selectedSample.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-md"
                imageKey={`sample_lb_${selectedSample.id}`}
                label={selectedSample.fileName}
              />
            </div>

            <div className="flex items-center justify-between px-5 py-4 border-t border-stone-800 bg-stone-950 text-sm">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="font-mono text-stone-400 flex items-center gap-2">
                <span className="text-amber-400">
                  {displaySamples.findIndex((s) => s.id === selectedSample.id) +
                    1}
                </span>
                <span>/</span>
                <span>{displaySamples.length}</span>
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-all"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
