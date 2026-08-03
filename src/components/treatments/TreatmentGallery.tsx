import Image from "next/image";
import styles from "./TreatmentGallery.module.css";

export default function TreatmentGallery({
  items,
  title = "Casos",
  ratio,
}: {
  items: { image: string; label: string }[];
  title?: string;
  ratio?: string;
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.image} className={styles.card}>
            <div
              className={styles.imgWrap}
              style={ratio ? { aspectRatio: ratio } : undefined}
            >
              <Image
                className={styles.img}
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />
            </div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
