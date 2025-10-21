import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable standard Next.js dev experience (HMR, fast refresh)
  reactStrictMode: false,
  webpack: (config) => {
    // Do not override watch options in dev; allow Next.js to watch files
    return config;
  },
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
