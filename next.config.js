/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'quinnwebsolutions.com',
        defaultLocale: 'en',
      },
    ],
    localeDetection: false,
  },
};

module.exports = nextConfig;
