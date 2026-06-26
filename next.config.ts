import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site → export plain HTML to `out/` (served by Netlify / any
  // static host, no Node runtime needed).
  output: "export",
  // Static export can't use the on-demand Image Optimization API.
  images: {
    unoptimized: true,
  },
  // Pin the workspace root so Turbopack doesn't pick a stray parent lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
