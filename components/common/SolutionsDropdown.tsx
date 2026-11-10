"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Headphones,
  Compass,
  Globe,
  BookOpen,
  Users,
  SlidersHorizontal,
  Sparkles,
  LucideIcon,
} from "lucide-react";

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  href?: string;
}

interface SolutionsDropdownProps {
  items?: SolutionItem[];
  isMobile?: boolean;
  onItemSelect?: () => void;
}

export const defaultSolutionItems: SolutionItem[] = [
  {
    id: "customer-support",
    title: "Customer Support",
    description: "Fast, reliable support across every customer touchpoint.",
    iconName: "Headphones",
    href: "/solutions/customer-support",
  },
  {
    id: "product-service-guidance",
    title: "Product & Service Guidance",
    description: "Accurate answers, onboarding, and smart recommendations.",
    iconName: "Compass",
    href: "/solutions/product-service-guidance",
  },
  {
    id: "website-ai-assistant",
    title: "Website AI Assistant",
    description: "Engage visitors and resolve questions in real time.",
    iconName: "Globe",
    href: "/solutions/website-ai-assistant",
  },
  {
    id: "business-knowledge-access",
    title: "Business Knowledge Access",
    description: "Instant answers from unified business docs and data.",
    iconName: "BookOpen",
    href: "/solutions/business-knowledge-access",
  },
  {
    id: "team-assistance",
    title: "Team Assistance",
    description: "Empower internal teams with shared AI context and workflows.",
    iconName: "Users",
    href: "/solutions/team-assistance",
  },
  {
    id: "support-management",
    title: "Support Management",
    description: "Organize requests, track escalations, and monitor SLAs.",
    iconName: "SlidersHorizontal",
    href: "/solutions/support-management",
  },
];

const iconMap: Record<string, LucideIcon> = {
  Headphones,
  Compass,
  Globe,
  BookOpen,
  Users,
  SlidersHorizontal,
};

const itemStyleMap: Record<
  string,
  {
    badge: string;
    hoverBorder: string;
  }
> = {
  "customer-support": {
    badge: "bg-[#635BFF]/10 dark:bg-[#635BFF]/20 border-[#635BFF]/25 text-[#635BFF] dark:text-[#A5A0FF]",
    hoverBorder: "hover:border-[#635BFF]/30",
  },
  "product-service-guidance": {
    badge: "bg-[#3984FF]/10 dark:bg-[#3984FF]/20 border-[#3984FF]/25 text-[#3984FF] dark:text-[#7EB5FF]",
    hoverBorder: "hover:border-[#3984FF]/30",
  },
  "website-ai-assistant": {
    badge: "bg-[#20C5D8]/10 dark:bg-[#20C5D8]/20 border-[#20C5D8]/25 text-[#0EA5B7] dark:text-[#20C5D8]",
    hoverBorder: "hover:border-[#20C5D8]/30",
  },
  "business-knowledge-access": {
    badge: "bg-[#635BFF]/10 dark:bg-[#635BFF]/20 border-[#635BFF]/25 text-[#635BFF] dark:text-[#A5A0FF]",
    hoverBorder: "hover:border-[#635BFF]/30",
  },
  "team-assistance": {
    badge: "bg-[#3984FF]/10 dark:bg-[#3984FF]/20 border-[#3984FF]/25 text-[#3984FF] dark:text-[#7EB5FF]",
    hoverBorder: "hover:border-[#3984FF]/30",
  },
  "support-management": {
    badge: "bg-[#20C5D8]/10 dark:bg-[#20C5D8]/20 border-[#20C5D8]/25 text-[#0EA5B7] dark:text-[#20C5D8]",
    hoverBorder: "hover:border-[#20C5D8]/30",
  },
};

