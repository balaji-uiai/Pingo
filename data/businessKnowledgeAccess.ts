export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  consequence: string;
  iconName: string;
}

export interface HowPingoHelpsItem {
  id: string;
  title: string;
  description: string;
  architecturePoint: string;
  iconName: string;
}

export interface ArchitectureDomain {
  name: string;
  iconName: string;
  docCount: string;
  status: string;
  sampleDocs: string[];
}

export interface UseCaseItem {
  id: string;
  title: string;
  category: string;
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
    badge: "Organizational Knowledge Architecture",
    headingPart1: "Bring Your Business Knowledge",
    headingPart2: "Within Reach.",
    description:
      "Organize important business information and make it easier to access the knowledge your organization depends on.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/knowledge-management",
    },
    architectureDemo: {
      domains: [
        {
          name: "Company Policies & Governance",
          iconName: "ShieldCheck",
          docCount: "32 Verified Policies",
          status: "Isolated Hub",
          sampleDocs: ["Data Retention Policy v4", "Code of Conduct", "Travel & Expense Guidelines"],
        },
        {
          name: "Standard Operating Procedures",
          iconName: "FileSpreadsheet",
          docCount: "48 Active SOPs",
          status: "Isolated Hub",
          sampleDocs: ["Vendor Procurement SOP", "Incident Escalation Matrix", "Client Offboarding SOP"],
        },
        {
          name: "Product & Engineering Specs",
          iconName: "Code2",
          docCount: "124 Technical Specs",
          status: "Isolated Hub",
          sampleDocs: ["API Reference v3", "Security Architecture Whitepaper", "Deployment Topology"],
        },
        {
          name: "Business Reference Materials",
          iconName: "BookOpen",
          docCount: "65 Reference Guides",
          status: "Isolated Hub",
          sampleDocs: ["Pricing Rate Card 2026", "Legal Master Services Agreement", "Brand Style Guide"],
        },
      ],
      sampleQuery: {
        question: "What is our mandatory data retention policy for EU financial transaction records?",
        sourceMatch: "Company Policies & Governance > Section 7.2 (Data Retention)",
        answer:
          "Under Section 7.2, financial records associated with EU transactions must be archived in encrypted, immutable cold storage for exactly 7 years following contract conclusion.",
      },
    },
    highlights: [
      "Structured Domain Separation",
      "Unified Organizational Access",
      "Natural-Language Information Retrieval",
      "Single Source of Truth",
    ],
  },

  challenges: {
    badge: "The Information Fragmentation Problem",
    heading: "Business Knowledge Shouldn't Be Hard to Find.",
    subheading:
      "As businesses scale, critical knowledge scatters across disparate folders, buried wikis, and outdated document repositories.",
    items: [
      {
        id: "scattered-sources",
        title: "Business information is spread across different sources",
        description:
          "Company guidelines, product briefs, and operating procedures live scattered across cloud drives, email threads, and forgotten wikis.",
        consequence: "Severe knowledge fragmentation across tools",
        iconName: "FolderGit2",
      },
      {
        id: "hard-to-locate",
        title: "Important documents are difficult to locate",
        description:
          "Finding an authoritative procedure often requires guessing file names, searching through obsolete subdirectories, or asking three colleagues.",
        consequence: "Excessive search friction and lost hours",
        iconName: "SearchX",
      },
      {
        id: "folder-reliance",
        title: "Employees rely on multiple folders and resources",
        description:
          "Without a unified access layer, staff bookmark contradictory local copies or work from outdated drafts that do not reflect current policies.",
        consequence: "Version discrepancies and procedural errors",
        iconName: "FileWarning",
      },
      {
        id: "maintenance-decay",
        title: "Knowledge becomes difficult to maintain as the organization grows",
        description:
          "Onboarding new divisions or revising operational standards creates maintenance overhead that overwhelms traditional static directories.",
        consequence: "Stale documentation and compliance risk",
        iconName: "TrendingDown",
      },
      {
        id: "latest-info-struggle",
        title: "Teams struggle to find the latest relevant information",
        description:
          "When policies or specifications change, ensuring that every department accesses the updated guidance rather than old guidelines is a persistent challenge.",
        consequence: "Inconsistent execution across business units",
        iconName: "Clock",
      },
    ],
  },

  howPingoHelps: {
    badge: "Knowledge Architecture Layer",
    heading: "A Structured Knowledge Architecture for Your Business.",
    subheading:
      "Pingo organizes organizational information into structured, dedicated knowledge bases that can be queried naturally and updated seamlessly.",
    items: [
      {
        id: "organize-information",
        title: "Organizes connected business information",
        description:
          "Brings documents, policies, operational procedures, and reference sheets into a structured, unified knowledge system.",
        architecturePoint: "Centralized Knowledge Directory",
        iconName: "FolderTree",
      },
      {
        id: "support-sources",
        title: "Supports different knowledge sources",
        description:
          "Connects corporate portals, document uploads, custom tables, and verified FAQ lists without forcing manual reformatting.",
        architecturePoint: "Flexible Source Ingestion",
        iconName: "Layers",
      },
      {
        id: "dedicated-bases",
        title: "Structures information into dedicated knowledge bases",
        description:
          "Partitions organizational information by product, department, or business unit so domains remain distinct and do not bleed together.",
        architecturePoint: "Domain Isolation & Governance",
        iconName: "Database",
      },
      {
        id: "easier-retrieval",
        title: "Makes relevant information easier to retrieve",
        description:
          "High-dimensional vector indexing matches inquiries to the exact authoritative paragraph rather than returning dozens of irrelevant files.",
        architecturePoint: "Precise Semantic Matching",
        iconName: "Search",
      },
      {
        id: "natural-language-access",
        title: "Helps users access organizational knowledge through natural-language questions",
        description:
          "Staff and stakeholders simply ask questions in plain language and receive concise, verified answers cited directly from source material.",
        architecturePoint: "Conversational Accessibility",
        iconName: "MessageSquare",
      },
    ],
  },

  workflow: {
    badge: "Business Knowledge Lifecycle",
    heading: "How Organizational Knowledge Stays Organized",
    subheading:
      "A structured 5-stage information-management lifecycle that transforms scattered documentation into an accessible, maintained organizational resource.",
    steps: [
      {
        step: "Step 01",
        number: "01",
        title: "Collect Business Information",
        description: "Gather documents, guidelines, spreadsheets, and policies from across your business.",
        detail: "Ingest authoritative PDFs, Word docs, tables, and intranet resources into the central knowledge environment.",
        iconName: "FolderDown",
      },
      {
        step: "Step 02",
        number: "02",
        title: "Organize Information by Business Area",
        description: "Categorize documentation into logical business domains and functional scopes.",
        detail: "Structure content by governance, operations, technical architecture, and client reference materials.",
        iconName: "FolderTree",
      },
      {
        step: "Step 03",
        number: "03",
        title: "Maintain Dedicated Knowledge Bases",
        description: "Keep each domain's knowledge isolated in clean, dedicated partitions.",
        detail: "Strict domain boundaries prevent cross-contamination and guarantee that policies remain authoritative.",
        iconName: "Database",
      },
      {
        step: "Step 04",
        number: "04",
        title: "Retrieve Relevant Information",
        description: "Users ask questions and Pingo retrieves the exact verified context in milliseconds.",
        detail: "Semantic vector search pinpoints the exact section without requiring exact keyword matching.",
        iconName: "Search",
      },
      {
        step: "Step 05",
        number: "05",
        title: "Make Knowledge Accessible to the Organization",
        description: "Verified answers empower team members across departments to work with certainty.",
        detail: "Organizational knowledge becomes an active operational asset that drives consistent, accurate decisions.",
        iconName: "CheckCircle",
      },
    ],
  },

  useCases: {
    badge: "Organizational Resources",
    heading: "Core Organizational Knowledge Use Cases",
    subheading:
      "Explore the key categories of business information that organizations centralize and query through Pingo.",
    items: [
      {
        id: "company-policies",
        title: "Company Policies and Guidelines",
        category: "Corporate Governance",
        description:
          "Employee codes of conduct, remote work allowances, data privacy guidelines, and travel reimbursement rules.",
        userPrompt: "'What is the daily per-diem allowance for international client travel?'",
        sourceBase: "Corporate Governance > Travel Policy 2026",
        retrievedSnippet:
          "Section 4.3: International travel per-diem is capped at $95/day for Tier-1 cities and $75/day for Tier-2 cities, covering meals and incidental expenses.",
        iconName: "ShieldCheck",
      },
      {
        id: "internal-process-docs",
        title: "Internal Process Documentation",
        category: "Operations & Workflows",
        description:
          "Step-by-step instructions for cross-department handoffs, software procurement, and budget approval thresholds.",
        userPrompt: "'What is the approval threshold for departmental software licenses exceeding $10,000?'",
        sourceBase: "Finance & Operations > Procurement SOP",
        retrievedSnippet:
          "Procurement SOP § 3.1: All software subscriptions above $10,000 annual spend require formal sign-off from both the Department Head and the VP of Finance.",
        iconName: "FileSpreadsheet",
      },
      {
        id: "product-documentation",
        title: "Product Documentation",
        category: "Technical & Offering Specs",
        description:
          "System architecture diagrams, release changelogs, data dictionary sheets, and API integration guides.",
        userPrompt: "'What are the webhook retry intervals when an endpoint returns HTTP 500?'",
        sourceBase: "Product Architecture > Webhook Specification v2.4",
        retrievedSnippet:
          "Webhook Engine v2.4: Failed deliveries undergo exponential backoff retries at 1m, 5m, 15m, 1h, and 6h before marking the event as dead-lettered.",
        iconName: "Code2",
      },
      {
        id: "standard-operating-procedures",
        title: "Standard Operating Procedures (SOPs)",
        category: "Quality Assurance",
        description:
          "Rigorous operational checklists for customer onboarding, security incident response, and equipment maintenance.",
        userPrompt: "'What are the immediate containment steps required during a suspected credential compromise?'",
        sourceBase: "Security Operations > Incident Response SOP",
        retrievedSnippet:
          "Security Incident Response SOP #14: 1) Revoke active session tokens immediately; 2) Enforce password reset and multi-factor re-enrollment; 3) Review 48h audit logs.",
        iconName: "CheckSquare",
      },
      {
        id: "business-reference-materials",
        title: "Business Reference Materials",
        category: "Commercial & Legal",
        description:
          "Brand identity assets, standard Master Services Agreement clauses, partner tiers, and pricing lookup tables.",
        userPrompt: "'What is the standard SLA penalty clause in our enterprise enterprise tier agreement?'",
        sourceBase: "Legal & Commercial > Enterprise MSA Template",
        retrievedSnippet:
          "Enterprise MSA Clause 9.4: Downtime exceeding 99.9% uptime commitments yields a 5% monthly fee credit per hour of outage, up to a maximum 30% monthly cap.",
        iconName: "BookOpen",
      },
    ],
  },

  benefits: {
    badge: "Knowledge Advantage",
    heading: "The Business Value of Organized Knowledge",
    subheading:
      "When business knowledge is structured, accessible, and maintained, organizations eliminate search waste and maintain high operational standards.",
    items: [
      {
        id: "knowledge-accessibility",
        title: "Knowledge Accessibility",
        description:
          "Important business knowledge is placed at the fingertips of every authorized team member, eliminating information gatekeepers.",
        impactTag: "Universal Access",
        iconName: "Compass",
      },
      {
        id: "information-organization",
        title: "Information Organization",
        description:
          "Content is structured into dedicated knowledge bases by business unit, creating clarity and clear domain governance.",
        impactTag: "Structured Architecture",
        iconName: "FolderTree",
      },
      {
        id: "reduced-search-effort",
        title: "Reduced Search Effort",
        description:
          "Employees find answers in seconds through natural-language questions rather than digging through dozens of nested cloud folders.",
        impactTag: "Time Recovered",
        iconName: "Clock",
      },
      {
        id: "useful-knowledge",
        title: "Maintaining Useful Knowledge",
        description:
          "Centralized knowledge bases make updating, retiring, and expanding company documentation manageable as your organization grows.",
        impactTag: "Continuous Accuracy",
        iconName: "CheckCircle",
      },
    ],
  },

  cta: {
    badge: "Business Knowledge Architecture",
    heading: "Make Your Business Knowledge an Active Operational Asset.",
    description:
      "Bring scattered policies, SOPs, and documentation into organized, searchable knowledge bases that keep your entire organization informed and aligned.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Team Assistance",
    secondaryHref: "/solutions/team-assistance",
  },
};
