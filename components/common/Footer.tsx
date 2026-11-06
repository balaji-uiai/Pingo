import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/footer";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#080711] border-t border-white/[0.06] pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#782BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4C16B8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group transition-transform duration-200"
              aria-label="Pingo Home"
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                <Image
                  src="/images/pingo-p.png"
                  alt="Pingo Mark"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center">
                Pingo
                <span className="text-[#B5FF45] ml-0.5 text-2xl font-black">.</span>
              </span>
            </Link>

            <p className="text-sm text-[#D5D0E5] leading-relaxed max-w-sm">
              {footerData.brand.tagline}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#D5D0E5]/60">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B5FF45] animate-pulse" />
              <span>AI Chat & Customer Management Platform</span>
            </div>
          </div>

          {/* Links Columns */}
          {footerData.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#D5D0E5] hover:text-white transition-colors duration-150 inline-block py-0.5 hover:translate-x-0.5 transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Subtle Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D5D0E5]/70">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors">Privacy First</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Enterprise Ready</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">UIAI Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

