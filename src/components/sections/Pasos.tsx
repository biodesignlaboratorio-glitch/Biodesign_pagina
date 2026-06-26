import Image from "next/image";
import styles from "./Pasos.module.css";

const PASOS = [
  {
    num: "01",
    name: "Escaneo Digital",
    desc: "Escaneamos tu boca sin moldes, rápido y preciso.",
    image: "/images/04-escaner.jpg",
    alt: "Escáner",
  },
  {
    num: "02",
    name: "Planificación",
    desc: "Diseñamos digitalmente tu tratamiento para predecir el resultado.",
    image: "/images/05-planificacion.jpg",
    alt: "Planificación",
  },
  {
    num: "03",
    name: "Fabricación",
    desc: "Producimos tus alineadores con la más alta tecnología.",
    image: "/images/06-fabricacion.jpg",
    alt: "Fabricación",
  },
  {
    num: "04",
    name: "Resultado",
    desc: "Seguimiento profesional y evolución constante.",
    image: "/images/07-resultado.jpg",
    alt: "Resultado",
  },
];

export default function Pasos() {
  return (
    <section id="pasos" className={styles.pasos}>
      <h2 className={styles.title} data-reveal>
        Tu nueva sonrisa en 4 pasos
      </h2>
      <div className={styles.grid}>
        {PASOS.map((p, i) => (
          <div
            key={p.num}
            className={styles.paso}
            data-reveal={i === 0 ? "" : String(i)}
          >
            <span className={styles.num}>{p.num}</span>
            <div className={styles.imgWrap}>
              <Image
                className={styles.img}
                src={p.image}
                alt={p.alt}
                width={255}
                height={195}
              />
            </div>
            <div className={styles.line} />
            <span className={styles.name}>{p.name}</span>
            <p className={styles.desc}>{p.desc}</p>
            <span className={styles.arrow}>→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
