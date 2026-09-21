import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/how-to-improve-iptv-streaming-quality",
        destination: "/blog/improve-iptv-streaming-quality",
        permanent: true,
      },
      {
        source: "/blog/iptv-audio-out-of-sync-causes-and-fixes",
        destination: "/blog/iptv-audio-out-of-sync-fixes",
        permanent: true,
      },
      {
        source: "/blog/how-to-fix-iptv-buffering-smart-tv-firestick-android-tv",
        destination: "/blog/how-to-fix-iptv-buffering",
        permanent: true,
      },
      {
        source: "/blog/what-internet-speed-do-you-need-for-iptv",
        destination: "/blog/internet-speed-for-iptv",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-best-iptv-service-2026-buying-guide",
        destination: "/blog/choose-iptv-service-guide",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-devices-2026",
        destination: "/blog/best-iptv-devices",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

