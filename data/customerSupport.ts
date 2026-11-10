export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  impact: string;
  iconName: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
  preview: {
    query: string;
    source: string;
    response: string;
  };
}

export interface UseCaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  sampleQuestion: string;
  sampleAnswer: string;
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

export const customerSupportData = {
  hero: {
    badge: "AI-Powered Customer Support",
    headingPart1: "Customer Support That Understands",
    headingPart2: "Your Customers.",
    description:
      "Help your customers find the answers they need with an AI-powered assistant that understands your business information and provides relevant guidance.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/ai-automation",
    },
    highlights: [
      "Natural Language Understanding",
      "Connected Knowledge Retrieval",
      "Consistent & Verified Answers",
    ],
  },

  challenges: {
    badge: "The Support Dilemma",
    heading: "Customer Support Shouldn't Be Complicated.",
    subheading:
      "Traditional support channels often force customers into long wait times and repetitive searches across fragmented documentation.",
    items: [
      {
        id: "information-search",
        title: "Customers struggle to find the right information",
        description:
          "Sifting through endless FAQ directories and lengthy documentation leaves customers frustrated when they need immediate, actionable answers.",
        impact: "High customer friction and delayed resolutions",
        iconName: "SearchX",
      },
      {
        id: "repetitive-queries",
        title: "Repeated questions consume support teams' time",
        description:
          "Support agents spend countless hours manually answering identical routine inquiries instead of focusing on complex customer needs.",
        impact: "Agent burnout and escalating operational overhead",
        iconName: "Clock",
      },
      {
        id: "scattered-sources",
        title: "Information is scattered across different sources",
        description:
          "Product specs, policy guides, release notes, and team files live in disconnected silos, making accurate verification slow and difficult.",
        impact: "Knowledge fragmentation and information gaps",
        iconName: "FolderGit2",
      },
      {
        id: "inconsistent-guidance",
        title: "Customers need clear and consistent guidance",
        description:
          "Varying explanations from different agents or outdated web articles lead to confusion and degrade trust in the brand.",
        impact: "Misaligned communication and diminished user trust",
        iconName: "FileWarning",
      },
    ] as ChallengeItem[],
  },

  capabilities: {
    badge: "Core Support Capabilities",
    heading: "Make Every Customer Interaction More Helpful.",
    subheading:
      "Equip your customers with an AI assistant that delivers accurate, context-aware answers directly grounded in your verified business knowledge.",
    items: [
      {
        id: "instant-answers",
        title: "Instant Answers",
        description:
          "Provide relevant answers using connected business knowledge without keeping customers waiting in support queues.",
        highlight: "Real-time responses verified against your source documents",
        iconName: "Zap",
        preview: {
          query: "What is your refund policy for annual subscriptions?",
          source: "Knowledge Base / Billing & Subscriptions / Policy_v3.pdf",
          response:
            "Annual subscriptions can be refunded within 14 days of purchase. After 14 days, prorated credits are applied to your workspace balance.",
        },
      },
      {
        id: "natural-conversations",
        title: "Natural Conversations",
        description:
          "Allow customers to ask questions in their own words, avoiding rigid menu trees, keyword guesswork, or confusing form fields.",
        highlight: "Understands customer intent, phrasing, and conversational context",
        iconName: "MessageSquareQuote",
        preview: {
          query: "Can I bring my team in without losing what we already set up?",
          source: "Workspace Administration / Team Management Guide",
          response:
            "Yes! Inviting team members preserves all existing knowledge bases and custom conversation history in your workspace.",
        },
      },
      {
        id: "context-aware-guidance",
        title: "Context-Aware Guidance",
        description:
          "Understand customer questions in detail and provide relevant information tailored to their specific journey and inquiries.",
        highlight: "Maintains multi-turn conversational context seamlessly",
        iconName: "Sparkles",
        preview: {
          query: "How do I connect that with our Slack channel?",
          source: "Integrations & Channels / Collaboration Tools",
          response:
            "Navigate to Workspace Settings > Integrations > Slack. Click 'Connect' and select the target channel to receive live notifications.",
        },
      },
      {
        id: "organized-knowledge",
        title: "Organized Knowledge",
        description:
          "Keep business information structured and accessible, ensuring answers reflect the most current policies and product details.",
        highlight: "Centralized repository with automated index synchronization",
        iconName: "Database",
        preview: {
          query: "Are there storage limits on uploaded knowledge files?",
          source: "Platform Specifications / Resource Allocation",
          response:
            "Standard accounts include 10GB of structured vector storage, expandable anytime from your admin dashboard.",
        },
      },
      {
        id: "consistent-responses",
        title: "Consistent Responses",
        description:
          "Help customers receive clear and consistent guidance across every channel, maintaining brand voice and factual accuracy.",
        highlight: "Guaranteed consistency across all customer touchpoints",
        iconName: "CheckCircle2",
        preview: {
          query: "What security compliance standards does Pingo meet?",
          source: "Security & Compliance Overview / SOC2_Compliance.pdf",
          response:
            "Pingo adheres to SOC 2 Type II controls and implements AES-256 encryption for data at rest and TLS 1.3 for data in transit.",
        },
      },
    ] as CapabilityItem[],
  },

  useCases: {
    badge: "Real-World Scenarios",
    heading: "Customer Support in Action",
    subheading:
      "Explore practical ways Pingo assists customers with immediate, accurate resolution across common support touchpoints.",
    items: [
      {
        id: "product-questions",
        title: "Answering Product-Related Questions",
        category: "Product Knowledge",
        description:
          "Help prospective and existing customers understand feature capabilities, system requirements, and technical specifications.",
        sampleQuestion: "Does Pingo support multi-language customer queries?",
        sampleAnswer:
          "Yes, Pingo automatically detects and responds in over 40 languages based on the customer's input language.",
        iconName: "Package",
      },
      {
        id: "service-explanation",
        title: "Explaining Business Services",
        category: "Service Guidance",
        description:
          "Clarify service tiers, package inclusions, and implementation options without requiring sales intervention.",
        sampleQuestion: "What is included with the Enterprise onboarding package?",
        sampleAnswer:
          "Enterprise onboarding includes dedicated knowledge ingestion, customized workflow setup, and a dedicated support lead.",
        iconName: "Briefcase",
      },
      {
        id: "process-guidance",
        title: "Guiding Customers Through Processes",
        category: "Step-by-Step",
        description:
          "Walk users through multi-step onboarding, configuration settings, or checkout procedures with concise, structured steps.",
        sampleQuestion: "How do I generate an API key for custom webhooks?",
        sampleAnswer:
          "Go to Developer Settings > API Keys, click 'Generate New Key', assign read/write permissions, and copy your token securely.",
        iconName: "Route",
      },
      {
        id: "information-lookup",
        title: "Helping Customers Find Relevant Information",
        category: "Knowledge Lookup",
        description:
          "Retrieve specific clauses, policy sections, or product manuals from large repositories instantly.",
        sampleQuestion: "Where can I find your service uptime SLA document?",
        sampleAnswer:
          "Our 99.95% uptime SLA is detailed in Section 4 of the Master Service Agreement, accessible via your billing portal.",
        iconName: "FileSearch",
      },
      {
        id: "faq-resolution",
        title: "Responding to Frequently Asked Questions",
        category: "Instant FAQ",
        description:
          "Instantly resolve high-volume everyday queries regarding hours, return windows, password resets, and account access.",
        sampleQuestion: "What happens if our payment method fails during renewal?",
        sampleAnswer:
          "We offer a 7-day grace period with automatic retry attempts before any workspace services are temporarily paused.",
        iconName: "HelpCircle",
      },
    ] as UseCaseItem[],
  },

  workflow: {
    badge: "Simple Implementation",
    heading: "How It Works",
    subheading:
      "From connected information to confident customer responses in four straightforward steps.",
    steps: [
      {
        step: "01",
        number: "Step 1",
        title: "Connect Your Knowledge",
        description: "Add supported business information sources.",
        detail:
          "Import documentation, FAQs, product sheets, and policy manuals directly into your secure Pingo environment.",
        iconName: "Share2",
      },
      {
        step: "02",
        number: "Step 2",
        title: "Organize Information",
        description: "Structure the information into a knowledge base.",
        detail:
          "Pingo parses, indexes, and organizes your materials into semantic vectors for rapid, pinpoint retrieval.",
        iconName: "Layers",
      },
      {
        step: "03",
        number: "Step 3",
        title: "Ask Questions",
        description: "Customers interact with the Pingo assistant.",
        detail:
          "Customers inquire naturally on your website or support portal in conversational language without specialized phrasing.",
        iconName: "MessagesSquare",
      },
      {
        step: "04",
        number: "Step 4",
        title: "Get Relevant Answers",
        description: "Pingo retrieves relevant information and responds.",
        detail:
          "The assistant synthesizes verified source context to deliver clear, precise guidance within seconds.",
        iconName: "CheckCircle",
      },
    ] as WorkflowStep[],
  },

  benefits: {
    badge: "Measured Value",
    heading: "Better Guidance. Better Customer Experiences.",
    subheading:
      "Provide modern, frictionless customer support that strengthens satisfaction while reducing repetitive manual effort.",
    items: [
      {
        id: "access",
        title: "Easier access to business information",
        description:
          "Customers find accurate answers in seconds without navigating complicated menus or waiting on hold.",
        tag: "Instant Discovery",
        iconName: "Compass",
      },
      {
        id: "reduction",
        title: "Reduced repetitive queries",
        description:
          "Automate high-volume everyday questions so your support team can focus on nuanced, high-touch inquiries.",
        tag: "Support Efficiency",
        iconName: "Clock",
      },
      {
        id: "consistency",
        title: "Consistent customer guidance",
        description:
          "Eliminate conflicting information by grounding every response in verified, up-to-date business documentation.",
        tag: "Verified Accuracy",
        iconName: "ShieldCheck",
      },
      {
        id: "accessibility",
        title: "Improved information accessibility",
        description:
          "Make deep product documentation easily digestible and understandable for customers of all technical levels.",
        tag: "Clear Communication",
        iconName: "BookOpenCheck",
      },
      {
        id: "experience",
        title: "A smoother customer experience",
        description:
          "Deliver immediate, friendly, and respectful assistance that turns routine questions into positive brand impressions.",
        tag: "Delightful Support",
        iconName: "Smile",
      },
    ] as BenefitItem[],
  },

  cta: {
    badge: "Get Started Today",
    heading: "Make Customer Support More Accessible.",
    description:
      "Give your customers a smarter way to discover information and understand your services.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Features",
    secondaryHref: "/features/ai-automation",
  },
};

