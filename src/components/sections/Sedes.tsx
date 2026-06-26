import { sedes } from "@/data/sedes";
import styles from "./Sedes.module.css";

export default function Sedes() {
  return (
    <section id="sedes" className={styles.sedes}>
      <div style={{ textAlign: "center" }} data-reveal>
        <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
          <span className={styles.eyebrowLine} />
          Dónde encontrarnos
          <span className={styles.eyebrowLine} />
        </div>
        <h2 className="sec-h2">
          Nuestras <i>sedes</i>
        </h2>
      </div>

      <div className={styles.grid}>
        {sedes.map((sede, i) => (
          <div
            key={sede.name}
            className={styles.scard}
            data-reveal={i === 0 ? "" : "1"}
          >
            <iframe
              className={styles.map}
              src={sede.mapEmbed}
              title={sede.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className={styles.body}>
              <div className={styles.badge}>{sede.badge}</div>
              <div className={styles.name}>{sede.name}</div>
              <div className={styles.addr}>
                {sede.address.map((line, idx) => (
                  <span key={line}>
                    {line}
                    {idx < sede.address.length - 1 ? <br /> : null}
                  </span>
                ))}
              </div>
              <div className={styles.btns}>
                <a
                  href={sede.whatsapp}
                  className="btn-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp ↗
                </a>
                <a
                  href={sede.directions}
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
