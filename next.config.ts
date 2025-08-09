import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
     eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // Set this to true if you're running ESLint separately (e.g., in a CI step)
    // and don't want it to block your Next.js build.
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
