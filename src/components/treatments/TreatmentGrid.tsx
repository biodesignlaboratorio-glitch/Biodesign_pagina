"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { mainTreatments, moreTreatments, type Treatment } from "@/data/treatments";
import styles from "./TreatmentGrid.module.css";

function TratCard({
  treatment,
  reveal,
  sizes,
}: {
  treatment: Treatment;
  reveal: number;
  sizes: string;
}) {
  return (
    <Link
      href={`/tratamientos/${treatment.slug}`}
      className={styles.card}
      data-reveal={reveal === 0 ? "" : String(reveal)}
    >
      <Image
        className={styles.cardImg}
        src={treatment.image}
        alt={treatment.name}
        fill
        sizes={sizes}
      />
      <div className={styles.cardBody}>
        <div className={styles.cardBadge}>{treatment.gridBadge}</div>
        <div className={styles.cardName}>{treatment.name}</div>
        <div className={styles.cardLine} />
        <div className={styles.cardDesc}>{treatment.gridDescription}</div>
        <span className={styles.cardLink}>Ver detalles →</span>
      </div>
    </Link>
  );
}

export default function TreatmentGrid() {
  const [open, setOpen] = useState(false);

  return (
    <section id="tratamientos" className={styles.section}>
      <div className={styles.intro} data-reveal>
        <div>
          <div className="sec-eyebrow">Nuestros servicios</div>
          <h1 className="sec-h2">
            Tratamientos
            <br />
            <i>destacados</i>
          </h1>
        </div>
        <a
          href={site.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-fill ${styles.introCta}`}
        >
          Consultar ahora
        </a>
      </div>

      <div className={styles.grid}>
        {mainTreatments.map((t, i) => (
          <TratCard
            key={t.slug}
            treatment={t}
            reveal={i}
            sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
        ))}
      </div>

      <div className={styles.masToggle}>
        <button
          type="button"
          className={styles.masBtn}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "− Ocultar tratamientos" : "+ Ver más tratamientos"}
        </button>
      </div>

      <div className={`${styles.masGrid} ${open ? styles.masGridOpen : ""}`}>
        {moreTreatments.map((t, i) => (
          <TratCard
            key={t.slug}
            treatment={t}
            reveal={i}
            sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
        ))}
      </div>
    </section>
  );
}
