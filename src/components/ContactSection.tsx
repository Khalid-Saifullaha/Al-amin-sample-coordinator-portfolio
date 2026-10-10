import React, { useState } from "react";
import {
  Phone,
  Mail,
  Building2,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  Copy,
  Check,
} from "lucide-react";
import { motion } from "motion/react";
import { COORDINATOR_DATA } from "../data/portfolioData";

interface ContactSectionProps {
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const copyToClipboard = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
            Direct Communication & Liaison
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Get in Touch with Md. Al Amin
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            Reach out directly for sample coordination inquiries, tech pack
            reviews, buyer liaison support, or product development opportunities
            at Synergies Sourcing Bangladesh.
          </p>
        </motion.div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Official Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Phone Card */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 hover:border-amber-400/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono">
                      Mobile & WhatsApp
                    </span>
                    <a
                      href={`tel:${COORDINATOR_DATA.contact.phone}`}
                      className="text-lg font-bold font-mono text-white hover:text-amber-400 transition-colors block"
                    >
                      {COORDINATOR_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() =>
                    copyToClipboard(COORDINATOR_DATA.contact.phone, "phone")
                  }
                  className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <a
                  href={`https://wa.me/880${COORDINATOR_DATA.contact.phone.replace(/^0/, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <span className="text-stone-500 font-mono">
                  +880 (Bangladesh)
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 hover:border-amber-400/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5 truncate">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-stone-400 font-mono">
                      Official Work Email
                    </span>
                    <a
                      href={`mailto:${COORDINATOR_DATA.contact.email}`}
                      className="text-sm sm:text-base font-bold font-mono text-white hover:text-amber-400 transition-colors block truncate"
                    >
                      {COORDINATOR_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() =>
                    copyToClipboard(COORDINATOR_DATA.contact.email, "email")
                  }
                  className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 text-xs text-stone-400">
                Liaison response turnaround usually within 2 to 4 business
                hours.
              </div>
            </div>

            {/* Company & Department Details */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-3 text-xs">
              <div className="flex items-start gap-3 text-stone-300">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[12px]">
                    Company
                  </span>
                  <span className="text-stone-100 font-medium">
                    Synergies Sourcing Bangladesh
                  </span>
                  {/* <span className="text-stone-400 block mt-0.5">
                    Dhaka, Bangladesh · Garments Export Hub
                  </span> */}
                </div>
              </div>

              <div className="flex items-start gap-3 text-stone-300 pt-2 border-t border-stone-850">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[12px]">
                    Location
                  </span>
                  <span className="text-stone-200">
                    Dhaka, Bangladesh · Garments Export Hub
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white font-display mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Connect directly regarding garments sample development, pricing,
              or buyer technical follow-ups.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-stone-950 border border-emerald-500/40 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Inquiry Received
                </h4>
                <p className="text-xs text-stone-300 max-w-md mx-auto">
                  Thank you! Your message has been sent to Md. Al Amin (
                  {COORDINATOR_DATA.contact.email}). You can also call directly
                  at{" "}
                  <strong className="text-white font-mono">
                    {COORDINATOR_DATA.contact.phone}
                  </strong>
                  .
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-4 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-900 border border-stone-800 rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      // placeholder="e.g. John Doe / Sourcing Manager"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 text-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      className="w-full bg-stone-950 border border-stone-800 text-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      // placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 text-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1.5">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      // placeholder="+880 1XXX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 text-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your sample requirements, target timeline, or style inquiries..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-stone-950 border border-stone-800 text-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry to Md. Al Amin</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
