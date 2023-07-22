/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mdjosimvai.files.wordpress.com",
      },
    ],
  },
};

module.exports = nextConfig;
