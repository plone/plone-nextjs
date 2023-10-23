const settings = {
  apiPath: process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000',
};

const config = {
  settings,
};

console.log('config', config.settings.apiPath);

export default config;
