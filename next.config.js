/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: false,
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
