import React, { useState } from "react";
import { X, Phone, Mail, Building2, Send, CheckCircle2 } from "lucide-react";
import { COORDINATOR_DATA } from "../data/portfolioData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-stone-100">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-800 pb-4 mb-5">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Direct Liaison
            </span>
            <h3 className="text-xl font-bold text-white font-display mt-0.5">
              Contact Md. Al-Amin
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Sample Coordinator · Synergies Sourcing Bangladesh
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Chips */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
          <a
            href={`tel:${COORDINATOR_DATA.contact.phone}`}
            className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-400/40 transition-colors flex items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-stone-500 block">
                Call Directly
              </span>
              <span className="font-mono font-medium text-stone-200">
                {COORDINATOR_DATA.contact.phone}
              </span>
            </div>
          </a>

          <a
            href={`mailto:${COORDINATOR_DATA.contact.email}`}
            className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-400/40 transition-colors flex items-center gap-2.5 truncate"
          >
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-stone-500 block">
                Official Email
              </span>
              <span className="font-mono font-medium text-stone-200 truncate block">
                al-amin@...
              </span>
            </div>
          </a>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-stone-950 border border-emerald-500/40 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-white">Inquiry Forwarded</h4>
            <p className="text-xs text-stone-400">
              Md. Al-Amin has received your message and will reply promptly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold bg-amber-400 text-stone-950 rounded-lg"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-stone-300 font-medium mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sourcing Representative"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 text-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-stone-300 font-medium mb-1">
                Your Email *
              </label>
              <input
                type="email"
                required
                placeholder="representative@brand.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 text-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-stone-300 font-medium mb-1">
                Requirement / Inquiry Details *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Mention target sample style, tech pack status, or fabric development need..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 text-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 mt-1"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
