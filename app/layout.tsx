import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Anti-flicker script to apply saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('pingo-theme');
                  var theme = saved || 'dark';
                  document.documentElement.classList.remove('dark', 'light');
                  document.documentElement.classList.add(theme);
                  document.documentElement.style.colorScheme = theme;
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#FFFFFF] text-[#171B2E] dark:bg-[#0B0D19] dark:text-[#FFFFFF] min-h-screen flex flex-col selection:bg-[#635BFF]/30 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
