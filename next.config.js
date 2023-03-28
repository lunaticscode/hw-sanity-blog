/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
  images: {
    domains: ["cdn.sanity.io"],
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
