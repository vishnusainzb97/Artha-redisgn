import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Artha-redisgn',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
