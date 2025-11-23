import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['isomorphic-dompurify'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('jsdom');
    }
    return config;
  },
  /* config options here */
};

export default nextConfig;
