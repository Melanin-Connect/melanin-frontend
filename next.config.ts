/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  output: "export",
  reactStrictMode: true,
  // Required for Docker builds
  experimental: {
    
  },
};

module.exports = nextConfig;