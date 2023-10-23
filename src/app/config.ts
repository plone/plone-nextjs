const settings = {
  // apiPath: process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000',
  apiPath: 'https://static.197.123.88.23.clients.your-server.de/api',
};

const config = {
  settings,
};

console.log('config', config.settings.apiPath);

export default config;
