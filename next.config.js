/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nxyvcyqhdxvfduiebquq.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
