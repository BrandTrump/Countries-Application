/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
