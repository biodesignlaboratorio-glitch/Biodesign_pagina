import type { Metadata } from "next";
import TreatmentGrid from "@/components/treatments/TreatmentGrid";
import Comparador from "@/components/treatments/Comparador";

export const metadata: Metadata = {
  title: "Tratamientos",
  description:
    "Alineadores invisibles Smile Line, ortodoncia, carillas estéticas, blanqueamiento, implantes y más. Compará tratamientos y elegí el ideal para tu sonrisa.",
  alternates: { canonical: "/tratamientos" },
  openGraph: {
    title: "Tratamientos — BIODESIGN",
    description:
      "Alineadores invisibles, ortodoncia, carillas, blanqueamiento, implantes y más.",
    url: "/tratamientos",
  },
};

export default function TratamientosPage() {
  return (
    <>
      <TreatmentGrid />
      <Comparador />
    </>
  );
}
