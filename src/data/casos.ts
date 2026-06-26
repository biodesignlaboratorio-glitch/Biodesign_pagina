/**
 * Casos (slider antes/después) + estadísticas — verbatim del original.
 * Nota: en el original "antes" y "después" usan la misma imagen de muestra;
 * el "antes" se ve en escala de grises por CSS. Reemplazar por fotos reales.
 */

export interface CasoTab {
  label: string;
  before: string;
  after: string;
}

export const casos: CasoTab[] = [
  { label: "ALINEADORES", before: "/images/15-image.jpg", after: "/images/15-image.jpg" },
  { label: "CARILLAS", before: "/images/16-image.jpg", after: "/images/16-image.jpg" },
  { label: "IMPLANTES", before: "/images/17-image.jpg", after: "/images/17-image.jpg" },
  { label: "REHABILITACIÓN", before: "/images/18-image.jpg", after: "/images/18-image.jpg" },
  { label: "BLANQUEAMIENTO", before: "/images/18-image.jpg", after: "/images/18-image.jpg" },
];

export const casosNote =
  "* Imagen de muestra — reemplazá por fotos reales de antes/después de cada caso";

export interface Stat {
  /** Valor objetivo del contador */
  value: number;
  /** Decimales a mostrar (ej. Rating Google = 5.0) */
  decimals?: number;
  label: string;
}

export const stats: Stat[] = [
  { value: 5000, label: "Pacientes tratados" },
  { value: 5, decimals: 1, label: "Rating Google" },
  { value: 10, label: "Años de experiencia" },
  { value: 8000, label: "Tratamientos realizados" },
];
