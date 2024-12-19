import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['media.licdn.com'], // Add other domains if needed
  },
};

export default nextConfig;
