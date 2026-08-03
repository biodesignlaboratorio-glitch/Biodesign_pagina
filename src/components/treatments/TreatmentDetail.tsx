import Image from "next/image";
import Link from "next/link";
import type { Treatment } from "@/data/treatments";
import { casos, casosNote } from "@/data/casos";
import { waLink } from "@/lib/whatsapp";
import { WhatsappGlyph } from "@/components/icons";
import Faq from "./Faq";
import CaseCompare from "./CaseCompare";
import InfoFlyers from "./InfoFlyers";
import TreatmentVideos from "./TreatmentVideos";
import TreatmentCases from "./TreatmentCases";
import TreatmentGallery from "./TreatmentGallery";
import TreatmentCtaBanner from "./TreatmentCtaBanner";
import styles from "./TreatmentDetail.module.css";

export default function TreatmentDetail({
  treatment,
}: {
  treatment: Treatment;
}) {
  const caso = casos.find((c) => c.treatmentSlug === treatment.slug);
  const useFlyerLayout = treatment.layout !== "legacy";

  return (
    <article className={styles.inner}>
      <Link href="/tratamientos" className={styles.back}>
        <span className={styles.backArrow} aria-hidden="true">
          ←
        </span>
        Tratamientos
      </Link>

      {!useFlyerLayout ? (
        <>
          <span className={styles.badge}>{treatment.badge}</span>
          <h1 className={styles.title}>{treatment.name}</h1>
          <p className={styles.desc}>{treatment.description}</p>
        </>
      ) : null}

      {useFlyerLayout ? (
        <>
          <div
            className={
              treatment.heroImage ? styles.heroGrid : styles.heroStack
            }
          >
            <div>
              <span className={styles.badge}>{treatment.badge}</span>
              <h1 className={styles.title}>{treatment.name}</h1>
              <p className={styles.desc}>{treatment.description}</p>

              {treatment.warning ? (
                <div className={styles.warning}>{treatment.warning}</div>
              ) : null}
              {treatment.nota ? (
                <div className={styles.nota}>{treatment.nota}</div>
              ) : null}

              <div className={styles.actions}>
                <a
                  className={styles.btnWa}
                  href={waLink(
                    treatment.whatsappNumber,
                    treatment.whatsappMessage,
                  )}
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
            </div>

            {treatment.heroImage ? (
              <div className={styles.heroImageWrap}>
                <Image
                  className={styles.heroImage}
                  src={treatment.heroImage}
                  alt={treatment.name}
                  fill
                  sizes="(max-width: 820px) 100vw, 40vw"
                  priority
                />
              </div>
            ) : null}
          </div>

          <InfoFlyers
            images={treatment.flyerImages}
            treatmentName={treatment.name}
          />

          {treatment.videoPlaceholders?.length ? (
            <TreatmentVideos titles={treatment.videoPlaceholders} />
          ) : null}

          {treatment.gallery?.length ? (
            <TreatmentGallery
              items={treatment.gallery}
              title={treatment.galleryTitle}
              ratio={treatment.galleryRatio}
            />
          ) : treatment.showCasesSection !== false ? (
            <TreatmentCases cases={treatment.cases} ratio={treatment.caseRatio} />
          ) : null}

          <div className={styles.faqWrap}>
            <div className={styles.sectionTitle}>Preguntas frecuentes</div>
            <Faq items={treatment.faqs} twoCol />
          </div>

          <TreatmentCtaBanner treatment={treatment} />
        </>
      ) : (
        <>
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

          {caso ? (
            <div className={styles.cases}>
              <div className={styles.sectionTitle}>Antes y después</div>
              <CaseCompare
                before={caso.before}
                after={caso.after}
                label={caso.label}
                note={casosNote}
              />
            </div>
          ) : null}

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
        </>
      )}
    </article>
  );
}
