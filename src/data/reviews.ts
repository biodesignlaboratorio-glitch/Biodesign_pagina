/** Testimonios reales — Google Reviews (solo 5 estrellas), tomados de la ficha de Google Maps. */

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
      "Me pareció excelente la atención tanto de la secretaria como la de la doctora. Es un lugar muy confiable y recomendable.",
    name: "Roxana M.",
    source: "Google",
  },
  {
    stars: 5,
    quote:
      "Te reciben de una forma muy amable y cálida, y la Doctora Lourdes es un amor. 10 de 10 este lugar.",
    name: "Julia B.",
    source: "Google",
  },
  {
    stars: 5,
    quote:
      "Recomiendo mucho este lugar. La Dra. Lourdes te transmite confianza, te guía y te aconseja.",
    name: "Lucía I.",
    source: "Google",
  },
  {
    stars: 5,
    quote:
      "La experiencia fue excelente: la atención, el resultado y el tiempo nulo de espera. Quedé muy feliz.",
    name: "Agustina F.",
    source: "Google",
  },
];
