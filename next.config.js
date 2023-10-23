/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rewrite to the backend to avoid CORS
  async rewrites() {
    const apiServerURL =
      process.env.API_SERVER_URL ||
      'http://localhost:8080/Plone/%2B%2Bapi%2B%2B';

    return [
      {
        source: '/\\+\\+api\\+\\+/:slug*',
        destination:
          // 'https://static.197.123.88.23.clients.your-server.de/api/:slug*',
          `${apiServerURL}/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;
