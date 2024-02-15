/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "aceternity.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
