"use client";

import { useState } from "react";
import {
  comparadorItems,
  comparadorRows,
  comparadorDefault,
} from "@/data/comparador";
import styles from "./Comparador.module.css";

const ORDER = comparadorItems.map((i) => i.key);
const byKey = Object.fromEntries(comparadorItems.map((i) => [i.key, i]));

export default function Comparador() {
  const [selected, setSelected] = useState<string[]>(comparadorDefault);

  function toggle(key: string) {
    setSelected((prev) => {
      if (prev.includes(key)) {
        // No permitir quedarse con menos de 1 seleccionado.
        return prev.length > 1 ? prev.filter((k) => k !== key) : prev;
      }
      let next = [...prev];
      if (next.length >= 2) {
        // Al elegir un tercero, se descarta el primero (orden de los tabs).
        const earliest = ORDER.find((k) => next.includes(k));
        next = next.filter((k) => k !== earliest);
      }
      next.push(key);
      return next;
    });
  }

  // Render en el orden de los tabs.
  const sel = ORDER.filter((k) => selected.includes(k));
  const gridStyle = { gridTemplateColumns: `repeat(${sel.length}, 1fr)` };

  return (
    <section className={styles.section}>
      <div style={{ textAlign: "center" }}>
        <div
          className="sec-eyebrow"
          style={{ justifyContent: "center" }}
          data-reveal
        >
          Elegí informado
        </div>
        <h2 className="sec-h2 sec-h2--light" data-reveal="1">
          Comparador <i>inteligente</i>
        </h2>
        <p className={styles.intro} data-reveal="2">
          Tocá dos tratamientos para comparar lado a lado.
        </p>
      </div>

      <div className={styles.tabs} data-reveal="3">
        {comparadorItems.map((item) => {
          const isSelected = selected.includes(item.key);
          return (
            <button
              key={item.key}
              type="button"
              className={`${styles.tab} ${isSelected ? styles.tabSelected : ""}`}
              aria-pressed={isSelected}
              onClick={() => toggle(item.key)}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className={styles.table}>
        <div className={styles.row} style={gridStyle}>
          {sel.map((k) => (
            <div key={k} className={styles.cell}>
              <span className={styles.cellLabel}>{byKey[k].name}</span>
            </div>
          ))}
        </div>
        {comparadorRows.map((row) => (
          <div key={row.key} className={styles.row} style={gridStyle}>
            {sel.map((k) => (
              <div key={k} className={styles.cell}>
                <span className={styles.cellLabel}>{row.label}</span>
                {byKey[k][row.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
