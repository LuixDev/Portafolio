/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pub-c5d7ac2cc17a41d7806e24bef12dffe9.r2.dev",
      },
      {
        protocol: "https",
        hostname: "f005.backblazeb2.com", // 👈 AGREGA ESTE
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
