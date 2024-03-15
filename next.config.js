/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  // TODO: 배포를 위한 임시조치
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
