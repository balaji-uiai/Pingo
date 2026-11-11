export interface ProductKnowledgeHub {
  id: string;
  name: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  docsCount: string;
  kbStatus: string;
  sampleDocs: string[];
}

export interface KnowledgeSourceItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  points: string[];
  supportedFormats?: string[];
  color: "violet" | "blue" | "cyan";
  iconName: "Globe" | "FileUp" | "Table" | "HelpCircle" | "Layers";
  previewType: "crawler" | "files" | "table" | "faq" | "content";
}

export interface KnowledgeCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "Globe"
    | "FileText"
    | "Table"
    | "HelpCircle"
    | "FolderKanban"
    | "RefreshCw"
    | "Search"
    | "Binary"
    | "Layers";
}

export interface KnowledgeWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "FilePlus2" | "FolderTree" | "Binary" | "Search" | "Bot";
}

export interface ProductHierarchyLevel {
  level: string;
  title: string;
  subtitle: string;
  description: string;
  example: string;
  badgeText: string;
  color: "violet" | "blue" | "cyan";
}

export interface KnowledgeManagementData {
  hero: {
    badge: string;
    headingPart1: string;
    headingPart2: string;
    description: string;
    supportingDescription: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    crawlerDashboard: {
      title: string;
      kbStatus: string;
      activeArticles: string;
      websiteCrawler: {
        source: string;
        pagesIndexed: string;
        status: string;
        health: string;
      };
      docProcessing: {
        fileName: string;
        pagesParsed: string;
        chunksBuilt: string;
        status: string;
      };
      manualFaq: {
        sourceName: string;
        faqCount: string;
        status: string;
      };
      vectorSearchPreview: {
        query: string;
        resultSnippet: string;
        sourceDoc: string;
        similarityScore: string;
      };
    };
  };
  sources: {
    badge: string;
    heading: string;
    description: string;
    items: KnowledgeSourceItem[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    flowSummary: string;
    steps: KnowledgeWorkflowStep[];
  };
  capabilities: {
    badge: string;
    heading: string;
    subheading: string;
    items: KnowledgeCapability[];
  };
  hierarchy: {
    badge: string;
    heading: string;
    description: string;
    structureNotice: string;
    levels: ProductHierarchyLevel[];
    products: ProductKnowledgeHub[];
  };
  benefits: {
    badge: string;
    description: string;
    items: {
      id: string;
      title: string;
      description: string;
      metric: string;
      metricLabel: string;
      color: "violet" | "blue" | "cyan";
    }[];
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
    badge: "MODULE 02 – KNOWLEDGE MANAGEMENT",
    headingPart1: "Your Business Knowledge.",
    headingPart2: "Organized and Ready.",
    description:
      "Bring your website content, documents, FAQs, and structured data together into an organized knowledge base that powers intelligent customer conversations.",
    supportingDescription:
      "Website crawling, content extraction, knowledge centers, document management, source management, and knowledge synchronization.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Knowledge Sources",
      href: "#sources",
    },
    crawlerDashboard: {
      title: "Knowledge Centers & Crawler",
      kbStatus: "Knowledge Base Synced",
      activeArticles: "1,420 Articles Active",
      websiteCrawler: {
        source: "yourcompany.com/docs",
        pagesIndexed: "342 Pages Indexed",
        status: "Synced",
        health: "100% (illustrative only)",
      },
      docProcessing: {
        fileName: "API_Documentation_v3.pdf",
        pagesParsed: "18 Pages Parsed",
        chunksBuilt: "Semantic Chunks Built",
        status: "Ready",
      },
      manualFaq: {
        sourceName: "Customer Support FAQs",
        faqCount: "84 Questions & Answers",
        status: "Live",
      },
      vectorSearchPreview: {
        query: "turnaround SLA",
        resultSnippet:
          "Tier-1 support inquiries receive an initial response within 15 minutes. Enterprise customer resolution SLA is targeted under 4 hours.",
        sourceDoc: "SLA_Policy_2026.pdf (Section 3.2)",
        similarityScore: "98.4% Match (Sample Vector Search)",
      },
    },
  },
  sources: {
    badge: "5 KNOWLEDGE SOURCES",
    heading: "Multiple Ways to Add Business Knowledge",
    description:
      "Connect live websites, upload internal documents, create custom structured tables, and write manual FAQs to power accurate AI responses.",
    items: [
      {
        id: "source-website",
        number: "01",
        title: "Website as a Knowledge Source",
        badge: "Live Web Crawler",
        tagline: "Extract and synchronize your public website content",
        description:
          "Connect your business website directly to Pingo. The crawler systematically discovers relevant public pages, extracts clean documentation and product details, and keeps your knowledge base synchronized.",
        points: [
          "Connect any business website or documentation portal as a live source.",
          "Extract and organize relevant website content automatically.",
          "Use up-to-date website information to answer customer questions accurately.",
          "Allow teams to review, manage, and refresh indexed web content.",
          "Make indexed website information accessible to the relevant knowledge base.",
        ],
        color: "violet",
        iconName: "Globe",
        previewType: "crawler",
      },
      {
        id: "source-files",
        number: "02",
        title: "File Uploads",
        badge: "Document Ingestion",
        tagline: "Upload PDF, DOC, DOCX, and TXT business documents",
        description:
          "Import internal policy handbooks, technical specifications, user manuals, and contracts directly. Pingo automatically parses document contents, divides them into semantic chunks, and builds vectorized embeddings.",
        supportedFormats: ["PDF Files", "DOCX Documents", "DOC Files", "TXT Files"],
        points: [
          "Native support for TXT, PDF, DOC, and DOCX document formats.",
          "Automatic text extraction and formatting clean-up during upload.",
          "Documents are parsed into semantic chunks to preserve context.",
          "Uploaded files become an organized, searchable part of your knowledge base.",
          "Granular document replace and delete controls to maintain data hygiene.",
        ],
        color: "blue",
        iconName: "FileUp",
        previewType: "files",
      },
      {
        id: "source-tables",
        number: "03",
        title: "Custom Tables",
        badge: "Structured Data",
        tagline: "Store and query tabular business information",
        description:
          "Create custom structured tables right inside your knowledge center. Define custom columns, add rows of business records, and allow AI assistants to perform precise row-and-column lookups for pricing, plans, or SKUs.",
        points: [
          "Create custom tables with tailored column types and row schemas.",
          "Store structured business records such as pricing tiers, specs, and directories.",
          "Organize tabular information without needing an external database.",
          "Make precise table cell values available to answer specific customer queries.",
          "Edit, update, and append rows directly from your Pingo workspace.",
        ],
        color: "cyan",
        iconName: "Table",
        previewType: "table",
      },
      {
        id: "source-faqs",
        number: "04",
        title: "Manual FAQ Creation",
        badge: "Curated Q&A",
        tagline: "Write, edit, and organize custom questions & answers",
        description:
          "Directly author verified question-and-answer pairs for high-frequency inquiries. Manual FAQs carry authoritative priority, ensuring the AI delivers exact, pre-approved responses for sensitive policies.",
        points: [
          "Create custom FAQs manually with rich formatting.",
          "Add targeted questions and detailed, pre-approved answers.",
          "Edit existing questions and answers as business policies evolve.",
          "Delete outdated or seasonal FAQs with one click.",
          "Organize frequently asked questions into clean categories within the knowledge base.",
        ],
        color: "violet",
        iconName: "HelpCircle",
        previewType: "faq",
      },
      {
        id: "source-content-mgmt",
        number: "05",
        title: "Website Content Management",
        badge: "Content Review",
        tagline: "Review, manage, and update collected website information",
        description:
          "Gain full transparency over every page and snippet extracted from your website. Inspect crawled text, remove deprecated pages, and trigger re-indexing whenever content changes.",
        points: [
          "View collected website content and individual page extracts.",
          "Review available website information and inspect parsed text.",
          "Manage existing website content with granular inclusion/exclusion toggles.",
          "Update or remove outdated content where supported to prevent stale answers.",
          "Keep the knowledge base pristine and organized over time.",
        ],
        color: "blue",
        iconName: "Layers",
        previewType: "content",
      },
    ],
  },
  workflow: {
    badge: "KNOWLEDGE WORKFLOW",
    heading: "From Raw Sources to Contextual Answers",
    subheading:
      "A structured 5-step lifecycle transforms diverse content into verified, real-time customer answers.",
    flowSummary:
      "Website / Documents / Custom Tables / FAQs → Content Extraction → Knowledge Processing → Organized Knowledge Base → Vector Search & Retrieval → Contextual AI Answers",
    steps: [
      {
        step: "01",
        title: "Add Knowledge",
        description:
          "Connect a business website, upload documents (TXT, PDF, DOC, DOCX), build custom tables, or author manual FAQs.",
        detail:
          "Five flexible input channels bring all your business content into one unified repository.",
        color: "violet",
        iconName: "FilePlus2",
      },
      {
        step: "02",
        title: "Organize Information",
        description:
          "Arrange content within the appropriate dedicated Knowledge Center and isolated Knowledge Base per product.",
        detail:
          "Domain boundaries ensure content for one offering never contaminates another.",
        color: "blue",
        iconName: "FolderTree",
      },
      {
        step: "03",
        title: "Process Knowledge",
        description:
          "Pingo extracts clean text, strips noise, parses table structures, and generates dense semantic vector chunks.",
        detail:
          "Content is optimized for instant vector search and sub-second retrieval accuracy.",
        color: "cyan",
        iconName: "Binary",
      },
      {
        step: "04",
        title: "Vector Search & Retrieval",
        description:
          "When a customer asks a question, Pingo conducts high-speed vector retrieval across the active knowledge base.",
        detail:
          "Retrieves the most semantically relevant paragraphs, tables, and FAQ matches.",
        color: "blue",
        iconName: "Search",
      },
      {
        step: "05",
        title: "Answer Questions",
        description:
          "Use retrieved knowledge to generate contextual, accurate customer answers strictly grounded in your facts.",
        detail:
          "Customers receive fast, trustworthy guidance without generic hallucinations.",
        color: "violet",
        iconName: "Bot",
      },
    ],
  },
  capabilities: {
    badge: "KEY CAPABILITIES",
    heading: "Engineered for Complete Knowledge Control",
    subheading:
      "Everything your business needs to ingest, structure, maintain, and retrieve business facts at scale.",
    items: [
      {
        id: "cap-multi-sources",
        number: "01",
        title: "Multiple Knowledge Sources",
        description:
          "Ingest information from live URLs, PDF manuals, Word documents, text files, structured custom tables, and curated FAQs.",
        tag: "5 Input Types",
        color: "violet",
        iconName: "Layers",
      },
      {
        id: "cap-crawler",
        number: "02",
        title: "Website Crawling & Content Extraction",
        description:
          "Systematically crawls documentation portals and public sites, extracting clean text while filtering navigation headers and footers.",
        tag: "Automated Ingestion",
        color: "blue",
        iconName: "Globe",
      },
      {
        id: "cap-doc-mgmt",
        number: "03",
        title: "Document Management",
        description:
          "Upload and manage TXT, PDF, DOC, and DOCX files with page-level parsing and status monitoring for complete document lifecycle control.",
        tag: "PDF / DOC / DOCX",
        color: "cyan",
        iconName: "FileText",
      },
      {
        id: "cap-custom-tables",
        number: "04",
        title: "Custom Table Creation",
        description:
          "Create tabular business records with custom columns and rows, empowering the AI to answer structured pricing and spec queries.",
        tag: "Structured Data",
        color: "violet",
        iconName: "Table",
      },
      {
        id: "cap-manual-faq",
        number: "05",
        title: "Manual FAQ Management",
        description:
          "Author, edit, and organize authoritative question-and-answer pairs with instant priority resolution for common customer inquiries.",
        tag: "Authoritative Q&A",
        color: "blue",
        iconName: "HelpCircle",
      },
      {
        id: "cap-website-mgmt",
        number: "06",
        title: "Website Content Management",
        description:
          "Review collected website snippets, exclude outdated subpages, and trigger selective re-indexing to ensure content remains current.",
        tag: "Content Review",
        color: "cyan",
        iconName: "FolderKanban",
      },
      {
        id: "cap-org-hierarchy",
        number: "07",
        title: "Knowledge Organization",
        description:
          "Arrange information into segregated product knowledge centers to maintain clear ownership and zero cross-product information crossover.",
        tag: "Domain Isolation",
        color: "violet",
        iconName: "FolderKanban",
      },
      {
        id: "cap-content-updates",
        number: "08",
        title: "Content Updates & Sync",
        description:
          "Update documents, edit FAQs, and modify table entries with immediate index refreshes so AI assistants always reference latest guidelines.",
        tag: "Real-Time Sync",
        color: "blue",
        iconName: "RefreshCw",
      },
      {
        id: "cap-retrieval",
        number: "09",
        title: "Relevant Knowledge Retrieval",
        description:
          "Semantic vector matching retrieves exact context snippets when questions arrive, ensuring zero hallucinated answers.",
        tag: "Vector Search",
        color: "cyan",
        iconName: "Search",
      },
    ],
  },
  hierarchy: {
    badge: "PRODUCT HIERARCHY",
    heading: "Product → Dedicated Knowledge Center → Separate Knowledge Base",
    description:
      "Pingo enforces a clean three-tier architecture where each product maintains its own dedicated knowledge center and separate knowledge base.",
    structureNotice:
      "Strict Domain Isolation: Knowledge from different products is never mixed or cross-pollinated unless explicitly connected.",
    levels: [
      {
        level: "Level 1",
        title: "Product Boundary",
        subtitle: "Independent Product Workspaces",
        description:
          "Define discrete workspaces for each product or service offering. Teams configure specific settings, branding, and access permissions per product.",
        example: "e.g., Cloud Suite Workspace, Mobile App Workspace, Desktop Client Workspace",
        badgeText: "Boundary Layer",
        color: "violet",
      },
      {
        level: "Level 2",
        title: "Dedicated Knowledge Center",
        subtitle: "Curated Knowledge Environment",
        description:
          "Each product has its own Knowledge Center housing its connected website sources, uploaded documents, custom tables, and curated FAQs.",
        example: "e.g., Cloud Center (42 Docs, 1 Table), Mobile Center (28 Docs, FAQs)",
        badgeText: "Workspace Layer",
        color: "blue",
      },
      {
        level: "Level 3",
        title: "Separate Knowledge Base",
        subtitle: "Quarantined Vector Index",
        description:
          "Content is indexed into a dedicated, isolated knowledge base. The AI assistant for Product A queries only Product A's knowledge base, guaranteeing zero data crossover.",
        example: "e.g., Vector Index A (Isolated), Vector Index B (Isolated)",
        badgeText: "Storage Layer",
        color: "cyan",
      },
    ],
    products: [
      {
        id: "prod-cloud",
        name: "Cloud Suite",
        tag: "Product A",
        color: "violet",
        docsCount: "42 Articles & 1 Table",
        kbStatus: "Vector Indexed",
        sampleDocs: ["API Reference", "SAML SSO Guide", "Pricing Table", "Billing FAQs"],
      },
      {
        id: "prod-mobile",
        name: "Mobile App",
        tag: "Product B",
        color: "blue",
        docsCount: "28 Articles & FAQs",
        kbStatus: "Vector Indexed",
        sampleDocs: ["iOS SDK v4", "Push Notifications", "Device Compatibility Table", "Offline Cache FAQs"],
      },
      {
        id: "prod-desktop",
        name: "Desktop Client",
        tag: "Product C",
        color: "cyan",
        docsCount: "35 Articles & Guides",
        kbStatus: "Vector Indexed",
        sampleDocs: ["Installer Docs", "Keyboard Shortcuts Table", "Hardware Acceleration FAQs"],
      },
    ],
  },
  benefits: {
    badge: "Operational Advantage",
    description:
      "When business knowledge is properly structured and indexed into quarantined vector stores, support and product teams achieve unprecedented accuracy and velocity.",
    items: [
      {
        id: "kb-ben-1",
        title: "Deterministic Grounding",
        description: "AI responses are restricted to your verified knowledge base with zero out-of-domain hallucinations.",
        metric: "100%",
        metricLabel: "Verified Context Source",
        color: "violet",
      },
      {
        id: "kb-ben-2",
        title: "Multi-Source Ingestion",
        description: "Aggregate websites, PDFs, Word documents, tabular databases, and FAQs seamlessly into a unified model.",
        metric: "5+",
        metricLabel: "Native Content Formats",
        color: "blue",
      },
      {
        id: "kb-ben-3",
        title: "Quarantined Isolation",
        description: "Zero cross-product data leakage ensures privacy and strict boundaries across multiple business units.",
        metric: "0%",
        metricLabel: "Cross-Domain Bleed",
        color: "cyan",
      },
      {
        id: "kb-ben-4",
        title: "Sub-Second Retrieval",
        description: "High-dimensional vector embeddings retrieve the exact relevant snippet in milliseconds.",
        metric: "< 40ms",
        metricLabel: "Vector Lookup Latency",
        color: "violet",
      },
    ],
  },
  cta: {
    badge: "GET STARTED",
    heading: "Bring All Your Business Knowledge Together.",
    description:
      "Organize your information and make it ready to power meaningful customer conversations.",
    buttonText: "Get Started",
    buttonHref: "/contact",
  },
};
