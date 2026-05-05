"use client";

import type Lenis from "lenis";
import { SERVICE_SELECT_EVENT } from "@/components/siteData";

const services = [
  {
    num: "01 / SERVICE",
    icon: "SaaS",
    name: "Full-Stack SaaS Build",
    desc: "End-to-end SaaS product development — from architecture to deployment. I handle every layer so you can focus on the product.",
    items: [
      "Nuxt.js / Vue.js / React frontend",
      "NestJS / Node.js backend APIs",
      "Multi-tenant database architecture",
      "AWS infrastructure + CI/CD",
      "Auth, billing (Stripe), notifications",
    ],
    price: "Starting from discovery call",
  },
  {
    num: "02 / SERVICE",
    icon: "API",
    name: "Backend API & Systems",
    desc: "High-performance, scalable backend systems. REST or GraphQL. Optimized for throughput, reliability, and maintainability.",
    items: [
      "REST / GraphQL API design & build",
      "Real-time with Socket.io / WebRTC",
      "Database design & optimization",
      "Microservices & event-driven arch",
      "Redis caching, queues, pub/sub",
    ],
    price: "Fixed scope or retainer",
  },
  {
    num: "03 / SERVICE",
    icon: "Ops",
    name: "DevOps & Cloud Setup",
    desc: "Production-grade cloud infrastructure. Automated deployments, zero-downtime, observability. Built for teams that ship fast.",
    items: [
      "AWS architecture design",
      "Docker / Kubernetes orchestration",
      "Terraform infrastructure as code",
      "CI/CD pipelines (GitHub Actions)",
      "Monitoring, logging, alerting",
    ],
    price: "One-time or ongoing",
  },
  {
    num: "04 / SERVICE",
    icon: "Int.",
    name: "Integrations & Automation",
    desc: "Connect your stack. Automate your ops. From Shopify to Stripe to custom AI pipelines — I wire it all together.",
    items: [
      "Shopify / eCommerce integrations",
      "Payment gateway implementations",
      "n8n / Zapier automation flows",
      "AI agent workflow development",
      "Third-party API integrations",
    ],
    price: "Per project",
  },
  {
    num: "05 / SERVICE",
    icon: "Perf",
    name: "Performance Audit & Fix",
    desc: "Slow app? I diagnose and fix. LCP, TTFB, database N+1s, memory leaks — I find the bottleneck and eliminate it.",
    items: [
      "Core Web Vitals audit & fixes",
      "SSR / SSG optimization",
      "Database query optimization",
      "CDN, caching layer setup",
      "Load testing & profiling",
    ],
    price: "Audit starts at fixed price",
  },
  {
    num: "06 / SERVICE",
    icon: "PM",
    name: "Project Management",
    desc: "Hands-on delivery management for software teams. I keep scope, timelines, communication, and execution aligned so projects move without chaos.",
    items: [
      "Sprint planning & backlog grooming",
      "Team coordination across dev, design, QA",
      "Timeline, scope & risk management",
      "Client & stakeholder communication",
      "Delivery tracking & status reporting",
    ],
    price: "Per sprint or retainer",
  },
];

export default function Services() {
  function handleServiceSelect(serviceName: string) {
    if (typeof window === "undefined") return;

    window.dispatchEvent(
      new CustomEvent<string>(SERVICE_SELECT_EVENT, { detail: serviceName })
    );

    const url = new URL(window.location.href);
    url.searchParams.set("service", serviceName);
    url.hash = "contact";
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);

    const target = document.getElementById("contact");
    if (!target) return;

    const lenis = window.__lenis as Lenis | undefined;
    if (lenis) {
      lenis.scrollTo(target, { offset: -96, duration: 1 });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="services"
      style={{ background: "var(--cream2)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="resp-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
        <SectionHeader
          index="01 — What I Offer"
          title={<>Services &amp;<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Packages</em></>}
          sub="End-to-end engineering, infrastructure & technical leadership"
        />
        <div
          className="svc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {services.map((svc, i) => (
            <ServiceCard
              key={i}
              svc={svc}
              col={i % 3}
              index={i}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  col,
  index,
  onSelect,
}: {
  svc: (typeof services)[0];
  col: number;
  index: number;
  onSelect: (serviceName: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(svc.name)}
      className="svc-card"
      data-reveal
      style={{
        padding: "40px 36px",
        borderRight: col !== 2 ? "1px solid var(--border)" : undefined,
        borderBottom: "1px solid var(--border)",
        position: "relative",
        transition: "background 0.25s",
        background: "transparent",
        cursor: "none",
        width: "100%",
        textAlign: "left",
        display: "block",
        fontFamily: "var(--font-sans), sans-serif",
        color: "inherit",
        appearance: "none",
        borderTop: "none",
        borderLeft: "none",
        animationDelay: `${(index % 3) * 90}ms`,
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.background = "var(--cream)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
      }
    >
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 10,
          color: "var(--ink3)",
          letterSpacing: "0.18em",
          marginBottom: 20,
        }}
      >
        {svc.num}
      </div>
      <div
        className="svc-icon-text"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: 44,
          fontWeight: 900,
          fontStyle: "italic",
          color: "var(--cream3)",
          lineHeight: 1,
          marginBottom: 20,
          letterSpacing: "-0.03em",
        }}
      >
        {svc.icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: 20,
          fontWeight: 700,
          color: "var(--ink)",
          marginBottom: 12,
          lineHeight: 1.2,
        }}
      >
        {svc.name}
      </div>
      <div
        style={{
          fontSize: 13,
          lineHeight: 1.8,
          color: "var(--ink3)",
          marginBottom: 20,
          fontWeight: 300,
        }}
      >
        {svc.desc}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 7,
          marginBottom: 24,
        }}
      >
        {svc.items.map((item, j) => (
          <div
            key={j}
            className="dash-item"
            style={{
              fontSize: 12,
              color: "var(--ink2)",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 10,
          color: "var(--gold)",
          letterSpacing: "0.14em",
          paddingTop: 20,
          borderTop: "1px solid var(--border2)",
        }}
      >
        {svc.price} · Click to enquire
      </div>
    </button>
  );
}

function SectionHeader({
  index,
  title,
  sub,
}: {
  index: string;
  title: React.ReactNode;
  sub: string;
}) {
  return (
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
          {index}
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
          {title}
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
        {sub}
      </div>
    </div>
  );
}
