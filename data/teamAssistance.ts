export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  teamFriction: string;
  iconName: string;
}

export interface HowPingoHelpsItem {
  id: string;
  title: string;
  description: string;
  pillarBadge: string;
  iconName: string;
}

export interface DepartmentWorkspaceTab {
  id: string;
  deptName: string;
  roleTitle: string;
  avatarColor: string;
  badge: string;
  question: string;
  sourceDoc: string;
  answer: string;
  iconName: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  department: string;
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
  impactTag: string;
  iconName: string;
}

export const teamAssistanceData = {
  hero: {
    badge: "Internal Team Assistance",
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
      href: "/features/ai-automation",
    },
    highlights: [
      "Department Information Access",
      "Natural-Language Process Answers",
      "Instant Onboarding & SOP Retrieval",
      "Single Source of Truth",
    ],
    departmentTabs: [
      {
        id: "hr",
        deptName: "HR & People",
        roleTitle: "People Partner",
        avatarColor: "bg-[#635BFF]",
        badge: "People & Policies",
        question: "What is our leave rollover policy for untaken PTO at fiscal year-end?",
        sourceDoc: "HR Guidelines / Employee Benefits Handbook 2026 (Section 3.4)",
        answer:
          "Full-time employees can roll over up to 5 unused PTO days into the following calendar year, which must be utilized within the first quarter (by March 31).",
        iconName: "Users",
      },
      {
        id: "sales",
        deptName: "Sales & RevOps",
        roleTitle: "Account Executive",
        avatarColor: "bg-[#3984FF]",
        badge: "Commercial Knowledge",
        question: "What are the contractual storage limits for our Professional tier vs Enterprise?",
        sourceDoc: "Sales Enablement / Commercial Pricing Matrix 2026",
        answer:
          "The Professional tier includes up to 50GB vector storage and 25 connected document sources. Enterprise tier provides unlimited vector storage, custom SLA, and dedicated onboarding.",
        iconName: "TrendingUp",
      },
      {
        id: "operations",
        deptName: "Operations",
        roleTitle: "Operations Specialist",
        avatarColor: "bg-[#20C5D8]",
        badge: "SOPs & Workflows",
        question: "What is the mandatory approval threshold for external vendor software procurement?",
        sourceDoc: "Finance & Operations / Procurement SOP (Clause 2.1)",
        answer:
          "Software purchases under $5,000 require Department Manager approval. Subscriptions exceeding $5,000 require formal sign-off from both Department Head and Finance Controller.",
        iconName: "Briefcase",
      },
      {
        id: "tech",
        deptName: "Technical Teams",
        roleTitle: "Systems Engineer",
        avatarColor: "bg-indigo-600",
        badge: "Engineering Architecture",
        question: "What are the retry parameters and exponential backoff windows for webhook failures?",
        sourceDoc: "Technical Specs / Platform Webhook Architecture v2.4",
        answer:
          "Webhooks perform 5 automated delivery attempts with exponential retry intervals (1m, 5m, 15m, 1h, and 6h) before moving the payload to the dead-letter queue.",
        iconName: "Code2",
      },
      {
        id: "onboarding",
        deptName: "New Employees",
        roleTitle: "New Hire",
        avatarColor: "bg-emerald-500",
        badge: "First 30 Days",
        question: "Where can I find our brand identity guidelines and official typography font packs?",
        sourceDoc: "Brand Center / Brand Guidelines & Design Tokens v4",
        answer:
          "All official logos, SVG vectors, color tokens, and approved Google Workspace fonts are centralized in Google Drive under Brand Center > Assets > Identity 2026.",
        iconName: "Sparkles",
      },
    ] as DepartmentWorkspaceTab[],
  },

  challenges: {
    badge: "Team Knowledge Obstacles",
    heading: "Your Team Shouldn't Have to Search Everywhere for Answers.",
    subheading:
      "When internal processes and documentation are hard to find, team productivity stalls and valuable work is repeatedly interrupted.",
    items: [
      {
        id: "search-struggles",
        title: "Team members struggle to find the right information",
        description:
          "Important operational details are buried inside lengthy guides, outdated wikis, and confusing folder structures, making daily lookup frustrating.",
        teamFriction: "Lost work hours and task delays",
        iconName: "SearchX",
      },
      {
        id: "scattered-documents",
        title: "Important documents are scattered across different sources",
        description:
          "Process documents, policy PDFs, project guidelines, and training decks live across separate drives, creating departmental knowledge silos.",
        teamFriction: "Disconnected versions and document drift",
        iconName: "FolderGit2",
      },
      {
        id: "repetitive-questions",
        title: "Employees repeatedly ask colleagues the same questions",
        description:
          "Team members spend valuable hours answering the same routine operational inquiries on Slack and email instead of focusing on core deliverables.",
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
          "Hunting down verified answers forces employees into constant context-switching, breaking focus and slowing project execution.",
        teamFriction: "Context switching and fragmented focus",
        iconName: "Clock",
      },
    ] as ChallengeItem[],
  },

  howPingoHelps: {
    badge: "Knowledge Empowerment",
    heading: "Make Business Knowledge Work for Your Team.",
    subheading:
      "Equip everyone on your team with an assistant that delivers consistent, contextual answers from your connected business knowledge.",
    items: [
      {
        id: "easy-access",
        title: "Easy knowledge access",
        description:
          "Help team members access connected business information quickly from one unified assistant without digging through complex directories.",
        pillarBadge: "Instant Access",
        iconName: "Compass",
      },
      {
        id: "natural-language",
        title: "Natural-language questions",
        description:
          "Allow employees to ask questions in plain, conversational language without needing to know specific file names, tags, or folder paths.",
        pillarBadge: "Zero Syntax Required",
        iconName: "MessageSquare",
      },
      {
        id: "contextual-answers",
        title: "Contextual answers",
        description:
          "Retrieve relevant information based on the specific question, citing authoritative policy clauses and operating guidelines directly.",
        pillarBadge: "Exact Paragraph Matches",
        iconName: "Target",
      },
      {
        id: "organized-knowledge",
        title: "Organized knowledge",
        description:
          "Keep information structured in dedicated knowledge bases by department, operational domain, or workflow for clear organizational boundaries.",
        pillarBadge: "Domain Segregation",
        iconName: "FolderTree",
      },
      {
        id: "consistent-information",
        title: "Consistent information",
        description:
          "Help team members refer to consistent, verified business information across all teams, eliminating conflicting instructions and outdated copies.",
        pillarBadge: "Single Source of Truth",
        iconName: "ShieldCheck",
      },
    ] as HowPingoHelpsItem[],
  },

  workflow: {
    badge: "Employee Workday Journey",
    heading: "How Teams Access Knowledge Throughout the Day",
    subheading:
      "A 5-stage experience that transforms everyday workplace questions into rapid, verified execution without team friction.",
    steps: [
      {
        step: "Stage 01",
        number: "01",
        title: "Employee Encounters a Work-Related Question",
        description: "An employee needs immediate clarification during an active task.",
        detail:
          "Whether checking approval thresholds, client contract limits, HR policies, or system deployment steps, work requires authoritative guidance.",
        iconName: "HelpCircle",
      },
      {
        step: "Stage 02",
        number: "02",
        title: "Employee Searches for Relevant Information",
        description: "The team member types a natural-language question into Pingo.",
        detail:
          "Instead of browsing endless nested folders or messaging busy teammates, the employee simply states what they need in plain English.",
        iconName: "Search",
      },
      {
        step: "Stage 03",
        number: "03",
        title: "Pingo Retrieves Relevant Internal Knowledge",
        description: "The assistant searches across authorized department knowledge bases.",
        detail:
          "High-precision semantic vector matching pinpoints the exact paragraph, policy clause, or procedure from verified company files.",
        iconName: "Database",
      },
      {
        step: "Stage 04",
        number: "04",
        title: "Employee Understands the Required Process",
        description: "Pingo delivers a clear, concise answer with a direct source citation.",
        detail:
          "The employee receives actionable guidance immediately, backed by transparent references to the verified company document.",
        iconName: "FileCheck",
      },
      {
        step: "Stage 05",
        number: "05",
        title: "Employee Continues the Task with Better Information",
        description: "Work progresses smoothly without delay or team interruption.",
        detail:
          "Tasks are executed accurately on the first attempt, eliminating procedural rework and keeping colleagues focused on high-value priorities.",
        iconName: "CheckCircle",
      },
    ] as WorkflowStep[],
  },

  useCases: {
    badge: "Department Knowledge Applications",
    heading: "Support Every Team Across Your Organization",
    subheading:
      "Explore how Pingo powers everyday operational clarity across different functional departments.",
    items: [
      {
        id: "hr-department",
        title: "Human Resources (HR) & People Operations",
        department: "Human Resources",
        description:
          "Help employees understand leave policies, remote work guidelines, healthcare benefits, and expense reimbursements without ticketing HR.",
        sampleQuestion: "What is the policy for claiming professional development certifications?",
        groundedAnswer:
          "Full-time employees receive up to $1,000 annually for approved coursework. Expense claims with completion certificates should be submitted via the finance portal within 30 days.",
        sourceDoc: "HR Knowledge Base > Employee Benefits Handbook 2026",
        iconName: "Users",
      },
      {
        id: "sales-department",
        title: "Sales & Revenue Operations",
        department: "Sales Teams",
        description:
          "Enable sales reps and account executives to check package specifications, pricing guidelines, feature limits, and competitor battlecards on demand.",
        sampleQuestion: "What are the vector storage limits for our Professional plan compared to Enterprise?",
        groundedAnswer:
          "The Professional plan provides up to 50GB vector storage and 25 connected document sources. The Enterprise plan includes unlimited vector storage and custom SLAs.",
        sourceDoc: "Commercial Base > Product Catalog & Pricing Specs 2026",
        iconName: "TrendingUp",
      },
      {
        id: "operations-department",
        title: "Operations & Business Process Management",
        department: "Operations",
        description:
          "Clarify cross-functional handoffs, software procurement procedures, approval matrix limits, and vendor onboarding requirements.",
        sampleQuestion: "What is the required approval chain for hardware purchases above $2,500?",
        groundedAnswer:
          "Hardware purchases over $2,500 require submission of a requisition form signed by the Department Lead and IT Operations Manager prior to issuance of a purchase order.",
        sourceDoc: "Operations Base > Procurement & Capital Expense SOP v3",
        iconName: "Briefcase",
      },
      {
        id: "technical-department",
        title: "Technical & Engineering Teams",
        department: "Technical Teams",
        description:
          "Provide engineers and developers with instant access to deployment protocols, platform architecture specifications, API references, and troubleshooting runbooks.",
        sampleQuestion: "What is the rollback procedure if a canary deployment exceeds 2% error rate?",
        groundedAnswer:
          "Run 'make canary-rollback' in the deployment CLI, which triggers automated traffic drainage back to stable v1 and alerts the on-call engineer via PagerDuty.",
        sourceDoc: "Engineering Base > Deployment & Incident Response Runbook",
        iconName: "Code2",
      },
      {
        id: "onboarding-department",
        title: "New Employee Onboarding",
        department: "New Employees",
        description:
          "Empower new hires to explore company guidelines, team directories, tool setups, and brand assets independently during their first weeks.",
        sampleQuestion: "Where do I find the company Figma design system and brand logo assets?",
        groundedAnswer:
          "The official design tokens, typography styles, and SVG brand assets are available in the Figma Team Workspace under 'Pingo Design System v2' and in the Brand Center Drive.",
        sourceDoc: "Onboarding Base > New Hire Starter Kit & Brand Guide",
        iconName: "Sparkles",
      },
    ] as UseCaseItem[],
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
          "Team members get straight to the verified answers they need instead of digging through deep document hierarchies and multiple cloud drives.",
        impactTag: "Time Recovered",
        iconName: "Clock",
      },
      {
        id: "easier-access",
        title: "Easier access to internal knowledge",
        description:
          "Institutional knowledge is centralized and made instantly accessible through natural-language questions for every team member.",
        impactTag: "Universal Access",
        iconName: "Compass",
      },
      {
        id: "reduced-questions",
        title: "Reduced repetitive questions among team members",
        description:
          "Free domain specialists, managers, and team leads from constantly answering recurring operational questions on Slack and email.",
        impactTag: "Zero Interruptions",
        iconName: "MessageSquare",
      },
      {
        id: "consistent-sharing",
        title: "More consistent information sharing across the team",
        description:
          "Ensure every employee references the same up-to-date documentation and single source of truth across all business units.",
        impactTag: "Verified Accuracy",
        iconName: "ShieldCheck",
      },
      {
        id: "better-accessibility",
        title: "Better knowledge accessibility for new team members",
        description:
          "Accelerate new hire onboarding and enable new employees to discover operational guidance independently from day one.",
        impactTag: "Fast Onboarding",
        iconName: "Users",
      },
    ] as BenefitItem[],
  },

  cta: {
    badge: "Empower Your Team",
    heading: "Help Your Team Find Answers With Confidence.",
    description:
      "Bring your business knowledge closer to the people who need it every day. Create a shared knowledge assistant that keeps your organization informed and moving forward.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Support Management",
    secondaryHref: "/solutions/support-management",
  },
};
