import type { Metadata } from "next";
import Casos from "@/components/casos/Casos";
import Stats from "@/components/sections/Stats";
import Reviews from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Casos reales de alineadores, carillas, implantes, rehabilitación y blanqueamiento. Mirá el antes y después y las opiniones de nuestros pacientes.",
  alternates: { canonical: "/casos" },
  openGraph: {
    title: "Casos — BIODESIGN",
    description:
      "Antes y después de tratamientos reales y testimonios de pacientes.",
    url: "/casos",
  },
};

export default function CasosPage() {
  return (
    <>
      <Casos />
      <Stats />
      <Reviews />
    </>
  );
}
