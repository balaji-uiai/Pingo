export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  impactTag: string;
  iconName: string;
}

export interface HowPingoHelpsItem {
  id: string;
  title: string;
  description: string;
  benefitTag: string;
  iconName: string;
}

export interface ProductComparisonDemo {
  userQuestion: string;
  productA: {
    name: string;
    tagline: string;
    targetTeam: string;
    features: { label: string; value: string }[];
  };
  productB: {
    name: string;
    tagline: string;
    targetTeam: string;
    features: { label: string; value: string }[];
  };
  guidanceSummary: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  customerPrompt: string;
  pingoGuidance: string;
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

export const productServiceData = {
  hero: {
    badge: "Product Discovery & Purchase Decision Support",
    headingPart1: "Help Customers Discover",
    headingPart2: "the Right Product or Service.",
    description:
      "Make it easier for customers to explore your offerings, understand their features, and find the information they need to make confident decisions.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/ai-automation",
    },
    comparisonDemo: {
      userQuestion: "What is the difference between the Starter and Professional packages for a 15-person design team?",
      productA: {
        name: "Starter Package",
        tagline: "Essential foundations for small teams",
        targetTeam: "Up to 5 team members",
        features: [
          { label: "Team Seats", value: "5 Included" },
          { label: "Knowledge Bases", value: "1 Shared Hub" },
          { label: "Custom Branding", value: "Standard Templates" },
          { label: "Integrations", value: "Web Chat Only" },
        ],
      },
      productB: {
        name: "Professional Package",
        tagline: "Advanced capabilities for growing agencies",
        targetTeam: "Unlimited team members",
        features: [
          { label: "Team Seats", value: "Unlimited Seats" },
          { label: "Knowledge Bases", value: "Up to 5 Isolated Hubs" },
          { label: "Custom Branding", value: "Full White-Label & CSS" },
          { label: "Integrations", value: "Web, Mobile SDK & API" },
        ],
      },
      guidanceSummary:
        "For a 15-person agency managing multiple client brands, the Professional Package is the recommended choice because it supports unlimited seats, white-label branding, and dedicated isolated knowledge centers.",
    },
    highlights: [
      "Side-by-Side Feature Comparisons",
      "Tailored Offering Recommendations",
      "Transparent Specification Clarity",
      "Confident Buying Decisions",
    ],
  },

  challenges: {
    badge: "The Buyer Friction",
    heading: "Choosing the Right Product Shouldn't Be Complicated.",
    subheading:
      "When customers struggle to differentiate offerings or find critical specifications, buying momentum stalls and potential deals are lost.",
    items: [
      {
        id: "product-differences",
        title: "Customers struggle to understand product differences",
        description:
          "Similar product tiers, overlapping feature lists, and complex technical jargon leave buyers unsure which offering actually fits their needs.",
        impactTag: "Purchase Hesitation",
        iconName: "SplitSquareVertical",
      },
      {
        id: "scattered-details",
        title: "Product details are spread across multiple pages",
        description:
          "Visitors have to jump back and forth between pricing grids, feature pages, and technical documentation to assemble a complete picture.",
        impactTag: "High Bounce Rate",
        iconName: "FileSpreadsheet",
      },
      {
        id: "buried-features",
        title: "Visitors cannot easily find specific features or service information",
        description:
          "Important constraints, compatibility requirements, or service inclusions are buried in footnotes, preventing swift validation.",
        impactTag: "Information Blindspots",
        iconName: "SearchX",
      },
      {
        id: "pre-purchase-questions",
        title: "Customers have questions before choosing a product",
        description:
          "Buyers need immediate clarification on sizing, implementation steps, and support levels right at the decision-making point.",
        impactTag: "Delayed Conversion",
        iconName: "HelpCircle",
      },
      {
        id: "unclear-loss",
        title: "Businesses lose potential customers when information is unclear",
        description:
          "Instead of submitting an enquiry or digging through confusing catalogs, frustrated shoppers abandon the site for clearer competitors.",
        impactTag: "Lost Revenue",
        iconName: "TrendingDown",
      },
    ],
  },

