const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/post",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
