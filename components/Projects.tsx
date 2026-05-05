"use client";

type Project = {
  num: string;
  name: string;
  desc: string;
  stack: string[];
  videoId: string;
  videoUrl: string;
  live: string | null;
  wide: boolean;
};

const projects: Project[] = [
  {
    num: "01 — Featured",
    name: "TaskGrid",
    desc: "All-in-one project & task management SaaS — boards, real-time collaboration, analytics, automation, team communication. Scaled to 100k+ concurrent users.",
    stack: ["Nuxt.js", "NestJS", "MongoDB", "PostgreSQL", "Redis", "Socket.io", "AWS"],
    videoId: "gsfYeQrA9so",
    videoUrl: "https://youtu.be/gsfYeQrA9so",
    live: "https://taskgrid.io",
    wide: true,
  },
  {
    num: "02",
    name: "BoostUGC",
    desc: "Video testimonial platform. Multi-brand agency management, secure storage, moderation at scale.",
    stack: ["Nuxt.js", "NestJS", "WebRTC", "AWS"],
    videoId: "Mvr0De1yDRY",
    videoUrl: "https://youtu.be/Mvr0De1yDRY",
    live: "https://www.boostugc.co",
    wide: false,
  },
  {
    num: "03",
    name: "Egshop",
    desc: "eCommerce SaaS platform for Bangladeshi merchants with local payments, logistics, and multi-store management.",
    stack: ["Node.js", "MongoDB", "Redis", "Docker"],
    videoId: "wkrosRgWdVc",
    videoUrl: "https://youtu.be/wkrosRgWdVc",
    live: "https://egshop.io",
    wide: false,
  },
  {
    num: "04",
    name: "Pengine",
    desc: "Next-gen print-on-demand SaaS. Shopify integration, bulk mockup generation, wallets, enterprise APIs.",
    stack: ["Nuxt.js", "NestJS", "ClickHouse", "Shopify"],
    videoId: "B41rkkrPfpo",
    videoUrl: "https://youtu.be/B41rkkrPfpo",
    live: "https://pengine.io",
    wide: false,
  },
  {
    num: "05",
    name: "Render Engine",
    desc: "GPU-powered SaaS generating ultra-realistic product mockups at scale. Eliminated manual bulk workflows.",
    stack: ["Nuxt.js", "GPU Render", "GraphQL", "AWS"],
    videoId: "x-UQDPvVOtg",
    videoUrl: "https://youtu.be/x-UQDPvVOtg",
    live: null,
    wide: false,
  },
  {
    num: "06 — Featured",
    name: "Craft Music",
    desc: "Real-time global music lesson platform. Audio-optimized WebRTC, timezone-aware scheduling, live chat, subscriptions & payments worldwide.",
    stack: ["Nuxt.js", "NestJS", "WebRTC", "GetStream", "Docker", "AWS"],
    videoId: "GEPMdtkZmTU",
    videoUrl: "https://youtu.be/GEPMdtkZmTU",
    live: "https://craft-music.dev",
    wide: true,
  },
  {
    num: "07",
    name: "Campus Automation System",
    desc: "Full campus operations platform covering admissions, academics, exams, payroll, finance, and administration workflows.",
    stack: ["React.js", "Node.js", "PostgreSQL", "Docker"],
    videoId: "y9HwAAE0zYQ",
    videoUrl: "https://youtu.be/y9HwAAE0zYQ",
    live: null,
    wide: false,
  },
  {
    num: "08",
    name: "Egg Hatching Forecast App",
    desc: "ACI Godrej forecasting app for hatchery planning, production visibility, and operational decision support.",
    stack: ["React.js", "FastAPI", "PostgreSQL", "Analytics"],
    videoId: "8f40GePeLWI",
    videoUrl: "https://youtu.be/8f40GePeLWI",
    live: null,
    wide: false,
  },
  {
    num: "09",
    name: "Eselfmade",
    desc: "EdTech SaaS — course discovery, automated payments, progress tracking, centralized admin ops.",
    stack: ["Nuxt.js", "Node.js", "PostgreSQL", "AWS"],
    videoId: "Fm08Xy39CPg",
    videoUrl: "https://youtu.be/Fm08Xy39CPg",
    live: null,
    wide: false,
  },
  {
    num: "10",
    name: "Forecasting & Budget Automation",
    desc: "Enterprise automation replacing Excel. Multi-year production & budget analytics with real-time dashboards.",
    stack: ["React.js", "Python", "FastAPI", "PostgreSQL"],
    videoId: "SUpeFjqymM0",
    videoUrl: "https://youtu.be/SUpeFjqymM0",
    live: null,
    wide: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
              02 — Selected Work
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
              Project
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Portfolio</em>
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
            10 shipped products across SaaS, EdTech, eCommerce &amp; Enterprise
          </div>
        </div>

        <div
          className="proj-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            paddingBottom: 96,
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isWide = project.wide;

  return (
    <div
      className="proj-card"
      data-reveal
      style={{
        gridColumn: isWide ? "span 2" : undefined,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--cream)",
        border: "1px solid var(--border)",
        borderRadius: 4,
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        animationDelay: `${(index % 3) * 90}ms`,
      }}
    >
      {/* Video */}
      <div style={{ display: "block" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: isWide ? "21/9" : "16/9",
          }}
          className="yt-wrap"
        >
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}?rel=0`}
            title={`${project.name} demo video`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
              filter: "saturate(0.85) brightness(0.96)",
            }}
          />
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "28px 30px 26px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10,
            color: "var(--ink3)",
            letterSpacing: "0.18em",
            marginBottom: 10,
          }}
        >
          {project.num}
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: 10,
            lineHeight: 1.2,
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontSize: 13,
            lineHeight: 1.7,
            color: "var(--ink2)",
            flex: 1,
            marginBottom: 18,
            fontWeight: 300,
          }}
        >
          {project.desc}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 22,
          }}
        >
          {project.stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 9,
                letterSpacing: "0.06em",
                padding: "3px 9px",
                background: "var(--cream2)",
                color: "var(--ink3)",
                border: "1px solid var(--border)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
        <div
          className="proj-actions"
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            paddingTop: 16,
            borderTop: "1px solid var(--border)",
          }}
        >
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textDecoration: "none",
                color: "var(--ink3)",
                textTransform: "uppercase",
                transition: "color 0.2s",
                cursor: "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--ink3)")
              }
            >
              ↗ Live Site
            </a>
          )}
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              textDecoration: "none",
              color: "var(--ink3)",
              textTransform: "uppercase",
              transition: "color 0.2s",
              cursor: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink3)")
            }
          >
            ▶ Demo
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textDecoration: "none",
              textTransform: "uppercase",
              color: "var(--cream)",
              background: "var(--ink)",
              padding: "6px 14px",
              marginLeft: "auto",
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
            Case Study →
          </a>
        </div>
      </div>
    </div>
  );
}
