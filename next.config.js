/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['three']);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withTM(
  withBundleAnalyzer({
    reactStrictMode: true,
    output: 'standalone',
    optimizeFonts: true,
    swcMinify: true,
    images: {
      domains: [
        'images.unsplash.com',
        'cdn.jsdelivr.net',
        'static.vecteezy.com',
        'github.com',
      ],
    },
  })
);

module.exports = nextConfig;
