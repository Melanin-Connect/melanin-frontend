/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone',
  // output: "export",
  reactStrictMode: true,

  images: {
    domains: ['melaninconnect.xyz', 'res.cloudinary.com'], // Add external domains if needed
    unoptimized: false, // This disables Next.js image optimization
  },
  // Required for Docker builds
  experimental: {
    
  },
};

module.exports = nextConfig;