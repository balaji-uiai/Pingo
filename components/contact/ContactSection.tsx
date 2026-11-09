"use client";

import React, { useState } from "react";
import { aboutData } from "@/data/about";
import { Send, MessageCircle, Mail, CheckCircle2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { getInTouch } = aboutData;
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-[#141126]/90 dark:to-[#100D1D]/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-6 space-y-5">
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>{getInTouch.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                {getInTouch.heading}
              </h2>

              <div className="space-y-4 text-base text-slate-600 dark:text-[#D5D0E5] leading-relaxed">
                {getInTouch.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {getInTouch.closing}
                </p>
              </div>
            </div>

            {/* Right Column: Contact Interaction Form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-100/90 dark:bg-white/[0.04] border border-[#B5FF45]/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#B5FF45]/20 text-emerald-600 dark:text-[#B5FF45] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-[#D5D0E5]">
                    Our team has received your message and will connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="mt-3 text-xs text-purple-600 dark:text-violet-400 hover:underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-100/70 dark:bg-[#080711]/60 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] space-y-4"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-700 dark:text-[#D5D0E5] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-700 dark:text-[#D5D0E5] mb-1.5"
                    >
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-700 dark:text-[#D5D0E5] mb-1.5"
                    >
                      How can Pingo help your team?
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Tell us about your customer communication goals..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#782BFF] to-[#4C16B8] hover:from-[#8938FF] hover:to-[#5B1DDE] transition-all duration-300 shadow-md shadow-purple-900/30 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
