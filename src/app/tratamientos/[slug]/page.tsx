import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTreatment, treatmentSlugs } from "@/data/treatments";
import TreatmentDetail from "@/components/treatments/TreatmentDetail";

type Params = { slug: string };

// All treatment pages are known at build time; 404 anything else.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return treatmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};

  return {
    title: treatment.name,
    description: treatment.description,
    alternates: { canonical: `/tratamientos/${treatment.slug}` },
    openGraph: {
      title: `${treatment.name} — BIODESIGN`,
      description: treatment.description,
      url: `/tratamientos/${treatment.slug}`,
      images: [{ url: treatment.image, alt: treatment.name }],
    },
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  return <TreatmentDetail treatment={treatment} />;
}
