const settings = {
  apiPath: process.env.NEXT_PUBLIC_VERCEL_URL
    ? `${process.env.NEXT_PUBLIC_VERCEL_URL}/++api++`
    : 'http://localhost:3000/++api++',
};

const config = {
  settings,
};

export default config;
