export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  visitorFriction: string;
  iconName: string;
}

export interface HowPingoHelpsItem {
  id: string;
  title: string;
  description: string;
  interactiveTag: string;
  iconName: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  visitorQuestion: string;
  assistantResponse: string;
  suggestedAction: string;
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

export const websiteAiAssistantData = {
  hero: {
    badge: "Interactive Website Experience",
    headingPart1: "Make Your Website",
    headingPart2: "More Interactive and Helpful.",
    description:
      "Turn website visits into meaningful interactions by helping visitors explore your business information through an intelligent website assistant.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "/features/ai-automation",
    },
    browserDemo: {
      url: "https://yourcompany.com",
      pageTitle: "Enterprise Cloud Platforms & Consulting",
      visitorQuery: "I'm looking for enterprise compliance certifications and data residency options.",
      assistantAnswer:
        "We maintain SOC 2 Type II, ISO 27001, and HIPAA compliance with isolated data residency options across the US, EU, and Asia-Pacific regions.",
      suggestedPill: "View Compliance & Security Hub →",
      suggestedUrl: "/security-overview",
    },
    highlights: [
      "Dynamic On-Page Guidance",
      "Direct Link Navigation",
      "Interactive Content Discovery",
      "Zero Website Dead-Ends",
    ],
  },

  challenges: {
    badge: "The Static Website Problem",
    heading: "Traditional Websites Make Visitors Do All the Heavy Lifting.",
    subheading:
      "Most corporate websites are static brochures where visitors must dig through layers of menus, subpages, and text blocks just to find answers to specific questions.",
    items: [
      {
        id: "lost-info",
        title: "Website visitors may not know where to find specific information",
        description:
          "Visitors arrive with specific intent but struggle to figure out which navigation dropdown or sub-menu contains the exact details they need.",
        visitorFriction: "Confusing Navigation",
        iconName: "Compass",
      },
      {
        id: "multi-page-hopping",
        title: "Visitors navigate through multiple pages to understand a business",
        description:
          "Prospective clients have to click through 'About Us', 'Solutions', 'Case Studies', and 'Pricing' just to grasp what the business actually provides.",
        visitorFriction: "Click Fatigue",
        iconName: "Layers",
      },
      {
        id: "unnoticed-content",
        title: "Important website content may go unnoticed",
        description:
          "Valuable case studies, whitepapers, service differentiators, and FAQ answers remain hidden deep within website architecture.",
        visitorFriction: "Hidden Value",
        iconName: "EyeOff",
      },
      {
        id: "early-drop-off",
        title: "Visitors leave without exploring relevant services or information",
        description:
          "When users cannot find immediate answers within 10 to 15 seconds, they bounce away and seek competitors with clearer answers.",
        visitorFriction: "Visitor Abandonment",
        iconName: "LogOut",
      },
      {
        id: "static-inability",
        title: "Static website pages cannot always answer individual visitor questions",
        description:
          "A static web page cannot tailor its messaging or answer unique scenario questions based on a specific visitor's industry or scale.",
        visitorFriction: "One-Size-Fits-None",
        iconName: "HelpCircle",
      },
    ],
  },

  howPingoHelps: {
    badge: "Conversational Website Layer",
    heading: "Turning Passive Web Browsing Into Active Discovery.",
    subheading:
      "Pingo adds an intelligent interactive layer to your web presence, answering visitor questions and guiding them directly to relevant content.",
    items: [
      {
        id: "interactive-experience",
        title: "Provides an interactive assistant experience on the website",
        description:
          "Where supported, visitors can open an on-site assistant widget to converse in natural language instead of hunting through site maps.",
        interactiveTag: "Live Engagement",
        iconName: "MessageSquare",
      },
      {
        id: "discover-information",
        title: "Helps visitors discover relevant website information",
        description:
          "Instantly highlights case studies, documentation, service tiers, and policy guidelines tailored to what the visitor asks.",
        interactiveTag: "Content Surfacing",
        iconName: "Search",
      },
      {
        id: "explains-services",
        title: "Explains business services and offerings",
        description:
          "Translates complex offerings into accessible summaries, explaining how your services work and who they are designed for.",
        interactiveTag: "Clear Messaging",
        iconName: "Sparkles",
      },
      {
        id: "answers-connected-content",
        title: "Answers questions based on connected website content",
        description:
          "Extracts answers directly from your published website copy, ensuring every response aligns with your official brand messaging.",
        interactiveTag: "Verified Grounding",
        iconName: "Database",
      },
      {
        id: "guides-relevant-pages",
        title: "Guides visitors towards relevant information and pages",
        description:
          "Supplies direct deep-links to specific product pages, calculators, booking calendars, or whitepapers within the conversational flow.",
        interactiveTag: "Assisted Navigation",
        iconName: "Navigation",
      },
    ],
  },

