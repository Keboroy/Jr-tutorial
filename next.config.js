/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['bit.ly'],
  },
}

module.exports = nextConfig
