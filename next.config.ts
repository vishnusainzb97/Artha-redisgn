import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static HTML export for GitHub Pages
  output: "export",

  // Disable server-based image optimization since we are doing a static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
