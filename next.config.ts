import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'flagcdn.com'
      },
      {
        hostname: 'upload.wikimedia.org'
      },
      {
        hostname: 'mainfacts.com'
      }
    ]
  }
};

export default nextConfig;
