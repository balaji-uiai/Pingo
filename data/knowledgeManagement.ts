export interface ProductKnowledgeHub {
  id: string;
  name: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  docsCount: string;
  kbStatus: string;
  sampleDocs: string[];
}

export interface KnowledgeCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "FolderKanban"
    | "Boxes"
    | "FileCode2"
    | "Network"
    | "Search"
    | "RefreshCw";
}

export interface KnowledgeWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "FilePlus2" | "FolderTree" | "Binary" | "Bot";
}

export interface KnowledgeBenefit {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  color: "violet" | "blue" | "cyan";
}

export interface KnowledgeManagementData {
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
    products: ProductKnowledgeHub[];
  };
  overview: {
    badge: string;
    heading: string;
    description: string;
    hierarchyLabel: string;
    architectureLevels: {
      level: string;
      title: string;
      description: string;
      badgeText: string;
    }[];
  };
  capabilities: {
    badge: string;
    heading: string;
    subheading: string;
    items: KnowledgeCapability[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    steps: KnowledgeWorkflowStep[];
  };
  benefits: {
    badge: string;
    heading: string;
    description: string;
    items: KnowledgeBenefit[];
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const knowledgeManagementData: KnowledgeManagementData = {
  hero: {
    badge: "KNOWLEDGE MANAGEMENT",
    headingPart1: "Your Knowledge. Organized.",
    headingPart2: "Always Accessible.",
    description:
      "Bring your business information together in one place and make it easier for AI to deliver accurate, relevant answers.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Knowledge Management",
      href: "#overview",
    },
    products: [
      {
        id: "prod-cloud",
        name: "Cloud Suite",
        tag: "Product A",
        color: "violet",
        docsCount: "42 Articles",
        kbStatus: "Vector Indexed",
        sampleDocs: ["API Reference", "SAML SSO Guide", "Billing FAQs"],
      },
      {
        id: "prod-mobile",
        name: "Mobile App",
        tag: "Product B",
        color: "blue",
        docsCount: "28 Articles",
        kbStatus: "Vector Indexed",
        sampleDocs: ["iOS SDK v4", "Push Notifications", "Offline Cache"],
      },
      {
        id: "prod-desktop",
        name: "Desktop Client",
        tag: "Product C",
        color: "cyan",
        docsCount: "35 Articles",
        kbStatus: "Vector Indexed",
        sampleDocs: ["Installer Docs", "Keyboard Shortcuts", "Hardware Acceleration"],
      },
    ],
  },
  overview: {
    badge: "PRODUCT-BASED ARCHITECTURE",
    heading: "One Knowledge Hub for Every Product",
    description:
      "Organize your business information into dedicated knowledge centers. Keep each product's information structured and accessible to its AI assistant.",
    hierarchyLabel: "Clean 3-Tier Architecture",
    architectureLevels: [
      {
        level: "01",
        title: "Product Boundary",
        description:
          "Define independent workspaces for each product or service offering.",
        badgeText: "Isolated Scope",
      },
      {
        level: "02",
        title: "Dedicated Knowledge Center",
        description:
          "Curate domain-specific documentation, FAQs, and guides in a designated center.",
        badgeText: "Workspace Layer",
      },
      {
        level: "03",
        title: "Separate Knowledge Base",
        description:
          "Maintain independent vector storage for zero cross-product information crossover.",
        badgeText: "Storage Layer",
      },
    ],
  },
  capabilities: {
    badge: "CORE CAPABILITIES",
    heading: "Everything Your Knowledge Needs",
    subheading:
      "Six purpose-built capabilities for structuring, updating, and scaling your business information.",
    items: [
      {
        id: "centralized-knowledge",
        number: "01",
        title: "Centralized Knowledge",
        description:
          "Bring relevant business information together into one accessible hub without messy siloing.",
        tag: "Consolidated",
        color: "violet",
        iconName: "FolderKanban",
      },
      {
        id: "product-based-organization",
        number: "02",
        title: "Product-Based Organization",
        description:
          "Maintain separate knowledge centers for individual products so context remains pristine.",
        tag: "Product Isolation",
        color: "blue",
        iconName: "Boxes",
      },
      {
        id: "multiple-content-sources",
        number: "03",
        title: "Multiple Content Sources",
        description:
          "Connect supported information sources including markdown docs, guides, and text documentation.",
        tag: "Flexible Ingest",
        color: "cyan",
        iconName: "FileCode2",
      },
      {
        id: "structured-information",
        number: "04",
        title: "Structured Information",
        description:
          "Organize content with clear taxonomies, hierarchies, and metadata for easier retrieval.",
        tag: "Categorization",
        color: "violet",
        iconName: "Network",
      },
      {
        id: "knowledge-search",
        number: "05",
        title: "Knowledge Search",
        description:
          "Find relevant information efficiently with semantic vector lookup and keyword indexing.",
        tag: "Deep Search",
        color: "blue",
        iconName: "Search",
      },
      {
        id: "knowledge-updates",
        number: "06",
        title: "Knowledge Updates",
        description:
          "Keep information current as your business changes with simple, prompt revision tools.",
        tag: "Lifecycle Control",
        color: "cyan",
        iconName: "RefreshCw",
      },
    ],
  },
  workflow: {
    badge: "WORKFLOW",
    heading: "From Business Information to AI-Ready Knowledge",
    subheading:
      "A structured four-step path to turn raw product data into high-accuracy AI responses.",
    steps: [
      {
        step: "01",
        title: "Add Your Information",
        description:
          "Import your product documentation, guides, FAQs, and policy files into Pingo.",
        detail: "Upload clean files and articles in minutes with no tedious manual markup.",
        color: "violet",
        iconName: "FilePlus2",
      },
      {
        step: "02",
        title: "Organize Your Knowledge",
        description:
          "Assign content to its dedicated product Knowledge Center with clear ownership.",
        detail: "Each product gets a quarantined workspace that protects context integrity.",
        color: "blue",
        iconName: "FolderTree",
      },
      {
        step: "03",
        title: "Process and Index",
        description:
          "Pingo vectors and categorizes documents into an isolated knowledge base.",
        detail: "High-density semantic indexing makes every sentence instantly discoverable.",
        color: "cyan",
        iconName: "Binary",
      },
      {
        step: "04",
        title: "Power AI Responses",
        description:
          "AI assistants retrieve precise, verified answers for your customers 24/7.",
        detail: "Every answer cites exact knowledge references with zero hallucinated info.",
        color: "violet",
        iconName: "Bot",
      },
    ],
  },
  benefits: {
    badge: "VALUE CREATION",
    heading: "Make Business Knowledge Work Smarter",
    description:
      "Structure your knowledge once to unlock precision customer service and streamlined team operations.",
    items: [
      {
        id: "organized-info",
        title: "Organized Business Information",
        description:
          "End scattered Google Docs, outdated wikis, and confusing duplicates. Unify all verified knowledge in structured product repositories.",
        metric: "100%",
        metricLabel: "Centralized Control",
        color: "violet",
      },
      {
        id: "independent-product",
        title: "Independent Product Knowledge",
        description:
          "Keep each product's documentation quarantined. An AI assistant for Product A will never accidentally confuse answers with Product B.",
        metric: "0%",
        metricLabel: "Data Crossover",
        color: "blue",
      },
      {
        id: "easier-retrieval",
        title: "Easier Information Retrieval",
        description:
          "Both human agents and AI assistants locate exact troubleshooting steps and technical specs in milliseconds without manual digging.",
        metric: "10x",
        metricLabel: "Faster Discovery",
        color: "cyan",
      },
      {
        id: "relevant-ai",
        title: "More Relevant AI Responses",
        description:
          "Grounded semantic search feeds your AI assistants exact context, leading to higher customer resolution rates and authentic brand trust.",
        metric: "99.4%",
        metricLabel: "Answer Relevance",
        color: "violet",
      },
    ],
  },
  cta: {
    badge: "GET STARTED",
    heading: "Turn Your Knowledge Into Better Answers.",
    description:
      "Organize your information and make it accessible through Pingo's AI assistant.",
    buttonText: "Get Started with Pingo",
    buttonHref: "/contact",
  },
};

