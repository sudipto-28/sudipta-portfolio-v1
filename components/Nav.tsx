"use client";

import { useEffect, useRef, useState } from "react";
import {
  NAV_LINKS,
  RESUME_URL,
  SOCIAL_LINKS,
  SocialIcon,
} from "@/components/siteData";

export default function Nav() {
  const navLinksRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    navLinksRef.current = document.querySelectorAll<HTMLAnchorElement>(
      ".nav-section-link"
    );

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navLinksRef.current?.forEach((a) => {
              a.style.color = "";
            });
            const active = document.querySelector<HTMLAnchorElement>(
              `.nav-section-link[href="#${e.target.id}"]`
            );
            if (active) active.style.color = "var(--ink)";
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="nav-resp"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 56px",
          background: "rgba(246,242,236,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border2)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: 18,
            fontWeight: 700,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          Sudipta{" "}
          <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
            Mondal
          </span>
        </div>

        {/* Nav Links */}
        <ul
          style={{
            display: "flex",
            gap: 36,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-links-list"
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-section-link"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  cursor: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--ink)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Social Icons */}
          <div className="nav-social-icons" style={{ display: "flex", gap: 14, alignItems: "center" }}>
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.id} href={link.href} title={link.title}>
                <SocialIcon id={link.id} />
              </SocialLink>
            ))}
          </div>

          {/* CV Download */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cv-btn"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "var(--ink)",
              color: "var(--cream)",
              padding: "9px 20px",
              textDecoration: "none",
              transition: "background 0.2s",
              cursor: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "var(--ink)")
            }
          >
            CV ↗
          </a>

          {/* Status dot */}
          <div
            title="Available for hire"
            style={{
              width: 7,
              height: 7,
              background: "#4CAF50",
              borderRadius: "50%",
              animation: "pulse 2.5s infinite",
              flexShrink: 0,
            }}
          />

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span style={mobileOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : undefined} />
            <span style={mobileOpen ? { opacity: 0 } : undefined} />
            <span style={mobileOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : undefined} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="nav-mobile-overlay">
          <nav className="nav-mobile-links">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-mobile-footer">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "var(--ink)",
                color: "var(--cream)",
                padding: "12px 28px",
                textDecoration: "none",
              }}
            >
              View CV ↗
            </a>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              {SOCIAL_LINKS.map((link) => (
                <MobileSocialLink key={link.id} href={link.href} title={link.title}>
                  <SocialIcon id={link.id} size={18} />
                </MobileSocialLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SocialLink({
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
        color: "var(--ink3)",
        transition: "color 0.2s",
        display: "flex",
        alignItems: "center",
        cursor: "none",
        width: 15,
        height: 15,
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink3)")
      }
    >
      <span style={{ width: 15, height: 15, display: "flex" }}>{children}</span>
    </a>
  );
}

function MobileSocialLink({
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
      style={{ color: "var(--ink3)", display: "flex", alignItems: "center" }}
    >
      {children}
    </a>
  );
}
