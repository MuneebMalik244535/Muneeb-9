import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Add the allowed hostname here
  },
};

export default nextConfig;
