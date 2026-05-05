"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 8, suffix: "+", label: "Years of\nEngineering" },
  { num: 12, suffix: "+", label: "Products\nShipped" },
  { num: 100, suffix: "k", label: "Concurrent\nUsers Served" },
  { num: 5, suffix: "★", label: "Client\nSatisfaction" },
];

function CountUp({
  end,
  duration = 1600,
  delay = 0,
}: {
  end: number;
  duration?: number;
  delay?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setValue(end);
      return;
    }

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * end));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (delay > 0) setTimeout(run, delay);
            else run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, delay]);

  return <span ref={ref}>{value}</span>;
}

export default function Stats() {
  return (
    <section
      style={{
        background: "var(--cream)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="resp-container"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}
      >
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "32px 24px",
                borderRight:
                  i < stats.length - 1 ? "1px solid var(--border)" : undefined,
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(36px, 3.6vw, 52px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: "var(--ink)",
                  marginBottom: 8,
                  letterSpacing: "-0.03em",
                }}
              >
                <CountUp end={s.num} delay={i * 90} />
                <span style={{ color: "var(--gold)" }}>{s.suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 10,
                  color: "var(--ink3)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