  workflow: {
    badge: "Website Visitor Journey",
    heading: "From Landing Page to Actionable Discovery",
    subheading:
      "A natural 5-step visitor interaction flow that makes exploring website information fast, intuitive, and engaging.",
    steps: [
      {
        step: "Step 01",
        number: "01",
        title: "Visitor Opens the Website",
        description: "A prospective customer lands on any page across your web domain.",
        detail: "The visitor observes your page content and is greeted by a subtle, unobtrusive assistant launcher.",
        iconName: "Globe",
      },
      {
        step: "Step 02",
        number: "02",
        title: "Visitor Notices the Pingo Assistant",
        description: "The visitor sees the interactive assistant ready to answer questions.",
        detail: "Suggested inquiry pills and a welcoming prompt indicate that help is immediately accessible on-page.",
        iconName: "Sparkles",
      },
      {
        step: "Step 03",
        number: "03",
        title: "Visitor Asks About a Service or Website Topic",
        description: "The visitor types an inquiry regarding capabilities, pricing, or company background.",
        detail: "Instead of searching through headers or footers, the visitor asks in natural plain language.",
        iconName: "MessageSquare",
      },
      {
        step: "Step 04",
        number: "04",
        title: "Pingo Retrieves Relevant Website Information",
        description: "Pingo scans connected website knowledge to pull verified details.",
        detail: "Relevant content snippets, feature specifications, and direct page references are retrieved within milliseconds.",
        iconName: "Search",
      },
      {
        step: "Step 05",
        number: "05",
        title: "Visitor Discovers the Information They Need",
        description: "The visitor receives a tailored answer and navigates to the relevant page.",
        detail: "Equipped with verified answers and direct deep-links, the visitor explores further or initiates contact.",
        iconName: "CheckCircle",
      },
    ],
  },

  useCases: {
    badge: "Visitor Engagement Scenarios",
    heading: "Practical Website Assistant Scenarios",
    subheading:
      "See how an intelligent website assistant answers varied visitor intents across discovery, navigation, and service education.",
    items: [
      {
        id: "what-business-offers",
        title: "Explaining What the Business Offers",
        category: "Company Overview",
        description:
          "Helping visitors who land on blog posts or secondary pages quickly understand your core business value proposition.",
        visitorQuestion: "'Can you give me a 2-minute summary of what your company actually does?'",
        assistantResponse:
          "We provide enterprise AI knowledge infrastructure that connects internal documents and websites to automated customer and team assistants.",
        suggestedAction: "View Solutions Overview →",
        iconName: "Briefcase",
      },
      {
        id: "find-service-info",
        title: "Helping Visitors Find Relevant Service Information",
        category: "Service Discovery",
        description:
          "Surfacing specific service packages, SLAs, or technical prerequisites without forcing visitors through complex menus.",
        visitorQuestion: "'Do you offer managed implementation for healthcare clinics subject to HIPAA?'",
        assistantResponse:
          "Yes, our Healthcare Implementation Tier includes signed BAAs, dedicated audit logging, and HIPAA-compliant data routing.",
        suggestedAction: "Explore Healthcare Tier Details →",
        iconName: "ShieldCheck",
      },
      {
        id: "answer-website-content",
        title: "Answering Questions About Website Content",
        category: "Content Clarification",
        description:
          "Clarifying terms, methodology steps, or case study statistics published across your site.",
        visitorQuestion: "'In your FinTech case study, what was the average deployment timeframe?'",
        assistantResponse:
          "According to the Meridian Bank case study, deployment across 4 branch regions was completed in 18 business days.",
        suggestedAction: "Read Full Meridian Case Study →",
        iconName: "FileText",
      },
      {
        id: "guide-sections",
        title: "Guiding Visitors to Relevant Website Sections",
        category: "Interactive Navigation",
        description:
          "Acting as a digital concierge that directs visitors straight to pricing, careers, docs, or partner registration.",
        visitorQuestion: "'Where can I submit a partner application or read agency commission terms?'",
        assistantResponse:
          "Our Agency Partner Program portal outlines tier commissions (up to 25%) and includes the application form.",
        suggestedAction: "Go to Agency Partner Portal →",
        iconName: "Navigation",
      },
      {
        id: "first-time-visitors",
        title: "Helping First-Time Visitors Understand the Business",
        category: "Onboarding Guidance",
        description:
          "Providing gentle conversational orientation for new visitors who are exploring the platform for the very first time.",
        visitorQuestion: "'I'm new here. Where should I start if I want to automate customer FAQs?'",
        assistantResponse:
          "Start by exploring our 3-minute interactive demo or review the Customer Support Solution page to see the workflow in action.",
        suggestedAction: "Watch 3-Minute Platform Demo →",
        iconName: "Compass",
      },
    ],
  },

  benefits: {
    badge: "Engagement Impact",
    heading: "Why an Interactive Website Delivers Better Results",
    subheading:
      "Transforming static web pages into interactive conversations increases dwell time, eliminates navigation friction, and helps visitors understand your offerings.",
    items: [
      {
        id: "website-engagement",
        title: "Higher Website Engagement",
        description:
          "Visitors actively interact with your content instead of passively skimming and bouncing after 15 seconds.",
        highlight: "Active Interaction",
        iconName: "MousePointerClick",
      },
      {
        id: "easier-discovery",
        title: "Easier Information Discovery",
        description:
          "Users find exact answers to niche questions immediately without clicking through dozens of nested subpages.",
        highlight: "Frictionless Lookup",
        iconName: "Search",
      },
      {
        id: "interactive-experiences",
        title: "Interactive Experiences",
        description:
          "Conversational prompts and guided deep-links turn static documentation into a responsive digital concierge.",
        highlight: "Dynamic Navigation",
        iconName: "Sparkles",
      },
      {
        id: "visitor-understanding",
        title: "Better Visitor Understanding",
        description:
          "Prospective buyers leave with a clear comprehension of your services, increasing conversion likelihood.",
        highlight: "Clear Comprehension",
        iconName: "CheckCircle",
      },
    ],
  },

  cta: {
    badge: "Interactive Website Assistant",
    heading: "Make Your Website a Helpful Guide for Every Visitor.",
    description:
      "Equip your web domain with an intelligent assistant that engages visitors, answers questions from your content, and guides them directly to the information they need.",
    buttonText: "Get Started",
    buttonHref: "/contact",
    secondaryText: "Explore Business Knowledge",
    secondaryHref: "/solutions/business-knowledge-access",
  },
};
