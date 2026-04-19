"use client";

import { SOCIAL_LINKS, SocialIcon } from "@/components/siteData";

export default function Footer() {
  return (
    <footer
      className="footer-inner"
      style={{
        background: "var(--ink)",
        padding: "36px 56px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10,
            color: "var(--ink3)",
            letterSpacing: "0.1em",
          }}
        >
          © 2026{" "}
          <span style={{ color: "var(--gold2)" }}>Sudipta Mondal</span> —
          Senior Software Engineer
        </div>

        <a
          href="mailto:contact@devsudipto.com"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "var(--gold2)",
            letterSpacing: "0.08em",
            textDecoration: "none",
            width: "fit-content",
          }}
        >
          contact@devsudipto.com
        </a>
      </div>

      <div
        style={{ display: "flex", gap: 20, alignItems: "center" }}
      >
        {SOCIAL_LINKS.map((link) => (
          <FooterSocialLink key={link.id} href={link.href} title={link.title}>
            <SocialIcon id={link.id} />
          </FooterSocialLink>
        ))}
      </div>
    </footer>
  );
}

function FooterSocialLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      style={{
        color: "rgba(255,255,255,0.3)",
        transition: "color 0.2s",
        display: "flex",
        cursor: "none",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold2)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color =
          "rgba(255,255,255,0.3)")
      }
    >
      {children}
    </a>
  );
}
