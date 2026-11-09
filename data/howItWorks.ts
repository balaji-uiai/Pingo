export interface StepItem {
  step: string;
  title: string;
  description: string;
  iconName: "Globe" | "Database" | "Bot" | "Users" | "Palette" | "Rocket";
}

export interface HowItWorksData {
  badge: string;
  heading: string;
  supportingText?: string;
  steps: StepItem[];
  bottomCta: {
    heading: string;
    subheading: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const howItWorksData: HowItWorksData = {
  badge: "THE PINGO WAY",
  heading: "Build Your AI Support Team in 6 Simple Steps",
  supportingText: "",
  steps: [
    {
      step: "STEP 01",
      title: "Connect Your Website",
      description: "Import and scrape your website content automatically.",
      iconName: "Globe",
    },
    {
      step: "STEP 02",
      title: "Build Your Knowledge Base",
      description: "Add your products, services, FAQs, and business information.",
      iconName: "Database",
    },
    {
      step: "STEP 03",
      title: "Create Your AI Agent",
      description: "Train an AI agent to understand and support your customers.",
      iconName: "Bot",
    },
    {
      step: "STEP 04",
      title: "Build Your AI Team",
      description: "Assign specialized agents to different conversations and tasks.",
      iconName: "Users",
    },
    {
      step: "STEP 05",
      title: "Customize Your Chat Widget",
      description: "Match your AI chat experience to your brand identity.",
      iconName: "Palette",
    },
    {
      step: "STEP 06",
      title: "Launch Your AI Team",
      description: "Add the Pingo script to your domain and go live.",
      iconName: "Rocket",
    },
  ],
  bottomCta: {
    heading: "Ready to put AI to work?",
    subheading: "Build your AI team. Automate conversations. Grow your business.",
    buttonText: "GET STARTED WITH PINGO",
    buttonHref: "/contact",
  },
};
