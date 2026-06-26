import styles from "./Smile3D.module.css";

/** "Sonrisa 3D" placeholder section (próximamente). */
export default function Smile3D() {
  return (
    <section className={styles.smile3d}>
      <div
        className="sec-eyebrow"
        style={{ justifyContent: "center" }}
        data-reveal
      >
        Próximamente
      </div>
      <h2 className="sec-h2 sec-h2--light" data-reveal="1">
        Explorá tu sonrisa <i>en 3D</i>
      </h2>
      <div className={styles.box} data-reveal="2">
        <svg
          className={styles.icon}
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          aria-hidden="true"
        >
          <path d="M8 20Q8 8 20 8Q32 8 32 20Q32 32 20 32Q8 32 8 20Z" />
          <path d="M14 18Q20 14 26 18M14 23Q20 27 26 23" />
        </svg>
        <p className={styles.label}>
          Experiencia interactiva en desarrollo — vas a poder explorar un modelo
          3D de boca y tocar cada zona para descubrir soluciones personalizadas.
        </p>
      </div>
    </section>
  );
}