  howPingoHelps: {
    badge: "Clear Product Guidance",
    heading: "Guiding Customers From Discovery to Decision.",
    subheading:
      "Pingo turns static product catalogs and complex service tables into conversational guidance that answers questions and clarifies differences.",
    items: [
      {
        id: "explain-features",
        title: "Explains product features and specifications using connected information",
        description:
          "Directly answers technical questions on compatibility, dimensions, integrations, and deliverables using your verified documentation.",
        benefitTag: "Accurate Specifications",
        iconName: "SlidersHorizontal",
      },
      {
        id: "understand-services",
        title: "Helps customers understand available services",
        description:
          "Breaks down complex service scopes, turnaround times, prerequisites, and milestone deliverables into clear, digestible explanations.",
        benefitTag: "Scope Transparency",
        iconName: "Briefcase",
      },
      {
        id: "answers-differences",
        title: "Answers questions about product differences",
        description:
          "Delivers side-by-side comparative analysis highlighting key distinctions between plans, packages, or equipment models.",
        benefitTag: "Direct Comparison",
        iconName: "Scale",
      },
      {
        id: "tailored-details",
        title: "Provides relevant details based on customer requirements",
        description:
          "Listens to customer team size, technical environment, and usage volume to surface the exact package details relevant to their situation.",
        benefitTag: "Contextual Relevance",
        iconName: "Target",
      },
      {
        id: "guided-exploration",
        title: "Guides customers through product and service information",
        description:
          "Assists buyers through logical discovery steps, clarifying prerequisites and directing them toward confident purchasing decisions.",
        benefitTag: "Seamless Journey",
        iconName: "Compass",
      },
    ],
  },

  workflow: {
    badge: "Product Discovery Journey",
    heading: "How Pingo Guides Buyers to the Right Decision",
    subheading:
      "A structured 5-stage customer journey designed to remove buying confusion, explain specifications, and accelerate confident selections.",
    steps: [
      {
        step: "Step 01",
        number: "01",
        title: "Customer Explores Products or Services",
        description: "The visitor browses your website offerings, catalog, or pricing options.",
        detail: "The customer reviews high-level offerings but requires clarity on specific capabilities and fit.",
        iconName: "Compass",
      },
      {
        step: "Step 02",
        number: "02",
        title: "Customer Asks About a Specific Offering",
        description: "The customer asks a question about feature support, limits, or plan fit.",
        detail: "Inquiries like 'Which plan includes custom API endpoints?' or 'Does this service cover migration?' are typed naturally.",
        iconName: "HelpCircle",
      },
      {
        step: "Step 03",
        number: "03",
        title: "Pingo Retrieves Relevant Product Information",
        description: "Pingo searches connected product sheets, tables, and documentation.",
        detail: "Verified specifications, pricing tables, and service inclusion docs are instantly referenced.",
        iconName: "Search",
      },
      {
        step: "Step 04",
        number: "04",
        title: "Customer Understands Features and Differences",
        description: "The customer receives a clear, transparent comparison tailored to their query.",
        detail: "Pingo explains the exact trade-offs, inclusions, and distinctions without sales fluff or confusion.",
        iconName: "CheckCircle",
      },
      {
        step: "Step 05",
        number: "05",
        title: "Customer Makes a More Informed Decision",
        description: "Equipped with verified answers, the customer moves forward with confidence.",
        detail: "Buyers select the right tier, request a proposal, or complete purchase with zero lingering doubt.",
        iconName: "Award",
      },
    ],
  },

