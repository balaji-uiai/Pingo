export interface JourneyStage {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  badge: string;
  isConditional?: boolean;
  conditionalCondition?: string;
  sampleUiText: string[];
}

export interface CustomerJourneyData {
  workflowLabel: string;
  heading: string;
  description: string;
  stages: JourneyStage[];
}

export const customerJourneyData: CustomerJourneyData = {
  workflowLabel: "02 / CUSTOMER JOURNEY",
  heading: "Every customer finds the right way forward.",
  description:
    "Once Pingo is deployed, customers can start conversations instantly. AI handles routine questions, human agents step in when needed, and unresolved requests move into the ticketing system.",
  stages: [
    {
      id: "visitor-arrives",
      stepNumber: "01",
      title: "Customer Visits Your Website",
      description:
        "When a visitor opens your website, the Pingo chat widget automatically appears.",
      badge: "Arrival",
      sampleUiText: ["Visitor arrived", "Pingo Widget Available"],
    },
    {
      id: "start-conversation",
      stepNumber: "02",
      title: "Start a Conversation",
      description:
        "The customer opens the chat widget and starts interacting with Pingo.",
      badge: "Engagement",
      sampleUiText: [
        "Customer: Hi! I want to know more about your product.",
        "Pingo: Hello! I'd be happy to help. What would you like to know?",
      ],
    },
    {
      id: "ai-assistance",
      stepNumber: "03",
      title: "AI-Powered Assistance",
      description:
        "The AI agent uses the configured business knowledge to understand customer questions and provide relevant answers.",
      badge: "AI Resolution",
      sampleUiText: [
        "Pingo AI is responding...",
        "Knowledge source matched ✓",
        "Answer generated ✓",
      ],
    },
    {
      id: "human-handoff",
      stepNumber: "04",
      title: "Human Agent Handoff",
      description:
        "When AI cannot provide a suitable answer, automatically transfer the conversation to a human support agent.",
      badge: "Conditional Transfer",
      isConditional: true,
      conditionalCondition: "Triggered if AI cannot answer",
      sampleUiText: [
        "Human assistance required",
        "Transferring conversation...",
        "Agent assigned ✓",
      ],
    },
    {
      id: "ticketing-system",
      stepNumber: "05",
      title: "Ticketing System",
      description:
        "If the issue still cannot be resolved immediately, move the conversation into the ticketing system for further tracking and resolution.",
      badge: "Conditional Escalation",
      isConditional: true,
      conditionalCondition: "Triggered if unresolved immediately",
      sampleUiText: [
        "Ticket #PG-1024",
        "Issue: Product enquiry",
        "Assigned: Support Team",
        "Status: Open",
      ],
    },
    {
      id: "customer-feedback",
      stepNumber: "06",
      title: "Customer Feedback",
      description:
        "After the interaction or support request is resolved, collect customer feedback.",
      badge: "Feedback",
      sampleUiText: [
        "How was your experience?",
        "★★★★★",
        "Thank you for your feedback!",
      ],
    },
  ],
};
