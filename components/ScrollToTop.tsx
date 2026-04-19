"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1 });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 950,
        width: 52,
        height: 52,
        borderRadius: "50%",
        border: "1px solid var(--border)",
        background: "rgba(246,242,236,0.92)",
        color: "var(--ink)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 10px 30px rgba(28,24,20,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        cursor: "none",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.25s, transform 0.25s, background 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = "var(--ink)";
        el.style.color = "var(--cream)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = "rgba(246,242,236,0.92)";
        el.style.color = "var(--ink)";
      }}
    >
      ↑
    </button>
  );
}
