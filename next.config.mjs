/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "files.stripe.com",
    ]
  },

  experimental: {
    newNextLinkBehavior: true,
  }
};

export default nextConfig;
