import styles from "./Tour.module.css";

/** Recorrido en video del consultorio — placeholder hasta tener el video final. */
export default function Tour() {
  return (
    <section className={styles.tour}>
      <div className={styles.box}>
        <div
          className="sec-eyebrow sec-eyebrow--center"
          style={{ color: "var(--gold)" }}
          data-reveal
        >
          Conocé el lugar
        </div>
        <h2 className="sec-h2 sec-h2--light" data-reveal="1">
          Recorré nuestro <i>consultorio</i>
        </h2>
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          aria-hidden="true"
          data-reveal="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" stroke="none" />
        </svg>
        <p className={styles.label} data-reveal="2">
          Video próximamente
        </p>
      </div>
    </section>
  );
}
