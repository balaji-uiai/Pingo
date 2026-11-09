export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  smallHeading?: string;
  price: string;
  period?: string;
  originalPrice?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isPopular?: boolean;
  isCustom?: boolean;
}

export interface PricingData {
  header: {
    badge: string;
    heading: string;
  };
  plans: PricingPlan[];
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const pricingData: PricingData = {
  header: {
    badge: "PRICING PLANS",
    heading: "The Right Plan for Every Stage of Growth",
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: "FREE",
      description: "Get started with the essentials.",
      features: [
        "Live Chat",
        "Built-in Ticketing",
        "Basic Analytics Dashboard",
        "Up to 500 Conversations",
        "90-Day Conversation Retention",
        "Team Management (1–5)",
        "No AI Features",
      ],
      ctaLabel: "REACH OUT TO US",
      ctaHref: "/contact",
      isPopular: false,
    },
    {
      id: "growth",
      name: "Growth",
      badge: "MOST POPULAR",
      price: "$67",
      period: "/month",
      originalPrice: "$100/month",
      description: "Advanced AI-powered customer support.",
      features: [
        "Advanced AI Agent (1)",
        "Multiple Knowledge Centers",
        "Advanced Website Crawling",
        "Advanced AI-to-Human Handover",
        "Advanced Built-in Ticketing",
        "Advanced Analytics Dashboard",
        "Advanced Team Management (1–50)",
        "Custom Conversation Limits",
      ],
      ctaLabel: "REACH OUT TO US",
      ctaHref: "/contact",
      isPopular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$147",
      period: "/month",
      originalPrice: "$200/month",
      description: "Advanced support for growing organizations.",
      features: [
        "Multiple Advanced AI Agents",
        "Multiple Knowledge Centers",
        "Advanced Website Crawling",
        "Advanced AI-to-Human Handover",
        "Advanced Ticketing Integrations",
        "Advanced Analytics",
        "Advanced Team & Access Management (1–500)",
        "Custom Integrations",
        "Custom Conversation Limits",
      ],
      ctaLabel: "REACH OUT TO US",
      ctaHref: "/contact",
      isPopular: false,
    },
    {
      id: "custom-enterprise",
      name: "Custom Enterprise",
      smallHeading: "Need Something More?",
      price: "",
      description: "Tailored Pricing",
      features: [
        "Fully Customizable AI Agents",
        "Custom Knowledge Centers",
        "Custom Integrations",
        "Tailored Support & Features",
        "Flexible Conversation Limits",
      ],
      ctaLabel: "REACH OUT TO US",
      ctaHref: "/contact",
      isPopular: false,
      isCustom: true,
    },
  ],
  cta: {
    heading: "Ready to Make Every Conversation Smarter?",
    description:
      "Choose your plan and give your customers a better way to connect with your business.",
    buttonText: "GET STARTED WITH PINGO",
    buttonHref: "/contact",
  },
};
