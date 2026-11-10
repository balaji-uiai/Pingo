export interface NavItem {
  label: string;
  href?: string;
  isDropdown?: boolean;
  dropdownItems?: {
    id: string;
    title: string;
    description: string;
    iconName?: string;
    href?: string;
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
        href: "/features/knowledge-management",
      },
      {
        id: "conversation-management",
        title: "Conversation Management",
        description: "Every conversation in one connected workspace.",
        iconName: "MessagesSquare",
        href: "/features/conversation-management",
      },
      {
        id: "helpdesk-ticketing",
        title: "Helpdesk & Ticketing",
        description: "Every issue tracked. Every resolution organized.",
        iconName: "Ticket",
        href: "/features/helpdesk-ticketing",
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
