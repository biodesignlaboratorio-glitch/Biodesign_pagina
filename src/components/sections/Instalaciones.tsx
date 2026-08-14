"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Instalaciones.module.css";

const TABS = [
  { key: "consultorio", label: "Consultorio", count: 10 },
  { key: "laboratorio", label: "Laboratorio", count: 12 },
  { key: "oficina", label: "Oficina", count: 6 },
] as const;

export default function Instalaciones() {
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>(
    "consultorio",
  );

  const tab = TABS.find((t) => t.key === active)!;
  const photos = Array.from({ length: tab.count }, (_, i) => i + 1);

  return (
    <section className={styles.section}>
      <div className={styles.top} data-reveal>
        <div>
          <div className="sec-eyebrow">Conocé el espacio</div>
          <h2 className="sec-h2 sec-h2--light">
            Nuestras <i>instalaciones</i>
          </h2>
        </div>
      </div>

      <div className={styles.tabs} data-reveal="1">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`${styles.tab} ${t.key === active ? styles.tabOn : ""}`}
            aria-pressed={t.key === active}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.grid} data-reveal="2">
        {photos.map((n) => (
          <div key={`${tab.key}-${n}`} className={styles.photoWrap}>
            <Image
              className={styles.photo}
              src={`/images/instalaciones-${tab.key}-${n}.jpeg`}
              alt={`${tab.label} — Biodesign`}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
