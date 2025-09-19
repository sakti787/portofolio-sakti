import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.specialization}`,
  description: siteConfig.summary,
  keywords: [
    "Sakti Indra Heradewa",
    "Full-Stack Developer", 
    "Web Developer",
    "Next.js Developer",
    "Laravel Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Indonesia Developer"
  ],
  authors: [{ name: siteConfig.name, url: `mailto:${siteConfig.email}` }],
  creator: siteConfig.name,
  metadataBase: new URL('https://sakti-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "id_ID", 
    url: "https://sakti-portfolio.vercel.app",
    title: `${siteConfig.name} - ${siteConfig.specialization}`,
    description: siteConfig.summary,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.specialization}`,
    description: siteConfig.summary,
    creator: "@sakti_indra_heradewa",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here", // Will be added when deploying
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
