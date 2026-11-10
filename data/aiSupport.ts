export interface CoreFeature {
  id: string;
  title: string;
  description: string;
  iconType: "chat" | "ticket";
}

export interface AiSupportSectionData {
  badge: string;
  headingPart1: string;
  headingPart2: string;
  subheading: string;
  description: string;
  features: CoreFeature[];
  chatDemo: {
    agentName: string;
    agentStatus: string;
    customerQuestion: string;
    aiResponse: string;
    actionLabel: string;
    actionHref: string;
    inputPlaceholder: string;
  };
  ticketDemo: {
    title: string;
    viewAllLabel: string;
    viewAllHref: string;
    option1: {
      title: string;
      description: string;
      buttonText: string;
    };
    option2: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}

export const aiSupportData: AiSupportSectionData = {
  badge: "SMARTER CUSTOMER SUPPORT",
  headingPart1: "AI-Powered",
  headingPart2: "Customer Support",
  subheading: "Every Conversation. The Right Support.",
  description:
    "Give customers instant answers with AI-powered conversations and provide flexible ticket management whenever additional support is needed.",
  features: [
    {
      id: "ai-chat",
      title: "AI-Powered Chat",
      description:
        "Get instant, context-aware answers from AI agents using your business knowledge. When needed, the AI Agent can help initiate a support ticket.",
      iconType: "chat",
    },
    {
      id: "built-in-ticketing",
      title: "Built-in Ticketing",
      description:
        "Give customers the flexibility to raise support tickets themselves or let an AI Agent create a ticket when necessary. Keep issues organized for follow-up.",
      iconType: "ticket",
    },
  ],
  chatDemo: {
    agentName: "Pingo AI Assistant",
    agentStatus: "Online",
    customerQuestion: "Can you explain your pricing plans?",
    aiResponse:
      "Sure! We offer 3 plans — Starter, Growth and Enterprise. Would you like me to compare them for you?",
    actionLabel: "View Pricing Plans",
    actionHref: "/pricing",
    inputPlaceholder: "Type your message...",
  },
  ticketDemo: {
    title: "Support Ticket",
    viewAllLabel: "View All",
    viewAllHref: "/contact",
    option1: {
      title: "Let AI Create a Ticket",
      description: "The AI Agent will create a ticket if it can't resolve your issue.",
      buttonText: "Enable Auto Ticket",
    },
    option2: {
      title: "Raise a Ticket Yourself",
      description: "Create a support ticket anytime you need help.",
      buttonText: "Create Ticket",
    },
  },
};
