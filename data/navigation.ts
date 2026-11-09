export interface NavItem {
  label: string;
  href?: string;
  isDropdown?: boolean;
  dropdownItems?: {
    id: string;
    title: string;
    description: string;
    iconName?: string;
  }[];
}

export const navigationItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Features",
    isDropdown: true,
    dropdownItems: [
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
    ],
  },
  {
    label: "Solutions",
    href: "/#solutions",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const navbarCta = {
  label: "Get Started",
  href: "/contact",
};
