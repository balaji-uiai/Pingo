export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  supportImpact: string;
  iconName: string;
}

export interface HowPingoHelpsItem {
  id: string;
  title: string;
  description: string;
  pillarBadge: string;
  iconName: string;
}

export interface SupportTicketQueueItem {
  id: string;
  ticketNumber: string;
  customerName: string;
  category: string;
  status: "Open" | "In Review" | "Resolved";
  statusColor: string;
  timeAgo: string;
  customerQuestion: string;
  matchedSource: string;
  resolutionSummary: string;
  agentName: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  supportArea: string;
  description: string;
  customerInquiry: string;
  assistantGuidance: string;
  sourceDoc: string;
  iconName: string;
}

export interface WorkflowStep {
  step: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  impactTag: string;
  iconName: string;
}

export const supportManagementData = {
  hero: {
    badge: "Support Operations & Knowledge Management",
    headingPart1: "Manage Customer Support",
    headingPart2: "With Better Knowledge.",
    description:
      "Empower your support team with an AI-powered knowledge assistant that makes business information easier to find and helps deliver clear, relevant customer guidance.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/helpdesk-ticketing",
    },
    highlights: [
      "Support Request Queue Visibility",
      "Instant Knowledge Retrieval for Agents",
      "Consistent Cross-Channel Guidance",
      "Faster Onboarding & Ticket Resolution",
    ],
    operationsMetrics: [
      { label: "Knowledge Match Rate", value: "96.4%" },
      { label: "Average Handle Time", value: "2.1 min" },
      { label: "Repetitive Escalations", value: "-48%" },
    ],
    ticketQueue: [
      {
        id: "ticket-1042",
        ticketNumber: "TICK-1042",
        customerName: "Alex Mercer (Enterprise)",
        category: "Subscription & Invoicing",
        status: "Resolved",
        statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        timeAgo: "4m ago",
        customerQuestion: "Can our organization add 15 additional seats mid-quarter without resetting our billing date?",
        matchedSource: "Commercial Terms > Section 4.2 (Mid-Cycle Seat Additions)",
        resolutionSummary:
          "Confirmed mid-cycle additions are prorated until renewal date. Auto-calculated balance and sent updated payment receipt.",
        agentName: "Sarah Jenkins (Lead Agent)",
      },
      {
        id: "ticket-1043",
        ticketNumber: "TICK-1043",
        customerName: "David Lin (DevOps)",
        category: "Webhook Retries",
        status: "In Review",
        statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        timeAgo: "12m ago",
        customerQuestion: "What is the maximum retry limit and timeout window for custom endpoint webhooks?",
        matchedSource: "Technical Architecture > Webhook Engine v2.4 (Clause 7.1)",
        resolutionSummary:
          "Pingo matched 5 retry windows (1m to 6h) with 10s timeout. Agent verifying customer IP whitelist status.",
        agentName: "Marcus Vance (Technical Support)",
      },
      {
        id: "ticket-1044",
        ticketNumber: "TICK-1044",
        customerName: "Elena Rostova (Growth Plan)",
        category: "Custom Domain SSL",
        status: "Open",
        statusColor: "bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB5FF] border-[#3984FF]/20",
        timeAgo: "Just now",
        customerQuestion: "Custom domain SSL certificate validation failed with CNAME record mismatch.",
        matchedSource: "DNS Operations Manual > Cloudflare CNAME Propagation",
        resolutionSummary:
          "Recommended DNS check for CAA records. Waiting for initial agent triage.",
        agentName: "Unassigned (Queue Priority)",
      },
    ] as SupportTicketQueueItem[],
  },

  challenges: {
    badge: "Support Team Obstacles",
    heading: "Support Teams Need More Than Just Answers.",
    subheading:
      "When support documentation is scattered across multiple locations, agents spend excessive time searching while customers experience delays and inconsistent guidance.",
    items: [
      {
        id: "repetitive-questions",
        title: "Support teams repeatedly handle similar customer questions",
        description:
          "High volumes of routine inquiries overwhelm support queues, consuming agent bandwidth that could be dedicated to complex client issues.",
        supportImpact: "Agent fatigue and delayed response queues",
        iconName: "Clock",
      },
      {
        id: "slow-information-discovery",
        title: "Finding the right information takes time",
        description:
          "Support agents manually navigate through lengthy manuals, multiple open browser tabs, and disjointed wikis while customers wait.",
        supportImpact: "Prolonged handle times on straightforward queries",
        iconName: "SearchX",
      },
      {
        id: "spread-across-sources",
        title: "Important support details are scattered across different sources",
        description:
          "Return guidelines, pricing policies, and technical edge cases live in separate team drives, leading to information gaps.",
        supportImpact: "Fragmented context during customer conversations",
        iconName: "FolderGit2",
      },
      {
        id: "new-member-learning",
        title: "New support team members take time to learn business information",
        description:
          "Onboarding new support representatives requires months of shadowing and manual reference checks before they can resolve tickets independently.",
        supportImpact: "Steep ramp-up curve and heavy supervisor dependency",
        iconName: "UserCheck",
      },
      {
        id: "inconsistent-answers",
        title: "Inconsistent answers can create confusion for customers",
        description:
          "Variations in what different agents tell customers regarding refunds, features, or deadlines erode brand trust and customer satisfaction.",
        supportImpact: "Customer frustration and avoidable escalations",
        iconName: "AlertTriangle",
      },
    ] as ChallengeItem[],
  },

  howPingoHelps: {
    badge: "Knowledge-Driven Support Operations",
    heading: "Better Knowledge for Better Support.",
    subheading:
      "Give your support team immediate access to organized business knowledge, enabling faster ticket resolution and dependable customer guidance.",
    items: [
      {
        id: "easy-access",
        title: "Easy access to support information",
        description:
          "Help support teams retrieve verified business knowledge quickly through natural-language queries without leaving their support console.",
        pillarBadge: "Rapid Retrieval",
        iconName: "Compass",
      },
      {
        id: "consistent-answers",
        title: "Consistent answers",
        description:
          "Ensure every support team member delivers accurate, up-to-date guidance based on a single authoritative source of truth.",
        pillarBadge: "Unified Standards",
        iconName: "ShieldCheck",
      },
      {
        id: "reduced-effort",
        title: "Reduced repetitive effort",
        description:
          "Help teams resolve recurring customer inquiries in seconds, freeing valuable agent hours for high-touch customer conversations.",
        pillarBadge: "Effort Reduction",
        iconName: "Zap",
      },
      {
        id: "structured-bases",
        title: "Structured knowledge bases",
        description:
          "Keep support documentation, troubleshooting matrices, and policy guidelines organized in clean, dedicated operational knowledge centers.",
        pillarBadge: "Structured Organization",
        iconName: "FolderTree",
      },
      {
        id: "faster-onboarding",
        title: "Faster onboarding for support teams",
        description:
          "Empower new support agents to handle real customer tickets confidently from week one by referencing verified company information.",
        pillarBadge: "Accelerated Ramp-Up",
        iconName: "Users",
      },
    ] as HowPingoHelpsItem[],
  },

  workflow: {
    badge: "Support Operations Workflow",
    heading: "How Support Operations Move From Inquiry to Resolution",
    subheading:
      "A structured 5-stage support lifecycle that blends fast knowledge retrieval with human agent review for reliable customer assistance.",
    steps: [
      {
        step: "Stage 01",
        number: "01",
        title: "Customer Raises a Support Request",
        description: "The customer submits an inquiry across web chat, email, or ticketing channels.",
        detail:
          "The customer describes an issue, asks a policy question, or requests technical assistance requiring business guidance.",
        iconName: "MessageSquare",
      },
      {
        step: "Stage 02",
        number: "02",
        title: "The Request Is Recorded or Routed Through the Supported Workflow",
        description: "The request enters the support operations queue with automated topic categorization.",
        detail:
          "Pingo categorizes the inquiry, tags priority, and retrieves relevant knowledge base paragraphs ready for the support team.",
        iconName: "GitPullRequest",
      },
      {
        step: "Stage 03",
        number: "03",
        title: "A Support Team Member Reviews the Issue",
        description: "The assigned agent examines the customer's request alongside Pingo's cited guidance.",
        detail:
          "The agent verifies the recommended policy section or troubleshooting procedure in seconds, avoiding lengthy manual searches.",
        iconName: "UserCheck",
      },
      {
        step: "Stage 04",
        number: "04",
        title: "The Team Provides Assistance and Updates the Request",
        description: "The agent delivers accurate guidance to the customer and records operational notes.",
        detail:
          "The response is communicated clearly, with complete alignment to company standards and documented resolution steps.",
        iconName: "Send",
      },
      {
        step: "Stage 05",
        number: "05",
        title: "The Issue Is Resolved and Its Status Is Updated",
        description: "The ticket is marked resolved and performance metrics are updated in the dashboard.",
        detail:
          "The customer receives prompt help, handle time is minimized, and any newly updated documentation updates the knowledge base.",
        iconName: "CheckCircle",
      },
    ] as WorkflowStep[],
  },

  useCases: {
    badge: "Support Operations Use Cases",
    heading: "Everyday Support Operations Powered by Pingo",
    subheading:
      "See how customer support teams use Pingo to access information, resolve requests, and maintain operational quality.",
    items: [
      {
        id: "common-questions",
        title: "Handling Common Customer Questions",
        supportArea: "High-Volume Resolution",
        description:
          "Retrieve verified troubleshooting steps, return policies, billing cycles, and access rules in seconds during active tickets.",
        customerInquiry: "What is the policy for transferring subscription ownership between two company email domains?",
        assistantGuidance:
          "Ownership transfer requires written authorization from the primary administrator and completion of two-factor verification by the new owner.",
        sourceDoc: "Account Administration & Security Protocols (Section 5.2)",
        iconName: "HelpCircle",
      },
      {
        id: "assisting-agents",
        title: "Assisting Support Team Members",
        supportArea: "Agent Productivity",
        description:
          "Equip frontline agents with instant answers to complex questions, reducing the need to put customers on hold or escalate to tier-2 engineers.",
        customerInquiry: "What are the rate-limiting thresholds and retry intervals for API webhook endpoints?",
        assistantGuidance:
          "Standard tiers support 25 queries/sec with a burst buffer of 50 requests. Failed deliveries retry 5 times using exponential backoff.",
        sourceDoc: "Platform Architecture & Integration Specifications 2026",
        iconName: "Zap",
      },
      {
        id: "onboarding-agents",
        title: "Onboarding New Support Agents",
        supportArea: "Team Enablement",
        description:
          "Give new hires a conversational knowledge companion where they can look up company guidelines, escalation matrices, and SLA terms independently.",
        customerInquiry: "Where do I find our approved template for handling enterprise outage status updates?",
        assistantGuidance:
          "Incident communication templates are stored in Support Knowledge Hub > Incident Response > Outage Communications v3.",
        sourceDoc: "Incident Response & Support Operations Manual",
        iconName: "Users",
      },
      {
        id: "consistent-answers",
        title: "Providing Consistent Answers Across Channels",
        supportArea: "Quality & Compliance",
        description:
          "Ensure that whether a customer reaches out via chat, email, or ticketing, every support agent provides identical, verified guidance.",
        customerInquiry: "What is our mandatory data retention duration for terminated customer workspaces?",
        assistantGuidance:
          "Terminated workspaces enter a 30-day grace period during which data can be restored, after which all databases are permanently purged.",
        sourceDoc: "Data Privacy & Workspace Retention Policy v4.1",
        iconName: "ShieldCheck",
      },
      {
        id: "managing-support-info",
        title: "Managing Support Information",
        supportArea: "Knowledge Maintenance",
        description:
          "Update policy documents and troubleshooting guides in one central knowledge base so every agent immediately references the latest guidance.",
        customerInquiry: "How do we update the international shipping FAQ across all 20 active support reps?",
        assistantGuidance:
          "Uploading the revised shipping matrix updates the central knowledge base instantly; all subsequent agent queries reference the new rates.",
        sourceDoc: "Knowledge Base Management & Publishing SOP",
        iconName: "FolderTree",
      },
    ] as UseCaseItem[],
  },

  benefits: {
    badge: "Support Excellence",
    heading: "The Impact of Better Support Knowledge",
    subheading:
      "When support teams have immediate access to organized business information, resolution speed and customer confidence increase across every interaction.",
    items: [
      {
        id: "faster-resolution",
        title: "Faster resolution of customer questions",
        description:
          "Support agents pull up authoritative answers in seconds rather than minutes, substantially reducing customer hold times and overall ticket resolution cycles.",
        impactTag: "Reduced Handle Time",
        iconName: "Clock",
      },
      {
        id: "consistent-answers",
        title: "More consistent answers across support interactions",
        description:
          "Eliminate contradictory explanations between agents by grounding every customer response in the same verified documentation.",
        impactTag: "Factual Accuracy",
        iconName: "ShieldCheck",
      },
      {
        id: "less-search-time",
        title: "Less time spent searching for information",
        description:
          "Frontline staff focus on thoughtful customer communication rather than navigating through messy folders and obsolete wikis.",
        impactTag: "Productivity Boost",
        iconName: "Search",
      },
      {
        id: "easier-onboarding",
        title: "Easier onboarding for new support team members",
        description:
          "Accelerate ramp-up times for new support representatives by giving them a reliable knowledge assistant that answers operational questions immediately.",
        impactTag: "Rapid Ramp-Up",
        iconName: "Users",
      },
    ] as BenefitItem[],
  },

  cta: {
    badge: "Empower Your Support Operations",
    heading: "Give Your Support Team Better Access to Knowledge.",
    description:
      "Empower your support team with organized business knowledge that turns routine queries into fast, consistent customer resolutions.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Customer Support",
    secondaryHref: "/solutions/customer-support",
  },
};
