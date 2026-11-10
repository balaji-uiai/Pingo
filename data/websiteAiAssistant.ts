export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  visitorFriction: string;
  iconName: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
  demonstration: {
    visitorQuery: string;
    assistantGuidance: string;
    sourceRef: string;
  };
}

export interface UseCaseItem {
  id: string;
  title: string;
  scenario: string;
  description: string;
  visitorQuestion: string;
  assistantResponse: string;
  destinationPage: string;
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
  highlight: string;
  iconName: string;
}

export const websiteAiAssistantData = {
  hero: {
    badge: "Website AI Assistant",
    headingPart1: "Turn Your Website Into an",
    headingPart2: "Intelligent Assistant.",
    description:
      "Help website visitors discover information, understand your services, and get relevant answers through an AI assistant powered by your business knowledge.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/ai-automation",
    },
    highlights: [
      "Natural Language Visitor Queries",
      "Grounded In Your Business Knowledge",
      "Instant On-Site Guidance",
    ],
  },

  challenges: {
    badge: "Visitor Navigation Friction",
    heading: "Your Website Has Information. Can Visitors Find It?",
    subheading:
      "Static web pages often require extensive clicking and reading. When visitors cannot find quick answers, they leave without engaging.",
    items: [
      {
        id: "locating-information",
        title: "Visitors struggle to locate specific information",
        description:
          "Traditional navigation menus and keyword search boxes require visitors to know exact terminology, leading to dead-end searches.",
        visitorFriction: "Visitors give up after 2–3 unfruitful clicks",
        iconName: "SearchX",
      },
      {
        id: "spread-across-pages",
        title: "Important details are spread across multiple website pages",
        description:
          "Pricing notes, service deliverables, and onboarding steps live on separate subpages, forcing visitors to synthesize fragmented details manually.",
        visitorFriction: "Fragmented context stalls buyer momentum",
        iconName: "Split",
      },
      {
        id: "bounce-on-confusion",
        title: "Customers leave when they cannot find clear answers",
        description:
          "When prospective clients hit an information barrier with no instant way to clarify questions, they navigate away to competitors.",
        visitorFriction: "High bounce rate on high-intent service pages",
        iconName: "LogOut",
      },
      {
        id: "repetitive-inquiries",
        title: "Support teams repeatedly handle common questions",
        description:
          "Frontline staff spend substantial time answering questions that are already documented on the website but were hard for visitors to find.",
        visitorFriction: "Overburdened support queues with routine queries",
        iconName: "Clock",
      },
    ] as ChallengeItem[],
  },

  capabilities: {
    badge: "Conversational Website Intelligence",
    heading: "Make Your Website More Helpful With AI.",
    subheading:
      "Transform passive browsing into an interactive experience where visitors receive immediate, accurate guidance grounded in your business knowledge.",
    items: [
      {
        id: "ai-assistance",
        title: "AI-Powered Assistance",
        description:
          "Let visitors interact with an intelligent assistant embedded directly into their browsing experience for immediate answers.",
        tag: "Interactive AI",
        iconName: "Bot",
        demonstration: {
          visitorQuery: "Can your team help us migrate our existing knowledge base?",
          assistantGuidance:
            "Yes! Our Professional Onboarding service includes complete document migration, schema structuring, and test validation for your team.",
          sourceRef: "Website / Services / Migration & Setup",
        },
      },
      {
        id: "natural-language",
        title: "Natural Language Interaction",
        description:
          "Allow visitors to ask questions in their own words without needing exact keywords, complex filters, or rigid menu selections.",
        tag: "Conversational",
        iconName: "MessageSquare",
        demonstration: {
          visitorQuery: "Do you have something for smaller agencies with just 5 people?",
          assistantGuidance:
            "Our Starter Workspace is tailored for teams under 10 members, offering shared document retrieval, 5 connected knowledge sources, and full web chat access.",
          sourceRef: "Website / Pricing / Starter Plan",
        },
      },
      {
        id: "website-knowledge",
        title: "Website Knowledge",
        description:
          "Use connected business information to provide relevant answers, ensuring guidance accurately reflects your published products and terms.",
        tag: "Connected Sources",
        iconName: "Database",
        demonstration: {
          visitorQuery: "Where are our uploaded files stored and are they encrypted?",
          assistantGuidance:
            "Files are stored in secure vector storage encrypted at rest with AES-256 and transmitted using TLS 1.3 encryption protocols.",
          sourceRef: "Website / Security & Compliance",
        },
      },
      {
        id: "contextual-responses",
        title: "Contextual Responses",
        description:
          "Retrieve information relevant to each question, understanding multi-turn conversational context to give personalized guidance.",
        tag: "Context Aware",
        iconName: "Sparkles",
        demonstration: {
          visitorQuery: "How does that compare to the Enterprise option you mentioned?",
          assistantGuidance:
            "Unlike Starter, Enterprise includes unlimited document connections, custom security SLAs, dedicated account management, and custom domain white-labeling.",
          sourceRef: "Website / Pricing / Plan Comparison",
        },
      },
      {
        id: "customer-guidance",
        title: "Customer Guidance",
        description:
          "Help visitors understand products, services, and business processes step-by-step so they can take the next step with confidence.",
        tag: "Actionable Guidance",
        iconName: "Compass",
        demonstration: {
          visitorQuery: "What is the first step to test this out on our site?",
          assistantGuidance:
            "You can start by booking an onboarding consultation or connecting your primary FAQ document to test natural language answers immediately.",
          sourceRef: "Website / Getting Started Guide",
        },
      },
    ] as CapabilityItem[],
  },

  useCases: {
    badge: "Visitor Touchpoints",
    heading: "Give Every Website Visitor a Better Experience.",
    subheading:
      "See how Pingo engages website visitors with immediate answers across common exploration stages.",
    items: [
      {
        id: "service-answers",
        title: "Answering questions about business services",
        scenario: "Service Discovery",
        description:
          "Clarify service packages, consulting deliverables, and ongoing support terms without forcing visitors to submit a contact form for basic facts.",
        visitorQuestion: "What is included with your Managed Services package?",
        assistantResponse:
          "Managed Services includes weekly knowledge base updates, automated source re-indexing, dedicated SLA monitoring, and a designated customer success manager.",
        destinationPage: "View Managed Services Overview",
        iconName: "Briefcase",
      },
      {
        id: "product-info",
        title: "Explaining product information",
        scenario: "Product Specifications",
        description:
          "Provide immediate technical details, format compatibilities, and integration possibilities directly within the browser.",
        visitorQuestion: "Does Pingo work with PDF files containing multi-column tables?",
        assistantResponse:
          "Yes. Pingo's ingestion parser extracts structured tables and text across multi-column PDF layouts to preserve factual context for queries.",
        destinationPage: "Explore Supported Formats",
        iconName: "Box",
      },
      {
        id: "page-guidance",
        title: "Guiding visitors to relevant information",
        scenario: "Navigation Assistance",
        description:
          "Point visitors to the exact case study, documentation article, or pricing calculator they are seeking with direct links.",
        visitorQuestion: "Where can I read about your SOC 2 compliance report?",
        assistantResponse:
          "You can review our compliance overview and request our SOC 2 Type II summary report on our Security & Administration page.",
        destinationPage: "Go to Security Overview",
        iconName: "Compass",
      },
      {
        id: "faq-responses",
        title: "Responding to frequently asked questions",
        scenario: "Instant FAQ",
        description:
          "Instantly resolve high-frequency questions about hours, billing models, cancellations, and setup timelines.",
        visitorQuestion: "Can we cancel our subscription at any time without fees?",
        assistantResponse:
          "Yes, subscriptions can be canceled anytime from your account dashboard with zero cancellation penalties or hidden fees.",
        destinationPage: "Review Billing Terms",
        iconName: "HelpCircle",
      },
      {
        id: "process-understanding",
        title: "Helping visitors understand business processes",
        scenario: "Process Clarity",
        description:
          "Walk potential clients through how your team operates, what onboarding entails, and expected delivery turnaround times.",
        visitorQuestion: "How long does typical implementation take from start to launch?",
        assistantResponse:
          "Standard implementations typically take 3 to 5 business days, including knowledge ingestion, admin review, and verification testing.",
        destinationPage: "Read Implementation Guide",
        iconName: "Route",
      },
    ] as UseCaseItem[],
  },

  workflow: {
    badge: "Four-Step Setup",
    heading: "How It Works",
    subheading:
      "A straightforward workflow to transform your website with an intelligent knowledge assistant.",
    steps: [
      {
        step: "01",
        number: "Step 1",
        title: "Connect Business Information",
        description: "Add supported knowledge sources.",
        detail:
          "Import your product guides, FAQs, service sheets, and policy documentation into your secure workspace.",
        iconName: "FolderPlus",
      },
      {
        step: "02",
        number: "Step 2",
        title: "Build Your Knowledge Base",
        description: "Organize the information for retrieval.",
        detail:
          "Pingo structures your content into indexed vector embeddings to enable rapid semantic search and factual synthesis.",
        iconName: "Layers",
      },
      {
        step: "03",
        number: "Step 3",
        title: "Add Pingo to Your Website",
        description: "Deploy the assistant interface to your web pages.",
        detail:
          "Integrate the assistant directly onto your website using supported embed or script methods for visitors to access.",
        iconName: "Globe",
      },
      {
        step: "04",
        number: "Step 4",
        title: "Assist Website Visitors",
        description: "Let visitors ask questions and receive relevant answers.",
        detail:
          "Visitors receive instant, verified answers to their questions 24/7 without waiting for email responses.",
        iconName: "MessageCircle",
      },
    ] as WorkflowStep[],
  },

  benefits: {
    badge: "Measurable Impact",
    heading: "Make Your Website Work Smarter.",
    subheading:
      "Turn your static web presence into an interactive guide that delivers immediate clarity and builds buyer confidence.",
    items: [
      {
        id: "discovery",
        title: "Easier information discovery",
        description:
          "Visitors get straight to the answers they need without navigating complex dropdown menus or pagination.",
        highlight: "Frictionless Discovery",
        iconName: "Search",
      },
      {
        id: "interactions",
        title: "More helpful website interactions",
        description:
          "Turn passive readers into engaged visitors through responsive, natural conversations tailored to their questions.",
        highlight: "Engaged Visitors",
        iconName: "Sparkles",
      },
      {
        id: "accessibility",
        title: "Accessible business knowledge",
        description:
          "Deep technical specs and service documentation are made instantly understandable in plain everyday language.",
        highlight: "Instant Clarity",
        iconName: "BookOpen",
      },
      {
        id: "consistency",
        title: "Consistent answers to common questions",
        description:
          "Ensure every visitor receives accurate, verified guidance that strictly matches your current documentation.",
        highlight: "Reliable Accuracy",
        iconName: "ShieldCheck",
      },
      {
        id: "experience",
        title: "Better visitor experience",
        description:
          "Provide immediate 24/7 support that leaves a modern, professional impression on prospective customers.",
        highlight: "Superior Experience",
        iconName: "Smile",
      },
    ] as BenefitItem[],
  },

  cta: {
    badge: "Transform Your Site",
    heading: "Give Your Website an Intelligent Voice.",
    description:
      "Help visitors find answers and understand your business with Pingo.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Features",
    secondaryHref: "/features/ai-automation",
  },
};

