/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Required for Docker builds
  experimental: {
    outputFileTracingRoot: 'C:/Users/HP/Desktop/Melanin/melanin-frontend',
  },
};

module.exports = nextConfig;