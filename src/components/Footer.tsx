import React from "react";
import { ArrowUp, Phone, Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export const personalInfo = {
  name: "MD. AL AMIN",
  role: "SAMPLE COORDINATOR",
  industry: "Garments & Textile Industry",
  company: "Synergies Sourcing Bangladesh",
  department: "Design & Product Development",
  employmentPeriod: "1 February 2022 – Present",
  phone: "01902123875",
  email: "al-amin@synergiesbangladesh",
  tagline:
    "Sample Development • Buyer Requirements • Sample Follow-up • Coordination • On-time Delivery",
};

/**
 * Footer Component
 * Matching Header wordmark branding, dark aesthetic, and developer credit badge.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Footer Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800"
        >
          {/* Logo & Name (Header Wordmark Style) */}
          <div className="space-y-1.5">
            <a
              href="/"
              onClick={handleScrollToTop}
              className="text-lg sm:text-xl font-bold tracking-tight text-stone-100 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm"></span>
              <span>{personalInfo.name}</span>
            </a>
            <div className="pl-4.5">
              <p className="text-xs font-semibold text-amber-400/90 font-mono">
                {personalInfo.role} · {personalInfo.industry}
              </p>
              <p className="text-xs text-stone-400">{personalInfo.company}</p>
            </div>
          </div>

          {/* Quick nav links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-stone-400">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="hover:text-amber-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#highlights"
              onClick={(e) => handleNavClick(e, "#highlights")}
              className="hover:text-amber-400 transition-colors"
            >
              Highlights
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "#gallery")}
              className="hover:text-amber-400 transition-colors"
            >
              Sample Works
            </a>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, "#education")}
              className="hover:text-amber-400 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-amber-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Contact & Scroll Top */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-850 hover:border-amber-400/40 text-xs font-mono font-bold text-stone-200 border border-stone-800 transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{personalInfo.phone}</span>
            </a>

            <button
              type="button"
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-850 hover:border-amber-400/40 text-stone-400 hover:text-amber-400 border border-stone-800 transition-all shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Legal & Developer Credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400"
        >
          <div>
            © {currentYear} {personalInfo.name}. All Rights Reserved.
          </div>

          {/* Highlighted Credit Pill with External Icon */}
          <div className="flex items-center gap-2">
            <span className="text-stone-400">Built by</span>
            <a
              href="https://github.com/Khalid-Saifullaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Khalid Saifullah GitHub Profile"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 hover:bg-amber-400 hover:text-stone-950 font-semibold font-mono text-[11px] transition-all duration-200 shadow-sm shadow-amber-500/10 hover:shadow-amber-400/25 group"
            >
              <Github className="w-3.5 h-3.5 transition-transform group-hover:scale-110 shrink-0" />
              <span>Khalid Saifullah</span>
              <ExternalLink className="w-3 h-3 opacity-75 group-hover:opacity-100 shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
