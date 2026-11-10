export interface TicketingFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName:
    | "TicketPlus"
    | "UserCheck"
    | "Clock"
    | "MessageSquareLock"
    | "History"
    | "Blocks";
  color: "violet" | "blue" | "cyan";
}

export interface TicketingSectionData {
  badge: string;
  heading: string;
  subheading: string;
  description: string;
  dashboard: {
    ticketId: string;
    title: string;
    status: string;
    priority: string;
    customer: {
      name: string;
      email: string;
      company: string;
      source: string;
    };
    assignedAgent: {
      name: string;
      role: string;
      initials: string;
    };
    metrics: {
      created: string;
      sla: string;
      channel: string;
    };
    internalNote: {
      author: string;
      timeAgo: string;
      content: string;
    };
    auditLog: {
      event: string;
      timeAgo: string;
    };
  };
  features: TicketingFeature[];
  enterpriseBanner: {
    badge: string;
    heading: string;
    description: string;
    integrations: string[];
    ctaText: string;
    ctaHref: string;
  };
}

export const ticketingData: TicketingSectionData = {
  badge: "STRUCTURED CUSTOMER SUPPORT",
  heading: "Built-in Ticketing System",
  subheading: "Turn unresolved conversations into trackable support tickets.",
  description:
    "Some customer issues require more than a quick conversation. Convert support requests into tickets and manage them through a structured resolution workflow.",
  dashboard: {
    ticketId: "#TCK-4829",
    title: "SSO SAML Authentication fails with HTTP 403 on staging environment",
    status: "IN PROGRESS",
    priority: "HIGH PRIORITY",
    customer: {
      name: "Sarah Jenkins",
      email: "sarah.j@acmecloud.com",
      company: "Acme Cloud Corp",
      source: "Chat Escalation",
    },
    assignedAgent: {
      name: "Alex Wong",
      role: "Tier 2 Integrations Engineer",
      initials: "AW",
    },
    metrics: {
      created: "Today, 10:42 AM",
      sla: "First Response Met (12m)",
      channel: "Live Chat Handover",
    },
    internalNote: {
      author: "Alex Wong (Support Lead)",
      timeAgo: "8m ago",
      content:
        "Verified SAML response tokens with security gateway logs. EntityID mismatch found on staging tenant. Client notified with configuration patch.",
    },
    auditLog: {
      event: "Priority escalated from Medium to High based on Enterprise SLA rules.",
      timeAgo: "14m ago",
    },
  },
  features: [
    {
      id: "ticket-generation",
      number: "01",
      title: "Ticket Generation",
      description:
        "Create tickets from unresolved customer conversations and customer-raised requests.",
      iconName: "TicketPlus",
      color: "violet",
    },
    {
      id: "assignment-prioritization",
      number: "02",
      title: "Assignment & Prioritization",
      description:
        "Assign tickets to support agents and prioritize customer issues.",
      iconName: "UserCheck",
      color: "blue",
    },
    {
      id: "status-lifecycle",
      number: "03",
      title: "Status & Lifecycle Management",
      description:
        "Track ticket progress from creation through resolution.",
      iconName: "Clock",
      color: "cyan",
    },
    {
      id: "internal-comments",
      number: "04",
      title: "Internal Comments & Notes",
      description:
        "Enable private collaboration between support agents.",
      iconName: "MessageSquareLock",
      color: "violet",
    },
    {
      id: "ticket-history",
      number: "05",
      title: "Ticket History & Audit Trail",
      description:
        "Maintain a record of ticket activities and changes.",
      iconName: "History",
      color: "blue",
    },
    {
      id: "external-integrations",
      number: "06",
      title: "External Helpdesk Integrations",
      description:
        "Connect existing external helpdesk systems for Enterprise customers.",
      iconName: "Blocks",
      color: "cyan",
    },
  ],
  enterpriseBanner: {
    badge: "ENTERPRISE INTEGRATIONS",
    heading: "Already Using a Helpdesk?",
    description:
      "Connect your existing ticketing system and continue managing support without disrupting your current workflow.",
    integrations: [
      "Zendesk",
      "Jira Service Management",
      "Freshdesk",
      "Salesforce Service Cloud",
      "HubSpot",
    ],
    ctaText: "Explore Enterprise Integrations",
    ctaHref: "/contact",
  },
};

