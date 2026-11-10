export interface TeamMemberPreview {
  id: string;
  name: string;
  role: string;
  initials: string;
  status: "Online" | "Active" | "In Review";
  assignedTasks: number;
}

export interface CustomerPreview {
  id: string;
  name: string;
  company: string;
  plan: string;
  activeThreads: number;
  lastActive: string;
}

export interface ActivityItemPreview {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
  type: "assign" | "resolve" | "update";
}

export interface CustomerTeamCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  color: "violet" | "blue" | "cyan";
  iconName:
    | "UserCheck"
    | "Eye"
    | "Users"
    | "ShieldCheck"
    | "CheckSquare"
    | "Activity";
}

export interface CustomerTeamWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  color: "violet" | "blue" | "cyan";
  iconName: "Search" | "FolderGit2" | "MessageSquare" | "LineChart";
}

export interface CustomerTeamBenefit {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  color: "violet" | "blue" | "cyan";
}

export interface CustomerTeamManagementData {
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
    sampleCustomers: CustomerPreview[];
    sampleTeam: TeamMemberPreview[];
    sampleActivities: ActivityItemPreview[];
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
    items: CustomerTeamCapability[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    steps: CustomerTeamWorkflowStep[];
  };
  benefits: {
    badge: string;
    heading: string;
    description: string;
    items: CustomerTeamBenefit[];
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const customerTeamManagementData: CustomerTeamManagementData = {
  hero: {
    badge: "CUSTOMER & TEAM MANAGEMENT",
    headingPart1: "Your Customers. Your Team.",
    headingPart2: "One Connected Workspace.",
    description:
      "Keep customer interactions organized and help your team manage conversations and support activities more efficiently.",
    primaryCta: {
      text: "Get Started",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore Team Management",
      href: "#overview",
    },
    sampleCustomers: [
      {
        id: "cust-1",
        name: "Marcus Sterling",
        company: "Apex Global Logistics",
        plan: "Enterprise",
        activeThreads: 2,
        lastActive: "4m ago",
      },
      {
        id: "cust-2",
        name: "Sophia Chen",
        company: "Nova Cloud Systems",
        plan: "Growth Tier",
        activeThreads: 1,
        lastActive: "18m ago",
      },
    ],
    sampleTeam: [
      {
        id: "team-1",
        name: "Elena Vance",
        role: "Support Lead",
        initials: "EV",
        status: "Online",
        assignedTasks: 4,
      },
      {
        id: "team-2",
        name: "Devon Miles",
        role: "Technical Specialist",
        initials: "DM",
        status: "Active",
        assignedTasks: 3,
      },
      {
        id: "team-3",
        name: "Priya Sharma",
        role: "Customer Success",
        initials: "PS",
        status: "Online",
        assignedTasks: 2,
      },
    ],
    sampleActivities: [
      {
        id: "act-1",
        actor: "Elena Vance",
        action: "assigned ticket #TK-8241 to",
        target: "Devon Miles",
        time: "6m ago",
        type: "assign",
      },
      {
        id: "act-2",
        actor: "Priya Sharma",
        action: "updated account profile for",
        target: "Apex Global",
        time: "14m ago",
        type: "update",
      },
      {
        id: "act-3",
        actor: "Devon Miles",
        action: "resolved SSO query with",
        target: "Nova Cloud",
        time: "32m ago",
        type: "resolve",
      },
    ],
  },
  overview: {
    badge: "UNIFIED WORKSPACE",
    heading: "Bring Customer and Team Activities Together",
    description:
      "Organize customer interactions and team workflows with a clearer view of conversations, responsibilities, and support activities.",
    pillars: [
      {
        step: "01",
        title: "Customer Context at a Glance",
        description:
          "Consolidate available account details, conversation history, and open requests so agents have immediate situational awareness.",
        tag: "Customer Context",
        color: "violet",
      },
      {
        step: "02",
        title: "Clear Operational Ownership",
        description:
          "Assign specific conversations and support tickets to the right team members with explicit responsibility boundaries.",
        tag: "Role Alignment",
        color: "blue",
      },
      {
        step: "03",
        title: "Transparent Team Activity",
        description:
          "Follow updates, internal handovers, and resolution events in a shared activity stream that keeps everyone synchronized.",
        tag: "Activity Stream",
        color: "cyan",
      },
    ],
  },
  capabilities: {
    badge: "CORE CAPABILITIES",
    heading: "A More Organized Way to Work Together",
    subheading:
      "Six purpose-built capabilities to align team operations with customer conversation needs.",
    items: [
      {
        id: "customer-profiles",
        number: "01",
        title: "Customer Profiles",
        description:
          "Keep available customer details organized, including contact information, subscription tier, and historical interaction context.",
        tag: "Organized Profiles",
        color: "violet",
        iconName: "UserCheck",
      },
      {
        id: "interaction-visibility",
        number: "02",
        title: "Interaction Visibility",
        description:
          "Understand customer interactions through available conversation records across active and past support discussions.",
        tag: "Conversation Records",
        color: "blue",
        iconName: "Eye",
      },
      {
        id: "team-collaboration",
        number: "03",
        title: "Team Collaboration",
        description:
          "Help team members coordinate support activities through private thread comments, mention notifications, and shared notes.",
        tag: "Coordinated Actions",
        color: "cyan",
        iconName: "Users",
      },
      {
        id: "role-based-access",
        number: "04",
        title: "Role-Based Access",
        description:
          "Manage access according to supported user roles, ensuring teammates access only the administrative settings and data they require.",
        tag: "Supported Roles",
        color: "violet",
        iconName: "ShieldCheck",
      },
      {
        id: "task-ownership",
        number: "05",
        title: "Task Ownership",
        description:
          "Make responsibilities clearer across the team by assigning conversations and follow-up tasks to designated individuals.",
        tag: "Clear Accountability",
        color: "blue",
        iconName: "CheckSquare",
      },
      {
        id: "activity-tracking",
        number: "06",
        title: "Activity Tracking",
        description:
          "Follow relevant customer and team activities through a chronological event timeline showing recent updates and status changes.",
        tag: "Event History",
        color: "cyan",
        iconName: "Activity",
      },
    ],
  },
  workflow: {
    badge: "WORKFLOW",
    heading: "From Customer Interaction to Team Action",
    subheading:
      "A structured four-step path ensuring seamless team handoffs and dependable customer follow-through.",
    steps: [
      {
        step: "01",
        title: "Understand Customer Activity",
        description:
          "Review incoming conversation inquiries and available customer account details in one organized view.",
        detail: "Context-rich profiles allow agents to understand the customer's background immediately.",
        color: "violet",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Organize Responsibilities",
        description:
          "Delegate inquiries to the appropriate team member based on domain expertise and current workload.",
        detail: "Transparent task ownership prevents duplicated efforts and unhandled customer requests.",
        color: "blue",
        iconName: "FolderGit2",
      },
      {
        step: "03",
        title: "Coordinate Team Actions",
        description:
          "Collaborate with teammates using internal notes and context-sharing to formulate the best solution.",
        detail: "Private internal communication keeps external customer conversations clean and professional.",
        color: "cyan",
        iconName: "MessageSquare",
      },
      {
        step: "04",
        title: "Track Progress",
        description:
          "Monitor status updates, response milestones, and team resolution activity in real time.",
        detail: "Activity feeds ensure management and teammates maintain full situational clarity.",
        color: "violet",
        iconName: "LineChart",
      },
    ],
  },
  benefits: {
    badge: "OPERATIONAL VALUE",
    heading: "Better Coordination. Clearer Responsibilities.",
    description:
      "Empower your support team with the clarity and context needed to resolve customer inquiries quickly and accurately.",
    items: [
      {
        id: "organized-info",
        title: "Organized Customer Information",
        description:
          "Centralize essential customer contacts, subscription details, and active threads in clean, accessible profiles.",
        metric: "100%",
        metricLabel: "Organized Records",
        color: "violet",
      },
      {
        id: "improved-coordination",
        title: "Improved Team Coordination",
        description:
          "Keep support leads, technical specialists, and success managers aligned through shared notes and transparent statuses.",
        metric: "Zero",
        metricLabel: "Communication Gaps",
        color: "blue",
      },
      {
        id: "clearer-ownership",
        title: "Clearer Task Ownership",
        description:
          "Ensure every customer issue and active discussion has an explicit assigned owner with no ambiguity over who takes next steps.",
        metric: "1-Click",
        metricLabel: "Task Assignment",
        color: "cyan",
      },
      {
        id: "better-visibility",
        title: "Better Activity Visibility",
        description:
          "Gain an up-to-the-minute understanding of team assignments, state transitions, and recent customer interactions.",
        metric: "Real-Time",
        metricLabel: "Activity Updates",
        color: "violet",
      },
    ],
  },
  cta: {
    badge: "GET STARTED",
    heading: "Bring Your Customers and Team Closer.",
    description:
      "Create a more organized way to manage customer interactions and team activities.",
    buttonText: "Get Started with Pingo",
    buttonHref: "/contact",
  },
};

