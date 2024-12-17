/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Required for Docker builds
  experimental: {
    
  },
};

module.exports = nextConfig;