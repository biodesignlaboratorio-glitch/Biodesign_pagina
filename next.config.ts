import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't pick a stray parent lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
