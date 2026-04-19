import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Sudipta Mondal — Senior Software Engineer & Full-Stack Architect",
  description:
    "Senior Software Engineer with 8+ years building SaaS platforms, real-time systems, and cloud infrastructure. Available for senior roles, SaaS builds, and Fractional CTO engagements.",
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Architect",
    "SaaS Development",
    "React",
    "Vue",
    "NestJS",
    "Node.js",
    "AWS",
    "Fractional CTO",
    "Sudipta Mondal",
  ],
  authors: [{ name: "Sudipta Mondal" }],
  openGraph: {
    title: "Sudipta Mondal — Senior Software Engineer",
    description:
      "Eight years designing and shipping SaaS platforms that scale — from first commit to 100k+ concurrent users.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudipta Mondal — Senior Software Engineer",
    description:
      "Eight years designing and shipping SaaS platforms that scale — from first commit to 100k+ concurrent users.",
  },
};

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
        {children}
      </body>
    </html>
  );
}
