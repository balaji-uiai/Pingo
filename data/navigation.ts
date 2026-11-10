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
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Features",
    href: "/features/ai-automation",
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
        href: "/features/customer-team-management",
      },
      {
        id: "analytics-intelligence",
        title: "Analytics & Intelligence",
        description: "Turn customer interactions into useful insights.",
        iconName: "BarChart3",
        href: "/features/analytics-intelligence",
      },
      {
        id: "integrations-channels",
        title: "Integrations & Channels",
        description: "Connect Pingo with your existing ecosystem.",
        iconName: "Layers",
        href: "/features/integrations-channels",
      },
      {
        id: "security-administration",
        title: "Security & Administration",
        description: "Control, protect, and manage your platform.",
        iconName: "ShieldCheck",
        href: "/features/security-administration",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/customer-support",
    isDropdown: true,
    dropdownItems: [
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
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const navbarCta = {
  label: "Get Started",
  href: "/contact",
};
