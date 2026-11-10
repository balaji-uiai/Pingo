export interface EnterpriseHighlight {
  badge: string;
  title: string;
  description: string;
}

export interface ProductFeatureModule {
  id: string;
  moduleNumber: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  iconName: string;
  isPrimary?: boolean;
  enterpriseHighlight?: EnterpriseHighlight;
}

export interface ProductFeaturesSectionData {
  sectionLabel: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  modules: ProductFeatureModule[];
}

export const productFeaturesData: ProductFeaturesSectionData = {
  sectionLabel: "05 / PRODUCT FEATURES",
  headingPart1: "Everything your business needs.",
  headingPart2: "All in one platform.",
  description:
    "Pingo brings intelligent automation, customer conversations, knowledge management, team collaboration, and customer insights together in one connected platform. Explore the eight core modules that power smarter customer experiences.",
  modules: [
    {
      id: "ai-automation",
      moduleNumber: "01",
      title: "AI Automation",
      headline: "Intelligent conversations. Automated workflows.",
      description:
        "AI agents, contextual answers, knowledge-based responses, escalation detection, and conversation automation.",
      features: [
        "AI Agents",
        "Contextual Answers",
        "Knowledge-Based Responses",
        "Escalation Detection",
        "Conversation Automation",
      ],
      iconName: "Bot",
      isPrimary: true,
      enterpriseHighlight: {
        badge: "Enterprise AI Workflows",
        title: "Enterprise AI Workflows",
        description:
          "For enterprise teams, AI workflows bring intelligent automation into more complex customer support operations. Connect AI agents with business knowledge, define escalation rules, automate repetitive interactions, and coordinate conversations across different stages of the customer journey.",
      },
    },
    {
      id: "knowledge-management",
      moduleNumber: "02",
      title: "Knowledge Management",
      headline: "Your business knowledge, ready for every conversation.",
      description:
        "Website crawling, content extraction, knowledge centers, document management, source management, and knowledge synchronization.",
      features: [
        "Website Crawling",
        "Content Extraction",
        "Knowledge Centers",
        "Document Management",
        "Source Management",
        "Knowledge Synchronization",
      ],
      iconName: "Database",
    },
    {
      id: "conversation-management",
      moduleNumber: "03",
      title: "Conversation Management",
      headline: "Every conversation. One connected workspace.",
      description:
        "Live chat, unified inbox, human handover, conversation routing, conversation history, and customer profiles.",
      features: [
        "Live Chat",
        "Unified Inbox",
        "Human Handover",
        "Conversation Routing",
        "Conversation History",
        "Customer Profiles",
      ],
      iconName: "MessagesSquare",
    },
    {
      id: "helpdesk-ticketing",
      moduleNumber: "04",
      title: "Helpdesk & Ticketing",
      headline: "Every issue tracked. Every resolution organized.",
      description:
        "Ticket creation, ticket assignment, prioritization, resolution workflows, and external ticketing integrations.",
      features: [
        "Ticket Creation",
        "Ticket Assignment",
        "Prioritization",
        "Resolution Workflows",
        "External Ticketing Integrations",
      ],
      iconName: "Ticket",
    },
    {
      id: "customer-team-management",
      moduleNumber: "05",
      title: "Customer & Team Management",
      headline: "The right people. The right conversations.",
      description:
        "Customer authentication, customer profiles, team management, roles, permissions, and agent assignment.",
      features: [
        "Customer Authentication",
        "Customer Profiles",
        "Team Management",
        "Roles & Permissions",
        "Agent Assignment",
      ],
      iconName: "Users",
    },
    {
      id: "analytics-intelligence",
      moduleNumber: "06",
      title: "Analytics & Intelligence",
      headline: "Turn customer interactions into useful insights.",
      description:
        "Sentiment analysis, conversation analytics, agent performance, feedback reports, and customer satisfaction insights.",
      features: [
        "Sentiment Analysis",
        "Conversation Analytics",
        "Agent Performance",
        "Feedback Reports",
        "Customer Satisfaction Insights",
      ],
      iconName: "BarChart3",
    },
    {
      id: "integrations-channels",
      moduleNumber: "07",
      title: "Integrations & Channels",
      headline: "Connect Pingo with your existing ecosystem.",
      description:
        "JavaScript chat widget, website integration, WhatsApp, Instagram, APIs, and external ticketing platforms.",
      features: [
        "JavaScript Chat Widget",
        "Website Integration",
        "WhatsApp",
        "Instagram",
        "APIs & Webhooks",
        "External Ticketing Platforms",
      ],
      iconName: "Layers",
    },
    {
      id: "security-administration",
      moduleNumber: "08",
      title: "Security & Administration",
      headline: "Control, protect, and manage your platform.",
      description:
        "Authentication, access control, data protection, organization settings, audit logs, and enterprise controls.",
      features: [
        "Authentication",
        "Access Control",
        "Data Protection",
        "Organization Settings",
        "Audit Logs",
        "Enterprise Controls",
      ],
      iconName: "ShieldCheck",
    },
  ],
};

