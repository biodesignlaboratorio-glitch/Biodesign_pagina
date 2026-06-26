/**
 * Global site data — single source of truth for contact details, payment
 * methods, socials and brand strings. All values copied verbatim from the
 * original reference/index.html.
 */

export interface PaymentMethod {
  icon: string;
  label: string;
  tag?: string;
}

export const site = {
  name: "BIODESIGN",
  /** Sub-line under the logo */
  tagline: "Odontología & Estética",
  /** Footer brand sub-line */
  brandSub: "Tu Sonrisa Perfecta",
  /** Hero kicker / location line */
  locationKicker: "Caballito · Canning · Buenos Aires",

  domain: "biodesign-argentina.com",
  url: "https://www.biodesign-argentina.com",
  email: "info@biodesign-argentina.com",
  /** Alias de pago */
  alias: "biodesign.arg",

  whatsapp: {
    /** +54 9 11 6643 1743 — número principal */
    main: "5491166431743",
    /** Blanqueamiento Dental & Estética Facial */
    estetica: "5491156656212",
  },

  /** Reserva online (Reservo) */
  reservoUrl:
    "https://agendamiento.reservo.cl/makereserva/agenda/50LDIr1030lVV93n7x79caV021814i",

  social: {
    instagram: "https://instagram.com/tusonrisa.perfecta",
    // TODO: el original sólo enlazaba a "https://facebook.com" (genérico).
    // Confirmar la URL exacta de la página de Facebook de Biodesign.
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/5491166431743",
  },

  paymentMethods: [
    { icon: "💵", label: "Efectivo" },
    { icon: "🔁", label: "Transferencia", tag: "+10%" },
    { icon: "💳", label: "Tarjeta crédito", tag: "+20%" },
    { icon: "🏦", label: "BBVA — 3 cuotas sin interés (viernes y sábados)" },
  ] as PaymentMethod[],

  copyright: "© 2026 Biodesign Argentina",
};

export type Site = typeof site;
