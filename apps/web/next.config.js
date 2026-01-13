/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@rad-ui/ui"],
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};

module.exports = nextConfig;

