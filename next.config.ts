/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Required for Docker builds
  experimental: {
    outputFileTracingRoot: undefined,
  },
};

module.exports = nextConfig;