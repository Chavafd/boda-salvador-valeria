/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  // Replace 'your-github-username' with your actual GitHub username
  // and 'boda-salvador-valeria' with your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/boda-salvador-valeria' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/boda-salvador-valeria' : '',
}

module.exports = nextConfig
