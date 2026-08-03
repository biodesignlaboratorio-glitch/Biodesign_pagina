"use client";

import { useCallback, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import styles from "./CaseCompare.module.css";

const STEP = 2;

export default function CaseCompare({
  before,
  after,
  label,
  note,
  showLabels = true,
  grayscaleBefore = true,
  ratio,
}: {
  before: string;
  after: string;
  /** Usado en el aria-label y el alt de las fotos. */
  label: string;
  note?: string;
  /** Poné false si las fotos ya traen "ANTES"/"DESPUÉS" incluido. */
  showLabels?: boolean;
  /** Poné false para fotos reales a color (sin el efecto blanco y negro del "antes"). */
  grayscaleBefore?: boolean;
  /** CSS aspect-ratio del cuadro (ej. "2.4"). Por defecto 16/10. */
  ratio?: string;
}) {
  const [pos, setPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
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

  return (
    <div className={styles.wrap}>
      <div
        ref={sliderRef}
        className={styles.frame}
        style={ratio ? { aspectRatio: ratio } : undefined}
        role="slider"
        tabIndex={0}
        aria-label={`Comparador antes y después — ${label}`}
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
          className={`${styles.img} ${grayscaleBefore ? styles.imgBefore : ""}`}
          src={before}
          alt={`Antes — ${label}`}
          fill
          draggable={false}
          sizes="(max-width: 820px) 100vw, 1200px"
        />
        <div
          className={styles.afterWrap}
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <Image
            className={styles.img}
            src={after}
            alt={`Después — ${label}`}
            fill
            draggable={false}
            sizes="(max-width: 820px) 100vw, 1200px"
          />
        </div>
        <div className={styles.handle} style={{ left: `${pos}%` }}>
          <div className={styles.handleLine} />
          <div className={styles.handleGrip} aria-hidden="true">
            ⇔
          </div>
        </div>
        {showLabels ? (
          <>
            <span className={`${styles.lbl} ${styles.lblA}`}>ANTES</span>
            <span className={`${styles.lbl} ${styles.lblD}`}>DESPUÉS</span>
          </>
        ) : null}
      </div>
      {note ? <p className={styles.note}>{note}</p> : null}
    </div>
  );
}
