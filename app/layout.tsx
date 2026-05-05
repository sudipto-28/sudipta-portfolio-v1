import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, DM_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import {
  PERSON,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/components/siteData";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const TITLE = "Sudipta Mondal — Senior Software Engineer & Full-Stack Architect";
const DESCRIPTION =
  "Senior Software Engineer with 8+ years building SaaS platforms, real-time systems, and cloud infrastructure. Available for senior roles, SaaS builds, and project management engagements.";
const OG_DESCRIPTION =
  "Eight years designing and shipping SaaS platforms that scale — from first commit to 100k+ concurrent users.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Sudipta Mondal",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Architect",
    "SaaS Development",
    "React",
    "Vue",
    "Next.js",
    "NestJS",
    "Node.js",
    "AWS",
    "Kubernetes",
    "Project Management",
    "Sudipta Mondal",
  ],
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Sudipta Mondal — Senior Software Engineer",
    description: OG_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: PERSON.image,
        width: 1200,
        height: 630,
        alt: "Sudipta Mondal — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudipta Mondal — Senior Software Engineer",
    description: OG_DESCRIPTION,
    images: [PERSON.image],
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  // Add your verification tokens once you claim each console.
  // verification: { google: "...", yandex: "...", other: { "msvalidate.01": "..." } },
};

function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    url: SITE_URL,
    image: new URL(PERSON.image, SITE_URL).toString(),
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    email: `mailto:${PERSON.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.addressLocality,
      addressCountry: PERSON.addressCountry,
    },
    knowsAbout: [...PERSON.knowsAbout],
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmMono.variable} ${dmSans.variable}`}
    >
      <body style={{ fontFamily: "var(--font-sans), sans-serif" }}>
        <PersonJsonLd />
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}
