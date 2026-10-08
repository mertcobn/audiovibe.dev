import type { NextConfig } from 'next'

// The Yamaha CL5 console simulator lives in its own Vercel project (github.com/mertcobn/CL5_Web).
// audiovibe.dev/cl5 passes the requests through to it; the visitor stays on audiovibe.dev.
const CL5 = process.env.CL5_ORIGIN ?? 'https://cl5web.vercel.app' // CL5_ORIGIN: a local copy for testing

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // the CL5 project serves its page at its root; the page's files are asked for under /cl5/
      { source: '/cl5', destination: `${CL5}/` },
      { source: '/cl5/:path*', destination: `${CL5}/:path*` },
    ]
  },
}

export default nextConfig
