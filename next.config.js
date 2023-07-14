/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rewrite to the backend to avoid CORS
  async rewrites() {
    return [
      {
        source: "/\\+\\+api\\+\\+/:slug*",
        destination: "http://localhost:8080/Plone/%2B%2Bapi%2B%2B/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
