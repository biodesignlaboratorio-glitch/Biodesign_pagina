import type { ReactNode } from "react";
import styles from "./Porque.module.css";

interface PorqueItem {
  icon: ReactNode;
  name: [string, string];
}

const ICON_PROPS = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.2",
  "aria-hidden": true,
} as const;

const ITEMS: PorqueItem[] = [
  {
    name: ["Atención", "personalizada"],
    icon: (
      <svg className={styles.icon} {...ICON_PROPS}>
        <circle cx="20" cy="14" r="7" />
        <path d="M5 37Q5 27 20 27Q35 27 35 37" />
      </svg>
    ),
  },
  {
    name: ["Tecnología", "digital"],
    icon: (
      <svg className={styles.icon} {...ICON_PROPS}>
        <rect x="5" y="8" width="22" height="16" rx="2" />
        <line x1="27" y1="13" x2="35" y2="13" />
        <line x1="27" y1="19" x2="35" y2="19" />
        <line x1="8" y1="32" x2="32" y2="32" />
      </svg>
    ),
  },
  {
    name: ["Laboratorio", "propio"],
    icon: (
      <svg className={styles.icon} {...ICON_PROPS}>
        <rect x="5" y="5" width="30" height="30" rx="2" />
        <path d="M5 15H35" />
        <path d="M15 5V15" />
        <path d="M25 5V15" />
      </svg>
    ),
  },
  {
    name: ["Profesionales", "especializados"],
    icon: (
      <svg className={styles.icon} {...ICON_PROPS}>
        <circle cx="20" cy="13" r="7" />
        <path d="M8 37Q8 27 20 27Q32 27 32 37" />
      </svg>
    ),
  },
  {
    name: ["Seguimiento", "continuo"],
    icon: (
      <svg className={styles.icon} {...ICON_PROPS}>
        <path d="M10 21L17 28L30 13" />
        <circle cx="20" cy="20" r="15" />
      </svg>
    ),
  },
  {
    name: ["Resultados", "naturales"],
    icon: (
      <svg className={styles.icon} {...ICON_PROPS}>
        <circle cx="20" cy="20" r="15" />
        <path d="M12 20Q16 14 20 20Q24 26 28 20" />
      </svg>
    ),
  },
];

/** "¿Por qué elegir Biodesign?" — reused on Inicio and Nosotros. */
export default function Porque() {
  return (
    <section id="porque" className={styles.porque}>
      <div data-reveal>
        <div className="sec-eyebrow">Nuestra diferencia</div>
        <h2 className="sec-h2 sec-h2--light">
          ¿Por qué elegir
          <br />
          <i>Biodesign?</i>
        </h2>
      </div>
      <div className={styles.grid}>
        {ITEMS.map((item, i) => (
          <div
            key={item.name.join(" ")}
            className={styles.pitem}
            data-reveal={i === 0 ? "" : String(i)}
          >
            {item.icon}
            <div className={styles.name}>
              {item.name[0]}
              <br />
              {item.name[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
