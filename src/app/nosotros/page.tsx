import type { Metadata } from "next";
import NosotrosHero from "@/components/sections/NosotrosHero";
import Team from "@/components/sections/Team";
import Digital from "@/components/sections/Digital";
import Porque from "@/components/sections/Porque";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé el equipo de Biodesign y nuestra infraestructura de odontología digital: escáner intraoral, diseño 3D, laboratorio propio Smile Line y radiología digital.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros — BIODESIGN",
    description:
      "El equipo y la tecnología digital detrás de Biodesign — Odontología & Estética.",
    url: "/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <Team />
      <Digital />
      <Porque />
    </>
  );
}
