/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 VERY IMPORTANT
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // 👈 ensures it creates folders like /about/index.html
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
