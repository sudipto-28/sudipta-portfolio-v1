"use client";

const reviews = [
  {
    platform: "UPWORK",
    text: "Sudipta delivered a complete SaaS platform on time and beyond expectations. The architecture was clean, scalable, and well-documented. Truly a senior-level engineer who thinks like a product owner.",
    initials: "JK",
    name: "James K.",
    role: "Founder · TaskGrid",
  },
  {
    platform: "DIRECT",
    text: "The WebRTC implementation for our music platform was flawless. Sub-100ms latency globally, zero audio artefacts. He handled the entire infrastructure from scratch. Highly recommend for real-time systems.",
    initials: "SM",
    name: "Sarah M.",
    role: "CTO · Craft Music",
  },
  {
    platform: "LINKEDIN",
    text: "Replaced our entire Excel forecasting workflow with a robust system in 8 weeks. The dashboard is intuitive and the automation saves our team 20+ hours a week. Exceptional problem-solver.",
    initials: "RA",
    name: "Rahman A.",
    role: "VP Operations · ACI Group",
  },
  {
    platform: "UPWORK",
    text: "Outstanding Shopify app development. Deep API knowledge, clean code, deployed to production without a single issue. Responded quickly and adapted to our changing requirements throughout.",
    initials: "TW",
    name: "Tom W.",
    role: "Co-Founder · eCommerce Brand",
  },
  {
    platform: "DIRECT",
    text: "Sudipta rebuilt our backend from a monolith to microservices in a way that caused zero downtime. Our system now handles 10x the load with the same infrastructure costs. Remarkable engineering.",
    initials: "NI",
    name: "Nadia I.",
    role: "CEO · Egshop.io",
  },
  {
    platform: "LINKEDIN",
    text: "As our Fractional CTO, Sudipta helped us go from MVP to Series A in 9 months. He made smart architectural decisions early that saved us enormous refactor costs down the line. A rare find.",
    initials: "MH",
    name: "Mark H.",
    role: "Founder · B2B SaaS Startup",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{ background: "var(--ink)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="resp-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
        <div
          className="section-header-row"
          style={{
            padding: "72px 0 56px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                color: "var(--gold2)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 12,
              }}
            >
              03 — Testimonials
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "var(--cream)",
              }}
            >
              What Clients
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Say</em>
            </h2>
          </div>
          <div
            className="section-header-sub"
            style={{
              fontSize: 13,
              color: "rgba(246,242,236,0.4)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
              maxWidth: 280,
              textAlign: "right",
              lineHeight: 1.7,
            }}
          >
            Six verified reviews from Upwork, LinkedIn &amp; direct clients
          </div>
        </div>
      </div>

      <div className="resp-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px 80px" }}>
        <div
          className="reviews-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} col={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  col,
}: {
  review: (typeof reviews)[0];
  col: number;
}) {
  return (
    <div
      style={{
        padding: "36px 32px",
        borderRight: col !== 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        transition: "background 0.25s",
        cursor: "none",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background =
          "rgba(255,255,255,0.03)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "transparent")
      }
    >
      {/* Platform badge */}
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 9,
          letterSpacing: "0.16em",
          color: "var(--gold2)",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: "3px 9px",
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        {review.platform}
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: "var(--gold)", fontSize: 13 }}>★</span>
        ))}
      </div>

      {/* Review text */}
      <div
        className="review-quote-text"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: 14,
          lineHeight: 1.85,
          color: "rgba(246,242,236,0.75)",
          marginBottom: 24,
          fontStyle: "italic",
        }}
      >
        {review.text}
      </div>

      {/* Author */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono), monospace",
            fontSize: 12,
            fontWeight: 500,
            color: "var(--gold2)",
            flexShrink: 0,
          }}
        >
          {review.initials}
        </div>
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 12,
              color: "var(--cream)",
              letterSpacing: "0.06em",
            }}
          >
            {review.name}
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 9,
              color: "var(--ink3)",
              letterSpacing: "0.1em",
              marginTop: 3,
            }}
          >
            {review.role}
          </div>
        </div>
      </div>
    </div>
  );
}
