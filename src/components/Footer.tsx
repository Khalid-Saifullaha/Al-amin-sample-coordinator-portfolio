import React, { useState } from "react";
import {
  Mail,
  Phone,
  Heart,
  Code2,
  Globe,
  Sparkles,
  Send,
  Check,
} from "lucide-react";
import { COORDINATOR_DATA, DEVELOPER_CREDIT } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyDevEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_CREDIT.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Primary Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Coordinator Brand & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-display text-xl font-bold">
              <span className="w-3 h-3 bg-amber-400 rounded-sm"></span>
              <span>MD. AL AMIN</span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Sample Coordinator at{" "}
              <strong className="text-stone-200">
                Synergies Sourcing Bangladesh
              </strong>{" "}
              (Design & Product Development Dept) since February 2022. Committed
              to sample development, buyer requirements, and on-time delivery
              across international apparel markets.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1 font-mono">
              <div>
                Phone:{" "}
                <a
                  href={`tel:${COORDINATOR_DATA.contact.phone}`}
                  className="text-stone-200 hover:text-amber-400"
                >
                  {COORDINATOR_DATA.contact.phone}
                </a>
              </div>
              <div>
                Email:{" "}
                <a
                  href={`mailto:${COORDINATOR_DATA.contact.email}`}
                  className="text-stone-200 hover:text-amber-400"
                >
                  {COORDINATOR_DATA.contact.email}
                </a>
              </div>
              <div>Location: {COORDINATOR_DATA.contact.location}</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About & Synergies Sourcing
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  className="hover:text-amber-400 transition-colors"
                >
                  Career Highlights
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-amber-400 transition-colors"
                >
                  Sample Works (9 Case Studies)
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  className="hover:text-amber-400 transition-colors"
                >
                  Critical Path & SOP Workflow
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-amber-400 transition-colors"
                >
                  Education & Credentials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Information
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Synergies Sourcing Overview */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Sourcing Excellence
            </h4>
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs space-y-2">
              <span className="text-amber-400 font-mono font-medium block">
                Synergies Sourcing Bangladesh
              </span>
              <p className="text-stone-400 leading-relaxed text-[11px]">
                Connecting global retailers with certified RMG manufacturing
                units across Bangladesh, maintaining strict ethical, social, and
                technical compliance.
              </p>
              <div className="pt-2 text-[10px] text-stone-500 font-mono">
                Employment: 1 Feb 2022 – Present (4+ Years Active)
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Developer Attribution Section (Required by User for Khalid Saifullah) */}
        <div className="mt-14 pt-10 border-t border-stone-850">
          <div className="rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-850 border border-amber-500/20 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            {/* Developer Identity & Bengali Attribution */}
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono">
                <Code2 className="w-3.5 h-3.5" />
                <span>Crafted & Developed with Precision</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                ওয়েবসাইটটি তৈরি করেছেন:{" "}
                <span className="text-amber-400 font-extrabold">
                  {DEVELOPER_CREDIT.bengaliName}
                </span>
              </h3>

              <p className="text-xs text-stone-400">
                Designed & Built by{" "}
                <strong className="text-stone-200">
                  {DEVELOPER_CREDIT.name}
                </strong>{" "}
                · Frontend & Web Engineer
              </p>
            </div>

            {/* Developer Contact & Social Media Reach Channels */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5">
              {/* Direct Email with copy */}
              <button
                onClick={copyDevEmail}
                className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs font-mono flex items-center gap-1.5 transition-colors border border-stone-700"
                title="Click to copy Khalid Saifullah's email"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{DEVELOPER_CREDIT.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : null}
              </button>

              {/* Direct WhatsApp Reach */}
              <a
                href={DEVELOPER_CREDIT.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-medium flex items-center gap-1.5 transition-colors border border-emerald-500/30"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* LinkedIn Icon */}
              <a
                href={DEVELOPER_CREDIT.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-300 hover:text-white border border-stone-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub Icon */}
              <a
                href={DEVELOPER_CREDIT.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-300 hover:text-white border border-stone-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href={DEVELOPER_CREDIT.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-300 hover:text-white border border-stone-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-stone-900 py-6 text-center text-xs text-stone-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} Md. Al Amin · Sample Coordinator
            Portfolio. Synergies Sourcing Bangladesh.
          </div>
          <div>
            Portfolio Engineered by{" "}
            <span className="text-stone-300">Khalid Saifullah</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
