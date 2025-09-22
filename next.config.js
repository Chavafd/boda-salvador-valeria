/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  // GitHub Pages project sites work better without basePath for static exports
  // The deployment will handle the subdirectory automatically
  // basePath: '/boda-salvador-valeria',
  // assetPrefix: '/boda-salvador-valeria/',
  trailingSlash: true,
}

module.exports = nextConfig
