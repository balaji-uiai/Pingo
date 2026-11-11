export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  impact: string;
  iconName: string;
}

export interface HowPingoHelpsItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  scenario: string;
  resolutionPath: "AI Automated" | "Human Agent" | "AI + Human Handover";
  iconName: string;
}

export interface WorkflowStep {
  step: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  actor: "Customer" | "AI Assistant" | "Human Agent";
  iconName: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export const customerSupportData = {
  hero: {
    badge: "AI + Human Collaborative Support",
    headingPart1: "Support Every Customer,",
    headingPart2: "Beyond Every Conversation.",
    description:
      "Give customers timely assistance with AI-powered responses and human support when personal attention is needed.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/ai-automation",
    },
    handoverDemo: {
      customerName: "David Miller",
      customerCompany: "Apex Logistics",
      initialQuery: "We upgraded to the Team Plan today, but two of our dispatchers still see a 'Seat Limit Reached' error when logging in.",
      aiResponse: "I verified that your workspace upgraded to the Team Plan (10 seats). For security verification of dispatcher permissions and manual seat reassignment, I am connecting you with Sarah from our customer support team.",
      handoverNotice: "Handover in progress • Full conversation history and plan details attached",
      agentName: "Sarah Jenkins",
      agentRole: "Customer Support Specialist",
      agentResponse: "Hi David! I have your account details and ticket history right in front of me. I just released the cached seat locks for both dispatcher emails. Could you ask them to log in again?",
    },
    highlights: [
      "AI for Routine Questions",
      "Human Support for Complex Issues",
      "Zero Repetitive Explanations",
      "Seamless Context Continuity",
    ],
  },

  challenges: {
    badge: "The Customer Support Dilemma",
    heading: "Support Teams Shouldn't Have to Choose Between Speed and Personal Care.",
    subheading:
      "Modern customer support requires immediate answers for simple questions, but complex and sensitive situations demand the empathy and problem-solving skills of real human agents.",
    items: [
      {
        id: "expect-timely",
        title: "Customers expect timely responses",
        description:
          "When customers reach out with immediate questions, long queue times and delayed email threads lead to frustration and churn.",
        impact: "Customer dissatisfaction during critical moments",
        iconName: "Clock",
      },
      {
        id: "repetitive-questions",
        title: "Support teams receive repetitive questions",
        description:
          "Valuable support team members spend much of their day manually answering the same recurring policy, pricing, and FAQ questions.",
        impact: "Operational fatigue and reduced capacity for complex cases",
        iconName: "RotateCcw",
      },
      {
        id: "complex-issues-human",
        title: "Complex customer issues require human attention",
        description:
          "Account discrepancies, technical edge cases, and emotionally charged situations cannot be solved by automated rules or generic chatbots alone.",
        impact: "Automated-only bots frustrate users when problems get difficult",
        iconName: "UserCheck",
      },
      {
        id: "repeating-problems",
        title: "Customers may need to explain their problems multiple times",
        description:
          "When conversations bounce between tools or get transferred between staff, customers are forced to restart their story from the beginning.",
        impact: "Broken context and poor customer experience",
        iconName: "MessageSquareWarning",
      },
      {
        id: "balancing-support",
        title: "Support teams need a better way to balance routine queries and personal assistance",
        description:
          "Businesses struggle to provide 24/7 availability for basic questions while still preserving human agent time for high-value relationships.",
        impact: "Inability to scale support operations sustainably",
        iconName: "Scale",
      },
    ],
  },

  howPingoHelps: {
    badge: "The Collaborative Approach",
    heading: "AI and Human Agents Working Together, Not Competing.",
    subheading:
      "Pingo is designed around the principle that AI and human agents complement each other rather than replacing one another.",
    items: [
      {
        id: "ai-routine",
        title: "AI handles common and knowledge-based questions",
        description:
          "Immediate answers for business hours, product specifications, standard policies, and recurring documentation queries — available 24/7.",
        highlight: "Instant 24/7 self-service for standard inquiries",
        iconName: "Bot",
      },
      {
        id: "connected-knowledge",
        title: "Customers receive relevant answers from connected business information",
        description:
          "Pingo grounds its responses in your verified documentation, FAQs, and product guides, avoiding generic or inaccurate AI hallucinations.",
        highlight: "Grounded strictly in verified business documentation",
        iconName: "Database",
      },
      {
        id: "handover-support",
        title: "Complex or sensitive queries are directed to human support",
        description:
          "When a customer inquiry requires account discretion, negotiation, or technical troubleshooting, the conversation can be transitioned to human agents where supported.",
        highlight: "Smooth escalation path when personal attention is needed",
        iconName: "UserPlus",
      },
      {
        id: "human-assistance",
        title: "Human agents understand the customer's issue with full context",
        description:
          "Support team members receive the complete transcript and customer inquiry details upfront, eliminating the frustration of asking customers to re-explain themselves.",
        highlight: "Context preservation ensures support continuity",
        iconName: "FileText",
      },
      {
        id: "complementary-model",
        title: "AI and human support complement each other",
        description:
          "AI removes the burden of repetitive routine questions so support specialists have the time, energy, and context to deliver empathetic, personalized care.",
        highlight: "Balanced customer experience combining speed with personal care",
        iconName: "Sparkles",
      },
    ],
  },

