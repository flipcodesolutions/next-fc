import type { Metadata, Viewport } from "next";
import "./globals.css";
import PageLoader from "@/components/ui/PageLoader";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#202323",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flipcodesolutions.com"),
  applicationName: "Flipcode Solutions",
  referrer: "origin-when-cross-origin",
  title: {
    default: "Flipcode Solutions | Enterprise Full-Stack Software & Mobile Engineering",
    template: "%s | Flipcode Solutions",
  },
  description:
    "Flipcode Solutions Private Limited is a full-stack digital product engineering agency delivering high-performance web applications, iOS & Android mobile apps, multi-tenant SaaS platforms, and enterprise software solutions.",
  keywords: [
    "Flipcode Solutions",
    "Flipcode Solutions Private Limited",
    "Custom Software Development Company",
    "Enterprise Web Application Development",
    "Mobile App Development Agency",
    "SaaS Product Engineering",
    "Full-Stack Node.js Next.js React",
    "Flutter and React Native Apps",
    "eCommerce Web Development",
    "Cloud Architecture and DevOps",
    "Custom CRM ERP Development India",
    "Software Outsourcing Partner"
  ],
  authors: [{ name: "Flipcode Solutions", url: "https://flipcodesolutions.com" }],
  creator: "Flipcode Solutions Private Limited",
  publisher: "Flipcode Solutions Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flipcodesolutions.com",
    siteName: "Flipcode Solutions Private Limited",
    title: "Flipcode Solutions | Enterprise Full-Stack Software & Mobile Engineering",
    description:
      "Enterprise digital product engineering delivering high-performance web applications, iOS & Android apps, SaaS, and bespoke custom software worldwide.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Flipcode Solutions — Full-Stack Software Engineering Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@flipcodesolutions",
    creator: "@flipcodesolutions",
    title: "Flipcode Solutions | Enterprise Full-Stack Software & Mobile Engineering",
    description:
      "Building mission-critical web applications, mobile ecosystems, and multi-tenant SaaS platforms with modern engineering stacks.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen flex flex-col bg-white text-[#3F4446] font-sans selection:bg-[#FF6B35] selection:text-white">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
