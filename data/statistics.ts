export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface StatisticsSectionData {
  heading: {
    line1: string;
    line2: string;
  };
  items: StatisticItem[];
}

export const statisticsContent: StatisticsSectionData = {
  heading: {
    line1: "Smarter AI solutions.",
    line2: "Better customer experiences.",
  },
  items: [
    {
      id: "conversations",
      value: "1,000+",
      label: "Conversations",
    },
    {
      id: "agents",
      value: "100+",
      label: "AI Agents",
    },
    {
      id: "websites",
      value: "10+",
      label: "Websites",
    },
    {
      id: "unhappy-customers",
      value: "0",
      label: "Unhappy Customers",
    },
  ],
};

// Export individual items for direct access or backward compatibility
export const statisticsData: StatisticItem[] = statisticsContent.items;
