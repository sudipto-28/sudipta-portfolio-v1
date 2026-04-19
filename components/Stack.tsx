"use client";

import { useEffect, useRef } from "react";

const skills = [
  { label: "Frontend", pct: 96, blue: false },
  { label: "Backend", pct: 94, blue: false },
  { label: "DevOps", pct: 88, blue: true },
];

const stackIcons = [
  { char: "Rx", label: "React.js\nTypeScript" },
  { char: "Nx", label: "Nuxt.js\nVue 3" },
  { char: "Ns", label: "NestJS\nNode.js" },
  { char: "Py", label: "Python\nFastAPI" },
  { char: "Pg", label: "PostgreSQL\nMongoDB" },
  { char: "Rd", label: "Redis\nClickHouse" },
  { char: "Aw", label: "AWS\nDocker" },
  { char: "Tf", label: "Terraform\nCI/CD" },
  { char: "Rt", label: "Socket.io\nWebRTC" },
  { char: "Sh", label: "Shopify\nAPI" },
  { char: "n8", label: "n8n\nZapier" },
  { char: "Gq", label: "GraphQL\nREST" },
];

export default function Stack() {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            fillRefs.current.forEach((el, i) => {
              if (el) {
                setTimeout(() => {
                  el.style.width = skills[i].pct + "%";
                }, i * 100);
              }
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="stack"
      ref={sectionRef}
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--border)" }}
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
              05 — Tech Capabilities
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
              Architecture
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Stack</em>
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
            Full stack depth from component to cluster
          </div>
        </div>

        <div
          className="stack-two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: 80,
            alignItems: "start",
            paddingBottom: 80,
          }}
        >
          {/* Left: description + bars */}
          <div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "var(--ink2)",
                fontWeight: 300,
              }}
            >
              Full stack with depth in{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                frontend performance
              </strong>
              ,{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                distributed backend systems
              </strong>
              , and{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                cloud infrastructure
              </strong>
              .
              <br />
              <br />
              Every layer chosen for scalability — from the component to the
              cluster.
            </p>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {skills.map((sk, i) => (
                <div key={sk.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 10,
                      color: "var(--ink3)",
                      letterSpacing: "0.1em",
                      marginBottom: 6,
                    }}
                  >
                    <span>{sk.label}</span>
                    <span style={{ color: "var(--gold)" }}>{sk.pct}%</span>
                  </div>
                  <div
                    style={{
                      height: 2,
                      background: "var(--border)",
                    }}
                  >
                    <div
                      ref={(el) => { fillRefs.current[i] = el; }}
                      style={{
                        height: "100%",
                        width: 0,
                        transition: "width 1.5s ease",
                        background: sk.blue ? "var(--blue)" : "var(--gold)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: icon grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid var(--border)",
            }}
          >
            {stackIcons.map((icon, i) => (
              <StackIcon key={i} icon={icon} index={i} total={stackIcons.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackIcon({
  icon,
  index,
  total,
}: {
  icon: { char: string; label: string };
  index: number;
  total: number;
}) {
  const cols = 4;
  const rows = Math.ceil(total / cols);
  const row = Math.floor(index / cols);
  const col = index % cols;
  const isLastRow = row === rows - 1;
  const isLastCol = col === cols - 1;

  return (
    <div
      style={{
        padding: "28px 16px",
        textAlign: "center",
        borderRight: !isLastCol ? "1px solid var(--border)" : undefined,
        borderBottom: !isLastRow ? "1px solid var(--border)" : undefined,
        transition: "background 0.2s",
        cursor: "none",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "var(--cream2)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "transparent")
      }
    >
      <div
        className="stack-char"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: 22,
          fontWeight: 700,
          fontStyle: "italic",
          color: "var(--ink2)",
          marginBottom: 8,
          transition: "color 0.2s",
        }}
      >
        {icon.char}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 8,
          letterSpacing: "0.08em",
          color: "var(--ink3)",
          textTransform: "uppercase",
          lineHeight: 1.6,
          whiteSpace: "pre-line",
        }}
      >
        {icon.label}
      </div>
    </div>
  );
}
