import Image from "next/image";
import { site } from "@/data/site";
import styles from "./SmileLine.module.css";

const CHECKS = [
  "Invisibles y removibles",
  "Diseño 3D completamente personalizado",
  "Sin urgencias ni emergencias",
  "Resultados predecibles antes de comenzar",
  "Laboratorio propio Smile Line",
];

export default function SmileLine() {
  return (
    <section id="smileline" className={styles.smileline}>
      <div className={styles.left}>
        <span className={styles.badge}>Tecnología exclusiva</span>
        <h2 className={styles.h}>
          SMILE LINE
          <br />
          <i>Alineadores Invisibles</i>
        </h2>
        <p className={styles.sub} data-reveal>
          Tratamientos personalizados, cómodos y estéticos para corregir tu
          sonrisa sin brackets. Diseñados digitalmente para cada paciente.
        </p>
        <ul className={styles.checks} data-reveal="1">
          {CHECKS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <a
          href={site.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-fill"
          data-reveal="2"
          style={{ width: "fit-content" }}
        >
          Quiero evaluar mi sonrisa →
        </a>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.img}
          src="/images/03-alineador-smile-line.jpg"
          alt="Alineador Smile Line"
          fill
          sizes="(max-width: 860px) 100vw, 60vw"
        />
      </div>
    </section>
  );
}
