/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@rad-ui/ui"],
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

