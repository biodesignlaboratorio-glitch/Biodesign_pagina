import type { Treatment } from "@/data/treatments";
import { waLink } from "@/lib/whatsapp";
import { WhatsappGlyph } from "@/components/icons";
import styles from "./TreatmentCtaBanner.module.css";

export default function TreatmentCtaBanner({
  treatment,
}: {
  treatment: Treatment;
}) {
  return (
    <div className={styles.banner}>
      <div>
        <div className={styles.title}>¿Listo para transformar tu sonrisa?</div>
        <p className={styles.sub}>
          Solicitá tu evaluación y comenzá hoy tu tratamiento con{" "}
          {treatment.name}.
        </p>
      </div>
      <div className={styles.actions}>
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
          Reservar consulta
        </a>
      </div>
    </div>
  );
}
