import Image from "next/image";
import styles from "./InfoFlyers.module.css";

export default function InfoFlyers({
  images = [],
  treatmentName,
}: {
  images?: string[];
  treatmentName: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.sectionTitle}>Información del tratamiento</div>

      {images.length > 0 ? (
        <>
          <div className={styles.grid}>
            {images.map((src, i) => (
              <div key={src} className={styles.flyer}>
                <Image
                  src={src}
                  alt={`Información — ${treatmentName} (${i + 1})`}
                  width={1024}
                  height={1536}
                  sizes="(max-width: 820px) 100vw, 480px"
                />
              </div>
            ))}
          </div>
          <a className={styles.download} href={images[0]} download>
            Descargar información (imagen)
          </a>
        </>
      ) : (
        <div className={styles.placeholder}>
          <svg
            className={styles.placeholderIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            aria-hidden="true"
          >
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M8 8h8M8 12h8M8 16h5" />
          </svg>
          <span className={styles.placeholderText}>
            Flyer próximamente
          </span>
        </div>
      )}
    </div>
  );
}
