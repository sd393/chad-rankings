/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "i.pravatar.cc" },
      { hostname: "images.unsplash.com" },
    ],
  },
}

export default nextConfig
