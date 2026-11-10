export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  teamFriction: string;
  iconName: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  teamImpact: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  roleContext: string;
  description: string;
  sampleQuestion: string;
  groundedAnswer: string;
  sourceDoc: string;
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

export const teamAssistanceData = {
  hero: {
    badge: "Team Knowledge Assistance",
    headingPart1: "Give Your Team the Knowledge",
    headingPart2: "to Work Smarter.",
    description:
      "Help your team find important business information, understand internal processes, and get relevant answers through one AI-powered knowledge assistant.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/customer-team-management",
    },
    highlights: [
      "Shared Team Knowledge Base",
      "Natural Language Process Q&A",
      "Instant Onboarding & Guideline Access",
    ],
  },

  challenges: {
    badge: "Everyday Team Bottlenecks",
    heading: "Your Team Shouldn't Have to Search Everywhere for Answers.",
    subheading:
      "When internal processes and documentation are hard to find, team productivity stalls and valuable work is repeatedly interrupted.",
    items: [
      {
        id: "search-struggles",
        title: "Team members struggle to find the right information",
        description:
          "Important operational details are hidden inside lengthy guides and confusing folder structures, making daily information lookup frustrating.",
        teamFriction: "Lost productivity during critical tasks",
        iconName: "SearchX",
      },
      {
        id: "scattered-documents",
        title: "Important documents are scattered across different sources",
        description:
          "Process wikis, policy PDFs, project guidelines, and training decks live in different places, creating knowledge silos across departments.",
        teamFriction: "Disconnected versions and document drift",
        iconName: "FolderGit2",
      },
      {
        id: "repetitive-questions",
        title: "Employees repeatedly ask colleagues the same questions",
        description:
          "Team members spend time answering the same routine operational inquiries over and over instead of focusing on their core deliverables.",
        teamFriction: "Continuous coworker interruptions",
        iconName: "MessageCircleOff",
      },
      {
        id: "slow-onboarding",
        title: "New team members take time to understand internal processes",
        description:
          "Onboarding new hires is slowed down when standard procedures, tool access guides, and team norms are difficult to locate independently.",
        teamFriction: "Delayed ramp-up time for new hires",
        iconName: "UserCheck",
      },
      {
        id: "work-interruptions",
        title: "Finding accurate information interrupts everyday work",
        description:
          "Hunting down verified answers forces employees into constant context-switching, breaking flow state and slowing project velocity.",
        teamFriction: "Context switching and delayed project execution",
        iconName: "Clock",
      },
    ] as ChallengeItem[],
  },

  capabilities: {
    badge: "Team Empowerment Capabilities",
    heading: "Make Business Knowledge Work for Your Team.",
    subheading:
      "Equip everyone on your team with an assistant that delivers consistent, contextual answers from your connected business knowledge.",
    items: [
      {
        id: "easy-access",
        title: "Easy Knowledge Access",
        description:
          "Help team members access connected business information quickly from one shared assistant without digging through complex directories.",
        badge: "Unified Hub",
        iconName: "Compass",
        teamImpact: "Instant availability of verified internal documentation",
      },
      {
        id: "natural-language",
        title: "Natural Language Questions",
        description:
          "Allow employees to ask questions in simple language without memorizing technical syntax or exact document filenames.",
        badge: "Conversational",
        iconName: "MessageSquare",
        teamImpact: "Zero search friction for team members in any department",
      },
      {
        id: "contextual-answers",
        title: "Contextual Answers",
        description:
          "Retrieve relevant information based on each question, synthesizing the exact steps or policy clauses needed for the task.",
        badge: "Precision Matching",
        iconName: "Target",
        teamImpact: "Accurate answers tailored to the employee's inquiry",
      },
      {
        id: "organized-knowledge",
        title: "Organized Knowledge",
        description:
          "Keep information structured in dedicated knowledge bases by department, product, or workflow for orderly growth.",
        badge: "Structured Bases",
        iconName: "FolderTree",
        teamImpact: "Scalable knowledge architecture as team documentation expands",
      },
      {
        id: "consistent-information",
        title: "Consistent Information",
        description:
          "Help team members refer to the same connected business knowledge, eliminating conflicting versions or outdated instructions.",
        badge: "Single Source of Truth",
        iconName: "ShieldCheck",
        teamImpact: "Cross-team alignment on verified policies and processes",
      },
    ] as CapabilityItem[],
  },

  useCases: {
    badge: "Everyday Team Scenarios",
    heading: "Support Your Team at Every Step.",
    subheading:
      "Explore how team members across different roles use Pingo to find answers and understand workplace processes.",
    items: [
      {
        id: "process-documentation",
        title: "Finding internal process documentation",
        roleContext: "Operations & Workflows",
        description:
          "Look up standard operating procedures, approval chains, release protocols, and deployment checklists.",
        sampleQuestion: "What is the approved procedure for requesting production release approval?",
        groundedAnswer:
          "Production releases require peer review sign-off in Git, passing automated regression tests, and a scheduled maintenance window logged in Jira.",
        sourceDoc: "Standard Operating Procedures / Release Governance v2.1",
        iconName: "GitPullRequest",
      },
      {
        id: "company-guidelines",
        title: "Understanding company guidelines",
        roleContext: "Company Policies",
        description:
          "Help employees understand remote work expectations, travel reimbursements, equipment allowances, and leave policies.",
        sampleQuestion: "What is the policy for submitting professional development course expenses?",
        groundedAnswer:
          "Full-time team members can claim up to $1,000 annually for approved courses and certifications with receipts submitted to HR via the expense portal.",
        sourceDoc: "Employee Handbook / Professional Development Benefits",
        iconName: "FileCheck2",
      },
      {
        id: "product-service-info",
        title: "Accessing product and service information",
        roleContext: "Sales & Support Teams",
        description:
          "Enable sales, customer success, and support teams to look up package specifications, feature limits, and SLAs on the fly.",
        sampleQuestion: "What are the storage limits for the Professional tier compared to Enterprise?",
        groundedAnswer:
          "The Professional tier includes up to 50GB of vector storage and 25 connected documents. The Enterprise tier provides unlimited vector storage.",
        sourceDoc: "Product Catalog & Service Specifications 2026",
        iconName: "Layers",
      },
      {
        id: "workplace-questions",
        title: "Finding answers to common workplace questions",
        roleContext: "Daily Workplace FAQs",
        description:
          "Resolve routine questions regarding IT hardware requests, Wi-Fi credentials, benefits enrollment, and office access.",
        sampleQuestion: "How do I request a replacement security hardware token or keycard?",
        groundedAnswer:
          "Hardware token and keycard requests are submitted via the IT Helpdesk Portal under 'Security Credentials'. Replacements are issued within 24 hours.",
        sourceDoc: "IT Operations & Workplace Access Guidelines",
        iconName: "HelpCircle",
      },
      {
        id: "onboarding-guidance",
        title: "Helping new team members discover relevant information",
        roleContext: "New Hire Onboarding",
        description:
          "Empower new hires to explore internal documentation independently, helping them get up to speed faster without constant supervision.",
        sampleQuestion: "Where can I find our brand asset guidelines and logo vector files?",
        groundedAnswer:
          "Brand guidelines, approved hex colors, typography standards, and vector logo files are located in the Brand Center folder in Google Drive.",
        sourceDoc: "Design System & Brand Asset Guidelines v4",
        iconName: "UserPlus",
      },
    ] as UseCaseItem[],
  },

  workflow: {
    badge: "Four-Step Setup",
    heading: "How It Works",
    subheading:
      "A straightforward workflow that connects team members directly with verified organizational knowledge.",
    steps: [
      {
        step: "01",
        number: "Step 1",
        title: "Connect Business Information",
        description: "Add supported information sources.",
        detail:
          "Import internal manuals, company guidelines, process documentation, and FAQs into your secure workspace.",
        iconName: "FolderPlus",
      },
      {
        step: "02",
        number: "Step 2",
        title: "Organize Team Knowledge",
        description: "Structure information into relevant knowledge bases.",
        detail:
          "Pingo segments materials into dedicated knowledge centers organized by department, project, or operational domain.",
        iconName: "Layers",
      },
      {
        step: "03",
        number: "Step 3",
        title: "Ask Questions",
        description: "Team members ask questions naturally.",
        detail:
          "Employees type natural-language questions in their own words without needing exact filenames or directory paths.",
        iconName: "MessageSquare",
      },
      {
        step: "04",
        number: "Step 4",
        title: "Get Relevant Answers",
        description: "Pingo retrieves useful information and provides contextual responses.",
        detail:
          "The assistant pinpoints verified source documentation and delivers clear, cited answers in seconds.",
        iconName: "CheckCircle",
      },
    ] as WorkflowStep[],
  },

  benefits: {
    badge: "Team Productivity Impact",
    heading: "Better Knowledge Access. Stronger Teamwork.",
    subheading:
      "When everyone can quickly find verified answers, teams collaborate more smoothly and accomplish more each day.",
    items: [
      {
        id: "less-time-searching",
        title: "Less time spent searching for information",
        description:
          "Team members get straight to the answers they need instead of digging through deep document hierarchies.",
        tag: "Time Recovered",
        iconName: "Clock",
      },
      {
        id: "easier-access",
        title: "Easier access to internal knowledge",
        description:
          "Institutional knowledge is centralized and made instantly accessible to everyone across the company.",
        tag: "Universal Access",
        iconName: "Compass",
      },
      {
        id: "reduced-questions",
        title: "Reduced repetitive questions",
        description:
          "Free domain experts and team leads from constantly re-answering everyday questions on Slack or email.",
        tag: "Zero Interruptions",
        iconName: "CheckCheck",
      },
      {
        id: "consistent-sharing",
        title: "More consistent information sharing",
        description:
          "Ensure every team member works from the same up-to-date documentation and single source of truth.",
        tag: "Verified Accuracy",
        iconName: "ShieldCheck",
      },
      {
        id: "better-accessibility",
        title: "Better knowledge accessibility for team members",
        description:
          "New hires and cross-functional partners can onboard and execute independently with immediate confidence.",
        tag: "Fast Onboarding",
        iconName: "Users",
      },
    ] as BenefitItem[],
  },

  cta: {
    badge: "Empower Your Team",
    heading: "Help Your Team Find Answers With Confidence.",
    description:
      "Bring your business knowledge closer to the people who need it every day.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Features",
    secondaryHref: "/features/customer-team-management",
  },
};

