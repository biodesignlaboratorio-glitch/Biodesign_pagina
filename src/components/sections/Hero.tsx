import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.kicker} data-reveal>
          {site.locationKicker}
        </p>
        <h1 className={styles.h1} data-reveal="1">
          Tu sonrisa
          <br />
          <span className={styles.gw}>perfecta</span>
        </h1>
        <p className={styles.subtitle} data-reveal="2">
          Donde la estética y la tecnología
          <br />
          se encuentran
        </p>
        <p className={styles.body} data-reveal="3">
          Cada sonrisa es única. Combinamos experiencia clínica, tecnología
          digital y atención completamente personalizada para resultados
          naturales y duraderos.
        </p>
        <div className={styles.actions} data-reveal="4">
          <a
            href={site.reservoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill"
          >
            Reservar consulta
          </a>
          <Link href="/tratamientos" className="btn-line">
            Ver tratamientos
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.photo}
          src="/images/02-biodesign.jpg"
          alt="Biodesign"
          fill
          priority
          sizes="(max-width: 860px) 100vw, 60vw"
        />
      </div>
    </section>
  );
}
