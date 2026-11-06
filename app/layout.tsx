import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://pingo.ai"),
  title: "Pingo – AI-Powered Customer Management & Real-Time Chat Platform",
  description:
    "Meet Pingo — your business knowledge, AI-powered customer management service. Help customers understand your services, find the right information, and get instant answers.",
  keywords: [
    "Pingo",
    "AI Customer Management",
    "Live Chat",
    "AI Agents",
    "Customer Support",
    "UIAI Technologies",
  ],
  authors: [{ name: "UIAI Technologies" }],
  openGraph: {
    title: "Pingo – Real-time answers. Real-world impact.",
    description:
      "Meet Pingo — your business knowledge, AI-powered customer management service.",
    type: "website",
    locale: "en_US",
    siteName: "Pingo",
    images: [
      {
        url: "/images/pingo-robot.png",
        width: 1200,
        height: 630,
        alt: "Pingo 3D Robot Mascot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pingo – Real-time answers. Real-world impact.",
    description:
      "Meet Pingo — your business knowledge, AI-powered customer management service.",
    images: ["/images/pingo-robot.png"],
  },
  icons: {
    icon: "/images/pingo-p.png",
    shortcut: "/images/pingo-p.png",
    apple: "/images/pingo-p.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#080711] text-white min-h-screen flex flex-col selection:bg-[#782BFF]/30 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

