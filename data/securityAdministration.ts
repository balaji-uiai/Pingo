export interface AdminSettingPreview {
  id: string;
  category: string;
  name: string;
  status: "Configured" | "Active" | "Managed";
  detail: string;
  color: "violet" | "blue" | "cyan";
}

export interface SecurityAdminCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "KeyRound"
    | "UserCheck"
    | "Settings2"
    | "Lock"
    | "SlidersHorizontal"
    | "Eye";
}

export interface SecurityAdminWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "Building2" | "Users" | "ShieldCheck" | "ClipboardCheck";
}

export interface SecurityAdminBenefit {
  id: string;
  title: string;
  description: string;
  highlight: string;
  highlightLabel: string;
  color: "violet" | "blue" | "cyan";
}

export interface SecurityAdministrationData {
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
    sampleSettings: AdminSettingPreview[];
    illustrativeNote: string;
  };
  overview: {
    badge: string;
    heading: string;
    description: string;
    pillars: {
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
    items: SecurityAdminCapability[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    steps: SecurityAdminWorkflowStep[];
  };
  benefits: {
    badge: string;
    heading: string;
    description: string;
    items: SecurityAdminBenefit[];
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const securityAdministrationData: SecurityAdministrationData = {
  hero: {
    badge: "SECURITY & ADMINISTRATION",
    headingPart1: "Your Knowledge. Your Control.",
    headingPart2: "Your Confidence.",
    description:
      "Manage your workspace with clarity and keep your business information under control through organized administration.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Administration",
      href: "#overview",
    },
    illustrativeNote:
      "Sample administration interface shown for visualization purposes.",
    sampleSettings: [
      {
        id: "set-1",
        category: "Account Controls",
        name: "Supported User Access",
        status: "Active",
        detail: "Manage team member access through supported account roles.",
        color: "violet",
      },
      {
        id: "set-2",
        category: "Knowledge Isolation",
        name: "Product-Based Workspaces",
        status: "Configured",
        detail: "Quarantined vector storage for each product knowledge base.",
        color: "blue",
      },
      {
        id: "set-3",
        category: "Platform Settings",
        name: "Workspace Configuration",
        status: "Managed",
        detail: "Centralized environment parameters and organization controls.",
        color: "cyan",
      },
    ],
  },
  overview: {
    badge: "ADMINISTRATION ARCHITECTURE",
    heading: "Control Your Workspace with Confidence",
    description:
      "Manage your Pingo workspace and its available administrative settings. Keep access, configuration, and workspace management organized in one place.",
    pillars: [
      {
        step: "01",
        title: "Access Management",
        description:
          "Maintain clear control over who can view, configure, and manage workspace resources through supported account privileges.",
        tag: "Access Controls",
        color: "violet",
      },
      {
        step: "02",
        title: "Product Knowledge Partitioning",
        description:
          "Protect domain integrity by structuring documentation into distinct product knowledge centers with isolated boundaries.",
        tag: "Partitioning",
        color: "blue",
      },
      {
        step: "03",
        title: "Centralized Configuration",
        description:
          "Review and update administrative parameters across tools and communication touchpoints from a single management surface.",
        tag: "Centralized Settings",
        color: "cyan",
      },
    ],
  },
  capabilities: {
    badge: "CORE CAPABILITIES",
    heading: "Administration Made Clear and Manageable",
    subheading:
      "Six purpose-built capabilities to help you maintain control, organize users, and manage configurations cleanly.",
    items: [
      {
        id: "access-management",
        number: "01",
        title: "Access Management",
        description:
          "Manage access through supported account controls to ensure only authorized teammates interact with administrative settings.",
        tag: "Supported Controls",
        color: "violet",
        iconName: "KeyRound",
      },
      {
        id: "user-administration",
        number: "02",
        title: "User Administration",
        description:
          "Organize workspace users where supported, keeping team members aligned with appropriate roles and responsibilities.",
        tag: "User Roles",
        color: "blue",
        iconName: "UserCheck",
      },
      {
        id: "workspace-settings",
        number: "03",
        title: "Workspace Settings",
        description:
          "Manage available workspace configurations to tailor the platform environment to your organization's operational workflow.",
        tag: "Workspace Config",
        color: "cyan",
        iconName: "Settings2",
      },
      {
        id: "knowledge-access-control",
        number: "04",
        title: "Knowledge Access Control",
        description:
          "Manage access to knowledge resources according to supported permissions, preserving strict domain isolation across products.",
        tag: "Knowledge Boundaries",
        color: "violet",
        iconName: "Lock",
      },
      {
        id: "configuration-management",
        number: "05",
        title: "Configuration Management",
        description:
          "Keep available product settings organized across chat behaviors, knowledge routing, and active integration sources.",
        tag: "Structured Settings",
        color: "blue",
        iconName: "SlidersHorizontal",
      },
      {
        id: "administrative-visibility",
        number: "06",
        title: "Administrative Visibility",
        description:
          "Review available administrative information and settings from a centralized console to maintain platform clarity.",
        tag: "Admin Visibility",
        color: "cyan",
        iconName: "Eye",
      },
    ],
  },
  workflow: {
    badge: "WORKFLOW",
    heading: "A Clear Approach to Workspace Management",
    subheading:
      "A structured four-step path ensuring consistent governance across your Pingo environment.",
    steps: [
      {
        step: "01",
        title: "Set Up Your Workspace",
        description:
          "Establish your organization parameters, naming, and core product workspaces.",
        detail: "Foundational structure tailored to your business offerings and team layout.",
        color: "violet",
        iconName: "Building2",
      },
      {
        step: "02",
        title: "Manage User Access",
        description:
          "Assign supported account roles and operational permissions to authorized team members.",
        detail: "Clear boundaries establish transparent ownership and reduce configuration mistakes.",
        color: "blue",
        iconName: "Users",
      },
      {
        step: "03",
        title: "Configure Knowledge Access",
        description:
          "Map dedicated documentation to its corresponding product center with isolated storage.",
        detail: "Guarantees domain quarantine so Product A knowledge never confuses Product B.",
        color: "cyan",
        iconName: "ShieldCheck",
      },
      {
        step: "04",
        title: "Review and Maintain",
        description:
          "Periodically review available administrative settings, team assignments, and source pipelines.",
        detail: "Continuous visibility keeps your workspace organized as your business scales.",
        color: "violet",
        iconName: "ClipboardCheck",
      },
    ],
  },
  benefits: {
    badge: "OPERATIONAL CONFIDENCE",
    heading: "More Control. Better Organization.",
    description:
      "Administer your platform with the confidence that your business information and user permissions are properly structured.",
    items: [
      {
        id: "organized-admin",
        title: "Organized Workspace Administration",
        description:
          "Keep all administrative controls, user assignments, and environment options accessible within a structured framework.",
        highlight: "Structured",
        highlightLabel: "Workspace Layout",
        color: "violet",
      },
      {
        id: "clearer-access",
        title: "Clearer Access Management",
        description:
          "Eliminate ambiguity regarding permissions by managing user access through supported account controls.",
        highlight: "Definite",
        highlightLabel: "Supported Roles",
        color: "blue",
      },
      {
        id: "centralized-config",
        title: "Centralized Configuration",
        description:
          "Manage product knowledge settings, connection parameters, and support channels from a unified hub.",
        highlight: "Unified",
        highlightLabel: "Single Panel",
        color: "cyan",
      },
      {
        id: "better-visibility",
        title: "Better Administrative Visibility",
        description:
          "Maintain a clear understanding of active settings and workspace status to ensure operational stability.",
        highlight: "Clarity",
        highlightLabel: "Continuous Insight",
        color: "violet",
      },
    ],
  },
  cta: {
    badge: "GET STARTED",
    heading: "Stay in Control of Your Workspace.",
    description:
      "Manage your Pingo workspace with clarity and confidence.",
    buttonText: "Get Started with Pingo",
    buttonHref: "/contact",
  },
};