  useCases: {
    badge: "Real-World Scenarios",
    heading: "Everyday Product Guidance Scenarios",
    subheading:
      "Explore how Pingo answers real-world buyer questions across features, comparisons, and service package selection.",
    items: [
      {
        id: "feature-explanation",
        title: "Explaining Product Features",
        category: "Capability Deep-Dive",
        description:
          "Explaining technical capabilities such as data encryption, export formats, or API rate limits in accessible language.",
        customerPrompt: "'Does the Business Plan support SSO with Okta and custom domain routing?'",
        pingoGuidance:
          "Verified against technical spec sheet: 'Yes, SAML SSO with Okta is natively supported on the Business Plan, along with custom CNAME domain routing.'",
        iconName: "SlidersHorizontal",
      },
      {
        id: "comparing-products",
        title: "Comparing Two Products or Plans",
        category: "Side-by-Side Analysis",
        description:
          "Breaking down the trade-offs between two tiers or adjacent models to help the buyer choose without guesswork.",
        customerPrompt: "'What is the main difference between Model Pro and Model Enterprise?'",
        pingoGuidance:
          "Highlights team seat limits, SLA response guarantees (4h vs 1h), and dedicated knowledge base quotas side-by-side.",
        iconName: "Scale",
      },
      {
        id: "service-packages",
        title: "Understanding Service Packages",
        category: "Scope of Work",
        description:
          "Clarifying what is included in consulting, implementation, or creative packages and what counts as an add-on.",
        customerPrompt: "'Does the Onboarding Service include data migration from our legacy CRM?'",
        pingoGuidance:
          "References scope doc: 'The Standard Onboarding covers schema setup and up to 50k customer records. Additional records can be added via the Data Migration add-on.'",
        iconName: "Briefcase",
      },
      {
        id: "availability-specifications",
        title: "Answering Availability or Specification Questions",
        category: "Technical Verification",
        description:
          "Validating operating system compatibility, regional availability, or hardware prerequisites.",
        customerPrompt: "'Is the desktop client compatible with macOS Sonoma on Apple Silicon M-series chips?'",
        pingoGuidance:
          "Checks release notes: 'Yes, full native Apple Silicon compatibility is supported on macOS 14.0 Sonoma and higher.'",
        iconName: "Cpu",
      },
      {
        id: "how-service-works",
        title: "Explaining How a Service Works",
        category: "Process Walkthrough",
        description:
          "Walking potential clients through the step-by-step engagement workflow from booking to deliverable handover.",
        customerPrompt: "'What are the phases and timelines involved in the SEO Audit Service?'",
        pingoGuidance:
          "Outlines Phase 1 (technical crawl, days 1-3), Phase 2 (content gap analysis, days 4-7), and Phase 3 (executive presentation on day 10).",
        iconName: "Route",
      },
    ],
  },

  benefits: {
    badge: "Buyer Decision Impact",
    heading: "Why Clear Product Guidance Drives Better Decisions",
    subheading:
      "When product information is clear, accessible, and easily compared, customers choose faster and with greater confidence.",
    items: [
      {
        id: "product-understanding",
        title: "Deeper Product Understanding",
        description:
          "Customers comprehend feature sets, capabilities, and technical specifications accurately without wading through fragmented manuals.",
        highlight: "Clear Comprehension",
        iconName: "BookOpen",
      },
      {
        id: "informed-decisions",
        title: "More Informed Decisions",
        description:
          "Buyers choose packages that genuinely match their operational scale, decreasing post-purchase regret and early churn.",
        highlight: "High Confidence",
        iconName: "Award",
      },
      {
        id: "easier-discovery",
        title: "Easier Information Discovery",
        description:
          "Visitors ask direct questions in natural language and receive immediate answers instead of browsing through dozens of subpages.",
        highlight: "Frictionless Search",
        iconName: "Compass",
      },
      {
        id: "reduced-confusion",
        title: "Reduced Buyer Confusion",
        description:
          "Eliminating ambiguous terminology and hidden trade-offs creates transparent purchasing conversations and speeds up selection.",
        highlight: "Zero Ambiguity",
        iconName: "CheckCircle",
      },
    ],
  },

  cta: {
    badge: "Product Discovery Guidance",
    heading: "Help Customers Make Confident Product Decisions.",
    description:
      "Give your website visitors and buyers the transparent product and service answers they need to understand your offerings and choose with confidence.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Website Assistant",
    secondaryHref: "/solutions/website-ai-assistant",
  },
};
