"use client";

import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FORM_SERVICE_OPTIONS,
  RESUME_URL,
  SERVICE_SELECT_EVENT,
} from "@/components/siteData";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

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
            Available for senior roles, SaaS builds &amp; Project Management
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
              setups, and project management engagements. Let&apos;s architect something
              that lasts.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoRow label="Email">
                <a
                  href="mailto:contact@devsudipto.com"
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
                  contact@devsudipto.com
                </a>
              </InfoRow>
              <InfoRow label="GitHub">
                <a
                  href="https://github.com/sudipto-28"
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
                  github.com/sudipto-28
                </a>
              </InfoRow>
              <InfoRow label="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/sudipta-mondal-390ba8153"
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
                  linkedin.com/in/sudipta-mondal-390ba8153
                </a>
              </InfoRow>
              <InfoRow label="Upwork">
                <a
                  href="https://www.upwork.com/freelancers/~012e05def915f38212"
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
                  upwork.com/freelancers/~012e05def915f38212
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
                  href={RESUME_URL}
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
                  View CV ↗
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  useEffect(() => {
    const syncServiceFromUrl = () => {
      const nextService = new URLSearchParams(window.location.search).get(
        "service"
      );

      if (
        nextService &&
        FORM_SERVICE_OPTIONS.some((option) => option === nextService)
      ) {
        setSelectedService(nextService);
        return;
      }

      setSelectedService("");
    };

    const handleServiceSelected = (event: Event) => {
      const nextService = (event as CustomEvent<string>).detail;
      if (FORM_SERVICE_OPTIONS.some((option) => option === nextService)) {
        setSelectedService(nextService);
      }
    };

    syncServiceFromUrl();
    window.addEventListener(
      SERVICE_SELECT_EVENT,
      handleServiceSelected as EventListener
    );
    window.addEventListener("popstate", syncServiceFromUrl);

    return () => {
      window.removeEventListener(
        SERVICE_SELECT_EVENT,
        handleServiceSelected as EventListener
      );
      window.removeEventListener("popstate", syncServiceFromUrl);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the reCAPTCHA challenge.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      service: String(data.get("service") ?? ""),
      budget: String(data.get("budget") ?? ""),
      message: String(data.get("message") ?? ""),
      honeypot: String(data.get("website") ?? ""),
      recaptchaToken: captchaToken,
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as {
          error?: string;
          detail?: string;
        };
        throw new Error(body.error || `Request failed (${res.status})`);
      }

      setStatus("sent");
      setSelectedService("");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
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
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            style={{ ...inputStyle, resize: undefined } as React.CSSProperties}
          >
            <option value="" disabled>Select a service...</option>
            {FORM_SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
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

      {/* Honeypot — must stay empty. Hidden from humans + assistive tech. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      {RECAPTCHA_SITE_KEY ? (
        <div style={{ marginTop: 18 }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
            onErrored={() => setCaptchaToken(null)}
          />
        </div>
      ) : (
        <div
          style={{
            marginTop: 18,
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "#B45309",
            letterSpacing: "0.06em",
            padding: 12,
            border: "1px solid rgba(180,83,9,0.25)",
            background: "rgba(180,83,9,0.06)",
          }}
        >
          reCAPTCHA site key missing — set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env.local.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          marginTop: 14,
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
          opacity: status === "sending" ? 0.7 : 1,
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
            marginTop: 14,
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

      {status === "error" && errorMessage && (
        <div
          style={{
            marginTop: 14,
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "#B91C1C",
            letterSpacing: "0.06em",
            textAlign: "center",
            padding: 14,
            border: "1px solid rgba(185,28,28,0.25)",
            background: "rgba(185,28,28,0.06)",
          }}
        >
          {errorMessage}
        </div>
      )}
    </form>
  );
}
