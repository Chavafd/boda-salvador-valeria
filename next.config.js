/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/boda-salvador-valeria' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/boda-salvador-valeria' : '',
}

module.exports = nextConfig
