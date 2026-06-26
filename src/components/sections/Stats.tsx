"use client";

import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/data/casos";
import styles from "./Stats.module.css";

const DURATION = 1600;
const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduce ? 0 : DURATION;
    let raf = 0;
    let start: number | undefined;
    const tick = (t: number) => {
      if (start === undefined) start = t;
      const p = duration === 0 ? 1 : Math.min((t - start) / duration, 1);
      setValue(stat.value * easeOut(p));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(stat.value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.value]);

  const display = stat.decimals
    ? value.toFixed(stat.decimals)
    : Math.round(value).toString();

  return (
    <div className={styles.stat} data-reveal>
      <div className={styles.num}>{display}</div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.stats}>
      <div ref={ref} className={styles.grid}>
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} run={run} />
        ))}
      </div>
    </section>
  );
}
