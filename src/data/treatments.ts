export interface ProcessStep { num: string; name: string; desc: string; price: string; }
export interface PriceItem { label: string; val: string; }
export interface PaymentMethod { icon: string; label: string; tag?: string; }
export interface Faq { q: string; a: string; }
export interface Treatment {
  slug: string;
  name: string;
  badge: string;            // panel .tpanel-badge
  gridBadge: string;        // grid card badge (provided above)
  description: string;      // panel .tpanel-desc
  gridDescription: string;  // grid card desc (provided above)
  image: string;            // provided above
  process: ProcessStep[];
  prices: PriceItem[];
  paymentMethods: PaymentMethod[];
  alias: string;
  faqs: Faq[];
  whatsappNumber: string;
  whatsappMessage: string;
  reservoUrl: string;
  relatedCaseImages: string[];
  warning?: string;
  nota?: string;
}

const STANDARD_PAYMENT_METHODS: PaymentMethod[] = [
  { icon: "💵", label: "Efectivo" },
  { icon: "🔁", label: "Transferencia", tag: "+10%" },
  { icon: "💳", label: "Tarjeta crédito", tag: "+20%" },
  { icon: "🏦", label: "BBVA — 3 cuotas sin interés (viernes y sábados)" },
];

const RESERVO_URL = "https://agendamiento.reservo.cl/makereserva/agenda/50LDIr1030lVV93n7x79caV021814i";

const TP_CASE_IMGS = ["/images/15-image.jpg", "/images/16-image.jpg", "/images/17-image.jpg"];

