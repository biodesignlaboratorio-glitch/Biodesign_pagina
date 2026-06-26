"use client";

import { useCallback, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import { casos, casosNote } from "@/data/casos";
import styles from "./Casos.module.css";

const STEP = 2;

export default function Casos() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [pos, setPos] = useState(50);
  const [fading, setFading] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const caso = casos[caseIndex];

  const setFromClientX = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    sliderRef.current?.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setPos((p) => Math.max(0, p - STEP));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setPos((p) => Math.min(100, p + STEP));
      e.preventDefault();
    } else if (e.key === "Home") {
      setPos(0);
      e.preventDefault();
    } else if (e.key === "End") {
      setPos(100);
      e.preventDefault();
    }
  };

  const switchCaso = (idx: number) => {
    if (idx === caseIndex) return;
    setFading(true);
    window.setTimeout(() => {
      setCaseIndex(idx);
      setPos(50);
      setFading(false);
    }, 180);
  };

  const imgStyle = { opacity: fading ? 0 : 1, transition: "opacity .2s" };

  return (
    <section id="casos" className={styles.casos}>
      <div className={styles.top} data-reveal>
        <div>
          <div className="sec-eyebrow">Resultados reales</div>
          <h1 className="sec-h2 sec-h2--light">CASOS REALES</h1>
        </div>
      </div>

      <div className={styles.tabs} data-reveal="1">
        {casos.map((c, i) => (
          <button
            key={c.label}
            type="button"
            className={`${styles.tab} ${i === caseIndex ? styles.tabOn : ""}`}
            aria-pressed={i === caseIndex}
            onClick={() => switchCaso(i)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div
        ref={sliderRef}
        className={`${styles.frame} ${styles.slider}`}
        data-reveal="2"
        role="slider"
        tabIndex={0}
        aria-label={`Comparador antes y después — ${caso.label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% después`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        <Image
          className={`${styles.img} ${styles.imgBefore}`}
          src={caso.before}
          alt={`Antes — ${caso.label}`}
          fill
          sizes="100vw"
          priority={caseIndex === 0}
          style={imgStyle}
        />
        <div
          className={styles.afterWrap}
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <Image
            className={styles.img}
            src={caso.after}
            alt={`Después — ${caso.label}`}
            fill
            sizes="100vw"
            style={imgStyle}
          />
        </div>
        <div className={styles.handle} style={{ left: `${pos}%` }}>
          <div className={styles.handleLine} />
          <div className={styles.handleGrip} aria-hidden="true">
            ⇔
          </div>
        </div>
        <span className={`${styles.lbl} ${styles.lblA}`}>ANTES</span>
        <span className={`${styles.lbl} ${styles.lblD}`}>DESPUÉS</span>
      </div>

      <p className={styles.note}>{casosNote}</p>
    </section>
  );
}
