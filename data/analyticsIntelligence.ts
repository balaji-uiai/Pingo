export interface MetricItem {
  id: string;
  name: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  detail: string;
}

export interface DateFilterData {
  customerActivity: {
    websiteVisitors: MetricItem;
    activeChatVisitors: MetricItem;
    totalConversations: MetricItem;
    newConversations: MetricItem;
  };
  conversationPerformance: {
    chatsReceived: MetricItem;
    chatsReplied: MetricItem;
    missedChats: MetricItem;
    unansweredChats: MetricItem;
    resolutionRate: MetricItem;
  };
  responseTime: {
    avgResponseTime: MetricItem;
    firstResponseTime: MetricItem;
    avgAssignmentTime: MetricItem;
    avgResolutionTime: MetricItem;
  };
  feedbackSentiment: {
    positivePercentage: number;
    neutralPercentage: number;
    negativePercentage: number;
    csatScore: number;
    totalReviews: number;
  };
  weeklyDistribution: {
    day: string;
    interactions: number;
    botResolved: number;
  }[];
}

export interface AgentPerformance {
  name: string;
  role: string;
  avatar: string;
  conversationsHandled: number;
  firstResponseTime: string;
  avgResponseTime: string;
  csat: number;
  missedChats: number;
}

export interface MetricDefinition {
  name: string;
  category: "Activity" | "Performance" | "Timing" | "Sentiment";
  definition: string;
  whyItMatters: string;
}

export interface DecisionInsight {
  title: string;
  description: string;
  tag: string;
  iconName: "Clock" | "TrendingUp" | "HelpCircle" | "Smile" | "Users" | "Cpu";
  color: "violet" | "blue" | "cyan";
  stat: string;
  statLabel: string;
}

