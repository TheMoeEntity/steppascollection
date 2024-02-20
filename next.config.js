/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "random.imagecdn.app"],
  },
};

module.exports = nextConfig;
