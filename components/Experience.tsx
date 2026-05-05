"use client";

const experiences = [
  {
    year: "24–",
    period: "2024–26 · 2 yrs",
    current: true,
    role: "Project Manager",
    company: "Genesys Softwares · Dhaka, Bangladesh",
    points: [
      "Lead end-to-end technical execution across frontend, backend, DevOps, and real-time systems on flagship SaaS products (TaskGrid, Craft Music)",
      "Drive AI-driven automation across product workflows while keeping Core Web Vitals and sub-100ms latency budgets on track",
      "Mentor engineering teams and align technical decisions with business goals across cross-functional product squads",
    ],
  },
  {
    year: "22–",
    period: "2022–24 · 2 yrs",
    current: false,
    role: "Senior Software Engineer",
    company: "Genesys Softwares · Dhaka, Bangladesh",
    points: [
      "Architected the Pengine print-on-demand engine, including a GPU-accelerated rendering pipeline using Node.js and Go for print-ready assets and 3D previews",
      "Engineered low-latency real-time systems with WebRTC and Socket.io powering collaborative, multi-tenant platforms",
      "Orchestrated Docker and Kubernetes microservices on AWS so the rendering engine and customer portals could scale independently",
      "Optimized SSR, caching, and lazy-loading strategies across multi-tenant dashboards to maintain 60fps interactions under heavy data loads",
    ],
  },
  {
    year: "20–",
    period: "2020–22 · 2 yrs",
    current: false,
    role: "Software Engineer",
    company: "Genesys Softwares · Dhaka, Bangladesh",
    points: [
      "Contributed to the Campus Automation ERP digitizing admissions, exams, payroll, and result publication for 20,000+ users across three universities",
      "Built production features end-to-end across Nuxt.js, Node.js, MongoDB, and Nginx-balanced deployments",
      "Engineered a custom Rich Text Editor with real-time sanitization and LaTeX/formula support for dynamic academic content",
    ],
  },
  {
    year: "18–",
    period: "2018–20 · 2 yrs",
    current: false,
    role: "Software Engineer | Web Trainer",
    company: "Utshab Technologies · Jashore, Bangladesh",
    points: [
      "Architected an Inventory Management platform with real-time tracking, multi-warehouse synchronization, and optimized database performance under high transaction volumes",
      "Led full-stack development of the Just Diary mobile app and admin panel from concept to production",
      "Served as a technical trainer and mentor, translating complex engineering concepts into practical, industry-ready curriculum",
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
          <div data-reveal>
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
            data-reveal
            style={{
              fontSize: 13,
              color: "var(--ink3)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
              maxWidth: 280,
              textAlign: "right",
              lineHeight: 1.7,
              animationDelay: "120ms",
            }}
          >
            8 years across SaaS architecture, enterprise systems &amp; engineering mentorship
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingBottom: 80 }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-item-grid"
              data-reveal
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
