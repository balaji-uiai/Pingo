"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import FeaturesDropdown from "./FeaturesDropdown";
import ThemeToggle from "./ThemeToggle";
import { navigationItems, navbarCta } from "@/data/navigation";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#080711]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.06] py-3.5 shadow-lg shadow-purple-900/5 dark:shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Pingo Home"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
            <Image
              src="/images/pingo-p.png"
              alt="Pingo Mark"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center">
            Pingo
            <span className="text-[#B5FF45] ml-0.5 text-2xl font-black">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navigationItems.map((item) => {
            if (item.isDropdown) {
              return (
                <FeaturesDropdown
                  key={item.label}
                  items={item.dropdownItems}
                />
              );
            }

            const isActive = item.href === pathname;

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className={`text-base font-normal transition-colors duration-200 ${
                  isActive
                    ? "text-slate-900 dark:text-white font-medium relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#782BFF] after:rounded-full"
                    : "text-slate-600 hover:text-slate-900 dark:text-[#D5D0E5] dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Area: Theme Toggle & Get Started Button */}
        <div className="hidden md:flex items-center gap-3.5">
          {/* Theme Toggle - Placed immediately before the Get Started button */}
          <ThemeToggle />

          <Link
            href={navbarCta.href}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#782BFF] to-[#5118BD] border border-white/20 shadow-[0_0_20px_rgba(120,43,255,0.45)] hover:shadow-[0_0_28px_rgba(120,43,255,0.7)] hover:from-[#8938FF] hover:to-[#5E1CD8] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>{navbarCta.label}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Controls: Theme Toggle & Hamburger */}
        <div className="flex md:hidden items-center gap-2.5">
          <ThemeToggle />

          <Link
            href={navbarCta.href}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-[#782BFF] border border-white/10"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-xl bg-slate-200/60 dark:bg-white/[0.05] border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-[#D5D0E5] hover:text-slate-950 dark:hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-900 dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 mt-3 bg-white/95 dark:bg-[#080711]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-2xl space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="py-1">
                    <FeaturesDropdown
                      items={item.dropdownItems}
                      isMobile={true}
                      onItemSelect={() => setMobileMenuOpen(false)}
                    />
                  </div>
                );
              }

              const isActive = item.href === pathname;

              return (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    isActive ? "text-slate-900 dark:text-white font-semibold" : "text-slate-600 hover:text-slate-900 dark:text-[#D5D0E5] dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10">
            <Link
              href={navbarCta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#782BFF] to-[#4C16B8] shadow-lg shadow-purple-900/30"
            >
              <span>{navbarCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
