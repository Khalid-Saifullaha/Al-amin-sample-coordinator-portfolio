import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SampleGallery } from "./components/SampleGallery";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";
import { ContactModal } from "./components/ContactModal";
import { CareerHighlights } from "./components/CareerHighlights";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* 3-Zone Sticky Navigation */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split Screen Hero with 4-Column KPI strip */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Refined Dark Career Highlights */}
        <CareerHighlights />

        {/* Curated Sample Works (The 9 Real Case Studies) */}
        <SampleGallery />

        {/* Education Credentials */}
        <EducationSection />

        {/* Direct Contact & Liaison Form */}
        <ContactSection />
      </main>

      {/* Footer with Distinct Developer Credit for Khalid Saifullah */}
      <Footer />

      {/* Printable Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
