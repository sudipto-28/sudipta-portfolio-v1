"use client";

import Image from "next/image";

const reviews = [
  {
    platform: "UPWORK",
    text: "Sudipta delivered a complete SaaS platform on time and beyond expectations. The architecture was clean, scalable, and well-documented. Truly a senior-level engineer who thinks like a product owner.",
    image: "/clients/Josiah Lowe-ceo-mountainy.jpeg",
    name: "Josiah Lowe",
    role: "CEO · Mountainy",
  },
  {
    platform: "DIRECT",
    text: "The WebRTC implementation for our music platform was flawless. Sub-100ms latency globally, zero audio artefacts. He handled the entire infrastructure from scratch. Highly recommend for real-time systems.",
    image: "/clients/james-craft-ceo-carft-music.jpeg",
    name: "James Craft",
    role: "CEO · Craft Music",
  },
  {
    platform: "LINKEDIN",
    text: "Replaced our entire Excel forecasting workflow with a robust system in 8 weeks. The dashboard is intuitive and the automation saves our team 20+ hours a week. Exceptional problem-solver.",
    image: "/clients/archie-norman-mercury.jpeg",
    name: "Archie Norman",
    role: "Founder · Mercury",
  },
  {
    platform: "UPWORK",
    text: "Outstanding Shopify app development. Deep API knowledge, clean code, deployed to production without a single issue. Responded quickly and adapted to our changing requirements throughout.",
    image: "/clients/eric-toz-shineon.jpeg",
    name: "Eric Toz",
    role: "Founder · ShineOn",
  },
  {
    platform: "DIRECT",
    text: "Sudipta rebuilt our backend from a monolith to microservices in a way that caused zero downtime. Our system now handles 10x the load with the same infrastructure costs. Remarkable engineering.",
    image: "/clients/eric-dunion-ceo-mentis.jpeg",
    name: "Eric Dunion",
    role: "CEO · Mentis",
  },
  {
    platform: "LINKEDIN",
    text: "As our Fractional CTO, Sudipta helped us go from MVP to Series A in 9 months. He made smart architectural decisions early that saved us enormous refactor costs down the line. A rare find.",
    image: "/clients/kit-norman-ceo-augmentive.jpeg",
    name: "Kit Norman",
    role: "CEO · Augmentive",
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
          <div data-reveal>
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
            data-reveal
            style={{
              fontSize: 13,
              color: "rgba(246,242,236,0.4)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
              maxWidth: 280,
              textAlign: "right",
              lineHeight: 1.7,
              animationDelay: "120ms",
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
            <ReviewCard key={i} review={r} col={i % 3} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  col,
  index,
}: {
  review: (typeof reviews)[0];
  col: number;
  index: number;
}) {
  return (
    <div
      data-reveal
      style={{
        padding: "36px 32px",
        borderRight: col !== 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        transition: "background 0.25s",
        cursor: "none",
        animationDelay: `${(index % 3) * 90}ms`,
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
            position: "relative",
            width: 44,
            height: 44,
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <Image
            src={review.image}
            alt={review.name}
            fill
            sizes="44px"
            style={{ objectFit: "cover" }}
          />
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
