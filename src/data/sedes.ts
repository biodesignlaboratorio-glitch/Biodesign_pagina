/** Las 2 sedes, verbatim from the original (incluido el embed de Google Maps). */

export interface Sede {
  badge: string;
  name: string;
  /** Address lines (originalmente separadas por <br>) */
  address: string[];
  /** Google Maps embed iframe src */
  mapEmbed: string;
  /** Título accesible del iframe */
  mapTitle: string;
  /** wa.me link */
  whatsapp: string;
  /** "Cómo llegar" link */
  directions: string;
}

export const sedes: Sede[] = [
  {
    badge: "Sede Principal",
    name: "Biodesign Caballito",
    address: ["Páez 2451, Caballito", "Buenos Aires"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.996!2d-58.46744!3d-34.62020!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPáez+2451+Caballito!5e0!3m2!1ses!2sar!4v1",
    mapTitle: "Biodesign Caballito",
    whatsapp: "https://wa.me/5491166431743",
    directions: "https://maps.google.com/?q=-34.620201,-58.467445",
  },
  {
    badge: "Sede GBA",
    name: "Biodesign Canning",
    address: ["Av. Mariano Castex 1140, Piso 6", "Canning, Buenos Aires"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.5!2d-58.51!3d-34.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv+Mariano+Castex+1140+Canning!5e0!3m2!1ses!2sar!4v1",
    mapTitle: "Biodesign Canning",
    whatsapp: "https://wa.me/5491166431743",
    directions: "https://maps.app.goo.gl/NskRMex3UUqZsKFZ9",
  },
];
