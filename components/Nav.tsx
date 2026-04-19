"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

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
            <SocialLink href="https://github.com/sudiptamondal" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/sudiptamondal" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://stackoverflow.com/users/sudiptamondal" title="Stack Overflow">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H17.78v-2.137H6.111v2.137zm.259-4.852l11.584 2.42.451-2.136-11.584-2.42-.451 2.136zm1.359-5.056l10.729 5.044.965-2.065-10.729-5.043-.965 2.064zm2.715-4.972l8.5 7.565 1.433-1.617-8.5-7.565-1.433 1.617zM15.025 0l-1.773 1.313 6.615 8.86 1.772-1.313L15.025 0z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://youtube.com/@sudiptamondal" title="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
            </SocialLink>
          </div>

          {/* CV Download */}
          <a
            href="/cv.pdf"
            download="Sudipta_Mondal_CV.pdf"
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
            ↓ CV
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
              href="/cv.pdf"
              download="Sudipta_Mondal_CV.pdf"
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
              ↓ Download CV
            </a>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <MobileSocialLink href="https://github.com/sudiptamondal" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </MobileSocialLink>
              <MobileSocialLink href="https://linkedin.com/in/sudiptamondal" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </MobileSocialLink>
              <MobileSocialLink href="https://youtube.com/@sudiptamondal" title="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </MobileSocialLink>
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
