export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerData = {
  brand: {
    name: "Pingo",
    tagline:
      "Pingo is a customizable, AI-powered live chat platform designed to help businesses connect with customers and deliver smarter communication experiences.",
  },
  sections: [
    {
      title: "Explore",
      links: [
        { label: "About Pingo", href: "/about" },
        { label: "Features", href: "/#features" },
        { label: "Solutions", href: "/#solutions" },
        { label: "Pricing", href: "/#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "FAQs", href: "#faqs" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms & Conditions", href: "#terms" },
      ],
    },
  ] as FooterSection[],
  copyright: "© 2026 Pingo. All rights reserved.",
};
