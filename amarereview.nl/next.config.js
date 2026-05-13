/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'amarereview.nl' },
      { protocol: 'https', hostname: 'amarenl.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
