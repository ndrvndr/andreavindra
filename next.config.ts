import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "andreavindra.vercel.app" }],
        destination: "https://andreavindra.is-a.dev/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
