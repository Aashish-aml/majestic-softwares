/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/beta', destination: '/beta/index.html' },
      { source: '/beta.txt', destination: '/beta/index.txt' },
      { source: '/beta/about', destination: '/beta/about.html' },
      { source: '/beta/work', destination: '/beta/work.html' },
      { source: '/beta/services', destination: '/beta/services.html' },
      { source: '/beta/team', destination: '/beta/team.html' },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
