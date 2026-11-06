import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us – Pingo",
  description:
    "Get in touch with Pingo. Have questions, suggestions, or ideas? We'd love to hear from you and help your business connect smarter.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      <ContactSection />
    </div>
  );
}

