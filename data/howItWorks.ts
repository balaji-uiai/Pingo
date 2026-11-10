export interface SetupStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  badge: string;
  statusText: string;
  step?: string;
  iconName?: "Globe" | "Database" | "Bot" | "Users" | "Palette" | "Rocket";
}

export type StepItem = SetupStep;
export type HowItWorksData = HowItWorksSectionData;

export interface HowItWorksSectionData {
  sectionLabel: string;
  heading: string;
  description: string;
  workflowLabel: string;
  workflowHeading: string;
  workflowDescription: string;
  steps: SetupStep[];
}

export const howItWorksSetupData: HowItWorksSectionData = {
  sectionLabel: "02 / HOW IT WORKS",
  heading: "From Setup to Smarter Conversations.",
  description:
    "Getting started with Pingo is simple. Set up your AI-powered communication platform, connect your knowledge, and let customers experience smarter conversations.",
  workflowLabel: "01 / SETUP",
  workflowHeading: "Everything starts with a simple setup.",
  workflowDescription:
    "Connect your website, build your knowledge base, configure your AI agent, and deploy your customized Pingo widget.",
  steps: [
    {
      id: "connect-website",
      stepNumber: "01",
      title: "Connect Your Website",
      description: "Connect your business website to Pingo.",
      badge: "Discovery",
      statusText: "Connection successful ✓",
    },
    {
      id: "knowledge-centers",
      stepNumber: "02",
      title: "Build Your Knowledge Centers",
      description:
        "Bring your business information together to create knowledge sources for your AI agent.",
      badge: "Knowledge",
      statusText: "Knowledge Ready ✓",
    },
    {
      id: "develop-agent",
      stepNumber: "03",
      title: "Develop Your AI Agent",
      description:
        "Create and configure an AI agent using your business knowledge.",
      badge: "Configuration",
      statusText: "Status: Ready ✓",
    },
    {
      id: "support-team",
      stepNumber: "04",
      title: "Create Your Support Team",
      description:
        "Create your human support team to manage customer conversations.",
      badge: "Team",
      statusText: "3 Agents Online",
    },
    {
      id: "customize-widget",
      stepNumber: "05",
      title: "Customize Your Chat Widget",
      description:
        "Generate a customizable chat widget that matches your brand identity.",
      badge: "Branding",
      statusText: "Widget Preview",
    },
    {
      id: "deploy-pingo",
      stepNumber: "06",
      title: "Deploy Pingo",
      description:
        "Deploy Pingo on your website using its installation script.",
      badge: "Launch",
      statusText: "Your widget is ready!",
    },
  ],
};