export const treatments: Treatment[] = [
  {
    slug: "alineadores",
    name: "Alineadores Invisibles",
    badge: "Smile Line",
    gridBadge: "Smile Line",
    description: "Los alineadores Smile Line son aparatos removibles y transparentes que corrigen la posición de tus dientes de forma gradual. El tratamiento se planifica digitalmente antes de comenzar.",
    gridDescription: "Corregí tu sonrisa de forma cómoda, estética y predecible con tecnología Smile Line.",
    image: "/images/08-alineadores-invisibles.jpg",
    process: [
      { num: "01", name: "Primera consulta", desc: "Evaluación clínica y radiográfica. Si ya tenés estudios, traelos.", price: "$20.000 (se descuenta del total)" },
      { num: "02", name: "Diagnóstico y presupuesto", desc: "Si estás de acuerdo con el plan, avanzás al siguiente paso.", price: "$1.050.000 efectivo" },
      { num: "03", name: "Escaneo intraoral", desc: "Escaneamos tu boca digitalmente — sin moldes.", price: "Incluido" },
      { num: "04", name: "¡Primer alineador!", desc: "Empezás tu tratamiento. Controles cada 20-30 días.", price: "$50.000 por control" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "$1.050.000 (efectivo)" },
      { label: "Controles", val: "$50.000/mes" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Cuánto dura el tratamiento?", a: "En promedio entre 6 y 18 meses según el caso." },
      { q: "¿Me los puedo sacar?", a: "Sí, son removibles. Se recomienda usarlos 22hs por día." },
      { q: "¿Duele?", a: "Puede haber leve sensibilidad los primeros días de cada alineador nuevo." },
      { q: "¿Se nota que los uso?", a: "Son prácticamente invisibles." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Alineadores Invisibles. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    badge: "Brackets",
    gridBadge: "Brackets",
    description: "La ortodoncia con brackets es el tratamiento clásico para corregir la alineación dental. Ofrecemos brackets metálicos y cerámicos adaptados a cada caso.",
    gridDescription: "Brackets metálicos y cerámicos para corregir la posición de tus dientes.",
    image: "/images/09-ortodoncia.jpg",
    process: [
      { num: "01", name: "Primera consulta", desc: "Evaluación clínica y radiográfica completa.", price: "$20.000 (se descuenta del total)" },
      { num: "02", name: "Diagnóstico", desc: "Definimos el tipo de brackets más adecuado para tu caso.", price: "$1.500.000 promocional efectivo" },
      { num: "03", name: "Colocación de brackets", desc: "Segunda cita: armado y cementado.", price: "Incluido" },
      { num: "04", name: "Controles mensuales", desc: "Ajustes cada 30 días.", price: "$50.000 por control" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "$1.500.000 promocional (efectivo)" },
      { label: "Controles", val: "$50.000/mes" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Cuánto dura?", a: "Entre 18 meses y 3 años según la complejidad." },
      { q: "¿Las contenciones están incluidas?", a: "No, tienen costo independiente." },
      { q: "¿Metálicos o cerámicos?", a: "Te asesoramos en la consulta según tu caso y preferencia." },
      { q: "¿Puedo comer de todo?", a: "Algunos alimentos hay que evitarlos. Te damos una guía." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Ortodoncia. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
    warning: "⚠️ Contenciones post tratamiento no incluidas.",
  },
  {
    slug: "carillas",
    name: "Carillas Estéticas",
    badge: "Veneers",
    gridBadge: "Veneers",
    description: "Las carillas son finas láminas que se colocan sobre la superficie frontal de los dientes. Permiten cambiar forma, tamaño y color con mínima preparación.",
    gridDescription: "Laminados de porcelana o resina para transformar tu sonrisa con mínima intervención.",
    image: "/images/10-carillas-esteticas.jpg",
    process: [
      { num: "01", name: "Consulta y diagnóstico", desc: "Evaluamos tu sonrisa y definimos el material adecuado.", price: "$20.000" },
      { num: "02", name: "Diseño de sonrisa", desc: "Planificamos digitalmente el resultado final.", price: "Incluido" },
      { num: "03", name: "Preparación", desc: "Mínima preparación del esmalte. 1-3 sesiones según material.", price: "Incluido" },
      { num: "04", name: "Colocación y pulido", desc: "Cementado definitivo y ajuste final.", price: "Incluido" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según cantidad de piezas y material" },
      { label: "Controles", val: "Resinas c/4-6 meses · Cerámicas c/6 meses" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Resina o cerámica?", a: "Las resinas son más económicas. Las cerámicas más duraderas y naturales." },
      { q: "¿Duele?", a: "Se realiza con anestesia local." },
      { q: "¿Cuánto duran?", a: "Resinas 5-7 años, cerámicas 15 años o más con cuidados." },
      { q: "¿Puedo blanquearlas?", a: "No, el color se define antes de colocarlas." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Carillas Estéticas. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
  },
  {
    slug: "blanqueamiento",
    name: "Blanqueamiento Dental",
    badge: "Estética",
    gridBadge: "Estética",
    description: "El blanqueamiento clínico es realizado por especialistas en estética dental. Resultados visibles desde la primera sesión con técnica segura.",
    gridDescription: "Protocolo profesional para una sonrisa notablemente más luminosa y uniforme.",
    image: "/images/11-blanqueamiento-dental.jpg",
    process: [
      { num: "01", name: "Consulta previa", desc: "Evaluamos el estado de tus dientes para confirmar que sos candidato/a.", price: "Consultar" },
      { num: "02", name: "Protección", desc: "Protegemos encías y tejidos blandos.", price: "Incluido" },
      { num: "03", name: "Aplicación del gel", desc: "Agente blanqueador activado con luz LED.", price: "Incluido" },
      { num: "04", name: "Resultado inmediato", desc: "La diferencia se ve desde la primera sesión.", price: "Incluido" },
    ],
    prices: [
      { label: "Tratamiento", val: "Consultar por WhatsApp" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Cuántos tonos aclara?", a: "En promedio entre 4 y 8 tonos." },
      { q: "¿Duele?", a: "Puede haber sensibilidad temporal que desaparece en 24-48hs." },
      { q: "¿Cuánto dura el resultado?", a: "Entre 1 y 2 años según hábitos." },
      { q: "¿Puedo blanquear si tengo carillas?", a: "Las restauraciones no blanquean. Lo evaluamos previamente." },
    ],
    whatsappNumber: "5491156656212",
    whatsappMessage: "Hola! Me interesa el tratamiento de Blanqueamiento Dental. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
    nota: "💜 Para blanqueamiento trabajamos con un equipo especializado. Escribinos al WhatsApp de estética.",
  },
  {
    slug: "implantes",
    name: "Implantes Dentales",
    badge: "Implantología",
    gridBadge: "Implantología",
    description: "Los implantes dentales son la solución definitiva para reemplazar piezas perdidas. Se colocan en el hueso y actúan como raíz artificial para la corona definitiva.",
    gridDescription: "Recuperá la funcionalidad y estética con implantes de titanio de alta precisión.",
    image: "/images/12-implantes-dentales.jpg",
    process: [
      { num: "01", name: "Consulta y diagnóstico", desc: "Evaluación clínica, radiográfica y de hueso si corresponde.", price: "$20.000" },
      { num: "02", name: "Fase quirúrgica", desc: "Colocación del implante de titanio. Oseointegración: 3-6 meses.", price: "Incluido en presupuesto" },
      { num: "03", name: "Oseointegración", desc: "El implante se funde con el hueso durante la cicatrización.", price: "Sin costo adicional" },
      { num: "04", name: "Fase protésica", desc: "Colocación del pilar y la corona definitiva.", price: "Incluido en presupuesto" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según caso clínico" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Duele la cirugía?", a: "Se hace con anestesia local. El post-op es manejable con analgésicos." },
      { q: "¿Cuánto dura el proceso?", a: "Entre 4 y 8 meses en total." },
      { q: "¿Con poco hueso puedo tener implantes?", a: "En muchos casos sí, con injerto óseo previo." },
      { q: "¿Cuánto duran?", a: "Con buena higiene y controles, pueden durar toda la vida." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Implantes Dentales. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
    warning: "⚠️ El día de la cirugía concurrí acompañado/a.",
  },
  {
    slug: "cirugias",
    name: "Cirugías Dentales",
    badge: "Cirugía",
    gridBadge: "Cirugía",
    description: "Realizamos extracciones de distintos grados: simples, complejas y cirugías de muelas del juicio o cordales incluidas.",
    gridDescription: "Extracciones simples y complejas realizadas con el máximo cuidado.",
    image: "/images/13-cirugias-dentales.jpg",
    process: [
      { num: "01", name: "Consulta y diagnóstico", desc: "Evaluación clínica y radiográfica del diente a extraer.", price: "$20.000" },
      { num: "02", name: "Planificación", desc: "Definimos el tipo de extracción y el protocolo quirúrgico.", price: "Incluido" },
      { num: "03", name: "Intervención", desc: "Bajo anestesia local. Duración según complejidad.", price: "Incluido en presupuesto" },
      { num: "04", name: "Postoperatorio", desc: "Indicaciones detalladas de cuidados y medicación.", price: "Sin costo" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según complejidad" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Duele?", a: "Se realiza con anestesia local." },
      { q: "¿Cuánto tarda en sanar?", a: "Cicatrización inicial 7-10 días." },
      { q: "¿Cuándo puedo comer?", a: "Alimentos blandos y fríos las primeras 24-48hs." },
      { q: "¿Me van a internar?", a: "No, es ambulatoria. Hay que ir acompañado/a." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Cirugías Dentales. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
    warning: "⚠️ Concurrí acompañado/a el día de la intervención.",
  },
  {
    slug: "general",
    name: "Odontología General",
    badge: "Prevención",
    gridBadge: "Prevención",
    description: "Realizamos controles periódicos, limpiezas profesionales y tratamiento de caries para mantener tu boca sana.",
    gridDescription: "Limpieza, diagnóstico y tratamiento de caries. La base de tu salud bucal.",
    image: "/images/09-ortodoncia.jpg",
    process: [
      { num: "01", name: "Consulta diagnóstico", desc: "Revisación completa y detección de caries.", price: "$20.000" },
      { num: "02", name: "Limpieza profesional", desc: "Remoción de sarro y placa bacteriana.", price: "Incluido o según caso" },
      { num: "03", name: "Tratamiento de caries", desc: "Restauración con composite del color del diente.", price: "Según cantidad" },
      { num: "04", name: "Plan de controles", desc: "Frecuencia personalizada de controles.", price: "Sin costo" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según tratamiento" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Cada cuánto debo hacerme limpieza?", a: "Cada 6 meses como mínimo." },
      { q: "¿La obturación duele?", a: "Se realiza con anestesia local." },
      { q: "¿Qué pasa si no trato una caries?", a: "Puede avanzar y necesitar conducto o extracción." },
      { q: "¿Emiten factura para obra social?", a: "Sí, emitimos factura para solicitar reintegro." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Odontología General. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
  },
  {
    slug: "restauradora",
    name: "Odontología Restauradora",
    badge: "Restauraciones",
    gridBadge: "Restauraciones",
    description: "Recuperamos dientes dañados por caries, fracturas o desgaste con materiales de última generación para resultados estéticos y duraderos.",
    gridDescription: "Restauraciones estéticas y funcionales para recuperar tus dientes dañados.",
    image: "/images/09-ortodoncia.jpg",
    process: [
      { num: "01", name: "Diagnóstico", desc: "Evaluamos el diente y definimos el tipo de restauración.", price: "$20.000" },
      { num: "02", name: "Preparación", desc: "Remoción del tejido dañado y preparación de la cavidad.", price: "Incluido" },
      { num: "03", name: "Restauración", desc: "Colocación del material restaurador.", price: "Según caso" },
      { num: "04", name: "Pulido y ajuste", desc: "Pulido final y verificación de oclusión.", price: "Incluido" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según caso" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Qué es una restauración Clase I-V?", a: "Son clasificaciones según ubicación y extensión de la caries." },
      { q: "¿Cuánto dura el composite?", a: "Entre 5 y 10 años con buena higiene." },
      { q: "¿Se nota la restauración?", a: "Usamos composite del color de tu diente." },
      { q: "¿Emiten factura?", a: "Sí, podés solicitar reintegro a tu obra social." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Odontología Restauradora. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
  },
  {
    slug: "periodoncia",
    name: "Periodoncia",
    badge: "Encías",
    gridBadge: "Encías",
    description: "La periodoncia se ocupa de la salud de las encías y el hueso que sostiene los dientes. El tratamiento a tiempo puede prevenir la pérdida dental.",
    gridDescription: "Tratamiento de gingivitis, periodontitis y cirugía periodontal.",
    image: "/images/09-ortodoncia.jpg",
    process: [
      { num: "01", name: "Diagnóstico periodontal", desc: "Evaluación de encías, medición de bolsas y análisis radiográfico.", price: "$20.000" },
      { num: "02", name: "Raspaje y alisado", desc: "Limpieza profunda bajo la línea de encía.", price: "Incluido en presupuesto" },
      { num: "03", name: "Reevaluación", desc: "A las 4-6 semanas evaluamos la respuesta.", price: "Sin costo" },
      { num: "04", name: "Cirugía periodontal", desc: "En casos avanzados puede ser necesaria.", price: "Según caso" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según caso clínico" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Cómo sé si tengo periodontitis?", a: "Síntomas: encías que sangran, mal aliento, dientes que se mueven." },
      { q: "¿Tiene cura?", a: "Se puede controlar y detener su avance." },
      { q: "¿Duele el raspaje?", a: "Se realiza con anestesia local." },
      { q: "¿Emiten factura?", a: "Sí, para reintegro de obra social." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Periodoncia. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    badge: "Conducto",
    gridBadge: "Conducto",
    description: "La endodoncia permite salvar un diente con la pulpa comprometida. Se realiza bajo anestesia local y es prácticamente indoloro.",
    gridDescription: "Tratamiento de conducto con anestesia local para salvar tu diente.",
    image: "/images/09-ortodoncia.jpg",
    process: [
      { num: "01", name: "Diagnóstico", desc: "Evaluación clínica y radiográfica.", price: "$20.000" },
      { num: "02", name: "Acceso y limpieza", desc: "Remoción de la pulpa afectada.", price: "Incluido" },
      { num: "03", name: "Obturación", desc: "Sellado de los conductos con material biocompatible.", price: "Incluido" },
      { num: "04", name: "Restauración definitiva", desc: "El diente requiere corona o restauración post conducto.", price: "A presupuestar" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según cantidad de raíces" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Duele?", a: "El mito del dolor es exagerado — con anestesia local es tolerable." },
      { q: "¿Cuántas sesiones?", a: "En general 1 a 3 según complejidad." },
      { q: "¿Por qué necesito corona después?", a: "El diente queda más frágil y la corona lo protege." },
      { q: "¿Emiten factura?", a: "Sí, para reintegro de obra social." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Endodoncia. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
    warning: "⚠️ Una vez finalizado, el diente requiere corona o restauración definitiva (costo independiente).",
  },
  {
    slug: "placas",
    name: "Placas Dentales",
    badge: "Bruxismo",
    gridBadge: "Bruxismo",
    description: "Fabricamos placas dentales a medida para proteger de bruxismo, mantener resultados ortodóncicos o proteger en deportes.",
    gridDescription: "Contenciones, placa de bruxismo y placa deportiva a medida.",
    image: "/images/09-ortodoncia.jpg",
    process: [
      { num: "01", name: "Consulta", desc: "Evaluamos tu necesidad y definimos el tipo de placa.", price: "$20.000" },
      { num: "02", name: "Registro de mordida", desc: "Toma de impresión o escaneo digital.", price: "Incluido" },
      { num: "03", name: "Fabricación", desc: "La placa se confecciona en laboratorio especializado.", price: "Incluido en presupuesto" },
      { num: "04", name: "Entrega y ajuste", desc: "Probamos y ajustamos para máxima comodidad.", price: "Incluido" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según tipo" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Cuánto dura una placa?", a: "Entre 3 y 5 años con buen cuidado." },
      { q: "¿Cómo la limpio?", a: "Con cepillo suave y agua fría." },
      { q: "¿Cura el bruxismo?", a: "No lo cura pero protege los dientes del desgaste." },
      { q: "¿Emiten factura?", a: "Sí, podés solicitar reintegro." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Placas Dentales. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
  },
  {
    slug: "protesis-fija",
    name: "Prótesis Fija",
    badge: "Coronas · Puentes",
    gridBadge: "Coronas · Puentes",
    description: "La prótesis fija incluye coronas, puentes e incrustaciones que se cementan y no se retiran, devolviendo función y estética de forma permanente.",
    gridDescription: "Coronas, puentes e incrustaciones para restaurar dientes dañados o ausentes.",
    image: "/images/09-ortodoncia.jpg",
    process: [
      { num: "01", name: "Diagnóstico", desc: "Evaluamos el diente y definimos el tipo de restauración.", price: "$20.000" },
      { num: "02", name: "Preparación dentaria", desc: "Tallado del diente para recibir la corona o puente.", price: "Incluido" },
      { num: "03", name: "Provisorio", desc: "Restauración provisoria mientras se fabrica la definitiva.", price: "Incluido" },
      { num: "04", name: "Colocación definitiva", desc: "Cementado con ajuste de oclusión.", price: "Incluido en presupuesto" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según caso" },
      { label: "Controles", val: "Controles cada 6 meses" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Cuánto dura una corona?", a: "Con cuidados entre 10 y 20 años." },
      { q: "¿Qué materiales usan?", a: "Zirconio, porcelana sobre metal o metal según el caso." },
      { q: "¿Cómo la cuido?", a: "Igual que tus dientes: cepillado, hilo dental y controles." },
      { q: "¿Emiten factura?", a: "Sí, para reintegro de obra social." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Prótesis Fija. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
  },
  {
    slug: "protesis-removible",
    name: "Prótesis Removible",
    badge: "PPR · PTR",
    gridBadge: "PPR · PTR",
    description: "La prótesis removible reemplaza uno o varios dientes y se puede retirar para higiene. Ofrecemos PPR, PTR, estructura metálica e híbrida.",
    gridDescription: "Prótesis parcial o total removible, estructura metálica o híbrida.",
    image: "/images/09-ortodoncia.jpg",
    process: [
      { num: "01", name: "Diagnóstico", desc: "Evaluación clínica y definición del tipo de prótesis.", price: "$20.000" },
      { num: "02", name: "Impresiones", desc: "Toma de modelos para el laboratorio.", price: "Incluido" },
      { num: "03", name: "Pruebas", desc: "Prueba de dientes y estructura antes de terminar.", price: "Incluido" },
      { num: "04", name: "Entrega y ajuste", desc: "Prótesis terminada con ajustes necesarios.", price: "Incluido en presupuesto" },
    ],
    prices: [
      { label: "Reserva de turno", val: "$20.000" },
      { label: "Tratamiento", val: "Según caso" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Cuánto tarda la adaptación?", a: "2 a 4 semanas. Al principio puede molestar un poco." },
      { q: "¿Cómo la limpio?", a: "Con cepillo y jabón neutro fuera de la boca." },
      { q: "¿Cuánto dura?", a: "Entre 5 y 10 años según uso y cambios en la boca." },
      { q: "¿Emiten factura?", a: "Sí, para reintegro de obra social." },
    ],
    whatsappNumber: "5491166431743",
    whatsappMessage: "Hola! Me interesa el tratamiento de Prótesis Removible. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
  },
  {
    slug: "estetica-facial",
    name: "Estética Facial",
    badge: "Facial",
    gridBadge: "Facial",
    description: "Trabajamos con un equipo especializado en estética facial para complementar y armonizar los resultados dentales con el resto del rostro.",
    gridDescription: "Tratamientos estéticos faciales para una armonía total con tu sonrisa.",
    image: "/images/13-cirugias-dentales.jpg",
    process: [
      { num: "01", name: "Consulta", desc: "Evaluación facial y definición del plan de tratamiento.", price: "Consultar" },
      { num: "02", name: "Planificación", desc: "Diseñamos el tratamiento de forma personalizada.", price: "Incluido" },
      { num: "03", name: "Procedimiento", desc: "Realizado por especialistas en estética facial.", price: "Según tratamiento" },
      { num: "04", name: "Seguimiento", desc: "Controles y mantenimiento según el tratamiento.", price: "Consultar" },
    ],
    prices: [
      { label: "Tratamiento", val: "Consultar por WhatsApp" },
    ],
    paymentMethods: STANDARD_PAYMENT_METHODS,
    alias: "biodesign.arg",
    faqs: [
      { q: "¿Qué tratamientos ofrecen?", a: "Consultanos por WhatsApp para conocer el menú completo." },
      { q: "¿Dónde atienden?", a: "El servicio de estética tiene atención en Palomar." },
      { q: "¿Tienen Instagram?", a: "Próximamente confirmamos el Instagram de estética." },
      { q: "¿Emiten factura?", a: "Consultanos por WhatsApp para más información." },
    ],
    whatsappNumber: "5491156656212",
    whatsappMessage: "Hola! Me interesa el tratamiento de Estética Facial. Me pueden dar más información?",
    reservoUrl: RESERVO_URL,
    relatedCaseImages: TP_CASE_IMGS,
    nota: "💜 Para estética facial trabajamos con un equipo especializado. Escribinos al WhatsApp de estética.",
  },
];

/** Primeros 6 — grilla "Tratamientos destacados". */
export const mainTreatments: Treatment[] = treatments.slice(0, 6);

/** Restantes 8 — se revelan con "Ver más tratamientos". */
export const moreTreatments: Treatment[] = treatments.slice(6);

/** Mapa slug → tratamiento, para rutas y lookups. */
export const treatmentsBySlug: Record<string, Treatment> = Object.fromEntries(
  treatments.map((t) => [t.slug, t]),
);

export function getTreatment(slug: string): Treatment | undefined {
  return treatmentsBySlug[slug];
}

export const treatmentSlugs: string[] = treatments.map((t) => t.slug);
