/**
 * Quiz "Wrapped" (3 preguntas → resultado) — verbatim del original
 * (wrappedQuestions2 + showWrappedResult2).
 */

export interface QuizOption {
  label: string;
  val: string;
}

export interface QuizQuestion {
  text: string;
  opts: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    text: "¿Qué es lo que más te gustaría cambiar?",
    opts: [
      { label: "La alineación de mis dientes", val: "alineacion" },
      { label: "El color / brillo", val: "color" },
      { label: "Piezas faltantes", val: "piezas" },
      { label: "Quiero un cambio más integral", val: "integral" },
    ],
  },
  {
    text: "¿Qué tan rápido querés ver resultados?",
    opts: [
      { label: "Lo antes posible", val: "rapido" },
      { label: "Puedo esperar un proceso gradual", val: "gradual" },
      { label: "No tengo apuro", val: "sinapuro" },
    ],
  },
  {
    text: "¿Cómo te gustaría que se vea el resultado final?",
    opts: [
      { label: "Natural, que no se note el tratamiento", val: "natural" },
      { label: "Una sonrisa luminosa, tipo 'Hollywood'", val: "hollywood" },
      { label: "Funcional ante todo", val: "funcional" },
    ],
  },
];

export interface QuizResult {
  title: string;
  desc: string;
}

/** Misma lógica de prioridad que el original. */
export function getQuizResult(answers: string[]): QuizResult {
  if (answers.includes("hollywood")) {
    return {
      title: "Sonrisa Hollywood",
      desc: "Buscás un cambio notorio y luminoso. Carillas + blanqueamiento son tu combinación ideal.",
    };
  }
  if (answers.includes("integral")) {
    return {
      title: "Rejuvenecimiento Total",
      desc: "Querés un cambio integral. Combinamos tratamientos dentales con estética facial.",
    };
  }
  if (answers.includes("funcional")) {
    return {
      title: "Sonrisa Funcional",
      desc: "Priorizás la función sobre todo. Te recomendamos evaluar implantes o prótesis.",
    };
  }
  return {
    title: "Sonrisa Natural",
    desc: "Preferís resultados sutiles y armoniosos. Alineadores invisibles son tu mejor opción.",
  };
}

export const quizFabLabel = "✨ ¿Cuál es tu sonrisa ideal?";
