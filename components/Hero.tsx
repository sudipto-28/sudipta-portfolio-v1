"use client";

import Image from "next/image";
import { RESUME_URL } from "@/components/siteData";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: 88,
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Left */}
      <div
        className="hero-left-col"
        style={{
          padding: "80px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRight: "1px solid var(--border)",
        }}
      >
        <div
          className="hero-tag fade-up"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "var(--gold)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            animationDelay: "0.05s",
          }}
        >
          Senior Software Engineer
        </div>

        <h1
          className="fade-up"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(52px, 7vw, 96px)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            marginBottom: 8,
            animationDelay: "0.15s",
          }}
        >
          Sudipta
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Mondal</em>
        </h1>

        <div
          className="fade-up"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(20px, 2.8vw, 36px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--ink3)",
            marginBottom: 32,
            lineHeight: 1.2,
            animationDelay: "0.28s",
          }}
        >
          Full-Stack Architect
          <br />
          &amp; Systems Builder
        </div>

        <p
          className="fade-up"
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--ink2)",
            maxWidth: 460,
            marginBottom: 44,
            fontWeight: 300,
            animationDelay: "0.4s",
          }}
        >
          Eight years designing and shipping{" "}
          <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
            SaaS platforms
          </strong>{" "}
          that scale — from first commit to 100k+ concurrent users. I architect
          the entire stack so founders can focus on their product.
        </p>

        <div
          className="fade-up"
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            animationDelay: "0.52s",
          }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 28px",
              textDecoration: "none",
              background: "var(--ink)",
              color: "var(--cream)",
              transition: "background 0.2s",
              cursor: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
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
            View Work →
          </a>
          <a
            href="#services"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 28px",
              textDecoration: "none",
              border: "1.5px solid var(--border)",
              color: "var(--ink3)",
              transition: "all 0.2s",
              cursor: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--ink)";
              el.style.color = "var(--ink)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "";
              el.style.color = "var(--ink3)";
            }}
          >
            Services
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 28px",
              textDecoration: "none",
              border: "1.5px solid var(--gold)",
              color: "var(--gold)",
              transition: "all 0.2s",
              cursor: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--gold)";
              el.style.color = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "";
              el.style.color = "var(--gold)";
            }}
          >
            Resume ↗
          </a>
        </div>
      </div>

      {/* Right — portrait */}
      <div
        className="hero-right-col"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--cream2)",
        }}
      >
        <div className="hero-img-wrap">
          <Image
            src="/myself-2.png"
            alt="Portrait of Sudipta Mondal"
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          {/* Soft left-edge gradient to blend with cream stage */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(246,242,236,0.35) 0%, rgba(246,242,236,0) 18%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}