export interface AnalyticsCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName: "BarChart3" | "TrendingUp" | "Gauge" | "BookOpen" | "Activity" | "Compass";
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
  };
  dashboard: {
    badge: string;
    heading: string;
    subheading: string;
    dateOptions: string[];
    dataByFilter: Record<string, DateFilterData>;
    agents: AgentPerformance[];
  };
  metricGlossary: {
    badge: string;
    heading: string;
    subheading: string;
    funnelComparison: {
      title: string;
      description: string;
      stages: {
        number: string;
        name: string;
        definition: string;
        volumeExample: string;
        conversionNote: string;
        color: "violet" | "blue" | "cyan";
      }[];
    };
    definitions: MetricDefinition[];
  };
  insights: {
    badge: string;
    heading: string;
    subheading: string;
    items: DecisionInsight[];
  };
  capabilities: {
    badge: string;
    heading: string;
    subheading: string;
    items: AnalyticsCapability[];
  };
  benefits: {
    badge: string;
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
    badge: "Conversation Intelligence & Analytics",
    headingPart1: "Understand Every Conversation.",
    headingPart2: "Improve Every Experience.",
    description:
      "Track customer interactions, monitor conversation performance, and discover insights that help your business deliver better support.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Features",
      href: "#dashboard-preview",
    },
    illustrativeDisclaimer: "Sample data shown for illustrative dashboard preview.",
  },

  dashboard: {
    badge: "Interactive Analytics Dashboard",
    heading: "Complete Visibility Into Every Customer Touchpoint",
    subheading:
      "Filter by time period to inspect visitor engagement, chat efficiency, assignment speed, sentiment distribution, and team throughput.",
    dateOptions: ["Today", "Last 7 Days", "Last 30 Days", "Custom Range"],
    dataByFilter: {
      "Today": {
        customerActivity: {
          websiteVisitors: {
            id: "act-1",
            name: "Website Visitors",
            value: "2,480",
            change: "+12.4%",
            trend: "up",
            detail: "Total unique website visits recorded today",
          },
          activeChatVisitors: {
            id: "act-2",
            name: "Active Chat Visitors",
            value: "418",
            change: "+18.2%",
            trend: "up",
            detail: "Visitors who opened or interacted with chat",
          },
          totalConversations: {
            id: "act-3",
            name: "Total Conversations",
            value: "312",
            change: "+14.6%",
            trend: "up",
            detail: "Conversations initiated across all channels",
          },
          newConversations: {
            id: "act-4",
            name: "New Conversations",
            value: "216",
            change: "+9.8%",
            trend: "up",
            detail: "First-time inquiries from new users",
          },
        },
        conversationPerformance: {
          chatsReceived: {
            id: "perf-1",
            name: "Chats Received",
            value: "312",
            change: "+14.6%",
            trend: "up",
            detail: "Total incoming customer messages",
          },
          chatsReplied: {
            id: "perf-2",
            name: "Chats Replied",
            value: "308",
            change: "+15.1%",
            trend: "up",
            detail: "Chats that received a response (98.7%)",
          },
          missedChats: {
            id: "perf-3",
            name: "Missed Chats",
            value: "3",
            change: "-40.0%",
            trend: "down",
            detail: "Left before receiving an answer",
          },
          unansweredChats: {
            id: "perf-4",
            name: "Unanswered Chats",
            value: "1",
            change: "-66.7%",
            trend: "down",
            detail: "Did not receive reply within expected SLA",
          },
          resolutionRate: {
            id: "perf-5",
            name: "Resolution Rate",
            value: "94.2%",
            change: "+3.1%",
            trend: "up",
            detail: "Successfully resolved without escalation",
          },
        },
        responseTime: {
          avgResponseTime: {
            id: "time-1",
            name: "Average Response Time",
            value: "18s",
            change: "-24.0%",
            trend: "down",
            detail: "Mean response speed across all replies",
          },
          firstResponseTime: {
            id: "time-2",
            name: "First Response Time",
            value: "4.2s",
            change: "-38.0%",
            trend: "down",
            detail: "Instant AI initial response acknowledgment",
          },
          avgAssignmentTime: {
            id: "time-3",
            name: "Average Assignment Time",
            value: "34s",
            change: "-15.2%",
            trend: "down",
            detail: "Time to route to appropriate human agent",
          },
          avgResolutionTime: {
            id: "time-4",
            name: "Average Resolution Time",
            value: "2m 45s",
            change: "-18.5%",
            trend: "down",
            detail: "From conversation start to resolution",
          },
        },
        feedbackSentiment: {
          positivePercentage: 81,
          neutralPercentage: 13,
          negativePercentage: 6,
          csatScore: 4.94,
          totalReviews: 246,
        },
        weeklyDistribution: [
          { day: "Mon", interactions: 1840, botResolved: 1540 },
          { day: "Tue", interactions: 2320, botResolved: 1980 },
          { day: "Wed", interactions: 2680, botResolved: 2310 },
          { day: "Thu", interactions: 2540, botResolved: 2160 },
          { day: "Fri", interactions: 2210, botResolved: 1870 },
          { day: "Sat", interactions: 1420, botResolved: 1250 },
          { day: "Sun", interactions: 1270, botResolved: 1110 },
        ],
      },
      "Last 7 Days": {
        customerActivity: {
          websiteVisitors: {
            id: "act-1",
            name: "Website Visitors",
            value: "18,420",
            change: "+8.9%",
            trend: "up",
            detail: "Total unique website visits over 7 days",
          },
          activeChatVisitors: {
            id: "act-2",
            name: "Active Chat Visitors",
            value: "3,140",
            change: "+15.3%",
            trend: "up",
            detail: "Visitors who opened or interacted with chat",
          },
          totalConversations: {
            id: "act-3",
            name: "Total Conversations",
            value: "2,410",
            change: "+12.1%",
            trend: "up",
            detail: "Conversations initiated across all channels",
          },
          newConversations: {
            id: "act-4",
            name: "New Conversations",
            value: "1,680",
            change: "+11.4%",
            trend: "up",
            detail: "First-time inquiries from new users",
          },
        },
        conversationPerformance: {
          chatsReceived: {
            id: "perf-1",
            name: "Chats Received",
            value: "2,410",
            change: "+12.1%",
            trend: "up",
            detail: "Total incoming customer messages",
          },
          chatsReplied: {
            id: "perf-2",
            name: "Chats Replied",
            value: "2,382",
            change: "+13.0%",
            trend: "up",
            detail: "Chats that received a response (98.8%)",
          },
          missedChats: {
            id: "perf-3",
            name: "Missed Chats",
            value: "21",
            change: "-32.4%",
            trend: "down",
            detail: "Left before receiving an answer",
          },
          unansweredChats: {
            id: "perf-4",
            name: "Unanswered Chats",
            value: "7",
            change: "-45.0%",
            trend: "down",
            detail: "Did not receive reply within expected SLA",
          },
          resolutionRate: {
            id: "perf-5",
            name: "Resolution Rate",
            value: "92.8%",
            change: "+2.4%",
            trend: "up",
            detail: "Successfully resolved without escalation",
          },
        },
        responseTime: {
          avgResponseTime: {
            id: "time-1",
            name: "Average Response Time",
            value: "22s",
            change: "-18.5%",
            trend: "down",
            detail: "Mean response speed across all replies",
          },
          firstResponseTime: {
            id: "time-2",
            name: "First Response Time",
            value: "4.8s",
            change: "-31.0%",
            trend: "down",
            detail: "Instant AI initial response acknowledgment",
          },
          avgAssignmentTime: {
            id: "time-3",
            name: "Average Assignment Time",
            value: "42s",
            change: "-11.8%",
            trend: "down",
            detail: "Time to route to appropriate human agent",
          },
          avgResolutionTime: {
            id: "time-4",
            name: "Average Resolution Time",
            value: "3m 12s",
            change: "-14.2%",
            trend: "down",
            detail: "From conversation start to resolution",
          },
        },
        feedbackSentiment: {
          positivePercentage: 78,
          neutralPercentage: 14,
          negativePercentage: 8,
          csatScore: 4.92,
          totalReviews: 1890,
        },
        weeklyDistribution: [
          { day: "Mon", interactions: 1840, botResolved: 1540 },
          { day: "Tue", interactions: 2320, botResolved: 1980 },
          { day: "Wed", interactions: 2680, botResolved: 2310 },
          { day: "Thu", interactions: 2540, botResolved: 2160 },
          { day: "Fri", interactions: 2210, botResolved: 1870 },
          { day: "Sat", interactions: 1420, botResolved: 1250 },
          { day: "Sun", interactions: 1270, botResolved: 1110 },
        ],
      },
      "Last 30 Days": {
        customerActivity: {
          websiteVisitors: {
            id: "act-1",
            name: "Website Visitors",
            value: "74,600",
            change: "+16.8%",
            trend: "up",
            detail: "Total unique website visits over 30 days",
          },
          activeChatVisitors: {
            id: "act-2",
            name: "Active Chat Visitors",
            value: "12,850",
            change: "+21.2%",
            trend: "up",
            detail: "Visitors who opened or interacted with chat",
          },
          totalConversations: {
            id: "act-3",
            name: "Total Conversations",
            value: "9,940",
            change: "+18.7%",
            trend: "up",
            detail: "Conversations initiated across all channels",
          },
          newConversations: {
            id: "act-4",
            name: "New Conversations",
            value: "6,820",
            change: "+15.2%",
            trend: "up",
            detail: "First-time inquiries from new users",
          },
        },
        conversationPerformance: {
          chatsReceived: {
            id: "perf-1",
            name: "Chats Received",
            value: "9,940",
            change: "+18.7%",
            trend: "up",
            detail: "Total incoming customer messages",
          },
          chatsReplied: {
            id: "perf-2",
            name: "Chats Replied",
            value: "9,812",
            change: "+19.1%",
            trend: "up",
            detail: "Chats that received a response (98.7%)",
          },
          missedChats: {
            id: "perf-3",
            name: "Missed Chats",
            value: "94",
            change: "-28.6%",
            trend: "down",
            detail: "Left before receiving an answer",
          },
          unansweredChats: {
            id: "perf-4",
            name: "Unanswered Chats",
            value: "34",
            change: "-38.2%",
            trend: "down",
            detail: "Did not receive reply within expected SLA",
          },
          resolutionRate: {
            id: "perf-5",
            name: "Resolution Rate",
            value: "93.4%",
            change: "+2.8%",
            trend: "up",
            detail: "Successfully resolved without escalation",
          },
        },
        responseTime: {
          avgResponseTime: {
            id: "time-1",
            name: "Average Response Time",
            value: "24s",
            change: "-16.0%",
            trend: "down",
            detail: "Mean response speed across all replies",
          },
          firstResponseTime: {
            id: "time-2",
            name: "First Response Time",
            value: "5.1s",
            change: "-29.0%",
            trend: "down",
            detail: "Instant AI initial response acknowledgment",
          },
          avgAssignmentTime: {
            id: "time-3",
            name: "Average Assignment Time",
            value: "46s",
            change: "-10.4%",
            trend: "down",
            detail: "Time to route to appropriate human agent",
          },
          avgResolutionTime: {
            id: "time-4",
            name: "Average Resolution Time",
            value: "3m 28s",
            change: "-12.5%",
            trend: "down",
            detail: "From conversation start to resolution",
          },
        },
        feedbackSentiment: {
          positivePercentage: 76,
          neutralPercentage: 16,
          negativePercentage: 8,
          csatScore: 4.89,
          totalReviews: 7820,
        },
        weeklyDistribution: [
          { day: "Mon", interactions: 7450, botResolved: 6320 },
          { day: "Tue", interactions: 9120, botResolved: 7840 },
          { day: "Wed", interactions: 10420, botResolved: 8960 },
          { day: "Thu", interactions: 9870, botResolved: 8430 },
          { day: "Fri", interactions: 8640, botResolved: 7380 },
          { day: "Sat", interactions: 5620, botResolved: 4890 },
          { day: "Sun", interactions: 5120, botResolved: 4420 },
        ],
      },
      "Custom Range": {
        customerActivity: {
          websiteVisitors: {
            id: "act-1",
            name: "Website Visitors",
            value: "42,100",
            change: "+11.3%",
            trend: "up",
            detail: "Total visits within chosen range (Oct 1 - Oct 18)",
          },
          activeChatVisitors: {
            id: "act-2",
            name: "Active Chat Visitors",
            value: "7,340",
            change: "+17.6%",
            trend: "up",
            detail: "Visitors who opened or interacted with chat",
          },
          totalConversations: {
            id: "act-3",
            name: "Total Conversations",
            value: "5,690",
            change: "+14.0%",
            trend: "up",
            detail: "Conversations initiated across all channels",
          },
          newConversations: {
            id: "act-4",
            name: "New Conversations",
            value: "3,890",
            change: "+12.7%",
            trend: "up",
            detail: "First-time inquiries from new users",
          },
        },
        conversationPerformance: {
          chatsReceived: {
            id: "perf-1",
            name: "Chats Received",
            value: "5,690",
            change: "+14.0%",
            trend: "up",
            detail: "Total incoming customer messages",
          },
          chatsReplied: {
            id: "perf-2",
            name: "Chats Replied",
            value: "5,622",
            change: "+14.8%",
            trend: "up",
            detail: "Chats that received a response (98.8%)",
          },
          missedChats: {
            id: "perf-3",
            name: "Missed Chats",
            value: "51",
            change: "-30.2%",
            trend: "down",
            detail: "Left before receiving an answer",
          },
          unansweredChats: {
            id: "perf-4",
            name: "Unanswered Chats",
            value: "17",
            change: "-41.5%",
            trend: "down",
            detail: "Did not receive reply within expected SLA",
          },
          resolutionRate: {
            id: "perf-5",
            name: "Resolution Rate",
            value: "93.1%",
            change: "+2.6%",
            trend: "up",
            detail: "Successfully resolved without escalation",
          },
        },
        responseTime: {
          avgResponseTime: {
            id: "time-1",
            name: "Average Response Time",
            value: "23s",
            change: "-17.2%",
            trend: "down",
            detail: "Mean response speed across all replies",
          },
          firstResponseTime: {
            id: "time-2",
            name: "First Response Time",
            value: "4.9s",
            change: "-30.5%",
            trend: "down",
            detail: "Instant AI initial response acknowledgment",
          },
          avgAssignmentTime: {
            id: "time-3",
            name: "Average Assignment Time",
            value: "44s",
            change: "-11.0%",
            trend: "down",
            detail: "Time to route to appropriate human agent",
          },
          avgResolutionTime: {
            id: "time-4",
            name: "Average Resolution Time",
            value: "3m 18s",
            change: "-13.4%",
            trend: "down",
            detail: "From conversation start to resolution",
          },
        },
        feedbackSentiment: {
          positivePercentage: 77,
          neutralPercentage: 15,
          negativePercentage: 8,
          csatScore: 4.91,
          totalReviews: 4420,
        },
        weeklyDistribution: [
          { day: "Mon", interactions: 4120, botResolved: 3510 },
          { day: "Tue", interactions: 5240, botResolved: 4490 },
          { day: "Wed", interactions: 6020, botResolved: 5180 },
          { day: "Thu", interactions: 5740, botResolved: 4890 },
          { day: "Fri", interactions: 4980, botResolved: 4230 },
          { day: "Sat", interactions: 3210, botResolved: 2790 },
          { day: "Sun", interactions: 2890, botResolved: 2490 },
        ],
      },
    },
    agents: [
      {
        name: "Pingo AI Copilot",
        role: "Tier-1 Autonomous Assistant",
        avatar: "AI",
        conversationsHandled: 1680,
        firstResponseTime: "1.2s",
        avgResponseTime: "3.4s",
        csat: 4.96,
        missedChats: 0,
      },
      {
        name: "Sarah Jenkins",
        role: "Senior Support Lead",
        avatar: "SJ",
        conversationsHandled: 284,
        firstResponseTime: "18s",
        avgResponseTime: "34s",
        csat: 4.93,
        missedChats: 2,
      },
      {
        name: "Alex Chen",
        role: "Technical Product Specialist",
        avatar: "AC",
        conversationsHandled: 236,
        firstResponseTime: "22s",
        avgResponseTime: "41s",
        csat: 4.91,
        missedChats: 4,
      },
      {
        name: "Priya Sharma",
        role: "Customer Success Manager",
        avatar: "PS",
        conversationsHandled: 210,
        firstResponseTime: "25s",
        avgResponseTime: "46s",
        csat: 4.94,
        missedChats: 3,
      },
      {
        name: "Marcus Vance",
        role: "Onboarding Specialist",
        avatar: "MV",
        conversationsHandled: 180,
        firstResponseTime: "28s",
        avgResponseTime: "52s",
        csat: 4.88,
        missedChats: 5,
      },
    ],
  },

  metricGlossary: {
    badge: "Metric Definitions & Funnel",
    heading: "Understand What Every Number Means",
    subheading:
      "Clear definitions prevent misinterpretation. Understand the essential distinction between total website visits, chat widget engagements, and completed conversation sessions.",
    funnelComparison: {
      title: "The Engagement Funnel: Visitors vs. Chat Visitors vs. Conversations",
      description:
        "Traffic metrics should not be confused with conversation metrics. Here is how visitors progress from site navigation to active assistance.",
      stages: [
        {
          number: "01",
          name: "Website Visitors",
          definition:
            "Every individual user who visits any page across your web property during the selected period, regardless of whether they notice or open the chat widget.",
          volumeExample: "18,420 visits",
          conversionNote: "Baseline audience top-of-funnel",
          color: "violet",
        },
        {
          number: "02",
          name: "Active Chat Visitors",
          definition:
            "Visitors who specifically interacted with the chat widget — by clicking the launcher icon, viewing the greeting prompt, or browsing suggested topic pills.",
          volumeExample: "3,140 engaged (17.0%)",
          conversionNote: "Demonstrated interest in live guidance",
          color: "blue",
        },
        {
          number: "03",
          name: "Actual Conversations",
          definition:
            "Substantive bidirectional interaction sessions where a user actually typed or submitted a question and received responses from Pingo AI or a team member.",
          volumeExample: "2,410 conversations (76.7%)",
          conversionNote: "True customer support touchpoints",
          color: "cyan",
        },
      ],
    },
    definitions: [
      {
        name: "Website Visitors",
        category: "Activity",
        definition: "Total unique individuals landing on the website within the specified timeframe.",
        whyItMatters: "Measures overall top-of-funnel traffic and baseline brand demand.",
      },
      {
        name: "Active Chat Visitors",
        category: "Activity",
        definition: "Visitors who opened, clicked, or interacted with the chat widget launcher.",
        whyItMatters: "Indicates how effectively your chat widget attracts visitors in need of help.",
      },
      {
        name: "Total Conversations",
        category: "Activity",
        definition: "Completed message exchange sessions where an inquiry was submitted and addressed.",
        whyItMatters: "Reflects true operational support workload.",
      },
      {
        name: "New Conversations",
        category: "Activity",
        definition: "Conversations initiated by first-time users who have never messaged before.",
        whyItMatters: "Highlights new customer acquisition and initial onboarding demand.",
      },
      {
        name: "Chats Received",
        category: "Performance",
        definition: "All inbound customer messages and inquiries received by the system.",
        whyItMatters: "Measures incoming customer inquiry volume.",
      },
      {
        name: "Chats Replied",
        category: "Performance",
        definition: "Conversations that received at least one verified response.",
        whyItMatters: "Tracks responsiveness and operational coverage rate.",
      },
      {
        name: "Missed Chats",
        category: "Performance",
        definition: "Conversations where the visitor navigated away before receiving a reply.",
        whyItMatters: "Signals bottlenecks where initial response lag causes visitor drop-off.",
      },
      {
        name: "Unanswered Chats",
        category: "Performance",
        definition: "Inquiries that received no response within the configured SLA window.",
        whyItMatters: "Critical quality-assurance metric indicating service breakdowns.",
      },
      {
        name: "Resolution Rate",
        category: "Performance",
        definition: "Percentage of conversations marked resolved without requiring repeated inquiries.",
        whyItMatters: "Measures overall support quality and AI knowledge precision.",
      },
      {
        name: "First Response Time",
        category: "Timing",
        definition: "Time elapsed from customer message submission to the very first acknowledgment.",
        whyItMatters: "Immediate replies set a positive tone and reduce visitor abandonment.",
      },
      {
        name: "Average Assignment Time",
        category: "Timing",
        definition: "Time taken to route an escalated inquiry to the appropriate human specialist.",
        whyItMatters: "Pinpoints routing delays and handoff friction.",
      },
      {
        name: "Customer Satisfaction (CSAT)",
        category: "Sentiment",
        definition: "Average rating (1 to 5 stars) awarded by customers upon session completion.",
        whyItMatters: "Direct indicator of customer loyalty and satisfaction with answers.",
      },
    ],
  },

  insights: {
    badge: "Actionable Intelligence",
    heading: "Turn Data Into Better Decisions",
    subheading:
      "Raw analytics become powerful when connected to operational improvements. See how leading teams translate conversation signals into tangible business advantages.",
    items: [
      {
        title: "Identify High-Traffic Days and Hours",
        description:
          "Pinpoint traffic spikes throughout the week to anticipate demand spikes and maintain responsive service levels during peak volume periods.",
        tag: "Capacity Planning",
        iconName: "Clock",
        color: "violet",
        stat: "Wed & Thu",
        statLabel: "Peak volume days",
      },
      {
        title: "Improve Response Times",
        description:
          "Analyze first response time and assignment delays to eliminate bottlenecks, automate initial greetings, and accelerate time-to-resolution.",
        tag: "Speed Optimization",
        iconName: "TrendingUp",
        color: "blue",
        stat: "< 5 sec",
        statLabel: "Target initial reply",
      },
      {
        title: "Identify Recurring Questions",
        description:
          "Surface trending question topics and missing knowledge areas to continuously expand knowledge bases and FAQs with high-demand content.",
        tag: "Knowledge Expansion",
        iconName: "HelpCircle",
        color: "cyan",
        stat: "Top 10",
        statLabel: "Recurring topic trends",
      },
      {
        title: "Monitor Customer Satisfaction",
        description:
          "Track CSAT ratings and sentiment breakdown across different product areas to proactively resolve dissatisfaction drivers before they escalate.",
        tag: "Sentiment Health",
        iconName: "Smile",
        color: "violet",
        stat: "4.92 / 5",
        statLabel: "Average CSAT benchmark",
      },
      {
        title: "Optimize Team Staffing",
        description:
          "Align agent shifts with historical conversation patterns so your team is fully staffed during peak hours while reducing unnecessary off-peak idle time.",
        tag: "Workforce Management",
        iconName: "Users",
        color: "blue",
        stat: "+35%",
        statLabel: "Staffing efficiency gain",
      },
      {
        title: "Refine AI Responses Based on Performance",
        description:
          "Inspect conversations where AI resolutions were low or sentiment dipped to retrain specific vector entries and improve future response accuracy.",
        tag: "AI Fine-Tuning",
        iconName: "Cpu",
        color: "cyan",
        stat: "94.2%",
        statLabel: "Target AI resolution",
      },
    ],
  },

  capabilities: {
    badge: "Analytics Architecture",
    heading: "Engineered for Enterprise Intelligence",
    subheading:
      "Real-time event capture, privacy-compliant session tracking, and seamless export capabilities give you comprehensive command over conversation data.",
    items: [
      {
        id: "cap-1",
        number: "01",
        title: "Real-Time Event Stream",
        description:
          "Live metric updates stream straight into your console with sub-second latency, providing instant insight into active discussions.",
        tag: "Zero Lag",
        color: "violet",
        iconName: "Activity",
      },
      {
        id: "cap-2",
        number: "02",
        title: "Automated Sentiment Analysis",
        description:
          "Natural language sentiment classification tags every customer message as positive, neutral, or negative to alert managers to frustrated users.",
        tag: "NLP Sentiment",
        color: "blue",
        iconName: "TrendingUp",
      },
      {
        id: "cap-3",
        number: "03",
        title: "Cross-Channel Aggregation",
        description:
          "Consolidate conversations from website chat, mobile in-app SDKs, and third-party portals into one harmonized analytics view.",
        tag: "Omnichannel",
        color: "cyan",
        iconName: "BarChart3",
      },
      {
        id: "cap-4",
        number: "04",
        title: "Agent Performance Benchmarks",
        description:
          "Measure individual team member response speed, resolution counts, and customer feedback to reward top performers and guide training.",
        tag: "Team Scorecards",
        color: "violet",
        iconName: "Gauge",
      },
      {
        id: "cap-5",
        number: "05",
        title: "Knowledge Gap Discovery",
        description:
          "Automatically flag customer queries that received weak similarity matches or required human takeover, showing where documentation is thin.",
        tag: "Content Gap Alerts",
        color: "blue",
        iconName: "BookOpen",
      },
      {
        id: "cap-6",
        number: "06",
        title: "Automated Executive Reporting",
        description:
          "Generate scheduled weekly or monthly PDF and CSV summaries for stakeholders detailing volume trends, CSAT, and operational efficiency.",
        tag: "Scheduled Exports",
        color: "cyan",
        iconName: "Compass",
      },
    ],
  },

  benefits: {
    badge: "Measurable Business Impact",
    description:
      "By understanding conversational patterns and customer satisfaction in real time, organizations achieve higher resolution velocity and happier customers.",
    items: [
      {
        id: "ben-1",
        title: "Sub-5s First Response",
        description:
          "AI triage and automated greetings acknowledge inbound inquiries almost instantly, cutting abandonment rates.",
        highlight: "< 5s",
        highlightLabel: "First Response SLA",
        color: "violet",
      },
      {
        id: "ben-2",
        title: "Autonomous Resolution",
        description:
          "Direct knowledge integration enables the AI assistant to resolve the vast majority of routine support inquiries automatically.",
        highlight: "86.2%",
        highlightLabel: "AI Self-Service Rate",
        color: "blue",
      },
      {
        id: "ben-3",
        title: "CSAT Satisfaction",
        description:
          "Consistent, verified information delivered promptly keeps satisfaction ratings consistently above industry benchmarks.",
        highlight: "4.92 / 5",
        highlightLabel: "Average CSAT",
        color: "cyan",
      },
      {
        id: "ben-4",
        title: "Escalation Reduction",
        description:
          "Proactive topic routing ensures complex questions reach the right human specialists with full conversation context on the first attempt.",
        highlight: "-42%",
        highlightLabel: "Tier-2 Escalations",
        color: "violet",
      },
    ],
  },

  cta: {
    badge: "Actionable Conversation Intelligence",
    heading: "Make Every Customer Conversation Count.",
    description:
      "Gain the insights you need to improve customer support, optimize team performance, and deliver better experiences.",
    buttonText: "Get Started",
    buttonHref: "/contact",
  },
};
