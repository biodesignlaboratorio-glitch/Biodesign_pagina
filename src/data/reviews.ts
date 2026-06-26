/** Testimonios — Google Reviews (4), verbatim from the original. */

export interface Review {
  stars: number;
  quote: string;
  name: string;
  source: string;
}

export const reviews: Review[] = [
  {
    stars: 5,
    quote:
      "Una experiencia increíble. El equipo es profesional y el resultado superó mis expectativas.",
    name: "Martina G.",
    source: "Google",
  },
  {
    stars: 5,
    quote:
      "Me hice alineadores y fue todo mucho más fácil de lo que imaginaba. 100% recomendado.",
    name: "Lucas R.",
    source: "Google",
  },
  {
    stars: 5,
    quote:
      "Excelentes profesionales y tecnología de primer nivel. Volvería siempre.",
    name: "Florencia M.",
    source: "Google",
  },
  {
    stars: 5,
    quote: "Me cambiaron la vida. Hoy sonrío sin vergüenza. Gracias BIODESIGN.",
    name: "Juan P.",
    source: "Google",
  },
];
