export interface EnquiryItem {
  id: string;
  label: string;
  value: string;
  href?: string;
  type: "text" | "tel" | "email" | "address";
  iconName: "Building2" | "Phone" | "Mail" | "MapPin" | string;
  subtext?: string;
}

export interface EnquiryData {
  badge?: string;
  heading: string;
  subheading?: string;
  items: EnquiryItem[];
}

export const defaultEnquiryData: EnquiryData = {
  badge: "Direct Contact",
  heading: "For Enquiries",
  subheading:
    "Reach out directly to our team for corporate partnerships, service inquiries, or technical support.",
  items: [
    {
      id: "company",
      label: "Company Name",
      value: "UIAI Technologies",
      type: "text",
      iconName: "Building2",
      subtext: "AI Platforms & Solutions",
    },
    {
      id: "phone",
      label: "Company Number",
      value: "0123456789",
      href: "tel:0123456789",
      type: "tel",
      iconName: "Phone",
      subtext: "Mon - Fri, 9:00 AM - 6:00 PM",
    },
    {
      id: "email",
      label: "Company Email",
      value: "support@uiai.in",
      href: "mailto:support@uiai.in",
      type: "email",
      iconName: "Mail",
      subtext: "Official email assistance",
    },
    {
      id: "address",
      label: "Address",
      value: "New Delhi, India",
      type: "address",
      iconName: "MapPin",
      subtext: "Operational headquarters",
    },
  ],
};

