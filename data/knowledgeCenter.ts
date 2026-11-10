export interface ProductArchitectureFlow {
  id: string;
  name: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  productLabel: string;
  centerTitle: string;
  centerDescription: string;
  baseTitle: string;
  baseDescription: string;
}

export interface ArchitectureBenefit {
  id: string;
  title: string;
  description: string;
  iconName: "FolderKanban" | "Database" | "LayoutGrid";
}

export interface KnowledgeCenterSectionContent {
  badge: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  hubLabel: string;
  hubSubtext: string;
  products: ProductArchitectureFlow[];
  benefits: ArchitectureBenefit[];
}

export const knowledgeCenterContent: KnowledgeCenterSectionContent = {
  badge: "KNOWLEDGE CENTER MANAGEMENT",
  headingPart1: "Every Product Deserves Its Own",
  headingPart2: "Knowledge Center.",
  description:
    "Organize your business knowledge product by product. With Pingo, every product gets its own dedicated Knowledge Center containing a separate Knowledge Base, keeping information structured, relevant, and easy to manage.",
  hubLabel: "Pingo Core",
  hubSubtext: "Central Architecture",
  products: [
    {
      id: "product-a",
      name: "Product A",
      tag: "Workspace A",
      color: "violet",
      productLabel: "Product A",
      centerTitle: "Dedicated Knowledge Center",
      centerDescription: "Domain Documentation & FAQs",
      baseTitle: "Separate Knowledge Base",
      baseDescription: "Isolated Vector Storage",
    },
    {
      id: "product-b",
      name: "Product B",
      tag: "Workspace B",
      color: "blue",
      productLabel: "Product B",
      centerTitle: "Dedicated Knowledge Center",
      centerDescription: "Domain Documentation & FAQs",
      baseTitle: "Separate Knowledge Base",
      baseDescription: "Isolated Vector Storage",
    },
    {
      id: "product-c",
      name: "Product C",
      tag: "Workspace C",
      color: "cyan",
      productLabel: "Product C",
      centerTitle: "Dedicated Knowledge Center",
      centerDescription: "Domain Documentation & FAQs",
      baseTitle: "Separate Knowledge Base",
      baseDescription: "Isolated Vector Storage",
    },
  ],
  benefits: [
    {
      id: "dedicated-centers",
      title: "Dedicated Knowledge Centers",
      description: "Give every product its own knowledge workspace.",
      iconName: "FolderKanban",
    },
    {
      id: "separate-bases",
      title: "Separate Knowledge Bases",
      description: "Keep each product's information independently organized.",
      iconName: "Database",
    },
    {
      id: "centralized-management",
      title: "Centralized Management",
      description: "Manage all your Knowledge Centers from one place.",
      iconName: "LayoutGrid",
    },
  ],
};
