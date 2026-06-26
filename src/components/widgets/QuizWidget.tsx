"use client";

import { useEffect, useRef, useState } from "react";
import {
  quizQuestions,
  getQuizResult,
  quizFabLabel,
} from "@/data/quiz";
import styles from "./QuizWidget.module.css";

/** Floating "Wrapped" quiz: 3 questions → recommended smile. */
export default function QuizWidget() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const done = answers.length >= quizQuestions.length;
  const current = quizQuestions[answers.length];
  const result = done ? getQuizResult(answers) : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.fab}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        {quizFabLabel}
      </button>

      {open && (
        <>
          <div className={styles.overlay} onClick={() => setOpen(false)} />
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="¿Cuál es tu sonrisa ideal?"
          >
            <button
              ref={closeRef}
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            {!done && current && (
              <div>
                <div className={styles.qNum}>
                  PREGUNTA {answers.length + 1} / {quizQuestions.length}
                </div>
                <div className={styles.qText}>{current.text}</div>
                <div className={styles.opts}>
                  {current.opts.map((o) => (
                    <button
                      key={o.val}
                      type="button"
                      className={styles.opt}
                      onClick={() => setAnswers((a) => [...a, o.val])}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {done && result && (
              <div className={styles.result}>
                <div className={styles.resultLabel}>TU RESULTADO ES</div>
                <div className={styles.resultTitle}>{result.title}</div>
                <div className={styles.resultDesc}>{result.desc}</div>
                <button
                  type="button"
                  className={styles.restart}
                  onClick={() => setAnswers([])}
                >
                  Volver a intentar
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
