export interface CapabilityFeatureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  href: string;
}

export interface BusinessSolutionItem {
  id: string;
  title: string;
  audience: string;
  description: string;
  iconName: string;
  href: string;
}

export interface WhyPingoReason {
  title: string;
  description: string;
  iconName: string;
}

export const aboutData = {
  hero: {
    badge: "About Pingo",
    heading: "Smarter Conversations. Better Connections.",
    paragraphs: [
      "Every great customer experience begins with a conversation. At Pingo, we are making those conversations smarter, faster, and more grounded in verified business knowledge.",
      "Pingo is an AI-powered conversational platform and knowledge ecosystem designed to help businesses connect with their customers and teams in real time. By bringing intelligent automation, structured company documentation, and human live chat together, Pingo makes it simple to engage visitors, answer complex questions, and deliver dependable support.",
      "Whether you are a growing business expanding your customer base or an established organization coordinating internal knowledge across multiple departments, Pingo adapts to your workflows and scales alongside your operations.",
    ],
    tagline: "Connect smarter. Communicate better. Grow together.",
    corePillars: [
      {
        title: "Intelligent AI Automation",
        description: "Grounded semantic understanding and instant answers 24/7.",
      },
      {
        title: "Connected Knowledge Bases",
        description: "Direct paragraph citations from verified business documents.",
      },
      {
        title: "Live Chat & Agent Collaboration",
        description: "Fluid transitions between AI responses and human assistance.",
      },
      {
        title: "Operations & Analytics",
        description: "Actionable visibility into conversations, queues, and performance.",
      },
    ],
  },

  whatWeDo: {
    badge: "Platform Capabilities",
    heading: "Built to Power Every Customer & Team Conversation.",
    subheading:
      "Pingo combines eight core capabilities into one cohesive platform, eliminating information silos and fragmented support across your organization.",
    items: [
      {
        id: "ai-automation",
        title: "AI Automation",
        category: "Conversational Engine",
        description:
          "Automate routine inquiries, interpret natural-language questions in real time, and deliver verified answers around the clock.",
        iconName: "Cpu",
        href: "/features/ai-automation",
      },
      {
        id: "knowledge-management",
        title: "Knowledge Management",
        category: "Information Layer",
        description:
          "Ingest websites, PDFs, manuals, and FAQs into organized, dedicated knowledge bases for cited, hallucination-free retrieval.",
        iconName: "Database",
        href: "/features/knowledge-management",
      },
      {
        id: "conversation-management",
        title: "Conversation Management",
        category: "Live Engagement",
        description:
          "Engage visitors with customizable live chat widgets, a unified agent inbox, and fluid handovers between AI and human agents.",
        iconName: "MessageSquare",
        href: "/features/conversation-management",
      },
      {
        id: "helpdesk-ticketing",
        title: "Helpdesk & Ticketing",
        category: "Support Operations",
        description:
          "Record, route, and resolve support requests with clear status lifecycles (Open, In Review, Resolved), issue tracking, and priority queues.",
        iconName: "Ticket",
        href: "/features/helpdesk-ticketing",
      },
      {
        id: "customer-team-management",
        title: "Customer & Team Management",
        category: "Organization & Roles",
        description:
          "Coordinate team roles, assign conversations by department (HR, Sales, Support), and track customer interaction histories.",
        iconName: "Users",
        href: "/features/customer-team-management",
      },
      {
        id: "analytics-intelligence",
        title: "Analytics & Intelligence",
        category: "Operational Visibility",
        description:
          "Gain actionable visibility into response times, sentiment trends, resolution rates, and documentation coverage gaps.",
        iconName: "BarChart3",
        href: "/features/analytics-intelligence",
      },
      {
        id: "integrations-channels",
        title: "Integrations & Channels",
        category: "Omnichannel Reach",
        description:
          "Deploy conversations across website widgets, email channels, and business workflows seamlessly with flexible APIs.",
        iconName: "Workflow",
        href: "/features/integrations-channels",
      },
      {
        id: "security-administration",
        title: "Security & Administration",
        category: "Enterprise Trust",
        description:
          "Safeguard business information with role-based access controls, robust data encryption, and compliance-ready governance.",
        iconName: "ShieldCheck",
        href: "/features/security-administration",
      },
    ] as CapabilityFeatureItem[],
  },

  solutions: {
    badge: "Business Solutions",
    heading: "How Businesses Put Pingo to Work.",
    subheading:
      "Explore how Pingo solves distinct operational challenges across customer engagement, sales guidance, and internal team knowledge.",
    items: [
      {
        id: "customer-support",
        title: "Customer Support",
        audience: "Frontline Support & Clients",
        description:
          "Combine AI rapid answers with human agent continuity to deliver fast, reliable customer assistance without customer frustration.",
        iconName: "Headphones",
        href: "/solutions/customer-support",
      },
      {
        id: "product-service-guidance",
        title: "Product & Service Guidance",
        audience: "Prospective Buyers",
        description:
          "Help website visitors compare plans, understand complex specifications, and choose the right package with conversational guidance.",
        iconName: "Compass",
        href: "/solutions/product-service-guidance",
      },
      {
        id: "website-ai-assistant",
        title: "Website AI Assistant",
        audience: "Website Visitors",
        description:
          "Transform static websites into interactive assistants that answer visitor questions, explain offerings, and guide user actions 24/7.",
        iconName: "Globe",
        href: "/solutions/website-ai-assistant",
      },
      {
        id: "business-knowledge-access",
        title: "Business Knowledge Access",
        audience: "Entire Organization",
        description:
          "Centralize scattered policies, SOPs, and internal documents into structured, isolated knowledge hubs accessible via natural language.",
        iconName: "FolderGit2",
        href: "/solutions/business-knowledge-access",
      },
      {
        id: "team-assistance",
        title: "Team Assistance",
        audience: "Internal Departments & New Hires",
        description:
          "Empower HR, Sales, Operations, and Technical teams with instant internal answers, reducing coworker interruptions and accelerating onboarding.",
        iconName: "Users2",
        href: "/solutions/team-assistance",
      },
      {
        id: "support-management",
        title: "Support Management",
        audience: "Support Operations & Leads",
        description:
          "Bring operational clarity to support request queues, issue tracking, knowledge triage, and handle-time performance.",
        iconName: "SlidersHorizontal",
        href: "/solutions/support-management",
      },
    ] as BusinessSolutionItem[],
  },

  vision: {
    badge: "Our Vision",
    heading: "A future where every conversation creates an opportunity.",
    paragraphs: [
      "We envision a world where businesses communicate with their customers and teams more intelligently, understand needs more effectively, and build enduring relationships through every interaction.",
      "As technology evolves, we believe artificial intelligence should enhance human connection rather than replace the empathy, judgment, and discernment behind it.",
      "At Pingo, we are working towards making that future a reality—one thoughtful, knowledge-grounded conversation at a time.",
    ],
  },

  mission: {
    badge: "Our Mission",
    heading: "Making every customer conversation count.",
    paragraphs: [
      "Our mission is to empower businesses with intelligent, customizable communication tools that simplify complex interactions and improve support experiences.",
      "We aim to bridge the gap between businesses, their information, and their people through technology that makes knowledge accessible, responsive, and personal.",
    ],
  },

  whoWeAre: {
    badge: "Who We Are",
    heading: "Innovation backed by technology.",
    company: "UIAI Technologies",
    paragraphs: [
      "Pingo is a product of UIAI Technologies, developed with a vision to make customer and team communication smarter, simpler, and more accessible.",
      "As a product of UIAI Technologies, Pingo benefits from the company's technical expertise, engineering capabilities, and continued support.",
      "We combine artificial intelligence research, practical business workflows, and user-centered design to create a communication platform that delivers measurable value.",
      "Together with UIAI Technologies, we are committed to continuously improving Pingo and building solutions that make a meaningful difference in how businesses connect with their customers.",
    ],
  },

  whyPingo: {
    badge: "Why Pingo?",
    heading: "Built around your business. Powered by intelligence.",
    intro1:
      "Every business communicates differently, with its own operational policies, customer expectations, and technical workflows. Your communication platform should reflect that.",
    intro2:
      "With Pingo, we focus on providing businesses with a collaborative, knowledge-grounded foundation that delivers dependable accuracy and measurable efficiency.",
    reasons: [
      {
        title: "Grounded in Authoritative Knowledge",
        description:
          "Every response is backed by direct citations from your verified documents and policies, eliminating hallucination and guesswork.",
        iconName: "Database",
      },
      {
        title: "Collaborative Human + AI Continuity",
        description:
          "AI resolves routine questions instantly, while complex inquiries transition smoothly to human agents with full conversation context preserved.",
        iconName: "HeartHandshake",
      },
      {
        title: "Domain-Isolated Knowledge Architecture",
        description:
          "Maintain strict boundaries between customer-facing documentation and sensitive internal department guides like HR, engineering, and finance.",
        iconName: "Layers",
      },
      {
        title: "Operational Visibility & Issue Tracking",
        description:
          "Monitor request queues, resolution lifecycles, and agent handle times through unified dashboards that keep support teams aligned.",
        iconName: "Sliders",
      },
      {
        title: "Engineered for Scalable Security",
        description:
          "From early-stage live chat to enterprise multi-department rollouts, enjoy robust encryption, role-based access, and complete brand customization.",
        iconName: "ShieldCheck",
      },
    ] as WhyPingoReason[],
  },

  getInTouch: {
    badge: "Start a Conversation",
    heading: "Ready to Make Your Business Conversations Smarter?",
    paragraphs: [
      "Whether you want to elevate customer support, guide website visitors, or empower your internal team with instant knowledge access, Pingo is ready to adapt to your needs.",
      "Explore our platform features, discover solutions tailored to your industry, or get in touch with our team to see how Pingo can support your business.",
    ],
    closing: "Let's start a conversation.",
    cta: "Contact Us",
    primaryCta: {
      text: "Get in Touch",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/ai-automation",
    },
  },
};
