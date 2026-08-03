import styles from "./TreatmentVideos.module.css";

/** Videos del tratamiento — placeholder hasta tener los videos finales. */
export default function TreatmentVideos({ titles }: { titles: string[] }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.sectionTitle}>Videos del tratamiento</div>
      <div className={styles.grid}>
        {titles.map((title) => (
          <div key={title} className={styles.card}>
            <div className={styles.thumb}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M10 8.5v7l6-3.5-6-3.5Z"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <span className={styles.soon}>Video próximamente</span>
            </div>
            <div className={styles.title}>{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
