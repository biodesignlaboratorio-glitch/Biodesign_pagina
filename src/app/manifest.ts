import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BIODESIGN — Odontología & Estética",
    short_name: "BIODESIGN",
    description:
      "Clínica de odontología y estética en Buenos Aires. Alineadores invisibles, carillas, implantes, blanqueamiento y más.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0C0C",
    theme_color: "#0C0C0C",
    icons: [
      {
        src: "/images/01-biodesign-logo.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
