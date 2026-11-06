import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Pingo – AI-Powered Customer Management & Real-Time Chat",
  description:
    "Meet Pingo — your business knowledge, AI-powered customer management service. Help customers understand your services, find the right information, and get instant answers.",
  icons: {
    icon: "/images/pingo-p.png",
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
