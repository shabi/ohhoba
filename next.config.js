/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { globalNotFound: true },
  images: { minimumCacheTTL: 2678400 },
};

module.exports = nextConfig;
