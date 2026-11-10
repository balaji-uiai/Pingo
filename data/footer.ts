export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
  iconName: "Linkedin";
}

export const footerData = {
  brand: {
    name: "Pingo",
    tagline: "Smart Conversations. Stronger Business.",
  },
  socialLinks: [
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/company/uiai-technologies/",
      ariaLabel: "Follow UIAI Technologies on LinkedIn",
      iconName: "Linkedin",
    },
  ] as SocialLink[],
  sections: [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Features", href: "/features/ai-automation" },
        { label: "Solutions", href: "/solutions/customer-support" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "Help Center", href: "#help" },
        { label: "FAQ", href: "/pricing#pricing-faq" },
        { label: "Contact Support", href: "/contact" },
      ],
    },
    {
      title: "Legal & Company",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Help", href: "#help" },
        { label: "UIAI Technologies", href: "https://uiai.in" },
      ],
    },
  ] as FooterSection[],
  copyright: `© ${new Date().getFullYear()} Pingo by UIAI Technologies. All rights reserved.`,
};
