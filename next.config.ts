import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV,
    APP_URL: process.env.APP_URL,
    APP_DOMAIN: process.env.APP_DOMAIN,
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "http", // ✅ your backend is http
        hostname: "localhost",
        port: "5000", // ✅ add port if not 80/443
        pathname: "/uploads/**", // ✅ limit only to uploads
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${process.env.SERVER_URL}/uploads/:path`,
      },
    ];
  },
};

export default nextConfig;
