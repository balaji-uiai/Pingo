"use client";

import React, { useState } from "react";
import { aboutData } from "@/data/about";
import { Send, CheckCircle2 } from "lucide-react";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#635BFF]/8 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-lg dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-6 space-y-5">
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>{getInTouch.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
                {getInTouch.heading}
              </h2>

              <div className="space-y-4 text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {getInTouch.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-lg font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                  {getInTouch.closing}
                </p>
              </div>
            </div>

            {/* Right Column: Contact Interaction Form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#101326] border border-[#20C5D8]/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#20C5D8]/15 text-[#20C5D8] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-[#62677D] dark:text-[#B5BAD0]">
                    Our team has received your message and will connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="mt-3 text-xs text-[#635BFF] dark:text-[#20C5D8] hover:underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] space-y-4 shadow-sm"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#171B2E] dark:text-[#FFFFFF] mb-1.5"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] text-[#171B2E] dark:text-[#FFFFFF] placeholder-[#62677D]/60 dark:placeholder-[#B5BAD0]/50 text-sm focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#171B2E] dark:text-[#FFFFFF] mb-1.5"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] text-[#171B2E] dark:text-[#FFFFFF] placeholder-[#62677D]/60 dark:placeholder-[#B5BAD0]/50 text-sm focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#171B2E] dark:text-[#FFFFFF] mb-1.5"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] text-[#171B2E] dark:text-[#FFFFFF] placeholder-[#62677D]/60 dark:placeholder-[#B5BAD0]/50 text-sm focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2E74E6] transition-all duration-200 shadow-md shadow-indigo-900/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
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
