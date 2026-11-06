export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  iconName: "MessageSquareMore" | "Info" | "Headset" | "Settings";
  badge?: string;
}

export const homeFeaturesData = {
  headingPart1: "One platform.",
  headingPart2: "Better communication.",
  features: [
    {
      id: "talk-chat",
      title: "Talk & Chat",
      description: "Connect instantly with individuals and teams.",
      iconName: "MessageSquareMore",
    },
    {
      id: "information",
      title: "Information",
      description: "Share useful and up-to-date information.",
      iconName: "Info",
    },
    {
      id: "customer-service",
      title: "Customer Service",
      description: "Deliver exceptional support experiences.",
      iconName: "Headset",
    },
    {
      id: "operations",
      title: "Operations",
      description: "Streamline operations and boost productivity.",
      iconName: "Settings",
    },
  ] as FeatureCardItem[],
};

