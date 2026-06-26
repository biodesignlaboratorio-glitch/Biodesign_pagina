import { site } from "@/data/site";
import { WhatsappGlyph } from "@/components/icons";
import styles from "./WhatsappFab.module.css";

/** Floating WhatsApp button (bottom-left, opposite the quiz FAB). */
export default function WhatsappFab() {
  return (
    <a
      className={styles.fab}
      href={site.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
    >
      <WhatsappGlyph />
    </a>
  );
}
