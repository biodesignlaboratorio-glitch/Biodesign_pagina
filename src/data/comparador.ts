/**
 * Comparador inteligente — datos verbatim del original (comp2Data).
 * El usuario elige hasta 2 tratamientos y se muestran lado a lado.
 */

export interface ComparadorItem {
  key: string;
  name: string;
  duracion: string;
  visibilidad: string;
  comodidad: string;
  precio: string;
}

export const comparadorItems: ComparadorItem[] = [
  {
    key: "alineadores",
    name: "Alineadores",
    duracion: "6-18 meses",
    visibilidad: "Invisible",
    comodidad: "Alta — removibles",
    precio: "$1.050.000",
  },
  {
    key: "brackets",
    name: "Brackets",
    duracion: "18-36 meses",
    visibilidad: "Visible",
    comodidad: "Media — fijos",
    precio: "$1.500.000",
  },
  {
    key: "carillas",
    name: "Carillas",
    duracion: "1-3 sesiones",
    visibilidad: "Resultado inmediato",
    comodidad: "Alta — sin aparatos",
    precio: "Según piezas",
  },
  {
    key: "implantes",
    name: "Implantes",
    duracion: "4-8 meses",
    visibilidad: "Resultado final natural",
    comodidad: "Cirugía + recuperación",
    precio: "Según caso",
  },
];

/** Filas de la tabla, en orden, con su etiqueta. */
export const comparadorRows: { key: keyof ComparadorItem; label: string }[] = [
  { key: "duracion", label: "Duración" },
  { key: "visibilidad", label: "Visibilidad" },
  { key: "comodidad", label: "Comodidad" },
  { key: "precio", label: "Precio desde" },
];

/** Selección inicial (como en el original: alineadores + carillas). */
export const comparadorDefault = ["alineadores", "carillas"];
