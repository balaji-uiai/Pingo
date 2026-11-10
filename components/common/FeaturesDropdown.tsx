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
          className="flex items-center justify-between w-full py-2 text-base font-medium text-[#171B2E] dark:text-[#FFFFFF] transition-colors"
          aria-expanded={isOpen}
        >
          <span>Features</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[#635BFF]" : "text-[#62677D] dark:text-[#B5BAD0]"
            }`}
          />
        </button>

        {isOpen && (
          <div className="pl-3 pr-1 py-2 space-y-1 bg-[#F5F6FA] dark:bg-[#101326] rounded-xl mt-1 border border-[#E5E7F0] dark:border-[#292D45] animate-fadeIn">
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
                  className="flex items-center gap-3 w-full py-2 px-2 text-left rounded-lg hover:bg-[#F5F6FF] dark:hover:bg-[#171A2E] text-[#171B2E] dark:text-[#FFFFFF] transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-[#635BFF]/10 dark:bg-[#635BFF]/20 border border-[#635BFF]/20 flex items-center justify-center text-[#635BFF] dark:text-[#20C5D8] flex-shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#171B2E] dark:text-[#FFFFFF]">{item.title}</div>
                    <div className="text-xs text-[#62677D] dark:text-[#B5BAD0] line-clamp-1">
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
            ? "text-[#171B2E] dark:text-[#FFFFFF] font-medium"
            : "text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF]"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Features</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#635BFF]" : "text-[#62677D] dark:text-[#B5BAD0]"
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
        <div className="p-2 rounded-2xl bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
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
                    ? "bg-[#F5F6FF] dark:bg-[#101326] text-[#635BFF] dark:text-white"
                    : "hover:bg-[#F5F6FF] dark:hover:bg-[#101326] text-[#171B2E] dark:text-[#FFFFFF]"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#635BFF]/10 dark:bg-[#635BFF]/20 border border-[#635BFF]/20 flex items-center justify-center text-[#635BFF] dark:text-[#20C5D8] group-hover:scale-105 transition-all flex-shrink-0 mt-0.5">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#62677D] dark:text-[#B5BAD0] line-clamp-1 mt-0.5">
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
