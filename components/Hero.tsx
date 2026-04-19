"use client";

import { RESUME_URL } from "@/components/siteData";

const stats = [
  { num: "8", suffix: "+", label: "Years of\nEngineering" },
  { num: "12", suffix: "+", label: "Products\nShipped" },
  { num: "100", suffix: "k", label: "Concurrent\nUsers Served" },
  { num: "5", suffix: "★", label: "Client\nSatisfaction" },
];

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
          className="hero-tag"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "var(--gold)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
          }}
        >
          Senior Software Engineer
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(52px, 7vw, 96px)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            marginBottom: 8,
          }}
        >
          Sudipta
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Mondal</em>
        </h1>

        <div
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(20px, 2.8vw, 36px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--ink3)",
            marginBottom: 32,
            lineHeight: 1.2,
          }}
        >
          Full-Stack Architect
          <br />
          &amp; Systems Builder
        </div>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--ink2)",
            maxWidth: 460,
            marginBottom: 44,
            fontWeight: 300,
          }}
        >
          Eight years designing and shipping{" "}
          <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
            SaaS platforms
          </strong>{" "}
          that scale — from first commit to 100k+ concurrent users. I architect
          the entire stack so founders can focus on their product.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
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

      {/* Right */}
      <div
        className="hero-right-col"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 56px",
        }}
      >
        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            flex: 1,
            alignContent: "center",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "36px 32px",
                borderBottom:
                  i < 2 ? "1px solid var(--border)" : undefined,
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(40px, 4.5vw, 64px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: "var(--ink)",
                  marginBottom: 8,
                  letterSpacing: "-0.03em",
                }}
              >
                {s.num}
                <span style={{ color: "var(--gold)" }}>{s.suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 10,
                  color: "var(--ink3)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          style={{
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: 15,
            fontStyle: "italic",
            color: "var(--ink3)",
            lineHeight: 1.7,
          }}
        >
          &ldquo;Sudipta delivered a complete SaaS platform on time and beyond
          expectations — truly a senior-level engineer who thinks like a product
          owner.&rdquo;
          <cite
            style={{
              fontStyle: "normal",
              fontFamily: "var(--font-mono), monospace",
              fontSize: 10,
              display: "block",
              marginTop: 10,
              color: "var(--gold)",
              letterSpacing: "0.1em",
            }}
          >
            — James K., Founder · TaskGrid
          </cite>
        </div>
      </div>
    </section>
  );
}
