"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
  LucideIcon,
  Sparkles,
} from "lucide-react";

interface DropdownItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  href?: string;
}

interface FeaturesDropdownProps {
  items?: DropdownItem[];
  isMobile?: boolean;
  onItemSelect?: () => void;
}

const defaultItems: DropdownItem[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Intelligent conversations and automated workflows.",
    iconName: "Bot",
    href: "/features/ai-automation",
  },
  {
    id: "knowledge-management",
    title: "Knowledge Management",
    description: "Your business knowledge, ready for every conversation.",
    iconName: "Database",
  },
  {
    id: "conversation-management",
    title: "Conversation Management",
    description: "Every conversation in one connected workspace.",
    iconName: "MessagesSquare",
  },
  {
    id: "helpdesk-ticketing",
    title: "Helpdesk & Ticketing",
    description: "Every issue tracked. Every resolution organized.",
    iconName: "Ticket",
  },
  {
    id: "customer-team-management",
    title: "Customer & Team Management",
    description: "The right people. The right conversations.",
    iconName: "Users",
  },
  {
    id: "analytics-intelligence",
    title: "Analytics & Intelligence",
    description: "Turn customer interactions into useful insights.",
    iconName: "BarChart3",
  },
  {
    id: "integrations-channels",
    title: "Integrations & Channels",
    description: "Connect Pingo with your existing ecosystem.",
    iconName: "Layers",
  },
  {
    id: "security-administration",
    title: "Security & Administration",
    description: "Control, protect, and manage your platform.",
    iconName: "ShieldCheck",
  },
];

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
};

export const FeaturesDropdown: React.FC<FeaturesDropdownProps> = ({
  items = defaultItems,
  isMobile = false,
  onItemSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
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

  // Mobile Accordion Mode
  if (isMobile) {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-between w-full py-2 text-base font-medium text-[#171B2E] dark:text-[#FFFFFF] transition-colors"
          aria-expanded={isOpen}
        >
          <span>Features</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[#782BFF]" : "text-[#62677D] dark:text-[#B5BAD0]"
            }`}
          />
        </button>

        {isOpen && (
          <div className="pl-2 pr-1 py-2 space-y-1 bg-[#F5F6FA] dark:bg-[#101326] rounded-xl mt-1 border border-[#E5E7F0] dark:border-[#292D45] animate-fadeIn max-h-[60vh] overflow-y-auto no-scrollbar">
            {items.map((item) => {
              const IconComponent =
                item.iconName && iconMap[item.iconName]
                  ? iconMap[item.iconName]
                  : Sparkles;
              const itemHref =
                item.href ||
                (item.id === "ai-automation"
                  ? "/features/ai-automation"
                  : "/#product-features");

              return (
                <Link
                  key={item.id}
                  href={itemHref}
                  onClick={() => {
                    setIsOpen(false);
                    if (onItemSelect) onItemSelect();
                  }}
                  className="flex items-center gap-3 w-full py-2 px-2 text-left rounded-lg hover:bg-white dark:hover:bg-[#171A2E] text-[#171B2E] dark:text-[#FFFFFF] transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-[#782BFF]/10 dark:bg-[#782BFF]/20 border border-[#782BFF]/20 flex items-center justify-center text-[#782BFF] dark:text-[#B5FF45] flex-shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#171B2E] dark:text-[#FFFFFF]">{item.title}</div>
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

  // Desktop Hover + Keyboard Accessible 2-Column Dropdown
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
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 py-2 px-2 text-base font-normal rounded-lg transition-all duration-200 cursor-pointer ${
          isOpen
            ? "text-[#171B2E] dark:text-[#FFFFFF] font-medium"
            : "text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF]"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Features</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#782BFF]" : "text-[#62677D] dark:text-[#B5BAD0]"
          }`}
        />
      </button>

      {/* Dropdown Menu Container (2 Columns) */}
      <div
        className={`absolute -left-12 lg:-left-20 top-full pt-2 w-[540px] lg:w-[580px] z-50 transition-all duration-200 transform origin-top-left ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="p-3 rounded-2xl bg-white dark:bg-[#141126] border border-[#E5E7F0] dark:border-white/[0.08] shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          {/* Header Tagline */}
          <div className="px-3 pt-1 pb-2 flex items-center justify-between border-b border-[#E5E7F0] dark:border-white/[0.06] mb-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#782BFF] dark:text-[#B5FF45]">
              Pingo Core Modules
            </span>
            <span className="text-[11px] font-mono text-[#5E647E] dark:text-[#D5D0E5]/60">
              8 Integrated Solutions
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {items.map((item, index) => {
              const IconComponent =
                item.iconName && iconMap[item.iconName]
                  ? iconMap[item.iconName]
                  : Sparkles;
              const itemHref =
                item.href ||
                (item.id === "ai-automation"
                  ? "/features/ai-automation"
                  : "/#product-features");

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
                  className={`flex items-start gap-3 p-2.5 rounded-xl text-left transition-all duration-150 group cursor-pointer ${
                    focusedIndex === index
                      ? "bg-purple-50 dark:bg-white/[0.08] text-[#782BFF] dark:text-white"
                      : "hover:bg-purple-50/70 dark:hover:bg-white/[0.05] text-[#171B2E] dark:text-[#FFFFFF]"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#782BFF]/10 dark:bg-[#782BFF]/20 border border-[#782BFF]/20 flex items-center justify-center text-[#782BFF] dark:text-[#B5FF45] group-hover:scale-105 transition-all flex-shrink-0 mt-0.5">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#782BFF] dark:group-hover:text-[#B5FF45] transition-colors leading-tight">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#5E647E] dark:text-[#D5D0E5]/70 line-clamp-1 mt-0.5">
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

export default FeaturesDropdown;
