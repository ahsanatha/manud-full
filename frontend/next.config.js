/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost"],
    unoptimized: true
  },
  experimental: {
    newNextLinkBehavior: false,
  },
}

module.exports = nextConfig
