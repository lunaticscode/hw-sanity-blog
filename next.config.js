/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
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
