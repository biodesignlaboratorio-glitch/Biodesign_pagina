import Image from "next/image";
import { site } from "@/data/site";
import { WhatsappGlyph, InstagramGlyph, FacebookGlyph } from "@/components/icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Image
          src="/images/01-biodesign-logo.jpg"
          alt="Biodesign logo"
          width={48}
          height={48}
        />
        <div className={styles.brandText}>
          {site.name}
          <span>{site.brandSub}</span>
        </div>
      </div>

      <div>
        <p className={styles.copy}>{site.copyright}</p>
        <div className={styles.social}>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramGlyph />
          </a>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookGlyph />
          </a>
          <a
            href={site.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsappGlyph />
          </a>
        </div>
      </div>

      <div className={styles.contact}>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.url} target="_blank" rel="noopener noreferrer">
          www.{site.domain}
        </a>
      </div>
    </footer>
  );
}
