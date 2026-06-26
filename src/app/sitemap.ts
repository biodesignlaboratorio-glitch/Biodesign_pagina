import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { treatmentSlugs } from "@/data/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/tratamientos`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/nosotros`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/casos`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const treatments: MetadataRoute.Sitemap = treatmentSlugs.map((slug) => ({
    url: `${base}/tratamientos/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...treatments];
}
