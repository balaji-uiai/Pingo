export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  impactTag: string;
  iconName: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  example: {
    category: "Product" | "Service";
    inquiry: string;
    source: string;
    guidance: string;
  };
}

export interface UseCaseItem {
  id: string;
  title: string;
  type: string;
  description: string;
  sampleQuestion: string;
  guidancePoints: string[];
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
  metricLabel: string;
  iconName: string;
}

export const productServiceData = {
  hero: {
    badge: "Product & Service Guidance",
    headingPart1: "Help Customers Understand",
    headingPart2: "What You Offer.",
    description:
      "Give your customers clear product and service information through an AI-powered assistant that understands your business and guides them to the answers they need.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/ai-automation",
    },
    highlights: [
      "Product Specifications & Usage",
      "Service Tiers & Deliverables",
      "Grounded Option Comparisons",
    ],
  },

  challenges: {
    badge: "Information Complexity",
    heading: "Finding the Right Information Should Be Easy.",
    subheading:
      "When customers cannot quickly find or understand product details and service offerings, uncertainty stalls their decision-making process.",
    items: [
      {
        id: "complex-details",
        title: "Customers struggle to understand product or service details",
        description:
          "Dense technical jargon, ambiguous feature lists, and complex package descriptions leave buyers unsure which offering matches their needs.",
        impactTag: "Decision Hesitation",
        iconName: "HelpCircle",
      },
      {
        id: "fragmented-sources",
        title: "Important information is spread across multiple sources",
        description:
          "Specs reside in product sheets, service terms sit in contracts, and pricing tiers live in slide decks—forcing customers to hunt across disconnected tabs.",
        impactTag: "Scattered Context",
        iconName: "Layers",
      },
      {
        id: "repeated-questions",
        title: "Customers repeatedly ask similar questions",
        description:
          "Sales and support personnel spend hours answering repetitive basic inquiries about package limits, compatibility, and implementation timelines.",
        impactTag: "Team Inefficiency",
        iconName: "Clock",
      },
      {
        id: "unclear-decision-making",
        title: "Unclear information makes decision-making difficult",
        description:
          "Without clear, immediate clarification on key differences and prerequisites, prospective buyers postpone purchases or abandon their evaluation.",
        impactTag: "Lost Conversions",
        iconName: "FileWarning",
      },
    ] as ChallengeItem[],
  },

  capabilities: {
    badge: "Knowledge-Driven Clarity",
    heading: "Turn Complex Information Into Clear Guidance.",
    subheading:
      "Pingo bridges the gap between raw business information and customer comprehension, offering instant, grounded explanations in everyday language.",
    items: [
      {
        id: "product-information",
        title: "Product Information",
        description:
          "Help customers understand product details using connected knowledge—from technical specs and hardware compatibility to supported formats.",
        badge: "Product Depth",
        iconName: "Box",
        example: {
          category: "Product",
          inquiry: "What file formats does the platform export for client reports?",
          source: "Platform Specifications / Export & Reporting v2",
          guidance:
            "Pingo exports reports in CSV, PDF, and JSON formats. Automated daily summaries can also be synced directly into Google Sheets or webhook endpoints.",
        },
      },
      {
        id: "service-explanation",
        title: "Service Explanation",
        description:
          "Explain business services in a clear and accessible way, breaking down deliverables, milestone expectations, and scope boundaries.",
        badge: "Service Clarity",
        iconName: "Briefcase",
        example: {
          category: "Service",
          inquiry: "What is included in the Professional Implementation service?",
          source: "Services Directory / Onboarding & Migration Scope",
          guidance:
            "Professional Implementation includes custom schema mapping, knowledge base ingestion of up to 50 documents, and 2 live staff training workshops.",
        },
      },
      {
        id: "natural-language-questions",
        title: "Natural Language Questions",
        description:
          "Let customers ask questions naturally in conversational phrasing without needing exact keywords or complex menu navigation.",
        badge: "Conversational Flow",
        iconName: "MessageCircle",
        example: {
          category: "Product",
          inquiry: "Will this work if our team uses both Windows laptops and MacBooks?",
          source: "Hardware & Platform Compatibility Matrix",
          guidance:
            "Yes! Pingo is completely browser-based and works seamlessly across macOS, Windows, Linux, and all major modern web browsers.",
        },
      },
      {
        id: "contextual-guidance",
        title: "Contextual Guidance",
        description:
          "Provide relevant answers based on the information available, adapting explanations to the customer's specific industry and stage.",
        badge: "Smart Adaptation",
        iconName: "Compass",
        example: {
          category: "Service",
          inquiry: "We have 15 agents. Which service tier fits our team best?",
          source: "Subscription Tiers / Seat Allocations",
          guidance:
            "For teams with 10–25 agents, the Team Workspace tier provides shared knowledge management, role-based controls, and centralized billing.",
        },
      },
      {
        id: "knowledge-based-responses",
        title: "Knowledge-Based Responses",
        description:
          "Use connected business information to answer customer questions, ensuring every response is strictly factual and verifiable.",
        badge: "Grounded Accuracy",
        iconName: "ShieldCheck",
        example: {
          category: "Product",
          inquiry: "Are customer interactions encrypted while stored in Pingo?",
          source: "Security Architecture / Data Governance Whitepaper",
          guidance:
            "Yes. All customer interactions are encrypted at rest using AES-256 and transmitted securely using TLS 1.3 protocol standards.",
        },
      },
    ] as CapabilityItem[],
  },

  useCases: {
    badge: "Versatile Guidance",
    heading: "One Assistant. Multiple Ways to Guide Customers.",
    subheading:
      "From technical specifications to service tiers, see how Pingo provides clear explanations across real-world customer inquiries.",
    items: [
      {
        id: "features-specs",
        title: "Explaining product features and specifications",
        type: "Product Specifications",
        description:
          "Provide clear, instant explanations of technical capabilities, system requirements, and integration limits.",
        sampleQuestion: "What are the rate limits for the conversational API?",
        guidancePoints: [
          "Standard tiers support 100 requests per minute with automatic burst handling.",
          "Enterprise plans offer dedicated throughput and custom rate allocations.",
          "Real-time usage metrics are viewable inside the developer dashboard.",
        ],
        iconName: "Cpu",
      },
      {
        id: "available-services",
        title: "Describing available services",
        type: "Service Catalog",
        description:
          "Clarify service tiers, package inclusions, and ongoing support agreements so clients know exactly what to expect.",
        sampleQuestion: "What ongoing maintenance is provided with the Managed Service plan?",
        guidancePoints: [
          "Includes weekly knowledge base re-indexing and document synchronization.",
          "Quarterly model prompt reviews to optimize answer accuracy.",
          "Dedicated Slack channel access with priority 2-hour response SLA.",
        ],
        iconName: "Compass",
      },
      {
        id: "service-processes",
        title: "Clarifying service processes",
        type: "Process Transparency",
        description:
          "Walk customers step-by-step through onboarding timelines, audit stages, or project kickoff sequences.",
        sampleQuestion: "How does the onboarding process work after we sign up?",
        guidancePoints: [
          "Day 1: Account setup and invitation of designated workspace admins.",
          "Days 2–3: Uploading and structuring initial knowledge sources.",
          "Day 4: Live team walkthrough and test query validation.",
        ],
        iconName: "GitMerge",
      },
      {
        id: "product-usage",
        title: "Answering questions about product usage",
        type: "Usage Guidance",
        description:
          "Help customers get the most out of their products by explaining best practices, shortcuts, and setup instructions.",
        sampleQuestion: "What is the best way to organize documents before uploading?",
        guidancePoints: [
          "Group related files by topic (e.g., Billing, Technical Specs, Policies).",
          "Ensure headers and table formats are clear and up to date.",
          "Remove redundant legacy drafts to maintain high retrieval precision.",
        ],
        iconName: "BookOpen",
      },
      {
        id: "compare-options",
        title: "Helping customers compare available options",
        type: "Objective Comparison",
        description:
          "Help customers compare different plans, products, or service packages based strictly on verified documentation.",
        sampleQuestion: "How does the Starter plan compare to the Professional plan?",
        guidancePoints: [
          "Starter includes 5 connected documents and single-seat admin access.",
          "Professional unlocks unlimited knowledge sources and multi-user seats.",
          "Professional also adds custom domain support and advanced analytics.",
        ],
        iconName: "Columns",
      },
    ] as UseCaseItem[],
  },

  workflow: {
    badge: "Step-by-Step Guidance",
    heading: "How It Works",
    subheading:
      "A seamless four-step workflow from connected knowledge to confident customer guidance.",
    steps: [
      {
        step: "01",
        number: "Step 1",
        title: "Add Product & Service Information",
        description: "Connect supported information sources.",
        detail:
          "Upload product catalogs, specification sheets, service agreements, and FAQ documents directly into your secure workspace.",
        iconName: "FolderPlus",
      },
      {
        step: "02",
        number: "Step 2",
        title: "Organize Your Knowledge",
        description: "Structure product and service information.",
        detail:
          "Pingo classifies and vectors your offerings into an indexed knowledge base ready for pinpoint contextual search.",
        iconName: "FileSpreadsheet",
      },
      {
        step: "03",
        number: "Step 3",
        title: "Customer Asks a Question",
        description: "Customers ask in natural language.",
        detail:
          "Prospects and customers type questions in everyday language on your website, app, or customer portal.",
        iconName: "MessageSquare",
      },
      {
        step: "04",
        number: "Step 4",
        title: "Receive Clear Guidance",
        description: "Pingo retrieves relevant knowledge and provides an answer.",
        detail:
          "The assistant provides clear, accurate guidance with references to the exact product or service specifications.",
        iconName: "CheckCircle",
      },
    ] as WorkflowStep[],
  },

  benefits: {
    badge: "Measurable Impact",
    heading: "Make Every Product and Service Easier to Understand.",
    subheading:
      "Empower your customers with transparent, accurate details that remove ambiguity and inspire purchase confidence.",
    items: [
      {
        id: "clearer-info",
        title: "Clearer product information",
        description:
          "Transform dense technical specifications into clear, digestible answers that any customer can understand.",
        metricLabel: "Transparent Specs",
        iconName: "Sparkles",
      },
      {
        id: "service-understanding",
        title: "Better service understanding",
        description:
          "Communicate package inclusions, scopes of work, and service boundaries with absolute clarity.",
        metricLabel: "Explicit Deliverables",
        iconName: "CheckCheck",
      },
      {
        id: "easier-access",
        title: "Easier access to relevant details",
        description:
          "Save customers from combing through multi-page brochures—answers are delivered instantly on demand.",
        metricLabel: "Zero Friction",
        iconName: "Search",
      },
      {
        id: "reduced-queries",
        title: "Reduced repetitive questions",
        description:
          "Automate routine inquiries so sales and support teams can dedicate time to high-value consulting.",
        metricLabel: "Time Saved",
        iconName: "Clock",
      },
      {
        id: "informed-decisions",
        title: "More informed customer decisions",
        description:
          "Eliminate doubt by providing accurate comparisons and prerequisites, leading to confident, informed purchases.",
        metricLabel: "High Confidence",
        iconName: "TrendingUp",
      },
    ] as BenefitItem[],
  },

  cta: {
    badge: "Start Clarifying Today",
    heading: "Help Customers Discover More About Your Business.",
    description:
      "Make your product and service information easier to understand with Pingo.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Features",
    secondaryHref: "/features/ai-automation",
  },
};

