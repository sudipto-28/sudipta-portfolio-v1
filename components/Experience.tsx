"use client";

const experiences = [
  {
    year: "22–",
    period: "2022–26",
    current: true,
    role: "Lead Systems Architect",
    company: "Egshop.io · Pengine · BoostUGC · Render Engine",
    points: [
      "Designed and delivered 5+ multi-tenant SaaS platforms from 0→1, handling 100k+ concurrent users",
      "Reduced 12% LCP on flagship product via SSR micro-optimizations and CDN architecture",
      "Built GPU-accelerated mockup generation pipeline processing millions of assets per month",
      "Led distributed teams of 6–12 engineers across product, platform, and DevOps streams",
    ],
  },
  {
    year: "19–",
    period: "2019–22 · 3 yrs",
    current: false,
    role: "Senior Backend Engineer",
    company: "TaskGrid · Craft Music · Eselfmade",
    points: [
      "Architected real-time collaboration engine using Socket.io + Redis Pub/Sub for 100k+ users",
      "Built WebRTC audio-optimized lesson platform with sub-100ms latency globally",
      "Automated n8n/Zapier workflows cutting manual ops by 70% across 3 platforms",
    ],
  },
  {
    year: "16–",
    period: "2016–19 · 3 yrs",
    current: false,
    role: "Full-Stack Developer",
    company: "Campus Automation · ACI Group · Shopify Apps",
    points: [
      "Built campus management system digitizing admissions, exams, payroll for 5000+ users",
      "Replaced Excel-based enterprise forecasting with real-time FastAPI + React dashboards",
      "Shipped 3 Shopify apps — product grouping, collection duplicator, memberships",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: "var(--cream2)", borderBottom: "1px solid var(--border)" }}
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
                color: "var(--gold)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 12,
              }}
            >
              04 — Career History
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
              }}
            >
              Experience
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Log</em>
            </h2>
          </div>
          <div
            className="section-header-sub"
            style={{
              fontSize: 13,
              color: "var(--ink3)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
              maxWidth: 280,
              textAlign: "right",
              lineHeight: 1.7,
            }}
          >
            8 years across SaaS, enterprise &amp; startup environments
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingBottom: 80 }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-item-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                borderBottom:
                  i < experiences.length - 1
                    ? "1px solid var(--border)"
                    : undefined,
                padding: "48px 0",
                gap: 48,
              }}
            >
              {/* Date column */}
              <div className="exp-date-col" style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 32,
                    fontWeight: 900,
                    color: "var(--cream3)",
                    lineHeight: 1,
                  }}
                >
                  {exp.year}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 9,
                    color: "var(--gold)",
                    letterSpacing: "0.14em",
                    marginTop: 6,
                  }}
                >
                  {exp.period}
                </div>
                {exp.current && (
                  <div
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 8,
                      color: "#4CAF50",
                      letterSpacing: "0.14em",
                      marginTop: 4,
                      padding: "2px 6px",
                      border: "1px solid #4CAF50",
                      display: "inline-block",
                    }}
                  >
                    Current
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: 6,
                    lineHeight: 1.1,
                  }}
                >
                  {exp.role}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 11,
                    color: "var(--gold)",
                    letterSpacing: "0.1em",
                    marginBottom: 20,
                  }}
                >
                  {exp.company}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {exp.points.map((pt, j) => (
                    <div
                      key={j}
                      className="dash-item"
                      style={{
                        fontSize: 13,
                        color: "var(--ink2)",
                        lineHeight: 1.7,
                        display: "flex",
                        gap: 14,
                        fontWeight: 300,
                      }}
                    >
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
