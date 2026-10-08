import type { NextConfig } from 'next'

// The Yamaha CL5 console simulator lives in its own Vercel project (github.com/mertcobn/CL5_Web).
// audiovibe.dev/cl5 passes the requests through to it; the visitor stays on audiovibe.dev.
const CL5 = process.env.CL5_ORIGIN ?? 'https://cl5web.vercel.app' // CL5_ORIGIN: a local copy for testing

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/cl5', destination: `${CL5}/cl5/` },
      { source: '/cl5/:path*', destination: `${CL5}/cl5/:path*` },
    ]
  },
}

export default nextConfig
