"use client";

import Image from "next/image";

const projects = [
  {
    num: "01 — Featured",
    name: "TaskGrid",
    desc: "All-in-one project & task management SaaS — boards, real-time collaboration, analytics, automation, team communication. Scaled to 100k+ concurrent users.",
    stack: ["Nuxt.js", "NestJS", "MongoDB", "PostgreSQL", "Redis", "Socket.io", "AWS"],
    videoId: "kqbWl222_54",
    live: "https://taskgrid.io",
    wide: true,
  },
  {
    num: "02",
    name: "BoostUGC",
    desc: "Video testimonial platform. Multi-brand agency management, secure storage, moderation at scale.",
    stack: ["Nuxt.js", "NestJS", "WebRTC", "AWS"],
    videoId: "imwJbPvQ_eU",
    live: "https://www.boostugc.co",
    wide: false,
  },
  {
    num: "03",
    name: "Pengine",
    desc: "Next-gen print-on-demand SaaS. Shopify integration, bulk mockup generation, wallets, enterprise APIs.",
    stack: ["Nuxt.js", "NestJS", "ClickHouse", "Shopify"],
    videoId: "t4NBCVjfJf0",
    live: "https://pengine.io",
    wide: false,
  },
  {
    num: "04",
    name: "Render Engine",
    desc: "GPU-powered SaaS generating ultra-realistic product mockups at scale. Eliminated manual bulk workflows.",
    stack: ["Nuxt.js", "GPU Render", "GraphQL", "AWS"],
    videoId: "tIefE4CYChE",
    live: "https://b2c.thunderthrone.com",
    wide: false,
  },
  {
    num: "05 — Featured",
    name: "Craft Music",
    desc: "Real-time global music lesson platform. Audio-optimized WebRTC, timezone-aware scheduling, live chat, subscriptions & payments worldwide.",
    stack: ["Nuxt.js", "NestJS", "WebRTC", "GetStream", "Docker", "AWS"],
    videoId: "vSdp7U35be0",
    live: "https://craft-music.dev",
    wide: true,
  },
  {
    num: "06",
    name: "Egshop.io",
    desc: "Multi-tenant eCommerce SaaS for Bangladeshi merchants. Local payments, logistics, multi-store management.",
    stack: ["Node.js", "MongoDB", "Redis", "Docker"],
    videoId: "lYgHdp1wGJ4",
    live: "https://egshop.io",
    wide: false,
  },
  {
    num: "07",
    name: "Eselfmade",
    desc: "EdTech SaaS — course discovery, automated payments, progress tracking, centralized admin ops.",
    stack: ["Nuxt.js", "Node.js", "PostgreSQL", "AWS"],
    videoId: "Fm08Xy39CPg",
    live: null,
    wide: false,
  },
  {
    num: "08",
    name: "Forecasting — ACI",
    desc: "Enterprise automation replacing Excel. Multi-year production & budget analytics with real-time dashboards.",
    stack: ["React.js", "Python", "FastAPI", "PostgreSQL"],
    videoId: "SUpeFjqymM0",
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
            08 shipped products across SaaS, EdTech, eCommerce &amp; Enterprise
          </div>
        </div>

        <div
          className="proj-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--border)",
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

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isWide = project.wide;

  return (
    <div
      style={{
        gridColumn: isWide ? "span 2" : undefined,
        borderRight:
          !isWide && index % 3 !== 2 ? "1px solid var(--border)" : undefined,
        borderBottom: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s",
        background: "var(--cream)",
      }}
    >
      {/* Thumbnail */}
      <a
        href={`https://youtu.be/${project.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none" }}
        className="yt-link"
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: isWide ? "21/9" : "16/9",
          }}
          className="yt-wrap"
        >
          <Image
            src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
            alt={project.name}
            fill
            style={{
              objectFit: "cover",
              filter: "saturate(0.5) brightness(0.85)",
              transition: "filter 0.5s, transform 0.5s",
            }}
            className="yt-img"
            sizes={isWide ? "66vw" : "33vw"}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(28,24,20,0.4))",
            }}
          >
            <div
              className="play-btn"
              style={{
                width: 52,
                height: 52,
                background: "rgba(246,242,236,0.9)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                paddingLeft: 3,
                color: "var(--ink)",
                transition: "background 0.2s, transform 0.2s",
              }}
            >
              ▶
            </div>
          </div>
        </div>
      </a>

      {/* Body */}
      <div
        style={{
          padding: "24px 28px",
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
            marginBottom: 8,
          }}
        >
          {project.num}
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: 20,
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontSize: 12,
            lineHeight: 1.75,
            color: "var(--ink3)",
            flex: 1,
            marginBottom: 14,
            fontWeight: 300,
          }}
        >
          {project.desc}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            marginBottom: 16,
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
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
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
            href={`https://youtu.be/${project.videoId}`}
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
