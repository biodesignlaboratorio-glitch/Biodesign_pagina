"use client";

import { useId, useState } from "react";
import type { Faq as FaqType } from "@/data/treatments";
import styles from "./Faq.module.css";

/** Accessible FAQ accordion. Multiple items can be open (as in the original). */
export default function Faq({ items }: { items: FaqType[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const baseId = useId();

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className={styles.faqs}>
      {items.map((faq, i) => {
        const isOpen = open.has(i);
        const panelId = `${baseId}-faq-${i}`;
        return (
          <div
            key={faq.q}
            className={`${styles.faq} ${isOpen ? styles.faqOpen : ""}`}
          >
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
            >
              {faq.q}
              <span
                className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
