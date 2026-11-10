export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "Bot"
    | "Database"
    | "Sparkles"
    | "Cpu"
    | "ShieldCheck"
    | "UserCheck";
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "FolderGit2" | "Layers" | "MessageSquareText" | "CheckCircle2";
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  color: "violet" | "blue" | "cyan";
}

export interface AiAutomationData {
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
  };
  overview: {
    badge: string;
    heading: string;
    description: string;
    highlightTitle: string;
    highlightText: string;
    comparison: {
      traditional: {
        label: string;
        points: string[];
      };
      pingoWay: {
        label: string;
        points: string[];
      };
    };
  };
  capabilities: CapabilityItem[];
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    steps: WorkflowStep[];
  };
  benefits: {
    badge: string;
    heading: string;
    description: string;
    items: BenefitItem[];
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const aiAutomationData: AiAutomationData = {
  hero: {
    badge: "AI AUTOMATION",
    headingPart1: "AI That Understands.",
    headingPart2: "Automation That Works.",
    description:
      "Make every customer conversation smarter with Pingo's AI-powered assistant. Provide helpful answers using your business knowledge.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "See How It Works",
      href: "#how-it-works",
    },
  },
  overview: {
    badge: "AI AUTOMATION OVERVIEW",
    heading: "What is AI Automation?",
    description:
      "Pingo uses AI to understand customer questions and provide relevant answers from your connected business knowledge. It helps customers find information without having to search through multiple pages or documents.",
    highlightTitle: "From Static Searching to Dynamic Answering",
    highlightText:
      "Instead of forcing customers to comb through help centers or wait for support representatives, Pingo's AI agent analyzes the exact meaning of questions and retrieves synthesized, accurate answers in real time.",
    comparison: {
      traditional: {
        label: "Traditional Search & Chatbots",
        points: [
          "Rigid keyword matching that fails on phrasing changes",
          "Dumps long documentation links instead of answers",
          "No business context or multi-turn conversation memory",
          "Causes customer frustration and ticket volume spikes",
        ],
      },
      pingoWay: {
        label: "Pingo AI Automation",
        points: [
          "True semantic understanding of customer intent",
          "Direct, conversational answers derived from your docs",
          "Maintains contextual continuity across turns",
          "Resolves inquiries autonomously and seamlessly escalates",
        ],
      },
    },
  },
  capabilities: [
    {
      id: "intelligent-conversations",
      number: "01",
      title: "Intelligent Conversations",
      description:
        "Understand natural language, slang, typos, and multi-sentence inquiries without breaking conversation flow.",
      tag: "Natural Language",
      color: "violet",
      iconName: "Bot",
    },
    {
      id: "knowledge-based-answers",
      number: "02",
      title: "Knowledge-Based Answers",
      description:
        "Ground every response strictly in your uploaded documentation, FAQs, and product manuals with zero hallucinations.",
      tag: "Grounded AI",
      color: "blue",
      iconName: "Database",
    },
    {
      id: "context-aware-responses",
      number: "03",
      title: "Context-Aware Responses",
      description:
        "Remember earlier user questions, previous preferences, and current session context for natural multi-turn dialogue.",
      tag: "Memory Layer",
      color: "cyan",
      iconName: "Sparkles",
    },
    {
      id: "automated-query-handling",
      number: "04",
      title: "Automated Query Handling",
      description:
        "Resolve repetitive tier-1 support inquiries automatically 24/7 across multiple channels without staff fatigue.",
      tag: "24/7 Autonomy",
      color: "violet",
      iconName: "Cpu",
    },
    {
      id: "consistent-customer-guidance",
      number: "05",
      title: "Consistent Customer Guidance",
      description:
        "Ensure every customer receives unified, brand-approved information aligned with current product specifications.",
      tag: "Brand Alignment",
      color: "blue",
      iconName: "ShieldCheck",
    },
    {
      id: "human-support-handover",
      number: "06",
      title: "Human Support Handover",
      description:
        "Gracefully transfer complex or sensitive conversations to live agents with full context and conversation history.",
      tag: "Live Escalation",
      color: "cyan",
      iconName: "UserCheck",
    },
  ],
  workflow: {
    badge: "WORKFLOW",
    heading: "How It Works",
    subheading: "Four simple steps to intelligent automated conversations.",
    steps: [
      {
        step: "01",
        title: "Connect Your Knowledge",
        description:
          "Sync your guides, FAQs, policies, and documentation into Pingo.",
        detail: "Upload files or connect your URLs with zero manual tagging.",
        color: "violet",
        iconName: "FolderGit2",
      },
      {
        step: "02",
        title: "Process Information",
        description:
          "Pingo structures and indexes your content into dedicated knowledge bases.",
        detail: "Information is partitioned cleanly with strict domain boundaries.",
        color: "blue",
        iconName: "Layers",
      },
      {
        step: "03",
        title: "Ask Naturally",
        description:
          "Customers ask questions in plain language across your website or chat.",
        detail: "Understands intent, phrasing variations, and technical terms.",
        color: "cyan",
        iconName: "MessageSquareText",
      },
      {
        step: "04",
        title: "Get Relevant Answers",
        description:
          "AI delivers instant, accurate answers with citations and next steps.",
        detail: "Verified responses keep your customers informed and confident.",
        color: "violet",
        iconName: "CheckCircle2",
      },
    ],
  },
  benefits: {
    badge: "PROVEN IMPACT",
    heading: "Better Conversations. Less Manual Effort.",
    description:
      "Transform customer support from a bottleneck into a competitive advantage with measurable efficiency gains.",
    items: [
      {
        id: "faster-access",
        title: "Faster Access to Information",
        description:
          "Customers receive instantaneous, accurate answers in milliseconds without waiting on hold or navigating complex menus.",
        metric: "< 1s",
        metricLabel: "Instant Resolution",
        color: "violet",
      },
      {
        id: "consistent-guidance",
        title: "Consistent Customer Guidance",
        description:
          "Eliminate inaccurate or outdated answers. Every interaction reflects the latest documentation and company policies.",
        metric: "100%",
        metricLabel: "Policy Accuracy",
        color: "blue",
      },
      {
        id: "reduced-queries",
        title: "Reduced Repetitive Queries",
        description:
          "Deflect up to 70% of routine questions so your team can focus on complex enterprise accounts and relationship building.",
        metric: "70%",
        metricLabel: "Ticket Deflection",
        color: "cyan",
      },
      {
        id: "smoother-experience",
        title: "Smoother Customer Experience",
        description:
          "A friendly, responsive assistant provides frictionless guidance that drives customer happiness and retention.",
        metric: "98%",
        metricLabel: "Positive Feedback",
        color: "violet",
      },
    ],
  },
  cta: {
    badge: "START TODAY",
    heading: "Ready to Make Conversations Smarter?",
    description: "Bring your business knowledge and AI together with Pingo.",
    buttonText: "Get Started with Pingo",
    buttonHref: "/contact",
  },
};

