export interface ConnectedSourcePreview {
  id: string;
  name: string;
  category: string;
  status: "Connected" | "Configured" | "Ready";
  iconName: "Globe" | "FileText" | "Code2" | "Layers" | "MessageSquare";
  color: "violet" | "blue" | "cyan";
  description: string;
}

export interface IntegrationCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "Link2"
    | "FolderKanban"
    | "Cpu"
    | "Globe"
    | "SlidersHorizontal"
    | "Boxes";
}

export interface IntegrationWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "FolderPlus" | "Link" | "Binary" | "Bot";
}

export interface IntegrationBenefit {
  id: string;
  title: string;
  description: string;
  highlight: string;
  highlightLabel: string;
  color: "violet" | "blue" | "cyan";
}

export interface IntegrationsChannelsData {
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
    connectedSources: ConnectedSourcePreview[];
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
    items: IntegrationCapability[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    steps: IntegrationWorkflowStep[];
  };
  benefits: {
    badge: string;
    heading: string;
    description: string;
    items: IntegrationBenefit[];
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const integrationsChannelsData: IntegrationsChannelsData = {
  hero: {
    badge: "INTEGRATIONS & CHANNELS",
    headingPart1: "Connect Your Tools.",
    headingPart2: "Bring Your Knowledge Together.",
    description:
      "Bring your business information closer to Pingo by connecting supported sources and making relevant knowledge accessible to your AI assistant.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Integrations",
      href: "#overview",
    },
    connectedSources: [
      {
        id: "source-web",
        name: "Website Content",
        category: "Web Pages & URLs",
        status: "Connected",
        iconName: "Globe",
        color: "cyan",
        description: "Public pages, product guides, and support articles.",
      },
      {
        id: "source-docs",
        name: "Documentation Files",
        category: "Structured Docs",
        status: "Connected",
        iconName: "FileText",
        color: "violet",
        description: "PDFs, manuals, policy documents, and release notes.",
      },
      {
        id: "source-md",
        name: "Markdown & Text",
        category: "Technical Content",
        status: "Connected",
        iconName: "Code2",
        color: "blue",
        description: "Developer guides, API references, and formatted text.",
      },
      {
        id: "source-widget",
        name: "Web Chat Widget",
        category: "Conversational Channel",
        status: "Ready",
        iconName: "MessageSquare",
        color: "violet",
        description: "Embeddable customer-facing conversational interface.",
      },
    ],
  },
  overview: {
    badge: "CONNECTED KNOWLEDGE ECOSYSTEM",
    heading: "Your Business Information, Connected",
    description:
      "Your business knowledge may live across different sources. Pingo helps bring supported information together so your AI assistant can use relevant content to answer customer questions.",
    pillars: [
      {
        step: "01",
        title: "Unified Source Ingest",
        description:
          "Connect supported documentation, website pages, and content repositories into designated product knowledge centers.",
        tag: "Source Ingest",
        color: "violet",
      },
      {
        step: "02",
        title: "Quarantined Knowledge Hub",
        description:
          "Keep each product's content isolated in dedicated workspaces, preventing cross-product confusion.",
        tag: "Isolated Centers",
        color: "blue",
      },
      {
        step: "03",
        title: "Context-Ready Delivery",
        description:
          "Structured content is indexed and made accessible to AI assistants across customer channels with verified source citations.",
        tag: "Grounded Delivery",
        color: "cyan",
      },
    ],
  },
  capabilities: {
    badge: "CORE CAPABILITIES",
    heading: "Connect. Organize. Access.",
    subheading:
      "Six purpose-built capabilities for connecting, managing, and scaling your business information sources.",
    items: [
      {
        id: "knowledge-source-connections",
        number: "01",
        title: "Knowledge Source Connections",
        description:
          "Connect supported sources of business information to establish clean pathways for your documentation.",
        tag: "Supported Ingest",
        color: "violet",
        iconName: "Link2",
      },
      {
        id: "centralized-information",
        number: "02",
        title: "Centralized Information",
        description:
          "Bring relevant content into your product knowledge center, giving teams and AI assistants a single source of truth.",
        tag: "Single Hub",
        color: "blue",
        iconName: "FolderKanban",
      },
      {
        id: "content-processing",
        number: "03",
        title: "Content Processing",
        description:
          "Prepare connected information for knowledge retrieval with semantic indexing and structured metadata tagging.",
        tag: "Semantic Indexing",
        color: "cyan",
        iconName: "Cpu",
      },
      {
        id: "website-content-access",
        number: "04",
        title: "Website Content Access",
        description:
          "Use supported website content as a knowledge source, allowing your AI assistant to reference published public articles.",
        tag: "Web Content",
        color: "violet",
        iconName: "Globe",
      },
      {
        id: "integration-management",
        number: "05",
        title: "Integration Management",
        description:
          "Manage available source connections with simple controls to review, refresh, or reconfigure active content pathways.",
        tag: "Connection Control",
        color: "blue",
        iconName: "SlidersHorizontal",
      },
      {
        id: "expandable-ecosystem",
        number: "06",
        title: "Expandable Ecosystem",
        description:
          "Extend knowledge connectivity as supported integrations become available, growing alongside your technology stack.",
        tag: "Extensible",
        color: "cyan",
        iconName: "Boxes",
      },
    ],
  },
  workflow: {
    badge: "WORKFLOW",
    heading: "From Connected Sources to Useful Answers",
    subheading:
      "A structured four-step path transforming disparate business content into grounded conversational intelligence.",
    steps: [
      {
        step: "01",
        title: "Choose a Source",
        description:
          "Select from supported business information sources including website content, documents, and guides.",
        detail: "Identify the authoritative knowledge assets that power your customer answers.",
        color: "violet",
        iconName: "FolderPlus",
      },
      {
        step: "02",
        title: "Connect Your Information",
        description:
          "Establish the connection to link relevant documentation directly into the designated product workspace.",
        detail: "Clean setup without complex technical overhead or disruptive migration steps.",
        color: "blue",
        iconName: "Link",
      },
      {
        step: "03",
        title: "Process and Organize",
        description:
          "Pingo structures, indexes, and categorizes content into an isolated, searchable product knowledge base.",
        detail: "Vector processing ensures semantic nuance and exact reference citations are preserved.",
        color: "cyan",
        iconName: "Binary",
      },
      {
        step: "04",
        title: "Power Your AI Assistant",
        description:
          "Your AI assistant uses grounded information to provide accurate, contextually relevant answers to customers.",
        detail: "Every answer cites exact knowledge references with zero hallucinated info.",
        color: "violet",
        iconName: "Bot",
      },
    ],
  },
  benefits: {
    badge: "CONNECTED ADVANTAGE",
    heading: "A More Connected Knowledge Experience",
    description:
      "Bring order to scattered documentation and empower your AI assistant with unified, verified knowledge.",
    items: [
      {
        id: "less-scattered",
        title: "Less Scattered Business Information",
        description:
          "End the frustration of information spread across multiple formats and locations by unifying access in Pingo.",
        highlight: "Unified",
        highlightLabel: "Single Center",
        color: "violet",
      },
      {
        id: "easier-organization",
        title: "Easier Knowledge Organization",
        description:
          "Organize content by product domain so documentation remains structured, clean, and straightforward to maintain.",
        highlight: "Product",
        highlightLabel: "Domain Isolation",
        color: "blue",
      },
      {
        id: "better-access",
        title: "Better Access to Relevant Content",
        description:
          "Both human agents and AI assistants locate exact troubleshooting steps and technical specs in milliseconds.",
        highlight: "Instant",
        highlightLabel: "Semantic Retrieval",
        color: "cyan",
      },
      {
        id: "useful-ai-responses",
        title: "A Foundation for Useful AI Responses",
        description:
          "Feed your AI assistants verified business context, leading to higher customer satisfaction and genuine trust.",
        highlight: "Grounded",
        highlightLabel: "Accurate Answers",
        color: "violet",
      },
    ],
  },
  cta: {
    badge: "GET STARTED",
    heading: "Bring Your Business Knowledge Together.",
    description:
      "Connect your information and make it more useful with Pingo.",
    buttonText: "Get Started with Pingo",
    buttonHref: "/contact",
  },
};

