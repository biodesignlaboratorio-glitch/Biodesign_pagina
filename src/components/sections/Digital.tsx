import Image from "next/image";
import styles from "./Digital.module.css";

const ITEMS = [
  { name: "Escáner Intraoral", desc: "Sin moldes, lectura precisa en minutos" },
  { name: "Diseño 3D", desc: "Planificación digital antes de iniciar" },
  { name: "Impresión 3D", desc: "Laboratorio propio Smile Line" },
  { name: "Radiología Digital", desc: "Diagnóstico preciso, mínima radiación" },
];

const PHOTOS = [
  "/images/instalaciones-laboratorio-1.jpeg",
  "/images/instalaciones-laboratorio-3.jpeg",
  "/images/instalaciones-laboratorio-5.jpeg",
  "/images/instalaciones-laboratorio-11.jpeg",
];

export default function Digital() {
  return (
    <section id="digital" className={styles.digital}>
      <div className={styles.inner}>
        <div>
          <div className="sec-eyebrow" data-reveal>
            Infraestructura
          </div>
          <h2 className="sec-h2" data-reveal="1">
            Odontología
            <br />
            <i>Digital</i>
          </h2>
          <p className={styles.body} data-reveal="2">
            La tecnología de punta nos permite lograr tratamientos más precisos,
            cómodos y con resultados predecibles.
          </p>
          <div className={styles.items} data-reveal="3">
            {ITEMS.map((item) => (
              <div key={item.name} className={styles.ditem}>
                <div className={styles.ditemName}>{item.name}</div>
                <div className={styles.ditemDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.photoGrid} data-reveal="2">
          {PHOTOS.map((src) => (
            <div key={src} className={styles.photoWrap}>
              <Image
                className={styles.photo}
                src={src}
                alt="Laboratorio Biodesign"
                fill
                sizes="(max-width: 860px) 50vw, 29vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
