/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  // Temporarily disable basePath to fix GitHub Pages asset issues
  // basePath: process.env.NODE_ENV === 'production' ? '/boda-salvador-valeria' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/boda-salvador-valeria' : '',
}

module.exports = nextConfig
