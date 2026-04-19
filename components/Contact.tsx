"use client";

import { useState } from "react";

export default function Contact() {
  return (
    <section
      id="contact"
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
              06 — Get In Touch
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
              Ready to
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Deploy?</em>
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
            Available for senior roles, SaaS builds &amp; Fractional CTO
          </div>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* Left */}
          <div
            className="contact-left"
            style={{
              padding: "64px 56px 80px 0",
              borderRight: "1px solid var(--border)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(36px, 4.5vw, 60px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                marginBottom: 24,
              }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>that scales.</em>
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.85,
                color: "var(--ink3)",
                marginBottom: 40,
                fontWeight: 300,
              }}
            >
              Available for senior engineering roles, SaaS builds, DevOps
              setups, and Fractional CTO engagements. Let&apos;s architect something
              that lasts.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoRow label="Email">
                <a
                  href="mailto:sudiptamondal.dev@gmail.com"
                  style={{
                    color: "var(--ink)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--gold)";
                    el.style.borderColor = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--ink)";
                    el.style.borderColor = "";
                  }}
                >
                  sudiptamondal.dev@gmail.com
                </a>
              </InfoRow>
              <InfoRow label="GitHub">
                <a
                  href="https://github.com/sudiptamondal"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--ink)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--gold)";
                    el.style.borderColor = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--ink)";
                    el.style.borderColor = "";
                  }}
                >
                  github.com/sudiptamondal
                </a>
              </InfoRow>
              <InfoRow label="LinkedIn">
                <a
                  href="https://linkedin.com/in/sudiptamondal"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--ink)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--gold)";
                    el.style.borderColor = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--ink)";
                    el.style.borderColor = "";
                  }}
                >
                  linkedin.com/in/sudiptamondal
                </a>
              </InfoRow>
              <InfoRow label="Status">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "#F0FAF0",
                    border: "1px solid rgba(76,175,80,0.3)",
                    padding: "4px 12px",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    color: "#2E7D32",
                    letterSpacing: "0.1em",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: "#4CAF50",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  Available for Hire
                </span>
              </InfoRow>
              <InfoRow label="Resume">
                <a
                  href="/cv.pdf"
                  download="Sudipta_Mondal_CV.pdf"
                  style={{
                    color: "var(--ink)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--gold)";
                    el.style.borderColor = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--ink)";
                    el.style.borderColor = "";
                  }}
                >
                  Download CV ↓
                </a>
              </InfoRow>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right" style={{ padding: "64px 0 80px 56px" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        fontSize: 13,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 9,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--ink3)",
          whiteSpace: "nowrap",
          paddingTop: 3,
          minWidth: 80,
        }}
      >
        {label}
      </span>
      <span>{children}</span>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans), sans-serif",
    fontSize: 13,
    color: "var(--ink)",
    background: "var(--cream)",
    border: "1px solid var(--border)",
    borderTop: "none",
    padding: "10px 16px 14px",
    outline: "none",
    width: "100%",
    WebkitAppearance: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono), monospace",
    fontSize: 9,
    letterSpacing: "0.14em",
    color: "var(--ink3)",
    textTransform: "uppercase",
    padding: "12px 16px 0",
    background: "var(--cream)",
    border: "1px solid var(--border)",
    borderBottom: "none",
    display: "block",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      <div className="form-row-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
        <div>
          <label style={labelStyle}>Your Name *</label>
          <input
            type="text"
            name="name"
            placeholder="John Smith"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            style={inputStyle}
          />
        </div>
      </div>
      <div className="form-row-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
        <div>
          <label style={labelStyle}>Company</label>
          <input
            type="text"
            name="company"
            placeholder="Acme Corp"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Service Type *</label>
          <select
            name="service"
            required
            style={{ ...inputStyle, resize: undefined } as React.CSSProperties}
          >
            <option value="" disabled>Select a service...</option>
            <option>Full-Stack SaaS Build</option>
            <option>Backend API &amp; Systems</option>
            <option>DevOps &amp; Cloud Setup</option>
            <option>Integrations &amp; Automation</option>
            <option>Performance Audit</option>
            <option>Fractional CTO</option>
            <option>Case Study Inquiry</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle}>Budget Range</label>
        <select
          name="budget"
          style={{ ...inputStyle } as React.CSSProperties}
        >
          <option value="" disabled>Select range...</option>
          <option>Under $5k</option>
          <option>$5k – $15k</option>
          <option>$15k – $50k</option>
          <option>$50k+</option>
          <option>Monthly Retainer</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          name="message"
          placeholder="Describe your project, timeline, and goals..."
          required
          style={{ ...inputStyle, height: 130, resize: "none", display: "block" }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          marginTop: 1,
          background: "var(--ink)",
          color: "var(--cream)",
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: 18,
          border: "none",
          cursor: "none",
          transition: "background 0.2s",
          width: "100%",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "var(--gold)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "var(--ink)")
        }
      >
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>

      {status === "sent" && (
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "var(--gold)",
            letterSpacing: "0.1em",
            textAlign: "center",
            padding: 14,
            border: "1px solid rgba(0,0,0,0.06)",
            background: "var(--cream)",
          }}
        >
          Message sent — I&apos;ll respond within 24 hours.
        </div>
      )}
    </form>
  );
}
