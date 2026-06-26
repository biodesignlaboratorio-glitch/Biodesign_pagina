"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { treatments } from "@/data/treatments";
import { waLink } from "@/lib/whatsapp";
import { WhatsappGlyph } from "@/components/icons";
import styles from "./Contacto.module.css";

/**
 * TODO: el HTML original definía los estilos .contacto/.finput/.btn-wa pero
 * NO incluía una sección de contacto ni los campos del formulario. Estos
 * campos y textos son una propuesta coherente con el CSS existente (form-row
 * de 2 columnas + select + textarea). Revisar/ajustar copy y campos.
 */
export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("Por favor, ingresá tu nombre.");
      return;
    }
    if (!telefono.trim()) {
      setError("Por favor, dejanos un teléfono de contacto.");
      return;
    }
    setError("");

    const parts = [
      `Hola! Soy ${nombre.trim()}.`,
      `Mi teléfono es ${telefono.trim()}.`,
      tratamiento ? `Me interesa: ${tratamiento}.` : "",
      mensaje.trim() ? mensaje.trim() : "",
    ].filter(Boolean);

    window.open(
      waLink(site.whatsapp.main, parts.join(" ")),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className={styles.contacto}>
      <div className={styles.inner}>
        <div className="sec-eyebrow sec-eyebrow--center">Contacto</div>
        <h2 className="sec-h2 sec-h2--light">
          Hablemos de tu <i>sonrisa</i>
        </h2>
        <p className={styles.intro}>
          Completá el formulario y te contactamos por WhatsApp a la brevedad.
          También podés escribirnos directamente o reservar tu consulta online.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <input
              className={styles.finput}
              type="text"
              placeholder="Nombre"
              aria-label="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              className={styles.finput}
              type="tel"
              placeholder="Teléfono"
              aria-label="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className={styles.full}>
            <select
              className={styles.finput}
              aria-label="Tratamiento de interés"
              value={tratamiento}
              onChange={(e) => setTratamiento(e.target.value)}
            >
              <option value="">¿Qué tratamiento te interesa?</option>
              {treatments.map((t) => (
                <option key={t.slug} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.full}>
            <textarea
              className={`${styles.finput} ${styles.textarea}`}
              placeholder="Tu mensaje (opcional)"
              aria-label="Mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>

          {error ? (
            <p className={styles.error} role="alert">
              {error}
            </p>
          ) : null}

          <button type="submit" className="btn-wa">
            <WhatsappGlyph width={18} height={18} />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
