"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global reveal-on-scroll manager. Mirrors the original IntersectionObserver:
 * adds `.vis` to every `[data-reveal]` element as it enters the viewport.
 * Re-scans on route change so client-navigated pages animate too.
 * Honors prefers-reduced-motion (reveals everything immediately).
 */
export default function RevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("vis"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    els.forEach((el) => {
      if (el.classList.contains("vis")) return;
      // Reveal above-the-fold elements immediately (don't depend on IO's
      // initial callback); observe the rest to animate in on scroll.
      if (inView(el)) el.classList.add("vis");
      else io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
