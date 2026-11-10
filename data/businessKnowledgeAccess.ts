export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  consequence: string;
  iconName: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  architecturePoint: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  domain: string;
  description: string;
  userPrompt: string;
  sourceBase: string;
  retrievedSnippet: string;
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
  impactTag: string;
  iconName: string;
}

export const businessKnowledgeData = {
  hero: {
    badge: "Business Knowledge Access",
    headingPart1: "Your Business Knowledge.",
    headingPart2: "Just a Question Away.",
    description:
      "Bring your business information together and make it easier for people to find the answers they need with an AI-powered knowledge assistant.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/knowledge-management",
    },
    highlights: [
      "Centralized Knowledge Bases",
      "Semantic Information Structuring",
      "Instant Natural Language Retrieval",
    ],
  },

  challenges: {
    badge: "Knowledge Silos & Search Friction",
    heading: "Business Knowledge Shouldn't Be Hard to Find.",
    subheading:
      "When internal information lives in disconnected folders and conflicting versions, teams waste hours searching for verified facts.",
    items: [
      {
        id: "scattered-sources",
        title: "Business information is scattered across different sources",
        description:
          "Important documentation is fragmented across cloud drives, email threads, PDF exports, and local files with no centralized index.",
        consequence: "Fragmented knowledge silos across departments",
        iconName: "FolderGit2",
      },
      {
        id: "time-searching",
        title: "Employees spend time searching for relevant documents",
        description:
          "Workers spend valuable hours navigating complex directory trees and guessing file names just to locate standard company procedures.",
        consequence: "Productivity loss on repetitive file searching",
        iconName: "FileSearch",
      },
      {
        id: "hard-to-discover",
        title: "Important knowledge is difficult to discover",
        description:
          "Crucial insights, guidelines, and technical nuances remain buried deep inside multi-page manuals where few team members can find them.",
        consequence: "Valuable organizational expertise goes underutilized",
        iconName: "EyeOff",
      },
      {
        id: "workflow-interruptions",
        title: "Repeated questions interrupt everyday workflows",
        description:
          "Senior team members and domain experts are constantly interrupted on messaging channels to re-answer routine questions.",
        consequence: "Continuous context-switching and operational drag",
        iconName: "BellOff",
      },
      {
        id: "unnecessary-effort",
        title: "Finding accurate information takes unnecessary effort",
        description:
          "Without a unified retrieval engine, verifying whether a document is current or obsolete requires manual cross-checking.",
        consequence: "Risk of relying on outdated or contradictory guidance",
        iconName: "AlertTriangle",
      },
    ] as ChallengeItem[],
  },

  capabilities: {
    badge: "Organized Knowledge Architecture",
    heading: "Bring Your Business Knowledge Within Reach.",
    subheading:
      "Transform disorganized documents into structured, searchable knowledge bases that answer questions naturally and accurately.",
    items: [
      {
        id: "centralized-knowledge",
        title: "Centralized Knowledge",
        description:
          "Organize business information in dedicated knowledge bases, creating a single verified source of truth for your entire organization.",
        badge: "Unified Repository",
        iconName: "Database",
        architecturePoint: "Product → Dedicated Knowledge Center → Separate Knowledge Base",
      },
      {
        id: "structured-information",
        title: "Structured Information",
        description:
          "Keep information organized by product, service area, or team domain so materials remain orderly as your business expands.",
        badge: "Domain Segmentation",
        iconName: "FolderTree",
        architecturePoint: "Categorized by Department, Tier, and Document Type",
      },
      {
        id: "natural-language-search",
        title: "Natural Language Search",
        description:
          "Ask questions instead of searching through multiple documents manually. Let the assistant parse meaning rather than exact keywords.",
        badge: "Semantic Understanding",
        iconName: "MessageSquare",
        architecturePoint: "Intent-based semantic embeddings with zero keyword guesswork",
      },
      {
        id: "relevant-retrieval",
        title: "Relevant Retrieval",
        description:
          "Retrieve information related to the user's question, extracting the precise paragraph or policy clause needed in seconds.",
        badge: "Precision Matching",
        iconName: "Target",
        architecturePoint: "Top-ranked vector search with explicit source citations",
      },
      {
        id: "knowledge-accessibility",
        title: "Knowledge Accessibility",
        description:
          "Make connected business information easier to access across teams, reducing bottlenecks and enabling faster internal execution.",
        badge: "Instant Access",
        iconName: "Sparkles",
        architecturePoint: "24/7 grounded access for employees and stakeholders",
      },
    ] as CapabilityItem[],
  },

  useCases: {
    badge: "Everyday Knowledge Applications",
    heading: "Make Knowledge Useful Across Your Business.",
    subheading:
      "Explore practical ways teams retrieve instant, verified answers from connected business documentation.",
    items: [
      {
        id: "company-process",
        title: "Finding company process information",
        domain: "Operations & HR",
        description:
          "Quickly retrieve travel policies, expense approvals, remote work rules, and vendor onboarding requirements.",
        userPrompt: "What is our company policy on expense reimbursement for travel meals?",
        sourceBase: "HR & Internal Operations Knowledge Base",
        retrievedSnippet:
          "Meals during business travel are reimbursed up to $75/day with itemized receipts submitted within 14 business days.",
        iconName: "Building2",
      },
      {
        id: "product-documentation",
        title: "Accessing product documentation",
        domain: "Engineering & Product",
        description:
          "Help product managers, engineers, and support staff look up API schemas, release notes, and architecture diagrams.",
        userPrompt: "What is the timeout threshold configured for our webhook retries?",
        sourceBase: "Product Architecture & API Documentation Base",
        retrievedSnippet:
          "Webhooks retry up to 5 times using exponential backoff with a hard timeout of 10 seconds per attempt.",
        iconName: "FileCode2",
      },
      {
        id: "internal-guidelines",
        title: "Understanding internal guidelines",
        domain: "Compliance & Security",
        description:
          "Clarify data retention schedules, password management standards, and role-based access protocols.",
        userPrompt: "How long are customer chat transcripts retained under our data governance policy?",
        sourceBase: "Compliance & Security Governance Base",
        retrievedSnippet:
          "Customer interaction transcripts are encrypted and retained for 90 days by default, unless extended by compliance rules.",
        iconName: "ShieldCheck",
      },
      {
        id: "service-information",
        title: "Retrieving service-related information",
        domain: "Client Services",
        description:
          "Look up service tier inclusions, scope boundaries, and SLA response targets for customer projects.",
        userPrompt: "What are the escalation response windows for tier 2 support tickets?",
        sourceBase: "Client Services & SLA Guidelines Base",
        retrievedSnippet:
          "Tier 2 escalations require initial response within 2 business hours and a mitigation update within 6 hours.",
        iconName: "Briefcase",
      },
      {
        id: "connected-resources",
        title: "Finding answers from connected business resources",
        domain: "Cross-Functional",
        description:
          "Synthesize answers across connected spreadsheets, training decks, and technical manuals without manual cross-referencing.",
        userPrompt: "Which cloud regions currently host our backup database clusters?",
        sourceBase: "Infrastructure Specifications & Cloud Topology Base",
        retrievedSnippet:
          "Secondary backup clusters are distributed across US-East (N. Virginia) and EU-Central (Frankfurt) with AES-256 replication.",
        iconName: "Layers",
      },
    ] as UseCaseItem[],
  },

  workflow: {
    badge: "Knowledge Flow",
    heading: "How It Works",
    subheading:
      "A clear four-step visual workflow that transforms raw business documents into instant answers.",
    steps: [
      {
        step: "01",
        number: "Step 1",
        title: "Connect Information Sources",
        description: "Add supported business content sources.",
        detail:
          "Connect internal manuals, standard operating procedures, policies, and product documentation into your workspace.",
        iconName: "FolderPlus",
      },
      {
        step: "02",
        number: "Step 2",
        title: "Organize Knowledge",
        description: "Structure information into dedicated knowledge bases.",
        detail:
          "Pingo segments your materials by product or business domain into dedicated knowledge centers for organized retrieval.",
        iconName: "Layers",
      },
      {
        step: "03",
        number: "Step 3",
        title: "Ask Questions",
        description: "Users ask questions in natural language.",
        detail:
          "Team members simply type questions in conversational language without needing exact filenames or directory locations.",
        iconName: "MessageSquare",
      },
      {
        step: "04",
        number: "Step 4",
        title: "Retrieve Answers",
        description: "Pingo finds relevant information and provides contextual responses.",
        detail:
          "The assistant pinpoints verified paragraphs from your knowledge base and delivers clear, cited answers in seconds.",
        iconName: "CheckCircle",
      },
    ] as WorkflowStep[],
  },

  benefits: {
    badge: "Organizational Value",
    heading: "Less Searching. More Understanding.",
    subheading:
      "Empower your teams with instant access to verified business information, eliminating repetitive searches and knowledge bottlenecks.",
    items: [
      {
        id: "easier-access",
        title: "Easier access to business knowledge",
        description:
          "Team members locate relevant information in seconds, removing reliance on memory or colleagues' availability.",
        impactTag: "Instant Discovery",
        iconName: "Compass",
      },
      {
        id: "better-organization",
        title: "Better information organization",
        description:
          "Structure business knowledge into clean, dedicated knowledge bases segmented by product, department, or function.",
        impactTag: "Structured Bases",
        iconName: "FolderTree",
      },
      {
        id: "faster-discovery",
        title: "Faster information discovery",
        description:
          "Eliminate manual searches through multi-page documents with intelligent semantic vector retrieval.",
        impactTag: "Zero Lag",
        iconName: "Zap",
      },
      {
        id: "reduced-searches",
        title: "Reduced repetitive information searches",
        description:
          "Stop asking senior staff repetitive procedural questions—answers are available on demand 24/7.",
        impactTag: "Time Recovered",
        iconName: "Clock",
      },
      {
        id: "consistent-access",
        title: "More consistent access to relevant knowledge",
        description:
          "Ensure every employee accesses the single, verified version of company policies and guidelines.",
        impactTag: "Factual Alignment",
        iconName: "ShieldCheck",
      },
    ] as BenefitItem[],
  },

  cta: {
    badge: "Centralize Your Knowledge",
    heading: "Make Your Business Knowledge More Accessible.",
    description:
      "Connect your information and help your people find meaningful answers with Pingo.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Features",
    secondaryHref: "/features/knowledge-management",
  },
};