  workflow: {
    badge: "AI + Human Support Workflow",
    heading: "How Customer Support Conversations Flow",
    subheading:
      "A clear 5-stage customer journey designed to resolve simple questions instantly while ensuring human care is always within reach.",
    steps: [
      {
        step: "Step 01",
        number: "01",
        title: "Customer Starts a Conversation",
        description: "The customer opens chat on your website or support portal with a question or request.",
        detail: "Customers type their question naturally without needing to navigate complex phone menus or rigid decision trees.",
        actor: "Customer",
        iconName: "MessageSquare",
      },
      {
        step: "Step 02",
        number: "02",
        title: "AI Understands the Question",
        description: "Pingo analyzes the customer's question against your connected business knowledge.",
        detail: "Natural-language processing identifies the core topic, checks verified documentation, and assesses question complexity.",
        actor: "AI Assistant",
        iconName: "BrainCircuit",
      },
      {
        step: "Step 03",
        number: "03",
        title: "AI Provides an Answer for Common Queries",
        description: "Routine and knowledge-based questions receive an immediate, accurate response.",
        detail: "If the inquiry is covered in your connected documentation, the customer gets the exact answer within seconds.",
        actor: "AI Assistant",
        iconName: "CheckCircle",
      },
      {
        step: "Step 04",
        number: "04",
        title: "Human Agent Assists When Personal Support Is Needed",
        description: "If an issue is complex or sensitive, it is directed to a human support agent.",
        detail: "Where handover workflows are supported, human agents receive the full conversation context without making the customer repeat their issue.",
        actor: "Human Agent",
        iconName: "UserCheck",
      },
      {
        step: "Step 05",
        number: "05",
        title: "Customer Receives Further Assistance",
        description: "The support specialist provides personal care, verifies resolution, and completes the case.",
        detail: "The customer experiences a cohesive, supportive interaction that combines instant speed with genuine human care.",
        actor: "Customer",
        iconName: "HeartHandshake",
      },
    ],
  },

  useCases: {
    badge: "Real Support Scenarios",
    heading: "Practical Customer Support Scenarios",
    subheading:
      "From high-volume routine inquiries to delicate account conversations, see how AI and human support work together in practice.",
    items: [
      {
        id: "common-questions",
        title: "Common Product and Service Questions",
        category: "Routine Self-Service",
        description:
          "Customers frequently ask about business hours, return policies, feature availability, and pricing tiers.",
        scenario: "AI instantly answers standard policy and product questions using your verified FAQ knowledge.",
        resolutionPath: "AI Automated",
        iconName: "HelpCircle",
      },
      {
        id: "order-service-enquiries",
        title: "Order or Service-Related Enquiries",
        category: "Information Lookup",
        description:
          "Customers inquiring about delivery timelines, service milestones, or documentation requirements where information is connected.",
        scenario: "Pingo references connected guidelines to give clear status and process details without queue delays.",
        resolutionPath: "AI Automated",
        iconName: "PackageCheck",
      },
      {
        id: "complex-issues",
        title: "Complex Customer Issues Requiring Human Attention",
        category: "Human Escalation",
        description:
          "Multi-step billing investigations, bespoke configuration requests, or sensitive service complaints.",
        scenario: "Directed to an experienced support specialist with full background context already gathered.",
        resolutionPath: "Human Agent",
        iconName: "ShieldAlert",
      },
      {
        id: "follow-up-conversations",
        title: "Follow-Up Conversations",
        category: "Contextual Continuity",
        description:
          "Customers returning after an earlier interaction who need clarification on next steps or ongoing service.",
        scenario: "Previous context is retained so agents can pick up immediately without restarting the conversation.",
        resolutionPath: "AI + Human Handover",
        iconName: "History",
      },
      {
        id: "personalized-guidance",
        title: "Customers Needing Personalized Guidance",
        category: "Tailored Support",
        description:
          "High-value clients seeking customized onboarding recommendations or tailored solution advice.",
        scenario: "Human specialists provide dedicated consultative attention with AI providing instant document references in the background.",
        resolutionPath: "Human Agent",
        iconName: "UserHeart",
      },
    ],
  },

  benefits: {
    badge: "Balanced Support Impact",
    heading: "A Better Experience for Customers and Support Teams",
    subheading:
      "By balancing immediate automated answers with thoughtful human assistance, businesses improve support continuity and build deeper customer trust.",
    items: [
      {
        id: "customer-experience",
        title: "Better Customer Experience",
        description:
          "Customers receive instant answers for common questions without waiting, and empathetic personal care when situations demand it.",
        tag: "Speed & Empathy",
        iconName: "Smile",
      },
      {
        id: "human-assistance",
        title: "Empowered Human Agents",
        description:
          "Support agents are freed from answering repetitive basic queries, allowing them to focus on high-impact customer relationships.",
        tag: "Agent Fulfillment",
        iconName: "Users",
      },
      {
        id: "reduced-repetitive-work",
        title: "Reduced Repetitive Work",
        description:
          "Routine questions are resolved automatically from verified documentation, significantly decreasing support team backlog.",
        tag: "Operational Relief",
        iconName: "TrendingDown",
      },
      {
        id: "support-continuity",
        title: "Better Support Continuity",
        description:
          "Context is preserved during transitions, preventing customers from having to explain their situation over and over again.",
        tag: "Zero Context Loss",
        iconName: "GitMerge",
      },
    ],
  },

  cta: {
    badge: "Collaborative Customer Support",
    heading: "Support Customers Better with AI and Human Care Working Together.",
    description:
      "Deliver instant answers for common questions while ensuring your support team has the time and context to provide personal care when it matters most.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Product Guidance",
    secondaryHref: "/solutions/product-service-guidance",
  },
};