export const SolutionsDropdown: React.FC<SolutionsDropdownProps> = ({
  items = defaultSolutionItems,
  isMobile = false,
  onItemSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  const isSolutionsActive = pathname?.startsWith("/solutions") || false;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, [pathname]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setFocusedIndex(-1);
      triggerRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prev) => (prev + 1) % items.length);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(items.length - 1);
      } else {
        setFocusedIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
  };

  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  // ========================================================
  // Mobile Accordion View
  // ========================================================
  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between w-full py-2">
          <Link
            href="/solutions/customer-support"
            onClick={() => {
              setIsOpen(false);
              if (onItemSelect) onItemSelect();
            }}
            className={`text-base font-medium transition-colors ${
              isSolutionsActive
                ? "text-[#171B2E] dark:text-[#FFFFFF] font-semibold"
                : "text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF]"
            }`}
          >
            Solutions
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-[#62677D] dark:text-[#B5BAD0] hover:text-[#171B2E] dark:hover:text-white transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle Solutions dropdown"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180 text-[#635BFF]" : "text-[#62677D] dark:text-[#B5BAD0]"
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="pl-2 pr-1 py-2 space-y-1 bg-[#F5F6FA] dark:bg-[#101326] rounded-xl mt-1 border border-[#E5E7F0] dark:border-[#292D45] animate-fadeIn max-h-[60vh] overflow-y-auto no-scrollbar">
            {items.map((item) => {
              const IconComponent =
                item.iconName && iconMap[item.iconName]
                  ? iconMap[item.iconName]
                  : Sparkles;
              const itemHref = item.href || `/solutions/${item.id}`;
              const style = itemStyleMap[item.id] || {
                badge: "bg-[#635BFF]/10 text-[#635BFF] border-[#635BFF]/25",
                hoverBorder: "hover:border-[#635BFF]/30",
              };
              const isItemActive = pathname === itemHref;

              return (
                <Link
                  key={item.id}
                  href={itemHref}
                  onClick={() => {
                    setIsOpen(false);
                    if (onItemSelect) onItemSelect();
                  }}
                  className={`flex items-center gap-3 w-full py-2 px-2 text-left rounded-lg transition-colors ${
                    isItemActive
                      ? "bg-white dark:bg-[#171A2E] text-[#635BFF] dark:text-white"
                      : "hover:bg-white dark:hover:bg-[#171A2E] text-[#171B2E] dark:text-[#FFFFFF]"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-md border flex items-center justify-center flex-shrink-0 ${style.badge}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-[#171B2E] dark:text-[#FFFFFF] truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#62677D] dark:text-[#B5BAD0] line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // ========================================================
  // Desktop 2-Column Dropdown
  // ========================================================
  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setFocusedIndex(-1);
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-0.5">
        <Link
          href="/solutions/customer-support"
          onClick={() => {
            setIsOpen(false);
            if (onItemSelect) onItemSelect();
          }}
          className={`py-2 px-1 text-base font-normal transition-colors duration-200 cursor-pointer ${
            isSolutionsActive
              ? "text-[#171B2E] dark:text-[#FFFFFF] font-medium relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#635BFF] after:rounded-full"
              : isOpen
              ? "text-[#171B2E] dark:text-[#FFFFFF] font-medium"
              : "text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF]"
          }`}
        >
          Solutions
        </Link>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-1 rounded-md text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF] transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle Solutions dropdown"
        >
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[#635BFF]" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu Container (2 Columns) */}
      <div
        className={`absolute -left-20 lg:-left-28 top-full pt-2 w-[540px] lg:w-[580px] z-50 transition-all duration-200 transform origin-top-left ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="p-3.5 rounded-2xl bg-white dark:bg-[#100D1E] border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          {/* Header Tagline */}
          <div className="px-3 pt-1 pb-2 flex items-center justify-between border-b border-[#E5E7F0] dark:border-white/[0.06] mb-2.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#635BFF]" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#635BFF] dark:text-[#A5A0FF]">
                Tailored Solutions
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#5E647E] dark:text-[#A5A1BF]/70">
              6 Use Cases
            </span>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-2 gap-1.5">
            {items.map((item, index) => {
              const IconComponent =
                item.iconName && iconMap[item.iconName]
                  ? iconMap[item.iconName]
                  : Sparkles;
              const itemHref = item.href || `/solutions/${item.id}`;
              const style = itemStyleMap[item.id] || {
                badge: "bg-[#635BFF]/10 text-[#635BFF] border-[#635BFF]/25",
                hoverBorder: "hover:border-[#635BFF]/30",
              };
              const isItemActive = pathname === itemHref;

              return (
                <Link
                  key={item.id}
                  href={itemHref}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => {
                    setIsOpen(false);
                    if (onItemSelect) onItemSelect();
                  }}
                  className={`flex items-start gap-3 p-2.5 rounded-xl text-left transition-all duration-150 group cursor-pointer border border-transparent ${
                    focusedIndex === index
                      ? "bg-[#635BFF]/10 dark:bg-white/[0.08] text-[#635BFF] dark:text-white"
                      : isItemActive
                      ? "bg-[#635BFF]/[0.08] dark:bg-white/[0.08] text-[#635BFF] dark:text-white border-[#635BFF]/20"
                      : `hover:bg-[#635BFF]/[0.05] dark:hover:bg-white/[0.05] text-[#171B2E] dark:text-[#FFFFFF] ${style.hoverBorder}`
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-all duration-200 ${style.badge}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors leading-tight">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#5E647E] dark:text-[#A5A1BF] line-clamp-1 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDropdown;

