export interface ConversationCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "MessageSquare"
    | "BrainCircuit"
    | "GitFork"
    | "SearchCode"
    | "History"
    | "UserCheck";
}

export interface ConversationWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "MessageCircle" | "BrainCircuit" | "Database" | "CheckCheck";
}

export interface ConversationBenefit {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: "violet" | "blue" | "cyan";
}

export interface ConversationManagementData {
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
    pillars: {
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
    items: ConversationCapability[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    steps: ConversationWorkflowStep[];
  };
  benefits: {
    badge: string;
    heading: string;
    description: string;
    items: ConversationBenefit[];
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const conversationManagementData: ConversationManagementData = {
  hero: {
    badge: "CONVERSATION MANAGEMENT",
    headingPart1: "Every Conversation.",
    headingPart2: "More Meaningful.",
    description:
      "Help customers find what they need through natural, contextual conversations powered by your business knowledge.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Conversations",
      href: "#overview",
    },
  },
  overview: {
    badge: "CONTEXTUAL INTELLIGENCE",
    heading: "Conversations That Understand Context",
    description:
      "Pingo helps customers interact with your business through natural conversations. It uses relevant business knowledge and conversation context to provide useful responses.",
    pillars: [
      {
        step: "01",
        title: "Customer Question & Intent",
        description:
          "Pingo evaluates phrasing, intent, and subtle terminology rather than just searching for rigid keyword matches.",
        tag: "Inquiry Analysis",
        color: "violet",
      },
      {
        step: "02",
        title: "Continuous Context Window",
        description:
          "Every exchange remembers preceding discussion points, eliminating frustrating repetition on follow-up questions.",
        tag: "Thread Continuity",
        color: "blue",
      },
      {
        step: "03",
        title: "Connected Business Knowledge",
        description:
          "Answers are directly assembled from your verified product documentation and knowledge centers in real time.",
        tag: "Grounded Facts",
        color: "cyan",
      },
    ],
  },
  capabilities: {
    badge: "CONVERSATION CAPABILITIES",
    heading: "Designed for Better Conversations",
    subheading:
      "Six purpose-built capabilities ensuring customer interactions remain helpful, contextual, and seamless.",
    items: [
      {
        id: "natural-language-understanding",
        number: "01",
        title: "Natural Language Understanding",
        description:
          "Understand questions expressed in everyday language without forcing customers to speak in rigid keywords or commands.",
        tag: "Intent Recognition",
        color: "violet",
        iconName: "MessageSquare",
      },
      {
        id: "context-aware-conversations",
        number: "02",
        title: "Context-Aware Conversations",
        description:
          "Keep responses relevant to the ongoing discussion by carrying forward active concepts, entities, and customer selections.",
        tag: "Active Context",
        color: "blue",
        iconName: "BrainCircuit",
      },
      {
        id: "conversation-continuity",
        number: "03",
        title: "Conversation Continuity",
        description:
          "Use available conversation context to make follow-up questions easier. Customers can ask 'How much does that cost?' without repeating the product name.",
        tag: "Multi-Turn Flow",
        color: "cyan",
        iconName: "GitFork",
      },
      {
        id: "relevant-answer-retrieval",
        number: "04",
        title: "Relevant Answer Retrieval",
        description:
          "Retrieve useful information from connected knowledge centers and synthesize concise, direct solutions for the user.",
        tag: "Verified Answers",
        color: "violet",
        iconName: "SearchCode",
      },
      {
        id: "conversation-history",
        number: "05",
        title: "Conversation History",
        description:
          "Access previous conversations where supported, allowing returning customers or agents to pick up right where they left off.",
        tag: "Session Memory",
        color: "blue",
        iconName: "History",
      },
      {
        id: "human-assistance",
        number: "06",
        title: "Human Assistance",
        description:
          "Support a handover to a human when needed, transferring full contextual transcripts so agents don't have to ask customers to repeat themselves.",
        tag: "Seamless Handoff",
        color: "cyan",
        iconName: "UserCheck",
      },
    ],
  },
  workflow: {
    badge: "WORKFLOW",
    heading: "How a Conversation Comes Together",
    subheading:
      "A natural, four-step journey transforming customer inquiries into accurate, context-aware answers.",
    steps: [
      {
        step: "01",
        title: "Customer Starts a Conversation",
        description:
          "A customer asks a question naturally across chat, web widget, or messaging channels.",
        detail: "Conversations start with conversational ease in plain, natural language.",
        color: "violet",
        iconName: "MessageCircle",
      },
      {
        step: "02",
        title: "AI Understands the Question",
        description:
          "Pingo analyzes message intent, conversational context, and recent discussion history.",
        detail: "Language comprehension maps exact customer intent and critical entities.",
        color: "blue",
        iconName: "BrainCircuit",
      },
      {
        step: "03",
        title: "Relevant Knowledge Is Retrieved",
        description:
          "Pingo queries the product's dedicated knowledge center for verified reference materials.",
        detail: "Precise vector lookup retrieves domain-specific documentation in milliseconds.",
        color: "cyan",
        iconName: "Database",
      },
      {
        step: "04",
        title: "A Helpful Response Is Delivered",
        description:
          "The customer receives an accurate, contextual answer with source citations and follow-up prompts.",
        detail: "Polished, helpful guidance delivered with zero robotic delays.",
        color: "violet",
        iconName: "CheckCheck",
      },
    ],
  },
  benefits: {
    badge: "CUSTOMER IMPACT",
    heading: "Conversations That Move Customers Forward",
    description:
      "Deliver conversational experiences that resolve issues faster, reduce support friction, and delight customers.",
    items: [
      {
        id: "natural-interactions",
        title: "More Natural Customer Interactions",
        description:
          "Customers talk the way they normally do. Pingo understands colloquialisms, typos, and phrasing variations without getting confused.",
        stat: "100%",
        statLabel: "Natural Phrasing",
        color: "violet",
      },
      {
        id: "contextual-answers",
        title: "Contextually Relevant Answers",
        description:
          "Every response is tuned to the customer's specific situation, account tier, or product configuration without generic boilerplate.",
        stat: "99.2%",
        statLabel: "Context Accuracy",
        color: "blue",
      },
      {
        id: "easier-followups",
        title: "Easier Follow-Up Questions",
        description:
          "Customers don't need to re-explain their problem. They can ask natural follow-up questions with full confidence that Pingo remembers.",
        stat: "3x",
        statLabel: "Faster Resolution",
        color: "cyan",
      },
      {
        id: "smoother-experience",
        title: "A Smoother Customer Experience",
        description:
          "From instant initial answers to seamless human handovers when required, customer interactions feel coherent, friendly, and respectful of their time.",
        stat: "24/7",
        statLabel: "Frictionless Support",
        color: "violet",
      },
    ],
  },
  cta: {
    badge: "GET STARTED",
    heading: "Make Every Conversation Count.",
    description:
      "Give your customers a smarter way to interact with your business.",
    buttonText: "Get Started with Pingo",
    buttonHref: "/contact",
  },
};

