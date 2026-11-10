export interface TicketPreviewItem {
  id: string;
  ticketNumber: string;
  subject: string;
  priority: "Urgent" | "High" | "Medium" | "Low";
  priorityColor: "rose" | "amber" | "blue" | "slate";
  assignee: {
    name: string;
    avatarInitials: string;
    role: string;
  };
  status: "In Progress" | "Under Review" | "Open" | "Resolved";
  statusColor: "violet" | "blue" | "cyan" | "emerald";
  tag: string;
  updatedAt: string;
}

export interface TicketingCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "Ticket"
    | "SlidersHorizontal"
    | "Clock"
    | "MessageSquareQuote"
    | "History"
    | "ExternalLink";
}

export interface TicketingWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "Inbox" | "UserCheck" | "Activity" | "CheckCircle2";
}

export interface TicketingBenefit {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  color: "violet" | "blue" | "cyan";
}

export interface HelpdeskTicketingData {
  hero: {
    badge: string;
    headingPart1: string;
    headingPart2: string;
    description: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    sampleTickets: TicketPreviewItem[];
  };
  overview: {
    badge: string;
    heading: string;
    description: string;
    stages: {
      step: string;
      title: string;
      description: string;
      tag: string;
      color: "violet" | "blue" | "cyan";
    }[];
  };
  capabilities: {
    badge: string;
    heading: string;
    subheading: string;
    items: TicketingCapability[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    steps: TicketingWorkflowStep[];
  };
  benefits: {
    badge: string;
    heading: string;
    description: string;
    items: TicketingBenefit[];
  };
  enterprise: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    supportedNote: string;
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const helpdeskTicketingData: HelpdeskTicketingData = {
  hero: {
    badge: "HELPDESK & TICKETING",
    headingPart1: "Customer Issues.",
    headingPart2: "Structured Support.",
    description:
      "Bring customer requests into an organized workflow. Track issues, manage ticket progress, and keep support teams aligned.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Ticketing",
      href: "#overview",
    },
    sampleTickets: [
      {
        id: "tk-8241",
        ticketNumber: "TK-8241",
        subject: "SAML 2.0 SSO identity handshake failure on staging",
        priority: "Urgent",
        priorityColor: "rose",
        assignee: {
          name: "Elena Vance",
          avatarInitials: "EV",
          role: "Security Eng",
        },
        status: "In Progress",
        statusColor: "violet",
        tag: "Auth & SSO",
        updatedAt: "8m ago",
      },
      {
        id: "tk-8242",
        ticketNumber: "TK-8242",
        subject: "Webhook payload signature mismatch after secret rotation",
        priority: "High",
        priorityColor: "amber",
        assignee: {
          name: "Devon Miles",
          avatarInitials: "DM",
          role: "Platform Lead",
        },
        status: "Under Review",
        statusColor: "blue",
        tag: "API & Webhooks",
        updatedAt: "24m ago",
      },
      {
        id: "tk-8243",
        ticketNumber: "TK-8243",
        subject: "Corporate VAT tax identifier update on Enterprise invoice",
        priority: "Medium",
        priorityColor: "blue",
        assignee: {
          name: "Priya Sharma",
          avatarInitials: "PS",
          role: "Operations",
        },
        status: "Resolved",
        statusColor: "emerald",
        tag: "Billing",
        updatedAt: "1h ago",
      },
    ],
  },
  overview: {
    badge: "STRUCTURED TICKETING PIPELINE",
    heading: "From Customer Requests to Organized Tickets",
    description:
      "Manage customer issues through a structured ticketing workflow. Keep requests organized, track progress, and make it easier for support teams to follow up.",
    stages: [
      {
        step: "01",
        title: "Customer Request Ingest",
        description:
          "Inquiries are captured through supported customer channels or configured support triggers with full user context preserved.",
        tag: "Context Preserved",
        color: "violet",
      },
      {
        step: "02",
        title: "Triage & Prioritization",
        description:
          "Issues receive structured classification, urgency priority tags, and automated routing to the designated team member.",
        tag: "Smart Routing",
        color: "blue",
      },
      {
        step: "03",
        title: "Lifecycle Resolution",
        description:
          "Track progress through open, in-review, and resolved states while collaborating via private internal team notes.",
        tag: "Clear Ownership",
        color: "cyan",
      },
    ],
  },
  capabilities: {
    badge: "CORE CAPABILITIES",
    heading: "Everything Needed to Manage Support",
    subheading:
      "Six purpose-built capabilities for structuring, assigning, and resolving customer support issues.",
    items: [
      {
        id: "ticket-generation",
        number: "01",
        title: "Ticket Generation",
        description:
          "Create tickets from customer requests or appropriate support workflows, preserving vital diagnostic context and user metadata.",
        tag: "Supported Workflows",
        color: "violet",
        iconName: "Ticket",
      },
      {
        id: "assignment-prioritization",
        number: "02",
        title: "Assignment & Prioritization",
        description:
          "Assign tickets and organize them by priority so high-impact operational blockers are addressed first by the right specialist.",
        tag: "Urgency Sorting",
        color: "blue",
        iconName: "SlidersHorizontal",
      },
      {
        id: "status-management",
        number: "03",
        title: "Status Management",
        description:
          "Track tickets through their lifecycle with clear state indicators: Open, In Progress, Under Review, and Resolved.",
        tag: "Lifecycle Tracking",
        color: "cyan",
        iconName: "Clock",
      },
      {
        id: "internal-comments-notes",
        number: "04",
        title: "Internal Comments & Notes",
        description:
          "Share context within the support team through private internal notes that remain hidden from customers for smooth collaboration.",
        tag: "Team Collaboration",
        color: "violet",
        iconName: "MessageSquareQuote",
      },
      {
        id: "ticket-history",
        number: "05",
        title: "Ticket History",
        description:
          "Maintain visibility into ticket activities and updates with a comprehensive audit timeline of every state change and assignment.",
        tag: "Audit Visibility",
        color: "blue",
        iconName: "History",
      },
      {
        id: "helpdesk-integrations",
        number: "06",
        title: "Helpdesk Integrations",
        description:
          "Connect external helpdesk platforms where supported by Enterprise, synchronizing tickets seamlessly across existing systems.",
        tag: "Enterprise Option",
        color: "cyan",
        iconName: "ExternalLink",
      },
    ],
  },
  workflow: {
    badge: "WORKFLOW",
    heading: "A Clear Path from Issue to Resolution",
    subheading:
      "A structured four-step path ensuring no customer issue falls through the cracks.",
    steps: [
      {
        step: "01",
        title: "Receive a Customer Request",
        description:
          "Inquiries arrive from supported customer contact points with conversation transcripts and account details attached.",
        detail: "Context-enriched requests eliminate repetitive back-and-forth diagnostic queries.",
        color: "violet",
        iconName: "Inbox",
      },
      {
        step: "02",
        title: "Create and Assign a Ticket",
        description:
          "A structured ticket is generated, tagged with urgency, and assigned to the responsible department or agent.",
        detail: "Automatic ownership prevents orphaned issues and establishes clear accountability.",
        color: "blue",
        iconName: "UserCheck",
      },
      {
        step: "03",
        title: "Track Progress",
        description:
          "Support agents investigate, update ticket stages, and coordinate internally using private contextual notes.",
        detail: "Real-time status updates keep the entire support team synchronized on active blockers.",
        color: "cyan",
        iconName: "Activity",
      },
      {
        step: "04",
        title: "Resolve and Review",
        description:
          "The issue is closed with verified resolution notes, archiving the full lifecycle record for future reference.",
        detail: "Closed tickets enrich the support history and help inform ongoing product enhancements.",
        color: "violet",
        iconName: "CheckCircle2",
      },
    ],
  },
  benefits: {
    badge: "TEAM ADVANTAGE",
    heading: "Support That Stays Organized",
    description:
      "Bring structure to high-volume support demands and keep your team aligned from first notice to final resolution.",
    items: [
      {
        id: "visibility",
        title: "Better Visibility into Customer Issues",
        description:
          "Eliminate buried requests and chaotic inboxes. Gain single-pane visibility across all active customer inquiries with real-time status tracking.",
        metric: "100%",
        metricLabel: "Request Visibility",
        color: "violet",
      },
      {
        id: "ownership",
        title: "Clear Ownership and Prioritization",
        description:
          "Every ticket has a designated owner and explicit urgency tier, ensuring critical operational blockers receive immediate attention.",
        metric: "0",
        metricLabel: "Orphaned Issues",
        color: "blue",
      },
      {
        id: "structured-tracking",
        title: "Structured Issue Tracking",
        description:
          "Track requests systematically through validated lifecycle stages. Know exactly which issues are under review and which are resolved.",
        metric: "4-Stage",
        metricLabel: "Lifecycle Control",
        color: "cyan",
      },
      {
        id: "coordination",
        title: "Improved Team Coordination",
        description:
          "Enable engineering and customer support to collaborate in private thread notes, avoiding confusing customer-facing mixups.",
        metric: "2x",
        metricLabel: "Faster Handoffs",
        color: "violet",
      },
    ],
  },
  enterprise: {
    badge: "ENTERPRISE CAPABILITY",
    heading: "Already Using a Helpdesk?",
    description:
      "Connect your existing ticketing system and continue managing support without disrupting your current workflow.",
    buttonText: "Explore Enterprise Integration",
    buttonHref: "/contact",
    supportedNote:
      "Available for Enterprise deployments with supported external systems.",
  },
  cta: {
    badge: "GET STARTED",
    heading: "Bring Structure to Every Support Request.",
    description: "Make customer issue management clearer and easier with Pingo.",
    buttonText: "Get Started with Pingo",
    buttonHref: "/contact",
  },
};

