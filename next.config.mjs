/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "navi.com",
      },
      {
        hostname: "**",
        pathname: "/**/*.(png|jpg|jpeg|gif|svg)",
      },
    ],
  },
};

export default nextConfig;
