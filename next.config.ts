import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/Resume", destination: "/resume", permanent: true },
      { source: "/resume.pdf", destination: "/Resume.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
