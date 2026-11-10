export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  supportImpact: string;
  iconName: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  workflowBenefit: string;
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
  tag: string;
  iconName: string;
}

export const supportManagementData = {
  hero: {
    badge: "Support Knowledge Management",
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
      "Fast Support Knowledge Retrieval",
      "Consistent Resolution Across Teams",
      "Reduced Repetitive Query Effort",
    ],
  },

  challenges: {
    badge: "Support Operations Friction",
    heading: "Support Teams Need More Than Just Answers.",
    subheading:
      "When support documentation is fragmented, agents waste valuable time searching while customers experience delays and inconsistent guidance.",
    items: [
      {
        id: "repetitive-questions",
        title: "Support teams repeatedly handle similar customer questions",
        description:
          "High-volume, repetitive inquiries drain agent capacity and reduce time available for addressing complex customer situations.",
        supportImpact: "Agent fatigue and delayed response times",
        iconName: "Clock",
      },
      {
        id: "slow-information-discovery",
        title: "Finding the right information takes time",
        description:
          "Agents must manually navigate lengthy manuals, wikis, and policy guides while keeping customers waiting on hold.",
        supportImpact: "Prolonged resolution cycles on routine issues",
        iconName: "SearchX",
      },
      {
        id: "spread-across-sources",
        title: "Important support knowledge is spread across different sources",
        description:
          "Critical product specs, return guidelines, and technical workarounds reside in separate team drives and disparate documents.",
        supportImpact: "Information silos and fragmented resolution context",
        iconName: "FolderGit2",
      },
      {
        id: "inconsistent-information",
        title: "Inconsistent information can create confusing customer experiences",
        description:
          "Different agents provide slightly varied explanations or quote outdated policies, eroding customer confidence.",
        supportImpact: "Conflicting guidance and diminished brand trust",
        iconName: "FileWarning",
      },
      {
        id: "access-barriers",
        title: "Support teams need easier access to relevant business knowledge",
        description:
          "Frontline teams lack a unified, natural-language interface to instantly pull up verified answers during customer interactions.",
        supportImpact: "Operational drag during peak support volume",
        iconName: "AlertTriangle",
      },
    ] as ChallengeItem[],
  },

  capabilities: {
    badge: "Intelligent Support Enablement",
    heading: "Bring Better Knowledge Into Every Support Interaction.",
    subheading:
      "Equip your support operations with an assistant that surfaces verified business answers instantly, ensuring consistency across every ticket and conversation.",
    items: [
      {
        id: "knowledge-based-answers",
        title: "Knowledge-Based Answers",
        description:
          "Retrieve relevant information from connected business knowledge, ensuring guidance is grounded directly in verified company documentation.",
        badge: "Grounded Accuracy",
        iconName: "Database",
        workflowBenefit: "100% verified against published source files",
      },
      {
        id: "faster-information-access",
        title: "Faster Information Access",
        description:
          "Help support teams find answers without manually searching multiple sources, reducing lookup time from minutes to seconds.",
        badge: "Rapid Discovery",
        iconName: "Zap",
        workflowBenefit: "Instant paragraph extraction from complex documents",
      },
      {
        id: "contextual-guidance",
        title: "Contextual Guidance",
        description:
          "Understand questions and provide relevant responses tailored to the specific customer scenario and operational details.",
        badge: "Context Aware",
        iconName: "Target",
        workflowBenefit: "Accurate guidance synthesized from multi-page docs",
      },
      {
        id: "consistent-information",
        title: "Consistent Information",
        description:
          "Help support teams refer to organized business knowledge, ensuring every agent delivers identical, verified policy explanations.",
        badge: "Unified Standard",
        iconName: "ShieldCheck",
        workflowBenefit: "Single source of truth across all support channels",
      },
      {
        id: "customer-question-assistance",
        title: "Customer Question Assistance",
        description:
          "Support customer-facing interactions with natural-language answers, allowing agents to draft clear, helpful responses immediately.",
        badge: "Conversational Drafting",
        iconName: "MessageSquare",
        workflowBenefit: "Ready-to-use responses written in clear, natural prose",
      },
    ] as CapabilityItem[],
  },

  useCases: {
    badge: "Day-to-Day Efficiency",
    heading: "Make Everyday Support More Efficient.",
    subheading:
      "Explore practical ways Pingo streamlines daily support interactions and reduces manual information retrieval.",
    items: [
      {
        id: "common-questions",
        title: "Finding answers to common customer questions",
        supportArea: "High-Volume FAQs",
        description:
          "Instantly resolve high-frequency queries about return windows, billing dates, subscription downgrades, and access permissions.",
        customerInquiry: "Can a customer change their payment currency mid-billing cycle?",
        assistantGuidance:
          "Currency settings are locked during an active cycle. Customers can update billing currency during renewal by contacting billing or updating workspace settings.",
        sourceDoc: "Subscription & Billing Policy v3.1 (Section 2.4)",
        iconName: "HelpCircle",
      },
      {
        id: "product-service-docs",
        title: "Accessing product and service documentation",
        supportArea: "Technical Specifications",
        description:
          "Enable agents to look up hardware compatibility, API endpoints, rate limits, and supported formats while assisting customers.",
        customerInquiry: "What is the maximum file size for document uploads on our platform?",
        assistantGuidance:
          "Standard accounts support file uploads up to 100MB per document across PDF, DOCX, Markdown, and CSV formats.",
        sourceDoc: "Product Architecture & Ingestion Limits 2026",
        iconName: "FileCode2",
      },
      {
        id: "business-processes",
        title: "Understanding business processes",
        supportArea: "Escalation & Policy",
        description:
          "Guide support representatives through refund authorization limits, account ownership transfers, and compliance verification protocols.",
        customerInquiry: "What verification steps are required before transferring account ownership?",
        assistantGuidance:
          "Account ownership transfer requires written confirmation from the current primary owner and completion of two-factor identity verification.",
        sourceDoc: "Account Administration & Security Protocols (Section 5)",
        iconName: "Route",
      },
      {
        id: "consistent-guidance",
        title: "Providing consistent information to customers",
        supportArea: "Quality & Alignment",
        description:
          "Ensure both novice and veteran support agents quote the exact same current policy terms, eliminating conflicting answers.",
        customerInquiry: "What is the standard turnaround time for data export requests?",
        assistantGuidance:
          "Data exports are processed within 24 to 48 business hours and delivered via a secure, time-limited download link valid for 7 days.",
        sourceDoc: "Data Governance & Export Guidelines v4.0",
        iconName: "ShieldCheck",
      },
      {
        id: "reduced-manual-searches",
        title: "Reducing repetitive manual information searches",
        supportArea: "Workflow Streamlining",
        description:
          "Save support teams from scouring separate shared drives, wikis, and chat threads for operational answers.",
        customerInquiry: "Where can our team find the latest SLA performance report template?",
        assistantGuidance:
          "The monthly SLA report template is located in the Support Knowledge Base under 'Templates & Audits', formatted for quarterly reviews.",
        sourceDoc: "Client Success & SLA Documentation Center",
        iconName: "Layers",
      },
    ] as UseCaseItem[],
  },

  workflow: {
    badge: "Support Knowledge Workflow",
    heading: "How It Works",
    subheading:
      "A four-step workflow that brings connected business knowledge straight into daily support interactions.",
    steps: [
      {
        step: "01",
        number: "Step 1",
        title: "Connect Support Knowledge",
        description: "Add supported business information sources.",
        detail:
          "Connect resolution guides, product manuals, policy documentation, and standard operating procedures to Pingo.",
        iconName: "FolderPlus",
      },
      {
        step: "02",
        number: "Step 2",
        title: "Organize Information",
        description: "Structure content into dedicated knowledge bases.",
        detail:
          "Organize materials into clear knowledge categories segmented by product, customer tier, or support domain.",
        iconName: "Layers",
      },
      {
        step: "03",
        number: "Step 3",
        title: "Ask Support Questions",
        description: "Customers or support teams ask questions naturally.",
        detail:
          "Frontline agents or customer self-service users submit queries in plain, conversational language.",
        iconName: "MessageSquare",
      },
      {
        step: "04",
        number: "Step 4",
        title: "Get Relevant Answers",
        description: "Pingo retrieves relevant information and provides contextual responses.",
        detail:
          "Pingo extracts verified facts from your knowledge base and delivers clear, cited answers ready to use.",
        iconName: "CheckCircle",
      },
    ] as WorkflowStep[],
  },

  benefits: {
    badge: "Operational Impact",
    heading: "Better Information. More Effective Support.",
    subheading:
      "Equip your support operations with instant access to verified knowledge, saving time and delivering dependable customer experiences.",
    items: [
      {
        id: "reduced-searches",
        title: "Reduced repetitive information searches",
        description:
          "Save frontline support teams countless hours spent hunting down verified answers across scattered document folders.",
        tag: "Time Recovered",
        iconName: "Clock",
      },
      {
        id: "easier-access",
        title: "Easier access to support knowledge",
        description:
          "Make internal documentation, technical specs, and policies accessible through natural language search.",
        tag: "Universal Access",
        iconName: "Compass",
      },
      {
        id: "consistent-guidance",
        title: "More consistent customer guidance",
        description:
          "Eliminate discrepancies between agent responses by anchoring every answer in the same up-to-date business documentation.",
        tag: "Factual Alignment",
        iconName: "ShieldCheck",
      },
      {
        id: "improved-accessibility",
        title: "Improved information accessibility",
        description:
          "Allow new and experienced support agents alike to retrieve accurate operational details with equal ease.",
        tag: "Team Enablement",
        iconName: "BookOpenCheck",
      },
      {
        id: "better-experiences",
        title: "Better support experiences",
        description:
          "Deliver fast, confident, and reliable answers that turn routine inquiries into positive customer interactions.",
        tag: "Customer Trust",
        iconName: "Smile",
      },
    ] as BenefitItem[],
  },

  cta: {
    badge: "Empower Support Today",
    heading: "Give Your Support Team Better Access to Knowledge.",
    description:
      "Help your team and customers find the information they need with Pingo.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Features",
    secondaryHref: "/features/helpdesk-ticketing",
  },
};

