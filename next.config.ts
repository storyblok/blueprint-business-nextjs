import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.storyblok.com',
        port: '',
        pathname: '/f/**',
      },
    ],
  },
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors 'self' https://app.storyblok.com`,
          },
        ],
      },
    ]
  },
  // IMPORTANT: this makes all content public, including draft content.
  // The SDK requires the access token to be exposed to the client.
  env: {
    STORYBLOK_DELIVERY_API_TOKEN: process.env.STORYBLOK_DELIVERY_API_TOKEN,
    STORYBLOK_API_BASE_URL: process.env.STORYBLOK_API_BASE_URL,
    STORYBLOK_REGION: process.env.STORYBLOK_REGION,
  },
}

export default nextConfig
