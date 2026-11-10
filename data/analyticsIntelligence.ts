export interface MetricCardPreview {
  id: string;
  label: string;
  value: string;
  subtext: string;
  trend: string;
  color: "violet" | "blue" | "cyan";
}

export interface TopicDistributionItem {
  topic: string;
  percentage: number;
  count: string;
  color: "violet" | "blue" | "cyan";
}

export interface ActivityVolumePoint {
  day: string;
  volume: number;
}

export interface AnalyticsCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "BarChart3"
    | "TrendingUp"
    | "Gauge"
    | "BookOpen"
    | "Activity"
    | "Compass";
}

export interface AnalyticsWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "Database" | "FolderTree" | "Search" | "LineChart";
}

export interface AnalyticsBenefit {
  id: string;
  title: string;
  description: string;
  highlight: string;
  highlightLabel: string;
  color: "violet" | "blue" | "cyan";
}

export interface AnalyticsIntelligenceData {
  hero: {
    badge: string;
    headingPart1: string;
    headingPart2: string;
    description: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    illustrativeDisclaimer: string;
    sampleMetrics: MetricCardPreview[];
    sampleTopics: TopicDistributionItem[];
    sampleWeeklyVolume: ActivityVolumePoint[];
  };
  overview: {
    badge: string;
    heading: string;
    description: string;
    dimensions: {
      step: string;
      title: string;
      description: string;
      tag: string;
      color: "violet" | "blue" | "cyan";
    }[];
  };
  capabilities: {
    badge: string;
    heading: string;
    subheading: string;
    items: AnalyticsCapability[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    steps: AnalyticsWorkflowStep[];
  };
  benefits: {
    badge: string;
    heading: string;
    description: string;
    items: AnalyticsBenefit[];
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const analyticsIntelligenceData: AnalyticsIntelligenceData = {
  hero: {
    badge: "ANALYTICS & INTELLIGENCE",
    headingPart1: "Turn Conversations",
    headingPart2: "Into Insights.",
    description:
      "Understand customer interactions, discover patterns, and make informed decisions with meaningful insights.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Analytics",
      href: "#overview",
    },
    illustrativeDisclaimer:
      "Sample interface metrics shown for visualization purposes.",
    sampleMetrics: [
      {
        id: "m-1",
        label: "Conversation Volume",
        value: "1,842",
        subtext: "Sample 30-day discussions",
        trend: "+14.2% vs last period",
        color: "violet",
      },
      {
        id: "m-2",
        label: "Knowledge Grounding",
        value: "94.6%",
        subtext: "Verified citation rate",
        trend: "Optimal accuracy",
        color: "blue",
      },
      {
        id: "m-3",
        label: "Avg Resolution Time",
        value: "3m 12s",
        subtext: "First-contact resolution",
        trend: "Efficient flow",
        color: "cyan",
      },
    ],
    sampleTopics: [
      {
        topic: "Authentication & SSO",
        percentage: 36,
        count: "663 inquiries",
        color: "violet",
      },
      {
        topic: "API & Webhook Integrations",
        percentage: 28,
        count: "515 inquiries",
        color: "blue",
      },
      {
        topic: "Billing & Subscription Plans",
        percentage: 22,
        count: "405 inquiries",
        color: "cyan",
      },
      {
        topic: "Team Permissions & Roles",
        percentage: 14,
        count: "259 inquiries",
        color: "violet",
      },
    ],
    sampleWeeklyVolume: [
      { day: "Mon", volume: 68 },
      { day: "Tue", volume: 85 },
      { day: "Wed", volume: 94 },
      { day: "Thu", volume: 88 },
      { day: "Fri", volume: 76 },
      { day: "Sat", volume: 42 },
      { day: "Sun", volume: 38 },
    ],
  },
  overview: {
    badge: "INTELLIGENCE ENGINE",
    heading: "Understand What Happens Behind Every Conversation",
    description:
      "Get a clearer picture of customer interactions through available conversation and activity information. Use insights to identify patterns and understand where improvements may be needed.",
    dimensions: [
      {
        step: "01",
        title: "Interaction Activity & Volume",
        description:
          "Track conversations over time to understand interaction peaks, inquiry loads, and seasonal engagement patterns.",
        tag: "Activity Dynamics",
        color: "violet",
      },
      {
        step: "02",
        title: "Recurring Question Themes",
        description:
          "Identify clusters of related customer questions to discover where self-service documentation or guidance can be strengthened.",
        tag: "Pattern Discovery",
        color: "blue",
      },
      {
        step: "03",
        title: "Knowledge Base Utilization",
        description:
          "Observe which articles and guides are most frequently referenced to verify that customer queries receive accurate, up-to-date answers.",
        tag: "Knowledge Usage",
        color: "cyan",
      },
    ],
  },
  capabilities: {
    badge: "CORE CAPABILITIES",
    heading: "Insights That Help You Move Forward",
    subheading:
      "Six purpose-built capabilities for monitoring customer interaction trends and evaluating support performance.",
    items: [
      {
        id: "conversation-metrics",
        number: "01",
        title: "Conversation Metrics",
        description:
          "Understand available conversation activity across total discussions, message counts, and interaction volumes.",
        tag: "Volume Tracking",
        color: "violet",
        iconName: "BarChart3",
      },
      {
        id: "customer-interaction-trends",
        number: "02",
        title: "Customer Interaction Trends",
        description:
          "Identify patterns in customer questions over time to spot common product inquiries, confusing workflows, and emerging topics.",
        tag: "Trend Analysis",
        color: "blue",
        iconName: "TrendingUp",
      },
      {
        id: "performance-overview",
        number: "03",
        title: "Performance Overview",
        description:
          "View relevant performance indicators to understand first-response pacing and overall conversation flow quality.",
        tag: "Key Indicators",
        color: "cyan",
        iconName: "Gauge",
      },
      {
        id: "knowledge-usage-insights",
        number: "04",
        title: "Knowledge Usage Insights",
        description:
          "Understand how connected knowledge is being used, where supported, revealing which documentation articles answer the most inquiries.",
        tag: "Content Impact",
        color: "violet",
        iconName: "BookOpen",
      },
      {
        id: "activity-monitoring",
        number: "05",
        title: "Activity Monitoring",
        description:
          "Review available system and user activity to keep visibility into recent assignments, updates, and resolution milestones.",
        tag: "System Visibility",
        color: "blue",
        iconName: "Activity",
      },
      {
        id: "data-driven-decisions",
        number: "06",
        title: "Data-Driven Decisions",
        description:
          "Use meaningful insights to identify improvement opportunities in documentation, product messaging, and team staffing.",
        tag: "Actionable Steps",
        color: "cyan",
        iconName: "Compass",
      },
    ],
  },
  workflow: {
    badge: "WORKFLOW",
    heading: "From Customer Activity to Actionable Insights",
    subheading:
      "A structured four-step path turning raw conversation interactions into confident operational improvements.",
    steps: [
      {
        step: "01",
        title: "Collect Available Activity Data",
        description:
          "Aggregate customer conversations, inquiry categories, and supported system events from active channels.",
        detail: "Standardized event logging captures conversation interactions without manual tracking overhead.",
        color: "violet",
        iconName: "Database",
      },
      {
        step: "02",
        title: "Organize the Data",
        description:
          "Structure information into accessible dimensions including topic clusters, time intervals, and resolution statuses.",
        detail: "Clean categorization turns scattered messages into structured, reviewable datasets.",
        color: "blue",
        iconName: "FolderTree",
      },
      {
        step: "03",
        title: "Identify Patterns",
        description:
          "Highlight recurring customer questions, high-traffic periods, and frequently cited knowledge center articles.",
        detail: "Pattern recognition exposes recurring bottlenecks and common user stumbling blocks.",
        color: "cyan",
        iconName: "Search",
      },
      {
        step: "04",
        title: "Make Informed Decisions",
        description:
          "Refine knowledge base documentation, adjust support workflows, and continuously improve the customer experience.",
        detail: "Targeted updates grounded in actual customer inquiry trends eliminate guesswork.",
        color: "violet",
        iconName: "LineChart",
      },
    ],
  },
  benefits: {
    badge: "BUSINESS IMPACT",
    heading: "See More. Understand Better. Improve Faster.",
    description:
      "Gain the visibility needed to uncover recurring customer needs and enhance your support operations.",
    items: [
      {
        id: "visibility",
        title: "Better Visibility into Customer Interactions",
        description:
          "See what questions customers are asking across conversations in a clear, consolidated analytics view.",
        highlight: "Unified",
        highlightLabel: "Overview Display",
        color: "violet",
      },
      {
        id: "recurring-questions",
        title: "Easier Identification of Recurring Questions",
        description:
          "Quickly spot repetitive questions to expand self-service documentation and resolve common issues proactively.",
        highlight: "Patterns",
        highlightLabel: "Topic Clustering",
        color: "blue",
      },
      {
        id: "clearer-understanding",
        title: "Clearer Understanding of Available Metrics",
        description:
          "Make sense of conversation volumes, resolution rates, and knowledge utilization without confusing vanity numbers.",
        highlight: "Clarity",
        highlightLabel: "Clean Indicators",
        color: "cyan",
      },
      {
        id: "informed-decisions",
        title: "More Informed Business Decisions",
        description:
          "Ground operational changes, product updates, and documentation investments in verified customer inquiries.",
        highlight: "Grounded",
        highlightLabel: "Strategic Actions",
        color: "violet",
      },
    ],
  },
  cta: {
    badge: "GET STARTED",
    heading: "Make Every Insight Count.",
    description:
      "Understand your customer interactions and discover opportunities to improve with Pingo.",
    buttonText: "Get Started with Pingo",
    buttonHref: "/contact",
  },
};

