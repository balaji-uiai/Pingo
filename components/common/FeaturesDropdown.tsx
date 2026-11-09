"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  MessageSquare,
  Bot,
  Layers,
  PhoneCall,
  Blocks,
  LucideIcon,
  Sparkles,
} from "lucide-react";

interface DropdownItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

interface FeaturesDropdownProps {
  items?: DropdownItem[];
  isMobile?: boolean;
  onItemSelect?: () => void;
}

const defaultItems: DropdownItem[] = [
  {
    id: "live-chat",
    title: "Live Chat",
    description: "Instant real-time messaging with visitors and customers.",
    iconName: "MessageSquare",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Autonomous intelligence for automated, contextual answers.",
    iconName: "Bot",
  },
  {
    id: "channels",
    title: "Channels",
    description: "Omnichannel customer engagement in a unified inbox.",
    iconName: "Layers",
  },
  {
    id: "voice-call",
    title: "Voice Call",
    description: "Seamless voice conversations right from your web interface.",
    iconName: "PhoneCall",
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Effortless connectivity with your CRM and tech stack.",
    iconName: "Blocks",
  },
];

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Bot,
  Layers,
  PhoneCall,
  Blocks,
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
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
          className="flex items-center justify-between w-full py-2 text-base font-medium text-slate-700 hover:text-slate-900 dark:text-[#D5D0E5] dark:hover:text-white transition-colors"
          aria-expanded={isOpen}
        >
          <span>Features</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-violet-400" : "text-[#D5D0E5]/70"
            }`}
          />
        </button>

        {isOpen && (
          <div className="pl-3 pr-1 py-2 space-y-1 bg-slate-100/70 dark:bg-white/[0.03] rounded-xl mt-1 border border-slate-200 dark:border-white/5 animate-fadeIn">
            {items.map((item) => {
              const IconComponent =
                item.iconName && iconMap[item.iconName]
                  ? iconMap[item.iconName]
                  : Sparkles;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (onItemSelect) onItemSelect();
                  }}
                  className="flex items-center gap-3 w-full py-2 px-2 text-left rounded-lg hover:bg-slate-200/50 dark:hover:bg-white/[0.04] text-slate-800 dark:text-white/90 hover:text-purple-600 dark:hover:text-violet-300 transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-purple-100 dark:bg-purple-900/40 border border-purple-300/40 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-300 flex-shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-xs text-slate-500 dark:text-[#D5D0E5]/70 line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Desktop Hover + Keyboard Accessible Dropdown
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
            ? "text-slate-900 dark:text-white font-medium"
            : "text-slate-600 hover:text-slate-900 dark:text-[#D5D0E5] dark:hover:text-white"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Features</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-violet-400" : "text-[#D5D0E5]/70"
          }`}
        />
      </button>

      {/* Dropdown Menu Container */}
      <div
        className={`absolute left-0 top-full pt-2 w-72 z-50 transition-all duration-200 transform origin-top-left ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="p-2 rounded-2xl bg-white/95 dark:bg-[#141126]/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(120,43,255,0.15)] overflow-hidden">
          {items.map((item, index) => {
            const IconComponent =
              item.iconName && iconMap[item.iconName]
                ? iconMap[item.iconName]
                : Sparkles;

            return (
              <button
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                type="button"
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => {
                  setIsOpen(false);
                  if (onItemSelect) onItemSelect();
                }}
                className={`flex items-start gap-3 w-full p-2.5 rounded-xl text-left transition-all duration-200 group cursor-pointer ${
                  focusedIndex === index
                    ? "bg-purple-50 dark:bg-white/[0.08] text-purple-700 dark:text-white"
                    : "hover:bg-slate-100 dark:hover:bg-white/[0.04] text-slate-800 dark:text-white/90"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/40 border border-purple-300/40 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-300 group-hover:scale-105 group-hover:border-purple-400/60 transition-all flex-shrink-0 mt-0.5">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-[#D5D0E5]/70 line-clamp-1 mt-0.5">
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
