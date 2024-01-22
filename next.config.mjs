/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brandslogos.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org"
      },
      {
        protocol: "https",
        hostname: "logodix.com"
      },
      {
        protocol: "https",
        hostname: "www.pinclipart.com"
      },
      {
        protocol: "https",
        hostname: "image.pngaaa.co"
      },
      {
        protocol: "https",
        hostname: "image.pngaaa.com"
      },
      {
        protocol: "https",
        hostname: "juststickers.in"
      },
      {
        protocol: "https",
        hostname: "w1.pngwing.com"
      }
    ]
  }
};

export default nextConfig;
