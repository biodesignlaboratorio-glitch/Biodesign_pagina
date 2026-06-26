import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { sedes } from "@/data/sedes";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import WhatsappFab from "@/components/widgets/WhatsappFab";
import QuizWidget from "@/components/widgets/QuizWidget";
import RevealManager from "@/components/RevealManager";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Clínica de odontología y estética en Buenos Aires (Caballito y Canning). Alineadores invisibles Smile Line, carillas, implantes, blanqueamiento y más, con tecnología digital y resultados naturales.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BIODESIGN — Odontología & Estética",
    template: "%s — BIODESIGN",
  },
  description,
  applicationName: site.name,
  keywords: [
    "odontología",
    "estética dental",
    "alineadores invisibles",
    "Smile Line",
    "carillas",
    "implantes dentales",
    "blanqueamiento dental",
    "ortodoncia",
    "Caballito",
    "Canning",
    "Buenos Aires",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    title: "BIODESIGN — Odontología & Estética",
    description,
    url: site.url,
    images: [
      {
        url: "/images/02-biodesign.jpg",
        width: 1200,
        height: 630,
        alt: "BIODESIGN — Tu sonrisa perfecta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIODESIGN — Odontología & Estética",
    description,
    images: ["/images/02-biodesign.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0C0C",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${site.url}/#dentist`,
  name: "BIODESIGN — Odontología & Estética",
  url: site.url,
  email: site.email,
  image: `${site.url}/images/02-biodesign.jpg`,
  logo: `${site.url}/images/01-biodesign-logo.jpg`,
  telephone: `+${site.whatsapp.main}`,
  priceRange: "$$",
  sameAs: [site.social.instagram, site.social.facebook],
  department: sedes.map((sede) => ({
    "@type": "Dentist",
    name: sede.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: sede.address[0],
      addressLocality: sede.address[1],
      addressCountry: "AR",
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "[data-reveal]{opacity:1 !important;transform:none !important}",
            }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsappFab />
        <QuizWidget />
        <RevealManager />
      </body>
    </html>
  );
}
