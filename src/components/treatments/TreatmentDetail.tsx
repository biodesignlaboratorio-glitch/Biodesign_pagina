import Image from "next/image";
import Link from "next/link";
import type { Treatment } from "@/data/treatments";
import { waLink } from "@/lib/whatsapp";
import { WhatsappGlyph } from "@/components/icons";
import Faq from "./Faq";
import styles from "./TreatmentDetail.module.css";

export default function TreatmentDetail({
  treatment,
}: {
  treatment: Treatment;
}) {
  return (
    <article className={styles.inner}>
      <Link href="/tratamientos" className={styles.back}>
        ← Tratamientos
      </Link>

      <span className={styles.badge}>{treatment.badge}</span>
      <h1 className={styles.title}>{treatment.name}</h1>
      <p className={styles.desc}>{treatment.description}</p>

      <div className={styles.grid}>
        <div>
          <div className={styles.sectionTitle}>Proceso del tratamiento</div>
          <div className={styles.steps}>
            {treatment.process.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div>
                  <div className={styles.stepName}>{step.name}</div>
                  <div className={styles.stepDesc}>{step.desc}</div>
                </div>
                <div className={styles.stepPrice}>{step.price}</div>
              </div>
            ))}
          </div>

          {treatment.warning ? (
            <div className={styles.warning}>{treatment.warning}</div>
          ) : null}
          {treatment.nota ? (
            <div className={styles.nota}>{treatment.nota}</div>
          ) : null}

          <a
            className={styles.btnWa}
            href={waLink(treatment.whatsappNumber, treatment.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappGlyph width={18} height={18} />
            Consultar por WhatsApp
          </a>
          <a
            className={styles.btnReserva}
            href={treatment.reservoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar consulta →
          </a>
        </div>

        <div>
          <div className={styles.sectionTitle}>Precios</div>
          <div className={styles.prices}>
            {treatment.prices.map((p) => (
              <div key={p.label} className={styles.priceItem}>
                <div className={styles.priceLabel}>{p.label}</div>
                <div className={styles.priceVal}>{p.val}</div>
              </div>
            ))}
          </div>

          <div className={styles.payment}>
            <div className={styles.paymentTitle}>Métodos de pago</div>
            {treatment.paymentMethods.map((m) => (
              <div key={m.label} className={styles.paymentItem}>
                <span>
                  {m.icon} {m.label}
                </span>
                {m.tag ? <span className={styles.tag}>{m.tag}</span> : null}
              </div>
            ))}
            <div className={styles.paymentAlias}>
              Alias: <strong>{treatment.alias}</strong>
            </div>
          </div>

          <div className={styles.sectionTitle} style={{ marginTop: "28px" }}>
            Preguntas frecuentes
          </div>
          <Faq items={treatment.faqs} />
        </div>
      </div>

      {treatment.relatedCaseImages.length > 0 ? (
        <div className={styles.cases}>
          <div className={styles.sectionTitle}>Casos relacionados</div>
          <div className={styles.casesRow}>
            {treatment.relatedCaseImages.map((src, i) => (
              <div key={src + i} className={styles.caseCard}>
                <Image
                  className={styles.caseImg}
                  src={src}
                  alt={`Caso ${i + 1}`}
                  fill
                  sizes="280px"
                />
                <div className={styles.casePlayWrap}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className={styles.caseOverlay}>
                  <div className={styles.caseName}>Caso real</div>
                  <div className={styles.casePlay}>Ver video</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
