import { reviews } from "@/data/reviews";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.header} data-reveal>
        <div>
          <div className="sec-eyebrow">Testimonios</div>
          <h2 className="sec-h2">
            Lo que dicen
            <br />
            <i>nuestros pacientes</i>
          </h2>
        </div>
        <div className={styles.badge}>{"★★★★★  Google Reviews · 5.0"}</div>
      </div>
      <div className={styles.grid}>
        {reviews.map((review, i) => (
          <div
            key={review.name}
            className={styles.card}
            data-reveal={i === 0 ? "" : String(i)}
          >
            <div className={styles.stars}>{"★".repeat(review.stars)}</div>
            <p className={styles.quote}>{`"${review.quote}"`}</p>
            <div className={styles.name}>{review.name}</div>
            <div className={styles.src}>{review.source}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
