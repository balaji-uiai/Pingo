export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionData {
  badge: string;
  heading: string;
  supportingText: string;
  items: FaqItem[];
}

export const pricingFaqData: FaqSectionData = {
  badge: "TRANSPARENCY MATTERS!",
  heading: "Frequently Asked Questions",
  supportingText:
    "Everything you need to know about Pingo's plans, features, and pricing.",
  items: [
    {
      id: "faq-1",
      question: "What pricing plans does Pingo offer?",
      answer:
        "Pingo offers four plans: Starter, Growth, Enterprise, and Custom. Starter is designed for businesses beginning with essential customer support features. Growth adds advanced AI-powered capabilities, while Enterprise provides advanced support for larger teams. Custom allows businesses to build a solution around their specific requirements.",
    },
    {
      id: "faq-2",
      question: "What is included in the Starter plan?",
      answer:
        "The Starter plan includes essential customer support features such as live chat, built-in ticketing, basic analytics, team management for 1–5 members, up to 500 conversations, and 90-day conversation retention. AI-powered features are not included in this plan.",
    },
    {
      id: "faq-3",
      question: "What makes the Growth plan different from Starter?",
      answer:
        "Growth introduces advanced AI-powered customer support with one AI agent, multiple knowledge centers, advanced website crawling, AI-to-human handover, built-in ticketing, advanced analytics, and team management for 1–50 members. It also supports custom conversation limits.",
    },
    {
      id: "faq-4",
      question: "What additional capabilities does the Enterprise plan offer?",
      answer:
        "Enterprise is designed for businesses that need more advanced capabilities. It supports multiple AI agents, advanced knowledge management, website crawling, AI-to-human handover, external ticketing integrations, advanced analytics, team and access management for up to 500 members, custom integrations, and custom conversation limits.",
    },
    {
      id: "faq-5",
      question: "What is the difference between Enterprise and Custom plans?",
      answer:
        "Enterprise offers a predefined package of advanced features for larger organizations. The Custom plan goes further by allowing businesses to discuss and tailor features, AI agents, knowledge centers, integrations, team management, and conversation limits according to their individual requirements.",
    },
    {
      id: "faq-6",
      question: "Can I customize my Pingo plan?",
      answer:
        "Yes. The Custom plan is intended for businesses with specific requirements. You can discuss your preferred AI capabilities, integrations, team structure, conversation limits, and other requirements with our team to explore a suitable solution.",
    },
    {
      id: "faq-7",
      question: "Can I use multiple AI agents?",
      answer:
        "The Growth plan includes one AI agent, while Enterprise supports multiple AI agents. If you need a different agent configuration, the Custom plan allows you to discuss your requirements with our team.",
    },
    {
      id: "faq-8",
      question: "How does AI-to-human handover work?",
      answer:
        "Pingo's AI agent attempts to answer customer questions using the business knowledge available to it. When it cannot resolve a query or human assistance is needed, the conversation can be transferred to a human support agent with relevant context preserved.",
    },
    {
      id: "faq-9",
      question: "Can I manage customer conversations and support tickets in Pingo?",
      answer:
        "Yes. Pingo provides conversation management and ticketing capabilities. Businesses can manage customer queries, organize unresolved issues, and follow up through their support workflow. Available ticketing capabilities depend on the selected plan.",
    },
    {
      id: "faq-10",
      question: "Are conversation limits fixed across all plans?",
      answer:
        "No. Starter includes up to 500 conversations. Growth and Enterprise support custom conversation limits. Custom plan customers can discuss conversation requirements based on their expected usage.",
    },
    {
      id: "faq-11",
      question: "How much do the Growth and Enterprise plans cost?",
      answer:
        "The Growth plan is priced at $67 per month, reduced from its original price of $100 per month. The Enterprise plan is priced at $147 per month, reduced from its original price of $200 per month. For the Custom Enterprise plan, contact our team to discuss pricing based on your requirements.",
    },
    {
      id: "faq-12",
      question: "How can I choose the right plan for my business?",
      answer:
        "If you need essential customer support, start with Starter. Choose Growth for advanced AI-powered conversations. Enterprise is suitable for larger teams requiring multiple AI agents and advanced integrations. If your business needs a tailored setup, contact us about the Custom Enterprise plan.",
    },
  ],
};
