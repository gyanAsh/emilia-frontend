import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Environment variables to expose to the browser
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.BACKEND_URL || "http://localhost:8000",
  },
  // API routes configuration
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${
          process.env.BACKEND_URL || "http://localhost:8000"
        }/:path*`,
      },
    ];
  },
};

export default nextConfig;
